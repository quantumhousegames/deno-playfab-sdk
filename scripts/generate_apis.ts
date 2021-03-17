import { generate } from "../support/generator.ts";

const SPEC_ROOT = "./specs/Swagger/PlayFab";

async function getFile(
  fileEntry: Deno.DirEntry
): Promise<Record<string, unknown>> {
  const fileContents = await Deno.readTextFile(
    `${SPEC_ROOT}/${fileEntry.name}`
  );
  return JSON.parse(fileContents);
}

function srcFileName(fileName: string): string {
  return `${fileName.split(".")[0].toLowerCase()}.ts`;
}

if (import.meta.main) {
  for await (const dirEntry of Deno.readDir(SPEC_ROOT)) {
    if (dirEntry.isDirectory) {
      continue;
    }
    const outName = srcFileName(dirEntry.name);
    console.info(`writing file: ${outName}...`);
    Deno.writeFile(`./${outName}`, generate(await getFile(dirEntry)));
  }
}
