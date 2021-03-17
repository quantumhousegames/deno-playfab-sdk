// deno-lint-ignore-file
import { dispatchRequest, RequestOptions } from "./support/runtime.ts";

export enum EffectType {
  Allow = "Allow",
  Deny = "Deny",
}

/** An entity object and its associated meta data. */
export interface EntityDataObject {
  /** Un-escaped JSON object, if DataAsObject is true. */
  DataObject?: Record<string, unknown>;
  /** Escaped string JSON body of the object, if DataAsObject is default or false. */
  EscapedDataObject?: string;
  /** Name of this object. */
  ObjectName?: string;
}

/** Combined entity type and ID structure which uniquely identifies a single entity. */
export interface EntityKey {
  /** Unique ID of the entity. */
  Id: string;
  /** Entity type. See https://docs.microsoft.com/gaming/playfab/features/data/entities/available-built-in-entity-types */
  Type?: string;
}

export interface EntityLineage {
  /** The Character Id of the associated entity. */
  CharacterId?: string;
  /** The Group Id of the associated entity. */
  GroupId?: string;
  /** The Master Player Account Id of the associated entity. */
  MasterPlayerAccountId?: string;
  /** The Namespace Id of the associated entity. */
  NamespaceId?: string;
  /** The Title Id of the associated entity. */
  TitleId?: string;
  /** The Title Player Account Id of the associated entity. */
  TitlePlayerAccountId?: string;
}

export interface EntityPermissionStatement {
  /** The action this statement effects. May be 'Read', 'Write' or '*' for both read and write. */
  Action: string;
  /** A comment about the statement. Intended solely for bookkeeping and debugging. */
  Comment?: string;
  /** Additional conditions to be applied for entity resources. */
  Condition?: Record<string, unknown>;
  /** The effect this statement will have. It may be either Allow or Deny */
  Effect: EffectType;
  /** The principal this statement will effect. */
  Principal: Record<string, unknown>;
  /** The resource this statements effects. Similar to 'pfrn:data--title![Title ID]/Profile/*' */
  Resource: string;
}

export interface EntityProfileBody {
  /** Avatar URL for the entity. */
  AvatarUrl?: string;
  /** The creation time of this profile in UTC. */
  Created: string;
  /** The display name of the entity. This field may serve different purposes for different entity types. i.e.: for a title player account it could represent the display name of the player, whereas on a character it could be character's name. */
  DisplayName?: string;
  /** The entity id and type. */
  Entity?: EntityKey;
  /** The chain of responsibility for this entity. Use Lineage. */
  EntityChain?: string;
  /** The experiment variants of this profile. */
  ExperimentVariants?: string[];
  /** The files on this profile. */
  Files?: EntityProfileFileMetadata;
  /** The language on this profile. */
  Language?: string;
  /** Leaderboard metadata for the entity. */
  LeaderboardMetadata?: string;
  /** The lineage of this profile. */
  Lineage?: EntityLineage;
  /** The objects on this profile. */
  Objects?: EntityDataObject;
  /** The permissions that govern access to this entity profile and its properties. Only includes permissions set on this profile, not global statements from titles and namespaces. */
  Permissions?: EntityPermissionStatement[];
  /** The statistics on this profile. */
  Statistics?: EntityStatisticValue;
  /** The version number of the profile in persistent storage at the time of the read. Used for optional optimistic concurrency during update. */
  VersionNumber: number;
}

/** An entity file's meta data. To get a download URL call File/GetFiles API. */
export interface EntityProfileFileMetadata {
  /** Checksum value for the file, can be used to check if the file on the server has changed. */
  Checksum?: string;
  /** Name of the file */
  FileName?: string;
  /** Last UTC time the file was modified */
  LastModified: string;
  /** Storage service's reported byte count */
  Size: number;
}

export interface EntityStatisticChildValue {
  /** Child name value, if child statistic */
  ChildName?: string;
  /** Child statistic metadata */
  Metadata?: string;
  /** Child statistic value */
  Value: number;
}

export interface EntityStatisticValue {
  /** Child statistic values */
  ChildStatistics?: EntityStatisticChildValue;
  /** Statistic metadata */
  Metadata?: string;
  /** Statistic name */
  Name?: string;
  /** Statistic value */
  Value?: number;
  /** Statistic version */
  Version: number;
}

/** Given an entity type and entity identifier will retrieve the profile from the entity store. If the profile being retrieved is the caller's, then the read operation is consistent, if not it is an inconsistent read. An inconsistent read means that we do not guarantee all committed writes have occurred before reading the profile, allowing for a stale read. If consistency is important the Version Number on the result can be used to compare which version of the profile any reader has. */
export interface GetEntityProfileRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Determines whether the objects will be returned as an escaped JSON string or as a un-escaped JSON object. Default is JSON string. */
  DataAsObject?: boolean;
  /** The entity to perform this action on. */
  Entity?: EntityKey;
}

export interface GetEntityProfileResponse {
  /** Entity profile */
  Profile?: EntityProfileBody;
}

/** Given a set of entity types and entity identifiers will retrieve all readable profiles properties for the caller. Profiles that the caller is not allowed to read will silently not be included in the results. */
export interface GetEntityProfilesRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Determines whether the objects will be returned as an escaped JSON string or as a un-escaped JSON object. Default is JSON string. */
  DataAsObject?: boolean;
  /** Entity keys of the profiles to load. Must be between 1 and 25 */
  Entities: EntityKey[];
}

export interface GetEntityProfilesResponse {
  /** Entity profiles */
  Profiles?: EntityProfileBody[];
}

/** Retrieves the title access policy that is used before the profile's policy is inspected during a request. If never customized this will return the default starter policy built by PlayFab. */
export interface GetGlobalPolicyRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
}

export interface GetGlobalPolicyResponse {
  /** The permissions that govern access to all entities under this title or namespace. */
  Permissions?: EntityPermissionStatement[];
}

/** Given a master player account id (PlayFab ID), returns all title player accounts associated with it. */
export interface GetTitlePlayersFromMasterPlayerAccountIdsRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Master player account ids. */
  MasterPlayerAccountIds: string[];
  /** Id of title to get players from. */
  TitleId?: string;
}

export interface GetTitlePlayersFromMasterPlayerAccountIdsResponse {
  /** Optional id of title to get players from, required if calling using a master_player_account. */
  TitleId?: string;
  /** Dictionary of master player ids mapped to title player entity keys and id pairs */
  TitlePlayerAccounts?: EntityKey;
}

export enum OperationTypes {
  Created = "Created",
  Updated = "Updated",
  Deleted = "Deleted",
  None = "None",
}

/** This will set the access policy statements on the given entity profile. This is not additive, any existing statements will be replaced with the statements in this request. */
export interface SetEntityProfilePolicyRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** The entity to perform this action on. */
  Entity: EntityKey;
  /** The statements to include in the access policy. */
  Statements?: EntityPermissionStatement[];
}

export interface SetEntityProfilePolicyResponse {
  /** The permissions that govern access to this entity profile and its properties. Only includes permissions set on this profile, not global statements from titles and namespaces. */
  Permissions?: EntityPermissionStatement[];
}

/** Updates the title access policy that is used before the profile's policy is inspected during a request. Policies are compiled and cached for several minutes so an update here may not be reflected in behavior for a short time. */
export interface SetGlobalPolicyRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** The permissions that govern access to all entities under this title or namespace. */
  Permissions?: EntityPermissionStatement[];
}

export interface SetGlobalPolicyResponse {}

/** Given an entity profile, will update its language to the one passed in if the profile's version is equal to the one passed in. */
export interface SetProfileLanguageRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** The entity to perform this action on. */
  Entity?: EntityKey;
  /** The expected version of a profile to perform this update on */
  ExpectedVersion?: number;
  /** The language to set on the given entity. Deletes the profile's language if passed in a null string. */
  Language?: string;
}

export interface SetProfileLanguageResponse {
  /** The type of operation that occured on the profile's language */
  OperationResult?: OperationTypes;
  /** The updated version of the profile after the language update */
  VersionNumber?: number;
}

/**
 * Gets the global title access policy 
 * @param {GetGlobalPolicyRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetGlobalPolicyResponse>}
 */ 
export function GetGlobalPolicy(
  request: GetGlobalPolicyRequest,
  options: RequestOptions
): Promise<GetGlobalPolicyResponse> {
  return dispatchRequest<GetGlobalPolicyResponse>(
    "/Profile/GetGlobalPolicy",
    request,
    options
  );
}

/**
 * Retrieves the entity's profile.
 * @param {GetEntityProfileRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetEntityProfileResponse>}
 */ 
export function GetProfile(
  request: GetEntityProfileRequest,
  options: RequestOptions
): Promise<GetEntityProfileResponse> {
  return dispatchRequest<GetEntityProfileResponse>(
    "/Profile/GetProfile",
    request,
    options
  );
}

/**
 * Retrieves the entity's profile.
 * @param {GetEntityProfilesRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetEntityProfilesResponse>}
 */ 
export function GetProfiles(
  request: GetEntityProfilesRequest,
  options: RequestOptions
): Promise<GetEntityProfilesResponse> {
  return dispatchRequest<GetEntityProfilesResponse>(
    "/Profile/GetProfiles",
    request,
    options
  );
}

/**
 * Retrieves the title player accounts associated with the given master player account.
 * @param {GetTitlePlayersFromMasterPlayerAccountIdsRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetTitlePlayersFromMasterPlayerAccountIdsResponse>}
 */ 
export function GetTitlePlayersFromMasterPlayerAccountIds(
  request: GetTitlePlayersFromMasterPlayerAccountIdsRequest,
  options: RequestOptions
): Promise<GetTitlePlayersFromMasterPlayerAccountIdsResponse> {
  return dispatchRequest<GetTitlePlayersFromMasterPlayerAccountIdsResponse>(
    "/Profile/GetTitlePlayersFromMasterPlayerAccountIds",
    request,
    options
  );
}

/**
 * Sets the global title access policy 
 * @param {SetGlobalPolicyRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<SetGlobalPolicyResponse>}
 */ 
export function SetGlobalPolicy(
  request: SetGlobalPolicyRequest,
  options: RequestOptions
): Promise<SetGlobalPolicyResponse> {
  return dispatchRequest<SetGlobalPolicyResponse>(
    "/Profile/SetGlobalPolicy",
    request,
    options
  );
}

/**
 * Updates the entity's language. The precedence hierarchy for communication to the player is Title Player Account language, Master Player Account language, and then title default language if the first two aren't set or supported.
 * @param {SetProfileLanguageRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<SetProfileLanguageResponse>}
 */ 
export function SetProfileLanguage(
  request: SetProfileLanguageRequest,
  options: RequestOptions
): Promise<SetProfileLanguageResponse> {
  return dispatchRequest<SetProfileLanguageResponse>(
    "/Profile/SetProfileLanguage",
    request,
    options
  );
}

/**
 * Sets the profiles access policy
 * @param {SetEntityProfilePolicyRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<SetEntityProfilePolicyResponse>}
 */ 
export function SetProfilePolicy(
  request: SetEntityProfilePolicyRequest,
  options: RequestOptions
): Promise<SetEntityProfilePolicyResponse> {
  return dispatchRequest<SetEntityProfilePolicyResponse>(
    "/Profile/SetProfilePolicy",
    request,
    options
  );
}

