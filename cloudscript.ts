// deno-lint-ignore-file
import { dispatchRequest, RequestOptions } from "./support/runtime.ts";

export interface AdCampaignAttributionModel {
  /** UTC time stamp of attribution */
  AttributedAt: string;
  /** Attribution campaign identifier */
  CampaignId?: string;
  /** Attribution network name */
  Platform?: string;
}

export enum CloudScriptRevisionOption {
  Live = "Live",
  Latest = "Latest",
  Specific = "Specific",
}

export interface ContactEmailInfoModel {
  /** The email address */
  EmailAddress?: string;
  /** The name of the email info data */
  Name?: string;
  /** The verification status of the email */
  VerificationStatus?: EmailVerificationStatus;
}

export enum ContinentCode {
  AF = "AF",
  AN = "AN",
  AS = "AS",
  EU = "EU",
  NA = "NA",
  OC = "OC",
  SA = "SA",
}

export enum CountryCode {
  AF = "AF",
  AX = "AX",
  AL = "AL",
  DZ = "DZ",
  AS = "AS",
  AD = "AD",
  AO = "AO",
  AI = "AI",
  AQ = "AQ",
  AG = "AG",
  AR = "AR",
  AM = "AM",
  AW = "AW",
  AU = "AU",
  AT = "AT",
  AZ = "AZ",
  BS = "BS",
  BH = "BH",
  BD = "BD",
  BB = "BB",
  BY = "BY",
  BE = "BE",
  BZ = "BZ",
  BJ = "BJ",
  BM = "BM",
  BT = "BT",
  BO = "BO",
  BQ = "BQ",
  BA = "BA",
  BW = "BW",
  BV = "BV",
  BR = "BR",
  IO = "IO",
  BN = "BN",
  BG = "BG",
  BF = "BF",
  BI = "BI",
  KH = "KH",
  CM = "CM",
  CA = "CA",
  CV = "CV",
  KY = "KY",
  CF = "CF",
  TD = "TD",
  CL = "CL",
  CN = "CN",
  CX = "CX",
  CC = "CC",
  CO = "CO",
  KM = "KM",
  CG = "CG",
  CD = "CD",
  CK = "CK",
  CR = "CR",
  CI = "CI",
  HR = "HR",
  CU = "CU",
  CW = "CW",
  CY = "CY",
  CZ = "CZ",
  DK = "DK",
  DJ = "DJ",
  DM = "DM",
  DO = "DO",
  EC = "EC",
  EG = "EG",
  SV = "SV",
  GQ = "GQ",
  ER = "ER",
  EE = "EE",
  ET = "ET",
  FK = "FK",
  FO = "FO",
  FJ = "FJ",
  FI = "FI",
  FR = "FR",
  GF = "GF",
  PF = "PF",
  TF = "TF",
  GA = "GA",
  GM = "GM",
  GE = "GE",
  DE = "DE",
  GH = "GH",
  GI = "GI",
  GR = "GR",
  GL = "GL",
  GD = "GD",
  GP = "GP",
  GU = "GU",
  GT = "GT",
  GG = "GG",
  GN = "GN",
  GW = "GW",
  GY = "GY",
  HT = "HT",
  HM = "HM",
  VA = "VA",
  HN = "HN",
  HK = "HK",
  HU = "HU",
  IS = "IS",
  IN = "IN",
  ID = "ID",
  IR = "IR",
  IQ = "IQ",
  IE = "IE",
  IM = "IM",
  IL = "IL",
  IT = "IT",
  JM = "JM",
  JP = "JP",
  JE = "JE",
  JO = "JO",
  KZ = "KZ",
  KE = "KE",
  KI = "KI",
  KP = "KP",
  KR = "KR",
  KW = "KW",
  KG = "KG",
  LA = "LA",
  LV = "LV",
  LB = "LB",
  LS = "LS",
  LR = "LR",
  LY = "LY",
  LI = "LI",
  LT = "LT",
  LU = "LU",
  MO = "MO",
  MK = "MK",
  MG = "MG",
  MW = "MW",
  MY = "MY",
  MV = "MV",
  ML = "ML",
  MT = "MT",
  MH = "MH",
  MQ = "MQ",
  MR = "MR",
  MU = "MU",
  YT = "YT",
  MX = "MX",
  FM = "FM",
  MD = "MD",
  MC = "MC",
  MN = "MN",
  ME = "ME",
  MS = "MS",
  MA = "MA",
  MZ = "MZ",
  MM = "MM",
  NA = "NA",
  NR = "NR",
  NP = "NP",
  NL = "NL",
  NC = "NC",
  NZ = "NZ",
  NI = "NI",
  NE = "NE",
  NG = "NG",
  NU = "NU",
  NF = "NF",
  MP = "MP",
  NO = "NO",
  OM = "OM",
  PK = "PK",
  PW = "PW",
  PS = "PS",
  PA = "PA",
  PG = "PG",
  PY = "PY",
  PE = "PE",
  PH = "PH",
  PN = "PN",
  PL = "PL",
  PT = "PT",
  PR = "PR",
  QA = "QA",
  RE = "RE",
  RO = "RO",
  RU = "RU",
  RW = "RW",
  BL = "BL",
  SH = "SH",
  KN = "KN",
  LC = "LC",
  MF = "MF",
  PM = "PM",
  VC = "VC",
  WS = "WS",
  SM = "SM",
  ST = "ST",
  SA = "SA",
  SN = "SN",
  RS = "RS",
  SC = "SC",
  SL = "SL",
  SG = "SG",
  SX = "SX",
  SK = "SK",
  SI = "SI",
  SB = "SB",
  SO = "SO",
  ZA = "ZA",
  GS = "GS",
  SS = "SS",
  ES = "ES",
  LK = "LK",
  SD = "SD",
  SR = "SR",
  SJ = "SJ",
  SZ = "SZ",
  SE = "SE",
  CH = "CH",
  SY = "SY",
  TW = "TW",
  TJ = "TJ",
  TZ = "TZ",
  TH = "TH",
  TL = "TL",
  TG = "TG",
  TK = "TK",
  TO = "TO",
  TT = "TT",
  TN = "TN",
  TR = "TR",
  TM = "TM",
  TC = "TC",
  TV = "TV",
  UG = "UG",
  UA = "UA",
  AE = "AE",
  GB = "GB",
  US = "US",
  UM = "UM",
  UY = "UY",
  UZ = "UZ",
  VU = "VU",
  VE = "VE",
  VN = "VN",
  VG = "VG",
  VI = "VI",
  WF = "WF",
  EH = "EH",
  YE = "YE",
  ZM = "ZM",
  ZW = "ZW",
}

export enum EmailVerificationStatus {
  Unverified = "Unverified",
  Pending = "Pending",
  Confirmed = "Confirmed",
}

export interface EmptyResult {}

/** Combined entity type and ID structure which uniquely identifies a single entity. */
export interface EntityKey {
  /** Unique ID of the entity. */
  Id: string;
  /** Entity type. See https://docs.microsoft.com/gaming/playfab/features/data/entities/available-built-in-entity-types */
  Type?: string;
}

export interface ExecuteCloudScriptResult {
  /** Number of PlayFab API requests issued by the CloudScript function */
  APIRequestsIssued: number;
  /** Information about the error, if any, that occurred during execution */
  Error?: ScriptExecutionError;
  ExecutionTimeSeconds: number;
  /** The name of the function that executed */
  FunctionName?: string;
  /** The object returned from the CloudScript function, if any */
  FunctionResult?: Record<string, unknown>;
  /** Flag indicating if the FunctionResult was too large and was subsequently dropped from this event. This only occurs if the total event size is larger than 350KB. */
  FunctionResultTooLarge?: boolean;
  /** Number of external HTTP requests issued by the CloudScript function */
  HttpRequestsIssued: number;
  /** Entries logged during the function execution. These include both entries logged in the function code using log.info() and log.error() and error entries for API and HTTP request failures. */
  Logs?: LogStatement[];
  /** Flag indicating if the logs were too large and were subsequently dropped from this event. This only occurs if the total event size is larger than 350KB after the FunctionResult was removed. */
  LogsTooLarge?: boolean;
  MemoryConsumedBytes: number;
  /** Processor time consumed while executing the function. This does not include time spent waiting on API calls or HTTP requests. */
  ProcessorTimeSeconds: number;
  /** The revision of the CloudScript that executed */
  Revision: number;
}

/** Executes CloudScript with the entity profile that is defined in the request. */
export interface ExecuteEntityCloudScriptRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** The entity to perform this action on. */
  Entity?: EntityKey;
  /** The name of the CloudScript function to execute */
  FunctionName: string;
  /** Object that is passed in to the function as the first argument */
  FunctionParameter?: Record<string, unknown>;
  /** Generate a 'entity_executed_cloudscript' PlayStream event containing the results of the function execution and other contextual information. This event will show up in the PlayStream debugger console for the player in Game Manager. */
  GeneratePlayStreamEvent?: boolean;
  /** Option for which revision of the CloudScript to execute. 'Latest' executes the most recently created revision, 'Live' executes the current live, published revision, and 'Specific' executes the specified revision. The default value is 'Specific', if the SpecificRevision parameter is specified, otherwise it is 'Live'. */
  RevisionSelection?: CloudScriptRevisionOption;
  /** The specific revision to execute, when RevisionSelection is set to 'Specific' */
  SpecificRevision?: number;
}

/** Executes an Azure Function with the profile of the entity that is defined in the request. */
export interface ExecuteFunctionRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** The entity to perform this action on. */
  Entity?: EntityKey;
  /** The name of the CloudScript function to execute */
  FunctionName: string;
  /** Object that is passed in to the function as the FunctionArgument field of the FunctionExecutionContext data structure */
  FunctionParameter?: Record<string, unknown>;
  /** Generate a 'entity_executed_cloudscript_function' PlayStream event containing the results of the function execution and other contextual information. This event will show up in the PlayStream debugger console for the player in Game Manager. */
  GeneratePlayStreamEvent?: boolean;
}

export interface ExecuteFunctionResult {
  /** Error from the CloudScript Azure Function. */
  Error?: FunctionExecutionError;
  /** The amount of time the function took to execute */
  ExecutionTimeMilliseconds: number;
  /** The name of the function that executed */
  FunctionName?: string;
  /** The object returned from the function, if any */
  FunctionResult?: Record<string, unknown>;
  /** Flag indicating if the FunctionResult was too large and was subsequently dropped from this event. */
  FunctionResultTooLarge?: boolean;
}

export interface FunctionExecutionError {
  /** Error code, such as CloudScriptAzureFunctionsExecutionTimeLimitExceeded, CloudScriptAzureFunctionsArgumentSizeExceeded, CloudScriptAzureFunctionsReturnSizeExceeded or CloudScriptAzureFunctionsHTTPRequestError */
  Error?: string;
  /** Details about the error */
  Message?: string;
  /** Point during the execution of the function at which the error occurred, if any */
  StackTrace?: string;
}

export interface FunctionModel {
  /** The address of the function. */
  FunctionAddress?: string;
  /** The name the function was registered under. */
  FunctionName?: string;
  /** The trigger type for the function. */
  TriggerType?: TriggerType;
}

export interface HttpFunctionModel {
  /** The name the function was registered under. */
  FunctionName?: string;
  /** The URL of the function. */
  FunctionUrl?: string;
}

export interface LinkedPlatformAccountModel {
  /** Linked account email of the user on the platform, if available */
  Email?: string;
  /** Authentication platform */
  Platform?: LoginIdentityProvider;
  /** Unique account identifier of the user on the platform */
  PlatformUserId?: string;
  /** Linked account username of the user on the platform, if available */
  Username?: string;
}

/** A title can have many functions, ListHttpFunctions will return a list of all the currently registered HTTP triggered functions for a given title. */
export interface ListFunctionsRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
}

export interface ListFunctionsResult {
  /** The list of functions that are currently registered for the title. */
  Functions?: FunctionModel[];
}

export interface ListHttpFunctionsResult {
  /** The list of HTTP triggered functions that are currently registered for the title. */
  Functions?: HttpFunctionModel[];
}

export interface ListQueuedFunctionsResult {
  /** The list of Queue triggered functions that are currently registered for the title. */
  Functions?: QueuedFunctionModel[];
}

export interface LocationModel {
  /** City name. */
  City?: string;
  /** The two-character continent code for this location */
  ContinentCode?: ContinentCode;
  /** The two-character ISO 3166-1 country code for the country associated with the location */
  CountryCode?: CountryCode;
  /** Latitude coordinate of the geographic location. */
  Latitude?: number;
  /** Longitude coordinate of the geographic location. */
  Longitude?: number;
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

export interface LogStatement {
  /** Optional object accompanying the message as contextual information */
  Data?: Record<string, unknown>;
  /** 'Debug', 'Info', or 'Error' */
  Level?: string;
  Message?: string;
}

export interface MembershipModel {
  /** Whether this membership is active. That is, whether the MembershipExpiration time has been reached. */
  IsActive: boolean;
  /** The time this membership expires */
  MembershipExpiration: string;
  /** The id of the membership */
  MembershipId?: string;
  /** Membership expirations can be explicitly overridden (via game manager or the admin api). If this membership has been overridden, this will be the new expiration time. */
  OverrideExpiration?: string;
  /** Whether the override expiration is set. */
  OverrideIsSet?: boolean;
  /** The list of subscriptions that this player has for this membership */
  Subscriptions?: SubscriptionModel[];
}

/** Identifier by either name or ID. Note that a name may change due to renaming, or reused after being deleted. ID is immutable and unique. */
export interface NameIdentifier {
  /** Id Identifier, if present */
  Id?: string;
  /** Name Identifier, if present */
  Name?: string;
}

export interface PlayerProfileModel {
  /** List of advertising campaigns the player has been attributed to */
  AdCampaignAttributions?: AdCampaignAttributionModel[];
  /** URL of the player's avatar image */
  AvatarUrl?: string;
  /** If the player is currently banned, the UTC Date when the ban expires */
  BannedUntil?: string;
  /** List of all contact email info associated with the player account */
  ContactEmailAddresses?: ContactEmailInfoModel[];
  /** Player record created */
  Created?: string;
  /** Player display name */
  DisplayName?: string;
  /** List of experiment variants for the player. */
  ExperimentVariants?: string[];
  /** UTC time when the player most recently logged in to the title */
  LastLogin?: string;
  /** List of all authentication systems linked to this player account */
  LinkedAccounts?: LinkedPlatformAccountModel[];
  /** List of geographic locations from which the player has logged in to the title */
  Locations?: LocationModel[];
  /** List of memberships for the player, along with whether are expired. */
  Memberships?: MembershipModel[];
  /** Player account origination */
  Origination?: LoginIdentityProvider;
  /** PlayFab player account unique identifier */
  PlayerId?: string;
  /** Publisher this player belongs to */
  PublisherId?: string;
  /** List of configured end points registered for sending the player push notifications */
  PushNotificationRegistrations?: PushNotificationRegistrationModel[];
  /** List of leaderboard statistic values for the player */
  Statistics?: StatisticModel[];
  /** List of player's tags for segmentation */
  Tags?: TagModel[];
  /** Title ID this player profile applies to */
  TitleId?: string;
  /** Sum of the player's purchases made with real-money currencies, converted to US dollars equivalent and represented as a whole number of cents (1/100 USD). For example, 999 indicates nine dollars and ninety-nine cents. */
  TotalValueToDateInUSD?: number;
  /** List of the player's lifetime purchase totals, summed by real-money currency */
  ValuesToDate?: ValueToDateModel[];
}

export interface PlayStreamEventEnvelopeModel {
  /** The ID of the entity the event is about. */
  EntityId?: string;
  /** The type of the entity the event is about. */
  EntityType?: string;
  /** Data specific to this event. */
  EventData?: string;
  /** The name of the event. */
  EventName?: string;
  /** The namespace of the event. */
  EventNamespace?: string;
  /** Settings for the event. */
  EventSettings?: string;
}

export interface PostFunctionResultForEntityTriggeredActionRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** The entity to perform this action on. */
  Entity: EntityKey;
  /** The result of the function execution. */
  FunctionResult: ExecuteFunctionResult;
}

export interface PostFunctionResultForFunctionExecutionRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** The entity to perform this action on. */
  Entity: EntityKey;
  /** The result of the function execution. */
  FunctionResult: ExecuteFunctionResult;
}

export interface PostFunctionResultForPlayerTriggeredActionRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** The entity to perform this action on. */
  Entity?: EntityKey;
  /** The result of the function execution. */
  FunctionResult: ExecuteFunctionResult;
  /** The player profile the function was invoked with. */
  PlayerProfile: PlayerProfileModel;
  /** The triggering PlayStream event, if any, that caused the function to be invoked. */
  PlayStreamEventEnvelope?: PlayStreamEventEnvelopeModel;
}

export interface PostFunctionResultForScheduledTaskRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** The entity to perform this action on. */
  Entity: EntityKey;
  /** The result of the function execution */
  FunctionResult: ExecuteFunctionResult;
  /** The id of the scheduled task that invoked the function. */
  ScheduledTaskId: NameIdentifier;
}

export enum PushNotificationPlatform {
  ApplePushNotificationService = "ApplePushNotificationService",
  GoogleCloudMessaging = "GoogleCloudMessaging",
}

export interface PushNotificationRegistrationModel {
  /** Notification configured endpoint */
  NotificationEndpointARN?: string;
  /** Push notification platform */
  Platform?: PushNotificationPlatform;
}

export interface QueuedFunctionModel {
  /** The connection string for the Azure Storage Account that hosts the queue. */
  ConnectionString?: string;
  /** The name the function was registered under. */
  FunctionName?: string;
  /** The name of the queue that triggers the Azure Function. */
  QueueName?: string;
}

export interface RegisterHttpFunctionRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** The name of the function to register */
  FunctionName: string;
  /** Full URL for Azure Function that implements the function. */
  FunctionUrl: string;
}

/** A title can have many functions, RegisterQueuedFunction associates a function name with a queue name and connection string. */
export interface RegisterQueuedFunctionRequest {
  /** A connection string for the storage account that hosts the queue for the Azure Function. */
  ConnectionString: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** The name of the function to register */
  FunctionName: string;
  /** The name of the queue for the Azure Function. */
  QueueName: string;
}

export interface ScriptExecutionError {
  /** Error code, such as CloudScriptNotFound, JavascriptException, CloudScriptFunctionArgumentSizeExceeded, CloudScriptAPIRequestCountExceeded, CloudScriptAPIRequestError, or CloudScriptHTTPRequestError */
  Error?: string;
  /** Details about the error */
  Message?: string;
  /** Point during the execution of the script at which the error occurred, if any */
  StackTrace?: string;
}

export interface StatisticModel {
  /** Statistic name */
  Name?: string;
  /** Statistic value */
  Value: number;
  /** Statistic version (0 if not a versioned statistic) */
  Version: number;
}

export interface SubscriptionModel {
  /** When this subscription expires. */
  Expiration: string;
  /** The time the subscription was orignially purchased */
  InitialSubscriptionTime: string;
  /** Whether this subscription is currently active. That is, if Expiration > now. */
  IsActive: boolean;
  /** The status of this subscription, according to the subscription provider. */
  Status?: SubscriptionProviderStatus;
  /** The id for this subscription */
  SubscriptionId?: string;
  /** The item id for this subscription from the primary catalog */
  SubscriptionItemId?: string;
  /** The provider for this subscription. Apple or Google Play are supported today. */
  SubscriptionProvider?: string;
}

export enum SubscriptionProviderStatus {
  NoError = "NoError",
  Cancelled = "Cancelled",
  UnknownError = "UnknownError",
  BillingError = "BillingError",
  ProductUnavailable = "ProductUnavailable",
  CustomerDidNotAcceptPriceChange = "CustomerDidNotAcceptPriceChange",
  FreeTrial = "FreeTrial",
  PaymentPending = "PaymentPending",
}

export interface TagModel {
  /** Full value of the tag, including namespace */
  TagValue?: string;
}

export enum TriggerType {
  HTTP = "HTTP",
  Queue = "Queue",
}

export interface UnregisterFunctionRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** The name of the function to unregister */
  FunctionName: string;
}

export interface ValueToDateModel {
  /** ISO 4217 code of the currency used in the purchases */
  Currency?: string;
  /** Total value of the purchases in a whole number of 1/100 monetary units. For example, 999 indicates nine dollars and ninety-nine cents when Currency is 'USD') */
  TotalValue: number;
  /** Total value of the purchases in a string representation of decimal monetary units. For example, '9.99' indicates nine dollars and ninety-nine cents when Currency is 'USD'. */
  TotalValueAsDecimal?: string;
}

/**
 * Cloud Script is one of PlayFab's most versatile features. It allows client code to request execution of any kind of custom server-side functionality you can implement, and it can be used in conjunction with virtually anything.
 * @param {ExecuteEntityCloudScriptRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<ExecuteCloudScriptResult>}
 */ 
export function ExecuteEntityCloudScript(
  request: ExecuteEntityCloudScriptRequest,
  options: RequestOptions
): Promise<ExecuteCloudScriptResult> {
  return dispatchRequest<ExecuteCloudScriptResult>(
    "/CloudScript/ExecuteEntityCloudScript",
    request,
    options
  );
}

/**
 * Cloud Script is one of PlayFab's most versatile features. It allows client code to request execution of any kind of custom server-side functionality you can implement, and it can be used in conjunction with virtually anything.
 * @param {ExecuteFunctionRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<ExecuteFunctionResult>}
 */ 
export function ExecuteFunction(
  request: ExecuteFunctionRequest,
  options: RequestOptions
): Promise<ExecuteFunctionResult> {
  return dispatchRequest<ExecuteFunctionResult>(
    "/CloudScript/ExecuteFunction",
    request,
    options
  );
}

/**
 * Lists all currently registered Azure Functions for a given title.
 * @param {ListFunctionsRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<ListFunctionsResult>}
 */ 
export function ListFunctions(
  request: ListFunctionsRequest,
  options: RequestOptions
): Promise<ListFunctionsResult> {
  return dispatchRequest<ListFunctionsResult>(
    "/CloudScript/ListFunctions",
    request,
    options
  );
}

/**
 * Lists all currently registered HTTP triggered Azure Functions for a given title.
 * @param {ListFunctionsRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<ListHttpFunctionsResult>}
 */ 
export function ListHttpFunctions(
  request: ListFunctionsRequest,
  options: RequestOptions
): Promise<ListHttpFunctionsResult> {
  return dispatchRequest<ListHttpFunctionsResult>(
    "/CloudScript/ListHttpFunctions",
    request,
    options
  );
}

/**
 * Lists all currently registered Queue triggered Azure Functions for a given title.
 * @param {ListFunctionsRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<ListQueuedFunctionsResult>}
 */ 
export function ListQueuedFunctions(
  request: ListFunctionsRequest,
  options: RequestOptions
): Promise<ListQueuedFunctionsResult> {
  return dispatchRequest<ListQueuedFunctionsResult>(
    "/CloudScript/ListQueuedFunctions",
    request,
    options
  );
}

/**
 * Generate an entity PlayStream event for the provided function result.
 * @param {PostFunctionResultForEntityTriggeredActionRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<EmptyResult>}
 */ 
export function PostFunctionResultForEntityTriggeredAction(
  request: PostFunctionResultForEntityTriggeredActionRequest,
  options: RequestOptions
): Promise<EmptyResult> {
  return dispatchRequest<EmptyResult>(
    "/CloudScript/PostFunctionResultForEntityTriggeredAction",
    request,
    options
  );
}

/**
 * Generate an entity PlayStream event for the provided function result.
 * @param {PostFunctionResultForFunctionExecutionRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<EmptyResult>}
 */ 
export function PostFunctionResultForFunctionExecution(
  request: PostFunctionResultForFunctionExecutionRequest,
  options: RequestOptions
): Promise<EmptyResult> {
  return dispatchRequest<EmptyResult>(
    "/CloudScript/PostFunctionResultForFunctionExecution",
    request,
    options
  );
}

/**
 * Generate a player PlayStream event for the provided function result.
 * @param {PostFunctionResultForPlayerTriggeredActionRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<EmptyResult>}
 */ 
export function PostFunctionResultForPlayerTriggeredAction(
  request: PostFunctionResultForPlayerTriggeredActionRequest,
  options: RequestOptions
): Promise<EmptyResult> {
  return dispatchRequest<EmptyResult>(
    "/CloudScript/PostFunctionResultForPlayerTriggeredAction",
    request,
    options
  );
}

/**
 * Generate a PlayStream event for the provided function result.
 * @param {PostFunctionResultForScheduledTaskRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<EmptyResult>}
 */ 
export function PostFunctionResultForScheduledTask(
  request: PostFunctionResultForScheduledTaskRequest,
  options: RequestOptions
): Promise<EmptyResult> {
  return dispatchRequest<EmptyResult>(
    "/CloudScript/PostFunctionResultForScheduledTask",
    request,
    options
  );
}

/**
 * Registers an HTTP triggered Azure function with a title.
 * @param {RegisterHttpFunctionRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<EmptyResult>}
 */ 
export function RegisterHttpFunction(
  request: RegisterHttpFunctionRequest,
  options: RequestOptions
): Promise<EmptyResult> {
  return dispatchRequest<EmptyResult>(
    "/CloudScript/RegisterHttpFunction",
    request,
    options
  );
}

/**
 * Registers a queue triggered Azure Function with a title.
 * @param {RegisterQueuedFunctionRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<EmptyResult>}
 */ 
export function RegisterQueuedFunction(
  request: RegisterQueuedFunctionRequest,
  options: RequestOptions
): Promise<EmptyResult> {
  return dispatchRequest<EmptyResult>(
    "/CloudScript/RegisterQueuedFunction",
    request,
    options
  );
}

/**
 * Unregisters an Azure Function with a title.
 * @param {UnregisterFunctionRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<EmptyResult>}
 */ 
export function UnregisterFunction(
  request: UnregisterFunctionRequest,
  options: RequestOptions
): Promise<EmptyResult> {
  return dispatchRequest<EmptyResult>(
    "/CloudScript/UnregisterFunction",
    request,
    options
  );
}

