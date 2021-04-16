// deno-lint-ignore-file
import { dispatchRequest, RequestOptions } from "./support/runtime.ts";

/** If the task instance has already completed, there will be no-op. */
export interface AbortTaskInstanceRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** ID of a task instance that is being aborted. */
  TaskInstanceId: string;
}

export interface ActionsOnPlayersInSegmentTaskParameter {
  /** ID of the action to perform on each player in segment. */
  ActionId: string;
  /** ID of the segment to perform actions on. */
  SegmentId: string;
}

export interface ActionsOnPlayersInSegmentTaskSummary {
  /** UTC timestamp when the task completed. */
  CompletedAt?: string;
  /** Error message for last processing attempt, if an error occured. */
  ErrorMessage?: string;
  /** Flag indicating if the error was fatal, if false job will be retried. */
  ErrorWasFatal?: boolean;
  /** Estimated time remaining in seconds. */
  EstimatedSecondsRemaining?: number;
  /** Progress represented as percentage. */
  PercentComplete?: number;
  /** If manually scheduled, ID of user who scheduled the task. */
  ScheduledByUserId?: string;
  /** UTC timestamp when the task started. */
  StartedAt: string;
  /** Current status of the task instance. */
  Status?: TaskInstanceStatus;
  /** Identifier of the task this instance belongs to. */
  TaskIdentifier?: NameIdentifier;
  /** ID of the task instance. */
  TaskInstanceId?: string;
  /** Total players in segment when task was started. */
  TotalPlayersInSegment?: number;
  /** Total number of players that have had the actions applied to. */
  TotalPlayersProcessed?: number;
}

export interface AdCampaignAttribution {
  /** UTC time stamp of attribution */
  AttributedAt: string;
  /** Attribution campaign identifier */
  CampaignId?: string;
  /** Attribution network name */
  Platform?: string;
}

export interface AdCampaignAttributionModel {
  /** UTC time stamp of attribution */
  AttributedAt: string;
  /** Attribution campaign identifier */
  CampaignId?: string;
  /** Attribution network name */
  Platform?: string;
}

export interface AdCampaignSegmentFilter {
  /** Campaign id. */
  CampaignId?: string;
  /** Campaign source. */
  CampaignSource?: string;
  /** Campaign comparison. */
  Comparison?: SegmentFilterComparison;
}

export interface AddLocalizedNewsRequest {
  /** Localized body text of the news. */
  Body: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Language of the news item. */
  Language: string;
  /** Unique id of the updated news item. */
  NewsId: string;
  /** Localized title (headline) of the news item. */
  Title: string;
}

export interface AddLocalizedNewsResult {}

export interface AddNewsRequest {
  /** Default body text of the news. */
  Body: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Time this news was published. If not set, defaults to now. */
  Timestamp?: string;
  /** Default title (headline) of the news item. */
  Title: string;
}

export interface AddNewsResult {
  /** Unique id of the new news item */
  NewsId?: string;
}

/** This API will trigger a player_tag_added event and add a tag with the given TagName and PlayFabID to the corresponding player profile. TagName can be used for segmentation and it is limited to 256 characters. Also there is a limit on the number of tags a title can have. */
export interface AddPlayerTagRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
  PlayFabId: string;
  /** Unique tag for player profile. */
  TagName: string;
}

export interface AddPlayerTagResult {}

export interface AddServerBuildRequest {
  /** server host regions in which this build should be running and available */
  ActiveRegions?: Region[];
  /** unique identifier for the build executable */
  BuildId: string;
  /** appended to the end of the command line when starting game servers */
  CommandLineTemplate?: string;
  /** developer comment(s) for this build */
  Comment?: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** path to the game server executable. Defaults to gameserver.exe */
  ExecutablePath?: string;
  /** maximum number of game server instances that can run on a single host machine */
  MaxGamesPerHost: number;
  /** minimum capacity of additional game server instances that can be started before the autoscaling service starts new host machines (given the number of current running host machines and game server instances) */
  MinFreeGameSlots: number;
}

export interface AddServerBuildResult {
  /** array of regions where this build can used, when it is active */
  ActiveRegions?: Region[];
  /** unique identifier for this build executable */
  BuildId?: string;
  /** appended to the end of the command line when starting game servers */
  CommandLineTemplate?: string;
  /** developer comment(s) for this build */
  Comment?: string;
  /** path to the game server executable. Defaults to gameserver.exe */
  ExecutablePath?: string;
  /** maximum number of game server instances that can run on a single host machine */
  MaxGamesPerHost: number;
  /** minimum capacity of additional game server instances that can be started before the autoscaling service starts new host machines (given the number of current running host machines and game server instances) */
  MinFreeGameSlots: number;
  /** the current status of the build validation and processing steps */
  Status?: GameBuildStatus;
  /** time this build was last modified (or uploaded, if this build has never been modified) */
  Timestamp: string;
  /** Unique identifier for the title, found in the Settings > Game Properties section of the PlayFab developer site when a title has been selected. */
  TitleId?: string;
}

export interface AddUserVirtualCurrencyRequest {
  /** Amount to be added to the user balance of the specified virtual currency. Maximum VC balance is Int32 (2,147,483,647). Any increase over this value will be discarded. */
  Amount: number;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** PlayFab unique identifier of the user whose virtual currency balance is to be increased. */
  PlayFabId: string;
  /** Name of the virtual currency which is to be incremented. */
  VirtualCurrency: string;
}

/** This operation is additive. Any new currencies defined in the array will be added to the set of those available for the title, while any CurrencyCode identifiers matching existing ones in the game will be overwritten with the new values. */
export interface AddVirtualCurrencyTypesRequest {
  /** List of virtual currencies and their initial deposits (the amount a user is granted when signing in for the first time) to the title */
  VirtualCurrencies: VirtualCurrencyData[];
}

export interface AllPlayersSegmentFilter {}

export interface ApiCondition {
  /** Require that API calls contain an RSA encrypted payload or signed headers. */
  HasSignatureOrEncryption?: Conditionals;
}

export enum AuthTokenType {
  Email = "Email",
}

/** Contains information for a ban. */
export interface BanInfo {
  /** The active state of this ban. Expired bans may still have this value set to true but they will have no effect. */
  Active: boolean;
  /** The unique Ban Id associated with this ban. */
  BanId?: string;
  /** The time when this ban was applied. */
  Created?: string;
  /** The time when this ban expires. Permanent bans do not have expiration date. */
  Expires?: string;
  /** The IP address on which the ban was applied. May affect multiple players. */
  IPAddress?: string;
  /** The MAC address on which the ban was applied. May affect multiple players. */
  MACAddress?: string;
  /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
  PlayFabId?: string;
  /** The reason why this ban was applied. */
  Reason?: string;
}

export interface BanPlayerSegmentAction {
  /** Ban hours duration. */
  BanHours?: number;
  /** Reason for ban. */
  ReasonForBan?: string;
}

/** Represents a single ban request. */
export interface BanRequest {
  /** The duration in hours for the ban. Leave this blank for a permanent ban. */
  DurationInHours?: number;
  /** IP address to be banned. May affect multiple players. */
  IPAddress?: string;
  /** MAC address to be banned. May affect multiple players. */
  MACAddress?: string;
  /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
  PlayFabId: string;
  /** The reason for this ban. Maximum 140 characters. */
  Reason?: string;
}

/** The existence of each user will not be verified. When banning by IP or MAC address, multiple players may be affected, so use this feature with caution. Returns information about the new bans. */
export interface BanUsersRequest {
  /** List of ban requests to be applied. Maximum 100. */
  Bans: BanRequest[];
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
}

export interface BanUsersResult {
  /** Information on the bans that were applied */
  BanData?: BanInfo[];
}

export interface BlankResult {}

/** A purchasable item from the item catalog */
export interface CatalogItem {
  /** defines the bundle properties for the item - bundles are items which contain other items, including random drop tables and virtual currencies */
  Bundle?: CatalogItemBundleInfo;
  /** if true, then an item instance of this type can be used to grant a character to a user. */
  CanBecomeCharacter: boolean;
  /** catalog version for this item */
  CatalogVersion?: string;
  /** defines the consumable properties (number of uses, timeout) for the item */
  Consumable?: CatalogItemConsumableInfo;
  /** defines the container properties for the item - what items it contains, including random drop tables and virtual currencies, and what item (if any) is required to open it via the UnlockContainerItem API */
  Container?: CatalogItemContainerInfo;
  /** game specific custom data */
  CustomData?: string;
  /** text description of item, to show in-game */
  Description?: string;
  /** text name for the item, to show in-game */
  DisplayName?: string;
  /** If the item has IsLImitedEdition set to true, and this is the first time this ItemId has been defined as a limited edition item, this value determines the total number of instances to allocate for the title. Once this limit has been reached, no more instances of this ItemId can be created, and attempts to purchase or grant it will return a Result of false for that ItemId. If the item has already been defined to have a limited edition count, or if this value is less than zero, it will be ignored. */
  InitialLimitedEditionCount: number;
  /** BETA: If true, then only a fixed number can ever be granted. */
  IsLimitedEdition: boolean;
  /** if true, then only one item instance of this type will exist and its remaininguses will be incremented instead. RemainingUses will cap out at Int32.Max (2,147,483,647). All subsequent increases will be discarded */
  IsStackable: boolean;
  /** if true, then an item instance of this type can be traded between players using the trading APIs */
  IsTradable: boolean;
  /** class to which the item belongs */
  ItemClass?: string;
  /** unique identifier for this item */
  ItemId: string;
  /** URL to the item image. For Facebook purchase to display the image on the item purchase page, this must be set to an HTTP URL. */
  ItemImageUrl?: string;
  /** override prices for this item for specific currencies */
  RealCurrencyPrices?: Record<string, unknown>;
  /** list of item tags */
  Tags?: string[];
  /** price of this item in virtual currencies and "RM" (the base Real Money purchase price, in USD pennies) */
  VirtualCurrencyPrices?: Record<string, unknown>;
}

export interface CatalogItemBundleInfo {
  /** unique ItemId values for all items which will be added to the player inventory when the bundle is added */
  BundledItems?: string[];
  /** unique TableId values for all RandomResultTable objects which are part of the bundle (random tables will be resolved and add the relevant items to the player inventory when the bundle is added) */
  BundledResultTables?: string[];
  /** virtual currency types and balances which will be added to the player inventory when the bundle is added */
  BundledVirtualCurrencies?: Record<string, unknown>;
}

export interface CatalogItemConsumableInfo {
  /** number of times this object can be used, after which it will be removed from the player inventory */
  UsageCount?: number;
  /** duration in seconds for how long the item will remain in the player inventory - once elapsed, the item will be removed (recommended minimum value is 5 seconds, as lower values can cause the item to expire before operations depending on this item's details have completed) */
  UsagePeriod?: number;
  /** all inventory item instances in the player inventory sharing a non-null UsagePeriodGroup have their UsagePeriod values added together, and share the result - when that period has elapsed, all the items in the group will be removed */
  UsagePeriodGroup?: string;
}

/** Containers are inventory items that can hold other items defined in the catalog, as well as virtual currency, which is added to the player inventory when the container is unlocked, using the UnlockContainerItem API. The items can be anything defined in the catalog, as well as RandomResultTable objects which will be resolved when the container is unlocked. Containers and their keys should be defined as Consumable (having a limited number of uses) in their catalog defintiions, unless the intent is for the player to be able to re-use them infinitely. */
export interface CatalogItemContainerInfo {
  /** unique ItemId values for all items which will be added to the player inventory, once the container has been unlocked */
  ItemContents?: string[];
  /** ItemId for the catalog item used to unlock the container, if any (if not specified, a call to UnlockContainerItem will open the container, adding the contents to the player inventory and currency balances) */
  KeyItemId?: string;
  /** unique TableId values for all RandomResultTable objects which are part of the container (once unlocked, random tables will be resolved and add the relevant items to the player inventory) */
  ResultTableContents?: string[];
  /** virtual currency types and balances which will be added to the player inventory when the container is unlocked */
  VirtualCurrencyContents?: Record<string, unknown>;
}

/** This returns the total number of these items available. */
export interface CheckLimitedEditionItemAvailabilityRequest {
  /** Which catalog is being updated. If null, uses the default catalog. */
  CatalogVersion?: string;
  /** The item to check for. */
  ItemId: string;
}

export interface CheckLimitedEditionItemAvailabilityResult {
  /** The amount of the specified resource remaining. */
  Amount: number;
}

export interface CloudScriptFile {
  /** Contents of the Cloud Script javascript. Must be string-escaped javascript. */
  FileContents: string;
  /** Name of the javascript file. These names are not used internally by the server, they are only for developer organizational purposes. */
  Filename: string;
}

export interface CloudScriptTaskParameter {
  /** Argument to pass to the CloudScript function. */
  Argument?: Record<string, unknown>;
  /** Name of the CloudScript function to execute. */
  FunctionName?: string;
}

export interface CloudScriptTaskSummary {
  /** UTC timestamp when the task completed. */
  CompletedAt?: string;
  /** Estimated time remaining in seconds. */
  EstimatedSecondsRemaining?: number;
  /** Progress represented as percentage. */
  PercentComplete?: number;
  /** Result of CloudScript execution */
  Result?: ExecuteCloudScriptResult;
  /** If manually scheduled, ID of user who scheduled the task. */
  ScheduledByUserId?: string;
  /** UTC timestamp when the task started. */
  StartedAt: string;
  /** Current status of the task instance. */
  Status?: TaskInstanceStatus;
  /** Identifier of the task this instance belongs to. */
  TaskIdentifier?: NameIdentifier;
  /** ID of the task instance. */
  TaskInstanceId?: string;
}

export interface CloudScriptVersionStatus {
  /** Most recent revision for this Cloud Script version */
  LatestRevision: number;
  /** Published code revision for this Cloud Script version */
  PublishedRevision: number;
  /** Version number */
  Version: number;
}

export enum Conditionals {
  Any = "Any",
  True = "True",
  False = "False",
}

export interface ContactEmailInfo {
  /** The email address */
  EmailAddress?: string;
  /** The name of the email info data */
  Name?: string;
  /** The verification status of the email */
  VerificationStatus?: EmailVerificationStatus;
}

export interface ContactEmailInfoModel {
  /** The email address */
  EmailAddress?: string;
  /** The name of the email info data */
  Name?: string;
  /** The verification status of the email */
  VerificationStatus?: EmailVerificationStatus;
}

export interface ContentInfo {
  /** Key of the content */
  Key?: string;
  /** Last modified time */
  LastModified: string;
  /** Size of the content in bytes */
  Size: number;
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

/** Task name is unique within a title. Using a task name that's already taken will cause a name conflict error. Too many create-task requests within a short time will cause a create conflict error. */
export interface CreateActionsOnPlayerSegmentTaskRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Description the task */
  Description?: string;
  /** Whether the schedule is active. Inactive schedule will not trigger task execution. */
  IsActive: boolean;
  /** Name of the task. This is a unique identifier for tasks in the title. */
  Name: string;
  /** Task details related to segment and action */
  Parameter: ActionsOnPlayersInSegmentTaskParameter;
  /** Cron expression for the run schedule of the task. The expression should be in UTC. */
  Schedule?: string;
}

/** Task name is unique within a title. Using a task name that's already taken will cause a name conflict error. Too many create-task requests within a short time will cause a create conflict error. */
export interface CreateCloudScriptTaskRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Description the task */
  Description?: string;
  /** Whether the schedule is active. Inactive schedule will not trigger task execution. */
  IsActive: boolean;
  /** Name of the task. This is a unique identifier for tasks in the title. */
  Name: string;
  /** Task details related to CloudScript */
  Parameter: CloudScriptTaskParameter;
  /** Cron expression for the run schedule of the task. The expression should be in UTC. */
  Schedule?: string;
}

/** Task name is unique within a title. Using a task name that's already taken will cause a name conflict error. Too many create-task requests within a short time will cause a create conflict error. */
export interface CreateInsightsScheduledScalingTaskRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Description the task */
  Description?: string;
  /** Whether the schedule is active. Inactive schedule will not trigger task execution. */
  IsActive: boolean;
  /** Name of the task. This is a unique identifier for tasks in the title. */
  Name: string;
  /** Task details related to Insights Scaling */
  Parameter: InsightsScalingTaskParameter;
  /** Cron expression for the run schedule of the task. The expression should be in UTC. */
  Schedule?: string;
}

export interface CreateOpenIdConnectionRequest {
  /** The client ID given by the ID provider. */
  ClientId: string;
  /** The client secret given by the ID provider. */
  ClientSecret: string;
  /** A name for the connection that identifies it within the title. */
  ConnectionId: string;
  /** Ignore 'nonce' claim in identity tokens. */
  IgnoreNonce?: boolean;
  /** The discovery document URL to read issuer information from. This must be the absolute URL to the JSON OpenId Configuration document and must be accessible from the internet. If you don't know it, try your issuer URL followed by "/.well-known/openid-configuration". For example, if the issuer is https://example.com, try https://example.com/.well-known/openid-configuration */
  IssuerDiscoveryUrl?: string;
  /** Manually specified information for an OpenID Connect issuer. */
  IssuerInformation?: OpenIdIssuerInformation;
}

/** Player Shared Secret Keys are used for the call to Client/GetTitlePublicKey, which exchanges the shared secret for an RSA CSP blob to be used to encrypt the payload of account creation requests when that API requires a signature header. */
export interface CreatePlayerSharedSecretRequest {
  /** Friendly name for this key */
  FriendlyName?: string;
}

export interface CreatePlayerSharedSecretResult {
  /** The player shared secret to use when calling Client/GetTitlePublicKey */
  SecretKey?: string;
}

/** Statistics are numeric values, with each statistic in the title also generating a leaderboard. The ResetInterval enables automatically resetting leaderboards on a specified interval. Upon reset, the statistic updates to a new version with no values (effectively removing all players from the leaderboard). The previous version's statistic values are also archived for retrieval, if needed (see GetPlayerStatisticVersions). Statistics not created via a call to CreatePlayerStatisticDefinition by default have a VersionChangeInterval of Never, meaning they do not reset on a schedule, but they can be set to do so via a call to UpdatePlayerStatisticDefinition. Once a statistic has been reset (sometimes referred to as versioned or incremented), the now-previous version can still be written to for up a short, pre-defined period (currently 10 seconds), to prevent issues with levels completing around the time of the reset. Also, once reset, the historical statistics for players in the title may be retrieved using the URL specified in the version information (GetPlayerStatisticVersions). The AggregationMethod determines what action is taken when a new statistic value is submitted - always update with the new value (Last), use the highest of the old and new values (Max), use the smallest (Min), or add them together (Sum). */
export interface CreatePlayerStatisticDefinitionRequest {
  /** the aggregation method to use in updating the statistic (defaults to last) */
  AggregationMethod?: StatisticAggregationMethod;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** unique name of the statistic */
  StatisticName: string;
  /** interval at which the values of the statistic for all players are reset (resets begin at the next interval boundary) */
  VersionChangeInterval?: StatisticResetIntervalOption;
}

export interface CreatePlayerStatisticDefinitionResult {
  /** created statistic definition */
  Statistic?: PlayerStatisticDefinition;
}

/** Send all the segment details part of CreateSegmentRequest */
export interface CreateSegmentRequest {
  /** Segment model with all of the segment properties data. */
  SegmentModel: SegmentModel;
}

export interface CreateSegmentResponse {
  /** Error message. */
  ErrorMessage?: string;
  /** Segment id. */
  SegmentId?: string;
}

export interface CreateTaskResult {
  /** ID of the task */
  TaskId?: string;
}

export enum Currency {
  AED = "AED",
  AFN = "AFN",
  ALL = "ALL",
  AMD = "AMD",
  ANG = "ANG",
  AOA = "AOA",
  ARS = "ARS",
  AUD = "AUD",
  AWG = "AWG",
  AZN = "AZN",
  BAM = "BAM",
  BBD = "BBD",
  BDT = "BDT",
  BGN = "BGN",
  BHD = "BHD",
  BIF = "BIF",
  BMD = "BMD",
  BND = "BND",
  BOB = "BOB",
  BRL = "BRL",
  BSD = "BSD",
  BTN = "BTN",
  BWP = "BWP",
  BYR = "BYR",
  BZD = "BZD",
  CAD = "CAD",
  CDF = "CDF",
  CHF = "CHF",
  CLP = "CLP",
  CNY = "CNY",
  COP = "COP",
  CRC = "CRC",
  CUC = "CUC",
  CUP = "CUP",
  CVE = "CVE",
  CZK = "CZK",
  DJF = "DJF",
  DKK = "DKK",
  DOP = "DOP",
  DZD = "DZD",
  EGP = "EGP",
  ERN = "ERN",
  ETB = "ETB",
  EUR = "EUR",
  FJD = "FJD",
  FKP = "FKP",
  GBP = "GBP",
  GEL = "GEL",
  GGP = "GGP",
  GHS = "GHS",
  GIP = "GIP",
  GMD = "GMD",
  GNF = "GNF",
  GTQ = "GTQ",
  GYD = "GYD",
  HKD = "HKD",
  HNL = "HNL",
  HRK = "HRK",
  HTG = "HTG",
  HUF = "HUF",
  IDR = "IDR",
  ILS = "ILS",
  IMP = "IMP",
  INR = "INR",
  IQD = "IQD",
  IRR = "IRR",
  ISK = "ISK",
  JEP = "JEP",
  JMD = "JMD",
  JOD = "JOD",
  JPY = "JPY",
  KES = "KES",
  KGS = "KGS",
  KHR = "KHR",
  KMF = "KMF",
  KPW = "KPW",
  KRW = "KRW",
  KWD = "KWD",
  KYD = "KYD",
  KZT = "KZT",
  LAK = "LAK",
  LBP = "LBP",
  LKR = "LKR",
  LRD = "LRD",
  LSL = "LSL",
  LYD = "LYD",
  MAD = "MAD",
  MDL = "MDL",
  MGA = "MGA",
  MKD = "MKD",
  MMK = "MMK",
  MNT = "MNT",
  MOP = "MOP",
  MRO = "MRO",
  MUR = "MUR",
  MVR = "MVR",
  MWK = "MWK",
  MXN = "MXN",
  MYR = "MYR",
  MZN = "MZN",
  NAD = "NAD",
  NGN = "NGN",
  NIO = "NIO",
  NOK = "NOK",
  NPR = "NPR",
  NZD = "NZD",
  OMR = "OMR",
  PAB = "PAB",
  PEN = "PEN",
  PGK = "PGK",
  PHP = "PHP",
  PKR = "PKR",
  PLN = "PLN",
  PYG = "PYG",
  QAR = "QAR",
  RON = "RON",
  RSD = "RSD",
  RUB = "RUB",
  RWF = "RWF",
  SAR = "SAR",
  SBD = "SBD",
  SCR = "SCR",
  SDG = "SDG",
  SEK = "SEK",
  SGD = "SGD",
  SHP = "SHP",
  SLL = "SLL",
  SOS = "SOS",
  SPL = "SPL",
  SRD = "SRD",
  STD = "STD",
  SVC = "SVC",
  SYP = "SYP",
  SZL = "SZL",
  THB = "THB",
  TJS = "TJS",
  TMT = "TMT",
  TND = "TND",
  TOP = "TOP",
  TRY = "TRY",
  TTD = "TTD",
  TVD = "TVD",
  TWD = "TWD",
  TZS = "TZS",
  UAH = "UAH",
  UGX = "UGX",
  USD = "USD",
  UYU = "UYU",
  UZS = "UZS",
  VEF = "VEF",
  VND = "VND",
  VUV = "VUV",
  WST = "WST",
  XAF = "XAF",
  XCD = "XCD",
  XDR = "XDR",
  XOF = "XOF",
  XPF = "XPF",
  YER = "YER",
  ZAR = "ZAR",
  ZMW = "ZMW",
  ZWD = "ZWD",
}

export interface DeleteContentRequest {
  /** Key of the content item to be deleted */
  Key: string;
}

/** Deletes all data associated with the master player account, including data from all titles the player has played, such as statistics, custom data, inventory, purchases, virtual currency balances, characters, group memberships, publisher data, credential data, account linkages, friends list and PlayStream event history. Removes the player from all leaderboards and player search indexes. Note, this API queues the player for deletion and returns a receipt immediately. Record the receipt ID for future reference. It may take some time before all player data is fully deleted. Upon completion of the deletion, an email will be sent to the notification email address configured for the title confirming the deletion. Until the player data is fully deleted, attempts to recreate the player with the same user account in the same title will fail with the 'AccountDeleted' error. It is highly recommended to know the impact of the deletion by calling GetPlayedTitleList, before calling this API. */
export interface DeleteMasterPlayerAccountRequest {
  /** Developer created string to identify a user without PlayFab ID */
  MetaData?: string;
  /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
  PlayFabId: string;
}

export interface DeleteMasterPlayerAccountResult {
  /** A notification email with this job receipt Id will be sent to the title notification email address when deletion is complete. */
  JobReceiptId?: string;
  /** List of titles from which the player's data will be deleted. */
  TitleIds?: string[];
}

export interface DeleteOpenIdConnectionRequest {
  /** unique name of the connection */
  ConnectionId: string;
}

/** Deletes all data associated with the player, including statistics, custom data, inventory, purchases, virtual currency balances, characters and shared group memberships. Removes the player from all leaderboards and player search indexes. Does not delete PlayStream event history associated with the player. Does not delete the publisher user account that created the player in the title nor associated data such as username, password, email address, account linkages, or friends list. Note, this API queues the player for deletion and returns immediately. It may take several minutes or more before all player data is fully deleted. Until the player data is fully deleted, attempts to recreate the player with the same user account in the same title will fail with the 'AccountDeleted' error. */
export interface DeletePlayerRequest {
  /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
  PlayFabId: string;
}

export interface DeletePlayerResult {}

export interface DeletePlayerSegmentAction {}

/** Player Shared Secret Keys are used for the call to Client/GetTitlePublicKey, which exchanges the shared secret for an RSA CSP blob to be used to encrypt the payload of account creation requests when that API requires a signature header. */
export interface DeletePlayerSharedSecretRequest {
  /** The shared secret key to delete */
  SecretKey?: string;
}

export interface DeletePlayerSharedSecretResult {}

export interface DeletePlayerStatisticSegmentAction {
  /** Statistic name. */
  StatisticName?: string;
}

/** Send segment id planning to delete part of DeleteSegmentRequest object */
export interface DeleteSegmentRequest {
  /** Segment id. */
  SegmentId: string;
}

export interface DeleteSegmentsResponse {
  /** Error message. */
  ErrorMessage?: string;
}

/** This non-reversible operation will permanently delete the requested store. */
export interface DeleteStoreRequest {
  /** catalog version of the store to delete. If null, uses the default catalog. */
  CatalogVersion?: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** unqiue identifier for the store which is to be deleted */
  StoreId: string;
}

export interface DeleteStoreResult {}

/** After a task is deleted, for tracking purposes, the task instances belonging to this task will still remain. They will become orphaned and does not belongs to any task. Executions of any in-progress task instances will continue. If the task specified does not exist, the deletion is considered a success. */
export interface DeleteTaskRequest {
  /** Specify either the task ID or the name of task to be deleted. */
  Identifier?: NameIdentifier;
}

/** Will delete all the title data associated with the given override label. */
export interface DeleteTitleDataOverrideRequest {
  /** Name of the override. */
  OverrideLabel: string;
}

export interface DeleteTitleDataOverrideResult {}

/** Deletes all data associated with the title, including catalog, virtual currencies, leaderboard statistics, Cloud Script revisions, segment definitions, event rules, tasks, add-ons, secret keys, data encryption keys, and permission policies. Removes the title from its studio and removes all associated developer roles and permissions. Does not delete PlayStream event history associated with the title. Note, this API queues the title for deletion and returns immediately. It may take several hours or more before all title data is fully deleted. All player accounts in the title must be deleted before deleting the title. If any player accounts exist, the API will return a 'TitleContainsUserAccounts' error. Until the title data is fully deleted, attempts to call APIs with the title will fail with the 'TitleDeleted' error. */
export interface DeleteTitleRequest {}

export interface DeleteTitleResult {}

export enum EffectType {
  Allow = "Allow",
  Deny = "Deny",
}

export interface EmailNotificationSegmentAction {
  /** Email template id. */
  EmailTemplateId?: string;
  /** Email template name. */
  EmailTemplateName?: string;
}

export enum EmailVerificationStatus {
  Unverified = "Unverified",
  Pending = "Pending",
  Confirmed = "Confirmed",
}

export interface EmptyResponse {}

/** Combined entity type and ID structure which uniquely identifies a single entity. */
export interface EntityKey {
  /** Unique ID of the entity. */
  Id: string;
  /** Entity type. See https://docs.microsoft.com/gaming/playfab/features/data/entities/available-built-in-entity-types */
  Type?: string;
}

export interface ExecuteAzureFunctionSegmentAction {
  /** Azure function. */
  AzureFunction?: string;
  /** Azure function parameter. */
  FunctionParameter?: Record<string, unknown>;
  /** Generate play stream event. */
  GenerateFunctionExecutedEvents: boolean;
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

export interface ExecuteCloudScriptSegmentAction {
  /** Cloud script function. */
  CloudScriptFunction?: string;
  /** Generate play stream event. */
  CloudScriptPublishResultsToPlayStream: boolean;
  /** Cloud script function parameter. */
  FunctionParameter?: Record<string, unknown>;
  /** Cloud script function parameter json text. */
  FunctionParameterJson?: string;
}

/** Exports all data associated with the master player account, including data from all titles the player has played, such as statistics, custom data, inventory, purchases, virtual currency balances, characters, group memberships, publisher data, credential data, account linkages, friends list and PlayStream event history. Note, this API queues the player for export and returns a receipt immediately. Record the receipt ID for future reference. It may take some time before the export is available for download. Upon completion of the export, an email containing the URL to download the export dump will be sent to the notification email address configured for the title. */
export interface ExportMasterPlayerDataRequest {
  /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
  PlayFabId: string;
}

export interface ExportMasterPlayerDataResult {
  /** An email with this job receipt Id containing the export download link will be sent to the title notification email address when the export is complete. */
  JobReceiptId?: string;
}

export interface FirstLoginDateSegmentFilter {
  /** First player login date comparison. */
  Comparison?: SegmentFilterComparison;
  /** First player login date. */
  LogInDate: string;
}

export interface FirstLoginTimespanSegmentFilter {
  /** First player login duration comparison. */
  Comparison?: SegmentFilterComparison;
  /** First player login duration. */
  DurationInMinutes: number;
}

export enum GameBuildStatus {
  Available = "Available",
  Validating = "Validating",
  InvalidBuildPackage = "InvalidBuildPackage",
  Processing = "Processing",
  FailedToProcess = "FailedToProcess",
}

export interface GameModeInfo {
  /** specific game mode type */
  Gamemode: string;
  /** maximum user count a specific Game Server Instance can support */
  MaxPlayerCount: number;
  /** minimum user count required for this Game Server Instance to continue (usually 1) */
  MinPlayerCount: number;
  /** whether to start as an open session, meaning that players can matchmake into it (defaults to true) */
  StartOpen?: boolean;
}

export enum GenericErrorCodes {
  Success = "Success",
  UnkownError = "UnkownError",
  InvalidParams = "InvalidParams",
  AccountNotFound = "AccountNotFound",
  AccountBanned = "AccountBanned",
  InvalidUsernameOrPassword = "InvalidUsernameOrPassword",
  InvalidTitleId = "InvalidTitleId",
  InvalidEmailAddress = "InvalidEmailAddress",
  EmailAddressNotAvailable = "EmailAddressNotAvailable",
  InvalidUsername = "InvalidUsername",
  InvalidPassword = "InvalidPassword",
  UsernameNotAvailable = "UsernameNotAvailable",
  InvalidSteamTicket = "InvalidSteamTicket",
  AccountAlreadyLinked = "AccountAlreadyLinked",
  LinkedAccountAlreadyClaimed = "LinkedAccountAlreadyClaimed",
  InvalidFacebookToken = "InvalidFacebookToken",
  AccountNotLinked = "AccountNotLinked",
  FailedByPaymentProvider = "FailedByPaymentProvider",
  CouponCodeNotFound = "CouponCodeNotFound",
  InvalidContainerItem = "InvalidContainerItem",
  ContainerNotOwned = "ContainerNotOwned",
  KeyNotOwned = "KeyNotOwned",
  InvalidItemIdInTable = "InvalidItemIdInTable",
  InvalidReceipt = "InvalidReceipt",
  ReceiptAlreadyUsed = "ReceiptAlreadyUsed",
  ReceiptCancelled = "ReceiptCancelled",
  GameNotFound = "GameNotFound",
  GameModeNotFound = "GameModeNotFound",
  InvalidGoogleToken = "InvalidGoogleToken",
  UserIsNotPartOfDeveloper = "UserIsNotPartOfDeveloper",
  InvalidTitleForDeveloper = "InvalidTitleForDeveloper",
  TitleNameConflicts = "TitleNameConflicts",
  UserisNotValid = "UserisNotValid",
  ValueAlreadyExists = "ValueAlreadyExists",
  BuildNotFound = "BuildNotFound",
  PlayerNotInGame = "PlayerNotInGame",
  InvalidTicket = "InvalidTicket",
  InvalidDeveloper = "InvalidDeveloper",
  InvalidOrderInfo = "InvalidOrderInfo",
  RegistrationIncomplete = "RegistrationIncomplete",
  InvalidPlatform = "InvalidPlatform",
  UnknownError = "UnknownError",
  SteamApplicationNotOwned = "SteamApplicationNotOwned",
  WrongSteamAccount = "WrongSteamAccount",
  TitleNotActivated = "TitleNotActivated",
  RegistrationSessionNotFound = "RegistrationSessionNotFound",
  NoSuchMod = "NoSuchMod",
  FileNotFound = "FileNotFound",
  DuplicateEmail = "DuplicateEmail",
  ItemNotFound = "ItemNotFound",
  ItemNotOwned = "ItemNotOwned",
  ItemNotRecycleable = "ItemNotRecycleable",
  ItemNotAffordable = "ItemNotAffordable",
  InvalidVirtualCurrency = "InvalidVirtualCurrency",
  WrongVirtualCurrency = "WrongVirtualCurrency",
  WrongPrice = "WrongPrice",
  NonPositiveValue = "NonPositiveValue",
  InvalidRegion = "InvalidRegion",
  RegionAtCapacity = "RegionAtCapacity",
  ServerFailedToStart = "ServerFailedToStart",
  NameNotAvailable = "NameNotAvailable",
  InsufficientFunds = "InsufficientFunds",
  InvalidDeviceID = "InvalidDeviceID",
  InvalidPushNotificationToken = "InvalidPushNotificationToken",
  NoRemainingUses = "NoRemainingUses",
  InvalidPaymentProvider = "InvalidPaymentProvider",
  PurchaseInitializationFailure = "PurchaseInitializationFailure",
  DuplicateUsername = "DuplicateUsername",
  InvalidBuyerInfo = "InvalidBuyerInfo",
  NoGameModeParamsSet = "NoGameModeParamsSet",
  BodyTooLarge = "BodyTooLarge",
  ReservedWordInBody = "ReservedWordInBody",
  InvalidTypeInBody = "InvalidTypeInBody",
  InvalidRequest = "InvalidRequest",
  ReservedEventName = "ReservedEventName",
  InvalidUserStatistics = "InvalidUserStatistics",
  NotAuthenticated = "NotAuthenticated",
  StreamAlreadyExists = "StreamAlreadyExists",
  ErrorCreatingStream = "ErrorCreatingStream",
  StreamNotFound = "StreamNotFound",
  InvalidAccount = "InvalidAccount",
  PurchaseDoesNotExist = "PurchaseDoesNotExist",
  InvalidPurchaseTransactionStatus = "InvalidPurchaseTransactionStatus",
  APINotEnabledForGameClientAccess = "APINotEnabledForGameClientAccess",
  NoPushNotificationARNForTitle = "NoPushNotificationARNForTitle",
  BuildAlreadyExists = "BuildAlreadyExists",
  BuildPackageDoesNotExist = "BuildPackageDoesNotExist",
  CustomAnalyticsEventsNotEnabledForTitle = "CustomAnalyticsEventsNotEnabledForTitle",
  InvalidSharedGroupId = "InvalidSharedGroupId",
  NotAuthorized = "NotAuthorized",
  MissingTitleGoogleProperties = "MissingTitleGoogleProperties",
  InvalidItemProperties = "InvalidItemProperties",
  InvalidPSNAuthCode = "InvalidPSNAuthCode",
  InvalidItemId = "InvalidItemId",
  PushNotEnabledForAccount = "PushNotEnabledForAccount",
  PushServiceError = "PushServiceError",
  ReceiptDoesNotContainInAppItems = "ReceiptDoesNotContainInAppItems",
  ReceiptContainsMultipleInAppItems = "ReceiptContainsMultipleInAppItems",
  InvalidBundleID = "InvalidBundleID",
  JavascriptException = "JavascriptException",
  InvalidSessionTicket = "InvalidSessionTicket",
  UnableToConnectToDatabase = "UnableToConnectToDatabase",
  InternalServerError = "InternalServerError",
  InvalidReportDate = "InvalidReportDate",
  ReportNotAvailable = "ReportNotAvailable",
  DatabaseThroughputExceeded = "DatabaseThroughputExceeded",
  InvalidGameTicket = "InvalidGameTicket",
  ExpiredGameTicket = "ExpiredGameTicket",
  GameTicketDoesNotMatchLobby = "GameTicketDoesNotMatchLobby",
  LinkedDeviceAlreadyClaimed = "LinkedDeviceAlreadyClaimed",
  DeviceAlreadyLinked = "DeviceAlreadyLinked",
  DeviceNotLinked = "DeviceNotLinked",
  PartialFailure = "PartialFailure",
  PublisherNotSet = "PublisherNotSet",
  ServiceUnavailable = "ServiceUnavailable",
  VersionNotFound = "VersionNotFound",
  RevisionNotFound = "RevisionNotFound",
  InvalidPublisherId = "InvalidPublisherId",
  DownstreamServiceUnavailable = "DownstreamServiceUnavailable",
  APINotIncludedInTitleUsageTier = "APINotIncludedInTitleUsageTier",
  DAULimitExceeded = "DAULimitExceeded",
  APIRequestLimitExceeded = "APIRequestLimitExceeded",
  InvalidAPIEndpoint = "InvalidAPIEndpoint",
  BuildNotAvailable = "BuildNotAvailable",
  ConcurrentEditError = "ConcurrentEditError",
  ContentNotFound = "ContentNotFound",
  CharacterNotFound = "CharacterNotFound",
  CloudScriptNotFound = "CloudScriptNotFound",
  ContentQuotaExceeded = "ContentQuotaExceeded",
  InvalidCharacterStatistics = "InvalidCharacterStatistics",
  PhotonNotEnabledForTitle = "PhotonNotEnabledForTitle",
  PhotonApplicationNotFound = "PhotonApplicationNotFound",
  PhotonApplicationNotAssociatedWithTitle = "PhotonApplicationNotAssociatedWithTitle",
  InvalidEmailOrPassword = "InvalidEmailOrPassword",
  FacebookAPIError = "FacebookAPIError",
  InvalidContentType = "InvalidContentType",
  KeyLengthExceeded = "KeyLengthExceeded",
  DataLengthExceeded = "DataLengthExceeded",
  TooManyKeys = "TooManyKeys",
  FreeTierCannotHaveVirtualCurrency = "FreeTierCannotHaveVirtualCurrency",
  MissingAmazonSharedKey = "MissingAmazonSharedKey",
  AmazonValidationError = "AmazonValidationError",
  InvalidPSNIssuerId = "InvalidPSNIssuerId",
  PSNInaccessible = "PSNInaccessible",
  ExpiredAuthToken = "ExpiredAuthToken",
  FailedToGetEntitlements = "FailedToGetEntitlements",
  FailedToConsumeEntitlement = "FailedToConsumeEntitlement",
  TradeAcceptingUserNotAllowed = "TradeAcceptingUserNotAllowed",
  TradeInventoryItemIsAssignedToCharacter = "TradeInventoryItemIsAssignedToCharacter",
  TradeInventoryItemIsBundle = "TradeInventoryItemIsBundle",
  TradeStatusNotValidForCancelling = "TradeStatusNotValidForCancelling",
  TradeStatusNotValidForAccepting = "TradeStatusNotValidForAccepting",
  TradeDoesNotExist = "TradeDoesNotExist",
  TradeCancelled = "TradeCancelled",
  TradeAlreadyFilled = "TradeAlreadyFilled",
  TradeWaitForStatusTimeout = "TradeWaitForStatusTimeout",
  TradeInventoryItemExpired = "TradeInventoryItemExpired",
  TradeMissingOfferedAndAcceptedItems = "TradeMissingOfferedAndAcceptedItems",
  TradeAcceptedItemIsBundle = "TradeAcceptedItemIsBundle",
  TradeAcceptedItemIsStackable = "TradeAcceptedItemIsStackable",
  TradeInventoryItemInvalidStatus = "TradeInventoryItemInvalidStatus",
  TradeAcceptedCatalogItemInvalid = "TradeAcceptedCatalogItemInvalid",
  TradeAllowedUsersInvalid = "TradeAllowedUsersInvalid",
  TradeInventoryItemDoesNotExist = "TradeInventoryItemDoesNotExist",
  TradeInventoryItemIsConsumed = "TradeInventoryItemIsConsumed",
  TradeInventoryItemIsStackable = "TradeInventoryItemIsStackable",
  TradeAcceptedItemsMismatch = "TradeAcceptedItemsMismatch",
  InvalidKongregateToken = "InvalidKongregateToken",
  FeatureNotConfiguredForTitle = "FeatureNotConfiguredForTitle",
  NoMatchingCatalogItemForReceipt = "NoMatchingCatalogItemForReceipt",
  InvalidCurrencyCode = "InvalidCurrencyCode",
  NoRealMoneyPriceForCatalogItem = "NoRealMoneyPriceForCatalogItem",
  TradeInventoryItemIsNotTradable = "TradeInventoryItemIsNotTradable",
  TradeAcceptedCatalogItemIsNotTradable = "TradeAcceptedCatalogItemIsNotTradable",
  UsersAlreadyFriends = "UsersAlreadyFriends",
  LinkedIdentifierAlreadyClaimed = "LinkedIdentifierAlreadyClaimed",
  CustomIdNotLinked = "CustomIdNotLinked",
  TotalDataSizeExceeded = "TotalDataSizeExceeded",
  DeleteKeyConflict = "DeleteKeyConflict",
  InvalidXboxLiveToken = "InvalidXboxLiveToken",
  ExpiredXboxLiveToken = "ExpiredXboxLiveToken",
  ResettableStatisticVersionRequired = "ResettableStatisticVersionRequired",
  NotAuthorizedByTitle = "NotAuthorizedByTitle",
  NoPartnerEnabled = "NoPartnerEnabled",
  InvalidPartnerResponse = "InvalidPartnerResponse",
  APINotEnabledForGameServerAccess = "APINotEnabledForGameServerAccess",
  StatisticNotFound = "StatisticNotFound",
  StatisticNameConflict = "StatisticNameConflict",
  StatisticVersionClosedForWrites = "StatisticVersionClosedForWrites",
  StatisticVersionInvalid = "StatisticVersionInvalid",
  APIClientRequestRateLimitExceeded = "APIClientRequestRateLimitExceeded",
  InvalidJSONContent = "InvalidJSONContent",
  InvalidDropTable = "InvalidDropTable",
  StatisticVersionAlreadyIncrementedForScheduledInterval = "StatisticVersionAlreadyIncrementedForScheduledInterval",
  StatisticCountLimitExceeded = "StatisticCountLimitExceeded",
  StatisticVersionIncrementRateExceeded = "StatisticVersionIncrementRateExceeded",
  ContainerKeyInvalid = "ContainerKeyInvalid",
  CloudScriptExecutionTimeLimitExceeded = "CloudScriptExecutionTimeLimitExceeded",
  NoWritePermissionsForEvent = "NoWritePermissionsForEvent",
  CloudScriptFunctionArgumentSizeExceeded = "CloudScriptFunctionArgumentSizeExceeded",
  CloudScriptAPIRequestCountExceeded = "CloudScriptAPIRequestCountExceeded",
  CloudScriptAPIRequestError = "CloudScriptAPIRequestError",
  CloudScriptHTTPRequestError = "CloudScriptHTTPRequestError",
  InsufficientGuildRole = "InsufficientGuildRole",
  GuildNotFound = "GuildNotFound",
  OverLimit = "OverLimit",
  EventNotFound = "EventNotFound",
  InvalidEventField = "InvalidEventField",
  InvalidEventName = "InvalidEventName",
  CatalogNotConfigured = "CatalogNotConfigured",
  OperationNotSupportedForPlatform = "OperationNotSupportedForPlatform",
  SegmentNotFound = "SegmentNotFound",
  StoreNotFound = "StoreNotFound",
  InvalidStatisticName = "InvalidStatisticName",
  TitleNotQualifiedForLimit = "TitleNotQualifiedForLimit",
  InvalidServiceLimitLevel = "InvalidServiceLimitLevel",
  ServiceLimitLevelInTransition = "ServiceLimitLevelInTransition",
  CouponAlreadyRedeemed = "CouponAlreadyRedeemed",
  GameServerBuildSizeLimitExceeded = "GameServerBuildSizeLimitExceeded",
  GameServerBuildCountLimitExceeded = "GameServerBuildCountLimitExceeded",
  VirtualCurrencyCountLimitExceeded = "VirtualCurrencyCountLimitExceeded",
  VirtualCurrencyCodeExists = "VirtualCurrencyCodeExists",
  TitleNewsItemCountLimitExceeded = "TitleNewsItemCountLimitExceeded",
  InvalidTwitchToken = "InvalidTwitchToken",
  TwitchResponseError = "TwitchResponseError",
  ProfaneDisplayName = "ProfaneDisplayName",
  UserAlreadyAdded = "UserAlreadyAdded",
  InvalidVirtualCurrencyCode = "InvalidVirtualCurrencyCode",
  VirtualCurrencyCannotBeDeleted = "VirtualCurrencyCannotBeDeleted",
  IdentifierAlreadyClaimed = "IdentifierAlreadyClaimed",
  IdentifierNotLinked = "IdentifierNotLinked",
  InvalidContinuationToken = "InvalidContinuationToken",
  ExpiredContinuationToken = "ExpiredContinuationToken",
  InvalidSegment = "InvalidSegment",
  InvalidSessionId = "InvalidSessionId",
  SessionLogNotFound = "SessionLogNotFound",
  InvalidSearchTerm = "InvalidSearchTerm",
  TwoFactorAuthenticationTokenRequired = "TwoFactorAuthenticationTokenRequired",
  GameServerHostCountLimitExceeded = "GameServerHostCountLimitExceeded",
  PlayerTagCountLimitExceeded = "PlayerTagCountLimitExceeded",
  RequestAlreadyRunning = "RequestAlreadyRunning",
  ActionGroupNotFound = "ActionGroupNotFound",
  MaximumSegmentBulkActionJobsRunning = "MaximumSegmentBulkActionJobsRunning",
  NoActionsOnPlayersInSegmentJob = "NoActionsOnPlayersInSegmentJob",
  DuplicateStatisticName = "DuplicateStatisticName",
  ScheduledTaskNameConflict = "ScheduledTaskNameConflict",
  ScheduledTaskCreateConflict = "ScheduledTaskCreateConflict",
  InvalidScheduledTaskName = "InvalidScheduledTaskName",
  InvalidTaskSchedule = "InvalidTaskSchedule",
  SteamNotEnabledForTitle = "SteamNotEnabledForTitle",
  LimitNotAnUpgradeOption = "LimitNotAnUpgradeOption",
  NoSecretKeyEnabledForCloudScript = "NoSecretKeyEnabledForCloudScript",
  TaskNotFound = "TaskNotFound",
  TaskInstanceNotFound = "TaskInstanceNotFound",
  InvalidIdentityProviderId = "InvalidIdentityProviderId",
  MisconfiguredIdentityProvider = "MisconfiguredIdentityProvider",
  InvalidScheduledTaskType = "InvalidScheduledTaskType",
  BillingInformationRequired = "BillingInformationRequired",
  LimitedEditionItemUnavailable = "LimitedEditionItemUnavailable",
  InvalidAdPlacementAndReward = "InvalidAdPlacementAndReward",
  AllAdPlacementViewsAlreadyConsumed = "AllAdPlacementViewsAlreadyConsumed",
  GoogleOAuthNotConfiguredForTitle = "GoogleOAuthNotConfiguredForTitle",
  GoogleOAuthError = "GoogleOAuthError",
  UserNotFriend = "UserNotFriend",
  InvalidSignature = "InvalidSignature",
  InvalidPublicKey = "InvalidPublicKey",
  GoogleOAuthNoIdTokenIncludedInResponse = "GoogleOAuthNoIdTokenIncludedInResponse",
  StatisticUpdateInProgress = "StatisticUpdateInProgress",
  LeaderboardVersionNotAvailable = "LeaderboardVersionNotAvailable",
  StatisticAlreadyHasPrizeTable = "StatisticAlreadyHasPrizeTable",
  PrizeTableHasOverlappingRanks = "PrizeTableHasOverlappingRanks",
  PrizeTableHasMissingRanks = "PrizeTableHasMissingRanks",
  PrizeTableRankStartsAtZero = "PrizeTableRankStartsAtZero",
  InvalidStatistic = "InvalidStatistic",
  ExpressionParseFailure = "ExpressionParseFailure",
  ExpressionInvokeFailure = "ExpressionInvokeFailure",
  ExpressionTooLong = "ExpressionTooLong",
  DataUpdateRateExceeded = "DataUpdateRateExceeded",
  RestrictedEmailDomain = "RestrictedEmailDomain",
  EncryptionKeyDisabled = "EncryptionKeyDisabled",
  EncryptionKeyMissing = "EncryptionKeyMissing",
  EncryptionKeyBroken = "EncryptionKeyBroken",
  NoSharedSecretKeyConfigured = "NoSharedSecretKeyConfigured",
  SecretKeyNotFound = "SecretKeyNotFound",
  PlayerSecretAlreadyConfigured = "PlayerSecretAlreadyConfigured",
  APIRequestsDisabledForTitle = "APIRequestsDisabledForTitle",
  InvalidSharedSecretKey = "InvalidSharedSecretKey",
  PrizeTableHasNoRanks = "PrizeTableHasNoRanks",
  ProfileDoesNotExist = "ProfileDoesNotExist",
  ContentS3OriginBucketNotConfigured = "ContentS3OriginBucketNotConfigured",
  InvalidEnvironmentForReceipt = "InvalidEnvironmentForReceipt",
  EncryptedRequestNotAllowed = "EncryptedRequestNotAllowed",
  SignedRequestNotAllowed = "SignedRequestNotAllowed",
  RequestViewConstraintParamsNotAllowed = "RequestViewConstraintParamsNotAllowed",
  BadPartnerConfiguration = "BadPartnerConfiguration",
  XboxBPCertificateFailure = "XboxBPCertificateFailure",
  XboxXASSExchangeFailure = "XboxXASSExchangeFailure",
  InvalidEntityId = "InvalidEntityId",
  StatisticValueAggregationOverflow = "StatisticValueAggregationOverflow",
  EmailMessageFromAddressIsMissing = "EmailMessageFromAddressIsMissing",
  EmailMessageToAddressIsMissing = "EmailMessageToAddressIsMissing",
  SmtpServerAuthenticationError = "SmtpServerAuthenticationError",
  SmtpServerLimitExceeded = "SmtpServerLimitExceeded",
  SmtpServerInsufficientStorage = "SmtpServerInsufficientStorage",
  SmtpServerCommunicationError = "SmtpServerCommunicationError",
  SmtpServerGeneralFailure = "SmtpServerGeneralFailure",
  EmailClientTimeout = "EmailClientTimeout",
  EmailClientCanceledTask = "EmailClientCanceledTask",
  EmailTemplateMissing = "EmailTemplateMissing",
  InvalidHostForTitleId = "InvalidHostForTitleId",
  EmailConfirmationTokenDoesNotExist = "EmailConfirmationTokenDoesNotExist",
  EmailConfirmationTokenExpired = "EmailConfirmationTokenExpired",
  AccountDeleted = "AccountDeleted",
  PlayerSecretNotConfigured = "PlayerSecretNotConfigured",
  InvalidSignatureTime = "InvalidSignatureTime",
  NoContactEmailAddressFound = "NoContactEmailAddressFound",
  InvalidAuthToken = "InvalidAuthToken",
  AuthTokenDoesNotExist = "AuthTokenDoesNotExist",
  AuthTokenExpired = "AuthTokenExpired",
  AuthTokenAlreadyUsedToResetPassword = "AuthTokenAlreadyUsedToResetPassword",
  MembershipNameTooLong = "MembershipNameTooLong",
  MembershipNotFound = "MembershipNotFound",
  GoogleServiceAccountInvalid = "GoogleServiceAccountInvalid",
  GoogleServiceAccountParseFailure = "GoogleServiceAccountParseFailure",
  EntityTokenMissing = "EntityTokenMissing",
  EntityTokenInvalid = "EntityTokenInvalid",
  EntityTokenExpired = "EntityTokenExpired",
  EntityTokenRevoked = "EntityTokenRevoked",
  InvalidProductForSubscription = "InvalidProductForSubscription",
  XboxInaccessible = "XboxInaccessible",
  SubscriptionAlreadyTaken = "SubscriptionAlreadyTaken",
  SmtpAddonNotEnabled = "SmtpAddonNotEnabled",
  APIConcurrentRequestLimitExceeded = "APIConcurrentRequestLimitExceeded",
  XboxRejectedXSTSExchangeRequest = "XboxRejectedXSTSExchangeRequest",
  VariableNotDefined = "VariableNotDefined",
  TemplateVersionNotDefined = "TemplateVersionNotDefined",
  FileTooLarge = "FileTooLarge",
  TitleDeleted = "TitleDeleted",
  TitleContainsUserAccounts = "TitleContainsUserAccounts",
  TitleDeletionPlayerCleanupFailure = "TitleDeletionPlayerCleanupFailure",
  EntityFileOperationPending = "EntityFileOperationPending",
  NoEntityFileOperationPending = "NoEntityFileOperationPending",
  EntityProfileVersionMismatch = "EntityProfileVersionMismatch",
  TemplateVersionTooOld = "TemplateVersionTooOld",
  MembershipDefinitionInUse = "MembershipDefinitionInUse",
  PaymentPageNotConfigured = "PaymentPageNotConfigured",
  FailedLoginAttemptRateLimitExceeded = "FailedLoginAttemptRateLimitExceeded",
  EntityBlockedByGroup = "EntityBlockedByGroup",
  RoleDoesNotExist = "RoleDoesNotExist",
  EntityIsAlreadyMember = "EntityIsAlreadyMember",
  DuplicateRoleId = "DuplicateRoleId",
  GroupInvitationNotFound = "GroupInvitationNotFound",
  GroupApplicationNotFound = "GroupApplicationNotFound",
  OutstandingInvitationAcceptedInstead = "OutstandingInvitationAcceptedInstead",
  OutstandingApplicationAcceptedInstead = "OutstandingApplicationAcceptedInstead",
  RoleIsGroupDefaultMember = "RoleIsGroupDefaultMember",
  RoleIsGroupAdmin = "RoleIsGroupAdmin",
  RoleNameNotAvailable = "RoleNameNotAvailable",
  GroupNameNotAvailable = "GroupNameNotAvailable",
  EmailReportAlreadySent = "EmailReportAlreadySent",
  EmailReportRecipientBlacklisted = "EmailReportRecipientBlacklisted",
  EventNamespaceNotAllowed = "EventNamespaceNotAllowed",
  EventEntityNotAllowed = "EventEntityNotAllowed",
  InvalidEntityType = "InvalidEntityType",
  NullTokenResultFromAad = "NullTokenResultFromAad",
  InvalidTokenResultFromAad = "InvalidTokenResultFromAad",
  NoValidCertificateForAad = "NoValidCertificateForAad",
  InvalidCertificateForAad = "InvalidCertificateForAad",
  DuplicateDropTableId = "DuplicateDropTableId",
  MultiplayerServerError = "MultiplayerServerError",
  MultiplayerServerTooManyRequests = "MultiplayerServerTooManyRequests",
  MultiplayerServerNoContent = "MultiplayerServerNoContent",
  MultiplayerServerBadRequest = "MultiplayerServerBadRequest",
  MultiplayerServerUnauthorized = "MultiplayerServerUnauthorized",
  MultiplayerServerForbidden = "MultiplayerServerForbidden",
  MultiplayerServerNotFound = "MultiplayerServerNotFound",
  MultiplayerServerConflict = "MultiplayerServerConflict",
  MultiplayerServerInternalServerError = "MultiplayerServerInternalServerError",
  MultiplayerServerUnavailable = "MultiplayerServerUnavailable",
  ExplicitContentDetected = "ExplicitContentDetected",
  PIIContentDetected = "PIIContentDetected",
  InvalidScheduledTaskParameter = "InvalidScheduledTaskParameter",
  PerEntityEventRateLimitExceeded = "PerEntityEventRateLimitExceeded",
  TitleDefaultLanguageNotSet = "TitleDefaultLanguageNotSet",
  EmailTemplateMissingDefaultVersion = "EmailTemplateMissingDefaultVersion",
  FacebookInstantGamesIdNotLinked = "FacebookInstantGamesIdNotLinked",
  InvalidFacebookInstantGamesSignature = "InvalidFacebookInstantGamesSignature",
  FacebookInstantGamesAuthNotConfiguredForTitle = "FacebookInstantGamesAuthNotConfiguredForTitle",
  EntityProfileConstraintValidationFailed = "EntityProfileConstraintValidationFailed",
  TelemetryIngestionKeyPending = "TelemetryIngestionKeyPending",
  TelemetryIngestionKeyNotFound = "TelemetryIngestionKeyNotFound",
  StatisticChildNameInvalid = "StatisticChildNameInvalid",
  DataIntegrityError = "DataIntegrityError",
  VirtualCurrencyCannotBeSetToOlderVersion = "VirtualCurrencyCannotBeSetToOlderVersion",
  VirtualCurrencyMustBeWithinIntegerRange = "VirtualCurrencyMustBeWithinIntegerRange",
  EmailTemplateInvalidSyntax = "EmailTemplateInvalidSyntax",
  EmailTemplateMissingCallback = "EmailTemplateMissingCallback",
  PushNotificationTemplateInvalidPayload = "PushNotificationTemplateInvalidPayload",
  InvalidLocalizedPushNotificationLanguage = "InvalidLocalizedPushNotificationLanguage",
  MissingLocalizedPushNotificationMessage = "MissingLocalizedPushNotificationMessage",
  PushNotificationTemplateMissingPlatformPayload = "PushNotificationTemplateMissingPlatformPayload",
  PushNotificationTemplatePayloadContainsInvalidJson = "PushNotificationTemplatePayloadContainsInvalidJson",
  PushNotificationTemplateContainsInvalidIosPayload = "PushNotificationTemplateContainsInvalidIosPayload",
  PushNotificationTemplateContainsInvalidAndroidPayload = "PushNotificationTemplateContainsInvalidAndroidPayload",
  PushNotificationTemplateIosPayloadMissingNotificationBody = "PushNotificationTemplateIosPayloadMissingNotificationBody",
  PushNotificationTemplateAndroidPayloadMissingNotificationBody = "PushNotificationTemplateAndroidPayloadMissingNotificationBody",
  PushNotificationTemplateNotFound = "PushNotificationTemplateNotFound",
  PushNotificationTemplateMissingDefaultVersion = "PushNotificationTemplateMissingDefaultVersion",
  PushNotificationTemplateInvalidSyntax = "PushNotificationTemplateInvalidSyntax",
  PushNotificationTemplateNoCustomPayloadForV1 = "PushNotificationTemplateNoCustomPayloadForV1",
  NoLeaderboardForStatistic = "NoLeaderboardForStatistic",
  TitleNewsMissingDefaultLanguage = "TitleNewsMissingDefaultLanguage",
  TitleNewsNotFound = "TitleNewsNotFound",
  TitleNewsDuplicateLanguage = "TitleNewsDuplicateLanguage",
  TitleNewsMissingTitleOrBody = "TitleNewsMissingTitleOrBody",
  TitleNewsInvalidLanguage = "TitleNewsInvalidLanguage",
  EmailRecipientBlacklisted = "EmailRecipientBlacklisted",
  InvalidGameCenterAuthRequest = "InvalidGameCenterAuthRequest",
  GameCenterAuthenticationFailed = "GameCenterAuthenticationFailed",
  CannotEnablePartiesForTitle = "CannotEnablePartiesForTitle",
  PartyError = "PartyError",
  PartyRequests = "PartyRequests",
  PartyNoContent = "PartyNoContent",
  PartyBadRequest = "PartyBadRequest",
  PartyUnauthorized = "PartyUnauthorized",
  PartyForbidden = "PartyForbidden",
  PartyNotFound = "PartyNotFound",
  PartyConflict = "PartyConflict",
  PartyInternalServerError = "PartyInternalServerError",
  PartyUnavailable = "PartyUnavailable",
  PartyTooManyRequests = "PartyTooManyRequests",
  PushNotificationTemplateMissingName = "PushNotificationTemplateMissingName",
  CannotEnableMultiplayerServersForTitle = "CannotEnableMultiplayerServersForTitle",
  WriteAttemptedDuringExport = "WriteAttemptedDuringExport",
  MultiplayerServerTitleQuotaCoresExceeded = "MultiplayerServerTitleQuotaCoresExceeded",
  AutomationRuleNotFound = "AutomationRuleNotFound",
  EntityAPIKeyLimitExceeded = "EntityAPIKeyLimitExceeded",
  EntityAPIKeyNotFound = "EntityAPIKeyNotFound",
  EntityAPIKeyOrSecretInvalid = "EntityAPIKeyOrSecretInvalid",
  EconomyServiceUnavailable = "EconomyServiceUnavailable",
  EconomyServiceInternalError = "EconomyServiceInternalError",
  QueryRateLimitExceeded = "QueryRateLimitExceeded",
  EntityAPIKeyCreationDisabledForEntity = "EntityAPIKeyCreationDisabledForEntity",
  ForbiddenByEntityPolicy = "ForbiddenByEntityPolicy",
  UpdateInventoryRateLimitExceeded = "UpdateInventoryRateLimitExceeded",
  StudioCreationRateLimited = "StudioCreationRateLimited",
  StudioCreationInProgress = "StudioCreationInProgress",
  DuplicateStudioName = "DuplicateStudioName",
  StudioNotFound = "StudioNotFound",
  StudioDeleted = "StudioDeleted",
  StudioDeactivated = "StudioDeactivated",
  StudioActivated = "StudioActivated",
  TitleCreationRateLimited = "TitleCreationRateLimited",
  TitleCreationInProgress = "TitleCreationInProgress",
  DuplicateTitleName = "DuplicateTitleName",
  TitleActivationRateLimited = "TitleActivationRateLimited",
  TitleActivationInProgress = "TitleActivationInProgress",
  TitleDeactivated = "TitleDeactivated",
  TitleActivated = "TitleActivated",
  CloudScriptAzureFunctionsExecutionTimeLimitExceeded = "CloudScriptAzureFunctionsExecutionTimeLimitExceeded",
  CloudScriptAzureFunctionsArgumentSizeExceeded = "CloudScriptAzureFunctionsArgumentSizeExceeded",
  CloudScriptAzureFunctionsReturnSizeExceeded = "CloudScriptAzureFunctionsReturnSizeExceeded",
  CloudScriptAzureFunctionsHTTPRequestError = "CloudScriptAzureFunctionsHTTPRequestError",
  VirtualCurrencyBetaGetError = "VirtualCurrencyBetaGetError",
  VirtualCurrencyBetaCreateError = "VirtualCurrencyBetaCreateError",
  VirtualCurrencyBetaInitialDepositSaveError = "VirtualCurrencyBetaInitialDepositSaveError",
  VirtualCurrencyBetaSaveError = "VirtualCurrencyBetaSaveError",
  VirtualCurrencyBetaDeleteError = "VirtualCurrencyBetaDeleteError",
  VirtualCurrencyBetaRestoreError = "VirtualCurrencyBetaRestoreError",
  VirtualCurrencyBetaSaveConflict = "VirtualCurrencyBetaSaveConflict",
  VirtualCurrencyBetaUpdateError = "VirtualCurrencyBetaUpdateError",
  InsightsManagementDatabaseNotFound = "InsightsManagementDatabaseNotFound",
  InsightsManagementOperationNotFound = "InsightsManagementOperationNotFound",
  InsightsManagementErrorPendingOperationExists = "InsightsManagementErrorPendingOperationExists",
  InsightsManagementSetPerformanceLevelInvalidParameter = "InsightsManagementSetPerformanceLevelInvalidParameter",
  InsightsManagementSetStorageRetentionInvalidParameter = "InsightsManagementSetStorageRetentionInvalidParameter",
  InsightsManagementGetStorageUsageInvalidParameter = "InsightsManagementGetStorageUsageInvalidParameter",
  InsightsManagementGetOperationStatusInvalidParameter = "InsightsManagementGetOperationStatusInvalidParameter",
  DuplicatePurchaseTransactionId = "DuplicatePurchaseTransactionId",
  EvaluationModePlayerCountExceeded = "EvaluationModePlayerCountExceeded",
  GetPlayersInSegmentRateLimitExceeded = "GetPlayersInSegmentRateLimitExceeded",
  CloudScriptFunctionNameSizeExceeded = "CloudScriptFunctionNameSizeExceeded",
  PaidInsightsFeaturesNotEnabled = "PaidInsightsFeaturesNotEnabled",
  CloudScriptAzureFunctionsQueueRequestError = "CloudScriptAzureFunctionsQueueRequestError",
  EvaluationModeTitleCountExceeded = "EvaluationModeTitleCountExceeded",
  InsightsManagementTitleNotInFlight = "InsightsManagementTitleNotInFlight",
  LimitNotFound = "LimitNotFound",
  LimitNotAvailableViaAPI = "LimitNotAvailableViaAPI",
  InsightsManagementSetStorageRetentionBelowMinimum = "InsightsManagementSetStorageRetentionBelowMinimum",
  InsightsManagementSetStorageRetentionAboveMaximum = "InsightsManagementSetStorageRetentionAboveMaximum",
  AppleNotEnabledForTitle = "AppleNotEnabledForTitle",
  InsightsManagementNewActiveEventExportLimitInvalid = "InsightsManagementNewActiveEventExportLimitInvalid",
  InsightsManagementSetPerformanceRateLimited = "InsightsManagementSetPerformanceRateLimited",
  PartyRequestsThrottledFromRateLimiter = "PartyRequestsThrottledFromRateLimiter",
  XboxServiceTooManyRequests = "XboxServiceTooManyRequests",
  NintendoSwitchNotEnabledForTitle = "NintendoSwitchNotEnabledForTitle",
  RequestMultiplayerServersThrottledFromRateLimiter = "RequestMultiplayerServersThrottledFromRateLimiter",
  TitleDataOverrideNotFound = "TitleDataOverrideNotFound",
  DuplicateKeys = "DuplicateKeys",
  WasNotCreatedWithCloudRoot = "WasNotCreatedWithCloudRoot",
  LegacyMultiplayerServersDeprecated = "LegacyMultiplayerServersDeprecated",
  VirtualCurrencyCurrentlyUnavailable = "VirtualCurrencyCurrentlyUnavailable",
  SteamUserNotFound = "SteamUserNotFound",
  ElasticSearchOperationFailed = "ElasticSearchOperationFailed",
  NotImplemented = "NotImplemented",
  MatchmakingEntityInvalid = "MatchmakingEntityInvalid",
  MatchmakingPlayerAttributesInvalid = "MatchmakingPlayerAttributesInvalid",
  MatchmakingQueueNotFound = "MatchmakingQueueNotFound",
  MatchmakingMatchNotFound = "MatchmakingMatchNotFound",
  MatchmakingTicketNotFound = "MatchmakingTicketNotFound",
  MatchmakingAlreadyJoinedTicket = "MatchmakingAlreadyJoinedTicket",
  MatchmakingTicketAlreadyCompleted = "MatchmakingTicketAlreadyCompleted",
  MatchmakingQueueConfigInvalid = "MatchmakingQueueConfigInvalid",
  MatchmakingMemberProfileInvalid = "MatchmakingMemberProfileInvalid",
  NintendoSwitchDeviceIdNotLinked = "NintendoSwitchDeviceIdNotLinked",
  MatchmakingNotEnabled = "MatchmakingNotEnabled",
  MatchmakingPlayerAttributesTooLarge = "MatchmakingPlayerAttributesTooLarge",
  MatchmakingNumberOfPlayersInTicketTooLarge = "MatchmakingNumberOfPlayersInTicketTooLarge",
  MatchmakingAttributeInvalid = "MatchmakingAttributeInvalid",
  MatchmakingPlayerHasNotJoinedTicket = "MatchmakingPlayerHasNotJoinedTicket",
  MatchmakingRateLimitExceeded = "MatchmakingRateLimitExceeded",
  MatchmakingTicketMembershipLimitExceeded = "MatchmakingTicketMembershipLimitExceeded",
  MatchmakingUnauthorized = "MatchmakingUnauthorized",
  MatchmakingQueueLimitExceeded = "MatchmakingQueueLimitExceeded",
  MatchmakingRequestTypeMismatch = "MatchmakingRequestTypeMismatch",
  MatchmakingBadRequest = "MatchmakingBadRequest",
  TitleConfigNotFound = "TitleConfigNotFound",
  TitleConfigUpdateConflict = "TitleConfigUpdateConflict",
  TitleConfigSerializationError = "TitleConfigSerializationError",
  CatalogApiNotImplemented = "CatalogApiNotImplemented",
  CatalogEntityInvalid = "CatalogEntityInvalid",
  CatalogTitleIdMissing = "CatalogTitleIdMissing",
  CatalogPlayerIdMissing = "CatalogPlayerIdMissing",
  CatalogClientIdentityInvalid = "CatalogClientIdentityInvalid",
  CatalogOneOrMoreFilesInvalid = "CatalogOneOrMoreFilesInvalid",
  CatalogItemMetadataInvalid = "CatalogItemMetadataInvalid",
  CatalogItemIdInvalid = "CatalogItemIdInvalid",
  CatalogSearchParameterInvalid = "CatalogSearchParameterInvalid",
  CatalogFeatureDisabled = "CatalogFeatureDisabled",
  CatalogConfigInvalid = "CatalogConfigInvalid",
  CatalogItemTypeInvalid = "CatalogItemTypeInvalid",
  CatalogBadRequest = "CatalogBadRequest",
  CatalogTooManyRequests = "CatalogTooManyRequests",
  ExportInvalidStatusUpdate = "ExportInvalidStatusUpdate",
  ExportInvalidPrefix = "ExportInvalidPrefix",
  ExportBlobContainerDoesNotExist = "ExportBlobContainerDoesNotExist",
  ExportNotFound = "ExportNotFound",
  ExportCouldNotUpdate = "ExportCouldNotUpdate",
  ExportInvalidStorageType = "ExportInvalidStorageType",
  ExportAmazonBucketDoesNotExist = "ExportAmazonBucketDoesNotExist",
  ExportInvalidBlobStorage = "ExportInvalidBlobStorage",
  ExportKustoException = "ExportKustoException",
  ExportKustoConnectionFailed = "ExportKustoConnectionFailed",
  ExportUnknownError = "ExportUnknownError",
  ExportCantEditPendingExport = "ExportCantEditPendingExport",
  ExportLimitExports = "ExportLimitExports",
  ExportLimitEvents = "ExportLimitEvents",
  ExportInvalidPartitionStatusModification = "ExportInvalidPartitionStatusModification",
  ExportCouldNotCreate = "ExportCouldNotCreate",
  ExportNoBackingDatabaseFound = "ExportNoBackingDatabaseFound",
  ExportCouldNotDelete = "ExportCouldNotDelete",
  ExportCannotDetermineEventQuery = "ExportCannotDetermineEventQuery",
  ExportInvalidQuerySchemaModification = "ExportInvalidQuerySchemaModification",
  ExportQuerySchemaMissingRequiredColumns = "ExportQuerySchemaMissingRequiredColumns",
  ExportCannotParseQuery = "ExportCannotParseQuery",
  ExportControlCommandsNotAllowed = "ExportControlCommandsNotAllowed",
  ExportQueryMissingTableReference = "ExportQueryMissingTableReference",
  ExplorerBasicInvalidQueryName = "ExplorerBasicInvalidQueryName",
  ExplorerBasicInvalidQueryDescription = "ExplorerBasicInvalidQueryDescription",
  ExplorerBasicInvalidQueryConditions = "ExplorerBasicInvalidQueryConditions",
  ExplorerBasicInvalidQueryStartDate = "ExplorerBasicInvalidQueryStartDate",
  ExplorerBasicInvalidQueryEndDate = "ExplorerBasicInvalidQueryEndDate",
  ExplorerBasicInvalidQueryGroupBy = "ExplorerBasicInvalidQueryGroupBy",
  ExplorerBasicInvalidQueryAggregateType = "ExplorerBasicInvalidQueryAggregateType",
  ExplorerBasicInvalidQueryAggregateProperty = "ExplorerBasicInvalidQueryAggregateProperty",
  ExplorerBasicLoadQueriesError = "ExplorerBasicLoadQueriesError",
  ExplorerBasicLoadQueryError = "ExplorerBasicLoadQueryError",
  ExplorerBasicCreateQueryError = "ExplorerBasicCreateQueryError",
  ExplorerBasicDeleteQueryError = "ExplorerBasicDeleteQueryError",
  ExplorerBasicUpdateQueryError = "ExplorerBasicUpdateQueryError",
  ExplorerBasicSavedQueriesLimit = "ExplorerBasicSavedQueriesLimit",
  ExplorerBasicSavedQueryNotFound = "ExplorerBasicSavedQueryNotFound",
  TitleNotEnabledForParty = "TitleNotEnabledForParty",
  PartyVersionNotFound = "PartyVersionNotFound",
  MultiplayerServerBuildReferencedByMatchmakingQueue = "MultiplayerServerBuildReferencedByMatchmakingQueue",
  ExperimentationExperimentStopped = "ExperimentationExperimentStopped",
  ExperimentationExperimentRunning = "ExperimentationExperimentRunning",
  ExperimentationExperimentNotFound = "ExperimentationExperimentNotFound",
  ExperimentationExperimentNeverStarted = "ExperimentationExperimentNeverStarted",
  ExperimentationExperimentDeleted = "ExperimentationExperimentDeleted",
  ExperimentationClientTimeout = "ExperimentationClientTimeout",
  ExperimentationInvalidVariantConfiguration = "ExperimentationInvalidVariantConfiguration",
  ExperimentationInvalidVariableConfiguration = "ExperimentationInvalidVariableConfiguration",
  ExperimentInvalidId = "ExperimentInvalidId",
  ExperimentationNoScorecard = "ExperimentationNoScorecard",
  ExperimentationTreatmentAssignmentFailed = "ExperimentationTreatmentAssignmentFailed",
  ExperimentationTreatmentAssignmentDisabled = "ExperimentationTreatmentAssignmentDisabled",
  ExperimentationInvalidDuration = "ExperimentationInvalidDuration",
  ExperimentationMaxExperimentsReached = "ExperimentationMaxExperimentsReached",
  ExperimentationExperimentSchedulingInProgress = "ExperimentationExperimentSchedulingInProgress",
  ExperimentationInvalidEndDate = "ExperimentationInvalidEndDate",
  ExperimentationInvalidStartDate = "ExperimentationInvalidStartDate",
  ExperimentationMaxDurationExceeded = "ExperimentationMaxDurationExceeded",
  ExperimentationExclusionGroupNotFound = "ExperimentationExclusionGroupNotFound",
  ExperimentationExclusionGroupInsufficientCapacity = "ExperimentationExclusionGroupInsufficientCapacity",
  ExperimentationExclusionGroupCannotDelete = "ExperimentationExclusionGroupCannotDelete",
  ExperimentationExclusionGroupInvalidTrafficAllocation = "ExperimentationExclusionGroupInvalidTrafficAllocation",
  ExperimentationExclusionGroupInvalidName = "ExperimentationExclusionGroupInvalidName",
  MaxActionDepthExceeded = "MaxActionDepthExceeded",
  TitleNotOnUpdatedPricingPlan = "TitleNotOnUpdatedPricingPlan",
  SegmentManagementTitleNotInFlight = "SegmentManagementTitleNotInFlight",
  SegmentManagementNoExpressionTree = "SegmentManagementNoExpressionTree",
  SegmentManagementTriggerActionCountOverLimit = "SegmentManagementTriggerActionCountOverLimit",
  SegmentManagementSegmentCountOverLimit = "SegmentManagementSegmentCountOverLimit",
  SegmentManagementInvalidSegmentId = "SegmentManagementInvalidSegmentId",
  SegmentManagementInvalidInput = "SegmentManagementInvalidInput",
  SegmentManagementInvalidSegmentName = "SegmentManagementInvalidSegmentName",
  DeleteSegmentRateLimitExceeded = "DeleteSegmentRateLimitExceeded",
  CreateSegmentRateLimitExceeded = "CreateSegmentRateLimitExceeded",
  UpdateSegmentRateLimitExceeded = "UpdateSegmentRateLimitExceeded",
  GetSegmentsRateLimitExceeded = "GetSegmentsRateLimitExceeded",
  AsyncExportNotInFlight = "AsyncExportNotInFlight",
  SnapshotNotFound = "SnapshotNotFound",
  InventoryApiNotImplemented = "InventoryApiNotImplemented",
}

export interface GetActionsOnPlayersInSegmentTaskInstanceResult {
  /** Parameter of this task instance */
  Parameter?: ActionsOnPlayersInSegmentTaskParameter;
  /** Status summary of the actions-on-players-in-segment task instance */
  Summary?: ActionsOnPlayersInSegmentTaskSummary;
}

/** Request has no paramaters. */
export interface GetAllSegmentsRequest {}

export interface GetAllSegmentsResult {
  /** Array of segments for this title. */
  Segments?: GetSegmentResult[];
}

export interface GetCatalogItemsRequest {
  /** Which catalog is being requested. If null, uses the default catalog. */
  CatalogVersion?: string;
}

export interface GetCatalogItemsResult {
  /** Array of items which can be purchased. */
  Catalog?: CatalogItem[];
}

export interface GetCloudScriptRevisionRequest {
  /** Revision number. If left null, defaults to the latest revision */
  Revision?: number;
  /** Version number. If left null, defaults to the latest version */
  Version?: number;
}

export interface GetCloudScriptRevisionResult {
  /** Time this revision was created */
  CreatedAt: string;
  /** List of Cloud Script files in this revision. */
  Files?: CloudScriptFile[];
  /** True if this is the currently published revision */
  IsPublished: boolean;
  /** Revision number. */
  Revision: number;
  /** Version number. */
  Version: number;
}

export interface GetCloudScriptTaskInstanceResult {
  /** Parameter of this task instance */
  Parameter?: CloudScriptTaskParameter;
  /** Status summary of the CloudScript task instance */
  Summary?: CloudScriptTaskSummary;
}

export interface GetCloudScriptVersionsRequest {}

export interface GetCloudScriptVersionsResult {
  /** List of versions */
  Versions?: CloudScriptVersionStatus[];
}

export interface GetContentListRequest {
  /** Limits the response to keys that begin with the specified prefix. You can use prefixes to list contents under a folder, or for a specified version, etc. */
  Prefix?: string;
}

export interface GetContentListResult {
  /** List of content items. */
  Contents?: ContentInfo[];
  /** Number of content items returned. We currently have a maximum of 1000 items limit. */
  ItemCount: number;
  /** The total size of listed contents in bytes. */
  TotalSize: number;
}

export interface GetContentUploadUrlRequest {
  /** A standard MIME type describing the format of the contents. The same MIME type has to be set in the header when uploading the content. If not specified, the MIME type is 'binary/octet-stream' by default. */
  ContentType?: string;
  /** Key of the content item to upload, usually formatted as a path, e.g. images/a.png */
  Key: string;
}

export interface GetContentUploadUrlResult {
  /** URL for uploading content via HTTP PUT method. The URL requires the 'x-ms-blob-type' header to have the value 'BlockBlob'. The URL will expire in approximately one hour. */
  URL?: string;
}

/** Gets the download URL for the requested report data (in CSV form). The reports available through this API call are those available in the Game Manager, in the Analytics->Reports tab. */
export interface GetDataReportRequest {
  /** Reporting year (UTC) */
  Day: number;
  /** Reporting month (UTC) */
  Month: number;
  /** Report name */
  ReportName: string;
  /** Reporting year (UTC) */
  Year: number;
}

export interface GetDataReportResult {
  /** The URL where the requested report can be downloaded. This can be any PlayFab generated reports. The full list of reports can be found at: https://docs.microsoft.com/en-us/gaming/playfab/features/analytics/reports/quickstart. */
  DownloadUrl?: string;
}

export interface GetMatchmakerGameInfoRequest {
  /** unique identifier of the lobby for which info is being requested */
  LobbyId: string;
}

export interface GetMatchmakerGameInfoResult {
  /** version identifier of the game server executable binary being run */
  BuildVersion?: string;
  /** time when Game Server Instance is currently scheduled to end */
  EndTime?: string;
  /** unique identifier of the lobby  */
  LobbyId?: string;
  /** game mode for this Game Server Instance */
  Mode?: string;
  /** array of unique PlayFab identifiers for users currently connected to this Game Server Instance */
  Players?: string[];
  /** region in which the Game Server Instance is running */
  Region?: Region;
  /** IPV4 address of the server */
  ServerIPV4Address?: string;
  /** IPV6 address of the server */
  ServerIPV6Address?: string;
  /** communication port for this Game Server Instance */
  ServerPort: number;
  /** Public DNS name (if any) of the server */
  ServerPublicDNSName?: string;
  /** time when the Game Server Instance was created */
  StartTime: string;
  /** unique identifier of the Game Server Instance for this lobby */
  TitleId?: string;
}

/** These details are used by the PlayFab matchmaking service to determine if an existing Game Server Instance has room for additional users, and by the PlayFab game server management service to determine when a new Game Server Host should be created in order to prevent excess load on existing Hosts. */
export interface GetMatchmakerGameModesRequest {
  /** previously uploaded build version for which game modes are being requested */
  BuildVersion: string;
}

export interface GetMatchmakerGameModesResult {
  /** array of game modes available for the specified build */
  GameModes?: GameModeInfo[];
}

/** Useful for identifying titles of which the player's data will be deleted by DeleteMasterPlayer. */
export interface GetPlayedTitleListRequest {
  /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
  PlayFabId: string;
}

export interface GetPlayedTitleListResult {
  /** List of titles the player has played */
  TitleIds?: string[];
}

/** Gets a player ID from an auth token. The token expires after 30 minutes and cannot be used to look up a player when expired. */
export interface GetPlayerIdFromAuthTokenRequest {
  /** The auth token of the player requesting the password reset. */
  Token: string;
  /** The type of auth token of the player requesting the password reset. */
  TokenType: AuthTokenType;
}

export interface GetPlayerIdFromAuthTokenResult {
  /** The player ID from the token passed in */
  PlayFabId?: string;
}

/** This API allows for access to details regarding a user in the PlayFab service, usually for purposes of customer support. Note that data returned may be Personally Identifying Information (PII), such as email address, and so care should be taken in how this data is stored and managed. Since this call will always return the relevant information for users who have accessed the title, the recommendation is to not store this data locally. */
export interface GetPlayerProfileRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
  PlayFabId: string;
  /** If non-null, this determines which properties of the resulting player profiles to return. For API calls from the client, only the allowed client profile properties for the title may be requested. These allowed properties are configured in the Game Manager "Client Profile Options" tab in the "Settings" section. */
  ProfileConstraints?: PlayerProfileViewConstraints;
}

export interface GetPlayerProfileResult {
  /** The profile of the player. This profile is not guaranteed to be up-to-date. For a new player, this profile will not exist. */
  PlayerProfile?: PlayerProfileModel;
}

export interface GetPlayerSegmentsResult {
  /** Array of segments the requested player currently belongs to. */
  Segments?: GetSegmentResult[];
}

/** Player Shared Secret Keys are used for the call to Client/GetTitlePublicKey, which exchanges the shared secret for an RSA CSP blob to be used to encrypt the payload of account creation requests when that API requires a signature header. */
export interface GetPlayerSharedSecretsRequest {}

export interface GetPlayerSharedSecretsResult {
  /** The player shared secret to use when calling Client/GetTitlePublicKey */
  SharedSecrets?: SharedSecret[];
}

/** Initial request must contain at least a Segment ID. Subsequent requests must contain the Segment ID as well as the Continuation Token. Failure to send the Continuation Token will result in a new player segment list being generated. Each time the Continuation Token is passed in the length of the Total Seconds to Live is refreshed. If too much time passes between requests to the point that a subsequent request is past the Total Seconds to Live an error will be returned and paging will be terminated. This API is resource intensive and should not be used in scenarios which might generate high request volumes. Only one request to this API at a time should be made per title. Concurrent requests to the API may be rejected with the APIConcurrentRequestLimitExceeded error. */
export interface GetPlayersInSegmentRequest {
  /** Continuation token if retrieving subsequent pages of results. */
  ContinuationToken?: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Maximum number of profiles to load. Default is 1,000. Maximum is 10,000. */
  MaxBatchSize?: number;
  /** Number of seconds to keep the continuation token active. After token expiration it is not possible to continue paging results. Default is 300 (5 minutes). Maximum is 1,800 (30 minutes). */
  SecondsToLive?: number;
  /** Unique identifier for this segment. */
  SegmentId: string;
}

export interface GetPlayersInSegmentResult {
  /** Continuation token to use to retrieve subsequent pages of results. If token returns null there are no more results. */
  ContinuationToken?: string;
  /** Array of player profiles in this segment. */
  PlayerProfiles?: PlayerProfile[];
  /** Count of profiles matching this segment. */
  ProfilesInSegment: number;
}

export interface GetPlayersSegmentsRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
  PlayFabId: string;
}

export interface GetPlayerStatisticDefinitionsRequest {}

/** Statistics are numeric values, with each statistic in the title also generating a leaderboard. The ResetInterval defines the period of time at which the leaderboard for the statistic will automatically reset. Upon reset, the statistic updates to a new version with no values (effectively removing all players from the leaderboard). The previous version's statistic values are also archived for retrieval, if needed (see GetPlayerStatisticVersions). Statistics not created via a call to CreatePlayerStatisticDefinition by default have a VersionChangeInterval of Never, meaning they do not reset on a schedule, but they can be set to do so via a call to UpdatePlayerStatisticDefinition. Once a statistic has been reset (sometimes referred to as versioned or incremented), the previous version can still be written to for up a short, pre-defined period (currently 10 seconds), to prevent issues with levels completing around the time of the reset. Also, once reset, the historical statistics for players in the title may be retrieved using the URL specified in the version information (GetPlayerStatisticVersions). The AggregationMethod defines what action is taken when a new statistic value is submitted - always update with the new value (Last), use the highest of the old and new values (Max), use the smallest (Min), or add them together (Sum). */
export interface GetPlayerStatisticDefinitionsResult {
  /** the player statistic definitions for the title */
  Statistics?: PlayerStatisticDefinition[];
}

export interface GetPlayerStatisticVersionsRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** unique name of the statistic */
  StatisticName?: string;
}

/** Statistics are numeric values, with each statistic in the title also generating a leaderboard. The information returned in the results defines the state of a specific version of a statistic, including when it was or will become the currently active version, when it will (or did) become a previous version, and its archival state if it is no longer the active version. For a statistic which has been reset, once the archival status is Complete, the full set of statistics for all players in the leaderboard for that version may be retrieved via the ArchiveDownloadUrl. Statistics which have not been reset (incremented/versioned) will only have a single version which is not scheduled to reset. */
export interface GetPlayerStatisticVersionsResult {
  /** version change history of the statistic */
  StatisticVersions?: PlayerStatisticVersion[];
}

/** This API will return a list of canonical tags which includes both namespace and tag's name. If namespace is not provided, the result is a list of all canonical tags. TagName can be used for segmentation and Namespace is limited to 128 characters. */
export interface GetPlayerTagsRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Optional namespace to filter results by */
  Namespace?: string;
  /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
  PlayFabId: string;
}

export interface GetPlayerTagsResult {
  /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
  PlayFabId: string;
  /** Canonical tags (including namespace and tag's name) for the requested user */
  Tags: string[];
}

/** Views the requested policy. Today, the only supported policy is 'ApiPolicy'. */
export interface GetPolicyRequest {
  /** The name of the policy to read. Only supported name is 'ApiPolicy'. */
  PolicyName?: string;
}

export interface GetPolicyResponse {
  /** The name of the policy read. */
  PolicyName?: string;
  /** Policy version. */
  PolicyVersion: number;
  /** The statements in the requested policy. */
  Statements?: PermissionStatement[];
}

/** This API is designed to return publisher-specific values which can be read, but not written to, by the client. This data is shared across all titles assigned to a particular publisher, and can be used for cross-game coordination. Only titles assigned to a publisher can use this API. For more information email helloplayfab@microsoft.com. This AdminAPI call for getting title data guarantees no delay in between update and retrieval of newly set data. */
export interface GetPublisherDataRequest {
  /**  array of keys to get back data from the Publisher data blob, set by the admin tools */
  Keys: string[];
}

export interface GetPublisherDataResult {
  /** a dictionary object of key / value pairs */
  Data?: Record<string, unknown>;
}

export interface GetRandomResultTablesRequest {
  /** catalog version to fetch tables from. Use default catalog version if null */
  CatalogVersion?: string;
}

export interface GetRandomResultTablesResult {
  /** array of random result tables currently available */
  Tables?: RandomResultTableListing;
}

export interface GetSegmentResult {
  /** Identifier of the segments AB Test, if it is attached to one. */
  ABTestParent?: string;
  /** Unique identifier for this segment. */
  Id: string;
  /** Segment name. */
  Name?: string;
}

/** Given input segment ids, return list of segments. */
export interface GetSegmentsRequest {
  /** Segment ids to filter title segments. */
  SegmentIds: string[];
}

export interface GetSegmentsResponse {
  /** Error message. */
  ErrorMessage?: string;
  /** List of title segments. */
  Segments?: SegmentModel[];
}

export interface GetServerBuildInfoRequest {
  /** unique identifier of the previously uploaded build executable for which information is being requested */
  BuildId: string;
}

/** Information about a particular server build */
export interface GetServerBuildInfoResult {
  /** array of regions where this build can used, when it is active */
  ActiveRegions?: Region[];
  /** unique identifier for this build executable */
  BuildId?: string;
  /** developer comment(s) for this build */
  Comment?: string;
  /** error message, if any, about this build */
  ErrorMessage?: string;
  /** maximum number of game server instances that can run on a single host machine */
  MaxGamesPerHost: number;
  /** minimum capacity of additional game server instances that can be started before the autoscaling service starts new host machines (given the number of current running host machines and game server instances) */
  MinFreeGameSlots: number;
  /** the current status of the build validation and processing steps */
  Status?: GameBuildStatus;
  /** time this build was last modified (or uploaded, if this build has never been modified) */
  Timestamp: string;
  /** Unique identifier for the title, found in the Settings > Game Properties section of the PlayFab developer site when a title has been selected. */
  TitleId?: string;
}

export interface GetServerBuildUploadURLRequest {
  /** unique identifier of the game server build to upload */
  BuildId: string;
}

export interface GetServerBuildUploadURLResult {
  /** pre-authorized URL for uploading the game server build package */
  URL?: string;
}

/** A store contains an array of references to items defined in the catalog, along with the prices for the item, in both real world and virtual currencies. These prices act as an override to any prices defined in the catalog. In this way, the base definitions of the items may be defined in the catalog, with all associated properties, while the pricing can be set for each store, as needed. This allows for subsets of goods to be defined for different purposes (in order to simplify showing some, but not all catalog items to users, based upon different characteristics), along with unique prices. Note that all prices defined in the catalog and store definitions for the item are considered valid, and that a compromised client can be made to send a request for an item based upon any of these definitions. If no price is specified in the store for an item, the price set in the catalog should be displayed to the user. */
export interface GetStoreItemsRequest {
  /** Catalog version to store items from. Use default catalog version if null */
  CatalogVersion?: string;
  /** Unqiue identifier for the store which is being requested. */
  StoreId: string;
}

export interface GetStoreItemsResult {
  /** The base catalog that this store is a part of. */
  CatalogVersion?: string;
  /** Additional data about the store. */
  MarketingData?: StoreMarketingModel;
  /** How the store was last updated (Admin or a third party). */
  Source?: SourceType;
  /** Array of items which can be purchased from this store. */
  Store?: StoreItem[];
  /** The ID of this store. */
  StoreId?: string;
}

/** The result includes detail information that's specific to a CloudScript task. Only CloudScript tasks configured as "Run Cloud Script function once" will be retrieved. To get a list of task instances by task, status, or time range, use GetTaskInstances. */
export interface GetTaskInstanceRequest {
  /** ID of the requested task instance. */
  TaskInstanceId: string;
}

/** Only the most recent 100 task instances are returned, ordered by start time descending. The results are generic basic information for task instances. To get detail information specific to each task type, use Get*TaskInstance based on its corresponding task type. */
export interface GetTaskInstancesRequest {
  /** Optional range-from filter for task instances' StartedAt timestamp. */
  StartedAtRangeFrom?: string;
  /** Optional range-to filter for task instances' StartedAt timestamp. */
  StartedAtRangeTo?: string;
  /** Optional filter for task instances that are of a specific status. */
  StatusFilter?: TaskInstanceStatus;
  /** Name or ID of the task whose instances are being queried. If not specified, return all task instances that satisfy conditions set by other filters. */
  TaskIdentifier?: NameIdentifier;
}

export interface GetTaskInstancesResult {
  /** Basic status summaries of the queried task instances. Empty If no task instances meets the filter criteria. To get detailed status summary, use Get*TaskInstance API according to task type (e.g. GetActionsOnPlayersInSegmentTaskInstance). */
  Summaries?: TaskInstanceBasicSummary[];
}

export interface GetTasksRequest {
  /** Provide either the task ID or the task name to get a specific task. If not specified, return all defined tasks. */
  Identifier?: NameIdentifier;
}

export interface GetTasksResult {
  /** Result tasks. Empty if there is no task found. */
  Tasks?: ScheduledTask[];
}

/** This API method is designed to return title specific values which can be read by the client. For example, a developer could choose to store values which modify the user experience, such as enemy spawn rates, weapon strengths, movement speeds, etc. This allows a developer to update the title without the need to create, test, and ship a new build. If an override label is specified in the request, the overrides are applied automatically and returned with the title data. Note that due to caching, there may up to a minute delay in between updating title data and a query returning the newest value. */
export interface GetTitleDataRequest {
  /** Specific keys to search for in the title data (leave null to get all keys) */
  Keys?: string[];
  /** Optional field that specifies the name of an override. This value is ignored when used by the game client; otherwise, the overrides are applied automatically to the title data. */
  OverrideLabel?: string;
}

export interface GetTitleDataResult {
  /** a dictionary object of key / value pairs */
  Data?: Record<string, unknown>;
}

/** Get all bans for a user, including inactive and expired bans.  */
export interface GetUserBansRequest {
  /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
  PlayFabId: string;
}

export interface GetUserBansResult {
  /** Information about the bans */
  BanData?: BanInfo[];
}

/** Data is stored as JSON key-value pairs. If the Keys parameter is provided, the data object returned will only contain the data specific to the indicated Keys. Otherwise, the full set of custom user data will be returned. */
export interface GetUserDataRequest {
  /** The version that currently exists according to the caller. The call will return the data for all of the keys if the version in the system is greater than this. */
  IfChangedFromDataVersion?: number;
  /** Specific keys to search for in the custom user data. */
  Keys?: string[];
  /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
  PlayFabId: string;
}

export interface GetUserDataResult {
  /** User specific data for this title. */
  Data?: UserDataRecord;
  /** Indicates the current version of the data that has been set. This is incremented with every set call for that type of data (read-only, internal, etc). This version can be provided in Get calls to find updated data. */
  DataVersion: number;
  /** PlayFab unique identifier of the user whose custom data is being returned. */
  PlayFabId?: string;
}

/** All items currently in the user inventory will be returned, irrespective of how they were acquired (via purchasing, grants, coupons, etc.). Items that are expired, fully consumed, or are no longer valid are not considered to be in the user's current inventory, and so will not be not included. */
export interface GetUserInventoryRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
  PlayFabId: string;
}

export interface GetUserInventoryResult {
  /** Array of inventory items belonging to the user. */
  Inventory?: ItemInstance[];
  /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
  PlayFabId?: string;
  /** Array of virtual currency balance(s) belonging to the user. */
  VirtualCurrency?: Record<string, unknown>;
  /** Array of remaining times and timestamps for virtual currencies. */
  VirtualCurrencyRechargeTimes?: VirtualCurrencyRechargeTime;
}

/** Result of granting an item to a user. Note, to retrieve additional information for an item such as Tags, Description that are the same across all instances of the item, a call to GetCatalogItems is required. The ItemID of can be matched to a catalog entry, which contains the additional information. Also note that Custom Data is only set when the User's specific instance has updated the CustomData via a call to UpdateUserInventoryItemCustomData. Other fields such as UnitPrice and UnitCurrency are only set when the item was granted via a purchase. */
export interface GrantedItemInstance {
  /** Game specific comment associated with this instance when it was added to the user inventory. */
  Annotation?: string;
  /** Array of unique items that were awarded when this catalog item was purchased. */
  BundleContents?: string[];
  /** Unique identifier for the parent inventory item, as defined in the catalog, for object which were added from a bundle or container. */
  BundleParent?: string;
  /** Catalog version for the inventory item, when this instance was created. */
  CatalogVersion?: string;
  /** Unique PlayFab assigned ID for a specific character owned by a user */
  CharacterId?: string;
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
  /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
  PlayFabId?: string;
  /** Timestamp for when this instance was purchased. */
  PurchaseDate?: string;
  /** Total number of remaining uses, if this is a consumable item. */
  RemainingUses?: number;
  /** Result of this operation. */
  Result: boolean;
  /** Currency type for the cost of the catalog item. Not available when granting items. */
  UnitCurrency?: string;
  /** Cost of the catalog item in the given currency. Not available when granting items. */
  UnitPrice: number;
  /** The number of uses that were added or removed to this item in this call. */
  UsesIncrementedBy?: number;
}

export interface GrantItemSegmentAction {
  /** Item catalog id. */
  CatelogId?: string;
  /** Item id. */
  ItemId?: string;
  /** Item quantity. */
  Quantity: number;
}

/** This function directly adds inventory items to user inventories. As a result of this operations, the user will not be charged any transaction fee, regardless of the inventory item catalog definition. Please note that the processing time for inventory grants and purchases increases fractionally the more items are in the inventory, and the more items are in the grant/purchase operation. */
export interface GrantItemsToUsersRequest {
  /** Catalog version from which items are to be granted. */
  CatalogVersion?: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Array of items to grant and the users to whom the items are to be granted. */
  ItemGrants: ItemGrant[];
}

/** Please note that the order of the items in the response may not match the order of items in the request. */
export interface GrantItemsToUsersResult {
  /** Array of items granted to users. */
  ItemGrantResults?: GrantedItemInstance[];
}

export interface GrantVirtualCurrencySegmentAction {
  /** Virtual currency amount. */
  Amount: number;
  /** Virtual currency code. */
  CurrencyCode?: string;
}

/** This operation will increment the global counter for the number of these items available. This number cannot be decremented, except by actual grants. */
export interface IncrementLimitedEditionItemAvailabilityRequest {
  /** Amount to increase availability by. */
  Amount: number;
  /** Which catalog is being updated. If null, uses the default catalog. */
  CatalogVersion?: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** The item which needs more availability. */
  ItemId: string;
}

export interface IncrementLimitedEditionItemAvailabilityResult {}

export interface IncrementPlayerStatisticSegmentAction {
  /** Increment value. */
  IncrementValue: number;
  /** Statistic name. */
  StatisticName?: string;
}

/** Statistics are numeric values, with each statistic in the title also generating a leaderboard. When this call is made on a given statistic, this forces a reset of that statistic. Upon reset, the statistic updates to a new version with no values (effectively removing all players from the leaderboard). The previous version's statistic values are also archived for retrieval, if needed (see GetPlayerStatisticVersions). Statistics not created via a call to CreatePlayerStatisticDefinition by default have a VersionChangeInterval of Never, meaning they do not reset on a schedule, but they can be set to do so via a call to UpdatePlayerStatisticDefinition. Once a statistic has been reset (sometimes referred to as versioned or incremented), the now-previous version can still be written to for up a short, pre-defined period (currently 10 seconds), to prevent issues with levels completing around the time of the reset. Also, once reset, the historical statistics for players in the title may be retrieved using the URL specified in the version information (GetPlayerStatisticVersions). */
export interface IncrementPlayerStatisticVersionRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** unique name of the statistic */
  StatisticName?: string;
}

export interface IncrementPlayerStatisticVersionResult {
  /** version change history of the statistic */
  StatisticVersion?: PlayerStatisticVersion;
}

export interface InsightsScalingTaskParameter {
  /** Insights Performance Level to scale to. */
  Level: number;
}

export interface ItemGrant {
  /** String detailing any additional information concerning this operation. */
  Annotation?: string;
  /** Unique PlayFab assigned ID for a specific character owned by a user */
  CharacterId?: string;
  /** Key-value pairs to be written to the custom data. Note that keys are trimmed of whitespace, are limited in size, and may not begin with a '!' character or be null. */
  Data?: Record<string, unknown>;
  /** Unique identifier of the catalog item to be granted to the user. */
  ItemId: string;
  /** Optional list of Data-keys to remove from UserData. Some SDKs cannot insert null-values into Data due to language constraints. Use this to delete the keys directly. */
  KeysToRemove?: string[];
  /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
  PlayFabId: string;
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

export interface LastLoginDateSegmentFilter {
  /** Last player login date comparison. */
  Comparison?: SegmentFilterComparison;
  /** Last player login date. */
  LogInDate: string;
}

export interface LastLoginTimespanSegmentFilter {
  /** Last player login duration comparison. */
  Comparison?: SegmentFilterComparison;
  /** Last player login duration. */
  DurationInMinutes: number;
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

export interface LinkedUserAccountHasEmailSegmentFilter {
  /** Login provider comparison. */
  Comparison?: SegmentFilterComparison;
  /** Login provider. */
  LoginProvider?: SegmentLoginIdentityProvider;
}

export interface LinkedUserAccountSegmentFilter {
  /** Login provider. */
  LoginProvider?: SegmentLoginIdentityProvider;
}

export interface ListBuildsRequest {}

export interface ListBuildsResult {
  /** array of uploaded game server builds */
  Builds?: GetServerBuildInfoResult[];
}

export interface ListOpenIdConnectionRequest {}

export interface ListOpenIdConnectionResponse {
  /** The list of Open ID Connections */
  Connections?: OpenIdConnection[];
}

export interface ListVirtualCurrencyTypesRequest {}

export interface ListVirtualCurrencyTypesResult {
  /** List of virtual currency names defined for this title */
  VirtualCurrencies?: VirtualCurrencyData[];
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

export interface LocationSegmentFilter {
  /** Segment country code. */
  CountryCode?: SegmentCountryCode;
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

/** This API allows for access to details regarding a user in the PlayFab service, usually for purposes of customer support. Note that data returned may be Personally Identifying Information (PII), such as email address, and so care should be taken in how this data is stored and managed. Since this call will always return the relevant information for users who have accessed the title, the recommendation is to not store this data locally. */
export interface LookupUserAccountInfoRequest {
  /** User email address attached to their account */
  Email?: string;
  /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
  PlayFabId?: string;
  /** Title specific username to match against existing user accounts */
  TitleDisplayName?: string;
  /** PlayFab username for the account (3-20 characters) */
  Username?: string;
}

export interface LookupUserAccountInfoResult {
  /** User info for the user matching the request */
  UserInfo?: UserAccountInfo;
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

/** These details are used by the PlayFab matchmaking service to determine if an existing Game Server Instance has room for additional users, and by the PlayFab game server management service to determine when a new Game Server Host should be created in order to prevent excess load on existing Hosts. This operation is not additive. Using it will cause the game mode definition for the game server executable in question to be created from scratch. If there is an existing game server mode definition for the given BuildVersion, it will be deleted and replaced with the data specified in this call. */
export interface ModifyMatchmakerGameModesRequest {
  /** previously uploaded build version for which game modes are being specified */
  BuildVersion: string;
  /** array of game modes (Note: this will replace all game modes for the indicated build version) */
  GameModes: GameModeInfo[];
}

export interface ModifyMatchmakerGameModesResult {}

export interface ModifyServerBuildRequest {
  /** array of regions where this build can used, when it is active */
  ActiveRegions?: Region[];
  /** unique identifier of the previously uploaded build executable to be updated */
  BuildId: string;
  /** appended to the end of the command line when starting game servers */
  CommandLineTemplate?: string;
  /** developer comment(s) for this build */
  Comment?: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** path to the game server executable. Defaults to gameserver.exe */
  ExecutablePath?: string;
  /** maximum number of game server instances that can run on a single host machine */
  MaxGamesPerHost: number;
  /** minimum capacity of additional game server instances that can be started before the autoscaling service starts new host machines (given the number of current running host machines and game server instances) */
  MinFreeGameSlots: number;
  /** new timestamp */
  Timestamp?: string;
}

export interface ModifyServerBuildResult {
  /** array of regions where this build can used, when it is active */
  ActiveRegions?: Region[];
  /** unique identifier for this build executable */
  BuildId?: string;
  /** appended to the end of the command line when starting game servers */
  CommandLineTemplate?: string;
  /** developer comment(s) for this build */
  Comment?: string;
  /** path to the game server executable. Defaults to gameserver.exe */
  ExecutablePath?: string;
  /** maximum number of game server instances that can run on a single host machine */
  MaxGamesPerHost: number;
  /** minimum capacity of additional game server instances that can be started before the autoscaling service starts new host machines (given the number of current running host machines and game server instances) */
  MinFreeGameSlots: number;
  /** the current status of the build validation and processing steps */
  Status?: GameBuildStatus;
  /** time this build was last modified (or uploaded, if this build has never been modified) */
  Timestamp: string;
  /** Unique identifier for the title, found in the Settings > Game Properties section of the PlayFab developer site when a title has been selected. */
  TitleId?: string;
}

export interface ModifyUserVirtualCurrencyResult {
  /** Balance of the virtual currency after modification. */
  Balance: number;
  /** Amount added or subtracted from the user's virtual currency. Maximum VC balance is Int32 (2,147,483,647). Any increase over this value will be discarded. */
  BalanceChange: number;
  /** User currency was subtracted from. */
  PlayFabId?: string;
  /** Name of the virtual currency which was modified. */
  VirtualCurrency?: string;
}

/** Identifier by either name or ID. Note that a name may change due to renaming, or reused after being deleted. ID is immutable and unique. */
export interface NameIdentifier {
  /** Id Identifier, if present */
  Id?: string;
  /** Name Identifier, if present */
  Name?: string;
}

export interface OpenIdConnection {
  /** The client ID given by the ID provider. */
  ClientId?: string;
  /** The client secret given by the ID provider. */
  ClientSecret?: string;
  /** A name for the connection to identify it within the title. */
  ConnectionId?: string;
  /** Shows if data about the connection will be loaded from the issuer's discovery document */
  DiscoverConfiguration: boolean;
  /** Information for an OpenID Connect provider. */
  IssuerInformation?: OpenIdIssuerInformation;
}

export interface OpenIdIssuerInformation {
  /** Authorization endpoint URL to direct users to for signin. */
  AuthorizationUrl: string;
  /** The URL of the issuer of the tokens. This must match the exact URL of the issuer field in tokens. */
  Issuer: string;
  /** JSON Web Key Set for validating the signature of tokens. */
  JsonWebKeySet: Record<string, unknown>;
  /** Token endpoint URL for code verification. */
  TokenUrl: string;
}

export interface PermissionStatement {
  /** The action this statement effects. The only supported action is 'Execute'. */
  Action: string;
  /** Additional conditions to be applied for API Resources. */
  ApiConditions?: ApiCondition;
  /** A comment about the statement. Intended solely for bookkeeping and debugging. */
  Comment?: string;
  /** The effect this statement will have. It could be either Allow or Deny */
  Effect: EffectType;
  /** The principal this statement will effect. The only supported principal is '*'. */
  Principal: string;
  /** The resource this statements effects. The only supported resources look like 'pfrn:api--*' for all apis, or 'pfrn:api--/Client/ConfirmPurchase' for specific apis. */
  Resource: string;
}

export interface PlayerLinkedAccount {
  /** Linked account's email */
  Email?: string;
  /** Authentication platform */
  Platform?: LoginIdentityProvider;
  /** Platform user identifier */
  PlatformUserId?: string;
  /** Linked account's username */
  Username?: string;
}

export interface PlayerLocation {
  /** City of the player's geographic location. */
  City?: string;
  /** The two-character continent code for this location */
  ContinentCode: ContinentCode;
  /** The two-character ISO 3166-1 country code for the country associated with the location */
  CountryCode: CountryCode;
  /** Latitude coordinate of the player's geographic location. */
  Latitude?: number;
  /** Longitude coordinate of the player's geographic location. */
  Longitude?: number;
}

export interface PlayerProfile {
  /** Array of ad campaigns player has been attributed to */
  AdCampaignAttributions?: AdCampaignAttribution[];
  /** Image URL of the player's avatar. */
  AvatarUrl?: string;
  /** Banned until UTC Date. If permanent ban this is set for 20 years after the original ban date. */
  BannedUntil?: string;
  /** Array of contact email addresses associated with the player */
  ContactEmailAddresses?: ContactEmailInfo[];
  /** Player record created */
  Created?: string;
  /** Player Display Name */
  DisplayName?: string;
  /** Last login */
  LastLogin?: string;
  /** Array of third party accounts linked to this player */
  LinkedAccounts?: PlayerLinkedAccount[];
  /** Dictionary of player's locations by type. */
  Locations?: PlayerLocation;
  /** Player account origination */
  Origination?: LoginIdentityProvider;
  /** List of player variants for experimentation */
  PlayerExperimentVariants?: string[];
  /** PlayFab Player ID */
  PlayerId?: string;
  /** Array of player statistics */
  PlayerStatistics?: PlayerStatistic[];
  /** Publisher this player belongs to */
  PublisherId?: string;
  /** Array of configured push notification end points */
  PushNotificationRegistrations?: PushNotificationRegistration[];
  /** Dictionary of player's statistics using only the latest version's value */
  Statistics?: Record<string, unknown>;
  /** List of player's tags for segmentation. */
  Tags?: string[];
  /** Title ID this profile applies to */
  TitleId?: string;
  /** A sum of player's total purchases in USD across all currencies. */
  TotalValueToDateInUSD?: number;
  /** Dictionary of player's total purchases by currency. */
  ValuesToDate?: Record<string, unknown>;
  /** Dictionary of player's virtual currency balances */
  VirtualCurrencyBalances?: Record<string, unknown>;
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

export interface PlayerProfileViewConstraints {
  /** Whether to show player's avatar URL. Defaults to false */
  ShowAvatarUrl: boolean;
  /** Whether to show the banned until time. Defaults to false */
  ShowBannedUntil: boolean;
  /** Whether to show campaign attributions. Defaults to false */
  ShowCampaignAttributions: boolean;
  /** Whether to show contact email addresses. Defaults to false */
  ShowContactEmailAddresses: boolean;
  /** Whether to show the created date. Defaults to false */
  ShowCreated: boolean;
  /** Whether to show the display name. Defaults to false */
  ShowDisplayName: boolean;
  /** Whether to show player's experiment variants. Defaults to false */
  ShowExperimentVariants: boolean;
  /** Whether to show the last login time. Defaults to false */
  ShowLastLogin: boolean;
  /** Whether to show the linked accounts. Defaults to false */
  ShowLinkedAccounts: boolean;
  /** Whether to show player's locations. Defaults to false */
  ShowLocations: boolean;
  /** Whether to show player's membership information. Defaults to false */
  ShowMemberships: boolean;
  /** Whether to show origination. Defaults to false */
  ShowOrigination: boolean;
  /** Whether to show push notification registrations. Defaults to false */
  ShowPushNotificationRegistrations: boolean;
  /** Reserved for future development */
  ShowStatistics: boolean;
  /** Whether to show tags. Defaults to false */
  ShowTags: boolean;
  /** Whether to show the total value to date in usd. Defaults to false */
  ShowTotalValueToDateInUsd: boolean;
  /** Whether to show the values to date. Defaults to false */
  ShowValuesToDate: boolean;
}

export interface PlayerStatistic {
  /** Statistic ID */
  Id?: string;
  /** Statistic name */
  Name?: string;
  /** Current statistic value */
  StatisticValue: number;
  /** Statistic version (0 if not a versioned statistic) */
  StatisticVersion: number;
}

export interface PlayerStatisticDefinition {
  /** the aggregation method to use in updating the statistic (defaults to last) */
  AggregationMethod?: StatisticAggregationMethod;
  /** current active version of the statistic, incremented each time the statistic resets */
  CurrentVersion: number;
  /** unique name of the statistic */
  StatisticName?: string;
  /** interval at which the values of the statistic for all players are reset automatically */
  VersionChangeInterval?: StatisticResetIntervalOption;
}

export interface PlayerStatisticVersion {
  /** time when the statistic version became active */
  ActivationTime: string;
  /** URL for the downloadable archive of player statistic values, if available */
  ArchiveDownloadUrl?: string;
  /** time when the statistic version became inactive due to statistic version incrementing */
  DeactivationTime?: string;
  /** time at which the statistic version was scheduled to become active, based on the configured ResetInterval */
  ScheduledActivationTime?: string;
  /** time at which the statistic version was scheduled to become inactive, based on the configured ResetInterval */
  ScheduledDeactivationTime?: string;
  /** name of the statistic when the version became active */
  StatisticName?: string;
  /** status of the statistic version */
  Status?: StatisticVersionStatus;
  /** version of the statistic */
  Version: number;
}

export enum PushNotificationPlatform {
  ApplePushNotificationService = "ApplePushNotificationService",
  GoogleCloudMessaging = "GoogleCloudMessaging",
}

export interface PushNotificationRegistration {
  /** Notification configured endpoint */
  NotificationEndpointARN?: string;
  /** Push notification platform */
  Platform?: PushNotificationPlatform;
}

export interface PushNotificationRegistrationModel {
  /** Notification configured endpoint */
  NotificationEndpointARN?: string;
  /** Push notification platform */
  Platform?: PushNotificationPlatform;
}

export interface PushNotificationSegmentAction {
  /** Push notification template id. */
  PushNotificationTemplateId?: string;
}

export interface PushNotificationSegmentFilter {
  /** Push notification device platform. */
  PushNotificationDevicePlatform?: SegmentPushNotificationDevicePlatform;
}

export enum PushSetupPlatform {
  GCM = "GCM",
  APNS = "APNS",
  APNS_SANDBOX = "APNS_SANDBOX",
}

export interface RandomResultTable {
  /** Child nodes that indicate what kind of drop table item this actually is. */
  Nodes: ResultTableNode[];
  /** Unique name for this drop table */
  TableId: string;
}

export interface RandomResultTableListing {
  /** Catalog version this table is associated with */
  CatalogVersion?: string;
  /** Child nodes that indicate what kind of drop table item this actually is. */
  Nodes: ResultTableNode[];
  /** Unique name for this drop table */
  TableId: string;
}

export interface RefundPurchaseRequest {
  /** Unique order ID for the purchase in question. */
  OrderId: string;
  /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
  PlayFabId: string;
  /** The Reason parameter should correspond with the payment providers reason field, if they require one such as Facebook. In the case of Facebook this must match one of their refund or dispute resolution enums (See: https://developers.facebook.com/docs/payments/implementation-guide/handling-disputes-refunds) */
  Reason?: string;
}

export interface RefundPurchaseResponse {
  /** The order's updated purchase status. */
  PurchaseStatus?: string;
}

export enum Region {
  USCentral = "USCentral",
  USEast = "USEast",
  EUWest = "EUWest",
  Singapore = "Singapore",
  Japan = "Japan",
  Brazil = "Brazil",
  Australia = "Australia",
}

/** This API will trigger a player_tag_removed event and remove a tag with the given TagName and PlayFabID from the corresponding player profile. TagName can be used for segmentation and it is limited to 256 characters */
export interface RemovePlayerTagRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
  PlayFabId: string;
  /** Unique tag for player profile. */
  TagName: string;
}

export interface RemovePlayerTagResult {}

export interface RemoveServerBuildRequest {
  /** unique identifier of the previously uploaded build executable to be removed */
  BuildId: string;
}

export interface RemoveServerBuildResult {}

/** Virtual currencies to be removed cannot have entries in any catalog nor store for the title. Note that this operation will not remove player balances for the removed currencies; if a deleted currency is recreated at any point, user balances will be in an undefined state. */
export interface RemoveVirtualCurrencyTypesRequest {
  /** List of virtual currencies to delete */
  VirtualCurrencies: VirtualCurrencyData[];
}

/** Note that this action cannot be un-done. All statistics for this character will be deleted, removing the user from all leaderboards for the game. */
export interface ResetCharacterStatisticsRequest {
  /** Unique PlayFab assigned ID for a specific character owned by a user */
  CharacterId: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
  PlayFabId: string;
}

export interface ResetCharacterStatisticsResult {}

/** Resets a player's password taking in a new password based and validating the user based off of a token sent to the playerto their email. The token expires after 30 minutes. */
export interface ResetPasswordRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** The new password for the player. */
  Password: string;
  /** The token of the player requesting the password reset. */
  Token: string;
}

export interface ResetPasswordResult {}

/** Note that this action cannot be un-done. All statistics for this user will be deleted, removing the user from all leaderboards for the game. */
export interface ResetUserStatisticsRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
  PlayFabId: string;
}

export interface ResetUserStatisticsResult {}

export enum ResolutionOutcome {
  Revoke = "Revoke",
  Reinstate = "Reinstate",
  Manual = "Manual",
}

export interface ResolvePurchaseDisputeRequest {
  /** Unique order ID for the purchase in question. */
  OrderId: string;
  /** Enum for the desired purchase result state after notifying the payment provider. Valid values are Revoke, Reinstate and Manual. Manual will cause no change to the order state. */
  Outcome: ResolutionOutcome;
  /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
  PlayFabId: string;
  /** The Reason parameter should correspond with the payment providers reason field, if they require one such as Facebook. In the case of Facebook this must match one of their refund or dispute resolution enums (See: https://developers.facebook.com/docs/payments/implementation-guide/handling-disputes-refunds) */
  Reason?: string;
}

export interface ResolvePurchaseDisputeResponse {
  /** The order's updated purchase status. */
  PurchaseStatus?: string;
}

export interface ResultTableNode {
  /** Either an ItemId, or the TableId of another random result table */
  ResultItem: string;
  /** Whether this entry in the table is an item or a link to another table */
  ResultItemType: ResultTableNodeType;
  /** How likely this is to be rolled - larger numbers add more weight */
  Weight: number;
}

export enum ResultTableNodeType {
  ItemId = "ItemId",
  TableId = "TableId",
}

/** Setting the active state of all non-expired bans for a user to Inactive. Expired bans with an Active state will be ignored, however. Returns information about applied updates only. */
export interface RevokeAllBansForUserRequest {
  /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
  PlayFabId: string;
}

export interface RevokeAllBansForUserResult {
  /** Information on the bans that were revoked. */
  BanData?: BanInfo[];
}

/** Setting the active state of all bans requested to Inactive regardless of whether that ban has already expired. BanIds that do not exist will be skipped. Returns information about applied updates only.  */
export interface RevokeBansRequest {
  /** Ids of the bans to be revoked. Maximum 100. */
  BanIds: string[];
}

export interface RevokeBansResult {
  /** Information on the bans that were revoked */
  BanData?: BanInfo[];
}

export interface RevokeInventoryItem {
  /** Unique PlayFab assigned ID for a specific character owned by a user */
  CharacterId?: string;
  /** Unique PlayFab assigned instance identifier of the item */
  ItemInstanceId: string;
  /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
  PlayFabId: string;
}

/** In cases where the inventory item in question is a "crate", and the items it contained have already been dispensed, this will not revoke access or otherwise remove the items which were dispensed. */
export interface RevokeInventoryItemRequest {
  /** Unique PlayFab assigned ID for a specific character owned by a user */
  CharacterId?: string;
  /** Unique PlayFab assigned instance identifier of the item */
  ItemInstanceId: string;
  /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
  PlayFabId: string;
}

/** In cases where the inventory item in question is a "crate", and the items it contained have already been dispensed, this will not revoke access or otherwise remove the items which were dispensed. */
export interface RevokeInventoryItemsRequest {
  /** Array of player items to revoke, between 1 and 25 items. */
  Items: RevokeInventoryItem[];
}

export interface RevokeInventoryItemsResult {
  /** Collection of any errors that occurred during processing. */
  Errors?: RevokeItemError[];
}

export interface RevokeInventoryResult {}

export interface RevokeItemError {
  /** Specific error that was encountered. */
  Error?: GenericErrorCodes;
  /** Item information that failed to be revoked. */
  Item?: RevokeInventoryItem;
}

/** The returned task instance ID can be used to query for task execution status. */
export interface RunTaskRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Provide either the task ID or the task name to run a task. */
  Identifier?: NameIdentifier;
}

export interface RunTaskResult {
  /** ID of the task instance that is started. This can be used in Get*TaskInstance (e.g. GetCloudScriptTaskInstance) API call to retrieve status for the task instance. */
  TaskInstanceId?: string;
}

export interface ScheduledTask {
  /** Description the task */
  Description?: string;
  /** Whether the schedule is active. Inactive schedule will not trigger task execution. */
  IsActive: boolean;
  /** UTC time of last run */
  LastRunTime?: string;
  /** Name of the task. This is a unique identifier for tasks in the title. */
  Name: string;
  /** UTC time of next run */
  NextRunTime?: string;
  /** Task parameter. Different types of task have different parameter structure. See each task type's create API documentation for the details. */
  Parameter?: Record<string, unknown>;
  /** Cron expression for the run schedule of the task. The expression should be in UTC. */
  Schedule?: string;
  /** ID of the task */
  TaskId?: string;
  /** Task type. */
  Type?: ScheduledTaskType;
}

export enum ScheduledTaskType {
  CloudScript = "CloudScript",
  ActionsOnPlayerSegment = "ActionsOnPlayerSegment",
  CloudScriptAzureFunctions = "CloudScriptAzureFunctions",
  InsightsScheduledScaling = "InsightsScheduledScaling",
}

export interface ScriptExecutionError {
  /** Error code, such as CloudScriptNotFound, JavascriptException, CloudScriptFunctionArgumentSizeExceeded, CloudScriptAPIRequestCountExceeded, CloudScriptAPIRequestError, or CloudScriptHTTPRequestError */
  Error?: string;
  /** Details about the error */
  Message?: string;
  /** Point during the execution of the script at which the error occurred, if any */
  StackTrace?: string;
}

export interface SegmentAndDefinition {
  /** Filter property for ad campaign filter. */
  AdCampaignFilter?: AdCampaignSegmentFilter;
  /** property for all player filter. */
  AllPlayersFilter?: AllPlayersSegmentFilter;
  /** Filter property for first login date. */
  FirstLoginDateFilter?: FirstLoginDateSegmentFilter;
  /** Filter property for first login timespan. */
  FirstLoginFilter?: FirstLoginTimespanSegmentFilter;
  /** Filter property for last login date. */
  LastLoginDateFilter?: LastLoginDateSegmentFilter;
  /** Filter property for last login timespan. */
  LastLoginFilter?: LastLoginTimespanSegmentFilter;
  /** Filter property for linked in user account. */
  LinkedUserAccountFilter?: LinkedUserAccountSegmentFilter;
  /** Filter property for linked in user account has email. */
  LinkedUserAccountHasEmailFilter?: LinkedUserAccountHasEmailSegmentFilter;
  /** Filter property for location. */
  LocationFilter?: LocationSegmentFilter;
  /** Filter property for push notification. */
  PushNotificationFilter?: PushNotificationSegmentFilter;
  /** Filter property for statistics. */
  StatisticFilter?: StatisticSegmentFilter;
  /** Filter property for tags. */
  TagFilter?: TagSegmentFilter;
  /** Filter property for total value to date in USD. */
  TotalValueToDateInUSDFilter?: TotalValueToDateInUSDSegmentFilter;
  /** Filter property for user origination. */
  UserOriginationFilter?: UserOriginationSegmentFilter;
  /** Filter property for value to date. */
  ValueToDateFilter?: ValueToDateSegmentFilter;
  /** Filter property for virtual currency. */
  VirtualCurrencyBalanceFilter?: VirtualCurrencyBalanceSegmentFilter;
}

export enum SegmentCountryCode {
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

export enum SegmentCurrency {
  AED = "AED",
  AFN = "AFN",
  ALL = "ALL",
  AMD = "AMD",
  ANG = "ANG",
  AOA = "AOA",
  ARS = "ARS",
  AUD = "AUD",
  AWG = "AWG",
  AZN = "AZN",
  BAM = "BAM",
  BBD = "BBD",
  BDT = "BDT",
  BGN = "BGN",
  BHD = "BHD",
  BIF = "BIF",
  BMD = "BMD",
  BND = "BND",
  BOB = "BOB",
  BRL = "BRL",
  BSD = "BSD",
  BTN = "BTN",
  BWP = "BWP",
  BYR = "BYR",
  BZD = "BZD",
  CAD = "CAD",
  CDF = "CDF",
  CHF = "CHF",
  CLP = "CLP",
  CNY = "CNY",
  COP = "COP",
  CRC = "CRC",
  CUC = "CUC",
  CUP = "CUP",
  CVE = "CVE",
  CZK = "CZK",
  DJF = "DJF",
  DKK = "DKK",
  DOP = "DOP",
  DZD = "DZD",
  EGP = "EGP",
  ERN = "ERN",
  ETB = "ETB",
  EUR = "EUR",
  FJD = "FJD",
  FKP = "FKP",
  GBP = "GBP",
  GEL = "GEL",
  GGP = "GGP",
  GHS = "GHS",
  GIP = "GIP",
  GMD = "GMD",
  GNF = "GNF",
  GTQ = "GTQ",
  GYD = "GYD",
  HKD = "HKD",
  HNL = "HNL",
  HRK = "HRK",
  HTG = "HTG",
  HUF = "HUF",
  IDR = "IDR",
  ILS = "ILS",
  IMP = "IMP",
  INR = "INR",
  IQD = "IQD",
  IRR = "IRR",
  ISK = "ISK",
  JEP = "JEP",
  JMD = "JMD",
  JOD = "JOD",
  JPY = "JPY",
  KES = "KES",
  KGS = "KGS",
  KHR = "KHR",
  KMF = "KMF",
  KPW = "KPW",
  KRW = "KRW",
  KWD = "KWD",
  KYD = "KYD",
  KZT = "KZT",
  LAK = "LAK",
  LBP = "LBP",
  LKR = "LKR",
  LRD = "LRD",
  LSL = "LSL",
  LYD = "LYD",
  MAD = "MAD",
  MDL = "MDL",
  MGA = "MGA",
  MKD = "MKD",
  MMK = "MMK",
  MNT = "MNT",
  MOP = "MOP",
  MRO = "MRO",
  MUR = "MUR",
  MVR = "MVR",
  MWK = "MWK",
  MXN = "MXN",
  MYR = "MYR",
  MZN = "MZN",
  NAD = "NAD",
  NGN = "NGN",
  NIO = "NIO",
  NOK = "NOK",
  NPR = "NPR",
  NZD = "NZD",
  OMR = "OMR",
  PAB = "PAB",
  PEN = "PEN",
  PGK = "PGK",
  PHP = "PHP",
  PKR = "PKR",
  PLN = "PLN",
  PYG = "PYG",
  QAR = "QAR",
  RON = "RON",
  RSD = "RSD",
  RUB = "RUB",
  RWF = "RWF",
  SAR = "SAR",
  SBD = "SBD",
  SCR = "SCR",
  SDG = "SDG",
  SEK = "SEK",
  SGD = "SGD",
  SHP = "SHP",
  SLL = "SLL",
  SOS = "SOS",
  SPL = "SPL",
  SRD = "SRD",
  STD = "STD",
  SVC = "SVC",
  SYP = "SYP",
  SZL = "SZL",
  THB = "THB",
  TJS = "TJS",
  TMT = "TMT",
  TND = "TND",
  TOP = "TOP",
  TRY = "TRY",
  TTD = "TTD",
  TVD = "TVD",
  TWD = "TWD",
  TZS = "TZS",
  UAH = "UAH",
  UGX = "UGX",
  USD = "USD",
  UYU = "UYU",
  UZS = "UZS",
  VEF = "VEF",
  VND = "VND",
  VUV = "VUV",
  WST = "WST",
  XAF = "XAF",
  XCD = "XCD",
  XDR = "XDR",
  XOF = "XOF",
  XPF = "XPF",
  YER = "YER",
  ZAR = "ZAR",
  ZMW = "ZMW",
  ZWD = "ZWD",
}

export enum SegmentFilterComparison {
  GreaterThan = "GreaterThan",
  LessThan = "LessThan",
  EqualTo = "EqualTo",
  NotEqualTo = "NotEqualTo",
  GreaterThanOrEqual = "GreaterThanOrEqual",
  LessThanOrEqual = "LessThanOrEqual",
  Exists = "Exists",
  Contains = "Contains",
  NotContains = "NotContains",
}

export enum SegmentLoginIdentityProvider {
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

export interface SegmentModel {
  /** Segment description. */
  Description?: string;
  /** Segment actions for current entered segment players. */
  EnteredSegmentActions?: SegmentTrigger[];
  /** Segment last updated date time. */
  LastUpdateTime: string;
  /** Segment actions for current left segment players. */
  LeftSegmentActions?: SegmentTrigger[];
  /** Segment name. */
  Name?: string;
  /** Segment id in hex. */
  SegmentId?: string;
  /** Segment or definitions. This includes segment and definitions and filters. */
  SegmentOrDefinitions?: SegmentOrDefinition[];
}

export interface SegmentOrDefinition {
  /** List of segment and definitions. */
  SegmentAndDefinitions?: SegmentAndDefinition[];
}

export enum SegmentPushNotificationDevicePlatform {
  ApplePushNotificationService = "ApplePushNotificationService",
  GoogleCloudMessaging = "GoogleCloudMessaging",
}

export interface SegmentTrigger {
  /** Ban player segment trigger action. */
  BanPlayerAction?: BanPlayerSegmentAction;
  /** Delete player segment trigger action. */
  DeletePlayerAction?: DeletePlayerSegmentAction;
  /** Delete player statistic segment trigger action. */
  DeletePlayerStatisticAction?: DeletePlayerStatisticSegmentAction;
  /** Email notification segment trigger action. */
  EmailNotificationAction?: EmailNotificationSegmentAction;
  /** Execute azure function segment trigger action. */
  ExecuteAzureFunctionAction?: ExecuteAzureFunctionSegmentAction;
  /** Execute cloud script segment trigger action. */
  ExecuteCloudScriptAction?: ExecuteCloudScriptSegmentAction;
  /** Grant item segment trigger action. */
  GrantItemAction?: GrantItemSegmentAction;
  /** Grant virtual currency segment trigger action. */
  GrantVirtualCurrencyAction?: GrantVirtualCurrencySegmentAction;
  /** Increment player statistic segment trigger action. */
  IncrementPlayerStatisticAction?: IncrementPlayerStatisticSegmentAction;
  /** Push notification segment trigger action. */
  PushNotificationAction?: PushNotificationSegmentAction;
}

/** If the account in question is a "temporary" account (for example, one that was created via a call to LoginFromIOSDeviceID), thisfunction will have no effect. Only PlayFab accounts which have valid email addresses will be able to receive a password reset email using this API. */
export interface SendAccountRecoveryEmailRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** User email address attached to their account */
  Email: string;
  /** The email template id of the account recovery email template to send. */
  EmailTemplateId?: string;
}

export interface SendAccountRecoveryEmailResult {}

/** APIs that require signatures require that the player have a configured Player Secret Key that is used to sign all requests. Players that don't have a secret will be blocked from making API calls until it is configured. To create a signature header add a SHA256 hashed string containing UTF8 encoded JSON body as it will be sent to the server, the current time in UTC formatted to ISO 8601, and the players secret formatted as 'body.date.secret'. Place the resulting hash into the header X-PlayFab-Signature, along with a header X-PlayFab-Timestamp of the same UTC timestamp used in the signature. */
export interface SetPlayerSecretRequest {
  /** Player secret that is used to verify API request signatures (Enterprise Only). */
  PlayerSecret?: string;
  /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
  PlayFabId: string;
}

export interface SetPlayerSecretResult {}

export interface SetPublishedRevisionRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Revision to make the current published revision */
  Revision: number;
  /** Version number */
  Version: number;
}

export interface SetPublishedRevisionResult {}

/** This API is designed to store publisher-specific values which can be read, but not written to, by the client. This data is shared across all titles assigned to a particular publisher, and can be used for cross-game coordination. Only titles assigned to a publisher can use this API. This operation is additive. If a Key does not exist in the current dataset, it will be added with the specified Value. If it already exists, the Value for that key will be overwritten with the new Value. For more information email helloplayfab@microsoft.com */
export interface SetPublisherDataRequest {
  /** key we want to set a value on (note, this is additive - will only replace an existing key's value if they are the same name.) Keys are trimmed of whitespace. Keys may not begin with the '!' character. */
  Key: string;
  /** new value to set. Set to null to remove a value */
  Value?: string;
}

export interface SetPublisherDataResult {}

/** Will set the given key values in the specified override or the primary title data based on whether the label is provided or not. */
export interface SetTitleDataAndOverridesRequest {
  /** List of titleData key-value pairs to set/delete. Use an empty value to delete an existing key; use a non-empty value to create/update a key. */
  KeyValues: TitleDataKeyValue[];
  /** Name of the override. */
  OverrideLabel?: string;
}

export interface SetTitleDataAndOverridesResult {}

/** This API method is designed to store title specific values which can be read by the client. For example, a developer could choose to store values which modify the user experience, such as enemy spawn rates, weapon strengths, movement speeds, etc. This allows a developer to update the title without the need to create, test, and ship a new build. This operation is additive. If a Key does not exist in the current dataset, it will be added with the specified Value. If it already exists, the Value for that key will be overwritten with the new Value. */
export interface SetTitleDataRequest {
  /** key we want to set a value on (note, this is additive - will only replace an existing key's value if they are the same name.) Keys are trimmed of whitespace. Keys may not begin with the '!' character. */
  Key: string;
  /** new value to set. Set to null to remove a value */
  Value?: string;
}

export interface SetTitleDataResult {}

/** When using the Apple Push Notification service (APNS) or the development version (APNS_SANDBOX), the APNS Private Key should be used as the Credential in this call. With Google Cloud Messaging (GCM), the Android API Key should be used. The current ARN (if one exists) can be overwritten by setting the OverwriteOldARN boolean to true. */
export interface SetupPushNotificationRequest {
  /** Credential is the Private Key for APNS/APNS_SANDBOX, and the API Key for GCM */
  Credential: string;
  /** for APNS, this is the PlatformPrincipal (SSL Certificate) */
  Key?: string;
  /** name of the application sending the message (application names must be made up of only uppercase and lowercase ASCII letters, numbers, underscores, hyphens, and periods, and must be between 1 and 256 characters long) */
  Name: string;
  /** replace any existing ARN with the newly generated one. If this is set to false, an error will be returned if notifications have already setup for this platform. */
  OverwriteOldARN: boolean;
  /** supported notification platforms are Apple Push Notification Service (APNS and APNS_SANDBOX) for iOS and Google Cloud Messaging (GCM) for Android */
  Platform: PushSetupPlatform;
}

export interface SetupPushNotificationResult {
  /** Amazon Resource Name for the created notification topic. */
  ARN?: string;
}

export interface SharedSecret {
  /** Flag to indicate if this key is disabled */
  Disabled: boolean;
  /** Friendly name for this key */
  FriendlyName?: string;
  /** The player shared secret to use when calling Client/GetTitlePublicKey */
  SecretKey?: string;
}

export enum SourceType {
  Admin = "Admin",
  BackEnd = "BackEnd",
  GameClient = "GameClient",
  GameServer = "GameServer",
  Partner = "Partner",
  Custom = "Custom",
  API = "API",
}

export enum StatisticAggregationMethod {
  Last = "Last",
  Min = "Min",
  Max = "Max",
  Sum = "Sum",
}

export interface StatisticModel {
  /** Statistic name */
  Name?: string;
  /** Statistic value */
  Value: number;
  /** Statistic version (0 if not a versioned statistic) */
  Version: number;
}

export enum StatisticResetIntervalOption {
  Never = "Never",
  Hour = "Hour",
  Day = "Day",
  Week = "Week",
  Month = "Month",
}

export interface StatisticSegmentFilter {
  /** Statistic filter comparison. */
  Comparison?: SegmentFilterComparison;
  /** Statistic filter value. */
  FilterValue?: string;
  /** Statistic name. */
  Name?: string;
  /** Use current version of statistic? */
  UseCurrentVersion?: boolean;
  /** Statistic version. */
  Version?: number;
}

export enum StatisticVersionArchivalStatus {
  NotScheduled = "NotScheduled",
  Scheduled = "Scheduled",
  Queued = "Queued",
  InProgress = "InProgress",
  Complete = "Complete",
}

export enum StatisticVersionStatus {
  Active = "Active",
  SnapshotPending = "SnapshotPending",
  Snapshot = "Snapshot",
  ArchivalPending = "ArchivalPending",
  Archived = "Archived",
}

/** A store entry that list a catalog item at a particular price */
export interface StoreItem {
  /** Store specific custom data. The data only exists as part of this store; it is not transferred to item instances */
  CustomData?: Record<string, unknown>;
  /** Intended display position for this item. Note that 0 is the first position */
  DisplayPosition?: number;
  /** Unique identifier of the item as it exists in the catalog - note that this must exactly match the ItemId from the catalog */
  ItemId: string;
  /** Override prices for this item for specific currencies */
  RealCurrencyPrices?: Record<string, unknown>;
  /** Override prices for this item in virtual currencies and "RM" (the base Real Money purchase price, in USD pennies) */
  VirtualCurrencyPrices?: Record<string, unknown>;
}

/** Marketing data about a specific store */
export interface StoreMarketingModel {
  /** Tagline for a store. */
  Description?: string;
  /** Display name of a store as it will appear to users. */
  DisplayName?: string;
  /** Custom data about a store. */
  Metadata?: Record<string, unknown>;
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

export interface SubtractUserVirtualCurrencyRequest {
  /** Amount to be subtracted from the user balance of the specified virtual currency. */
  Amount: number;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** PlayFab unique identifier of the user whose virtual currency balance is to be decreased. */
  PlayFabId: string;
  /** Name of the virtual currency which is to be decremented. */
  VirtualCurrency: string;
}

export interface TagModel {
  /** Full value of the tag, including namespace */
  TagValue?: string;
}

export interface TagSegmentFilter {
  /** Tag comparison. */
  Comparison?: SegmentFilterComparison;
  /** Tag value. */
  TagValue?: string;
}

export interface TaskInstanceBasicSummary {
  /** UTC timestamp when the task completed. */
  CompletedAt?: string;
  /** Error message for last processing attempt, if an error occured. */
  ErrorMessage?: string;
  /** Estimated time remaining in seconds. */
  EstimatedSecondsRemaining?: number;
  /** Progress represented as percentage. */
  PercentComplete?: number;
  /** If manually scheduled, ID of user who scheduled the task. */
  ScheduledByUserId?: string;
  /** UTC timestamp when the task started. */
  StartedAt: string;
  /** Current status of the task instance. */
  Status?: TaskInstanceStatus;
  /** Identifier of the task this instance belongs to. */
  TaskIdentifier?: NameIdentifier;
  /** ID of the task instance. */
  TaskInstanceId?: string;
  /** Type of the task. */
  Type?: ScheduledTaskType;
}

export enum TaskInstanceStatus {
  Succeeded = "Succeeded",
  Starting = "Starting",
  InProgress = "InProgress",
  Failed = "Failed",
  Aborted = "Aborted",
  Stalled = "Stalled",
}

export enum TitleActivationStatus {
  None = "None",
  ActivatedTitleKey = "ActivatedTitleKey",
  PendingSteam = "PendingSteam",
  ActivatedSteam = "ActivatedSteam",
  RevokedSteam = "RevokedSteam",
}

export interface TitleDataKeyValue {
  /** Key we want to set a value on (note, this is additive - will only replace an existing key's value if they are the same name.) Keys are trimmed of whitespace. Keys may not begin with the '!' character. */
  Key?: string;
  /** New value to set. Set to null to remove a value */
  Value?: string;
}

export interface TotalValueToDateInUSDSegmentFilter {
  /** Total value to date USD amount. */
  Amount?: string;
  /** Total value to date USD comparison. */
  Comparison?: SegmentFilterComparison;
}

/** Represents a single update ban request. */
export interface UpdateBanRequest {
  /** The updated active state for the ban. Null for no change. */
  Active?: boolean;
  /** The id of the ban to be updated. */
  BanId: string;
  /** The updated expiration date for the ban. Null for no change. */
  Expires?: string;
  /** The updated IP address for the ban. Null for no change. */
  IPAddress?: string;
  /** The updated MAC address for the ban. Null for no change. */
  MACAddress?: string;
  /** Whether to make this ban permanent. Set to true to make this ban permanent. This will not modify Active state. */
  Permanent?: boolean;
  /** The updated reason for the ban to be updated. Maximum 140 characters. Null for no change. */
  Reason?: string;
}

/** For each ban, only updates the values that are set. Leave any value to null for no change. If a ban could not be found, the rest are still applied. Returns information about applied updates only. */
export interface UpdateBansRequest {
  /** List of bans to be updated. Maximum 100. */
  Bans: UpdateBanRequest[];
}

export interface UpdateBansResult {
  /** Information on the bans that were updated */
  BanData?: BanInfo[];
}

/** This operation is not additive. Using it will cause the indicated catalog version to be created from scratch. If there is an existing catalog with the version number in question, it will be deleted and replaced with only the items specified in this call. */
export interface UpdateCatalogItemsRequest {
  /** Array of catalog items to be submitted. Note that while CatalogItem has a parameter for CatalogVersion, it is not required and ignored in this call. */
  Catalog?: CatalogItem[];
  /** Which catalog is being updated. If null, uses the default catalog. */
  CatalogVersion?: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Should this catalog be set as the default catalog. Defaults to true. If there is currently no default catalog, this will always set it. */
  SetAsDefaultCatalog?: boolean;
}

export interface UpdateCatalogItemsResult {}

export interface UpdateCloudScriptRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** PlayFab user ID of the developer initiating the request. */
  DeveloperPlayFabId?: string;
  /** List of Cloud Script files to upload to create the new revision. Must have at least one file. */
  Files: CloudScriptFile[];
  /** Immediately publish the new revision */
  Publish: boolean;
}

export interface UpdateCloudScriptResult {
  /** New revision number created */
  Revision: number;
  /** Cloud Script version updated */
  Version: number;
}

export interface UpdateOpenIdConnectionRequest {
  /** The client ID given by the ID provider. */
  ClientId?: string;
  /** The client secret given by the ID provider. */
  ClientSecret?: string;
  /** A name for the connection that identifies it within the title. */
  ConnectionId: string;
  /** The issuer URL or discovery document URL to read issuer information from */
  IssuerDiscoveryUrl?: string;
  /** Manually specified information for an OpenID Connect issuer. */
  IssuerInformation?: OpenIdIssuerInformation;
}

/** Player Shared Secret Keys are used for the call to Client/GetTitlePublicKey, which exchanges the shared secret for an RSA CSP blob to be used to encrypt the payload of account creation requests when that API requires a signature header. */
export interface UpdatePlayerSharedSecretRequest {
  /** Disable or Enable this key */
  Disabled: boolean;
  /** Friendly name for this key */
  FriendlyName?: string;
  /** The shared secret key to update */
  SecretKey?: string;
}

export interface UpdatePlayerSharedSecretResult {}

/** Statistics are numeric values, with each statistic in the title also generating a leaderboard. The ResetInterval enables automatically resetting leaderboards on a specified interval. Upon reset, the statistic updates to a new version with no values (effectively removing all players from the leaderboard). The previous version's statistic values are also archived for retrieval, if needed (see GetPlayerStatisticVersions). Statistics not created via a call to CreatePlayerStatisticDefinition by default have a VersionChangeInterval of Never, meaning they do not reset on a schedule, but they can be set to do so via a call to UpdatePlayerStatisticDefinition. Once a statistic has been reset (sometimes referred to as versioned or incremented), the now-previous version can still be written to for up a short, pre-defined period (currently 10 seconds), to prevent issues with levels completing around the time of the reset. Also, once reset, the historical statistics for players in the title may be retrieved using the URL specified in the version information (GetPlayerStatisticVersions). The AggregationMethod determines what action is taken when a new statistic value is submitted - always update with the new value (Last), use the highest of the old and new values (Max), use the smallest (Min), or add them together (Sum). */
export interface UpdatePlayerStatisticDefinitionRequest {
  /** the aggregation method to use in updating the statistic (defaults to last) */
  AggregationMethod?: StatisticAggregationMethod;
  /** unique name of the statistic */
  StatisticName: string;
  /** interval at which the values of the statistic for all players are reset (changes are effective at the next occurance of the new interval boundary) */
  VersionChangeInterval?: StatisticResetIntervalOption;
}

export interface UpdatePlayerStatisticDefinitionResult {
  /** updated statistic definition */
  Statistic?: PlayerStatisticDefinition;
}

/** Updates permissions for your title. Policies affect what is allowed to happen on your title. Your policy is a collection of statements that, together, govern particular area for your title. Today, the only allowed policy is called 'ApiPolicy' and it governs what API calls are allowed. To verify that you have the latest version always download the current policy from GetPolicy before uploading a new policy. PlayFab updates the base policy periodically and will automatically apply it to the uploaded policy. Overwriting the combined policy blindly may result in unexpected API errors. */
export interface UpdatePolicyRequest {
  /** Whether to overwrite or append to the existing policy. */
  OverwritePolicy: boolean;
  /** The name of the policy being updated. Only supported name is 'ApiPolicy' */
  PolicyName: string;
  /** Version of the policy to update. Must be the latest (as returned by GetPolicy). */
  PolicyVersion: number;
  /** The new statements to include in the policy. */
  Statements: PermissionStatement[];
}

export interface UpdatePolicyResponse {
  /** The name of the policy that was updated. */
  PolicyName?: string;
  /** The statements included in the new version of the policy. */
  Statements?: PermissionStatement[];
}

/** This operation is additive. Tables with TableId values not currently defined will be added, while those with TableId values matching Tables currently in the catalog will be overwritten with the given values. */
export interface UpdateRandomResultTablesRequest {
  /** which catalog is being updated. If null, update the current default catalog version */
  CatalogVersion?: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** array of random result tables to make available (Note: specifying an existing TableId will result in overwriting that table, while any others will be added to the available set) */
  Tables?: RandomResultTable[];
}

export interface UpdateRandomResultTablesResult {}

/** Update segment properties data which are planning to update */
export interface UpdateSegmentRequest {
  /** Segment model with all of the segment properties data. */
  SegmentModel: SegmentModel;
}

export interface UpdateSegmentResponse {
  /** Error message. */
  ErrorMessage?: string;
  /** Segment id. */
  SegmentId?: string;
}

/** This operation is not additive. Using it will cause the indicated virtual store to be created from scratch. If there is an existing store with the same storeId, it will be deleted and replaced with only the items specified in this call. A store contains an array of references to items defined inthe catalog, along with the prices for the item, in both real world and virtual currencies. These prices act as an override to any prices defined in the catalog. In this way, the base definitions of the items may be defined in the catalog, with all associated properties, while the pricing can be set for each store, as needed. This allows for subsets of goods to be defined for different purposes (in order to simplify showing some, but not all catalog items to users, based upon different characteristics), along with unique prices. Note that all prices defined in the catalog and store definitions for the item are considered valid, and that a compromised client can be made to send a request for an item based upon any of these definitions. If no price is specified in the store for an item, the price set in the catalog should be displayed to the user. */
export interface UpdateStoreItemsRequest {
  /** Catalog version of the store to update. If null, uses the default catalog. */
  CatalogVersion?: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Additional data about the store */
  MarketingData?: StoreMarketingModel;
  /** Array of store items - references to catalog items, with specific pricing - to be added */
  Store?: StoreItem[];
  /** Unique identifier for the store which is to be updated */
  StoreId: string;
}

export interface UpdateStoreItemsResult {}

/** Note that when calling this API, all properties of the task have to be provided, including properties that you do not want to change. Parameters not specified would be set to default value. If the task name in the update request is new, a task rename operation will be executed before updating other fields of the task. WARNING: Renaming of a task may break logics where the task name is used as an identifier. */
export interface UpdateTaskRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Description the task */
  Description?: string;
  /** Specify either the task ID or the name of the task to be updated. */
  Identifier?: NameIdentifier;
  /** Whether the schedule is active. Inactive schedule will not trigger task execution. */
  IsActive: boolean;
  /** Name of the task. This is a unique identifier for tasks in the title. */
  Name: string;
  /** Parameter object specific to the task type. See each task type's create API documentation for details. */
  Parameter?: Record<string, unknown>;
  /** Cron expression for the run schedule of the task. The expression should be in UTC. */
  Schedule?: string;
  /** Task type. */
  Type: ScheduledTaskType;
}

/** This function performs an additive update of the arbitrary JSON object containing the custom data for the user. In updating the custom data object, keys which already exist in the object will have their values overwritten, while keys with null values will be removed. No other key-value pairs will be changed apart from those specified in the call. */
export interface UpdateUserDataRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Key-value pairs to be written to the custom data. Note that keys are trimmed of whitespace, are limited in size, and may not begin with a '!' character or be null. */
  Data?: Record<string, unknown>;
  /** Optional list of Data-keys to remove from UserData. Some SDKs cannot insert null-values into Data due to language constraints. Use this to delete the keys directly. */
  KeysToRemove?: string[];
  /** Permission to be applied to all user data keys written in this request. Defaults to "private" if not set. */
  Permission?: UserDataPermission;
  /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
  PlayFabId: string;
}

export interface UpdateUserDataResult {
  /** Indicates the current version of the data that has been set. This is incremented with every set call for that type of data (read-only, internal, etc). This version can be provided in Get calls to find updated data. */
  DataVersion: number;
}

/** This function performs an additive update of the arbitrary JSON object containing the custom data for the user. In updating the custom data object, keys which already exist in the object will have their values overwritten, keys with null values will be removed. No other key-value pairs will be changed apart from those specified in the call. */
export interface UpdateUserInternalDataRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Key-value pairs to be written to the custom data. Note that keys are trimmed of whitespace, are limited in size, and may not begin with a '!' character or be null. */
  Data?: Record<string, unknown>;
  /** Optional list of Data-keys to remove from UserData. Some SDKs cannot insert null-values into Data due to language constraints. Use this to delete the keys directly. */
  KeysToRemove?: string[];
  /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
  PlayFabId: string;
}

/** In addition to the PlayFab username, titles can make use of a DisplayName which is also a unique identifier, but specific to the title. This allows for unique names which more closely match the theme or genre of a title, for example. This API enables changing that name, whether due to a customer request, an offensive name choice, etc. */
export interface UpdateUserTitleDisplayNameRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** New title display name for the user - must be between 3 and 25 characters */
  DisplayName: string;
  /** PlayFab unique identifier of the user whose title specific display name is to be changed */
  PlayFabId: string;
}

export interface UpdateUserTitleDisplayNameResult {
  /** current title display name for the user (this will be the original display name if the rename attempt failed) */
  DisplayName?: string;
}

export interface UserAccountInfo {
  /** User Android device information, if an Android device has been linked */
  AndroidDeviceInfo?: UserAndroidDeviceInfo;
  /** Sign in with Apple account information, if an Apple account has been linked */
  AppleAccountInfo?: UserAppleIdInfo;
  /** Timestamp indicating when the user account was created */
  Created: string;
  /** Custom ID information, if a custom ID has been assigned */
  CustomIdInfo?: UserCustomIdInfo;
  /** User Facebook information, if a Facebook account has been linked */
  FacebookInfo?: UserFacebookInfo;
  /** Facebook Instant Games account information, if a Facebook Instant Games account has been linked */
  FacebookInstantGamesIdInfo?: UserFacebookInstantGamesIdInfo;
  /** User Gamecenter information, if a Gamecenter account has been linked */
  GameCenterInfo?: UserGameCenterInfo;
  /** User Google account information, if a Google account has been linked */
  GoogleInfo?: UserGoogleInfo;
  /** User iOS device information, if an iOS device has been linked */
  IosDeviceInfo?: UserIosDeviceInfo;
  /** User Kongregate account information, if a Kongregate account has been linked */
  KongregateInfo?: UserKongregateInfo;
  /** Nintendo Switch account information, if a Nintendo Switch account has been linked */
  NintendoSwitchAccountInfo?: UserNintendoSwitchAccountIdInfo;
  /** Nintendo Switch device information, if a Nintendo Switch device has been linked */
  NintendoSwitchDeviceIdInfo?: UserNintendoSwitchDeviceIdInfo;
  /** OpenID Connect information, if any OpenID Connect accounts have been linked */
  OpenIdInfo?: UserOpenIdInfo[];
  /** Unique identifier for the user account */
  PlayFabId?: string;
  /** Personal information for the user which is considered more sensitive */
  PrivateInfo?: UserPrivateAccountInfo;
  /** User PSN account information, if a PSN account has been linked */
  PsnInfo?: UserPsnInfo;
  /** User Steam information, if a Steam account has been linked */
  SteamInfo?: UserSteamInfo;
  /** Title-specific information for the user account */
  TitleInfo?: UserTitleInfo;
  /** User Twitch account information, if a Twitch account has been linked */
  TwitchInfo?: UserTwitchInfo;
  /** User account name in the PlayFab service */
  Username?: string;
  /** Windows Hello account information, if a Windows Hello account has been linked */
  WindowsHelloInfo?: UserWindowsHelloInfo;
  /** User XBox account information, if a XBox account has been linked */
  XboxInfo?: UserXboxInfo;
}

export interface UserAndroidDeviceInfo {
  /** Android device ID */
  AndroidDeviceId?: string;
}

export interface UserAppleIdInfo {
  /** Apple subject ID */
  AppleSubjectId?: string;
}

export interface UserCustomIdInfo {
  /** Custom ID */
  CustomId?: string;
}

/** Indicates whether a given data key is private (readable only by the player) or public (readable by all players). When a player makes a GetUserData request about another player, only keys marked Public will be returned. */
export enum UserDataPermission {
  Private = "Private",
  Public = "Public",
}

export interface UserDataRecord {
  /** Timestamp for when this data was last updated. */
  LastUpdated: string;
  /** Indicates whether this data can be read by all users (public) or only the user (private). This is used for GetUserData requests being made by one player about another player. */
  Permission?: UserDataPermission;
  /** Data stored for the specified user data key. */
  Value?: string;
}

export interface UserFacebookInfo {
  /** Facebook identifier */
  FacebookId?: string;
  /** Facebook full name */
  FullName?: string;
}

export interface UserFacebookInstantGamesIdInfo {
  /** Facebook Instant Games ID */
  FacebookInstantGamesId?: string;
}

export interface UserGameCenterInfo {
  /** Gamecenter identifier */
  GameCenterId?: string;
}

export interface UserGoogleInfo {
  /** Email address of the Google account */
  GoogleEmail?: string;
  /** Gender information of the Google account */
  GoogleGender?: string;
  /** Google ID */
  GoogleId?: string;
  /** Locale of the Google account */
  GoogleLocale?: string;
  /** Name of the Google account user */
  GoogleName?: string;
}

export interface UserIosDeviceInfo {
  /** iOS device ID */
  IosDeviceId?: string;
}

export interface UserKongregateInfo {
  /** Kongregate ID */
  KongregateId?: string;
  /** Kongregate Username */
  KongregateName?: string;
}

export interface UserNintendoSwitchAccountIdInfo {
  /** Nintendo Switch account subject ID */
  NintendoSwitchAccountSubjectId?: string;
}

export interface UserNintendoSwitchDeviceIdInfo {
  /** Nintendo Switch Device ID */
  NintendoSwitchDeviceId?: string;
}

export interface UserOpenIdInfo {
  /** OpenID Connection ID */
  ConnectionId?: string;
  /** OpenID Issuer */
  Issuer?: string;
  /** OpenID Subject */
  Subject?: string;
}

export enum UserOrigination {
  Organic = "Organic",
  Steam = "Steam",
  Google = "Google",
  Amazon = "Amazon",
  Facebook = "Facebook",
  Kongregate = "Kongregate",
  GamersFirst = "GamersFirst",
  Unknown = "Unknown",
  IOS = "IOS",
  LoadTest = "LoadTest",
  Android = "Android",
  PSN = "PSN",
  GameCenter = "GameCenter",
  CustomId = "CustomId",
  XboxLive = "XboxLive",
  Parse = "Parse",
  Twitch = "Twitch",
  WindowsHello = "WindowsHello",
  ServerCustomId = "ServerCustomId",
  NintendoSwitchDeviceId = "NintendoSwitchDeviceId",
  FacebookInstantGamesId = "FacebookInstantGamesId",
  OpenIdConnect = "OpenIdConnect",
  Apple = "Apple",
  NintendoSwitchAccount = "NintendoSwitchAccount",
}

export interface UserOriginationSegmentFilter {
  /** User login provider. */
  LoginProvider?: SegmentLoginIdentityProvider;
}

export interface UserPrivateAccountInfo {
  /** user email address */
  Email?: string;
}

export interface UserPsnInfo {
  /** PSN account ID */
  PsnAccountId?: string;
  /** PSN online ID */
  PsnOnlineId?: string;
}

export interface UserSteamInfo {
  /** what stage of game ownership the user is listed as being in, from Steam */
  SteamActivationStatus?: TitleActivationStatus;
  /** the country in which the player resides, from Steam data */
  SteamCountry?: string;
  /** currency type set in the user Steam account */
  SteamCurrency?: Currency;
  /** Steam identifier */
  SteamId?: string;
  /** Steam display name */
  SteamName?: string;
}

export interface UserTitleInfo {
  /** URL to the player's avatar. */
  AvatarUrl?: string;
  /** timestamp indicating when the user was first associated with this game (this can differ significantly from when the user first registered with PlayFab) */
  Created: string;
  /** name of the user, as it is displayed in-game */
  DisplayName?: string;
  /** timestamp indicating when the user first signed into this game (this can differ from the Created timestamp, as other events, such as issuing a beta key to the user, can associate the title to the user) */
  FirstLogin?: string;
  /** boolean indicating whether or not the user is currently banned for a title */
  isBanned?: boolean;
  /** timestamp for the last user login for this title */
  LastLogin?: string;
  /** source by which the user first joined the game, if known */
  Origination?: UserOrigination;
  /** Title player account entity for this user */
  TitlePlayerAccount?: EntityKey;
}

export interface UserTwitchInfo {
  /** Twitch ID */
  TwitchId?: string;
  /** Twitch Username */
  TwitchUserName?: string;
}

export interface UserWindowsHelloInfo {
  /** Windows Hello Device Name */
  WindowsHelloDeviceName?: string;
  /** Windows Hello Public Key Hash */
  WindowsHelloPublicKeyHash?: string;
}

export interface UserXboxInfo {
  /** XBox user ID */
  XboxUserId?: string;
}

export interface ValueToDateModel {
  /** ISO 4217 code of the currency used in the purchases */
  Currency?: string;
  /** Total value of the purchases in a whole number of 1/100 monetary units. For example, 999 indicates nine dollars and ninety-nine cents when Currency is 'USD') */
  TotalValue: number;
  /** Total value of the purchases in a string representation of decimal monetary units. For example, '9.99' indicates nine dollars and ninety-nine cents when Currency is 'USD'. */
  TotalValueAsDecimal?: string;
}

export interface ValueToDateSegmentFilter {
  /** Value to date amount. */
  Amount?: string;
  /** Value to date comparison. */
  Comparison?: SegmentFilterComparison;
  /** Currency using for filter. */
  Currency?: SegmentCurrency;
}

export interface VirtualCurrencyBalanceSegmentFilter {
  /** Total amount. */
  Amount: number;
  /** Amount comparison. */
  Comparison?: SegmentFilterComparison;
  /** Currency code. */
  CurrencyCode?: string;
}

export interface VirtualCurrencyData {
  /** unique two-character identifier for this currency type (e.g.: "CC") */
  CurrencyCode: string;
  /** friendly name to show in the developer portal, reports, etc. */
  DisplayName?: string;
  /** amount to automatically grant users upon first login to the title */
  InitialDeposit?: number;
  /** maximum amount to which the currency will recharge (cannot exceed MaxAmount, but can be less) */
  RechargeMax?: number;
  /** rate at which the currency automatically be added to over time, in units per day (24 hours) */
  RechargeRate?: number;
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
 * Abort an ongoing task instance.
 * @param {AbortTaskInstanceRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<EmptyResponse>}
 */ 
export function AbortTaskInstance(
  request: AbortTaskInstanceRequest,
  options: RequestOptions
): Promise<EmptyResponse> {
  return dispatchRequest<EmptyResponse>(
    "/Admin/AbortTaskInstance",
    request,
    options
  );
}

/**
 * Update news item to include localized version
 * @param {AddLocalizedNewsRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<AddLocalizedNewsResult>}
 */ 
export function AddLocalizedNews(
  request: AddLocalizedNewsRequest,
  options: RequestOptions
): Promise<AddLocalizedNewsResult> {
  return dispatchRequest<AddLocalizedNewsResult>(
    "/Admin/AddLocalizedNews",
    request,
    options
  );
}

/**
 * Adds a new news item to the title's news feed
 * @param {AddNewsRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<AddNewsResult>}
 */ 
export function AddNews(
  request: AddNewsRequest,
  options: RequestOptions
): Promise<AddNewsResult> {
  return dispatchRequest<AddNewsResult>(
    "/Admin/AddNews",
    request,
    options
  );
}

/**
 * Adds a given tag to a player profile. The tag's namespace is automatically generated based on the source of the tag.
 * @param {AddPlayerTagRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<AddPlayerTagResult>}
 */ 
export function AddPlayerTag(
  request: AddPlayerTagRequest,
  options: RequestOptions
): Promise<AddPlayerTagResult> {
  return dispatchRequest<AddPlayerTagResult>(
    "/Admin/AddPlayerTag",
    request,
    options
  );
}

/**
 * Adds the game server executable specified (previously uploaded - see GetServerBuildUploadUrl) to the set of those a client is permitted to request in a call to StartGame
 * @param {AddServerBuildRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<AddServerBuildResult>}
 */ 
export function AddServerBuild(
  request: AddServerBuildRequest,
  options: RequestOptions
): Promise<AddServerBuildResult> {
  return dispatchRequest<AddServerBuildResult>(
    "/Admin/AddServerBuild",
    request,
    options
  );
}

/**
 * Increments the specified virtual currency by the stated amount
 * @param {AddUserVirtualCurrencyRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<ModifyUserVirtualCurrencyResult>}
 */ 
export function AddUserVirtualCurrency(
  request: AddUserVirtualCurrencyRequest,
  options: RequestOptions
): Promise<ModifyUserVirtualCurrencyResult> {
  return dispatchRequest<ModifyUserVirtualCurrencyResult>(
    "/Admin/AddUserVirtualCurrency",
    request,
    options
  );
}

/**
 * Adds one or more virtual currencies to the set defined for the title. Virtual Currencies have a maximum value of 2,147,483,647 when granted to a player. Any value over that will be discarded.
 * @param {AddVirtualCurrencyTypesRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<BlankResult>}
 */ 
export function AddVirtualCurrencyTypes(
  request: AddVirtualCurrencyTypesRequest,
  options: RequestOptions
): Promise<BlankResult> {
  return dispatchRequest<BlankResult>(
    "/Admin/AddVirtualCurrencyTypes",
    request,
    options
  );
}

/**
 * Bans users by PlayFab ID with optional IP address, or MAC address for the provided game.
 * @param {BanUsersRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<BanUsersResult>}
 */ 
export function BanUsers(
  request: BanUsersRequest,
  options: RequestOptions
): Promise<BanUsersResult> {
  return dispatchRequest<BanUsersResult>(
    "/Admin/BanUsers",
    request,
    options
  );
}

/**
 * Checks the global count for the limited edition item.
 * @param {CheckLimitedEditionItemAvailabilityRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<CheckLimitedEditionItemAvailabilityResult>}
 */ 
export function CheckLimitedEditionItemAvailability(
  request: CheckLimitedEditionItemAvailabilityRequest,
  options: RequestOptions
): Promise<CheckLimitedEditionItemAvailabilityResult> {
  return dispatchRequest<CheckLimitedEditionItemAvailabilityResult>(
    "/Admin/CheckLimitedEditionItemAvailability",
    request,
    options
  );
}

/**
 * Create an ActionsOnPlayersInSegment task, which iterates through all players in a segment to execute action.
 * @param {CreateActionsOnPlayerSegmentTaskRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<CreateTaskResult>}
 */ 
export function CreateActionsOnPlayersInSegmentTask(
  request: CreateActionsOnPlayerSegmentTaskRequest,
  options: RequestOptions
): Promise<CreateTaskResult> {
  return dispatchRequest<CreateTaskResult>(
    "/Admin/CreateActionsOnPlayersInSegmentTask",
    request,
    options
  );
}

/**
 * Create a CloudScript task, which can run a CloudScript on a schedule.
 * @param {CreateCloudScriptTaskRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<CreateTaskResult>}
 */ 
export function CreateCloudScriptTask(
  request: CreateCloudScriptTaskRequest,
  options: RequestOptions
): Promise<CreateTaskResult> {
  return dispatchRequest<CreateTaskResult>(
    "/Admin/CreateCloudScriptTask",
    request,
    options
  );
}

/**
 * Create a Insights Scheduled Scaling task, which can scale Insights Performance Units on a schedule
 * @param {CreateInsightsScheduledScalingTaskRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<CreateTaskResult>}
 */ 
export function CreateInsightsScheduledScalingTask(
  request: CreateInsightsScheduledScalingTaskRequest,
  options: RequestOptions
): Promise<CreateTaskResult> {
  return dispatchRequest<CreateTaskResult>(
    "/Admin/CreateInsightsScheduledScalingTask",
    request,
    options
  );
}

/**
 * Registers a relationship between a title and an Open ID Connect provider.
 * @param {CreateOpenIdConnectionRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<EmptyResponse>}
 */ 
export function CreateOpenIdConnection(
  request: CreateOpenIdConnectionRequest,
  options: RequestOptions
): Promise<EmptyResponse> {
  return dispatchRequest<EmptyResponse>(
    "/Admin/CreateOpenIdConnection",
    request,
    options
  );
}

/**
 * Creates a new Player Shared Secret Key. It may take up to 5 minutes for this key to become generally available after this API returns.
 * @param {CreatePlayerSharedSecretRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<CreatePlayerSharedSecretResult>}
 */ 
export function CreatePlayerSharedSecret(
  request: CreatePlayerSharedSecretRequest,
  options: RequestOptions
): Promise<CreatePlayerSharedSecretResult> {
  return dispatchRequest<CreatePlayerSharedSecretResult>(
    "/Admin/CreatePlayerSharedSecret",
    request,
    options
  );
}

/**
 * Adds a new player statistic configuration to the title, optionally allowing the developer to specify a reset interval and an aggregation method.
 * @param {CreatePlayerStatisticDefinitionRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<CreatePlayerStatisticDefinitionResult>}
 */ 
export function CreatePlayerStatisticDefinition(
  request: CreatePlayerStatisticDefinitionRequest,
  options: RequestOptions
): Promise<CreatePlayerStatisticDefinitionResult> {
  return dispatchRequest<CreatePlayerStatisticDefinitionResult>(
    "/Admin/CreatePlayerStatisticDefinition",
    request,
    options
  );
}

/**
 * Creates a new player segment by defining the conditions on player properties. Also, create actions to target the player segments for a title.
 * @param {CreateSegmentRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<CreateSegmentResponse>}
 */ 
export function CreateSegment(
  request: CreateSegmentRequest,
  options: RequestOptions
): Promise<CreateSegmentResponse> {
  return dispatchRequest<CreateSegmentResponse>(
    "/Admin/CreateSegment",
    request,
    options
  );
}

/**
 * Delete a content file from the title. When deleting a file that does not exist, it returns success.
 * @param {DeleteContentRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<BlankResult>}
 */ 
export function DeleteContent(
  request: DeleteContentRequest,
  options: RequestOptions
): Promise<BlankResult> {
  return dispatchRequest<BlankResult>(
    "/Admin/DeleteContent",
    request,
    options
  );
}

/**
 * Removes a master player account entirely from all titles and deletes all associated data
 * @param {DeleteMasterPlayerAccountRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<DeleteMasterPlayerAccountResult>}
 */ 
export function DeleteMasterPlayerAccount(
  request: DeleteMasterPlayerAccountRequest,
  options: RequestOptions
): Promise<DeleteMasterPlayerAccountResult> {
  return dispatchRequest<DeleteMasterPlayerAccountResult>(
    "/Admin/DeleteMasterPlayerAccount",
    request,
    options
  );
}

/**
 * Removes a relationship between a title and an OpenID Connect provider.
 * @param {DeleteOpenIdConnectionRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<EmptyResponse>}
 */ 
export function DeleteOpenIdConnection(
  request: DeleteOpenIdConnectionRequest,
  options: RequestOptions
): Promise<EmptyResponse> {
  return dispatchRequest<EmptyResponse>(
    "/Admin/DeleteOpenIdConnection",
    request,
    options
  );
}

/**
 * Removes a user's player account from a title and deletes all associated data
 * @param {DeletePlayerRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<DeletePlayerResult>}
 */ 
export function DeletePlayer(
  request: DeletePlayerRequest,
  options: RequestOptions
): Promise<DeletePlayerResult> {
  return dispatchRequest<DeletePlayerResult>(
    "/Admin/DeletePlayer",
    request,
    options
  );
}

/**
 * Deletes an existing Player Shared Secret Key. It may take up to 5 minutes for this delete to be reflected after this API returns.
 * @param {DeletePlayerSharedSecretRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<DeletePlayerSharedSecretResult>}
 */ 
export function DeletePlayerSharedSecret(
  request: DeletePlayerSharedSecretRequest,
  options: RequestOptions
): Promise<DeletePlayerSharedSecretResult> {
  return dispatchRequest<DeletePlayerSharedSecretResult>(
    "/Admin/DeletePlayerSharedSecret",
    request,
    options
  );
}

/**
 * Deletes an existing player segment and its associated action(s) for a title.
 * @param {DeleteSegmentRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<DeleteSegmentsResponse>}
 */ 
export function DeleteSegment(
  request: DeleteSegmentRequest,
  options: RequestOptions
): Promise<DeleteSegmentsResponse> {
  return dispatchRequest<DeleteSegmentsResponse>(
    "/Admin/DeleteSegment",
    request,
    options
  );
}

/**
 * Deletes an existing virtual item store
 * @param {DeleteStoreRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<DeleteStoreResult>}
 */ 
export function DeleteStore(
  request: DeleteStoreRequest,
  options: RequestOptions
): Promise<DeleteStoreResult> {
  return dispatchRequest<DeleteStoreResult>(
    "/Admin/DeleteStore",
    request,
    options
  );
}

/**
 * Delete a task.
 * @param {DeleteTaskRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<EmptyResponse>}
 */ 
export function DeleteTask(
  request: DeleteTaskRequest,
  options: RequestOptions
): Promise<EmptyResponse> {
  return dispatchRequest<EmptyResponse>(
    "/Admin/DeleteTask",
    request,
    options
  );
}

/**
 * Permanently deletes a title and all associated configuration
 * @param {DeleteTitleRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<DeleteTitleResult>}
 */ 
export function DeleteTitle(
  request: DeleteTitleRequest,
  options: RequestOptions
): Promise<DeleteTitleResult> {
  return dispatchRequest<DeleteTitleResult>(
    "/Admin/DeleteTitle",
    request,
    options
  );
}

/**
 * Deletes a specified set of title data overrides.
 * @param {DeleteTitleDataOverrideRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<DeleteTitleDataOverrideResult>}
 */ 
export function DeleteTitleDataOverride(
  request: DeleteTitleDataOverrideRequest,
  options: RequestOptions
): Promise<DeleteTitleDataOverrideResult> {
  return dispatchRequest<DeleteTitleDataOverrideResult>(
    "/Admin/DeleteTitleDataOverride",
    request,
    options
  );
}

/**
 * Exports all associated data of a master player account
 * @param {ExportMasterPlayerDataRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<ExportMasterPlayerDataResult>}
 */ 
export function ExportMasterPlayerData(
  request: ExportMasterPlayerDataRequest,
  options: RequestOptions
): Promise<ExportMasterPlayerDataResult> {
  return dispatchRequest<ExportMasterPlayerDataResult>(
    "/Admin/ExportMasterPlayerData",
    request,
    options
  );
}

/**
 * Get information about a ActionsOnPlayersInSegment task instance.
 * @param {GetTaskInstanceRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetActionsOnPlayersInSegmentTaskInstanceResult>}
 */ 
export function GetActionsOnPlayersInSegmentTaskInstance(
  request: GetTaskInstanceRequest,
  options: RequestOptions
): Promise<GetActionsOnPlayersInSegmentTaskInstanceResult> {
  return dispatchRequest<GetActionsOnPlayersInSegmentTaskInstanceResult>(
    "/Admin/GetActionsOnPlayersInSegmentTaskInstance",
    request,
    options
  );
}

/**
 * Retrieves an array of player segment definitions. Results from this can be used in subsequent API calls such as GetPlayersInSegment which requires a Segment ID. While segment names can change the ID for that segment will not change.
 * @param {GetAllSegmentsRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetAllSegmentsResult>}
 */ 
export function GetAllSegments(
  request: GetAllSegmentsRequest,
  options: RequestOptions
): Promise<GetAllSegmentsResult> {
  return dispatchRequest<GetAllSegmentsResult>(
    "/Admin/GetAllSegments",
    request,
    options
  );
}

/**
 * Retrieves the specified version of the title's catalog of virtual goods, including all defined properties
 * @param {GetCatalogItemsRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetCatalogItemsResult>}
 */ 
export function GetCatalogItems(
  request: GetCatalogItemsRequest,
  options: RequestOptions
): Promise<GetCatalogItemsResult> {
  return dispatchRequest<GetCatalogItemsResult>(
    "/Admin/GetCatalogItems",
    request,
    options
  );
}

/**
 * Gets the contents and information of a specific Cloud Script revision.
 * @param {GetCloudScriptRevisionRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetCloudScriptRevisionResult>}
 */ 
export function GetCloudScriptRevision(
  request: GetCloudScriptRevisionRequest,
  options: RequestOptions
): Promise<GetCloudScriptRevisionResult> {
  return dispatchRequest<GetCloudScriptRevisionResult>(
    "/Admin/GetCloudScriptRevision",
    request,
    options
  );
}

/**
 * Get detail information about a CloudScript task instance.
 * @param {GetTaskInstanceRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetCloudScriptTaskInstanceResult>}
 */ 
export function GetCloudScriptTaskInstance(
  request: GetTaskInstanceRequest,
  options: RequestOptions
): Promise<GetCloudScriptTaskInstanceResult> {
  return dispatchRequest<GetCloudScriptTaskInstanceResult>(
    "/Admin/GetCloudScriptTaskInstance",
    request,
    options
  );
}

/**
 * Lists all the current cloud script versions. For each version, information about the current published and latest revisions is also listed.
 * @param {GetCloudScriptVersionsRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetCloudScriptVersionsResult>}
 */ 
export function GetCloudScriptVersions(
  request: GetCloudScriptVersionsRequest,
  options: RequestOptions
): Promise<GetCloudScriptVersionsResult> {
  return dispatchRequest<GetCloudScriptVersionsResult>(
    "/Admin/GetCloudScriptVersions",
    request,
    options
  );
}

/**
 * List all contents of the title and get statistics such as size
 * @param {GetContentListRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetContentListResult>}
 */ 
export function GetContentList(
  request: GetContentListRequest,
  options: RequestOptions
): Promise<GetContentListResult> {
  return dispatchRequest<GetContentListResult>(
    "/Admin/GetContentList",
    request,
    options
  );
}

/**
 * Retrieves the pre-signed URL for uploading a content file. A subsequent HTTP PUT to the returned URL uploads the content. Also, please be aware that the Content service is specifically PlayFab's CDN offering, for which standard CDN rates apply.
 * @param {GetContentUploadUrlRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetContentUploadUrlResult>}
 */ 
export function GetContentUploadUrl(
  request: GetContentUploadUrlRequest,
  options: RequestOptions
): Promise<GetContentUploadUrlResult> {
  return dispatchRequest<GetContentUploadUrlResult>(
    "/Admin/GetContentUploadUrl",
    request,
    options
  );
}

/**
 * Retrieves a download URL for the requested report
 * @param {GetDataReportRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetDataReportResult>}
 */ 
export function GetDataReport(
  request: GetDataReportRequest,
  options: RequestOptions
): Promise<GetDataReportResult> {
  return dispatchRequest<GetDataReportResult>(
    "/Admin/GetDataReport",
    request,
    options
  );
}

/**
 * Retrieves the details for a specific completed session, including links to standard out and standard error logs
 * @param {GetMatchmakerGameInfoRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetMatchmakerGameInfoResult>}
 */ 
export function GetMatchmakerGameInfo(
  request: GetMatchmakerGameInfoRequest,
  options: RequestOptions
): Promise<GetMatchmakerGameInfoResult> {
  return dispatchRequest<GetMatchmakerGameInfoResult>(
    "/Admin/GetMatchmakerGameInfo",
    request,
    options
  );
}

/**
 * Retrieves the details of defined game modes for the specified game server executable
 * @param {GetMatchmakerGameModesRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetMatchmakerGameModesResult>}
 */ 
export function GetMatchmakerGameModes(
  request: GetMatchmakerGameModesRequest,
  options: RequestOptions
): Promise<GetMatchmakerGameModesResult> {
  return dispatchRequest<GetMatchmakerGameModesResult>(
    "/Admin/GetMatchmakerGameModes",
    request,
    options
  );
}

/**
 * Get the list of titles that the player has played
 * @param {GetPlayedTitleListRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetPlayedTitleListResult>}
 */ 
export function GetPlayedTitleList(
  request: GetPlayedTitleListRequest,
  options: RequestOptions
): Promise<GetPlayedTitleListResult> {
  return dispatchRequest<GetPlayedTitleListResult>(
    "/Admin/GetPlayedTitleList",
    request,
    options
  );
}

/**
 * Gets a player's ID from an auth token.
 * @param {GetPlayerIdFromAuthTokenRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetPlayerIdFromAuthTokenResult>}
 */ 
export function GetPlayerIdFromAuthToken(
  request: GetPlayerIdFromAuthTokenRequest,
  options: RequestOptions
): Promise<GetPlayerIdFromAuthTokenResult> {
  return dispatchRequest<GetPlayerIdFromAuthTokenResult>(
    "/Admin/GetPlayerIdFromAuthToken",
    request,
    options
  );
}

/**
 * Retrieves the player's profile
 * @param {GetPlayerProfileRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetPlayerProfileResult>}
 */ 
export function GetPlayerProfile(
  request: GetPlayerProfileRequest,
  options: RequestOptions
): Promise<GetPlayerProfileResult> {
  return dispatchRequest<GetPlayerProfileResult>(
    "/Admin/GetPlayerProfile",
    request,
    options
  );
}

/**
 * List all segments that a player currently belongs to at this moment in time.
 * @param {GetPlayersSegmentsRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetPlayerSegmentsResult>}
 */ 
export function GetPlayerSegments(
  request: GetPlayersSegmentsRequest,
  options: RequestOptions
): Promise<GetPlayerSegmentsResult> {
  return dispatchRequest<GetPlayerSegmentsResult>(
    "/Admin/GetPlayerSegments",
    request,
    options
  );
}

/**
 * Returns all Player Shared Secret Keys including disabled and expired.
 * @param {GetPlayerSharedSecretsRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetPlayerSharedSecretsResult>}
 */ 
export function GetPlayerSharedSecrets(
  request: GetPlayerSharedSecretsRequest,
  options: RequestOptions
): Promise<GetPlayerSharedSecretsResult> {
  return dispatchRequest<GetPlayerSharedSecretsResult>(
    "/Admin/GetPlayerSharedSecrets",
    request,
    options
  );
}

/**
 * Allows for paging through all players in a given segment. This API creates a snapshot of all player profiles that match the segment definition at the time of its creation and lives through the Total Seconds to Live, refreshing its life span on each subsequent use of the Continuation Token. Profiles that change during the course of paging will not be reflected in the results. AB Test segments are currently not supported by this operation. NOTE: This API is limited to being called 30 times in one minute. You will be returned an error if you exceed this threshold.
 * @param {GetPlayersInSegmentRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetPlayersInSegmentResult>}
 */ 
export function GetPlayersInSegment(
  request: GetPlayersInSegmentRequest,
  options: RequestOptions
): Promise<GetPlayersInSegmentResult> {
  return dispatchRequest<GetPlayersInSegmentResult>(
    "/Admin/GetPlayersInSegment",
    request,
    options
  );
}

/**
 * Retrieves the configuration information for all player statistics defined in the title, regardless of whether they have a reset interval.
 * @param {GetPlayerStatisticDefinitionsRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetPlayerStatisticDefinitionsResult>}
 */ 
export function GetPlayerStatisticDefinitions(
  request: GetPlayerStatisticDefinitionsRequest,
  options: RequestOptions
): Promise<GetPlayerStatisticDefinitionsResult> {
  return dispatchRequest<GetPlayerStatisticDefinitionsResult>(
    "/Admin/GetPlayerStatisticDefinitions",
    request,
    options
  );
}

/**
 * Retrieves the information on the available versions of the specified statistic.
 * @param {GetPlayerStatisticVersionsRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetPlayerStatisticVersionsResult>}
 */ 
export function GetPlayerStatisticVersions(
  request: GetPlayerStatisticVersionsRequest,
  options: RequestOptions
): Promise<GetPlayerStatisticVersionsResult> {
  return dispatchRequest<GetPlayerStatisticVersionsResult>(
    "/Admin/GetPlayerStatisticVersions",
    request,
    options
  );
}

/**
 * Get all tags with a given Namespace (optional) from a player profile.
 * @param {GetPlayerTagsRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetPlayerTagsResult>}
 */ 
export function GetPlayerTags(
  request: GetPlayerTagsRequest,
  options: RequestOptions
): Promise<GetPlayerTagsResult> {
  return dispatchRequest<GetPlayerTagsResult>(
    "/Admin/GetPlayerTags",
    request,
    options
  );
}

/**
 * Gets the requested policy.
 * @param {GetPolicyRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetPolicyResponse>}
 */ 
export function GetPolicy(
  request: GetPolicyRequest,
  options: RequestOptions
): Promise<GetPolicyResponse> {
  return dispatchRequest<GetPolicyResponse>(
    "/Admin/GetPolicy",
    request,
    options
  );
}

/**
 * Retrieves the key-value store of custom publisher settings
 * @param {GetPublisherDataRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetPublisherDataResult>}
 */ 
export function GetPublisherData(
  request: GetPublisherDataRequest,
  options: RequestOptions
): Promise<GetPublisherDataResult> {
  return dispatchRequest<GetPublisherDataResult>(
    "/Admin/GetPublisherData",
    request,
    options
  );
}

/**
 * Retrieves the random drop table configuration for the title
 * @param {GetRandomResultTablesRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetRandomResultTablesResult>}
 */ 
export function GetRandomResultTables(
  request: GetRandomResultTablesRequest,
  options: RequestOptions
): Promise<GetRandomResultTablesResult> {
  return dispatchRequest<GetRandomResultTablesResult>(
    "/Admin/GetRandomResultTables",
    request,
    options
  );
}

/**
 * Get detail information of a segment and its associated definition(s) and action(s) for a title.
 * @param {GetSegmentsRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetSegmentsResponse>}
 */ 
export function GetSegments(
  request: GetSegmentsRequest,
  options: RequestOptions
): Promise<GetSegmentsResponse> {
  return dispatchRequest<GetSegmentsResponse>(
    "/Admin/GetSegments",
    request,
    options
  );
}

/**
 * Retrieves the build details for the specified game server executable
 * @param {GetServerBuildInfoRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetServerBuildInfoResult>}
 */ 
export function GetServerBuildInfo(
  request: GetServerBuildInfoRequest,
  options: RequestOptions
): Promise<GetServerBuildInfoResult> {
  return dispatchRequest<GetServerBuildInfoResult>(
    "/Admin/GetServerBuildInfo",
    request,
    options
  );
}

/**
 * Retrieves the pre-authorized URL for uploading a game server package containing a build (does not enable the build for use - see AddServerBuild)
 * @param {GetServerBuildUploadURLRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetServerBuildUploadURLResult>}
 */ 
export function GetServerBuildUploadUrl(
  request: GetServerBuildUploadURLRequest,
  options: RequestOptions
): Promise<GetServerBuildUploadURLResult> {
  return dispatchRequest<GetServerBuildUploadURLResult>(
    "/Admin/GetServerBuildUploadUrl",
    request,
    options
  );
}

/**
 * Retrieves the set of items defined for the specified store, including all prices defined
 * @param {GetStoreItemsRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetStoreItemsResult>}
 */ 
export function GetStoreItems(
  request: GetStoreItemsRequest,
  options: RequestOptions
): Promise<GetStoreItemsResult> {
  return dispatchRequest<GetStoreItemsResult>(
    "/Admin/GetStoreItems",
    request,
    options
  );
}

/**
 * Query for task instances by task, status, or time range.
 * @param {GetTaskInstancesRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetTaskInstancesResult>}
 */ 
export function GetTaskInstances(
  request: GetTaskInstancesRequest,
  options: RequestOptions
): Promise<GetTaskInstancesResult> {
  return dispatchRequest<GetTaskInstancesResult>(
    "/Admin/GetTaskInstances",
    request,
    options
  );
}

/**
 * Get definition information on a specified task or all tasks within a title.
 * @param {GetTasksRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetTasksResult>}
 */ 
export function GetTasks(
  request: GetTasksRequest,
  options: RequestOptions
): Promise<GetTasksResult> {
  return dispatchRequest<GetTasksResult>(
    "/Admin/GetTasks",
    request,
    options
  );
}

/**
 * Retrieves the key-value store of custom title settings which can be read by the client
 * @param {GetTitleDataRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetTitleDataResult>}
 */ 
export function GetTitleData(
  request: GetTitleDataRequest,
  options: RequestOptions
): Promise<GetTitleDataResult> {
  return dispatchRequest<GetTitleDataResult>(
    "/Admin/GetTitleData",
    request,
    options
  );
}

/**
 * Retrieves the key-value store of custom title settings which cannot be read by the client
 * @param {GetTitleDataRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetTitleDataResult>}
 */ 
export function GetTitleInternalData(
  request: GetTitleDataRequest,
  options: RequestOptions
): Promise<GetTitleDataResult> {
  return dispatchRequest<GetTitleDataResult>(
    "/Admin/GetTitleInternalData",
    request,
    options
  );
}

/**
 * Retrieves the relevant details for a specified user, based upon a match against a supplied unique identifier
 * @param {LookupUserAccountInfoRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<LookupUserAccountInfoResult>}
 */ 
export function GetUserAccountInfo(
  request: LookupUserAccountInfoRequest,
  options: RequestOptions
): Promise<LookupUserAccountInfoResult> {
  return dispatchRequest<LookupUserAccountInfoResult>(
    "/Admin/GetUserAccountInfo",
    request,
    options
  );
}

/**
 * Gets all bans for a user.
 * @param {GetUserBansRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetUserBansResult>}
 */ 
export function GetUserBans(
  request: GetUserBansRequest,
  options: RequestOptions
): Promise<GetUserBansResult> {
  return dispatchRequest<GetUserBansResult>(
    "/Admin/GetUserBans",
    request,
    options
  );
}

/**
 * Retrieves the title-specific custom data for the user which is readable and writable by the client
 * @param {GetUserDataRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetUserDataResult>}
 */ 
export function GetUserData(
  request: GetUserDataRequest,
  options: RequestOptions
): Promise<GetUserDataResult> {
  return dispatchRequest<GetUserDataResult>(
    "/Admin/GetUserData",
    request,
    options
  );
}

/**
 * Retrieves the title-specific custom data for the user which cannot be accessed by the client
 * @param {GetUserDataRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetUserDataResult>}
 */ 
export function GetUserInternalData(
  request: GetUserDataRequest,
  options: RequestOptions
): Promise<GetUserDataResult> {
  return dispatchRequest<GetUserDataResult>(
    "/Admin/GetUserInternalData",
    request,
    options
  );
}

/**
 * Retrieves the specified user's current inventory of virtual goods
 * @param {GetUserInventoryRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetUserInventoryResult>}
 */ 
export function GetUserInventory(
  request: GetUserInventoryRequest,
  options: RequestOptions
): Promise<GetUserInventoryResult> {
  return dispatchRequest<GetUserInventoryResult>(
    "/Admin/GetUserInventory",
    request,
    options
  );
}

/**
 * Retrieves the publisher-specific custom data for the user which is readable and writable by the client
 * @param {GetUserDataRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetUserDataResult>}
 */ 
export function GetUserPublisherData(
  request: GetUserDataRequest,
  options: RequestOptions
): Promise<GetUserDataResult> {
  return dispatchRequest<GetUserDataResult>(
    "/Admin/GetUserPublisherData",
    request,
    options
  );
}

/**
 * Retrieves the publisher-specific custom data for the user which cannot be accessed by the client
 * @param {GetUserDataRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetUserDataResult>}
 */ 
export function GetUserPublisherInternalData(
  request: GetUserDataRequest,
  options: RequestOptions
): Promise<GetUserDataResult> {
  return dispatchRequest<GetUserDataResult>(
    "/Admin/GetUserPublisherInternalData",
    request,
    options
  );
}

/**
 * Retrieves the publisher-specific custom data for the user which can only be read by the client
 * @param {GetUserDataRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetUserDataResult>}
 */ 
export function GetUserPublisherReadOnlyData(
  request: GetUserDataRequest,
  options: RequestOptions
): Promise<GetUserDataResult> {
  return dispatchRequest<GetUserDataResult>(
    "/Admin/GetUserPublisherReadOnlyData",
    request,
    options
  );
}

/**
 * Retrieves the title-specific custom data for the user which can only be read by the client
 * @param {GetUserDataRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetUserDataResult>}
 */ 
export function GetUserReadOnlyData(
  request: GetUserDataRequest,
  options: RequestOptions
): Promise<GetUserDataResult> {
  return dispatchRequest<GetUserDataResult>(
    "/Admin/GetUserReadOnlyData",
    request,
    options
  );
}

/**
 * Adds the specified items to the specified user inventories
 * @param {GrantItemsToUsersRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GrantItemsToUsersResult>}
 */ 
export function GrantItemsToUsers(
  request: GrantItemsToUsersRequest,
  options: RequestOptions
): Promise<GrantItemsToUsersResult> {
  return dispatchRequest<GrantItemsToUsersResult>(
    "/Admin/GrantItemsToUsers",
    request,
    options
  );
}

/**
 * Increases the global count for the given scarce resource.
 * @param {IncrementLimitedEditionItemAvailabilityRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<IncrementLimitedEditionItemAvailabilityResult>}
 */ 
export function IncrementLimitedEditionItemAvailability(
  request: IncrementLimitedEditionItemAvailabilityRequest,
  options: RequestOptions
): Promise<IncrementLimitedEditionItemAvailabilityResult> {
  return dispatchRequest<IncrementLimitedEditionItemAvailabilityResult>(
    "/Admin/IncrementLimitedEditionItemAvailability",
    request,
    options
  );
}

/**
 * Resets the indicated statistic, removing all player entries for it and backing up the old values.
 * @param {IncrementPlayerStatisticVersionRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<IncrementPlayerStatisticVersionResult>}
 */ 
export function IncrementPlayerStatisticVersion(
  request: IncrementPlayerStatisticVersionRequest,
  options: RequestOptions
): Promise<IncrementPlayerStatisticVersionResult> {
  return dispatchRequest<IncrementPlayerStatisticVersionResult>(
    "/Admin/IncrementPlayerStatisticVersion",
    request,
    options
  );
}

/**
 * Retrieves a list of all Open ID Connect providers registered to a title.
 * @param {ListOpenIdConnectionRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<ListOpenIdConnectionResponse>}
 */ 
export function ListOpenIdConnection(
  request: ListOpenIdConnectionRequest,
  options: RequestOptions
): Promise<ListOpenIdConnectionResponse> {
  return dispatchRequest<ListOpenIdConnectionResponse>(
    "/Admin/ListOpenIdConnection",
    request,
    options
  );
}

/**
 * Retrieves the build details for all game server executables which are currently defined for the title
 * @param {ListBuildsRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<ListBuildsResult>}
 */ 
export function ListServerBuilds(
  request: ListBuildsRequest,
  options: RequestOptions
): Promise<ListBuildsResult> {
  return dispatchRequest<ListBuildsResult>(
    "/Admin/ListServerBuilds",
    request,
    options
  );
}

/**
 * Retuns the list of all defined virtual currencies for the title
 * @param {ListVirtualCurrencyTypesRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<ListVirtualCurrencyTypesResult>}
 */ 
export function ListVirtualCurrencyTypes(
  request: ListVirtualCurrencyTypesRequest,
  options: RequestOptions
): Promise<ListVirtualCurrencyTypesResult> {
  return dispatchRequest<ListVirtualCurrencyTypesResult>(
    "/Admin/ListVirtualCurrencyTypes",
    request,
    options
  );
}

/**
 * Updates the game server mode details for the specified game server executable
 * @param {ModifyMatchmakerGameModesRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<ModifyMatchmakerGameModesResult>}
 */ 
export function ModifyMatchmakerGameModes(
  request: ModifyMatchmakerGameModesRequest,
  options: RequestOptions
): Promise<ModifyMatchmakerGameModesResult> {
  return dispatchRequest<ModifyMatchmakerGameModesResult>(
    "/Admin/ModifyMatchmakerGameModes",
    request,
    options
  );
}

/**
 * Updates the build details for the specified game server executable
 * @param {ModifyServerBuildRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<ModifyServerBuildResult>}
 */ 
export function ModifyServerBuild(
  request: ModifyServerBuildRequest,
  options: RequestOptions
): Promise<ModifyServerBuildResult> {
  return dispatchRequest<ModifyServerBuildResult>(
    "/Admin/ModifyServerBuild",
    request,
    options
  );
}

/**
 * Attempts to process an order refund through the original real money payment provider.
 * @param {RefundPurchaseRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<RefundPurchaseResponse>}
 */ 
export function RefundPurchase(
  request: RefundPurchaseRequest,
  options: RequestOptions
): Promise<RefundPurchaseResponse> {
  return dispatchRequest<RefundPurchaseResponse>(
    "/Admin/RefundPurchase",
    request,
    options
  );
}

/**
 * Remove a given tag from a player profile. The tag's namespace is automatically generated based on the source of the tag.
 * @param {RemovePlayerTagRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<RemovePlayerTagResult>}
 */ 
export function RemovePlayerTag(
  request: RemovePlayerTagRequest,
  options: RequestOptions
): Promise<RemovePlayerTagResult> {
  return dispatchRequest<RemovePlayerTagResult>(
    "/Admin/RemovePlayerTag",
    request,
    options
  );
}

/**
 * Removes the game server executable specified from the set of those a client is permitted to request in a call to StartGame
 * @param {RemoveServerBuildRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<RemoveServerBuildResult>}
 */ 
export function RemoveServerBuild(
  request: RemoveServerBuildRequest,
  options: RequestOptions
): Promise<RemoveServerBuildResult> {
  return dispatchRequest<RemoveServerBuildResult>(
    "/Admin/RemoveServerBuild",
    request,
    options
  );
}

/**
 * Removes one or more virtual currencies from the set defined for the title.
 * @param {RemoveVirtualCurrencyTypesRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<BlankResult>}
 */ 
export function RemoveVirtualCurrencyTypes(
  request: RemoveVirtualCurrencyTypesRequest,
  options: RequestOptions
): Promise<BlankResult> {
  return dispatchRequest<BlankResult>(
    "/Admin/RemoveVirtualCurrencyTypes",
    request,
    options
  );
}

/**
 * Completely removes all statistics for the specified character, for the current game
 * @param {ResetCharacterStatisticsRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<ResetCharacterStatisticsResult>}
 */ 
export function ResetCharacterStatistics(
  request: ResetCharacterStatisticsRequest,
  options: RequestOptions
): Promise<ResetCharacterStatisticsResult> {
  return dispatchRequest<ResetCharacterStatisticsResult>(
    "/Admin/ResetCharacterStatistics",
    request,
    options
  );
}

/**
 * Reset a player's password for a given title.
 * @param {ResetPasswordRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<ResetPasswordResult>}
 */ 
export function ResetPassword(
  request: ResetPasswordRequest,
  options: RequestOptions
): Promise<ResetPasswordResult> {
  return dispatchRequest<ResetPasswordResult>(
    "/Admin/ResetPassword",
    request,
    options
  );
}

/**
 * Completely removes all statistics for the specified user, for the current game
 * @param {ResetUserStatisticsRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<ResetUserStatisticsResult>}
 */ 
export function ResetUserStatistics(
  request: ResetUserStatisticsRequest,
  options: RequestOptions
): Promise<ResetUserStatisticsResult> {
  return dispatchRequest<ResetUserStatisticsResult>(
    "/Admin/ResetUserStatistics",
    request,
    options
  );
}

/**
 * Attempts to resolve a dispute with the original order's payment provider.
 * @param {ResolvePurchaseDisputeRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<ResolvePurchaseDisputeResponse>}
 */ 
export function ResolvePurchaseDispute(
  request: ResolvePurchaseDisputeRequest,
  options: RequestOptions
): Promise<ResolvePurchaseDisputeResponse> {
  return dispatchRequest<ResolvePurchaseDisputeResponse>(
    "/Admin/ResolvePurchaseDispute",
    request,
    options
  );
}

/**
 * Revoke all active bans for a user.
 * @param {RevokeAllBansForUserRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<RevokeAllBansForUserResult>}
 */ 
export function RevokeAllBansForUser(
  request: RevokeAllBansForUserRequest,
  options: RequestOptions
): Promise<RevokeAllBansForUserResult> {
  return dispatchRequest<RevokeAllBansForUserResult>(
    "/Admin/RevokeAllBansForUser",
    request,
    options
  );
}

/**
 * Revoke all active bans specified with BanId.
 * @param {RevokeBansRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<RevokeBansResult>}
 */ 
export function RevokeBans(
  request: RevokeBansRequest,
  options: RequestOptions
): Promise<RevokeBansResult> {
  return dispatchRequest<RevokeBansResult>(
    "/Admin/RevokeBans",
    request,
    options
  );
}

/**
 * Revokes access to an item in a user's inventory
 * @param {RevokeInventoryItemRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<RevokeInventoryResult>}
 */ 
export function RevokeInventoryItem(
  request: RevokeInventoryItemRequest,
  options: RequestOptions
): Promise<RevokeInventoryResult> {
  return dispatchRequest<RevokeInventoryResult>(
    "/Admin/RevokeInventoryItem",
    request,
    options
  );
}

/**
 * Revokes access for up to 25 items across multiple users and characters.
 * @param {RevokeInventoryItemsRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<RevokeInventoryItemsResult>}
 */ 
export function RevokeInventoryItems(
  request: RevokeInventoryItemsRequest,
  options: RequestOptions
): Promise<RevokeInventoryItemsResult> {
  return dispatchRequest<RevokeInventoryItemsResult>(
    "/Admin/RevokeInventoryItems",
    request,
    options
  );
}

/**
 * Run a task immediately regardless of its schedule.
 * @param {RunTaskRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<RunTaskResult>}
 */ 
export function RunTask(
  request: RunTaskRequest,
  options: RequestOptions
): Promise<RunTaskResult> {
  return dispatchRequest<RunTaskResult>(
    "/Admin/RunTask",
    request,
    options
  );
}

/**
 * Forces an email to be sent to the registered email address for the user's account, with a link allowing the user to change the password.If an account recovery email template ID is provided, an email using the custom email template will be used.
 * @param {SendAccountRecoveryEmailRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<SendAccountRecoveryEmailResult>}
 */ 
export function SendAccountRecoveryEmail(
  request: SendAccountRecoveryEmailRequest,
  options: RequestOptions
): Promise<SendAccountRecoveryEmailResult> {
  return dispatchRequest<SendAccountRecoveryEmailResult>(
    "/Admin/SendAccountRecoveryEmail",
    request,
    options
  );
}

/**
 * Creates the catalog configuration of all virtual goods for the specified catalog version
 * @param {UpdateCatalogItemsRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<UpdateCatalogItemsResult>}
 */ 
export function SetCatalogItems(
  request: UpdateCatalogItemsRequest,
  options: RequestOptions
): Promise<UpdateCatalogItemsResult> {
  return dispatchRequest<UpdateCatalogItemsResult>(
    "/Admin/SetCatalogItems",
    request,
    options
  );
}

/**
 * Sets or resets the player's secret. Player secrets are used to sign API requests.
 * @param {SetPlayerSecretRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<SetPlayerSecretResult>}
 */ 
export function SetPlayerSecret(
  request: SetPlayerSecretRequest,
  options: RequestOptions
): Promise<SetPlayerSecretResult> {
  return dispatchRequest<SetPlayerSecretResult>(
    "/Admin/SetPlayerSecret",
    request,
    options
  );
}

/**
 * Sets the currently published revision of a title Cloud Script
 * @param {SetPublishedRevisionRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<SetPublishedRevisionResult>}
 */ 
export function SetPublishedRevision(
  request: SetPublishedRevisionRequest,
  options: RequestOptions
): Promise<SetPublishedRevisionResult> {
  return dispatchRequest<SetPublishedRevisionResult>(
    "/Admin/SetPublishedRevision",
    request,
    options
  );
}

/**
 * Updates the key-value store of custom publisher settings
 * @param {SetPublisherDataRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<SetPublisherDataResult>}
 */ 
export function SetPublisherData(
  request: SetPublisherDataRequest,
  options: RequestOptions
): Promise<SetPublisherDataResult> {
  return dispatchRequest<SetPublisherDataResult>(
    "/Admin/SetPublisherData",
    request,
    options
  );
}

/**
 * Sets all the items in one virtual store
 * @param {UpdateStoreItemsRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<UpdateStoreItemsResult>}
 */ 
export function SetStoreItems(
  request: UpdateStoreItemsRequest,
  options: RequestOptions
): Promise<UpdateStoreItemsResult> {
  return dispatchRequest<UpdateStoreItemsResult>(
    "/Admin/SetStoreItems",
    request,
    options
  );
}

/**
 * Creates and updates the key-value store of custom title settings which can be read by the client
 * @param {SetTitleDataRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<SetTitleDataResult>}
 */ 
export function SetTitleData(
  request: SetTitleDataRequest,
  options: RequestOptions
): Promise<SetTitleDataResult> {
  return dispatchRequest<SetTitleDataResult>(
    "/Admin/SetTitleData",
    request,
    options
  );
}

/**
 * Set and delete key-value pairs in a title data override instance.
 * @param {SetTitleDataAndOverridesRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<SetTitleDataAndOverridesResult>}
 */ 
export function SetTitleDataAndOverrides(
  request: SetTitleDataAndOverridesRequest,
  options: RequestOptions
): Promise<SetTitleDataAndOverridesResult> {
  return dispatchRequest<SetTitleDataAndOverridesResult>(
    "/Admin/SetTitleDataAndOverrides",
    request,
    options
  );
}

/**
 * Updates the key-value store of custom title settings which cannot be read by the client
 * @param {SetTitleDataRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<SetTitleDataResult>}
 */ 
export function SetTitleInternalData(
  request: SetTitleDataRequest,
  options: RequestOptions
): Promise<SetTitleDataResult> {
  return dispatchRequest<SetTitleDataResult>(
    "/Admin/SetTitleInternalData",
    request,
    options
  );
}

/**
 * Sets the Amazon Resource Name (ARN) for iOS and Android push notifications. Documentation on the exact restrictions can be found at: http://docs.aws.amazon.com/sns/latest/api/API_CreatePlatformApplication.html. Currently, Amazon device Messaging is not supported.
 * @param {SetupPushNotificationRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<SetupPushNotificationResult>}
 */ 
export function SetupPushNotification(
  request: SetupPushNotificationRequest,
  options: RequestOptions
): Promise<SetupPushNotificationResult> {
  return dispatchRequest<SetupPushNotificationResult>(
    "/Admin/SetupPushNotification",
    request,
    options
  );
}

/**
 * Decrements the specified virtual currency by the stated amount
 * @param {SubtractUserVirtualCurrencyRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<ModifyUserVirtualCurrencyResult>}
 */ 
export function SubtractUserVirtualCurrency(
  request: SubtractUserVirtualCurrencyRequest,
  options: RequestOptions
): Promise<ModifyUserVirtualCurrencyResult> {
  return dispatchRequest<ModifyUserVirtualCurrencyResult>(
    "/Admin/SubtractUserVirtualCurrency",
    request,
    options
  );
}

/**
 * Updates information of a list of existing bans specified with Ban Ids.
 * @param {UpdateBansRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<UpdateBansResult>}
 */ 
export function UpdateBans(
  request: UpdateBansRequest,
  options: RequestOptions
): Promise<UpdateBansResult> {
  return dispatchRequest<UpdateBansResult>(
    "/Admin/UpdateBans",
    request,
    options
  );
}

/**
 * Updates the catalog configuration for virtual goods in the specified catalog version
 * @param {UpdateCatalogItemsRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<UpdateCatalogItemsResult>}
 */ 
export function UpdateCatalogItems(
  request: UpdateCatalogItemsRequest,
  options: RequestOptions
): Promise<UpdateCatalogItemsResult> {
  return dispatchRequest<UpdateCatalogItemsResult>(
    "/Admin/UpdateCatalogItems",
    request,
    options
  );
}

/**
 * Creates a new Cloud Script revision and uploads source code to it. Note that at this time, only one file should be submitted in the revision.
 * @param {UpdateCloudScriptRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<UpdateCloudScriptResult>}
 */ 
export function UpdateCloudScript(
  request: UpdateCloudScriptRequest,
  options: RequestOptions
): Promise<UpdateCloudScriptResult> {
  return dispatchRequest<UpdateCloudScriptResult>(
    "/Admin/UpdateCloudScript",
    request,
    options
  );
}

/**
 * Modifies data and credentials for an existing relationship between a title and an Open ID Connect provider
 * @param {UpdateOpenIdConnectionRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<EmptyResponse>}
 */ 
export function UpdateOpenIdConnection(
  request: UpdateOpenIdConnectionRequest,
  options: RequestOptions
): Promise<EmptyResponse> {
  return dispatchRequest<EmptyResponse>(
    "/Admin/UpdateOpenIdConnection",
    request,
    options
  );
}

/**
 * Updates a existing Player Shared Secret Key. It may take up to 5 minutes for this update to become generally available after this API returns.
 * @param {UpdatePlayerSharedSecretRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<UpdatePlayerSharedSecretResult>}
 */ 
export function UpdatePlayerSharedSecret(
  request: UpdatePlayerSharedSecretRequest,
  options: RequestOptions
): Promise<UpdatePlayerSharedSecretResult> {
  return dispatchRequest<UpdatePlayerSharedSecretResult>(
    "/Admin/UpdatePlayerSharedSecret",
    request,
    options
  );
}

/**
 * Updates a player statistic configuration for the title, optionally allowing the developer to specify a reset interval.
 * @param {UpdatePlayerStatisticDefinitionRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<UpdatePlayerStatisticDefinitionResult>}
 */ 
export function UpdatePlayerStatisticDefinition(
  request: UpdatePlayerStatisticDefinitionRequest,
  options: RequestOptions
): Promise<UpdatePlayerStatisticDefinitionResult> {
  return dispatchRequest<UpdatePlayerStatisticDefinitionResult>(
    "/Admin/UpdatePlayerStatisticDefinition",
    request,
    options
  );
}

/**
 * Changes a policy for a title
 * @param {UpdatePolicyRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<UpdatePolicyResponse>}
 */ 
export function UpdatePolicy(
  request: UpdatePolicyRequest,
  options: RequestOptions
): Promise<UpdatePolicyResponse> {
  return dispatchRequest<UpdatePolicyResponse>(
    "/Admin/UpdatePolicy",
    request,
    options
  );
}

/**
 * Updates the random drop table configuration for the title
 * @param {UpdateRandomResultTablesRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<UpdateRandomResultTablesResult>}
 */ 
export function UpdateRandomResultTables(
  request: UpdateRandomResultTablesRequest,
  options: RequestOptions
): Promise<UpdateRandomResultTablesResult> {
  return dispatchRequest<UpdateRandomResultTablesResult>(
    "/Admin/UpdateRandomResultTables",
    request,
    options
  );
}

/**
 * Updates an existing player segment and its associated definition(s) and action(s) for a title.
 * @param {UpdateSegmentRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<UpdateSegmentResponse>}
 */ 
export function UpdateSegment(
  request: UpdateSegmentRequest,
  options: RequestOptions
): Promise<UpdateSegmentResponse> {
  return dispatchRequest<UpdateSegmentResponse>(
    "/Admin/UpdateSegment",
    request,
    options
  );
}

/**
 * Updates an existing virtual item store with new or modified items
 * @param {UpdateStoreItemsRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<UpdateStoreItemsResult>}
 */ 
export function UpdateStoreItems(
  request: UpdateStoreItemsRequest,
  options: RequestOptions
): Promise<UpdateStoreItemsResult> {
  return dispatchRequest<UpdateStoreItemsResult>(
    "/Admin/UpdateStoreItems",
    request,
    options
  );
}

/**
 * Update an existing task.
 * @param {UpdateTaskRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<EmptyResponse>}
 */ 
export function UpdateTask(
  request: UpdateTaskRequest,
  options: RequestOptions
): Promise<EmptyResponse> {
  return dispatchRequest<EmptyResponse>(
    "/Admin/UpdateTask",
    request,
    options
  );
}

/**
 * Updates the title-specific custom data for the user which is readable and writable by the client
 * @param {UpdateUserDataRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<UpdateUserDataResult>}
 */ 
export function UpdateUserData(
  request: UpdateUserDataRequest,
  options: RequestOptions
): Promise<UpdateUserDataResult> {
  return dispatchRequest<UpdateUserDataResult>(
    "/Admin/UpdateUserData",
    request,
    options
  );
}

/**
 * Updates the title-specific custom data for the user which cannot be accessed by the client
 * @param {UpdateUserInternalDataRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<UpdateUserDataResult>}
 */ 
export function UpdateUserInternalData(
  request: UpdateUserInternalDataRequest,
  options: RequestOptions
): Promise<UpdateUserDataResult> {
  return dispatchRequest<UpdateUserDataResult>(
    "/Admin/UpdateUserInternalData",
    request,
    options
  );
}

/**
 * Updates the publisher-specific custom data for the user which is readable and writable by the client
 * @param {UpdateUserDataRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<UpdateUserDataResult>}
 */ 
export function UpdateUserPublisherData(
  request: UpdateUserDataRequest,
  options: RequestOptions
): Promise<UpdateUserDataResult> {
  return dispatchRequest<UpdateUserDataResult>(
    "/Admin/UpdateUserPublisherData",
    request,
    options
  );
}

/**
 * Updates the publisher-specific custom data for the user which cannot be accessed by the client
 * @param {UpdateUserInternalDataRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<UpdateUserDataResult>}
 */ 
export function UpdateUserPublisherInternalData(
  request: UpdateUserInternalDataRequest,
  options: RequestOptions
): Promise<UpdateUserDataResult> {
  return dispatchRequest<UpdateUserDataResult>(
    "/Admin/UpdateUserPublisherInternalData",
    request,
    options
  );
}

/**
 * Updates the publisher-specific custom data for the user which can only be read by the client
 * @param {UpdateUserDataRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<UpdateUserDataResult>}
 */ 
export function UpdateUserPublisherReadOnlyData(
  request: UpdateUserDataRequest,
  options: RequestOptions
): Promise<UpdateUserDataResult> {
  return dispatchRequest<UpdateUserDataResult>(
    "/Admin/UpdateUserPublisherReadOnlyData",
    request,
    options
  );
}

/**
 * Updates the title-specific custom data for the user which can only be read by the client
 * @param {UpdateUserDataRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<UpdateUserDataResult>}
 */ 
export function UpdateUserReadOnlyData(
  request: UpdateUserDataRequest,
  options: RequestOptions
): Promise<UpdateUserDataResult> {
  return dispatchRequest<UpdateUserDataResult>(
    "/Admin/UpdateUserReadOnlyData",
    request,
    options
  );
}

/**
 * Updates the title specific display name for a user
 * @param {UpdateUserTitleDisplayNameRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<UpdateUserTitleDisplayNameResult>}
 */ 
export function UpdateUserTitleDisplayName(
  request: UpdateUserTitleDisplayNameRequest,
  options: RequestOptions
): Promise<UpdateUserTitleDisplayNameResult> {
  return dispatchRequest<UpdateUserTitleDisplayNameResult>(
    "/Admin/UpdateUserTitleDisplayName",
    request,
    options
  );
}

