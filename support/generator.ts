interface PropertyDetails {
  type: string;
  description?: string;
  $ref?: string;
  items?: { type?: string; $ref?: string };
}

interface Definition {
  type: string;
  required?: string[];
  properties?: Record<string, PropertyDetails>;
  enum?: string[];
  description?: string;
}

interface Operation {
  operationId: string;
  description?: string;
  parameters: { $ref: string }[];
  responses: { 200: { $ref: string } };
}

function emitInterface(
  typeName: string,
  { properties, required, description }: Definition
): string {
  if (!properties) {
    throw new Error("properties expected");
  }
  return interfaceDecl(
    typeName,
    description,
    Object.keys(properties).map((propName) => {
      const isRequired = required && required.indexOf(propName) !== -1;
      const details = properties[propName];
      const refName = details.$ref;
      let typeName = details.type;

      // Convert objects to Record types.
      if (typeName === "object" && !refName) {
        typeName = "Record<string, unknown>";
      }

      // Convert arrays to literal types with references to
      // the inner type.
      if (typeName === "array") {
        const { $ref: innerRefName, type: innerType } = details.items!;
        if (innerType) {
          typeName = `${innerType}[]`;
        } else if (innerRefName) {
          typeName = `${extractTypeName(innerRefName)}[]`;
        } else {
          throw new Error("unexpected array type");
        }
      }

      // If we have a ref link to it instead.
      if (refName) {
        if (typeName === "object" || typeName === "string") {
          typeName = extractTypeName(refName);
        } else {
          throw new Error(
            `unexpected type: [${typeName}] for ref: [${refName}]`
          );
        }
      }

      return interfaceMemberDecl(
        propName,
        typeName,
        isRequired,
        details.description
      );
    })
  );
}

function interfaceDecl(
  name: string,
  comment?: string,
  members: string[] = []
): string {
  return typeDecl("interface", name, comment, members);
}

function interfaceMemberDecl(
  name: string,
  type: string,
  required = false,
  comment?: string
): string {
  return `${comment ? `/** ${comment} */\n` : ""}${name}${
    !required ? "?" : ""
  }: ${type};`;
}

function emitEnum(
  typeName: string,
  { enum: enumMembers, description }: Definition
): string {
  if (!enumMembers) {
    throw new Error("members expected");
  }
  return enumDecl(typeName, description, enumMembers.map(enumMemberDecl));
}

function enumDecl(
  name: string,
  comment?: string,
  members: string[] = []
): string {
  return typeDecl("enum", name, comment, members);
}

function enumMemberDecl(name: string): string {
  return `${name} = "${name}",`;
}

function typeDecl(
  typeName: "enum" | "interface",
  name: string,
  comment?: string,
  members: string[] = []
): string {
  const body = members.length
    ? `\n${members
        .map((p) =>
          p
            .split("\n")
            .map((ln) => `  ${ln}`)
            .join("\n")
        )
        .join("\n")}\n`
    : "";
  return `${
    comment ? `/** ${comment} */\n` : ""
  }export ${typeName} ${name} {${body}}\n`;
}

function emitApiFunc(
  operationPath: string,
  {
    operationId,
    description,
    parameters: [{ $ref: requestRefName }],
    responses: {
      200: { $ref: responseRefName },
    },
  }: Operation
): string {
  const requestType = extractTypeName(requestRefName);
  const responseType = extractTypeName(responseRefName);
  return (
    `
/**
 ${description ? `* ${description}` : ""}
 * @param {${requestType}} request
 * @param {RequestOptions} options
 * @returns {Promise<${responseType}>}
 */ 
export function ${operationId}(
  request: ${requestType},
  options: RequestOptions
): Promise<${responseType}> {
  return dispatchRequest<${responseType}>(
    "${operationPath}",
    request,
    options
  );
}`.trim() + "\n"
  );
}

function extractTypeName(value: string): string {
  return value.split("/").slice(-1)[0];
}

/**
 * Generates a single source file for the provided input spec.
 */
export function generate(inputSpec: Record<string, unknown>): Uint8Array {
  const fileBuffer: string[] = [];

  fileBuffer.push("// deno-lint-ignore-file\n");
  fileBuffer.push(
    `import { dispatchRequest, RequestOptions } from "./support/runtime.ts";\n\n`
  );

  // Write all type defintions as interfaces.
  const typeDefinitions = inputSpec["definitions"] as Record<
    string,
    Definition
  >;

  const typeNames = Object.keys(typeDefinitions);
  for (const typeName of typeNames) {
    if (typeName === "ApiErrorWrapper") continue;

    const typeDefinition = typeDefinitions[typeName];

    // Print interface.
    if (typeDefinition.type === "object" && typeDefinition.properties) {
      fileBuffer.push(emitInterface(typeName, typeDefinition) + "\n");
      continue;
    }

    // Print enum.
    if (typeDefinition.type === "string" && typeDefinition.enum) {
      fileBuffer.push(emitEnum(typeName, typeDefinition) + "\n");
      continue;
    }

    throw new Error(
      `unexpected definition:\n ${JSON.stringify(typeDefinition)}`
    );
  }

  // Write all type defintions as interfaces.
  const operations = inputSpec["paths"] as Record<string, { post: Operation }>;
  const operationPaths = Object.keys(operations);

  for (const operationPath of operationPaths) {
    const operation = operations[operationPath].post;
    fileBuffer.push(emitApiFunc(operationPath, operation) + "\n");
  }

  return new TextEncoder().encode(fileBuffer.join(""));
}

if (import.meta.main) {
  const inputSpec: Record<string, unknown> = JSON.parse(
    new TextDecoder().decode(Deno.readAllSync(Deno.stdin))
  );
  Deno.writeAllSync(Deno.stdout, generate(inputSpec));
}
