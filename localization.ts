// deno-lint-ignore-file
import { dispatchRequest, RequestOptions } from "./support/runtime.ts";

export interface GetLanguageListRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
}

export interface GetLanguageListResponse {
  /** The list of allowed languages, in BCP47 two-letter format */
  LanguageList?: string[];
}

/**
 * Retrieves the list of allowed languages, only accessible by title entities
 * @param {GetLanguageListRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetLanguageListResponse>}
 */ 
export function GetLanguageList(
  request: GetLanguageListRequest,
  options: RequestOptions
): Promise<GetLanguageListResponse> {
  return dispatchRequest<GetLanguageListResponse>(
    "/Locale/GetLanguageList",
    request,
    options
  );
}

