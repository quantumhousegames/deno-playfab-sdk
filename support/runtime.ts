/** All responses from PlayFab have these keys at a minimum. */
export interface RawResponse {
  /** Numerical HTTP response code. */
  code: number;
  /** String HTTP repsonse code. */
  status?: string;
  /** Optional data payload. */
  data?: Record<string, unknown>;
}

/** The structure of any API error message from PlayFab. */
export interface PlayFabError extends Omit<RawResponse, "data"> {
  /** Numerical PlayFab error code. */
  errorCode: number;
  /** PlayFab error code. */
  error?: string;
  /** Detailed description of individual issues with the request object. */
  errorDetails?: Record<string, unknown>;
  /** Error message summary. */
  errorMessage?: string;
}

/** Thrown whenever an API call returns a non-HTTP OK status. */
export class ApiError extends Error {
  constructor(public readonly error: PlayFabError) {
    super(`${error.status}[${error.errorCode}]: ${error.errorMessage}`);
    this.name = "ApiError";
  }
}

/** Represents a client session ticket, available from any Client Login function. */
export interface SessionTicket {
  SessionTicket: string;
  SecretKey?: undefined;
  EntityToken?: undefined;
}

/** Represents a title secret key, available to title admins, from PlayFab Game Manager. */
export interface SecretKey {
  SecretKey: string;
  SessionTicket?: undefined;
  EntityToken?: undefined;
}

/** Represents Entity Session Token, available from the Entity GetEntityToken method. */
export interface EntityToken {
  EntityToken: string;
  SessionTicket?: undefined;
  SecretKey?: undefined;
}

/** Valid security options that may be set on a request.  */
export type SecurityOptions = SecretKey | SessionTicket | EntityToken;

/** Options that may be specified for a request. */
export interface RequestOptions {
  /** The PlayFab title identifier to execute the API request on behalf of. */
  titleId: string;
  /** Optional security option specification. */
  security?: SecurityOptions;
}

/**
 * Makes an API request to PlayFab based on the provided details.
 */
export async function dispatchRequest<T>(
  apiPath: string,
  requestPayload: NonNullable<unknown>,
  requestOptions: RequestOptions
): Promise<Readonly<T>> {
  const url = urlFor(apiPath, requestOptions.titleId);
  const body = JSON.stringify(requestPayload);

  const headers = new Headers();
  headers.set("Content-Type", "application/json");
  headers.set("Accept", "application/json");
  setSecurityHeader(headers, requestOptions.security);

  let requestId;
  if (debugMode) {
    requestId = Math.floor(Math.random() * 1000);
    console.debug(`REQ[${requestId}]:`, inspect({ url, headers, body }));
  }

  const response = await fetch(url, { method: "POST", headers, body });
  const json = await response.json();

  if (debugMode) {
    console.debug(`RES[${requestId}]:`, inspect({ ...response, body: json }));
  }

  if (response.status !== 200) {
    throw new ApiError(json as PlayFabError);
  } else {
    return (json as RawResponse).data as T;
  }
}

let debugMode = false;

/**
 * If enabled console.debug prints are written for each dispatch
 * request/response pair.
 */
export function setDebugMode(state: boolean): void {
  debugMode = state;
}

/** Exposed for testing. */
export function setSecurityHeader(
  headers: Headers,
  securityOptions?: SecurityOptions
): boolean {
  if (!securityOptions) {
    return false;
  }
  if (instanceOfSecretKey(securityOptions)) {
    headers.set("X-SecretKey", securityOptions.SecretKey);
    return true;
  }
  if (instanceOfSessionTicket(securityOptions)) {
    headers.set("X-Authorization", securityOptions.SessionTicket);
    return true;
  }
  if (instanceOfEntityToken(securityOptions)) {
    headers.set("X-EntityToken", securityOptions.EntityToken);
    return true;
  }

  return false;
}

function urlFor(path: string, titleId: string): string {
  return `https://${titleId}.playfabapi.com${path}`;
}

function instanceOfSecretKey(options: SecurityOptions): options is SecretKey {
  return options.SecretKey !== undefined;
}

function instanceOfSessionTicket(
  options: SecurityOptions
): options is SessionTicket {
  return options.SessionTicket !== undefined;
}

function instanceOfEntityToken(
  options: SecurityOptions
): options is EntityToken {
  return options.EntityToken !== undefined;
}

const inspect = Deno && Deno.inspect ? Deno.inspect : JSON.stringify;
