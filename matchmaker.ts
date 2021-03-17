// deno-lint-ignore-file
import { dispatchRequest, RequestOptions } from "./support/runtime.ts";

/** This API allows the external match-making service to confirm that the user has a valid Session Ticket for the title, in order to securely enable match-making. The client passes the user's Session Ticket to the external match-making service, which then passes the Session Ticket in as the AuthorizationTicket in this call. */
export interface AuthUserRequest {
  /** Session Ticket provided by the client. */
  AuthorizationTicket: string;
}

export interface AuthUserResponse {
  /** Boolean indicating if the user has been authorized to use the external match-making service. */
  Authorized: boolean;
  /** PlayFab unique identifier of the account that has been authorized. */
  PlayFabId?: string;
}

/** A unique instance of an item in a user's inventory. Note, to retrieve additional information for an item such as Tags, Description that are the same across all instances of the item, a call to GetCatalogItems is required. The ItemID of can be matched to a catalog entry, which contains the additional information. Also note that Custom Data is only set when the User's specific instance has updated the CustomData via a call to UpdateUserInventoryItemCustomData. Other fields such as UnitPrice and UnitCurrency are only set when the item was granted via a purchase. */
export interface ItemInstance {
  /** Game specific comment associated with this instance when it was added to the user inventory. */
  Annotation?: string;
  /** Array of unique items that were awarded when this catalog item was purchased. */
  BundleContents?: string[];
  /** Unique identifier for the parent inventory item, as defined in the catalog, for object which were added from a bundle or container. */
  BundleParent?: string;
  /** Catalog version for the inventory item, when this instance was created. */
  CatalogVersion?: string;
  /** A set of custom key-value pairs on the instance of the inventory item, which is not to be confused with the catalog item's custom data. */
  CustomData?: Record<string, unknown>;
  /** CatalogItem.DisplayName at the time this item was purchased. */
  DisplayName?: string;
  /** Timestamp for when this instance will expire. */
  Expiration?: string;
  /** Class name for the inventory item, as defined in the catalog. */
  ItemClass?: string;
  /** Unique identifier for the inventory item, as defined in the catalog. */
  ItemId?: string;
  /** Unique item identifier for this specific instance of the item. */
  ItemInstanceId?: string;
  /** Timestamp for when this instance was purchased. */
  PurchaseDate?: string;
  /** Total number of remaining uses, if this is a consumable item. */
  RemainingUses?: number;
  /** Currency type for the cost of the catalog item. Not available when granting items. */
  UnitCurrency?: string;
  /** Cost of the catalog item in the given currency. Not available when granting items. */
  UnitPrice: number;
  /** The number of uses that were added or removed to this item in this call. */
  UsesIncrementedBy?: number;
}

export interface PlayerJoinedRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Unique identifier of the Game Server Instance the user is joining. This must be a Game Server Instance started with the Matchmaker/StartGame API. */
  LobbyId: string;
  /** PlayFab unique identifier for the player joining. */
  PlayFabId: string;
}

export interface PlayerJoinedResponse {}

export interface PlayerLeftRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Unique identifier of the Game Server Instance the user is leaving. This must be a Game Server Instance started with the Matchmaker/StartGame API. */
  LobbyId: string;
  /** PlayFab unique identifier for the player leaving. */
  PlayFabId: string;
}

export interface PlayerLeftResponse {}

export enum Region {
  USCentral = "USCentral",
  USEast = "USEast",
  EUWest = "EUWest",
  Singapore = "Singapore",
  Japan = "Japan",
  Brazil = "Brazil",
  Australia = "Australia",
}

export interface StartGameRequest {
  /** Unique identifier of the previously uploaded build executable which is to be started. */
  Build: string;
  /** Custom command line argument when starting game server process. */
  CustomCommandLineData?: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** HTTP endpoint URL for receiving game status events, if using an external matchmaker. When the game ends, PlayFab will make a POST request to this URL with the X-SecretKey header set to the value of the game's secret and an application/json body of { "EventName": "game_ended", "GameID": "<gameid>" }. */
  ExternalMatchmakerEventEndpoint: string;
  /** Game mode for this Game Server Instance. */
  GameMode: string;
  /** Region with which to associate the server, for filtering. */
  Region: Region;
}

export interface StartGameResponse {
  /** Unique identifier for the game/lobby in the new Game Server Instance. */
  GameID?: string;
  /** IPV4 address of the server */
  ServerIPV4Address?: string;
  /** IPV6 address of the new Game Server Instance. */
  ServerIPV6Address?: string;
  /** Port number for communication with the Game Server Instance. */
  ServerPort: number;
  /** Public DNS name (if any) of the server */
  ServerPublicDNSName?: string;
}

export interface UserInfoRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Minimum catalog version for which data is requested (filters the results to only contain inventory items which have a catalog version of this or higher). */
  MinCatalogVersion: number;
  /** PlayFab unique identifier of the user whose information is being requested. */
  PlayFabId: string;
}

export interface UserInfoResponse {
  /** Array of inventory items in the user's current inventory. */
  Inventory?: ItemInstance[];
  /** Boolean indicating whether the user is a developer. */
  IsDeveloper: boolean;
  /** PlayFab unique identifier of the user whose information was requested. */
  PlayFabId?: string;
  /** Steam unique identifier, if the user has an associated Steam account. */
  SteamId?: string;
  /** Title specific display name, if set. */
  TitleDisplayName?: string;
  /** PlayFab unique user name. */
  Username?: string;
  /** Array of virtual currency balance(s) belonging to the user. */
  VirtualCurrency?: Record<string, unknown>;
  /** Array of remaining times and timestamps for virtual currencies. */
  VirtualCurrencyRechargeTimes?: VirtualCurrencyRechargeTime;
}

export interface VirtualCurrencyRechargeTime {
  /** Maximum value to which the regenerating currency will automatically increment. Note that it can exceed this value through use of the AddUserVirtualCurrency API call. However, it will not regenerate automatically until it has fallen below this value. */
  RechargeMax: number;
  /** Server timestamp in UTC indicating the next time the virtual currency will be incremented. */
  RechargeTime: string;
  /** Time remaining (in seconds) before the next recharge increment of the virtual currency. */
  SecondsToRecharge: number;
}

/**
 * Validates a user with the PlayFab service
 * @param {AuthUserRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<AuthUserResponse>}
 */ 
export function AuthUser(
  request: AuthUserRequest,
  options: RequestOptions
): Promise<AuthUserResponse> {
  return dispatchRequest<AuthUserResponse>(
    "/Matchmaker/AuthUser",
    request,
    options
  );
}

/**
 * Informs the PlayFab game server hosting service that the indicated user has joined the Game Server Instance specified
 * @param {PlayerJoinedRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<PlayerJoinedResponse>}
 */ 
export function PlayerJoined(
  request: PlayerJoinedRequest,
  options: RequestOptions
): Promise<PlayerJoinedResponse> {
  return dispatchRequest<PlayerJoinedResponse>(
    "/Matchmaker/PlayerJoined",
    request,
    options
  );
}

/**
 * Informs the PlayFab game server hosting service that the indicated user has left the Game Server Instance specified
 * @param {PlayerLeftRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<PlayerLeftResponse>}
 */ 
export function PlayerLeft(
  request: PlayerLeftRequest,
  options: RequestOptions
): Promise<PlayerLeftResponse> {
  return dispatchRequest<PlayerLeftResponse>(
    "/Matchmaker/PlayerLeft",
    request,
    options
  );
}

/**
 * Instructs the PlayFab game server hosting service to instantiate a new Game Server Instance
 * @param {StartGameRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<StartGameResponse>}
 */ 
export function StartGame(
  request: StartGameRequest,
  options: RequestOptions
): Promise<StartGameResponse> {
  return dispatchRequest<StartGameResponse>(
    "/Matchmaker/StartGame",
    request,
    options
  );
}

/**
 * Retrieves the relevant details for a specified user, which the external match-making service can then use to compute effective matches
 * @param {UserInfoRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<UserInfoResponse>}
 */ 
export function UserInfo(
  request: UserInfoRequest,
  options: RequestOptions
): Promise<UserInfoResponse> {
  return dispatchRequest<UserInfoResponse>(
    "/Matchmaker/UserInfo",
    request,
    options
  );
}

