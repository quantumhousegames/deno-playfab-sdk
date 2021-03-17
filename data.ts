// deno-lint-ignore-file
import { dispatchRequest, RequestOptions } from "./support/runtime.ts";

/** Aborts the pending upload of the requested files. */
export interface AbortFileUploadsRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** The entity to perform this action on. */
  Entity: EntityKey;
  /** Names of the files to have their pending uploads aborted. */
  FileNames: string[];
  /** The expected version of the profile, if set and doesn't match the current version of the profile the operation will not be performed. */
  ProfileVersion?: number;
}

export interface AbortFileUploadsResponse {
  /** The entity id and type. */
  Entity?: EntityKey;
  /** The current version of the profile, can be used for concurrency control during updates. */
  ProfileVersion: number;
}

/** Deletes the requested files from the entity's profile. */
export interface DeleteFilesRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** The entity to perform this action on. */
  Entity: EntityKey;
  /** Names of the files to be deleted. */
  FileNames: string[];
  /** The expected version of the profile, if set and doesn't match the current version of the profile the operation will not be performed. */
  ProfileVersion?: number;
}

export interface DeleteFilesResponse {
  /** The entity id and type. */
  Entity?: EntityKey;
  /** The current version of the profile, can be used for concurrency control during updates. */
  ProfileVersion: number;
}

/** Combined entity type and ID structure which uniquely identifies a single entity. */
export interface EntityKey {
  /** Unique ID of the entity. */
  Id: string;
  /** Entity type. See https://docs.microsoft.com/gaming/playfab/features/data/entities/available-built-in-entity-types */
  Type?: string;
}

/** Finalizes the upload of the requested files. Verifies that the files have been successfully uploaded and moves the file pointers from pending to live. */
export interface FinalizeFileUploadsRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** The entity to perform this action on. */
  Entity: EntityKey;
  /** Names of the files to be finalized. Restricted to a-Z, 0-9, '(', ')', '_', '-' and '.' */
  FileNames: string[];
  /** The current version of the profile, can be used for concurrency control during updates. */
  ProfileVersion: number;
}

export interface FinalizeFileUploadsResponse {
  /** The entity id and type. */
  Entity?: EntityKey;
  /** Collection of metadata for the entity's files */
  Metadata?: GetFileMetadata;
  /** The current version of the profile, can be used for concurrency control during updates. */
  ProfileVersion: number;
}

export interface GetFileMetadata {
  /** Checksum value for the file, can be used to check if the file on the server has changed. */
  Checksum?: string;
  /** Download URL where the file can be retrieved */
  DownloadUrl?: string;
  /** Name of the file */
  FileName?: string;
  /** Last UTC time the file was modified */
  LastModified: string;
  /** Storage service's reported byte count */
  Size: number;
}

/** Returns URLs that may be used to download the files for a profile for a limited length of time. Only returns files that have been successfully uploaded, files that are still pending will either return the old value, if it exists, or nothing. */
export interface GetFilesRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** The entity to perform this action on. */
  Entity: EntityKey;
}

export interface GetFilesResponse {
  /** The entity id and type. */
  Entity?: EntityKey;
  /** Collection of metadata for the entity's files */
  Metadata?: GetFileMetadata;
  /** The current version of the profile, can be used for concurrency control during updates. */
  ProfileVersion: number;
}

/** Gets JSON objects from an entity profile and returns it.  */
export interface GetObjectsRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** The entity to perform this action on. */
  Entity: EntityKey;
  /** Determines whether the object will be returned as an escaped JSON string or as a un-escaped JSON object. Default is JSON object. */
  EscapeObject?: boolean;
}

export interface GetObjectsResponse {
  /** The entity id and type. */
  Entity?: EntityKey;
  /** Requested objects that the calling entity has access to */
  Objects?: ObjectResult;
  /** The current version of the profile, can be used for concurrency control during updates. */
  ProfileVersion: number;
}

export interface InitiateFileUploadMetadata {
  /** Name of the file. */
  FileName?: string;
  /** Location the data should be sent to via an HTTP PUT operation. */
  UploadUrl?: string;
}

/** Returns URLs that may be used to upload the files for a profile 5 minutes. After using the upload calls FinalizeFileUploads must be called to move the file status from pending to live. */
export interface InitiateFileUploadsRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** The entity to perform this action on. */
  Entity: EntityKey;
  /** Names of the files to be set. Restricted to a-Z, 0-9, '(', ')', '_', '-' and '.' */
  FileNames: string[];
  /** The expected version of the profile, if set and doesn't match the current version of the profile the operation will not be performed. */
  ProfileVersion?: number;
}

export interface InitiateFileUploadsResponse {
  /** The entity id and type. */
  Entity?: EntityKey;
  /** The current version of the profile, can be used for concurrency control during updates. */
  ProfileVersion: number;
  /** Collection of file names and upload urls */
  UploadDetails?: InitiateFileUploadMetadata[];
}

export interface ObjectResult {
  /** Un-escaped JSON object, if EscapeObject false or default. */
  DataObject?: Record<string, unknown>;
  /** Escaped string JSON body of the object, if EscapeObject is true. */
  EscapedDataObject?: string;
  /** Name of the object. Restricted to a-Z, 0-9, '(', ')', '_', '-' and '.' */
  ObjectName?: string;
}

export enum OperationTypes {
  Created = "Created",
  Updated = "Updated",
  Deleted = "Deleted",
  None = "None",
}

export interface SetObject {
  /** Body of the object to be saved. If empty and DeleteObject is true object will be deleted if it exists, or no operation will occur if it does not exist. Only one of Object or EscapedDataObject fields may be used. */
  DataObject?: Record<string, unknown>;
  /** Flag to indicate that this object should be deleted. Both DataObject and EscapedDataObject must not be set as well. */
  DeleteObject?: boolean;
  /** Body of the object to be saved as an escaped JSON string. If empty and DeleteObject is true object will be deleted if it exists, or no operation will occur if it does not exist. Only one of DataObject or EscapedDataObject fields may be used. */
  EscapedDataObject?: string;
  /** Name of object. Restricted to a-Z, 0-9, '(', ')', '_', '-' and '.'. */
  ObjectName: string;
}

export interface SetObjectInfo {
  /** Name of the object */
  ObjectName?: string;
  /** Optional reason to explain why the operation was the result that it was. */
  OperationReason?: string;
  /** Indicates which operation was completed, either Created, Updated, Deleted or None. */
  SetResult?: OperationTypes;
}

/** Sets JSON objects on the requested entity profile. May include a version number to be used to perform optimistic concurrency operations during update. If the current version differs from the version in the request the request will be ignored. If no version is set on the request then the value will always be updated if the values differ. Using the version value does not guarantee a write though, ConcurrentEditError may still occur if multiple clients are attempting to update the same profile.  */
export interface SetObjectsRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** The entity to perform this action on. */
  Entity: EntityKey;
  /** Optional field used for concurrency control. By specifying the previously returned value of ProfileVersion from GetProfile API, you can ensure that the object set will only be performed if the profile has not been updated by any other clients since the version you last loaded. */
  ExpectedProfileVersion?: number;
  /** Collection of objects to set on the profile. */
  Objects: SetObject[];
}

export interface SetObjectsResponse {
  /** New version of the entity profile. */
  ProfileVersion: number;
  /** New version of the entity profile. */
  SetResults?: SetObjectInfo[];
}

/**
 * Abort pending file uploads to an entity's profile.
 * @param {AbortFileUploadsRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<AbortFileUploadsResponse>}
 */ 
export function AbortFileUploads(
  request: AbortFileUploadsRequest,
  options: RequestOptions
): Promise<AbortFileUploadsResponse> {
  return dispatchRequest<AbortFileUploadsResponse>(
    "/File/AbortFileUploads",
    request,
    options
  );
}

/**
 * Delete files on an entity's profile.
 * @param {DeleteFilesRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<DeleteFilesResponse>}
 */ 
export function DeleteFiles(
  request: DeleteFilesRequest,
  options: RequestOptions
): Promise<DeleteFilesResponse> {
  return dispatchRequest<DeleteFilesResponse>(
    "/File/DeleteFiles",
    request,
    options
  );
}

/**
 * Finalize file uploads to an entity's profile.
 * @param {FinalizeFileUploadsRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<FinalizeFileUploadsResponse>}
 */ 
export function FinalizeFileUploads(
  request: FinalizeFileUploadsRequest,
  options: RequestOptions
): Promise<FinalizeFileUploadsResponse> {
  return dispatchRequest<FinalizeFileUploadsResponse>(
    "/File/FinalizeFileUploads",
    request,
    options
  );
}

/**
 * Retrieves file metadata from an entity's profile.
 * @param {GetFilesRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetFilesResponse>}
 */ 
export function GetFiles(
  request: GetFilesRequest,
  options: RequestOptions
): Promise<GetFilesResponse> {
  return dispatchRequest<GetFilesResponse>(
    "/File/GetFiles",
    request,
    options
  );
}

/**
 * Initiates file uploads to an entity's profile.
 * @param {InitiateFileUploadsRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<InitiateFileUploadsResponse>}
 */ 
export function InitiateFileUploads(
  request: InitiateFileUploadsRequest,
  options: RequestOptions
): Promise<InitiateFileUploadsResponse> {
  return dispatchRequest<InitiateFileUploadsResponse>(
    "/File/InitiateFileUploads",
    request,
    options
  );
}

/**
 * Retrieves objects from an entity's profile.
 * @param {GetObjectsRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetObjectsResponse>}
 */ 
export function GetObjects(
  request: GetObjectsRequest,
  options: RequestOptions
): Promise<GetObjectsResponse> {
  return dispatchRequest<GetObjectsResponse>(
    "/Object/GetObjects",
    request,
    options
  );
}

/**
 * Sets objects on an entity's profile.
 * @param {SetObjectsRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<SetObjectsResponse>}
 */ 
export function SetObjects(
  request: SetObjectsRequest,
  options: RequestOptions
): Promise<SetObjectsResponse> {
  return dispatchRequest<SetObjectsResponse>(
    "/Object/SetObjects",
    request,
    options
  );
}

