// deno-lint-ignore-file
import { dispatchRequest, RequestOptions } from "./support/runtime.ts";

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

export interface AddCharacterVirtualCurrencyRequest {
  /** Amount to be added to the character balance of the specified virtual currency. Maximum VC balance is Int32 (2,147,483,647). Any increase over this value will be discarded. */
  Amount: number;
  /** Unique PlayFab assigned ID for a specific character owned by a user */
  CharacterId: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** PlayFab unique identifier of the user whose virtual currency balance is to be incremented. */
  PlayFabId: string;
  /** Name of the virtual currency which is to be incremented. */
  VirtualCurrency: string;
}

export interface AddFriendRequest {
  /** Email address of the user being added. */
  FriendEmail?: string;
  /** The PlayFab identifier of the user being added. */
  FriendPlayFabId?: string;
  /** Title-specific display name of the user to being added. */
  FriendTitleDisplayName?: string;
  /** The PlayFab username of the user being added */
  FriendUsername?: string;
  /** PlayFab identifier of the player to add a new friend. */
  PlayFabId: string;
}

export interface AddGenericIDRequest {
  /** Generic service identifier to add to the player account. */
  GenericId: GenericServiceId;
  /** PlayFabId of the user to link. */
  PlayFabId: string;
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

export interface AddSharedGroupMembersRequest {
  /** An array of unique PlayFab assigned ID of the user on whom the operation will be performed. */
  PlayFabIds: string[];
  /** Unique identifier for the shared group. */
  SharedGroupId: string;
}

export interface AddSharedGroupMembersResult {}

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

export interface AdvancedPushPlatformMsg {
  /** Stops GoogleCloudMessaging notifications from including both notification and data properties and instead only sends the data property. */
  GCMDataOnly?: boolean;
  /** The Json the platform should receive. */
  Json: string;
  /** The platform that should receive the Json. */
  Platform: PushNotificationPlatform;
}

/** Note that data returned may be Personally Identifying Information (PII), such as email address, and so care should be taken in how this data is stored and managed. Since this call will always return the relevant information for users who have accessed the title, the recommendation is to not store this data locally. */
export interface AuthenticateSessionTicketRequest {
  /** Session ticket as issued by a PlayFab client login API. */
  SessionTicket: string;
}

export interface AuthenticateSessionTicketResult {
  /** Indicates if token was expired at request time. */
  IsSessionTicketExpired?: boolean;
  /** Account info for the user whose session ticket was supplied. */
  UserInfo?: UserAccountInfo;
}

export interface AwardSteamAchievementItem {
  /** Unique Steam achievement name. */
  AchievementName: string;
  /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
  PlayFabId: string;
  /** Result of the award attempt (only valid on response, not on request). */
  Result: boolean;
}

export interface AwardSteamAchievementRequest {
  /** Array of achievements to grant and the users to whom they are to be granted. */
  Achievements: AwardSteamAchievementItem[];
}

export interface AwardSteamAchievementResult {
  /** Array of achievements granted. */
  AchievementResults?: AwardSteamAchievementItem[];
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

export interface CharacterInventory {
  /** The id of this character. */
  CharacterId?: string;
  /** The inventory of this character. */
  Inventory?: ItemInstance[];
}

export interface CharacterLeaderboardEntry {
  /** PlayFab unique identifier of the character that belongs to the user for this leaderboard entry. */
  CharacterId?: string;
  /** Title-specific display name of the character for this leaderboard entry. */
  CharacterName?: string;
  /** Name of the character class for this entry. */
  CharacterType?: string;
  /** Title-specific display name of the user for this leaderboard entry. */
  DisplayName?: string;
  /** PlayFab unique identifier of the user for this leaderboard entry. */
  PlayFabId?: string;
  /** User's overall position in the leaderboard. */
  Position: number;
  /** Specific value of the user's statistic. */
  StatValue: number;
}

export interface CharacterResult {
  /** The id for this character on this player. */
  CharacterId?: string;
  /** The name of this character. */
  CharacterName?: string;
  /** The type-string that was given to this character on creation. */
  CharacterType?: string;
}

export enum CloudScriptRevisionOption {
  Live = "Live",
  Latest = "Latest",
  Specific = "Specific",
}

export interface ConsumeItemRequest {
  /** Unique PlayFab assigned ID for a specific character owned by a user */
  CharacterId?: string;
  /** Number of uses to consume from the item. */
  ConsumeCount: number;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Unique instance identifier of the item to be consumed. */
  ItemInstanceId: string;
  /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
  PlayFabId: string;
}

export interface ConsumeItemResult {
  /** Unique instance identifier of the item with uses consumed. */
  ItemInstanceId?: string;
  /** Number of uses remaining on the item. */
  RemainingUses: number;
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

/** If SharedGroupId is specified, the service will attempt to create a group with that identifier, and will return an error if it is already in use. If no SharedGroupId is specified, a random identifier will be assigned. */
export interface CreateSharedGroupRequest {
  /** Unique identifier for the shared group (a random identifier will be assigned, if one is not specified). */
  SharedGroupId?: string;
}

export interface CreateSharedGroupResult {
  /** Unique identifier for the shared group. */
  SharedGroupId?: string;
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

/** This function will delete the specified character from the list allowed by the user, and will also delete any inventory or VC currently held by that character. It will NOT delete any statistics associated for this character, in order to preserve leaderboard integrity. */
export interface DeleteCharacterFromUserRequest {
  /** Unique PlayFab assigned ID for a specific character owned by a user */
  CharacterId: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
  PlayFabId: string;
  /** If true, the character's inventory will be transferred up to the owning user; otherwise, this request will purge those items. */
  SaveCharacterInventory: boolean;
}

export interface DeleteCharacterFromUserResult {}

/** Deletes all data associated with the player, including statistics, custom data, inventory, purchases, virtual currency balances, characters and shared group memberships. Removes the player from all leaderboards and player search indexes. Does not delete PlayStream event history associated with the player. Does not delete the publisher user account that created the player in the title nor associated data such as username, password, email address, account linkages, or friends list. Note, this API queues the player for deletion and returns immediately. It may take several minutes or more before all player data is fully deleted. Until the player data is fully deleted, attempts to recreate the player with the same user account in the same title will fail with the 'AccountDeleted' error. This API must be enabled for use as an option in the game manager website. It is disabled by default. */
export interface DeletePlayerRequest {
  /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
  PlayFabId: string;
}

export interface DeletePlayerResult {}

/** Represents the request to delete a push notification template. */
export interface DeletePushNotificationTemplateRequest {
  /** Id of the push notification template to be deleted. */
  PushNotificationTemplateId: string;
}

export interface DeletePushNotificationTemplateResult {}

export interface DeleteSharedGroupRequest {
  /** Unique identifier for the shared group. */
  SharedGroupId: string;
}

export interface DeregisterGameRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Unique identifier for the Game Server Instance that is being deregistered. */
  LobbyId: string;
}

export interface DeregisterGameResponse {}

export enum EmailVerificationStatus {
  Unverified = "Unverified",
  Pending = "Pending",
  Confirmed = "Confirmed",
}

export interface EmptyResponse {}

export interface EmptyResult {}

/** Combined entity type and ID structure which uniquely identifies a single entity. */
export interface EntityKey {
  /** Unique ID of the entity. */
  Id: string;
  /** Entity type. See https://docs.microsoft.com/gaming/playfab/features/data/entities/available-built-in-entity-types */
  Type?: string;
}

export interface EntityTokenResponse {
  /** The entity id and type. */
  Entity?: EntityKey;
  /** The token used to set X-EntityToken for all entity based API calls. */
  EntityToken?: string;
  /** The time the token will expire, if it is an expiring token, in UTC. */
  TokenExpiration?: string;
}

export interface EvaluateRandomResultTableRequest {
  /** Specifies the catalog version that should be used to evaluate the Random Result Table. If unspecified, uses default/primary catalog. */
  CatalogVersion?: string;
  /** The unique identifier of the Random Result Table to use. */
  TableId: string;
}

/** Note that if the Random Result Table contains no entries, or does not exist for the catalog specified (the Primary catalog if one is not specified), an InvalidDropTable error will be returned. */
export interface EvaluateRandomResultTableResult {
  /** Unique identifier for the item returned from the Random Result Table evaluation, for the given catalog. */
  ResultItemId?: string;
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

export interface ExecuteCloudScriptServerRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** The name of the CloudScript function to execute */
  FunctionName: string;
  /** Object that is passed in to the function as the first argument */
  FunctionParameter?: Record<string, unknown>;
  /** Generate a 'player_executed_cloudscript' PlayStream event containing the results of the function execution and other contextual information. This event will show up in the PlayStream debugger console for the player in Game Manager. */
  GeneratePlayStreamEvent?: boolean;
  /** The unique user identifier for the player on whose behalf the script is being run */
  PlayFabId: string;
  /** Option for which revision of the CloudScript to execute. 'Latest' executes the most recently created revision, 'Live' executes the current live, published revision, and 'Specific' executes the specified revision. The default value is 'Specific', if the SpeificRevision parameter is specified, otherwise it is 'Live'. */
  RevisionSelection?: CloudScriptRevisionOption;
  /** The specivic revision to execute, when RevisionSelection is set to 'Specific' */
  SpecificRevision?: number;
}

export interface FacebookInstantGamesPlayFabIdPair {
  /** Unique Facebook Instant Games identifier for a user. */
  FacebookInstantGamesId?: string;
  /** Unique PlayFab identifier for a user, or null if no PlayFab account is linked to the Facebook Instant Games identifier. */
  PlayFabId?: string;
}

export interface FacebookPlayFabIdPair {
  /** Unique Facebook identifier for a user. */
  FacebookId?: string;
  /** Unique PlayFab identifier for a user, or null if no PlayFab account is linked to the Facebook identifier. */
  PlayFabId?: string;
}

export interface FriendInfo {
  /** Available Facebook information (if the user and PlayFab friend are also connected in Facebook). */
  FacebookInfo?: UserFacebookInfo;
  /** PlayFab unique identifier for this friend. */
  FriendPlayFabId?: string;
  /** Available Game Center information (if the user and PlayFab friend are also connected in Game Center). */
  GameCenterInfo?: UserGameCenterInfo;
  /** The profile of the user, if requested. */
  Profile?: PlayerProfileModel;
  /** Available PSN information, if the user and PlayFab friend are both connected to PSN. */
  PSNInfo?: UserPsnInfo;
  /** Available Steam information (if the user and PlayFab friend are also connected in Steam). */
  SteamInfo?: UserSteamInfo;
  /** Tags which have been associated with this friend. */
  Tags?: string[];
  /** Title-specific display name for this friend. */
  TitleDisplayName?: string;
  /** PlayFab unique username for this friend. */
  Username?: string;
  /** Available Xbox information, if the user and PlayFab friend are both connected to Xbox Live. */
  XboxInfo?: UserXboxInfo;
}

export enum GameInstanceState {
  Open = "Open",
  Closed = "Closed",
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

export interface GenericPlayFabIdPair {
  /** Unique generic service identifier for a user. */
  GenericId?: GenericServiceId;
  /** Unique PlayFab identifier for a user, or null if no PlayFab account is linked to the given generic identifier. */
  PlayFabId?: string;
}

export interface GenericServiceId {
  /** Name of the service for which the player has a unique identifier. */
  ServiceName: string;
  /** Unique identifier of the player in that service. */
  UserId: string;
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

/** Data is stored as JSON key-value pairs. If the Keys parameter is provided, the data object returned will only contain the data specific to the indicated Keys. Otherwise, the full set of custom user data will be returned. */
export interface GetCharacterDataRequest {
  /** Unique PlayFab assigned ID for a specific character owned by a user */
  CharacterId: string;
  /** The version that currently exists according to the caller. The call will return the data for all of the keys if the version in the system is greater than this. */
  IfChangedFromDataVersion?: number;
  /** Specific keys to search for in the custom user data. */
  Keys?: string[];
  /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
  PlayFabId: string;
}

export interface GetCharacterDataResult {
  /** Unique PlayFab assigned ID for a specific character owned by a user */
  CharacterId?: string;
  /** User specific data for this title. */
  Data?: UserDataRecord;
  /** Indicates the current version of the data that has been set. This is incremented with every set call for that type of data (read-only, internal, etc). This version can be provided in Get calls to find updated data. */
  DataVersion: number;
  /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
  PlayFabId?: string;
}

/** All items currently in the character inventory will be returned, irrespective of how they were acquired (via purchasing, grants, coupons, etc.). Items that are expired, fully consumed, or are no longer valid are not considered to be in the user's current inventory, and so will not be not included. Also returns their virtual currency balances. */
export interface GetCharacterInventoryRequest {
  /** Used to limit results to only those from a specific catalog version. */
  CatalogVersion?: string;
  /** Unique PlayFab assigned ID for a specific character owned by a user */
  CharacterId: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
  PlayFabId: string;
}

export interface GetCharacterInventoryResult {
  /** Unique identifier of the character for this inventory. */
  CharacterId?: string;
  /** Array of inventory items belonging to the character. */
  Inventory?: ItemInstance[];
  /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
  PlayFabId?: string;
  /** Array of virtual currency balance(s) belonging to the character. */
  VirtualCurrency?: Record<string, unknown>;
  /** Array of remaining times and timestamps for virtual currencies. */
  VirtualCurrencyRechargeTimes?: VirtualCurrencyRechargeTime;
}

export interface GetCharacterLeaderboardRequest {
  /** Optional character type on which to filter the leaderboard entries. */
  CharacterType?: string;
  /** Maximum number of entries to retrieve. */
  MaxResultsCount: number;
  /** First entry in the leaderboard to be retrieved. */
  StartPosition: number;
  /** Unique identifier for the title-specific statistic for the leaderboard. */
  StatisticName: string;
}

/** Note that the Position of the character in the results is for the overall leaderboard. */
export interface GetCharacterLeaderboardResult {
  /** Ordered list of leaderboard entries. */
  Leaderboard?: CharacterLeaderboardEntry[];
}

/** Character statistics are similar to user statistics in that they are numeric values which may only be updated by a server operation, in order to minimize the opportunity for unauthorized changes. In addition to being available for use by the title, the statistics are used for all leaderboard operations in PlayFab. */
export interface GetCharacterStatisticsRequest {
  /** Unique PlayFab assigned ID for a specific character owned by a user */
  CharacterId: string;
  /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
  PlayFabId: string;
}

export interface GetCharacterStatisticsResult {
  /** Unique identifier of the character for the statistics. */
  CharacterId?: string;
  /** Character statistics for the requested user. */
  CharacterStatistics?: Record<string, unknown>;
  /** PlayFab unique identifier of the user whose character statistics are being returned. */
  PlayFabId?: string;
}

export interface GetContentDownloadUrlRequest {
  /** HTTP method to fetch item - GET or HEAD. Use HEAD when only fetching metadata. Default is GET. */
  HttpMethod?: string;
  /** Key of the content item to fetch, usually formatted as a path, e.g. images/a.png */
  Key: string;
  /** True to download through CDN. CDN provides higher download bandwidth and lower latency. However, if you want the latest, non-cached version of the content during development, set this to false. Default is true. */
  ThruCDN?: boolean;
}

export interface GetContentDownloadUrlResult {
  /** URL for downloading content via HTTP GET or HEAD method. The URL will expire in approximately one hour. */
  URL?: string;
}

export interface GetFriendLeaderboardRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Indicates whether Facebook friends should be included in the response. Default is true. */
  IncludeFacebookFriends?: boolean;
  /** Indicates whether Steam service friends should be included in the response. Default is true. */
  IncludeSteamFriends?: boolean;
  /** Maximum number of entries to retrieve. */
  MaxResultsCount: number;
  /** The player whose friend leaderboard to get */
  PlayFabId: string;
  /** If non-null, this determines which properties of the resulting player profiles to return. For API calls from the client, only the allowed client profile properties for the title may be requested. These allowed properties are configured in the Game Manager "Client Profile Options" tab in the "Settings" section. */
  ProfileConstraints?: PlayerProfileViewConstraints;
  /** Position in the leaderboard to start this listing (defaults to the first entry). */
  StartPosition: number;
  /** Statistic used to rank friends for this leaderboard. */
  StatisticName: string;
  /** If set to false, Version is considered null. If true, uses the specified Version */
  UseSpecificVersion?: boolean;
  /** The version of the leaderboard to get. */
  Version?: number;
  /** Xbox token if Xbox friends should be included. Requires Xbox be configured on PlayFab. */
  XboxToken?: string;
}

export interface GetFriendsListRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Indicates whether Facebook friends should be included in the response. Default is true. */
  IncludeFacebookFriends?: boolean;
  /** Indicates whether Steam service friends should be included in the response. Default is true. */
  IncludeSteamFriends?: boolean;
  /** PlayFab identifier of the player whose friend list to get. */
  PlayFabId: string;
  /** If non-null, this determines which properties of the resulting player profiles to return. For API calls from the client, only the allowed client profile properties for the title may be requested. These allowed properties are configured in the Game Manager "Client Profile Options" tab in the "Settings" section. */
  ProfileConstraints?: PlayerProfileViewConstraints;
  /** Xbox token if Xbox friends should be included. Requires Xbox be configured on PlayFab. */
  XboxToken?: string;
}

/** If any additional services are queried for the user's friends, those friends who also have a PlayFab account registered for the title will be returned in the results. For Facebook, user has to have logged into the title's Facebook app recently, and only friends who also plays this game will be included. For Xbox Live, user has to have logged into the Xbox Live recently, and only friends who also play this game will be included. */
export interface GetFriendsListResult {
  /** Array of friends found. */
  Friends?: FriendInfo[];
}

export interface GetLeaderboardAroundCharacterRequest {
  /** Unique PlayFab assigned ID for a specific character owned by a user */
  CharacterId: string;
  /** Optional character type on which to filter the leaderboard entries. */
  CharacterType?: string;
  /** Maximum number of entries to retrieve. */
  MaxResultsCount: number;
  /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
  PlayFabId: string;
  /** Unique identifier for the title-specific statistic for the leaderboard. */
  StatisticName: string;
}

/** Note: When calling 'GetLeaderboardAround...' APIs, the position of the character defaults to 0 when the character does not have the corresponding statistic. */
export interface GetLeaderboardAroundCharacterResult {
  /** Ordered list of leaderboard entries. */
  Leaderboard?: CharacterLeaderboardEntry[];
}

export interface GetLeaderboardAroundUserRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Maximum number of entries to retrieve. */
  MaxResultsCount: number;
  /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
  PlayFabId: string;
  /** If non-null, this determines which properties of the resulting player profiles to return. For API calls from the client, only the allowed client profile properties for the title may be requested. These allowed properties are configured in the Game Manager "Client Profile Options" tab in the "Settings" section. */
  ProfileConstraints?: PlayerProfileViewConstraints;
  /** Unique identifier for the title-specific statistic for the leaderboard. */
  StatisticName: string;
  /** If set to false, Version is considered null. If true, uses the specified Version */
  UseSpecificVersion?: boolean;
  /** The version of the leaderboard to get. */
  Version?: number;
}

/** Note: When calling 'GetLeaderboardAround...' APIs, the position of the user defaults to 0 when the user does not have the corresponding statistic. */
export interface GetLeaderboardAroundUserResult {
  /** Ordered listing of users and their positions in the requested leaderboard. */
  Leaderboard?: PlayerLeaderboardEntry[];
  /** The time the next scheduled reset will occur. Null if the leaderboard does not reset on a schedule. */
  NextReset?: string;
  /** The version of the leaderboard returned. */
  Version: number;
}

export interface GetLeaderboardForUsersCharactersRequest {
  /** Maximum number of entries to retrieve. */
  MaxResultsCount: number;
  /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
  PlayFabId: string;
  /** Unique identifier for the title-specific statistic for the leaderboard. */
  StatisticName: string;
}

/** NOTE: The position of the character in the results is relative to the other characters for that specific user. This mean the values will always be between 0 and one less than the number of characters returned regardless of the size of the actual leaderboard. */
export interface GetLeaderboardForUsersCharactersResult {
  /** Ordered list of leaderboard entries. */
  Leaderboard?: CharacterLeaderboardEntry[];
}

export interface GetLeaderboardRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Maximum number of entries to retrieve. */
  MaxResultsCount: number;
  /** If non-null, this determines which properties of the resulting player profiles to return. For API calls from the client, only the allowed client profile properties for the title may be requested. These allowed properties are configured in the Game Manager "Client Profile Options" tab in the "Settings" section. */
  ProfileConstraints?: PlayerProfileViewConstraints;
  /** First entry in the leaderboard to be retrieved. */
  StartPosition: number;
  /** Unique identifier for the title-specific statistic for the leaderboard. */
  StatisticName: string;
  /** If set to false, Version is considered null. If true, uses the specified Version */
  UseSpecificVersion?: boolean;
  /** The version of the leaderboard to get. */
  Version?: number;
}

/** Note that the Position of the user in the results is for the overall leaderboard. */
export interface GetLeaderboardResult {
  /** Ordered listing of users and their positions in the requested leaderboard. */
  Leaderboard?: PlayerLeaderboardEntry[];
  /** The time the next scheduled reset will occur. Null if the leaderboard does not reset on a schedule. */
  NextReset?: string;
  /** The version of the leaderboard returned. */
  Version: number;
}

export interface GetPlayerCombinedInfoRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Flags for which pieces of info to return for the user. */
  InfoRequestParameters: GetPlayerCombinedInfoRequestParams;
  /** PlayFabId of the user whose data will be returned */
  PlayFabId: string;
}

export interface GetPlayerCombinedInfoRequestParams {
  /** Whether to get character inventories. Defaults to false. */
  GetCharacterInventories: boolean;
  /** Whether to get the list of characters. Defaults to false. */
  GetCharacterList: boolean;
  /** Whether to get player profile. Defaults to false. Has no effect for a new player. */
  GetPlayerProfile: boolean;
  /** Whether to get player statistics. Defaults to false. */
  GetPlayerStatistics: boolean;
  /** Whether to get title data. Defaults to false. */
  GetTitleData: boolean;
  /** Whether to get the player's account Info. Defaults to false */
  GetUserAccountInfo: boolean;
  /** Whether to get the player's custom data. Defaults to false */
  GetUserData: boolean;
  /** Whether to get the player's inventory. Defaults to false */
  GetUserInventory: boolean;
  /** Whether to get the player's read only data. Defaults to false */
  GetUserReadOnlyData: boolean;
  /** Whether to get the player's virtual currency balances. Defaults to false */
  GetUserVirtualCurrency: boolean;
  /** Specific statistics to retrieve. Leave null to get all keys. Has no effect if GetPlayerStatistics is false */
  PlayerStatisticNames?: string[];
  /** Specifies the properties to return from the player profile. Defaults to returning the player's display name. */
  ProfileConstraints?: PlayerProfileViewConstraints;
  /** Specific keys to search for in the custom data. Leave null to get all keys. Has no effect if GetTitleData is false */
  TitleDataKeys?: string[];
  /** Specific keys to search for in the custom data. Leave null to get all keys. Has no effect if GetUserData is false */
  UserDataKeys?: string[];
  /** Specific keys to search for in the custom data. Leave null to get all keys. Has no effect if GetUserReadOnlyData is false */
  UserReadOnlyDataKeys?: string[];
}

export interface GetPlayerCombinedInfoResult {
  /** Results for requested info. */
  InfoResultPayload?: GetPlayerCombinedInfoResultPayload;
  /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
  PlayFabId?: string;
}

export interface GetPlayerCombinedInfoResultPayload {
  /** Account information for the user. This is always retrieved. */
  AccountInfo?: UserAccountInfo;
  /** Inventories for each character for the user. */
  CharacterInventories?: CharacterInventory[];
  /** List of characters for the user. */
  CharacterList?: CharacterResult[];
  /** The profile of the players. This profile is not guaranteed to be up-to-date. For a new player, this profile will not exist. */
  PlayerProfile?: PlayerProfileModel;
  /** List of statistics for this player. */
  PlayerStatistics?: StatisticValue[];
  /** Title data for this title. */
  TitleData?: Record<string, unknown>;
  /** User specific custom data. */
  UserData?: UserDataRecord;
  /** The version of the UserData that was returned. */
  UserDataVersion: number;
  /** Array of inventory items in the user's current inventory. */
  UserInventory?: ItemInstance[];
  /** User specific read-only data. */
  UserReadOnlyData?: UserDataRecord;
  /** The version of the Read-Only UserData that was returned. */
  UserReadOnlyDataVersion: number;
  /** Dictionary of virtual currency balance(s) belonging to the user. */
  UserVirtualCurrency?: Record<string, unknown>;
  /** Dictionary of remaining times and timestamps for virtual currencies. */
  UserVirtualCurrencyRechargeTimes?: VirtualCurrencyRechargeTime;
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

export interface GetPlayerStatisticsRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** user for whom statistics are being requested */
  PlayFabId: string;
  /** statistics to return */
  StatisticNames?: string[];
  /** statistics to return, if StatisticNames is not set (only statistics which have a version matching that provided will be returned) */
  StatisticNameVersions?: StatisticNameVersion[];
}

/** In addition to being available for use by the title, the statistics are used for all leaderboard operations in PlayFab. */
export interface GetPlayerStatisticsResult {
  /** PlayFab unique identifier of the user whose statistics are being returned */
  PlayFabId?: string;
  /** User statistics for the requested user. */
  Statistics?: StatisticValue[];
}

export interface GetPlayerStatisticVersionsRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** unique name of the statistic */
  StatisticName?: string;
}

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

export interface GetPlayFabIDsFromFacebookIDsRequest {
  /** Array of unique Facebook identifiers for which the title needs to get PlayFab identifiers. */
  FacebookIDs: string[];
}

/** For Facebook identifiers which have not been linked to PlayFab accounts, null will be returned. */
export interface GetPlayFabIDsFromFacebookIDsResult {
  /** Mapping of Facebook identifiers to PlayFab identifiers. */
  Data?: FacebookPlayFabIdPair[];
}

export interface GetPlayFabIDsFromFacebookInstantGamesIdsRequest {
  /** Array of unique Facebook Instant Games identifiers for which the title needs to get PlayFab identifiers. */
  FacebookInstantGamesIds: string[];
}

/** For Facebook Instant Games identifiers which have not been linked to PlayFab accounts, null will be returned. */
export interface GetPlayFabIDsFromFacebookInstantGamesIdsResult {
  /** Mapping of Facebook Instant Games identifiers to PlayFab identifiers. */
  Data?: FacebookInstantGamesPlayFabIdPair[];
}

export interface GetPlayFabIDsFromGenericIDsRequest {
  /** Array of unique generic service identifiers for which the title needs to get PlayFab identifiers. Currently limited to a maximum of 10 in a single request. */
  GenericIDs: GenericServiceId[];
}

/** For generic service identifiers which have not been linked to PlayFab accounts, null will be returned. */
export interface GetPlayFabIDsFromGenericIDsResult {
  /** Mapping of generic service identifiers to PlayFab identifiers. */
  Data?: GenericPlayFabIdPair[];
}

export interface GetPlayFabIDsFromNintendoSwitchDeviceIdsRequest {
  /** Array of unique Nintendo Switch Device identifiers for which the title needs to get PlayFab identifiers. */
  NintendoSwitchDeviceIds: string[];
}

/** For Nintendo Switch Device identifiers which have not been linked to PlayFab accounts, null will be returned. */
export interface GetPlayFabIDsFromNintendoSwitchDeviceIdsResult {
  /** Mapping of Nintendo Switch Device identifiers to PlayFab identifiers. */
  Data?: NintendoSwitchPlayFabIdPair[];
}

export interface GetPlayFabIDsFromPSNAccountIDsRequest {
  /** Id of the PSN issuer environment. If null, defaults to production environment. */
  IssuerId?: number;
  /** Array of unique PlayStation Network identifiers for which the title needs to get PlayFab identifiers. */
  PSNAccountIDs: string[];
}

/** For PlayStation Network identifiers which have not been linked to PlayFab accounts, null will be returned. */
export interface GetPlayFabIDsFromPSNAccountIDsResult {
  /** Mapping of PlayStation Network identifiers to PlayFab identifiers. */
  Data?: PSNAccountPlayFabIdPair[];
}

export interface GetPlayFabIDsFromSteamIDsRequest {
  /** Array of unique Steam identifiers (Steam profile IDs) for which the title needs to get PlayFab identifiers. */
  SteamStringIDs?: string[];
}

/** For Steam identifiers which have not been linked to PlayFab accounts, null will be returned. */
export interface GetPlayFabIDsFromSteamIDsResult {
  /** Mapping of Steam identifiers to PlayFab identifiers. */
  Data?: SteamPlayFabIdPair[];
}

export interface GetPlayFabIDsFromXboxLiveIDsRequest {
  /** The ID of Xbox Live sandbox. */
  Sandbox?: string;
  /** Array of unique Xbox Live account identifiers for which the title needs to get PlayFab identifiers. */
  XboxLiveAccountIDs: string[];
}

/** For XboxLive identifiers which have not been linked to PlayFab accounts, null will be returned. */
export interface GetPlayFabIDsFromXboxLiveIDsResult {
  /** Mapping of PlayStation Network identifiers to PlayFab identifiers. */
  Data?: XboxLiveAccountPlayFabIdPair[];
}

/** This API is designed to return publisher-specific values which can be read, but not written to, by the client. This data is shared across all titles assigned to a particular publisher, and can be used for cross-game coordination. Only titles assigned to a publisher can use this API. For more information email helloplayfab@microsoft.com. Note that there may up to a minute delay in between updating title data and this API call returning the newest value. */
export interface GetPublisherDataRequest {
  /**  array of keys to get back data from the Publisher data blob, set by the admin tools */
  Keys: string[];
}

export interface GetPublisherDataResult {
  /** a dictionary object of key / value pairs */
  Data?: Record<string, unknown>;
}

export interface GetRandomResultTablesRequest {
  /** Specifies the catalog version that should be used to retrieve the Random Result Tables. If unspecified, uses default/primary catalog. */
  CatalogVersion?: string;
  /** The unique identifier of the Random Result Table to use. */
  TableIDs: string[];
}

/** Note that if a specified Random Result Table contains no entries, or does not exist in the catalog, an InvalidDropTable error will be returned. */
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

export interface GetServerCustomIDsFromPlayFabIDsRequest {
  /** Array of unique PlayFab player identifiers for which the title needs to get server custom identifiers. Cannot contain more than 25 identifiers. */
  PlayFabIDs: string[];
}

/** For a PlayFab account that isn't associated with a server custom identity, ServerCustomId will be null. */
export interface GetServerCustomIDsFromPlayFabIDsResult {
  /** Mapping of server custom player identifiers to PlayFab identifiers. */
  Data?: ServerCustomIDPlayFabIDPair[];
}

export interface GetSharedGroupDataRequest {
  /** If true, return the list of all members of the shared group. */
  GetMembers?: boolean;
  /** Specific keys to retrieve from the shared group (if not specified, all keys will be returned, while an empty array indicates that no keys should be returned). */
  Keys?: string[];
  /** Unique identifier for the shared group. */
  SharedGroupId: string;
}

export interface GetSharedGroupDataResult {
  /** Data for the requested keys. */
  Data?: SharedGroupDataRecord;
  /** List of PlayFabId identifiers for the members of this group, if requested. */
  Members?: string[];
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

/** A store contains an array of references to items defined in one or more catalog versions of the game, along with the prices for the item, in both real world and virtual currencies. These prices act as an override to any prices defined in the catalog. In this way, the base definitions of the items may be defined in the catalog, with all associated properties, while the pricing can be set for each store, as needed. This allows for subsets of goods to be defined for different purposes (in order to simplify showing some, but not all catalog items to users, based upon different characteristics), along with unique prices. Note that all prices defined in the catalog and store definitions for the item are considered valid, and that a compromised client can be made to send a request for an item based upon any of these definitions. If no price is specified in the store for an item, the price set in the catalog should be displayed to the user. */
export interface GetStoreItemsServerRequest {
  /** Catalog version to store items from. Use default catalog version if null */
  CatalogVersion?: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Optional identifier for the player to use in requesting the store information - if used, segment overrides will be applied */
  PlayFabId?: string;
  /** Unqiue identifier for the store which is being requested */
  StoreId: string;
}

/** This query retrieves the current time from one of the servers in PlayFab. Please note that due to clock drift between servers, there is a potential variance of up to 5 seconds. */
export interface GetTimeRequest {}

/** Time is always returned as Coordinated Universal Time (UTC). */
export interface GetTimeResult {
  /** Current server time when the request was received, in UTC */
  Time: string;
}

/** This API is designed to return title specific values which can be read, but not written to, by the client. For example, a developer could choose to store values which modify the user experience, such as enemy spawn rates, weapon strengths, movement speeds, etc. This allows a developer to update the title without the need to create, test, and ship a new build. If an override label is specified in the request, the overrides are applied automatically and returned with the title data. Note that there may up to a minute delay in between updating title data and this API call returning the newest value. */
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

export interface GetTitleNewsRequest {
  /** Limits the results to the last n entries. Defaults to 10 if not set. */
  Count?: number;
}

export interface GetTitleNewsResult {
  /** Array of localized news items. */
  News?: TitleNewsItem[];
}

/** This API allows for access to details regarding a user in the PlayFab service, usually for purposes of customer support. Note that data returned may be Personally Identifying Information (PII), such as email address, and so care should be taken in how this data is stored and managed. Since this call will always return the relevant information for users who have accessed the title, the recommendation is to not store this data locally. */
export interface GetUserAccountInfoRequest {
  /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
  PlayFabId: string;
}

export interface GetUserAccountInfoResult {
  /** Account details for the user whose information was requested. */
  UserInfo?: UserAccountInfo;
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

/** Grants a character to the user of the type and name specified in the request. */
export interface GrantCharacterToUserRequest {
  /** Non-unique display name of the character being granted (1-40 characters in length). */
  CharacterName: string;
  /** Type of the character being granted; statistics can be sliced based on this value. */
  CharacterType: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
  PlayFabId: string;
}

export interface GrantCharacterToUserResult {
  /** Unique identifier tagged to this character. */
  CharacterId?: string;
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

/** This function directly adds inventory items to the character's inventories. As a result of this operations, the user will not be charged any transaction fee, regardless of the inventory item catalog definition. Please note that the processing time for inventory grants and purchases increases fractionally the more items are in the inventory, and the more items are in the grant/purchase operation. */
export interface GrantItemsToCharacterRequest {
  /** String detailing any additional information concerning this operation. */
  Annotation?: string;
  /** Catalog version from which items are to be granted. */
  CatalogVersion?: string;
  /** Unique PlayFab assigned ID for a specific character owned by a user */
  CharacterId: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Array of itemIds to grant to the user. */
  ItemIds?: string[];
  /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
  PlayFabId: string;
}

export interface GrantItemsToCharacterResult {
  /** Array of items granted to users. */
  ItemGrantResults?: GrantedItemInstance[];
}

/** This function directly adds inventory items to the user's inventories. As a result of this operations, the user will not be charged any transaction fee, regardless of the inventory item catalog definition. Please note that the processing time for inventory grants and purchases increases fractionally the more items are in the inventory, and the more items are in the grant/purchase operation. */
export interface GrantItemsToUserRequest {
  /** String detailing any additional information concerning this operation. */
  Annotation?: string;
  /** Catalog version from which items are to be granted. */
  CatalogVersion?: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Array of itemIds to grant to the user. */
  ItemIds: string[];
  /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
  PlayFabId: string;
}

/** Please note that the order of the items in the response may not match the order of items in the request. */
export interface GrantItemsToUserResult {
  /** Array of items granted to users. */
  ItemGrantResults?: GrantedItemInstance[];
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

export interface LinkPSNAccountRequest {
  /** Authentication code provided by the PlayStation Network. */
  AuthCode: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** If another user is already linked to the account, unlink the other user and re-link. */
  ForceLink?: boolean;
  /** Id of the PSN issuer environment. If null, defaults to production environment. */
  IssuerId?: number;
  /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
  PlayFabId: string;
  /** Redirect URI supplied to PSN when requesting an auth code */
  RedirectUri: string;
}

export interface LinkPSNAccountResult {}

export interface LinkServerCustomIdRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** If another user is already linked to the custom ID, unlink the other user and re-link. */
  ForceLink?: boolean;
  /** Unique PlayFab identifier. */
  PlayFabId: string;
  /** Unique server custom identifier for this player. */
  ServerCustomId: string;
}

export interface LinkServerCustomIdResult {}

export interface LinkXboxAccountRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** If another user is already linked to the account, unlink the other user and re-link. */
  ForceLink?: boolean;
  /** Unique PlayFab identifier for a user, or null if no PlayFab account is linked to the Xbox Live identifier. */
  PlayFabId: string;
  /** Token provided by the Xbox Live SDK/XDK method GetTokenAndSignatureAsync("POST", "https://playfabapi.com/", ""). */
  XboxToken: string;
}

export interface LinkXboxAccountResult {}

/** Returns a list of every character that currently belongs to a user. */
export interface ListUsersCharactersRequest {
  /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
  PlayFabId: string;
}

export interface ListUsersCharactersResult {
  /** The requested list of characters. */
  Characters?: CharacterResult[];
}

/** Contains the localized push notification content. */
export interface LocalizedPushNotificationProperties {
  /** Message of the localized push notification template. */
  Message?: string;
  /** Subject of the localized push notification template. */
  Subject?: string;
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

export interface LoginWithServerCustomIdRequest {
  /** Automatically create a PlayFab account if one is not currently linked to this ID. */
  CreateAccount?: boolean;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Flags for which pieces of info to return for the user. */
  InfoRequestParameters?: GetPlayerCombinedInfoRequestParams;
  /** Player secret that is used to verify API request signatures (Enterprise Only). */
  PlayerSecret?: string;
  /** The backend server identifier for this player. */
  ServerCustomId?: string;
}

/** If this is the first time a user has signed in with the Steam ID and CreateAccount is set to true, a new PlayFab account will be created and linked to the Steam account. In this case, no email or username will be associated with the PlayFab account. Otherwise, if no PlayFab account is linked to the Steam account, an error indicating this will be returned, so that the title can guide the user through creation of a PlayFab account. Steam users that are not logged into the Steam Client app will only have their Steam username synced, other data, such as currency and country will not be available until they login while the Client is open. */
export interface LoginWithSteamIdRequest {
  /** Automatically create a PlayFab account if one is not currently linked to this ID. */
  CreateAccount?: boolean;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Flags for which pieces of info to return for the user. */
  InfoRequestParameters?: GetPlayerCombinedInfoRequestParams;
  /** Unique Steam identifier for a user */
  SteamId: string;
}

/** If this is the first time a user has signed in with the Xbox ID and CreateAccount is set to true, a new PlayFab account will be created and linked to the Xbox Live account. In this case, no email or username will be associated with the PlayFab account. Otherwise, if no PlayFab account is linked to the Xbox Live account, an error indicating this will be returned, so that the title can guide the user through creation of a PlayFab account. */
export interface LoginWithXboxIdRequest {
  /** Automatically create a PlayFab account if one is not currently linked to this ID. */
  CreateAccount?: boolean;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Flags for which pieces of info to return for the user. */
  InfoRequestParameters?: GetPlayerCombinedInfoRequestParams;
  /** The id of Xbox Live sandbox. */
  Sandbox: string;
  /** Unique Xbox identifier for a user */
  XboxId: string;
}

/** If this is the first time a user has signed in with the Xbox Live account and CreateAccount is set to true, a new PlayFab account will be created and linked to the Xbox Live account. In this case, no email or username will be associated with the PlayFab account. Otherwise, if no PlayFab account is linked to the Xbox Live account, an error indicating this will be returned, so that the title can guide the user through creation of a PlayFab account. */
export interface LoginWithXboxRequest {
  /** Automatically create a PlayFab account if one is not currently linked to this ID. */
  CreateAccount?: boolean;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Flags for which pieces of info to return for the user. */
  InfoRequestParameters?: GetPlayerCombinedInfoRequestParams;
  /** Token provided by the Xbox Live SDK/XDK method GetTokenAndSignatureAsync("POST", "https://playfabapi.com/", ""). */
  XboxToken: string;
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

export interface ModifyCharacterVirtualCurrencyResult {
  /** Balance of the virtual currency after modification. */
  Balance: number;
  /** Name of the virtual currency which was modified. */
  VirtualCurrency?: string;
}

/** This function can both add and remove uses of an inventory item. If the number of uses drops below zero, the item will be removed from active inventory. */
export interface ModifyItemUsesRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Unique instance identifier of the item to be modified. */
  ItemInstanceId: string;
  /** PlayFab unique identifier of the user whose item is being modified. */
  PlayFabId: string;
  /** Number of uses to add to the item. Can be negative to remove uses. */
  UsesToAdd: number;
}

export interface ModifyItemUsesResult {
  /** Unique instance identifier of the item with uses consumed. */
  ItemInstanceId?: string;
  /** Number of uses remaining on the item. */
  RemainingUses: number;
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

/** Transfers an item from a character to another character that is owned by the same user. This will remove the item from the character's inventory (until and unless it is moved back), and will enable the other character to make use of the item instead. */
export interface MoveItemToCharacterFromCharacterRequest {
  /** Unique identifier of the character that currently has the item. */
  GivingCharacterId: string;
  /** Unique PlayFab assigned instance identifier of the item */
  ItemInstanceId: string;
  /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
  PlayFabId: string;
  /** Unique identifier of the character that will be receiving the item. */
  ReceivingCharacterId: string;
}

export interface MoveItemToCharacterFromCharacterResult {}

/** Transfers an item from a user to a character she owns. This will remove the item from the user's inventory (until and unless it is moved back), and will enable the character to make use of the item instead. */
export interface MoveItemToCharacterFromUserRequest {
  /** Unique PlayFab assigned ID for a specific character owned by a user */
  CharacterId: string;
  /** Unique PlayFab assigned instance identifier of the item */
  ItemInstanceId: string;
  /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
  PlayFabId: string;
}

export interface MoveItemToCharacterFromUserResult {}

/** Transfers an item from a character to the owning user. This will remove the item from the character's inventory (until and unless it is moved back), and will enable the user to make use of the item instead. */
export interface MoveItemToUserFromCharacterRequest {
  /** Unique PlayFab assigned ID for a specific character owned by a user */
  CharacterId: string;
  /** Unique PlayFab assigned instance identifier of the item */
  ItemInstanceId: string;
  /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
  PlayFabId: string;
}

export interface MoveItemToUserFromCharacterResult {}

export interface NintendoSwitchPlayFabIdPair {
  /** Unique Nintendo Switch Device identifier for a user. */
  NintendoSwitchDeviceId?: string;
  /** Unique PlayFab identifier for a user, or null if no PlayFab account is linked to the Nintendo Switch Device identifier. */
  PlayFabId?: string;
}

export interface NotifyMatchmakerPlayerLeftRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Unique identifier of the Game Instance the user is leaving. */
  LobbyId: string;
  /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
  PlayFabId: string;
}

export interface NotifyMatchmakerPlayerLeftResult {
  /** State of user leaving the Game Server Instance. */
  PlayerState?: PlayerConnectionState;
}

export enum PlayerConnectionState {
  Unassigned = "Unassigned",
  Connecting = "Connecting",
  Participating = "Participating",
  Participated = "Participated",
}

export interface PlayerLeaderboardEntry {
  /** Title-specific display name of the user for this leaderboard entry. */
  DisplayName?: string;
  /** PlayFab unique identifier of the user for this leaderboard entry. */
  PlayFabId?: string;
  /** User's overall position in the leaderboard. */
  Position: number;
  /** The profile of the user, if requested. */
  Profile?: PlayerProfileModel;
  /** Specific value of the user's statistic. */
  StatValue: number;
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

export interface PlayerStatisticVersion {
  /** time when the statistic version became active */
  ActivationTime: string;
  /** time when the statistic version became inactive due to statistic version incrementing */
  DeactivationTime?: string;
  /** time at which the statistic version was scheduled to become active, based on the configured ResetInterval */
  ScheduledActivationTime?: string;
  /** time at which the statistic version was scheduled to become inactive, based on the configured ResetInterval */
  ScheduledDeactivationTime?: string;
  /** name of the statistic when the version became active */
  StatisticName?: string;
  /** version of the statistic */
  Version: number;
}

export interface PSNAccountPlayFabIdPair {
  /** Unique PlayFab identifier for a user, or null if no PlayFab account is linked to the PlayStation Network identifier. */
  PlayFabId?: string;
  /** Unique PlayStation Network identifier for a user. */
  PSNAccountId?: string;
}

export interface PushNotificationPackage {
  /** Numerical badge to display on App icon (iOS only) */
  Badge: number;
  /** This must be a JSON formatted object. For use with developer-created custom Push Notification plugins */
  CustomData?: string;
  /** Icon file to display with the message (Not supported for iOS) */
  Icon?: string;
  /** Content of the message (all platforms) */
  Message: string;
  /** Sound file to play with the message (all platforms) */
  Sound?: string;
  /** Title/Subject of the message. Not supported for iOS */
  Title: string;
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

export interface RandomResultTableListing {
  /** Catalog version this table is associated with */
  CatalogVersion?: string;
  /** Child nodes that indicate what kind of drop table item this actually is. */
  Nodes: ResultTableNode[];
  /** Unique name for this drop table */
  TableId: string;
}

/** Coupon codes can be created for any item, or set of items, in the catalog for the title. This operation causes the coupon to be consumed, and the specific items to be awarded to the user. Attempting to re-use an already consumed code, or a code which has not yet been created in the service, will result in an error. */
export interface RedeemCouponRequest {
  /** Catalog version of the coupon. */
  CatalogVersion?: string;
  /** Optional identifier for the Character that should receive the item. If null, item is added to the player */
  CharacterId?: string;
  /** Generated coupon code to redeem. */
  CouponCode: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
  PlayFabId: string;
}

export interface RedeemCouponResult {
  /** Items granted to the player as a result of redeeming the coupon. */
  GrantedItems?: ItemInstance[];
}

/** This function is used by a Game Server Instance to validate with the PlayFab service that a user has been registered as connected to the server. The Ticket is provided to the client either as a result of a call to StartGame or Matchmake, each of which return a Ticket specific to the Game Server Instance. This function will fail in any case where the Ticket presented is not valid for the specific Game Server Instance making the call. Note that data returned may be Personally Identifying Information (PII), such as email address, and so care should be taken in how this data is stored and managed. Since this call will always return the relevant information for users who have accessed the title, the recommendation is to not store this data locally. */
export interface RedeemMatchmakerTicketRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Unique identifier of the Game Server Instance that is asking for validation of the authorization ticket. */
  LobbyId: string;
  /** Server authorization ticket passed back from a call to Matchmake or StartGame. */
  Ticket: string;
}

export interface RedeemMatchmakerTicketResult {
  /** Error value if the ticket was not validated. */
  Error?: string;
  /** Boolean indicating whether the ticket was validated by the PlayFab service. */
  TicketIsValid: boolean;
  /** User account information for the user validated. */
  UserInfo?: UserAccountInfo;
}

export interface RefreshGameServerInstanceHeartbeatRequest {
  /** Unique identifier of the Game Server Instance for which the heartbeat is updated. */
  LobbyId: string;
}

export interface RefreshGameServerInstanceHeartbeatResult {}

export enum Region {
  USCentral = "USCentral",
  USEast = "USEast",
  EUWest = "EUWest",
  Singapore = "Singapore",
  Japan = "Japan",
  Brazil = "Brazil",
  Australia = "Australia",
}

export interface RegisterGameRequest {
  /** Unique identifier of the build running on the Game Server Instance. */
  Build: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Game Mode the Game Server instance is running. Note that this must be defined in the Game Modes tab in the PlayFab Game Manager, along with the Build ID (the same Game Mode can be defined for multiple Build IDs). */
  GameMode: string;
  /** Previous lobby id if re-registering an existing game. */
  LobbyId?: string;
  /** Region in which the Game Server Instance is running. For matchmaking using non-AWS region names, set this to any AWS region and use Tags (below) to specify your custom region. */
  Region: Region;
  /** IPV4 address of the game server instance. */
  ServerIPV4Address?: string;
  /** IPV6 address (if any) of the game server instance. */
  ServerIPV6Address?: string;
  /** Port number for communication with the Game Server Instance. */
  ServerPort: string;
  /** Public DNS name (if any) of the server */
  ServerPublicDNSName?: string;
  /** Tags for the Game Server Instance */
  Tags?: Record<string, unknown>;
}

export interface RegisterGameResponse {
  /** Unique identifier generated for the Game Server Instance that is registered. If LobbyId is specified in request and the game still exists in PlayFab, the LobbyId in request is returned. Otherwise a new lobby id will be returned. */
  LobbyId?: string;
}

export interface RemoveFriendRequest {
  /** PlayFab identifier of the friend account which is to be removed. */
  FriendPlayFabId: string;
  /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
  PlayFabId: string;
}

export interface RemoveGenericIDRequest {
  /** Generic service identifier to be removed from the player. */
  GenericId: GenericServiceId;
  /** PlayFabId of the user to remove. */
  PlayFabId: string;
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

export interface RemoveSharedGroupMembersRequest {
  /** An array of unique PlayFab assigned ID of the user on whom the operation will be performed. */
  PlayFabIds: string[];
  /** Unique identifier for the shared group. */
  SharedGroupId: string;
}

export interface RemoveSharedGroupMembersResult {}

export interface ReportPlayerServerRequest {
  /** Optional additional comment by reporting player. */
  Comment?: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Unique PlayFab identifier of the reported player. */
  ReporteeId: string;
  /** PlayFabId of the reporting player. */
  ReporterId: string;
}

/** Players are currently limited to five reports per day. Attempts by a single user account to submit reports beyond five will result in Updated being returned as false. */
export interface ReportPlayerServerResult {
  /** The number of remaining reports which may be filed today by this reporting player. */
  SubmissionsRemaining: number;
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

/** Represents the save push notification template request. */
export interface SavePushNotificationTemplateRequest {
  /** Android JSON for the notification template. */
  AndroidPayload?: string;
  /** Id of the push notification template. */
  Id?: string;
  /** IOS JSON for the notification template. */
  IOSPayload?: string;
  /** Dictionary of localized push notification templates with the language as the key. */
  LocalizedPushNotificationTemplates?: LocalizedPushNotificationProperties;
  /** Name of the push notification template. */
  Name: string;
}

/** Represents the save push notification template result. */
export interface SavePushNotificationTemplateResult {
  /** Id of the push notification template that was saved. */
  PushNotificationTemplateId?: string;
}

export interface ScriptExecutionError {
  /** Error code, such as CloudScriptNotFound, JavascriptException, CloudScriptFunctionArgumentSizeExceeded, CloudScriptAPIRequestCountExceeded, CloudScriptAPIRequestError, or CloudScriptHTTPRequestError */
  Error?: string;
  /** Details about the error */
  Message?: string;
  /** Point during the execution of the script at which the error occurred, if any */
  StackTrace?: string;
}

/** PlayFab accounts which have valid email address or username will be able to receive a password reset email using this API.The email sent must be an account recovery email template. The username or email can be passed in to send the email */
export interface SendCustomAccountRecoveryEmailRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** User email address attached to their account */
  Email?: string;
  /** The email template id of the account recovery email template to send. */
  EmailTemplateId: string;
  /** The user's username requesting an account recovery. */
  Username?: string;
}

export interface SendCustomAccountRecoveryEmailResult {}

/** Sends an email for only players that have contact emails associated with them. Takes in an email template ID specifyingthe email template to send. */
export interface SendEmailFromTemplateRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** The email template id of the email template to send. */
  EmailTemplateId: string;
  /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
  PlayFabId: string;
}

export interface SendEmailFromTemplateResult {}

/** Represents the request for sending a push notification template to a recipient. */
export interface SendPushNotificationFromTemplateRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Id of the push notification template. */
  PushNotificationTemplateId: string;
  /** PlayFabId of the push notification recipient. */
  Recipient: string;
}

export interface SendPushNotificationRequest {
  /** Allows you to provide precisely formatted json to target devices. This is an advanced feature, allowing you to deliver to custom plugin logic, fields, or functionality not natively supported by PlayFab. */
  AdvancedPlatformDelivery?: AdvancedPushPlatformMsg[];
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Text of message to send. */
  Message?: string;
  /** Defines all possible push attributes like message, title, icon, etc. Some parameters are device specific - please see the PushNotificationPackage documentation for details. */
  Package?: PushNotificationPackage;
  /** PlayFabId of the recipient of the push notification. */
  Recipient: string;
  /** Subject of message to send (may not be displayed in all platforms) */
  Subject?: string;
  /** Target Platforms that should receive the Message or Package. If omitted, we will send to all available platforms. */
  TargetPlatforms?: PushNotificationPlatform[];
}

export interface SendPushNotificationResult {}

export interface ServerCustomIDPlayFabIDPair {
  /** Unique PlayFab identifier. */
  PlayFabId?: string;
  /** Unique server custom identifier for this player. */
  ServerCustomId?: string;
}

export interface ServerLoginResult {
  /** If LoginTitlePlayerAccountEntity flag is set on the login request the title_player_account will also be logged in and returned. */
  EntityToken?: EntityTokenResponse;
  /** Results for requested info. */
  InfoResultPayload?: GetPlayerCombinedInfoResultPayload;
  /** The time of this user's previous login. If there was no previous login, then it's DateTime.MinValue */
  LastLoginTime?: string;
  /** True if the account was newly created on this login. */
  NewlyCreated: boolean;
  /** Player's unique PlayFabId. */
  PlayFabId?: string;
  /** Unique token authorizing the user and game at the server level, for the current session. */
  SessionTicket?: string;
  /** Settings specific to this user. */
  SettingsForUser?: UserSettings;
  /** The experimentation treatments for this user at the time of login. */
  TreatmentAssignment?: TreatmentAssignment;
}

/** This operation is not additive. It will completely replace the tag list for the specified user. Please note that only users in the PlayFab friends list can be assigned tags. Attempting to set a tag on a friend only included in the friends list from a social site integration (such as Facebook or Steam) will return the AccountNotFound error. */
export interface SetFriendTagsRequest {
  /** PlayFab identifier of the friend account to which the tag(s) should be applied. */
  FriendPlayFabId: string;
  /** PlayFab identifier of the player whose friend is to be updated. */
  PlayFabId: string;
  /** Array of tags to set on the friend account. */
  Tags: string[];
}

export interface SetGameServerInstanceDataRequest {
  /** Custom data to set for the specified game server instance. */
  GameServerData: string;
  /** Unique identifier of the Game Instance to be updated, in decimal format. */
  LobbyId: string;
}

export interface SetGameServerInstanceDataResult {}

export interface SetGameServerInstanceStateRequest {
  /** Unique identifier of the Game Instance to be updated, in decimal format. */
  LobbyId: string;
  /** State to set for the specified game server instance. */
  State: GameInstanceState;
}

export interface SetGameServerInstanceStateResult {}

export interface SetGameServerInstanceTagsRequest {
  /** Unique identifier of the Game Server Instance to be updated. */
  LobbyId: string;
  /** Tags to set for the specified Game Server Instance. Note that this is the complete list of tags to be associated with the Game Server Instance. */
  Tags: Record<string, unknown>;
}

export interface SetGameServerInstanceTagsResult {}

/** APIs that require signatures require that the player have a configured Player Secret Key that is used to sign all requests. Players that don't have a secret will be blocked from making API calls until it is configured. To create a signature header add a SHA256 hashed string containing UTF8 encoded JSON body as it will be sent to the server, the current time in UTC formatted to ISO 8601, and the players secret formatted as 'body.date.secret'. Place the resulting hash into the header X-PlayFab-Signature, along with a header X-PlayFab-Timestamp of the same UTC timestamp used in the signature. */
export interface SetPlayerSecretRequest {
  /** Player secret that is used to verify API request signatures (Enterprise Only). */
  PlayerSecret?: string;
  /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
  PlayFabId: string;
}

export interface SetPlayerSecretResult {}

/** This API is designed to store publisher-specific values which can be read, but not written to, by the client. This data is shared across all titles assigned to a particular publisher, and can be used for cross-game coordination. Only titles assigned to a publisher can use this API. This operation is additive. If a Key does not exist in the current dataset, it will be added with the specified Value. If it already exists, the Value for that key will be overwritten with the new Value. For more information email helloplayfab@microsoft.com */
export interface SetPublisherDataRequest {
  /** key we want to set a value on (note, this is additive - will only replace an existing key's value if they are the same name.) Keys are trimmed of whitespace. Keys may not begin with the '!' character. */
  Key: string;
  /** new value to set. Set to null to remove a value */
  Value?: string;
}

export interface SetPublisherDataResult {}

/** This API is designed to store title specific values which can be read, but not written to, by the client. For example, a developer could choose to store values which modify the user experience, such as enemy spawn rates, weapon strengths, movement speeds, etc. This allows a developer to update the title without the need to create, test, and ship a new build. This operation is additive. If a Key does not exist in the current dataset, it will be added with the specified Value. If it already exists, the Value for that key will be overwritten with the new Value. */
export interface SetTitleDataRequest {
  /** key we want to set a value on (note, this is additive - will only replace an existing key's value if they are the same name.) Keys are trimmed of whitespace. Keys may not begin with the '!' character. */
  Key: string;
  /** new value to set. Set to null to remove a value */
  Value?: string;
}

export interface SetTitleDataResult {}

export interface SharedGroupDataRecord {
  /** Timestamp for when this data was last updated. */
  LastUpdated: string;
  /** PlayFabId of the user to last update this value. */
  LastUpdatedBy?: string;
  /** Indicates whether this data can be read by all users (public) or only members of the group (private). */
  Permission?: UserDataPermission;
  /** Data stored for the specified group data key. */
  Value?: string;
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

export interface StatisticModel {
  /** Statistic name */
  Name?: string;
  /** Statistic value */
  Value: number;
  /** Statistic version (0 if not a versioned statistic) */
  Version: number;
}

export interface StatisticNameVersion {
  /** unique name of the statistic */
  StatisticName: string;
  /** the version of the statistic to be returned */
  Version: number;
}

export interface StatisticUpdate {
  /** unique name of the statistic */
  StatisticName: string;
  /** statistic value for the player */
  Value: number;
  /** for updates to an existing statistic value for a player, the version of the statistic when it was loaded. Null when setting the statistic value for the first time. */
  Version?: number;
}

export interface StatisticValue {
  /** unique name of the statistic */
  StatisticName?: string;
  /** statistic value for the player */
  Value: number;
  /** for updates to an existing statistic value for a player, the version of the statistic when it was loaded */
  Version: number;
}

export interface SteamPlayFabIdPair {
  /** Unique PlayFab identifier for a user, or null if no PlayFab account is linked to the Steam identifier. */
  PlayFabId?: string;
  /** Unique Steam identifier for a user. */
  SteamStringId?: string;
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

export interface SubtractCharacterVirtualCurrencyRequest {
  /** Amount to be subtracted from the user balance of the specified virtual currency. */
  Amount: number;
  /** Unique PlayFab assigned ID for a specific character owned by a user */
  CharacterId: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
  PlayFabId: string;
  /** Name of the virtual currency which is to be decremented. */
  VirtualCurrency: string;
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

export enum TitleActivationStatus {
  None = "None",
  ActivatedTitleKey = "ActivatedTitleKey",
  PendingSteam = "PendingSteam",
  ActivatedSteam = "ActivatedSteam",
  RevokedSteam = "RevokedSteam",
}

export interface TitleNewsItem {
  /** News item body. */
  Body?: string;
  /** Unique identifier of news item. */
  NewsId?: string;
  /** Date and time when the news item was posted. */
  Timestamp: string;
  /** Title of the news item. */
  Title?: string;
}

export interface TreatmentAssignment {
  /** List of the experiment variables. */
  Variables?: Variable[];
  /** List of the experiment variants. */
  Variants?: string[];
}

export interface UnlinkPSNAccountRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
  PlayFabId: string;
}

export interface UnlinkPSNAccountResult {}

export interface UnlinkServerCustomIdRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Unique PlayFab identifier. */
  PlayFabId: string;
  /** Unique server custom identifier for this player. */
  ServerCustomId: string;
}

export interface UnlinkServerCustomIdResult {}

export interface UnlinkXboxAccountRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Unique PlayFab identifier for a user, or null if no PlayFab account is linked to the Xbox Live identifier. */
  PlayFabId: string;
}

export interface UnlinkXboxAccountResult {}

/** Specify the container and optionally the catalogVersion for the container to open */
export interface UnlockContainerInstanceRequest {
  /** Specifies the catalog version that should be used to determine container contents. If unspecified, uses catalog associated with the item instance. */
  CatalogVersion?: string;
  /** Unique PlayFab assigned ID for a specific character owned by a user */
  CharacterId?: string;
  /** ItemInstanceId of the container to unlock. */
  ContainerItemInstanceId: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** ItemInstanceId of the key that will be consumed by unlocking this container. If the container requires a key, this parameter is required. */
  KeyItemInstanceId?: string;
  /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
  PlayFabId: string;
}

/** Specify the type of container to open and optionally the catalogVersion for the container to open */
export interface UnlockContainerItemRequest {
  /** Specifies the catalog version that should be used to determine container contents. If unspecified, uses default/primary catalog. */
  CatalogVersion?: string;
  /** Unique PlayFab assigned ID for a specific character owned by a user */
  CharacterId?: string;
  /** Catalog ItemId of the container type to unlock. */
  ContainerItemId: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
  PlayFabId: string;
}

/** The items and vc found within the container. These will be added and stacked in your inventory as appropriate. */
export interface UnlockContainerItemResult {
  /** Items granted to the player as a result of unlocking the container. */
  GrantedItems?: ItemInstance[];
  /** Unique instance identifier of the container unlocked. */
  UnlockedItemInstanceId?: string;
  /** Unique instance identifier of the key used to unlock the container, if applicable. */
  UnlockedWithItemInstanceId?: string;
  /** Virtual currency granted to the player as a result of unlocking the container. */
  VirtualCurrency?: Record<string, unknown>;
}

export interface UpdateAvatarUrlRequest {
  /** URL of the avatar image. If empty, it removes the existing avatar URL. */
  ImageUrl: string;
  /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
  PlayFabId: string;
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

/** This function performs an additive update of the arbitrary JSON object containing the custom data for the user. In updating the custom data object, keys which already exist in the object will have their values overwritten, while keys with null values will be removed. No other key-value pairs will be changed apart from those specified in the call. */
export interface UpdateCharacterDataRequest {
  /** Unique PlayFab assigned ID for a specific character owned by a user */
  CharacterId: string;
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

export interface UpdateCharacterDataResult {
  /** Indicates the current version of the data that has been set. This is incremented with every set call for that type of data (read-only, internal, etc). This version can be provided in Get calls to find updated data. */
  DataVersion: number;
}

/** Character statistics are similar to user statistics in that they are numeric values which may only be updated by a server operation, in order to minimize the opportunity for unauthorized changes. In addition to being available for use by the title, the statistics are used for all leaderboard operations in PlayFab. */
export interface UpdateCharacterStatisticsRequest {
  /** Unique PlayFab assigned ID for a specific character owned by a user */
  CharacterId: string;
  /** Statistics to be updated with the provided values. */
  CharacterStatistics?: Record<string, unknown>;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
  PlayFabId: string;
}

export interface UpdateCharacterStatisticsResult {}

/** This operation is additive. Statistics not currently defined will be added, while those already defined will be updated with the given values. All other user statistics will remain unchanged. */
export interface UpdatePlayerStatisticsRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Indicates whether the statistics provided should be set, regardless of the aggregation method set on the statistic. Default is false. */
  ForceUpdate?: boolean;
  /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
  PlayFabId: string;
  /** Statistics to be updated with the provided values */
  Statistics: StatisticUpdate[];
}

export interface UpdatePlayerStatisticsResult {}

/** Note that in the case of multiple calls to write to the same shared group data keys, the last write received by the PlayFab service will determine the value available to subsequent read operations. For scenarios requiring coordination of data updates, it is recommended that titles make use of user data with read permission set to public, or a combination of user data and shared group data. */
export interface UpdateSharedGroupDataRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Key-value pairs to be written to the custom data. Note that keys are trimmed of whitespace, are limited in size, and may not begin with a '!' character or be null. */
  Data?: Record<string, unknown>;
  /** Optional list of Data-keys to remove from UserData. Some SDKs cannot insert null-values into Data due to language constraints. Use this to delete the keys directly. */
  KeysToRemove?: string[];
  /** Permission to be applied to all user data keys in this request. */
  Permission?: UserDataPermission;
  /** Unique identifier for the shared group. */
  SharedGroupId: string;
}

export interface UpdateSharedGroupDataResult {}

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

/** This function performs an additive update of the arbitrary JSON object containing the custom data for the item instance which belongs to the specified user. In updating the custom data object, keys which already exist in the object will have their values overwritten, while keys with null values will be removed. No other key-value pairs will be changed apart from those specified in the call. */
export interface UpdateUserInventoryItemDataRequest {
  /** Unique PlayFab assigned ID for a specific character owned by a user */
  CharacterId?: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Key-value pairs to be written to the custom data. Note that keys are trimmed of whitespace, are limited in size, and may not begin with a '!' character or be null. */
  Data?: Record<string, unknown>;
  /** Unique PlayFab assigned instance identifier of the item */
  ItemInstanceId: string;
  /** Optional list of Data-keys to remove from UserData. Some SDKs cannot insert null-values into Data due to language constraints. Use this to delete the keys directly. */
  KeysToRemove?: string[];
  /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
  PlayFabId: string;
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

export interface UserSettings {
  /** Boolean for whether this player is eligible for gathering device info. */
  GatherDeviceInfo: boolean;
  /** Boolean for whether this player should report OnFocus play-time tracking. */
  GatherFocusInfo: boolean;
  /** Boolean for whether this player is eligible for ad tracking. */
  NeedsAttribution: boolean;
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

export interface Variable {
  /** Name of the variable. */
  Name: string;
  /** Value of the variable. */
  Value?: string;
}

export interface VirtualCurrencyRechargeTime {
  /** Maximum value to which the regenerating currency will automatically increment. Note that it can exceed this value through use of the AddUserVirtualCurrency API call. However, it will not regenerate automatically until it has fallen below this value. */
  RechargeMax: number;
  /** Server timestamp in UTC indicating the next time the virtual currency will be incremented. */
  RechargeTime: string;
  /** Time remaining (in seconds) before the next recharge increment of the virtual currency. */
  SecondsToRecharge: number;
}

export interface WriteEventResponse {
  /** The unique identifier of the event. The values of this identifier consist of ASCII characters and are not constrained to any particular format. */
  EventId?: string;
}

/** This API is designed to write a multitude of different event types into PlayStream. It supports a flexible JSON schema, which allowsfor arbitrary key-value pairs to describe any character-based event. The created event will be locked to the authenticated title.  */
export interface WriteServerCharacterEventRequest {
  /** Custom event properties. Each property consists of a name (string) and a value (JSON object). */
  Body?: Record<string, unknown>;
  /** Unique PlayFab assigned ID for a specific character owned by a user */
  CharacterId: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** The name of the event, within the namespace scoped to the title. The naming convention is up to the caller, but it commonly follows the subject_verb_object pattern (e.g. player_logged_in). */
  EventName: string;
  /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
  PlayFabId: string;
  /** The time (in UTC) associated with this event. The value defaults to the current time. */
  Timestamp?: string;
}

/** This API is designed to write a multitude of different event types into PlayStream. It supports a flexible JSON schema, which allowsfor arbitrary key-value pairs to describe any player-based event. The created event will be locked to the authenticated title.  */
export interface WriteServerPlayerEventRequest {
  /** Custom data properties associated with the event. Each property consists of a name (string) and a value (JSON object). */
  Body?: Record<string, unknown>;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** The name of the event, within the namespace scoped to the title. The naming convention is up to the caller, but it commonly follows the subject_verb_object pattern (e.g. player_logged_in). */
  EventName: string;
  /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
  PlayFabId: string;
  /** The time (in UTC) associated with this event. The value defaults to the current time. */
  Timestamp?: string;
}

/** This API is designed to write a multitude of different event types into PlayStream. It supports a flexible JSON schema, which allowsfor arbitrary key-value pairs to describe any title-based event. The created event will be locked to the authenticated title.  */
export interface WriteTitleEventRequest {
  /** Custom event properties. Each property consists of a name (string) and a value (JSON object). */
  Body?: Record<string, unknown>;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** The name of the event, within the namespace scoped to the title. The naming convention is up to the caller, but it commonly follows the subject_verb_object pattern (e.g. player_logged_in). */
  EventName: string;
  /** The time (in UTC) associated with this event. The value defaults to the current time. */
  Timestamp?: string;
}

export interface XboxLiveAccountPlayFabIdPair {
  /** Unique PlayFab identifier for a user, or null if no PlayFab account is linked to the Xbox Live identifier. */
  PlayFabId?: string;
  /** Unique Xbox Live identifier for a user. */
  XboxLiveAccountId?: string;
}

/**
 * Increments the character's balance of the specified virtual currency by the stated amount
 * @param {AddCharacterVirtualCurrencyRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<ModifyCharacterVirtualCurrencyResult>}
 */ 
export function AddCharacterVirtualCurrency(
  request: AddCharacterVirtualCurrencyRequest,
  options: RequestOptions
): Promise<ModifyCharacterVirtualCurrencyResult> {
  return dispatchRequest<ModifyCharacterVirtualCurrencyResult>(
    "/Server/AddCharacterVirtualCurrency",
    request,
    options
  );
}

/**
 * Adds the Friend user to the friendlist of the user with PlayFabId. At least one of FriendPlayFabId,FriendUsername,FriendEmail, or FriendTitleDisplayName should be initialized.
 * @param {AddFriendRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<EmptyResponse>}
 */ 
export function AddFriend(
  request: AddFriendRequest,
  options: RequestOptions
): Promise<EmptyResponse> {
  return dispatchRequest<EmptyResponse>(
    "/Server/AddFriend",
    request,
    options
  );
}

/**
 * Adds the specified generic service identifier to the player's PlayFab account. This is designed to allow for a PlayFab ID lookup of any arbitrary service identifier a title wants to add. This identifier should never be used as authentication credentials, as the intent is that it is easily accessible by other players.
 * @param {AddGenericIDRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<EmptyResult>}
 */ 
export function AddGenericID(
  request: AddGenericIDRequest,
  options: RequestOptions
): Promise<EmptyResult> {
  return dispatchRequest<EmptyResult>(
    "/Server/AddGenericID",
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
    "/Server/AddPlayerTag",
    request,
    options
  );
}

/**
 * Adds users to the set of those able to update both the shared data, as well as the set of users in the group. Only users in the group (and the server) can add new members. Shared Groups are designed for sharing data between a very small number of players, please see our guide: https://docs.microsoft.com/gaming/playfab/features/social/groups/using-shared-group-data
 * @param {AddSharedGroupMembersRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<AddSharedGroupMembersResult>}
 */ 
export function AddSharedGroupMembers(
  request: AddSharedGroupMembersRequest,
  options: RequestOptions
): Promise<AddSharedGroupMembersResult> {
  return dispatchRequest<AddSharedGroupMembersResult>(
    "/Server/AddSharedGroupMembers",
    request,
    options
  );
}

/**
 * Increments the user's balance of the specified virtual currency by the stated amount
 * @param {AddUserVirtualCurrencyRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<ModifyUserVirtualCurrencyResult>}
 */ 
export function AddUserVirtualCurrency(
  request: AddUserVirtualCurrencyRequest,
  options: RequestOptions
): Promise<ModifyUserVirtualCurrencyResult> {
  return dispatchRequest<ModifyUserVirtualCurrencyResult>(
    "/Server/AddUserVirtualCurrency",
    request,
    options
  );
}

/**
 * Validated a client's session ticket, and if successful, returns details for that user
 * @param {AuthenticateSessionTicketRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<AuthenticateSessionTicketResult>}
 */ 
export function AuthenticateSessionTicket(
  request: AuthenticateSessionTicketRequest,
  options: RequestOptions
): Promise<AuthenticateSessionTicketResult> {
  return dispatchRequest<AuthenticateSessionTicketResult>(
    "/Server/AuthenticateSessionTicket",
    request,
    options
  );
}

/**
 * Awards the specified users the specified Steam achievements
 * @param {AwardSteamAchievementRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<AwardSteamAchievementResult>}
 */ 
export function AwardSteamAchievement(
  request: AwardSteamAchievementRequest,
  options: RequestOptions
): Promise<AwardSteamAchievementResult> {
  return dispatchRequest<AwardSteamAchievementResult>(
    "/Server/AwardSteamAchievement",
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
    "/Server/BanUsers",
    request,
    options
  );
}

/**
 * Consume uses of a consumable item. When all uses are consumed, it will be removed from the player's inventory.
 * @param {ConsumeItemRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<ConsumeItemResult>}
 */ 
export function ConsumeItem(
  request: ConsumeItemRequest,
  options: RequestOptions
): Promise<ConsumeItemResult> {
  return dispatchRequest<ConsumeItemResult>(
    "/Server/ConsumeItem",
    request,
    options
  );
}

/**
 * Requests the creation of a shared group object, containing key/value pairs which may be updated by all members of the group. When created by a server, the group will initially have no members. Shared Groups are designed for sharing data between a very small number of players, please see our guide: https://docs.microsoft.com/gaming/playfab/features/social/groups/using-shared-group-data
 * @param {CreateSharedGroupRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<CreateSharedGroupResult>}
 */ 
export function CreateSharedGroup(
  request: CreateSharedGroupRequest,
  options: RequestOptions
): Promise<CreateSharedGroupResult> {
  return dispatchRequest<CreateSharedGroupResult>(
    "/Server/CreateSharedGroup",
    request,
    options
  );
}

/**
 * Deletes the specific character ID from the specified user.
 * @param {DeleteCharacterFromUserRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<DeleteCharacterFromUserResult>}
 */ 
export function DeleteCharacterFromUser(
  request: DeleteCharacterFromUserRequest,
  options: RequestOptions
): Promise<DeleteCharacterFromUserResult> {
  return dispatchRequest<DeleteCharacterFromUserResult>(
    "/Server/DeleteCharacterFromUser",
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
    "/Server/DeletePlayer",
    request,
    options
  );
}

/**
 * Deletes push notification template for title
 * @param {DeletePushNotificationTemplateRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<DeletePushNotificationTemplateResult>}
 */ 
export function DeletePushNotificationTemplate(
  request: DeletePushNotificationTemplateRequest,
  options: RequestOptions
): Promise<DeletePushNotificationTemplateResult> {
  return dispatchRequest<DeletePushNotificationTemplateResult>(
    "/Server/DeletePushNotificationTemplate",
    request,
    options
  );
}

/**
 * Deletes a shared group, freeing up the shared group ID to be reused for a new group. Shared Groups are designed for sharing data between a very small number of players, please see our guide: https://docs.microsoft.com/gaming/playfab/features/social/groups/using-shared-group-data
 * @param {DeleteSharedGroupRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<EmptyResponse>}
 */ 
export function DeleteSharedGroup(
  request: DeleteSharedGroupRequest,
  options: RequestOptions
): Promise<EmptyResponse> {
  return dispatchRequest<EmptyResponse>(
    "/Server/DeleteSharedGroup",
    request,
    options
  );
}

/**
 * Inform the matchmaker that a Game Server Instance is removed.
 * @param {DeregisterGameRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<DeregisterGameResponse>}
 */ 
export function DeregisterGame(
  request: DeregisterGameRequest,
  options: RequestOptions
): Promise<DeregisterGameResponse> {
  return dispatchRequest<DeregisterGameResponse>(
    "/Server/DeregisterGame",
    request,
    options
  );
}

/**
 * Returns the result of an evaluation of a Random Result Table - the ItemId from the game Catalog which would have been added to the player inventory, if the Random Result Table were added via a Bundle or a call to UnlockContainer.
 * @param {EvaluateRandomResultTableRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<EvaluateRandomResultTableResult>}
 */ 
export function EvaluateRandomResultTable(
  request: EvaluateRandomResultTableRequest,
  options: RequestOptions
): Promise<EvaluateRandomResultTableResult> {
  return dispatchRequest<EvaluateRandomResultTableResult>(
    "/Server/EvaluateRandomResultTable",
    request,
    options
  );
}

/**
 * Executes a CloudScript function, with the 'currentPlayerId' variable set to the specified PlayFabId parameter value.
 * @param {ExecuteCloudScriptServerRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<ExecuteCloudScriptResult>}
 */ 
export function ExecuteCloudScript(
  request: ExecuteCloudScriptServerRequest,
  options: RequestOptions
): Promise<ExecuteCloudScriptResult> {
  return dispatchRequest<ExecuteCloudScriptResult>(
    "/Server/ExecuteCloudScript",
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
    "/Server/GetAllSegments",
    request,
    options
  );
}

/**
 * Lists all of the characters that belong to a specific user. CharacterIds are not globally unique; characterId must be evaluated with the parent PlayFabId to guarantee uniqueness.
 * @param {ListUsersCharactersRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<ListUsersCharactersResult>}
 */ 
export function GetAllUsersCharacters(
  request: ListUsersCharactersRequest,
  options: RequestOptions
): Promise<ListUsersCharactersResult> {
  return dispatchRequest<ListUsersCharactersResult>(
    "/Server/GetAllUsersCharacters",
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
    "/Server/GetCatalogItems",
    request,
    options
  );
}

/**
 * Retrieves the title-specific custom data for the user which is readable and writable by the client
 * @param {GetCharacterDataRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetCharacterDataResult>}
 */ 
export function GetCharacterData(
  request: GetCharacterDataRequest,
  options: RequestOptions
): Promise<GetCharacterDataResult> {
  return dispatchRequest<GetCharacterDataResult>(
    "/Server/GetCharacterData",
    request,
    options
  );
}

/**
 * Retrieves the title-specific custom data for the user's character which cannot be accessed by the client
 * @param {GetCharacterDataRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetCharacterDataResult>}
 */ 
export function GetCharacterInternalData(
  request: GetCharacterDataRequest,
  options: RequestOptions
): Promise<GetCharacterDataResult> {
  return dispatchRequest<GetCharacterDataResult>(
    "/Server/GetCharacterInternalData",
    request,
    options
  );
}

/**
 * Retrieves the specified character's current inventory of virtual goods
 * @param {GetCharacterInventoryRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetCharacterInventoryResult>}
 */ 
export function GetCharacterInventory(
  request: GetCharacterInventoryRequest,
  options: RequestOptions
): Promise<GetCharacterInventoryResult> {
  return dispatchRequest<GetCharacterInventoryResult>(
    "/Server/GetCharacterInventory",
    request,
    options
  );
}

/**
 * Retrieves a list of ranked characters for the given statistic, starting from the indicated point in the leaderboard
 * @param {GetCharacterLeaderboardRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetCharacterLeaderboardResult>}
 */ 
export function GetCharacterLeaderboard(
  request: GetCharacterLeaderboardRequest,
  options: RequestOptions
): Promise<GetCharacterLeaderboardResult> {
  return dispatchRequest<GetCharacterLeaderboardResult>(
    "/Server/GetCharacterLeaderboard",
    request,
    options
  );
}

/**
 * Retrieves the title-specific custom data for the user's character which can only be read by the client
 * @param {GetCharacterDataRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetCharacterDataResult>}
 */ 
export function GetCharacterReadOnlyData(
  request: GetCharacterDataRequest,
  options: RequestOptions
): Promise<GetCharacterDataResult> {
  return dispatchRequest<GetCharacterDataResult>(
    "/Server/GetCharacterReadOnlyData",
    request,
    options
  );
}

/**
 * Retrieves the details of all title-specific statistics for the specific character
 * @param {GetCharacterStatisticsRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetCharacterStatisticsResult>}
 */ 
export function GetCharacterStatistics(
  request: GetCharacterStatisticsRequest,
  options: RequestOptions
): Promise<GetCharacterStatisticsResult> {
  return dispatchRequest<GetCharacterStatisticsResult>(
    "/Server/GetCharacterStatistics",
    request,
    options
  );
}

/**
 * This API retrieves a pre-signed URL for accessing a content file for the title. A subsequent HTTP GET to the returned URL will attempt to download the content. A HEAD query to the returned URL will attempt to retrieve the metadata of the content. Note that a successful result does not guarantee the existence of this content - if it has not been uploaded, the query to retrieve the data will fail. See this post for more information: https://community.playfab.com/hc/community/posts/205469488-How-to-upload-files-to-PlayFab-s-Content-Service. Also, please be aware that the Content service is specifically PlayFab's CDN offering, for which standard CDN rates apply.
 * @param {GetContentDownloadUrlRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetContentDownloadUrlResult>}
 */ 
export function GetContentDownloadUrl(
  request: GetContentDownloadUrlRequest,
  options: RequestOptions
): Promise<GetContentDownloadUrlResult> {
  return dispatchRequest<GetContentDownloadUrlResult>(
    "/Server/GetContentDownloadUrl",
    request,
    options
  );
}

/**
 * Retrieves a list of ranked friends of the given player for the given statistic, starting from the indicated point in the leaderboard
 * @param {GetFriendLeaderboardRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetLeaderboardResult>}
 */ 
export function GetFriendLeaderboard(
  request: GetFriendLeaderboardRequest,
  options: RequestOptions
): Promise<GetLeaderboardResult> {
  return dispatchRequest<GetLeaderboardResult>(
    "/Server/GetFriendLeaderboard",
    request,
    options
  );
}

/**
 * Retrieves the current friends for the user with PlayFabId, constrained to users who have PlayFab accounts. Friends from linked accounts (Facebook, Steam) are also included. You may optionally exclude some linked services' friends.
 * @param {GetFriendsListRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetFriendsListResult>}
 */ 
export function GetFriendsList(
  request: GetFriendsListRequest,
  options: RequestOptions
): Promise<GetFriendsListResult> {
  return dispatchRequest<GetFriendsListResult>(
    "/Server/GetFriendsList",
    request,
    options
  );
}

/**
 * Retrieves a list of ranked users for the given statistic, starting from the indicated point in the leaderboard
 * @param {GetLeaderboardRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetLeaderboardResult>}
 */ 
export function GetLeaderboard(
  request: GetLeaderboardRequest,
  options: RequestOptions
): Promise<GetLeaderboardResult> {
  return dispatchRequest<GetLeaderboardResult>(
    "/Server/GetLeaderboard",
    request,
    options
  );
}

/**
 * Retrieves a list of ranked characters for the given statistic, centered on the requested user
 * @param {GetLeaderboardAroundCharacterRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetLeaderboardAroundCharacterResult>}
 */ 
export function GetLeaderboardAroundCharacter(
  request: GetLeaderboardAroundCharacterRequest,
  options: RequestOptions
): Promise<GetLeaderboardAroundCharacterResult> {
  return dispatchRequest<GetLeaderboardAroundCharacterResult>(
    "/Server/GetLeaderboardAroundCharacter",
    request,
    options
  );
}

/**
 * Retrieves a list of ranked users for the given statistic, centered on the currently signed-in user
 * @param {GetLeaderboardAroundUserRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetLeaderboardAroundUserResult>}
 */ 
export function GetLeaderboardAroundUser(
  request: GetLeaderboardAroundUserRequest,
  options: RequestOptions
): Promise<GetLeaderboardAroundUserResult> {
  return dispatchRequest<GetLeaderboardAroundUserResult>(
    "/Server/GetLeaderboardAroundUser",
    request,
    options
  );
}

/**
 * Retrieves a list of all of the user's characters for the given statistic.
 * @param {GetLeaderboardForUsersCharactersRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetLeaderboardForUsersCharactersResult>}
 */ 
export function GetLeaderboardForUserCharacters(
  request: GetLeaderboardForUsersCharactersRequest,
  options: RequestOptions
): Promise<GetLeaderboardForUsersCharactersResult> {
  return dispatchRequest<GetLeaderboardForUsersCharactersResult>(
    "/Server/GetLeaderboardForUserCharacters",
    request,
    options
  );
}

/**
 * Returns whatever info is requested in the response for the user. Note that PII (like email address, facebook id) may be returned. All parameters default to false.
 * @param {GetPlayerCombinedInfoRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetPlayerCombinedInfoResult>}
 */ 
export function GetPlayerCombinedInfo(
  request: GetPlayerCombinedInfoRequest,
  options: RequestOptions
): Promise<GetPlayerCombinedInfoResult> {
  return dispatchRequest<GetPlayerCombinedInfoResult>(
    "/Server/GetPlayerCombinedInfo",
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
    "/Server/GetPlayerProfile",
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
    "/Server/GetPlayerSegments",
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
    "/Server/GetPlayersInSegment",
    request,
    options
  );
}

/**
 * Retrieves the current version and values for the indicated statistics, for the local player.
 * @param {GetPlayerStatisticsRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetPlayerStatisticsResult>}
 */ 
export function GetPlayerStatistics(
  request: GetPlayerStatisticsRequest,
  options: RequestOptions
): Promise<GetPlayerStatisticsResult> {
  return dispatchRequest<GetPlayerStatisticsResult>(
    "/Server/GetPlayerStatistics",
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
    "/Server/GetPlayerStatisticVersions",
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
    "/Server/GetPlayerTags",
    request,
    options
  );
}

/**
 * Retrieves the unique PlayFab identifiers for the given set of Facebook identifiers.
 * @param {GetPlayFabIDsFromFacebookIDsRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetPlayFabIDsFromFacebookIDsResult>}
 */ 
export function GetPlayFabIDsFromFacebookIDs(
  request: GetPlayFabIDsFromFacebookIDsRequest,
  options: RequestOptions
): Promise<GetPlayFabIDsFromFacebookIDsResult> {
  return dispatchRequest<GetPlayFabIDsFromFacebookIDsResult>(
    "/Server/GetPlayFabIDsFromFacebookIDs",
    request,
    options
  );
}

/**
 * Retrieves the unique PlayFab identifiers for the given set of Facebook Instant Games identifiers.
 * @param {GetPlayFabIDsFromFacebookInstantGamesIdsRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetPlayFabIDsFromFacebookInstantGamesIdsResult>}
 */ 
export function GetPlayFabIDsFromFacebookInstantGamesIds(
  request: GetPlayFabIDsFromFacebookInstantGamesIdsRequest,
  options: RequestOptions
): Promise<GetPlayFabIDsFromFacebookInstantGamesIdsResult> {
  return dispatchRequest<GetPlayFabIDsFromFacebookInstantGamesIdsResult>(
    "/Server/GetPlayFabIDsFromFacebookInstantGamesIds",
    request,
    options
  );
}

/**
 * Retrieves the unique PlayFab identifiers for the given set of generic service identifiers. A generic identifier is the service name plus the service-specific ID for the player, as specified by the title when the generic identifier was added to the player account.
 * @param {GetPlayFabIDsFromGenericIDsRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetPlayFabIDsFromGenericIDsResult>}
 */ 
export function GetPlayFabIDsFromGenericIDs(
  request: GetPlayFabIDsFromGenericIDsRequest,
  options: RequestOptions
): Promise<GetPlayFabIDsFromGenericIDsResult> {
  return dispatchRequest<GetPlayFabIDsFromGenericIDsResult>(
    "/Server/GetPlayFabIDsFromGenericIDs",
    request,
    options
  );
}

/**
 * Retrieves the unique PlayFab identifiers for the given set of Nintendo Switch Device identifiers.
 * @param {GetPlayFabIDsFromNintendoSwitchDeviceIdsRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetPlayFabIDsFromNintendoSwitchDeviceIdsResult>}
 */ 
export function GetPlayFabIDsFromNintendoSwitchDeviceIds(
  request: GetPlayFabIDsFromNintendoSwitchDeviceIdsRequest,
  options: RequestOptions
): Promise<GetPlayFabIDsFromNintendoSwitchDeviceIdsResult> {
  return dispatchRequest<GetPlayFabIDsFromNintendoSwitchDeviceIdsResult>(
    "/Server/GetPlayFabIDsFromNintendoSwitchDeviceIds",
    request,
    options
  );
}

/**
 * Retrieves the unique PlayFab identifiers for the given set of PlayStation Network identifiers.
 * @param {GetPlayFabIDsFromPSNAccountIDsRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetPlayFabIDsFromPSNAccountIDsResult>}
 */ 
export function GetPlayFabIDsFromPSNAccountIDs(
  request: GetPlayFabIDsFromPSNAccountIDsRequest,
  options: RequestOptions
): Promise<GetPlayFabIDsFromPSNAccountIDsResult> {
  return dispatchRequest<GetPlayFabIDsFromPSNAccountIDsResult>(
    "/Server/GetPlayFabIDsFromPSNAccountIDs",
    request,
    options
  );
}

/**
 * Retrieves the unique PlayFab identifiers for the given set of Steam identifiers. The Steam identifiers are the profile IDs for the user accounts, available as SteamId in the Steamworks Community API calls.
 * @param {GetPlayFabIDsFromSteamIDsRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetPlayFabIDsFromSteamIDsResult>}
 */ 
export function GetPlayFabIDsFromSteamIDs(
  request: GetPlayFabIDsFromSteamIDsRequest,
  options: RequestOptions
): Promise<GetPlayFabIDsFromSteamIDsResult> {
  return dispatchRequest<GetPlayFabIDsFromSteamIDsResult>(
    "/Server/GetPlayFabIDsFromSteamIDs",
    request,
    options
  );
}

/**
 * Retrieves the unique PlayFab identifiers for the given set of XboxLive identifiers.
 * @param {GetPlayFabIDsFromXboxLiveIDsRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetPlayFabIDsFromXboxLiveIDsResult>}
 */ 
export function GetPlayFabIDsFromXboxLiveIDs(
  request: GetPlayFabIDsFromXboxLiveIDsRequest,
  options: RequestOptions
): Promise<GetPlayFabIDsFromXboxLiveIDsResult> {
  return dispatchRequest<GetPlayFabIDsFromXboxLiveIDsResult>(
    "/Server/GetPlayFabIDsFromXboxLiveIDs",
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
    "/Server/GetPublisherData",
    request,
    options
  );
}

/**
 * Retrieves the configuration information for the specified random results tables for the title, including all ItemId values and weights
 * @param {GetRandomResultTablesRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetRandomResultTablesResult>}
 */ 
export function GetRandomResultTables(
  request: GetRandomResultTablesRequest,
  options: RequestOptions
): Promise<GetRandomResultTablesResult> {
  return dispatchRequest<GetRandomResultTablesResult>(
    "/Server/GetRandomResultTables",
    request,
    options
  );
}

/**
 * Retrieves the associated PlayFab account identifiers for the given set of server custom identifiers.
 * @param {GetServerCustomIDsFromPlayFabIDsRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetServerCustomIDsFromPlayFabIDsResult>}
 */ 
export function GetServerCustomIDsFromPlayFabIDs(
  request: GetServerCustomIDsFromPlayFabIDsRequest,
  options: RequestOptions
): Promise<GetServerCustomIDsFromPlayFabIDsResult> {
  return dispatchRequest<GetServerCustomIDsFromPlayFabIDsResult>(
    "/Server/GetServerCustomIDsFromPlayFabIDs",
    request,
    options
  );
}

/**
 * Retrieves data stored in a shared group object, as well as the list of members in the group. The server can access all public and private group data. Shared Groups are designed for sharing data between a very small number of players, please see our guide: https://docs.microsoft.com/gaming/playfab/features/social/groups/using-shared-group-data
 * @param {GetSharedGroupDataRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetSharedGroupDataResult>}
 */ 
export function GetSharedGroupData(
  request: GetSharedGroupDataRequest,
  options: RequestOptions
): Promise<GetSharedGroupDataResult> {
  return dispatchRequest<GetSharedGroupDataResult>(
    "/Server/GetSharedGroupData",
    request,
    options
  );
}

/**
 * Retrieves the set of items defined for the specified store, including all prices defined, for the specified player
 * @param {GetStoreItemsServerRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetStoreItemsResult>}
 */ 
export function GetStoreItems(
  request: GetStoreItemsServerRequest,
  options: RequestOptions
): Promise<GetStoreItemsResult> {
  return dispatchRequest<GetStoreItemsResult>(
    "/Server/GetStoreItems",
    request,
    options
  );
}

/**
 * Retrieves the current server time
 * @param {GetTimeRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetTimeResult>}
 */ 
export function GetTime(
  request: GetTimeRequest,
  options: RequestOptions
): Promise<GetTimeResult> {
  return dispatchRequest<GetTimeResult>(
    "/Server/GetTime",
    request,
    options
  );
}

/**
 * Retrieves the key-value store of custom title settings
 * @param {GetTitleDataRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetTitleDataResult>}
 */ 
export function GetTitleData(
  request: GetTitleDataRequest,
  options: RequestOptions
): Promise<GetTitleDataResult> {
  return dispatchRequest<GetTitleDataResult>(
    "/Server/GetTitleData",
    request,
    options
  );
}

/**
 * Retrieves the key-value store of custom internal title settings
 * @param {GetTitleDataRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetTitleDataResult>}
 */ 
export function GetTitleInternalData(
  request: GetTitleDataRequest,
  options: RequestOptions
): Promise<GetTitleDataResult> {
  return dispatchRequest<GetTitleDataResult>(
    "/Server/GetTitleInternalData",
    request,
    options
  );
}

/**
 * Retrieves the title news feed, as configured in the developer portal
 * @param {GetTitleNewsRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetTitleNewsResult>}
 */ 
export function GetTitleNews(
  request: GetTitleNewsRequest,
  options: RequestOptions
): Promise<GetTitleNewsResult> {
  return dispatchRequest<GetTitleNewsResult>(
    "/Server/GetTitleNews",
    request,
    options
  );
}

/**
 * Retrieves the relevant details for a specified user
 * @param {GetUserAccountInfoRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetUserAccountInfoResult>}
 */ 
export function GetUserAccountInfo(
  request: GetUserAccountInfoRequest,
  options: RequestOptions
): Promise<GetUserAccountInfoResult> {
  return dispatchRequest<GetUserAccountInfoResult>(
    "/Server/GetUserAccountInfo",
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
    "/Server/GetUserBans",
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
    "/Server/GetUserData",
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
    "/Server/GetUserInternalData",
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
    "/Server/GetUserInventory",
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
    "/Server/GetUserPublisherData",
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
    "/Server/GetUserPublisherInternalData",
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
    "/Server/GetUserPublisherReadOnlyData",
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
    "/Server/GetUserReadOnlyData",
    request,
    options
  );
}

/**
 * Grants the specified character type to the user. CharacterIds are not globally unique; characterId must be evaluated with the parent PlayFabId to guarantee uniqueness.
 * @param {GrantCharacterToUserRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GrantCharacterToUserResult>}
 */ 
export function GrantCharacterToUser(
  request: GrantCharacterToUserRequest,
  options: RequestOptions
): Promise<GrantCharacterToUserResult> {
  return dispatchRequest<GrantCharacterToUserResult>(
    "/Server/GrantCharacterToUser",
    request,
    options
  );
}

/**
 * Adds the specified items to the specified character's inventory
 * @param {GrantItemsToCharacterRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GrantItemsToCharacterResult>}
 */ 
export function GrantItemsToCharacter(
  request: GrantItemsToCharacterRequest,
  options: RequestOptions
): Promise<GrantItemsToCharacterResult> {
  return dispatchRequest<GrantItemsToCharacterResult>(
    "/Server/GrantItemsToCharacter",
    request,
    options
  );
}

/**
 * Adds the specified items to the specified user's inventory
 * @param {GrantItemsToUserRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GrantItemsToUserResult>}
 */ 
export function GrantItemsToUser(
  request: GrantItemsToUserRequest,
  options: RequestOptions
): Promise<GrantItemsToUserResult> {
  return dispatchRequest<GrantItemsToUserResult>(
    "/Server/GrantItemsToUser",
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
    "/Server/GrantItemsToUsers",
    request,
    options
  );
}

/**
 * Links the PlayStation Network account associated with the provided access code to the user's PlayFab account
 * @param {LinkPSNAccountRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<LinkPSNAccountResult>}
 */ 
export function LinkPSNAccount(
  request: LinkPSNAccountRequest,
  options: RequestOptions
): Promise<LinkPSNAccountResult> {
  return dispatchRequest<LinkPSNAccountResult>(
    "/Server/LinkPSNAccount",
    request,
    options
  );
}

/**
 * Links the custom server identifier, generated by the title, to the user's PlayFab account.
 * @param {LinkServerCustomIdRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<LinkServerCustomIdResult>}
 */ 
export function LinkServerCustomId(
  request: LinkServerCustomIdRequest,
  options: RequestOptions
): Promise<LinkServerCustomIdResult> {
  return dispatchRequest<LinkServerCustomIdResult>(
    "/Server/LinkServerCustomId",
    request,
    options
  );
}

/**
 * Links the Xbox Live account associated with the provided access code to the user's PlayFab account
 * @param {LinkXboxAccountRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<LinkXboxAccountResult>}
 */ 
export function LinkXboxAccount(
  request: LinkXboxAccountRequest,
  options: RequestOptions
): Promise<LinkXboxAccountResult> {
  return dispatchRequest<LinkXboxAccountResult>(
    "/Server/LinkXboxAccount",
    request,
    options
  );
}

/**
 * Securely login a game client from an external server backend using a custom identifier for that player. Server Custom ID and Client Custom ID are mutually exclusive and cannot be used to retrieve the same player account.
 * @param {LoginWithServerCustomIdRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<ServerLoginResult>}
 */ 
export function LoginWithServerCustomId(
  request: LoginWithServerCustomIdRequest,
  options: RequestOptions
): Promise<ServerLoginResult> {
  return dispatchRequest<ServerLoginResult>(
    "/Server/LoginWithServerCustomId",
    request,
    options
  );
}

/**
 * Signs the user in using an Steam ID, returning a session identifier that can subsequently be used for API calls which require an authenticated user
 * @param {LoginWithSteamIdRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<ServerLoginResult>}
 */ 
export function LoginWithSteamId(
  request: LoginWithSteamIdRequest,
  options: RequestOptions
): Promise<ServerLoginResult> {
  return dispatchRequest<ServerLoginResult>(
    "/Server/LoginWithSteamId",
    request,
    options
  );
}

/**
 * Signs the user in using a Xbox Live Token from an external server backend, returning a session identifier that can subsequently be used for API calls which require an authenticated user
 * @param {LoginWithXboxRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<ServerLoginResult>}
 */ 
export function LoginWithXbox(
  request: LoginWithXboxRequest,
  options: RequestOptions
): Promise<ServerLoginResult> {
  return dispatchRequest<ServerLoginResult>(
    "/Server/LoginWithXbox",
    request,
    options
  );
}

/**
 * Signs the user in using an Xbox ID and Sandbox ID, returning a session identifier that can subsequently be used for API calls which require an authenticated user
 * @param {LoginWithXboxIdRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<ServerLoginResult>}
 */ 
export function LoginWithXboxId(
  request: LoginWithXboxIdRequest,
  options: RequestOptions
): Promise<ServerLoginResult> {
  return dispatchRequest<ServerLoginResult>(
    "/Server/LoginWithXboxId",
    request,
    options
  );
}

/**
 * Modifies the number of remaining uses of a player's inventory item
 * @param {ModifyItemUsesRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<ModifyItemUsesResult>}
 */ 
export function ModifyItemUses(
  request: ModifyItemUsesRequest,
  options: RequestOptions
): Promise<ModifyItemUsesResult> {
  return dispatchRequest<ModifyItemUsesResult>(
    "/Server/ModifyItemUses",
    request,
    options
  );
}

/**
 * Moves an item from a character's inventory into another of the users's character's inventory.
 * @param {MoveItemToCharacterFromCharacterRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<MoveItemToCharacterFromCharacterResult>}
 */ 
export function MoveItemToCharacterFromCharacter(
  request: MoveItemToCharacterFromCharacterRequest,
  options: RequestOptions
): Promise<MoveItemToCharacterFromCharacterResult> {
  return dispatchRequest<MoveItemToCharacterFromCharacterResult>(
    "/Server/MoveItemToCharacterFromCharacter",
    request,
    options
  );
}

/**
 * Moves an item from a user's inventory into their character's inventory.
 * @param {MoveItemToCharacterFromUserRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<MoveItemToCharacterFromUserResult>}
 */ 
export function MoveItemToCharacterFromUser(
  request: MoveItemToCharacterFromUserRequest,
  options: RequestOptions
): Promise<MoveItemToCharacterFromUserResult> {
  return dispatchRequest<MoveItemToCharacterFromUserResult>(
    "/Server/MoveItemToCharacterFromUser",
    request,
    options
  );
}

/**
 * Moves an item from a character's inventory into the owning user's inventory.
 * @param {MoveItemToUserFromCharacterRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<MoveItemToUserFromCharacterResult>}
 */ 
export function MoveItemToUserFromCharacter(
  request: MoveItemToUserFromCharacterRequest,
  options: RequestOptions
): Promise<MoveItemToUserFromCharacterResult> {
  return dispatchRequest<MoveItemToUserFromCharacterResult>(
    "/Server/MoveItemToUserFromCharacter",
    request,
    options
  );
}

/**
 * Informs the PlayFab match-making service that the user specified has left the Game Server Instance
 * @param {NotifyMatchmakerPlayerLeftRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<NotifyMatchmakerPlayerLeftResult>}
 */ 
export function NotifyMatchmakerPlayerLeft(
  request: NotifyMatchmakerPlayerLeftRequest,
  options: RequestOptions
): Promise<NotifyMatchmakerPlayerLeftResult> {
  return dispatchRequest<NotifyMatchmakerPlayerLeftResult>(
    "/Server/NotifyMatchmakerPlayerLeft",
    request,
    options
  );
}

/**
 * Adds the virtual goods associated with the coupon to the user's inventory. Coupons can be generated via the Economy->Catalogs tab in the PlayFab Game Manager.
 * @param {RedeemCouponRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<RedeemCouponResult>}
 */ 
export function RedeemCoupon(
  request: RedeemCouponRequest,
  options: RequestOptions
): Promise<RedeemCouponResult> {
  return dispatchRequest<RedeemCouponResult>(
    "/Server/RedeemCoupon",
    request,
    options
  );
}

/**
 * Validates a Game Server session ticket and returns details about the user
 * @param {RedeemMatchmakerTicketRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<RedeemMatchmakerTicketResult>}
 */ 
export function RedeemMatchmakerTicket(
  request: RedeemMatchmakerTicketRequest,
  options: RequestOptions
): Promise<RedeemMatchmakerTicketResult> {
  return dispatchRequest<RedeemMatchmakerTicketResult>(
    "/Server/RedeemMatchmakerTicket",
    request,
    options
  );
}

/**
 * Set the state of the indicated Game Server Instance. Also update the heartbeat for the instance.
 * @param {RefreshGameServerInstanceHeartbeatRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<RefreshGameServerInstanceHeartbeatResult>}
 */ 
export function RefreshGameServerInstanceHeartbeat(
  request: RefreshGameServerInstanceHeartbeatRequest,
  options: RequestOptions
): Promise<RefreshGameServerInstanceHeartbeatResult> {
  return dispatchRequest<RefreshGameServerInstanceHeartbeatResult>(
    "/Server/RefreshGameServerInstanceHeartbeat",
    request,
    options
  );
}

/**
 * Inform the matchmaker that a new Game Server Instance is added.
 * @param {RegisterGameRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<RegisterGameResponse>}
 */ 
export function RegisterGame(
  request: RegisterGameRequest,
  options: RequestOptions
): Promise<RegisterGameResponse> {
  return dispatchRequest<RegisterGameResponse>(
    "/Server/RegisterGame",
    request,
    options
  );
}

/**
 * Removes the specified friend from the the user's friend list
 * @param {RemoveFriendRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<EmptyResponse>}
 */ 
export function RemoveFriend(
  request: RemoveFriendRequest,
  options: RequestOptions
): Promise<EmptyResponse> {
  return dispatchRequest<EmptyResponse>(
    "/Server/RemoveFriend",
    request,
    options
  );
}

/**
 * Removes the specified generic service identifier from the player's PlayFab account.
 * @param {RemoveGenericIDRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<EmptyResult>}
 */ 
export function RemoveGenericID(
  request: RemoveGenericIDRequest,
  options: RequestOptions
): Promise<EmptyResult> {
  return dispatchRequest<EmptyResult>(
    "/Server/RemoveGenericID",
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
    "/Server/RemovePlayerTag",
    request,
    options
  );
}

/**
 * Removes users from the set of those able to update the shared data and the set of users in the group. Only users in the group can remove members. If as a result of the call, zero users remain with access, the group and its associated data will be deleted. Shared Groups are designed for sharing data between a very small number of players, please see our guide: https://docs.microsoft.com/gaming/playfab/features/social/groups/using-shared-group-data
 * @param {RemoveSharedGroupMembersRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<RemoveSharedGroupMembersResult>}
 */ 
export function RemoveSharedGroupMembers(
  request: RemoveSharedGroupMembersRequest,
  options: RequestOptions
): Promise<RemoveSharedGroupMembersResult> {
  return dispatchRequest<RemoveSharedGroupMembersResult>(
    "/Server/RemoveSharedGroupMembers",
    request,
    options
  );
}

/**
 * Submit a report about a player (due to bad bahavior, etc.) on behalf of another player, so that customer service representatives for the title can take action concerning potentially toxic players.
 * @param {ReportPlayerServerRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<ReportPlayerServerResult>}
 */ 
export function ReportPlayer(
  request: ReportPlayerServerRequest,
  options: RequestOptions
): Promise<ReportPlayerServerResult> {
  return dispatchRequest<ReportPlayerServerResult>(
    "/Server/ReportPlayer",
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
    "/Server/RevokeAllBansForUser",
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
    "/Server/RevokeBans",
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
    "/Server/RevokeInventoryItem",
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
    "/Server/RevokeInventoryItems",
    request,
    options
  );
}

/**
 * Saves push notification template for title
 * @param {SavePushNotificationTemplateRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<SavePushNotificationTemplateResult>}
 */ 
export function SavePushNotificationTemplate(
  request: SavePushNotificationTemplateRequest,
  options: RequestOptions
): Promise<SavePushNotificationTemplateResult> {
  return dispatchRequest<SavePushNotificationTemplateResult>(
    "/Server/SavePushNotificationTemplate",
    request,
    options
  );
}

/**
 * Forces an email to be sent to the registered contact email address for the user's account based on an account recovery email template
 * @param {SendCustomAccountRecoveryEmailRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<SendCustomAccountRecoveryEmailResult>}
 */ 
export function SendCustomAccountRecoveryEmail(
  request: SendCustomAccountRecoveryEmailRequest,
  options: RequestOptions
): Promise<SendCustomAccountRecoveryEmailResult> {
  return dispatchRequest<SendCustomAccountRecoveryEmailResult>(
    "/Server/SendCustomAccountRecoveryEmail",
    request,
    options
  );
}

/**
 * Sends an email based on an email template to a player's contact email 
 * @param {SendEmailFromTemplateRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<SendEmailFromTemplateResult>}
 */ 
export function SendEmailFromTemplate(
  request: SendEmailFromTemplateRequest,
  options: RequestOptions
): Promise<SendEmailFromTemplateResult> {
  return dispatchRequest<SendEmailFromTemplateResult>(
    "/Server/SendEmailFromTemplate",
    request,
    options
  );
}

/**
 * Sends an iOS/Android Push Notification to a specific user, if that user's device has been configured for Push Notifications in PlayFab. If a user has linked both Android and iOS devices, both will be notified.
 * @param {SendPushNotificationRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<SendPushNotificationResult>}
 */ 
export function SendPushNotification(
  request: SendPushNotificationRequest,
  options: RequestOptions
): Promise<SendPushNotificationResult> {
  return dispatchRequest<SendPushNotificationResult>(
    "/Server/SendPushNotification",
    request,
    options
  );
}

/**
 * Sends an iOS/Android Push Notification template to a specific user, if that user's device has been configured for Push Notifications in PlayFab. If a user has linked both Android and iOS devices, both will be notified.
 * @param {SendPushNotificationFromTemplateRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<SendPushNotificationResult>}
 */ 
export function SendPushNotificationFromTemplate(
  request: SendPushNotificationFromTemplateRequest,
  options: RequestOptions
): Promise<SendPushNotificationResult> {
  return dispatchRequest<SendPushNotificationResult>(
    "/Server/SendPushNotificationFromTemplate",
    request,
    options
  );
}

/**
 * Updates the tag list for a specified user in the friend list of another user
 * @param {SetFriendTagsRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<EmptyResponse>}
 */ 
export function SetFriendTags(
  request: SetFriendTagsRequest,
  options: RequestOptions
): Promise<EmptyResponse> {
  return dispatchRequest<EmptyResponse>(
    "/Server/SetFriendTags",
    request,
    options
  );
}

/**
 * Sets the custom data of the indicated Game Server Instance
 * @param {SetGameServerInstanceDataRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<SetGameServerInstanceDataResult>}
 */ 
export function SetGameServerInstanceData(
  request: SetGameServerInstanceDataRequest,
  options: RequestOptions
): Promise<SetGameServerInstanceDataResult> {
  return dispatchRequest<SetGameServerInstanceDataResult>(
    "/Server/SetGameServerInstanceData",
    request,
    options
  );
}

/**
 * Set the state of the indicated Game Server Instance.
 * @param {SetGameServerInstanceStateRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<SetGameServerInstanceStateResult>}
 */ 
export function SetGameServerInstanceState(
  request: SetGameServerInstanceStateRequest,
  options: RequestOptions
): Promise<SetGameServerInstanceStateResult> {
  return dispatchRequest<SetGameServerInstanceStateResult>(
    "/Server/SetGameServerInstanceState",
    request,
    options
  );
}

/**
 * Set custom tags for the specified Game Server Instance
 * @param {SetGameServerInstanceTagsRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<SetGameServerInstanceTagsResult>}
 */ 
export function SetGameServerInstanceTags(
  request: SetGameServerInstanceTagsRequest,
  options: RequestOptions
): Promise<SetGameServerInstanceTagsResult> {
  return dispatchRequest<SetGameServerInstanceTagsResult>(
    "/Server/SetGameServerInstanceTags",
    request,
    options
  );
}

/**
 * Sets the player's secret if it is not already set. Player secrets are used to sign API requests. To reset a player's secret use the Admin or Server API method SetPlayerSecret.
 * @param {SetPlayerSecretRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<SetPlayerSecretResult>}
 */ 
export function SetPlayerSecret(
  request: SetPlayerSecretRequest,
  options: RequestOptions
): Promise<SetPlayerSecretResult> {
  return dispatchRequest<SetPlayerSecretResult>(
    "/Server/SetPlayerSecret",
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
    "/Server/SetPublisherData",
    request,
    options
  );
}

/**
 * Updates the key-value store of custom title settings
 * @param {SetTitleDataRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<SetTitleDataResult>}
 */ 
export function SetTitleData(
  request: SetTitleDataRequest,
  options: RequestOptions
): Promise<SetTitleDataResult> {
  return dispatchRequest<SetTitleDataResult>(
    "/Server/SetTitleData",
    request,
    options
  );
}

/**
 * Updates the key-value store of custom title settings
 * @param {SetTitleDataRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<SetTitleDataResult>}
 */ 
export function SetTitleInternalData(
  request: SetTitleDataRequest,
  options: RequestOptions
): Promise<SetTitleDataResult> {
  return dispatchRequest<SetTitleDataResult>(
    "/Server/SetTitleInternalData",
    request,
    options
  );
}

/**
 * Decrements the character's balance of the specified virtual currency by the stated amount. It is possible to make a VC balance negative with this API.
 * @param {SubtractCharacterVirtualCurrencyRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<ModifyCharacterVirtualCurrencyResult>}
 */ 
export function SubtractCharacterVirtualCurrency(
  request: SubtractCharacterVirtualCurrencyRequest,
  options: RequestOptions
): Promise<ModifyCharacterVirtualCurrencyResult> {
  return dispatchRequest<ModifyCharacterVirtualCurrencyResult>(
    "/Server/SubtractCharacterVirtualCurrency",
    request,
    options
  );
}

/**
 * Decrements the user's balance of the specified virtual currency by the stated amount. It is possible to make a VC balance negative with this API.
 * @param {SubtractUserVirtualCurrencyRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<ModifyUserVirtualCurrencyResult>}
 */ 
export function SubtractUserVirtualCurrency(
  request: SubtractUserVirtualCurrencyRequest,
  options: RequestOptions
): Promise<ModifyUserVirtualCurrencyResult> {
  return dispatchRequest<ModifyUserVirtualCurrencyResult>(
    "/Server/SubtractUserVirtualCurrency",
    request,
    options
  );
}

/**
 * Unlinks the related PSN account from the user's PlayFab account
 * @param {UnlinkPSNAccountRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<UnlinkPSNAccountResult>}
 */ 
export function UnlinkPSNAccount(
  request: UnlinkPSNAccountRequest,
  options: RequestOptions
): Promise<UnlinkPSNAccountResult> {
  return dispatchRequest<UnlinkPSNAccountResult>(
    "/Server/UnlinkPSNAccount",
    request,
    options
  );
}

/**
 * Unlinks the custom server identifier from the user's PlayFab account.
 * @param {UnlinkServerCustomIdRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<UnlinkServerCustomIdResult>}
 */ 
export function UnlinkServerCustomId(
  request: UnlinkServerCustomIdRequest,
  options: RequestOptions
): Promise<UnlinkServerCustomIdResult> {
  return dispatchRequest<UnlinkServerCustomIdResult>(
    "/Server/UnlinkServerCustomId",
    request,
    options
  );
}

/**
 * Unlinks the related Xbox Live account from the user's PlayFab account
 * @param {UnlinkXboxAccountRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<UnlinkXboxAccountResult>}
 */ 
export function UnlinkXboxAccount(
  request: UnlinkXboxAccountRequest,
  options: RequestOptions
): Promise<UnlinkXboxAccountResult> {
  return dispatchRequest<UnlinkXboxAccountResult>(
    "/Server/UnlinkXboxAccount",
    request,
    options
  );
}

/**
 * Opens a specific container (ContainerItemInstanceId), with a specific key (KeyItemInstanceId, when required), and returns the contents of the opened container. If the container (and key when relevant) are consumable (RemainingUses > 0), their RemainingUses will be decremented, consistent with the operation of ConsumeItem.
 * @param {UnlockContainerInstanceRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<UnlockContainerItemResult>}
 */ 
export function UnlockContainerInstance(
  request: UnlockContainerInstanceRequest,
  options: RequestOptions
): Promise<UnlockContainerItemResult> {
  return dispatchRequest<UnlockContainerItemResult>(
    "/Server/UnlockContainerInstance",
    request,
    options
  );
}

/**
 * Searches Player or Character inventory for any ItemInstance matching the given CatalogItemId, if necessary unlocks it using any appropriate key, and returns the contents of the opened container. If the container (and key when relevant) are consumable (RemainingUses > 0), their RemainingUses will be decremented, consistent with the operation of ConsumeItem.
 * @param {UnlockContainerItemRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<UnlockContainerItemResult>}
 */ 
export function UnlockContainerItem(
  request: UnlockContainerItemRequest,
  options: RequestOptions
): Promise<UnlockContainerItemResult> {
  return dispatchRequest<UnlockContainerItemResult>(
    "/Server/UnlockContainerItem",
    request,
    options
  );
}

/**
 * Update the avatar URL of the specified player
 * @param {UpdateAvatarUrlRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<EmptyResponse>}
 */ 
export function UpdateAvatarUrl(
  request: UpdateAvatarUrlRequest,
  options: RequestOptions
): Promise<EmptyResponse> {
  return dispatchRequest<EmptyResponse>(
    "/Server/UpdateAvatarUrl",
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
    "/Server/UpdateBans",
    request,
    options
  );
}

/**
 * Updates the title-specific custom data for the user's character which is readable and writable by the client
 * @param {UpdateCharacterDataRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<UpdateCharacterDataResult>}
 */ 
export function UpdateCharacterData(
  request: UpdateCharacterDataRequest,
  options: RequestOptions
): Promise<UpdateCharacterDataResult> {
  return dispatchRequest<UpdateCharacterDataResult>(
    "/Server/UpdateCharacterData",
    request,
    options
  );
}

/**
 * Updates the title-specific custom data for the user's character which cannot be accessed by the client
 * @param {UpdateCharacterDataRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<UpdateCharacterDataResult>}
 */ 
export function UpdateCharacterInternalData(
  request: UpdateCharacterDataRequest,
  options: RequestOptions
): Promise<UpdateCharacterDataResult> {
  return dispatchRequest<UpdateCharacterDataResult>(
    "/Server/UpdateCharacterInternalData",
    request,
    options
  );
}

/**
 * Updates the title-specific custom data for the user's character which can only be read by the client
 * @param {UpdateCharacterDataRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<UpdateCharacterDataResult>}
 */ 
export function UpdateCharacterReadOnlyData(
  request: UpdateCharacterDataRequest,
  options: RequestOptions
): Promise<UpdateCharacterDataResult> {
  return dispatchRequest<UpdateCharacterDataResult>(
    "/Server/UpdateCharacterReadOnlyData",
    request,
    options
  );
}

/**
 * Updates the values of the specified title-specific statistics for the specific character
 * @param {UpdateCharacterStatisticsRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<UpdateCharacterStatisticsResult>}
 */ 
export function UpdateCharacterStatistics(
  request: UpdateCharacterStatisticsRequest,
  options: RequestOptions
): Promise<UpdateCharacterStatisticsResult> {
  return dispatchRequest<UpdateCharacterStatisticsResult>(
    "/Server/UpdateCharacterStatistics",
    request,
    options
  );
}

/**
 * Updates the values of the specified title-specific statistics for the user
 * @param {UpdatePlayerStatisticsRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<UpdatePlayerStatisticsResult>}
 */ 
export function UpdatePlayerStatistics(
  request: UpdatePlayerStatisticsRequest,
  options: RequestOptions
): Promise<UpdatePlayerStatisticsResult> {
  return dispatchRequest<UpdatePlayerStatisticsResult>(
    "/Server/UpdatePlayerStatistics",
    request,
    options
  );
}

/**
 * Adds, updates, and removes data keys for a shared group object. If the permission is set to Public, all fields updated or added in this call will be readable by users not in the group. By default, data permissions are set to Private. Regardless of the permission setting, only members of the group (and the server) can update the data. Shared Groups are designed for sharing data between a very small number of players, please see our guide: https://docs.microsoft.com/gaming/playfab/features/social/groups/using-shared-group-data
 * @param {UpdateSharedGroupDataRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<UpdateSharedGroupDataResult>}
 */ 
export function UpdateSharedGroupData(
  request: UpdateSharedGroupDataRequest,
  options: RequestOptions
): Promise<UpdateSharedGroupDataResult> {
  return dispatchRequest<UpdateSharedGroupDataResult>(
    "/Server/UpdateSharedGroupData",
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
    "/Server/UpdateUserData",
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
    "/Server/UpdateUserInternalData",
    request,
    options
  );
}

/**
 * Updates the key-value pair data tagged to the specified item, which is read-only from the client.
 * @param {UpdateUserInventoryItemDataRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<EmptyResponse>}
 */ 
export function UpdateUserInventoryItemCustomData(
  request: UpdateUserInventoryItemDataRequest,
  options: RequestOptions
): Promise<EmptyResponse> {
  return dispatchRequest<EmptyResponse>(
    "/Server/UpdateUserInventoryItemCustomData",
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
    "/Server/UpdateUserPublisherData",
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
    "/Server/UpdateUserPublisherInternalData",
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
    "/Server/UpdateUserPublisherReadOnlyData",
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
    "/Server/UpdateUserReadOnlyData",
    request,
    options
  );
}

/**
 * Writes a character-based event into PlayStream.
 * @param {WriteServerCharacterEventRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<WriteEventResponse>}
 */ 
export function WriteCharacterEvent(
  request: WriteServerCharacterEventRequest,
  options: RequestOptions
): Promise<WriteEventResponse> {
  return dispatchRequest<WriteEventResponse>(
    "/Server/WriteCharacterEvent",
    request,
    options
  );
}

/**
 * Writes a player-based event into PlayStream.
 * @param {WriteServerPlayerEventRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<WriteEventResponse>}
 */ 
export function WritePlayerEvent(
  request: WriteServerPlayerEventRequest,
  options: RequestOptions
): Promise<WriteEventResponse> {
  return dispatchRequest<WriteEventResponse>(
    "/Server/WritePlayerEvent",
    request,
    options
  );
}

/**
 * Writes a title-based event into PlayStream.
 * @param {WriteTitleEventRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<WriteEventResponse>}
 */ 
export function WriteTitleEvent(
  request: WriteTitleEventRequest,
  options: RequestOptions
): Promise<WriteEventResponse> {
  return dispatchRequest<WriteEventResponse>(
    "/Server/WriteTitleEvent",
    request,
    options
  );
}

