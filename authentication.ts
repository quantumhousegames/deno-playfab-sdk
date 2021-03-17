// deno-lint-ignore-file
import { dispatchRequest, RequestOptions } from "./support/runtime.ts";

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

/** This API must be called with X-SecretKey, X-Authentication or X-EntityToken headers. An optional EntityKey may be included to attempt to set the resulting EntityToken to a specific entity, however the entity must be a relation of the caller, such as the master_player_account of a character. If sending X-EntityToken the account will be marked as freshly logged in and will issue a new token. If using X-Authentication or X-EntityToken the header must still be valid and cannot be expired or revoked. */
export interface GetEntityTokenRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** The entity to perform this action on. */
  Entity?: EntityKey;
}

export interface GetEntityTokenResponse {
  /** The entity id and type. */
  Entity?: EntityKey;
  /** The token used to set X-EntityToken for all entity based API calls. */
  EntityToken?: string;
  /** The time the token will expire, if it is an expiring token, in UTC. */
  TokenExpiration?: string;
}

export enum IdentifiedDeviceType {
  Unknown = "Unknown",
  XboxOne = "XboxOne",
  Scarlett = "Scarlett",
}

export enum LoginIdentityProvider {
  Unknown = "Unknown",
  PlayFab = "PlayFab",
  Custom = "Custom",
  GameCenter = "GameCenter",
  GooglePlay = "GooglePlay",
  Steam = "Steam",
  XBoxLive = "XBoxLive",
  PSN = "PSN",
  Kongregate = "Kongregate",
  Facebook = "Facebook",
  IOSDevice = "IOSDevice",
  AndroidDevice = "AndroidDevice",
  Twitch = "Twitch",
  WindowsHello = "WindowsHello",
  GameServer = "GameServer",
  CustomServer = "CustomServer",
  NintendoSwitch = "NintendoSwitch",
  FacebookInstantGames = "FacebookInstantGames",
  OpenIdConnect = "OpenIdConnect",
  Apple = "Apple",
  NintendoSwitchAccount = "NintendoSwitchAccount",
}

/** Given an entity token, validates that it hasn't expired or been revoked and will return details of the owner. */
export interface ValidateEntityTokenRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Client EntityToken */
  EntityToken: string;
}

export interface ValidateEntityTokenResponse {
  /** The entity id and type. */
  Entity?: EntityKey;
  /** The authenticated device for this entity, for the given login */
  IdentifiedDeviceType?: IdentifiedDeviceType;
  /** The identity provider for this entity, for the given login */
  IdentityProvider?: LoginIdentityProvider;
  /** The lineage of this profile. */
  Lineage?: EntityLineage;
}

/**
 * Method to exchange a legacy AuthenticationTicket or title SecretKey for an Entity Token or to refresh a still valid Entity Token.
 * @param {GetEntityTokenRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetEntityTokenResponse>}
 */ 
export function GetEntityToken(
  request: GetEntityTokenRequest,
  options: RequestOptions
): Promise<GetEntityTokenResponse> {
  return dispatchRequest<GetEntityTokenResponse>(
    "/Authentication/GetEntityToken",
    request,
    options
  );
}

/**
 * Method for a server to validate a client provided EntityToken. Only callable by the title entity.
 * @param {ValidateEntityTokenRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<ValidateEntityTokenResponse>}
 */ 
export function ValidateEntityToken(
  request: ValidateEntityTokenRequest,
  options: RequestOptions
): Promise<ValidateEntityTokenResponse> {
  return dispatchRequest<ValidateEntityTokenResponse>(
    "/Authentication/ValidateEntityToken",
    request,
    options
  );
}

