// deno-lint-ignore-file
import { dispatchRequest, RequestOptions } from "./support/runtime.ts";

export interface AcceptTradeRequest {
  /** Items from the accepting player's inventory in exchange for the offered items in the trade. In the case of a gift, this will be null. */
  AcceptedInventoryInstanceIds?: string[];
  /** Player who opened the trade. */
  OfferingPlayerId: string;
  /** Trade identifier. */
  TradeId: string;
}

export interface AcceptTradeResponse {
  /** Details about trade which was just accepted. */
  Trade?: TradeInfo;
}

export enum AdActivity {
  Opened = "Opened",
  Closed = "Closed",
  Start = "Start",
  End = "End",
}

export interface AdCampaignAttributionModel {
  /** UTC time stamp of attribution */
  AttributedAt: string;
  /** Attribution campaign identifier */
  CampaignId?: string;
  /** Attribution network name */
  Platform?: string;
}

export interface AddFriendRequest {
  /** Email address of the user to attempt to add to the local user's friend list. */
  FriendEmail?: string;
  /** PlayFab identifier of the user to attempt to add to the local user's friend list. */
  FriendPlayFabId?: string;
  /** Title-specific display name of the user to attempt to add to the local user's friend list. */
  FriendTitleDisplayName?: string;
  /** PlayFab username of the user to attempt to add to the local user's friend list. */
  FriendUsername?: string;
}

export interface AddFriendResult {
  /** True if the friend request was processed successfully. */
  Created: boolean;
}

export interface AddGenericIDRequest {
  /** Generic service identifier to add to the player account. */
  GenericId: GenericServiceId;
}

export interface AddGenericIDResult {}

/** This API adds a contact email to the player's profile. If the player's profile already contains a contact email, it will update the contact email to the email address specified. */
export interface AddOrUpdateContactEmailRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** The new contact email to associate with the player. */
  EmailAddress: string;
}

export interface AddOrUpdateContactEmailResult {}

export interface AddSharedGroupMembersRequest {
  /** An array of unique PlayFab assigned ID of the user on whom the operation will be performed. */
  PlayFabIds: string[];
  /** Unique identifier for the shared group. */
  SharedGroupId: string;
}

export interface AddSharedGroupMembersResult {}

export interface AddUsernamePasswordRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** User email address attached to their account */
  Email: string;
  /** Password for the PlayFab account (6-100 characters) */
  Password: string;
  /** PlayFab username for the account (3-20 characters) */
  Username: string;
}

/** Each account must have a unique username and email address in the PlayFab service. Once created, the account may be associated with additional accounts (Steam, Facebook, Game Center, etc.), allowing for added social network lists and achievements systems. This can also be used to provide a recovery method if the user loses their original means of access. */
export interface AddUsernamePasswordResult {
  /** PlayFab unique user name. */
  Username?: string;
}

/** This API must be enabled for use as an option in the game manager website. It is disabled by default. */
export interface AddUserVirtualCurrencyRequest {
  /** Amount to be added to the user balance of the specified virtual currency. */
  Amount: number;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Name of the virtual currency which is to be incremented. */
  VirtualCurrency: string;
}

/** A single ad placement details including placement and reward information */
export interface AdPlacementDetails {
  /** Placement unique ID */
  PlacementId?: string;
  /** Placement name */
  PlacementName?: string;
  /** If placement has viewing limits indicates how many views are left */
  PlacementViewsRemaining?: number;
  /** If placement has viewing limits indicates when they will next reset */
  PlacementViewsResetMinutes?: number;
  /** Optional URL to a reward asset */
  RewardAssetUrl?: string;
  /** Reward description */
  RewardDescription?: string;
  /** Reward unique ID */
  RewardId?: string;
  /** Reward name */
  RewardName?: string;
}

/** Details for each item granted */
export interface AdRewardItemGranted {
  /** Catalog ID */
  CatalogId?: string;
  /** Catalog item display name */
  DisplayName?: string;
  /** Inventory instance ID */
  InstanceId?: string;
  /** Item ID */
  ItemId?: string;
}

/** Details on what was granted to the player */
export interface AdRewardResults {
  /** Array of the items granted to the player */
  GrantedItems?: AdRewardItemGranted[];
  /** Dictionary of virtual currencies that were granted to the player */
  GrantedVirtualCurrencies?: Record<string, unknown>;
  /** Dictionary of statistics that were modified for the player */
  IncrementedStatistics?: Record<string, unknown>;
}

/** More information can be found on configuring your game for the Google Cloud Messaging service in the Google developer documentation, here: http://developer.android.com/google/gcm/client.html. The steps to configure and send Push Notifications is described in the PlayFab tutorials, here: https://docs.microsoft.com/gaming/playfab/features/engagement/push-notifications/quickstart. */
export interface AndroidDevicePushNotificationRegistrationRequest {
  /** Message to display when confirming push notification. */
  ConfirmationMessage?: string;
  /** Registration ID provided by the Google Cloud Messaging service when the title registered to receive push notifications (see the GCM documentation, here: http://developer.android.com/google/gcm/client.html). */
  DeviceToken: string;
  /** If true, send a test push message immediately after sucessful registration. Defaults to false. */
  SendPushNotificationConfirmation?: boolean;
}

export interface AndroidDevicePushNotificationRegistrationResult {}

/** If you have an ad attribution partner enabled, this will post an install to their service to track the device. It uses the given device id to match based on clicks on ads. */
export interface AttributeInstallRequest {
  /** The adid for this device. */
  Adid?: string;
  /** The IdentifierForAdvertisers for iOS Devices. */
  Idfa?: string;
}

export interface AttributeInstallResult {}

export interface CancelTradeRequest {
  /** Trade identifier. */
  TradeId: string;
}

export interface CancelTradeResponse {
  /** Details about trade which was just canceled. */
  Trade?: TradeInfo;
}

export interface CartItem {
  /** Description of the catalog item. */
  Description?: string;
  /** Display name for the catalog item. */
  DisplayName?: string;
  /** Class name to which catalog item belongs. */
  ItemClass?: string;
  /** Unique identifier for the catalog item. */
  ItemId?: string;
  /** Unique instance identifier for this catalog item. */
  ItemInstanceId?: string;
  /** Cost of the catalog item for each applicable real world currency. */
  RealCurrencyPrices?: Record<string, unknown>;
  /** Amount of each applicable virtual currency which will be received as a result of purchasing this catalog item. */
  VCAmount?: Record<string, unknown>;
  /** Cost of the catalog item for each applicable virtual currency. */
  VirtualCurrencyPrices?: Record<string, unknown>;
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

/** Collection filter to include and/or exclude collections with certain key-value pairs. The filter generates a collection set defined by Includes rules and then remove collections that matches the Excludes rules. A collection is considered matching a rule if the rule describes a subset of the collection.  */
export interface CollectionFilter {
  /** List of Exclude rules, with any of which if a collection matches, it is excluded by the filter. */
  Excludes?: Container_Dictionary_String_String[];
  /** List of Include rules, with any of which if a collection matches, it is included by the filter, unless it is excluded by one of the Exclude rule */
  Includes?: Container_Dictionary_String_String[];
}

/** The final step in the purchasing process, this API finalizes the purchase with the payment provider, where applicable, adding virtual goods to the player inventory (including random drop table resolution and recursive addition of bundled items) and adjusting virtual currency balances for funds used or added. Note that this is a pull operation, and should be polled regularly when a purchase is in progress. Please note that the processing time for inventory grants and purchases increases fractionally the more items are in the inventory, and the more items are in the grant/purchase operation. */
export interface ConfirmPurchaseRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Purchase order identifier returned from StartPurchase. */
  OrderId: string;
}

/** When the FailedByPaymentProvider error is returned, it's important to check the ProviderErrorCode, ProviderErrorMessage, and ProviderErrorDetails to understand the specific reason the payment was rejected, as in some rare cases, this may mean that the provider hasn't completed some operation required to finalize the purchase. */
export interface ConfirmPurchaseResult {
  /** Array of items purchased. */
  Items?: ItemInstance[];
  /** Purchase order identifier. */
  OrderId?: string;
  /** Date and time of the purchase. */
  PurchaseDate: string;
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
}

export interface ConsumeItemResult {
  /** Unique instance identifier of the item with uses consumed. */
  ItemInstanceId?: string;
  /** Number of uses remaining on the item. */
  RemainingUses: number;
}

export interface ConsumeMicrosoftStoreEntitlementsRequest {
  /** Catalog version to use */
  CatalogVersion?: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Marketplace specific payload containing details to fetch in app purchase transactions */
  MarketplaceSpecificData: MicrosoftStorePayload;
}

export interface ConsumeMicrosoftStoreEntitlementsResponse {
  /** Details for the items purchased. */
  Items?: ItemInstance[];
}

export interface ConsumePS5EntitlementsRequest {
  /** Catalog version to use */
  CatalogVersion?: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Marketplace specific payload containing details to fetch in app purchase transactions */
  MarketplaceSpecificData: PlayStation5Payload;
}

export interface ConsumePS5EntitlementsResult {
  /** Details for the items purchased. */
  Items?: ItemInstance[];
}

export interface ConsumePSNEntitlementsRequest {
  /** Which catalog to match granted entitlements against. If null, defaults to title default catalog */
  CatalogVersion?: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Id of the PSN service label to consume entitlements from */
  ServiceLabel: number;
}

export interface ConsumePSNEntitlementsResult {
  /** Array of items granted to the player as a result of consuming entitlements. */
  ItemsGranted?: ItemInstance[];
}

export interface ConsumeXboxEntitlementsRequest {
  /** Catalog version to use */
  CatalogVersion?: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Token provided by the Xbox Live SDK/XDK method GetTokenAndSignatureAsync("POST", "https://playfabapi.com/", ""). */
  XboxToken: string;
}

export interface ConsumeXboxEntitlementsResult {
  /** Details for the items purchased. */
  Items?: ItemInstance[];
}

export interface ContactEmailInfoModel {
  /** The email address */
  EmailAddress?: string;
  /** The name of the email info data */
  Name?: string;
  /** The verification status of the email */
  VerificationStatus?: EmailVerificationStatus;
}

/** A data container */
export interface Container_Dictionary_String_String {
  /** Content of data */
  Data?: Record<string, unknown>;
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

export interface CurrentGamesRequest {
  /** Build to match against. */
  BuildVersion?: string;
  /** Game mode to look for. */
  GameMode?: string;
  /** Region to check for Game Server Instances. */
  Region?: Region;
  /** Statistic name to find statistic-based matches. */
  StatisticName?: string;
  /** Filter to include and/or exclude Game Server Instances associated with certain tags. */
  TagFilter?: CollectionFilter;
}

export interface CurrentGamesResult {
  /** number of games running */
  GameCount: number;
  /** array of games found */
  Games?: GameInfo[];
  /** total number of players across all servers */
  PlayerCount: number;
}

/** Any arbitrary information collected by the device */
export interface DeviceInfoRequest {
  /** Information posted to the PlayStream Event. Currently arbitrary, and specific to the environment sending it. */
  Info?: Record<string, unknown>;
}

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

export interface ExecuteCloudScriptRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** The name of the CloudScript function to execute */
  FunctionName: string;
  /** Object that is passed in to the function as the first argument */
  FunctionParameter?: Record<string, unknown>;
  /** Generate a 'player_executed_cloudscript' PlayStream event containing the results of the function execution and other contextual information. This event will show up in the PlayStream debugger console for the player in Game Manager. */
  GeneratePlayStreamEvent?: boolean;
  /** Option for which revision of the CloudScript to execute. 'Latest' executes the most recently created revision, 'Live' executes the current live, published revision, and 'Specific' executes the specified revision. The default value is 'Specific', if the SpeificRevision parameter is specified, otherwise it is 'Live'. */
  RevisionSelection?: CloudScriptRevisionOption;
  /** The specivic revision to execute, when RevisionSelection is set to 'Specific' */
  SpecificRevision?: number;
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

export interface GameCenterPlayFabIdPair {
  /** Unique Game Center identifier for a user. */
  GameCenterId?: string;
  /** Unique PlayFab identifier for a user, or null if no PlayFab account is linked to the Game Center identifier. */
  PlayFabId?: string;
}

export interface GameInfo {
  /** build version this server is running */
  BuildVersion?: string;
  /** game mode this server is running */
  GameMode?: string;
  /** game session custom data */
  GameServerData?: string;
  /** game specific string denoting server configuration */
  GameServerStateEnum?: GameInstanceState;
  /** last heartbeat of the game server instance, used in external game server provider mode */
  LastHeartbeat?: string;
  /** unique lobby identifier for this game server */
  LobbyID?: string;
  /** maximum players this server can support */
  MaxPlayers?: number;
  /** array of current player IDs on this server */
  PlayerUserIds?: string[];
  /** region to which this server is associated */
  Region?: Region;
  /** duration in seconds this server has been running */
  RunTime: number;
  /** IPV4 address of the server */
  ServerIPV4Address?: string;
  /** IPV6 address of the server */
  ServerIPV6Address?: string;
  /** port number to use for non-http communications with the server */
  ServerPort?: number;
  /** Public DNS name (if any) of the server */
  ServerPublicDNSName?: string;
  /** stastic used to match this game in player statistic matchmaking */
  StatisticName?: string;
  /** game session tags */
  Tags?: Record<string, unknown>;
}

export enum GameInstanceState {
  Open = "Open",
  Closed = "Closed",
}

export interface GameServerRegionsRequest {
  /** version of game server for which stats are being requested */
  BuildVersion: string;
  /** Unique identifier for the title, found in the Settings > Game Properties section of the PlayFab developer site when a title has been selected. */
  TitleId?: string;
}

export interface GameServerRegionsResult {
  /** array of regions found matching the request parameters */
  Regions?: RegionInfo[];
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

export interface GetAccountInfoRequest {
  /** User email address for the account to find (if no Username is specified). */
  Email?: string;
  /** Unique PlayFab identifier of the user whose info is being requested. Optional, defaults to the authenticated user if no other lookup identifier set. */
  PlayFabId?: string;
  /** Title-specific username for the account to find (if no Email is set). Note that if the non-unique Title Display Names option is enabled for the title, attempts to look up users by Title Display Name will always return AccountNotFound. */
  TitleDisplayName?: string;
  /** PlayFab Username for the account to find (if no PlayFabId is specified). */
  Username?: string;
}

/** This API retrieves details regarding the player in the PlayFab service. Note that when this call is used to retrieve data about another player (not the one signed into the local client), some data, such as Personally Identifying Information (PII), will be omitted for privacy reasons or to comply with the requirements of the platform belongs to. The user account returned will be based on the identifier provided in priority order: PlayFabId, Username, Email, then TitleDisplayName. If no identifier is specified, the currently signed in user's information will be returned. */
export interface GetAccountInfoResult {
  /** Account information for the local user. */
  AccountInfo?: UserAccountInfo;
}

/** Using an AppId to return a list of valid ad placements for a player. */
export interface GetAdPlacementsRequest {
  /** The current AppId to use */
  AppId: string;
  /** Using the name or unique identifier, filter the result for get a specific placement. */
  Identifier?: NameIdentifier;
}

/** Array of AdPlacementDetails */
export interface GetAdPlacementsResult {
  /** Array of results */
  AdPlacements?: AdPlacementDetails[];
}

export interface GetCatalogItemsRequest {
  /** Which catalog is being requested. If null, uses the default catalog. */
  CatalogVersion?: string;
}

/** If CatalogVersion is not specified, only inventory items associated with the most recent version of the catalog will be returned. */
export interface GetCatalogItemsResult {
  /** Array of items which can be purchased. */
  Catalog?: CatalogItem[];
}

/** Data is stored as JSON key-value pairs. If the Keys parameter is provided, the data object returned will only contain the data specific to the indicated Keys. Otherwise, the full set of custom character data will be returned. */
export interface GetCharacterDataRequest {
  /** Unique PlayFab assigned ID for a specific character owned by a user */
  CharacterId: string;
  /** The version that currently exists according to the caller. The call will return the data for all of the keys if the version in the system is greater than this. */
  IfChangedFromDataVersion?: number;
  /** Specific keys to search for in the custom user data. */
  Keys?: string[];
  /** Unique PlayFab identifier of the user to load data for. Optional, defaults to yourself if not set. */
  PlayFabId?: string;
}

export interface GetCharacterDataResult {
  /** Unique PlayFab assigned ID for a specific character owned by a user */
  CharacterId?: string;
  /** User specific data for this title. */
  Data?: UserDataRecord;
  /** Indicates the current version of the data that has been set. This is incremented with every set call for that type of data (read-only, internal, etc). This version can be provided in Get calls to find updated data. */
  DataVersion: number;
}

/** All items currently in the character inventory will be returned, irrespective of how they were acquired (via purchasing, grants, coupons, etc.). Items that are expired, fully consumed, or are no longer valid are not considered to be in the user's current inventory, and so will not be not included. Also returns their virtual currency balances. */
export interface GetCharacterInventoryRequest {
  /** Used to limit results to only those from a specific catalog version. */
  CatalogVersion?: string;
  /** Unique PlayFab assigned ID for a specific character owned by a user */
  CharacterId: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
}

export interface GetCharacterInventoryResult {
  /** Unique identifier of the character for this inventory. */
  CharacterId?: string;
  /** Array of inventory items belonging to the character. */
  Inventory?: ItemInstance[];
  /** Array of virtual currency balance(s) belonging to the character. */
  VirtualCurrency?: Record<string, unknown>;
  /** Array of remaining times and timestamps for virtual currencies. */
  VirtualCurrencyRechargeTimes?: VirtualCurrencyRechargeTime;
}

export interface GetCharacterLeaderboardRequest {
  /** Optional character type on which to filter the leaderboard entries. */
  CharacterType?: string;
  /** Maximum number of entries to retrieve. Default 10, maximum 100. */
  MaxResultsCount?: number;
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

export interface GetCharacterStatisticsRequest {
  /** Unique PlayFab assigned ID for a specific character owned by a user */
  CharacterId: string;
}

/** In addition to being available for use by the title, the statistics are used for all leaderboard operations in PlayFab. */
export interface GetCharacterStatisticsResult {
  /** The requested character statistics. */
  CharacterStatistics?: Record<string, unknown>;
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

export interface GetFriendLeaderboardAroundPlayerRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Indicates whether Facebook friends should be included in the response. Default is true. */
  IncludeFacebookFriends?: boolean;
  /** Indicates whether Steam service friends should be included in the response. Default is true. */
  IncludeSteamFriends?: boolean;
  /** Maximum number of entries to retrieve. Default 10, maximum 100. */
  MaxResultsCount?: number;
  /** PlayFab unique identifier of the user to center the leaderboard around. If null will center on the logged in user. */
  PlayFabId?: string;
  /** If non-null, this determines which properties of the resulting player profiles to return. For API calls from the client, only the allowed client profile properties for the title may be requested. These allowed properties are configured in the Game Manager "Client Profile Options" tab in the "Settings" section. */
  ProfileConstraints?: PlayerProfileViewConstraints;
  /** Statistic used to rank players for this leaderboard. */
  StatisticName: string;
  /** If set to false, Version is considered null. If true, uses the specified Version */
  UseSpecificVersion?: boolean;
  /** The version of the leaderboard to get. */
  Version?: number;
  /** Xbox token if Xbox friends should be included. Requires Xbox be configured on PlayFab. */
  XboxToken?: string;
}

/** Note: When calling 'GetLeaderboardAround...' APIs, the position of the user defaults to 0 when the user does not have the corresponding statistic.If Facebook friends are included, make sure the access token from previous LoginWithFacebook call is still valid and not expired. If Xbox Live friends are included, make sure the access token from the previous LoginWithXbox call is still valid and not expired.  */
export interface GetFriendLeaderboardAroundPlayerResult {
  /** Ordered listing of users and their positions in the requested leaderboard. */
  Leaderboard?: PlayerLeaderboardEntry[];
  /** The time the next scheduled reset will occur. Null if the leaderboard does not reset on a schedule. */
  NextReset?: string;
  /** The version of the leaderboard returned. */
  Version: number;
}

export interface GetFriendLeaderboardRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Indicates whether Facebook friends should be included in the response. Default is true. */
  IncludeFacebookFriends?: boolean;
  /** Indicates whether Steam service friends should be included in the response. Default is true. */
  IncludeSteamFriends?: boolean;
  /** Maximum number of entries to retrieve. Default 10, maximum 100. */
  MaxResultsCount?: number;
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
  /** Unique PlayFab assigned ID for a specific character on which to center the leaderboard. */
  CharacterId: string;
  /** Optional character type on which to filter the leaderboard entries. */
  CharacterType?: string;
  /** Maximum number of entries to retrieve. Default 10, maximum 100. */
  MaxResultsCount?: number;
  /** Unique identifier for the title-specific statistic for the leaderboard. */
  StatisticName: string;
}

/** Note: When calling 'GetLeaderboardAround...' APIs, the position of the character defaults to 0 when the character does not have the corresponding statistic. */
export interface GetLeaderboardAroundCharacterResult {
  /** Ordered list of leaderboard entries. */
  Leaderboard?: CharacterLeaderboardEntry[];
}

export interface GetLeaderboardAroundPlayerRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Maximum number of entries to retrieve. Default 10, maximum 100. */
  MaxResultsCount?: number;
  /** PlayFab unique identifier of the user to center the leaderboard around. If null will center on the logged in user. */
  PlayFabId?: string;
  /** If non-null, this determines which properties of the resulting player profiles to return. For API calls from the client, only the allowed client profile properties for the title may be requested. These allowed properties are configured in the Game Manager "Client Profile Options" tab in the "Settings" section. */
  ProfileConstraints?: PlayerProfileViewConstraints;
  /** Statistic used to rank players for this leaderboard. */
  StatisticName: string;
  /** If set to false, Version is considered null. If true, uses the specified Version */
  UseSpecificVersion?: boolean;
  /** The version of the leaderboard to get. */
  Version?: number;
}

/** Note: When calling 'GetLeaderboardAround...' APIs, the position of the user defaults to 0 when the user does not have the corresponding statistic. */
export interface GetLeaderboardAroundPlayerResult {
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
  /** Maximum number of entries to retrieve. Default 10, maximum 100. */
  MaxResultsCount?: number;
  /** If non-null, this determines which properties of the resulting player profiles to return. For API calls from the client, only the allowed client profile properties for the title may be requested. These allowed properties are configured in the Game Manager "Client Profile Options" tab in the "Settings" section. */
  ProfileConstraints?: PlayerProfileViewConstraints;
  /** Position in the leaderboard to start this listing (defaults to the first entry). */
  StartPosition: number;
  /** Statistic used to rank players for this leaderboard. */
  StatisticName: string;
  /** If set to false, Version is considered null. If true, uses the specified Version */
  UseSpecificVersion?: boolean;
  /** The version of the leaderboard to get. */
  Version?: number;
}

/** Note that the Position of the user in the results is for the overall leaderboard. If Facebook friends are included, make sure the access token from previous LoginWithFacebook call is still valid and not expired. If Xbox Live friends are included, make sure the access token from the previous LoginWithXbox call is still valid and not expired.  */
export interface GetLeaderboardResult {
  /** Ordered listing of users and their positions in the requested leaderboard. */
  Leaderboard?: PlayerLeaderboardEntry[];
  /** The time the next scheduled reset will occur. Null if the leaderboard does not reset on a schedule. */
  NextReset?: string;
  /** The version of the leaderboard returned. */
  Version: number;
}

export interface GetPaymentTokenRequest {
  /** The name of service to provide the payment token. Allowed Values are: xsolla */
  TokenProvider: string;
}

export interface GetPaymentTokenResult {
  /** PlayFab's purchase order identifier. */
  OrderId?: string;
  /** The token from provider. */
  ProviderToken?: string;
}

export interface GetPhotonAuthenticationTokenRequest {
  /** The Photon applicationId for the game you wish to log into. */
  PhotonApplicationId: string;
}

export interface GetPhotonAuthenticationTokenResult {
  /** The Photon authentication token for this game-session. */
  PhotonCustomAuthenticationToken?: string;
}

export interface GetPlayerCombinedInfoRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Flags for which pieces of info to return for the user. */
  InfoRequestParameters: GetPlayerCombinedInfoRequestParams;
  /** PlayFabId of the user whose data will be returned. If not filled included, we return the data for the calling player.  */
  PlayFabId?: string;
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

/** Returns whatever info is requested in the response for the user. If no user is explicitly requested this defaults to the authenticated user. If the user is the same as the requester, PII (like email address, facebook id) is returned if available. Otherwise, only public information is returned. All parameters default to false. */
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
  PlayFabId?: string;
  /** If non-null, this determines which properties of the resulting player profiles to return. For API calls from the client, only the allowed client profile properties for the title may be requested. These allowed properties are configured in the Game Manager "Client Profile Options" tab in the "Settings" section. */
  ProfileConstraints?: PlayerProfileViewConstraints;
}

export interface GetPlayerProfileResult {
  /** The profile of the player. This profile is not guaranteed to be up-to-date. For a new player, this profile will not exist. */
  PlayerProfile?: PlayerProfileModel;
}

export interface GetPlayerSegmentsRequest {}

export interface GetPlayerSegmentsResult {
  /** Array of segments the requested player currently belongs to. */
  Segments?: GetSegmentResult[];
}

export interface GetPlayerStatisticsRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** statistics to return (current version will be returned for each) */
  StatisticNames?: string[];
  /** statistics to return, if StatisticNames is not set (only statistics which have a version matching that provided will be returned) */
  StatisticNameVersions?: StatisticNameVersion[];
}

/** In addition to being available for use by the title, the statistics are used for all leaderboard operations in PlayFab. */
export interface GetPlayerStatisticsResult {
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

export interface GetPlayerTradesRequest {
  /** Returns only trades with the given status. If null, returns all trades. */
  StatusFilter?: TradeStatus;
}

export interface GetPlayerTradesResponse {
  /** History of trades which this player has accepted. */
  AcceptedTrades?: TradeInfo[];
  /** The trades for this player which are currently available to be accepted. */
  OpenedTrades?: TradeInfo[];
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

/** For Facebook Instant Game identifiers which have not been linked to PlayFab accounts, null will be returned. */
export interface GetPlayFabIDsFromFacebookInstantGamesIdsResult {
  /** Mapping of Facebook Instant Games identifiers to PlayFab identifiers. */
  Data?: FacebookInstantGamesPlayFabIdPair[];
}

export interface GetPlayFabIDsFromGameCenterIDsRequest {
  /** Array of unique Game Center identifiers (the Player Identifier) for which the title needs to get PlayFab identifiers. */
  GameCenterIDs: string[];
}

/** For Game Center identifiers which have not been linked to PlayFab accounts, null will be returned. */
export interface GetPlayFabIDsFromGameCenterIDsResult {
  /** Mapping of Game Center identifiers to PlayFab identifiers. */
  Data?: GameCenterPlayFabIdPair[];
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

export interface GetPlayFabIDsFromGoogleIDsRequest {
  /** Array of unique Google identifiers (Google+ user IDs) for which the title needs to get PlayFab identifiers. */
  GoogleIDs: string[];
}

/** For Google identifiers which have not been linked to PlayFab accounts, null will be returned. */
export interface GetPlayFabIDsFromGoogleIDsResult {
  /** Mapping of Google identifiers to PlayFab identifiers. */
  Data?: GooglePlayFabIdPair[];
}

export interface GetPlayFabIDsFromKongregateIDsRequest {
  /** Array of unique Kongregate identifiers (Kongregate's user_id) for which the title needs to get PlayFab identifiers. */
  KongregateIDs: string[];
}

/** For Kongregate identifiers which have not been linked to PlayFab accounts, null will be returned. */
export interface GetPlayFabIDsFromKongregateIDsResult {
  /** Mapping of Kongregate identifiers to PlayFab identifiers. */
  Data?: KongregatePlayFabIdPair[];
}

export interface GetPlayFabIDsFromNintendoSwitchDeviceIdsRequest {
  /** Array of unique Nintendo Switch Device identifiers for which the title needs to get PlayFab identifiers. */
  NintendoSwitchDeviceIds: string[];
}

/** For Nintendo Switch identifiers which have not been linked to PlayFab accounts, null will be returned. */
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

export interface GetPlayFabIDsFromTwitchIDsRequest {
  /** Array of unique Twitch identifiers (Twitch's _id) for which the title needs to get PlayFab identifiers. */
  TwitchIds: string[];
}

/** For Twitch identifiers which have not been linked to PlayFab accounts, null will be returned. */
export interface GetPlayFabIDsFromTwitchIDsResult {
  /** Mapping of Twitch identifiers to PlayFab identifiers. */
  Data?: TwitchPlayFabIdPair[];
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

export interface GetPurchaseRequest {
  /** Purchase order identifier. */
  OrderId: string;
}

export interface GetPurchaseResult {
  /** Purchase order identifier. */
  OrderId?: string;
  /** Payment provider used for transaction (If not VC) */
  PaymentProvider?: string;
  /** Date and time of the purchase. */
  PurchaseDate: string;
  /** Provider transaction ID (If not VC) */
  TransactionId?: string;
  /** PlayFab transaction status */
  TransactionStatus?: string;
}

export interface GetSegmentResult {
  /** Identifier of the segments AB Test, if it is attached to one. */
  ABTestParent?: string;
  /** Unique identifier for this segment. */
  Id: string;
  /** Segment name. */
  Name?: string;
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

/** A store contains an array of references to items defined in one or more catalog versions of the game, along with the prices for the item, in both real world and virtual currencies. These prices act as an override to any prices defined in the catalog. In this way, the base definitions of the items may be defined in the catalog, with all associated properties, while the pricing can be set for each store, as needed. This allows for subsets of goods to be defined for different purposes (in order to simplify showing some, but not all catalog items to users, based upon different characteristics), along with unique prices. Note that all prices defined in the catalog and store definitions for the item are considered valid, and that a compromised client can be made to send a request for an item based upon any of these definitions. If no price is specified in the store for an item, the price set in the catalog should be displayed to the user. */
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

/** This query retrieves the current time from one of the servers in PlayFab. Please note that due to clock drift between servers, there is a potential variance of up to 5 seconds. */
export interface GetTimeRequest {}

/** Time is always returned as Coordinated Universal Time (UTC). */
export interface GetTimeResult {
  /** Current server time when the request was received, in UTC */
  Time: string;
}

/** This API is designed to return title specific values which can be read, but not written to, by the client. For example, a developer could choose to store values which modify the user experience, such as enemy spawn rates, weapon strengths, movement speeds, etc. This allows a developer to update the title without the need to create, test, and ship a new build. If the player belongs to an experiment variant that uses title data overrides, the overrides are applied automatically and returned with the title data. Note that there may up to a minute delay in between updating title data and this API call returning the newest value. */
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
  /** Array of news items. */
  News?: TitleNewsItem[];
}

/** An RSA CSP blob to be used to encrypt the payload of account creation requests when that API requires a signature header. For example if Client/LoginWithCustomId requires signature headers but the player does not have an account yet follow these steps: 1) Call Client/GetTitlePublicKey with one of the title's shared secrets. 2) Convert the Base64 encoded CSP blob to a byte array and create an RSA signing object. 3) Encrypt the UTF8 encoded JSON body of the registration request and place the Base64 encoded result into the EncryptedRequest and with the TitleId field, all other fields can be left empty when performing the API request. 4) Client receives authentication token as normal. Future requests to LoginWithCustomId will require the X-PlayFab-Signature header. */
export interface GetTitlePublicKeyRequest {
  /** Unique identifier for the title, found in the Settings > Game Properties section of the PlayFab developer site when a title has been selected. */
  TitleId: string;
  /** The shared secret key for this title */
  TitleSharedSecret: string;
}

export interface GetTitlePublicKeyResult {
  /** Base64 encoded RSA CSP byte array blob containing the title's public RSA key */
  RSAPublicKey?: string;
}

export interface GetTradeStatusRequest {
  /** Player who opened trade. */
  OfferingPlayerId: string;
  /** Trade identifier as returned by OpenTradeOffer. */
  TradeId: string;
}

export interface GetTradeStatusResponse {
  /** Information about the requested trade. */
  Trade?: TradeInfo;
}

/** Data is stored as JSON key-value pairs. Every time the data is updated via any source, the version counter is incremented. If the Version parameter is provided, then this call will only return data if the current version on the system is greater than the value provided. If the Keys parameter is provided, the data object returned will only contain the data specific to the indicated Keys. Otherwise, the full set of custom user data will be returned. */
export interface GetUserDataRequest {
  /** The version that currently exists according to the caller. The call will return the data for all of the keys if the version in the system is greater than this. */
  IfChangedFromDataVersion?: number;
  /** List of unique keys to load from. */
  Keys?: string[];
  /** Unique PlayFab identifier of the user to load data for. Optional, defaults to yourself if not set. When specified to a PlayFab id of another player, then this will only return public keys for that account. */
  PlayFabId?: string;
}

export interface GetUserDataResult {
  /** User specific data for this title. */
  Data?: UserDataRecord;
  /** Indicates the current version of the data that has been set. This is incremented with every set call for that type of data (read-only, internal, etc). This version can be provided in Get calls to find updated data. */
  DataVersion: number;
}

export interface GetUserInventoryRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
}

/** All items currently in the user inventory will be returned, irrespective of how they were acquired (via purchasing, grants, coupons, etc.). Items that are expired, fully consumed, or are no longer valid are not considered to be in the user's current inventory, and so will not be not included. */
export interface GetUserInventoryResult {
  /** Array of inventory items belonging to the user. */
  Inventory?: ItemInstance[];
  /** Array of virtual currency balance(s) belonging to the user. */
  VirtualCurrency?: Record<string, unknown>;
  /** Array of remaining times and timestamps for virtual currencies. */
  VirtualCurrencyRechargeTimes?: VirtualCurrencyRechargeTime;
}

export interface GooglePlayFabIdPair {
  /** Unique Google identifier for a user. */
  GoogleId?: string;
  /** Unique PlayFab identifier for a user, or null if no PlayFab account is linked to the Google identifier. */
  PlayFabId?: string;
}

/** Grants a character to the user of the type specified by the item ID. The user must already have an instance of this item in their inventory in order to allow character creation. This item can come from a purchase or grant, which must be done before calling to create the character. */
export interface GrantCharacterToUserRequest {
  /** Catalog version from which items are to be granted. */
  CatalogVersion?: string;
  /** Non-unique display name of the character being granted (1-40 characters in length). */
  CharacterName: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Catalog item identifier of the item in the user's inventory that corresponds to the character in the catalog to be created. */
  ItemId: string;
}

export interface GrantCharacterToUserResult {
  /** Unique identifier tagged to this character. */
  CharacterId?: string;
  /** Type of character that was created. */
  CharacterType?: string;
  /** Indicates whether this character was created successfully. */
  Result: boolean;
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

export interface ItemPurchaseRequest {
  /** Title-specific text concerning this purchase. */
  Annotation?: string;
  /** Unique ItemId of the item to purchase. */
  ItemId: string;
  /** How many of this item to purchase. Min 1, maximum 25. */
  Quantity: number;
  /** Items to be upgraded as a result of this purchase (upgraded items are hidden, as they are "replaced" by the new items). */
  UpgradeFromItems?: string[];
}

export interface KongregatePlayFabIdPair {
  /** Unique Kongregate identifier for a user. */
  KongregateId?: string;
  /** Unique PlayFab identifier for a user, or null if no PlayFab account is linked to the Kongregate identifier. */
  PlayFabId?: string;
}

export interface LinkAndroidDeviceIDRequest {
  /** Specific model of the user's device. */
  AndroidDevice?: string;
  /** Android device identifier for the user's device. */
  AndroidDeviceId: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** If another user is already linked to the device, unlink the other user and re-link. */
  ForceLink?: boolean;
  /** Specific Operating System version for the user's device. */
  OS?: string;
}

export interface LinkAndroidDeviceIDResult {}

export interface LinkAppleRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** If another user is already linked to a specific Apple account, unlink the other user and re-link. */
  ForceLink?: boolean;
  /** The JSON Web token (JWT) returned by Apple after login. Represented as the identityToken field in the authorization credential payload. Used to validate the request and find the user ID (Apple subject) to link with. */
  IdentityToken: string;
}

export interface LinkCustomIDRequest {
  /** Custom unique identifier for the user, generated by the title. */
  CustomId: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** If another user is already linked to the custom ID, unlink the other user and re-link. */
  ForceLink?: boolean;
}

export interface LinkCustomIDResult {}

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

/** Facebook sign-in is accomplished using the Facebook User Access Token. More information on the Token can be found in the Facebook developer documentation (https://developers.facebook.com/docs/facebook-login/access-tokens/). In Unity, for example, the Token is available as AccessToken in the Facebook SDK ScriptableObject FB. Note that titles should never re-use the same Facebook applications between PlayFab Title IDs, as Facebook provides unique user IDs per application and doing so can result in issues with the Facebook ID for the user in their PlayFab account information. If you must re-use an application in a new PlayFab Title ID, please be sure to first unlink all accounts from Facebook, or delete all users in the first Title ID. */
export interface LinkFacebookAccountRequest {
  /** Unique identifier from Facebook for the user. */
  AccessToken: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** If another user is already linked to the account, unlink the other user and re-link. */
  ForceLink?: boolean;
}

export interface LinkFacebookAccountResult {}

export interface LinkFacebookInstantGamesIdRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Facebook Instant Games signature for the user. */
  FacebookInstantGamesSignature: string;
  /** If another user is already linked to the Facebook Instant Games ID, unlink the other user and re-link. */
  ForceLink?: boolean;
}

export interface LinkFacebookInstantGamesIdResult {}

export interface LinkGameCenterAccountRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** If another user is already linked to the account, unlink the other user and re-link. */
  ForceLink?: boolean;
  /** Game Center identifier for the player account to be linked. */
  GameCenterId: string;
  /** The URL for the public encryption key that will be used to verify the signature. */
  PublicKeyUrl?: string;
  /** A random value used to compute the hash and keep it randomized. */
  Salt?: string;
  /** The verification signature of the authentication payload. */
  Signature?: string;
  /** The integer representation of date and time that the signature was created on. PlayFab will reject authentication signatures not within 10 minutes of the server's current time. */
  Timestamp?: string;
}

export interface LinkGameCenterAccountResult {}

/** Google sign-in is accomplished by obtaining a Google OAuth 2.0 credential using the Google sign-in for Android APIs on the device and passing it to this API. */
export interface LinkGoogleAccountRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** If another user is already linked to the account, unlink the other user and re-link. */
  ForceLink?: boolean;
  /** Server authentication code obtained on the client by calling getServerAuthCode() (https://developers.google.com/identity/sign-in/android/offline-access) from Google Play for the user. */
  ServerAuthCode?: string;
}

export interface LinkGoogleAccountResult {}

export interface LinkIOSDeviceIDRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Vendor-specific iOS identifier for the user's device. */
  DeviceId: string;
  /** Specific model of the user's device. */
  DeviceModel?: string;
  /** If another user is already linked to the device, unlink the other user and re-link. */
  ForceLink?: boolean;
  /** Specific Operating System version for the user's device. */
  OS?: string;
}

export interface LinkIOSDeviceIDResult {}

export interface LinkKongregateAccountRequest {
  /** Valid session auth ticket issued by Kongregate */
  AuthTicket: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** If another user is already linked to the account, unlink the other user and re-link. */
  ForceLink?: boolean;
  /** Numeric user ID assigned by Kongregate */
  KongregateId: string;
}

export interface LinkKongregateAccountResult {}

export interface LinkNintendoServiceAccountRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** If another user is already linked to a specific Nintendo Switch account, unlink the other user and re-link. */
  ForceLink?: boolean;
  /** The JSON Web token (JWT) returned by Nintendo after login. Used to validate the request and find the user ID (Nintendo Switch subject) to link with. */
  IdentityToken: string;
}

export interface LinkNintendoSwitchDeviceIdRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** If another user is already linked to the Nintendo Switch Device ID, unlink the other user and re-link. */
  ForceLink?: boolean;
  /** Nintendo Switch unique identifier for the user's device. */
  NintendoSwitchDeviceId: string;
}

export interface LinkNintendoSwitchDeviceIdResult {}

export interface LinkOpenIdConnectRequest {
  /** A name that identifies which configured OpenID Connect provider relationship to use. Maximum 100 characters. */
  ConnectionId: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** If another user is already linked to a specific OpenId Connect user, unlink the other user and re-link. */
  ForceLink?: boolean;
  /** The JSON Web token (JWT) returned by the identity provider after login. Represented as the id_token field in the identity provider's response. Used to validate the request and find the user ID (OpenID Connect subject) to link with. */
  IdToken: string;
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
  /** Redirect URI supplied to PSN when requesting an auth code */
  RedirectUri: string;
}

export interface LinkPSNAccountResult {}

/** Steam authentication is accomplished with the Steam Session Ticket. More information on the Ticket can be found in the Steamworks SDK, here: https://partner.steamgames.com/documentation/auth (requires sign-in). NOTE: For Steam authentication to work, the title must be configured with the Steam Application ID and Publisher Key in the PlayFab Game Manager (under Properties). Information on creating a Publisher Key (referred to as the Secret Key in PlayFab) for your title can be found here: https://partner.steamgames.com/documentation/webapi#publisherkey. */
export interface LinkSteamAccountRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** If another user is already linked to the account, unlink the other user and re-link. */
  ForceLink?: boolean;
  /** Authentication token for the user, returned as a byte array from Steam, and converted to a string (for example, the byte 0x08 should become "08"). */
  SteamTicket: string;
}

export interface LinkSteamAccountResult {}

export interface LinkTwitchAccountRequest {
  /** Valid token issued by Twitch */
  AccessToken: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** If another user is already linked to the account, unlink the other user and re-link. */
  ForceLink?: boolean;
}

export interface LinkTwitchAccountResult {}

export interface LinkXboxAccountRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** If another user is already linked to the account, unlink the other user and re-link. */
  ForceLink?: boolean;
  /** Token provided by the Xbox Live SDK/XDK method GetTokenAndSignatureAsync("POST", "https://playfabapi.com/", ""). */
  XboxToken: string;
}

export interface LinkXboxAccountResult {}

/** Returns a list of every character that currently belongs to a user. */
export interface ListUsersCharactersRequest {
  /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
  PlayFabId?: string;
}

export interface ListUsersCharactersResult {
  /** The requested list of characters. */
  Characters?: CharacterResult[];
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

export interface LoginResult {
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

/** On Android devices, the recommendation is to use the Settings.Secure.ANDROID_ID as the AndroidDeviceId, as described in this blog post (http://android-developers.blogspot.com/2011/03/identifying-app-installations.html). More information on this identifier can be found in the Android documentation (http://developer.android.com/reference/android/provider/Settings.Secure.html). If this is the first time a user has signed in with the Android device and CreateAccount is set to true, a new PlayFab account will be created and linked to the Android device ID. In this case, no email or username will be associated with the PlayFab account. Otherwise, if no PlayFab account is linked to the Android device, an error indicating this will be returned, so that the title can guide the user through creation of a PlayFab account. Please note that while multiple devices of this type can be linked to a single user account, only the one most recently used to login (or most recently linked) will be reflected in the user's account information. We will be updating to show all linked devices in a future release. */
export interface LoginWithAndroidDeviceIDRequest {
  /** Specific model of the user's device. */
  AndroidDevice?: string;
  /** Android device identifier for the user's device. */
  AndroidDeviceId?: string;
  /** Automatically create a PlayFab account if one is not currently linked to this ID. */
  CreateAccount?: boolean;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Base64 encoded body that is encrypted with the Title's public RSA key (Enterprise Only). */
  EncryptedRequest?: string;
  /** Flags for which pieces of info to return for the user. */
  InfoRequestParameters?: GetPlayerCombinedInfoRequestParams;
  /** Specific Operating System version for the user's device. */
  OS?: string;
  /** Player secret that is used to verify API request signatures (Enterprise Only). */
  PlayerSecret?: string;
  /** Unique identifier for the title, found in the Settings > Game Properties section of the PlayFab developer site when a title has been selected. */
  TitleId: string;
}

export interface LoginWithAppleRequest {
  /** Automatically create a PlayFab account if one is not currently linked to this ID. */
  CreateAccount?: boolean;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Base64 encoded body that is encrypted with the Title's public RSA key (Enterprise Only). */
  EncryptedRequest?: string;
  /** The JSON Web token (JWT) returned by Apple after login. Represented as the identityToken field in the authorization credential payload. */
  IdentityToken: string;
  /** Flags for which pieces of info to return for the user. */
  InfoRequestParameters?: GetPlayerCombinedInfoRequestParams;
  /** Player secret that is used to verify API request signatures (Enterprise Only). */
  PlayerSecret?: string;
  /** Unique identifier for the title, found in the Settings > Game Properties section of the PlayFab developer site when a title has been selected. */
  TitleId: string;
}

/** It is highly recommended that developers ensure that it is extremely unlikely that a customer could generate an ID which is already in use by another customer. If this is the first time a user has signed in with the Custom ID and CreateAccount is set to true, a new PlayFab account will be created and linked to the Custom ID. In this case, no email or username will be associated with the PlayFab account. Otherwise, if no PlayFab account is linked to the Custom ID, an error indicating this will be returned, so that the title can guide the user through creation of a PlayFab account. */
export interface LoginWithCustomIDRequest {
  /** Automatically create a PlayFab account if one is not currently linked to this ID. */
  CreateAccount?: boolean;
  /** Custom unique identifier for the user, generated by the title. */
  CustomId?: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Base64 encoded body that is encrypted with the Title's public RSA key (Enterprise Only). */
  EncryptedRequest?: string;
  /** Flags for which pieces of info to return for the user. */
  InfoRequestParameters?: GetPlayerCombinedInfoRequestParams;
  /** Player secret that is used to verify API request signatures (Enterprise Only). */
  PlayerSecret?: string;
  /** Unique identifier for the title, found in the Settings > Game Properties section of the PlayFab developer site when a title has been selected. */
  TitleId: string;
}

/** Email address and password lengths are provided for information purposes. The server will validate that data passed in conforms to the field definition and report errors appropriately. It is recommended that developers not perform this validation locally, so that future updates do not require client updates. */
export interface LoginWithEmailAddressRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Email address for the account. */
  Email: string;
  /** Flags for which pieces of info to return for the user. */
  InfoRequestParameters?: GetPlayerCombinedInfoRequestParams;
  /** Password for the PlayFab account (6-100 characters) */
  Password: string;
  /** Unique identifier for the title, found in the Settings > Game Properties section of the PlayFab developer site when a title has been selected. */
  TitleId: string;
}

export interface LoginWithFacebookInstantGamesIdRequest {
  /** Automatically create a PlayFab account if one is not currently linked to this ID. */
  CreateAccount?: boolean;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Base64 encoded body that is encrypted with the Title's public RSA key (Enterprise Only). */
  EncryptedRequest?: string;
  /** Facebook Instant Games signature for the user. */
  FacebookInstantGamesSignature: string;
  /** Flags for which pieces of info to return for the user. */
  InfoRequestParameters?: GetPlayerCombinedInfoRequestParams;
  /** Player secret that is used to verify API request signatures (Enterprise Only). */
  PlayerSecret?: string;
  /** Unique identifier for the title, found in the Settings > Game Properties section of the PlayFab developer site when a title has been selected. */
  TitleId: string;
}

/** Facebook sign-in is accomplished using the Facebook User Access Token. More information on the Token can be found in the Facebook developer documentation (https://developers.facebook.com/docs/facebook-login/access-tokens/). In Unity, for example, the Token is available as AccessToken in the Facebook SDK ScriptableObject FB. If this is the first time a user has signed in with the Facebook account and CreateAccount is set to true, a new PlayFab account will be created and linked to the provided account's Facebook ID. In this case, no email or username will be associated with the PlayFab account. Otherwise, if no PlayFab account is linked to the Facebook account, an error indicating this will be returned, so that the title can guide the user through creation of a PlayFab account. Note that titles should never re-use the same Facebook applications between PlayFab Title IDs, as Facebook provides unique user IDs per application and doing so can result in issues with the Facebook ID for the user in their PlayFab account information. If you must re-use an application in a new PlayFab Title ID, please be sure to first unlink all accounts from Facebook, or delete all users in the first Title ID. */
export interface LoginWithFacebookRequest {
  /** Unique identifier from Facebook for the user. */
  AccessToken: string;
  /** Automatically create a PlayFab account if one is not currently linked to this ID. */
  CreateAccount?: boolean;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Base64 encoded body that is encrypted with the Title's public RSA key (Enterprise Only). */
  EncryptedRequest?: string;
  /** Flags for which pieces of info to return for the user. */
  InfoRequestParameters?: GetPlayerCombinedInfoRequestParams;
  /** Player secret that is used to verify API request signatures (Enterprise Only). */
  PlayerSecret?: string;
  /** Unique identifier for the title, found in the Settings > Game Properties section of the PlayFab developer site when a title has been selected. */
  TitleId: string;
}

/** The Game Center player identifier (https://developer.apple.com/library/ios/documentation/Accounts/Reference/ACAccountClassRef/index.html#//apple_ref/occ/instp/ACAccount/identifier) is a generated string which is stored on the local device. As with device identifiers, care must be taken to never expose a player's Game Center identifier to end users, as that could result in a user's account being compromised. If this is the first time a user has signed in with Game Center and CreateAccount is set to true, a new PlayFab account will be created and linked to the Game Center identifier. In this case, no email or username will be associated with the PlayFab account. Otherwise, if no PlayFab account is linked to the Game Center account, an error indicating this will be returned, so that the title can guide the user through creation of a PlayFab account. */
export interface LoginWithGameCenterRequest {
  /** Automatically create a PlayFab account if one is not currently linked to this ID. */
  CreateAccount?: boolean;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Base64 encoded body that is encrypted with the Title's public RSA key (Enterprise Only). */
  EncryptedRequest?: string;
  /** Flags for which pieces of info to return for the user. */
  InfoRequestParameters?: GetPlayerCombinedInfoRequestParams;
  /** Unique Game Center player id. */
  PlayerId?: string;
  /** Player secret that is used to verify API request signatures (Enterprise Only). */
  PlayerSecret?: string;
  /** The URL for the public encryption key that will be used to verify the signature. */
  PublicKeyUrl?: string;
  /** A random value used to compute the hash and keep it randomized. */
  Salt?: string;
  /** The verification signature of the authentication payload. */
  Signature?: string;
  /** The integer representation of date and time that the signature was created on. PlayFab will reject authentication signatures not within 10 minutes of the server's current time. */
  Timestamp?: string;
  /** Unique identifier for the title, found in the Settings > Game Properties section of the PlayFab developer site when a title has been selected. */
  TitleId: string;
}

/** Google sign-in is accomplished by obtaining a Google OAuth 2.0 credential using the Google sign-in for Android APIs on the device and passing it to this API. If this is the first time a user has signed in with the Google account and CreateAccount is set to true, a new PlayFab account will be created and linked to the Google account. Otherwise, if no PlayFab account is linked to the Google account, an error indicating this will be returned, so that the title can guide the user through creation of a PlayFab account. The current (recommended) method for obtaining a Google account credential in an Android application is to call GoogleSignInAccount.getServerAuthCode() and send the auth code as the ServerAuthCode parameter of this API. Before doing this, you must create an OAuth 2.0 web application client ID in the Google API Console and configure its client ID and secret in the PlayFab Game Manager Google Add-on for your title. This method does not require prompting of the user for additional Google account permissions, resulting in a user experience with the least possible friction. For more information about obtaining the server auth code, see https://developers.google.com/identity/sign-in/android/offline-access. The previous (deprecated) method was to obtain an OAuth access token by calling GetAccessToken() on the client and passing it as the AccessToken parameter to this API. for the with the Google OAuth 2.0 Access Token. More information on this change can be found in the Google developer documentation (https://android-developers.googleblog.com/2016/01/play-games-permissions-are-changing-in.html). */
export interface LoginWithGoogleAccountRequest {
  /** Automatically create a PlayFab account if one is not currently linked to this ID. */
  CreateAccount?: boolean;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Base64 encoded body that is encrypted with the Title's public RSA key (Enterprise Only). */
  EncryptedRequest?: string;
  /** Flags for which pieces of info to return for the user. */
  InfoRequestParameters?: GetPlayerCombinedInfoRequestParams;
  /** Player secret that is used to verify API request signatures (Enterprise Only). */
  PlayerSecret?: string;
  /** OAuth 2.0 server authentication code obtained on the client by calling the getServerAuthCode() (https://developers.google.com/identity/sign-in/android/offline-access) Google client API. */
  ServerAuthCode?: string;
  /** Unique identifier for the title, found in the Settings > Game Properties section of the PlayFab developer site when a title has been selected. */
  TitleId: string;
}

/** On iOS devices, the identifierForVendor (https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIDevice_Class/index.html#//apple_ref/occ/instp/UIDevice/identifierForVendor) must be used as the DeviceId, as the UIDevice uniqueIdentifier has been deprecated as of iOS 5, and use of the advertisingIdentifier for this purpose will result in failure of Apple's certification process. If this is the first time a user has signed in with the iOS device and CreateAccount is set to true, a new PlayFab account will be created and linked to the vendor-specific iOS device ID. In this case, no email or username will be associated with the PlayFab account. Otherwise, if no PlayFab account is linked to the iOS device, an error indicating this will be returned, so that the title can guide the user through creation of a PlayFab account. Please note that while multiple devices of this type can be linked to a single user account, only the one most recently used to login (or most recently linked) will be reflected in the user's account information. We will be updating to show all linked devices in a future release. */
export interface LoginWithIOSDeviceIDRequest {
  /** Automatically create a PlayFab account if one is not currently linked to this ID. */
  CreateAccount?: boolean;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Vendor-specific iOS identifier for the user's device. */
  DeviceId?: string;
  /** Specific model of the user's device. */
  DeviceModel?: string;
  /** Base64 encoded body that is encrypted with the Title's public RSA key (Enterprise Only). */
  EncryptedRequest?: string;
  /** Flags for which pieces of info to return for the user. */
  InfoRequestParameters?: GetPlayerCombinedInfoRequestParams;
  /** Specific Operating System version for the user's device. */
  OS?: string;
  /** Player secret that is used to verify API request signatures (Enterprise Only). */
  PlayerSecret?: string;
  /** Unique identifier for the title, found in the Settings > Game Properties section of the PlayFab developer site when a title has been selected. */
  TitleId: string;
}

/** More details regarding Kongregate and their game authentication system can be found at http://developers.kongregate.com/docs/virtual-goods/authentication. Developers must provide the Kongregate user ID and auth token that are generated using the Kongregate client library. PlayFab will combine these identifiers with the title's unique Kongregate app ID to log the player into the Kongregate system. If CreateAccount is set to true and there is not already a user matched to this Kongregate ID, then PlayFab will create a new account for this user and link the ID. In this case, no email or username will be associated with the PlayFab account. If there is already a different PlayFab user linked with this account, then an error will be returned. */
export interface LoginWithKongregateRequest {
  /** Token issued by Kongregate's client API for the user. */
  AuthTicket?: string;
  /** Automatically create a PlayFab account if one is not currently linked to this ID. */
  CreateAccount?: boolean;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Base64 encoded body that is encrypted with the Title's public RSA key (Enterprise Only). */
  EncryptedRequest?: string;
  /** Flags for which pieces of info to return for the user. */
  InfoRequestParameters?: GetPlayerCombinedInfoRequestParams;
  /** Numeric user ID assigned by Kongregate */
  KongregateId?: string;
  /** Player secret that is used to verify API request signatures (Enterprise Only). */
  PlayerSecret?: string;
  /** Unique identifier for the title, found in the Settings > Game Properties section of the PlayFab developer site when a title has been selected. */
  TitleId: string;
}

export interface LoginWithNintendoServiceAccountRequest {
  /** Automatically create a PlayFab account if one is not currently linked to this ID. */
  CreateAccount?: boolean;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Base64 encoded body that is encrypted with the Title's public RSA key (Enterprise Only). */
  EncryptedRequest?: string;
  /** The JSON Web token (JWT) returned by Nintendo after login. */
  IdentityToken: string;
  /** Flags for which pieces of info to return for the user. */
  InfoRequestParameters?: GetPlayerCombinedInfoRequestParams;
  /** Player secret that is used to verify API request signatures (Enterprise Only). */
  PlayerSecret?: string;
  /** Unique identifier for the title, found in the Settings > Game Properties section of the PlayFab developer site when a title has been selected. */
  TitleId: string;
}

export interface LoginWithNintendoSwitchDeviceIdRequest {
  /** Automatically create a PlayFab account if one is not currently linked to this ID. */
  CreateAccount?: boolean;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Base64 encoded body that is encrypted with the Title's public RSA key (Enterprise Only). */
  EncryptedRequest?: string;
  /** Flags for which pieces of info to return for the user. */
  InfoRequestParameters?: GetPlayerCombinedInfoRequestParams;
  /** Nintendo Switch unique identifier for the user's device. */
  NintendoSwitchDeviceId?: string;
  /** Player secret that is used to verify API request signatures (Enterprise Only). */
  PlayerSecret?: string;
  /** Unique identifier for the title, found in the Settings > Game Properties section of the PlayFab developer site when a title has been selected. */
  TitleId: string;
}

export interface LoginWithOpenIdConnectRequest {
  /** A name that identifies which configured OpenID Connect provider relationship to use. Maximum 100 characters. */
  ConnectionId: string;
  /** Automatically create a PlayFab account if one is not currently linked to this ID. */
  CreateAccount?: boolean;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Base64 encoded body that is encrypted with the Title's public RSA key (Enterprise Only). */
  EncryptedRequest?: string;
  /** The JSON Web token (JWT) returned by the identity provider after login. Represented as the id_token field in the identity provider's response. */
  IdToken: string;
  /** Flags for which pieces of info to return for the user. */
  InfoRequestParameters?: GetPlayerCombinedInfoRequestParams;
  /** Player secret that is used to verify API request signatures (Enterprise Only). */
  PlayerSecret?: string;
  /** Unique identifier for the title, found in the Settings > Game Properties section of the PlayFab developer site when a title has been selected. */
  TitleId: string;
}

/** Username and password lengths are provided for information purposes. The server will validate that data passed in conforms to the field definition and report errors appropriately. It is recommended that developers not perform this validation locally, so that future updates to the username or password do not require client updates. */
export interface LoginWithPlayFabRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Flags for which pieces of info to return for the user. */
  InfoRequestParameters?: GetPlayerCombinedInfoRequestParams;
  /** Password for the PlayFab account (6-100 characters) */
  Password: string;
  /** Unique identifier for the title, found in the Settings > Game Properties section of the PlayFab developer site when a title has been selected. */
  TitleId: string;
  /** PlayFab username for the account. */
  Username: string;
}

/** If this is the first time a user has signed in with the PlayStation Network account and CreateAccount is set to true, a new PlayFab account will be created and linked to the PSN account. In this case, no email or username will be associated with the PlayFab account. Otherwise, if no PlayFab account is linked to the PSN account, an error indicating this will be returned, so that the title can guide the user through creation of a PlayFab account. */
export interface LoginWithPSNRequest {
  /** Auth code provided by the PSN OAuth provider. */
  AuthCode?: string;
  /** Automatically create a PlayFab account if one is not currently linked to this ID. */
  CreateAccount?: boolean;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Base64 encoded body that is encrypted with the Title's public RSA key (Enterprise Only). */
  EncryptedRequest?: string;
  /** Flags for which pieces of info to return for the user. */
  InfoRequestParameters?: GetPlayerCombinedInfoRequestParams;
  /** Id of the PSN issuer environment. If null, defaults to production environment. */
  IssuerId?: number;
  /** Player secret that is used to verify API request signatures (Enterprise Only). */
  PlayerSecret?: string;
  /** Redirect URI supplied to PSN when requesting an auth code */
  RedirectUri?: string;
  /** Unique identifier for the title, found in the Settings > Game Properties section of the PlayFab developer site when a title has been selected. */
  TitleId: string;
}

/** Steam sign-in is accomplished with the Steam Session Ticket. More information on the Ticket can be found in the Steamworks SDK, here: https://partner.steamgames.com/documentation/auth (requires sign-in). NOTE: For Steam authentication to work, the title must be configured with the Steam Application ID and Web API Key in the PlayFab Game Manager (under Steam in the Add-ons Marketplace). You can obtain a Web API Key from the Permissions page of any Group associated with your App ID in the Steamworks site. If this is the first time a user has signed in with the Steam account and CreateAccount is set to true, a new PlayFab account will be created and linked to the provided account's Steam ID. In this case, no email or username will be associated with the PlayFab account. Otherwise, if no PlayFab account is linked to the Steam account, an error indicating this will be returned, so that the title can guide the user through creation of a PlayFab account. */
export interface LoginWithSteamRequest {
  /** Automatically create a PlayFab account if one is not currently linked to this ID. */
  CreateAccount?: boolean;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Base64 encoded body that is encrypted with the Title's public RSA key (Enterprise Only). */
  EncryptedRequest?: string;
  /** Flags for which pieces of info to return for the user. */
  InfoRequestParameters?: GetPlayerCombinedInfoRequestParams;
  /** Player secret that is used to verify API request signatures (Enterprise Only). */
  PlayerSecret?: string;
  /** Authentication token for the user, returned as a byte array from Steam, and converted to a string (for example, the byte 0x08 should become "08"). */
  SteamTicket?: string;
  /** Unique identifier for the title, found in the Settings > Game Properties section of the PlayFab developer site when a title has been selected. */
  TitleId: string;
}

/** More details regarding Twitch and their authentication system can be found at https://github.com/justintv/Twitch-API/blob/master/authentication.md. Developers must provide the Twitch access token that is generated using one of the Twitch authentication flows. PlayFab will use the title's unique Twitch Client ID to authenticate the token and log in to the PlayFab system. If CreateAccount is set to true and there is not already a user matched to the Twitch username that generated the token, then PlayFab will create a new account for this user and link the ID. In this case, no email or username will be associated with the PlayFab account. If there is already a different PlayFab user linked with this account, then an error will be returned. */
export interface LoginWithTwitchRequest {
  /** Token issued by Twitch's API for the user. */
  AccessToken?: string;
  /** Automatically create a PlayFab account if one is not currently linked to this ID. */
  CreateAccount?: boolean;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Base64 encoded body that is encrypted with the Title's public RSA key (Enterprise Only). */
  EncryptedRequest?: string;
  /** Flags for which pieces of info to return for the user. */
  InfoRequestParameters?: GetPlayerCombinedInfoRequestParams;
  /** Player secret that is used to verify API request signatures (Enterprise Only). */
  PlayerSecret?: string;
  /** Unique identifier for the title, found in the Settings > Game Properties section of the PlayFab developer site when a title has been selected. */
  TitleId: string;
}

/** If this is the first time a user has signed in with the Xbox Live account and CreateAccount is set to true, a new PlayFab account will be created and linked to the Xbox Live account. In this case, no email or username will be associated with the PlayFab account. Otherwise, if no PlayFab account is linked to the Xbox Live account, an error indicating this will be returned, so that the title can guide the user through creation of a PlayFab account. */
export interface LoginWithXboxRequest {
  /** Automatically create a PlayFab account if one is not currently linked to this ID. */
  CreateAccount?: boolean;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Base64 encoded body that is encrypted with the Title's public RSA key (Enterprise Only). */
  EncryptedRequest?: string;
  /** Flags for which pieces of info to return for the user. */
  InfoRequestParameters?: GetPlayerCombinedInfoRequestParams;
  /** Player secret that is used to verify API request signatures (Enterprise Only). */
  PlayerSecret?: string;
  /** Unique identifier for the title, found in the Settings > Game Properties section of the PlayFab developer site when a title has been selected. */
  TitleId: string;
  /** Token provided by the Xbox Live SDK/XDK method GetTokenAndSignatureAsync("POST", "https://playfabapi.com/", ""). */
  XboxToken?: string;
}

export interface LogStatement {
  /** Optional object accompanying the message as contextual information */
  Data?: Record<string, unknown>;
  /** 'Debug', 'Info', or 'Error' */
  Level?: string;
  Message?: string;
}

export interface MatchmakeRequest {
  /** Build version to match against. [Note: Required if LobbyId is not specified] */
  BuildVersion?: string;
  /** Character to use for stats based matching. Leave null to use account stats. */
  CharacterId?: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Game mode to match make against. [Note: Required if LobbyId is not specified] */
  GameMode?: string;
  /** Lobby identifier to match make against. This is used to select a specific Game Server Instance. */
  LobbyId?: string;
  /** Region to match make against. [Note: Required if LobbyId is not specified] */
  Region?: Region;
  /** Start a game session if one with an open slot is not found. Defaults to true. */
  StartNewIfNoneFound?: boolean;
  /** Player statistic to use in finding a match. May be null for no stat-based matching. */
  StatisticName?: string;
  /** Filter to include and/or exclude Game Server Instances associated with certain Tags */
  TagFilter?: CollectionFilter;
}

export interface MatchmakeResult {
  /** timestamp for when the server will expire, if applicable */
  Expires?: string;
  /** unique lobby identifier of the server matched */
  LobbyID?: string;
  /** time in milliseconds the application is configured to wait on matchmaking results */
  PollWaitTimeMS?: number;
  /** IPV4 address of the server */
  ServerIPV4Address?: string;
  /** IPV6 address of the server */
  ServerIPV6Address?: string;
  /** port number to use for non-http communications with the server */
  ServerPort?: number;
  /** Public DNS name (if any) of the server */
  ServerPublicDNSName?: string;
  /** result of match making process */
  Status?: MatchmakeStatus;
  /** server authorization ticket (used by RedeemMatchmakerTicket to validate user insertion into the game) */
  Ticket?: string;
}

export enum MatchmakeStatus {
  Complete = "Complete",
  Waiting = "Waiting",
  GameNotFound = "GameNotFound",
  NoAvailableSlots = "NoAvailableSlots",
  SessionClosed = "SessionClosed",
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

export interface MicrosoftStorePayload {
  /** Microsoft store ID key. This is optional. Alternatively you can use XboxToken */
  CollectionsMsIdKey?: string;
  /** If collectionsMsIdKey is provided, this will verify the user id in the collectionsMsIdKey is the same. */
  UserId?: string;
  /** Token provided by the Xbox Live SDK/XDK method GetTokenAndSignatureAsync("POST", "https://playfabapi.com/", ""). This is optional. Alternatively can use CollectionsMsIdKey */
  XboxToken?: string;
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

export interface NintendoSwitchPlayFabIdPair {
  /** Unique Nintendo Switch Device identifier for a user. */
  NintendoSwitchDeviceId?: string;
  /** Unique PlayFab identifier for a user, or null if no PlayFab account is linked to the Nintendo Switch Device identifier. */
  PlayFabId?: string;
}

export interface OpenTradeRequest {
  /** Players who are allowed to accept the trade. If null, the trade may be accepted by any player. If empty, the trade may not be accepted by any player. */
  AllowedPlayerIds?: string[];
  /** Player inventory items offered for trade. If not set, the trade is effectively a gift request */
  OfferedInventoryInstanceIds?: string[];
  /** Catalog items accepted for the trade. If not set, the trade is effectively a gift. */
  RequestedCatalogItemIds?: string[];
}

export interface OpenTradeResponse {
  /** The information about the trade that was just opened. */
  Trade?: TradeInfo;
}

/** This is the second step in the purchasing process, initiating the purchase transaction with the payment provider (if applicable). For payment provider scenarios, the title should next present the user with the payment provider'sinterface for payment. Once the player has completed the payment with the provider, the title should call ConfirmPurchase tofinalize the process and add the appropriate items to the player inventory. */
export interface PayForPurchaseRequest {
  /** Currency to use to fund the purchase. */
  Currency: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Purchase order identifier returned from StartPurchase. */
  OrderId: string;
  /** Payment provider to use to fund the purchase. */
  ProviderName: string;
  /** Payment provider transaction identifier. Required for Facebook Payments. */
  ProviderTransactionId?: string;
}

/** For web-based payment providers, this operation returns the URL to which the user should be directed inorder to approve the purchase. Items added to the user inventory as a result of this operation will be marked as unconfirmed. */
export interface PayForPurchaseResult {
  /** Local credit applied to the transaction (provider specific). */
  CreditApplied: number;
  /** Purchase order identifier. */
  OrderId?: string;
  /** Provider used for the transaction. */
  ProviderData?: string;
  /** A token generated by the provider to authenticate the request (provider-specific). */
  ProviderToken?: string;
  /** URL to the purchase provider page that details the purchase. */
  PurchaseConfirmationPageURL?: string;
  /** Currency for the transaction, may be a virtual currency or real money. */
  PurchaseCurrency?: string;
  /** Cost of the transaction. */
  PurchasePrice: number;
  /** Status of the transaction. */
  Status?: TransactionStatus;
  /** Virtual currencies granted by the transaction, if any. */
  VCAmount?: Record<string, unknown>;
  /** Current virtual currency balances for the user. */
  VirtualCurrency?: Record<string, unknown>;
}

export interface PaymentOption {
  /** Specific currency to use to fund the purchase. */
  Currency?: string;
  /** Amount of the specified currency needed for the purchase. */
  Price: number;
  /** Name of the purchase provider for this option. */
  ProviderName?: string;
  /** Amount of existing credit the user has with the provider. */
  StoreCredit: number;
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

export interface PlayStation5Payload {
  /** An optional list of entitlement ids to query against PSN */
  Ids?: string[];
  /** Id of the PSN service label to consume entitlements from */
  ServiceLabel?: string;
}

export interface PSNAccountPlayFabIdPair {
  /** Unique PlayFab identifier for a user, or null if no PlayFab account is linked to the PlayStation Network identifier. */
  PlayFabId?: string;
  /** Unique PlayStation Network identifier for a user. */
  PSNAccountId?: string;
}

/** Please note that the processing time for inventory grants and purchases increases fractionally the more items are in the inventory, and the more items are in the grant/purchase operation (with each item in a bundle being a distinct add). */
export interface PurchaseItemRequest {
  /** Catalog version for the items to be purchased (defaults to most recent version. */
  CatalogVersion?: string;
  /** Unique PlayFab assigned ID for a specific character owned by a user */
  CharacterId?: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Unique identifier of the item to purchase. */
  ItemId: string;
  /** Price the client expects to pay for the item (in case a new catalog or store was uploaded, with new prices). */
  Price: number;
  /** Store to buy this item through. If not set, prices default to those in the catalog. */
  StoreId?: string;
  /** Virtual currency to use to purchase the item. */
  VirtualCurrency: string;
}

export interface PurchaseItemResult {
  /** Details for the items purchased. */
  Items?: ItemInstance[];
}

export interface PurchaseReceiptFulfillment {
  /** Items granted to the player in fulfillment of the validated receipt. */
  FulfilledItems?: ItemInstance[];
  /** Source of the payment price information for the recorded purchase transaction. A value of 'Request' indicates that the price specified in the request was used, whereas a value of 'Catalog' indicates that the real-money price of the catalog item matching the product ID in the validated receipt transaction and the currency specified in the request (defaulting to USD) was used. */
  RecordedPriceSource?: string;
  /** Currency used to purchase the items (ISO 4217 currency code). */
  RecordedTransactionCurrency?: string;
  /** Amount of the stated currency paid for the items, in centesimal units */
  RecordedTransactionTotal?: number;
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

/** Coupon codes can be created for any item, or set of items, in the catalog for the title. This operation causes the coupon to be consumed, and the specific items to be awarded to the user. Attempting to re-use an already consumed code, or a code which has not yet been created in the service, will result in an error. */
export interface RedeemCouponRequest {
  /** Catalog version of the coupon. If null, uses the default catalog */
  CatalogVersion?: string;
  /** Optional identifier for the Character that should receive the item. If null, item is added to the player */
  CharacterId?: string;
  /** Generated coupon code to redeem. */
  CouponCode: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
}

export interface RedeemCouponResult {
  /** Items granted to the player as a result of redeeming the coupon. */
  GrantedItems?: ItemInstance[];
}

export interface RefreshPSNAuthTokenRequest {
  /** Auth code returned by PSN OAuth system. */
  AuthCode: string;
  /** Id of the PSN issuer environment. If null, defaults to production environment. */
  IssuerId?: number;
  /** Redirect URI supplied to PSN when requesting an auth code */
  RedirectUri: string;
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

export interface RegionInfo {
  /** indicates whether the server specified is available in this region */
  Available: boolean;
  /** name of the region */
  Name?: string;
  /** url to ping to get roundtrip time */
  PingUrl?: string;
  /** unique identifier for the region */
  Region?: Region;
}

/** The steps to configure and send Push Notifications is described in the PlayFab tutorials, here: https://docs.microsoft.com/gaming/playfab/features/engagement/push-notifications/quickstart */
export interface RegisterForIOSPushNotificationRequest {
  /** Message to display when confirming push notification. */
  ConfirmationMessage?: string;
  /** Unique token generated by the Apple Push Notification service when the title registered to receive push notifications. */
  DeviceToken: string;
  /** If true, send a test push message immediately after sucessful registration. Defaults to false. */
  SendPushNotificationConfirmation?: boolean;
}

export interface RegisterForIOSPushNotificationResult {}

export interface RegisterPlayFabUserRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** An optional parameter for setting the display name for this title (3-25 characters). */
  DisplayName?: string;
  /** User email address attached to their account */
  Email?: string;
  /** Base64 encoded body that is encrypted with the Title's public RSA key (Enterprise Only). */
  EncryptedRequest?: string;
  /** Flags for which pieces of info to return for the user. */
  InfoRequestParameters?: GetPlayerCombinedInfoRequestParams;
  /** Password for the PlayFab account (6-100 characters) */
  Password?: string;
  /** Player secret that is used to verify API request signatures (Enterprise Only). */
  PlayerSecret?: string;
  /** An optional parameter that specifies whether both the username and email parameters are required. If true, both parameters are required; if false, the user must supply either the username or email parameter. The default value is true. */
  RequireBothUsernameAndEmail?: boolean;
  /** Unique identifier for the title, found in the Settings > Game Properties section of the PlayFab developer site when a title has been selected. */
  TitleId: string;
  /** PlayFab username for the account (3-20 characters) */
  Username?: string;
}

/** Each account must have a unique email address in the PlayFab service. Once created, the account may be associated with additional accounts (Steam, Facebook, Game Center, etc.), allowing for added social network lists and achievements systems. */
export interface RegisterPlayFabUserResult {
  /** If LoginTitlePlayerAccountEntity flag is set on the login request the title_player_account will also be logged in and returned. */
  EntityToken?: EntityTokenResponse;
  /** PlayFab unique identifier for this newly created account. */
  PlayFabId?: string;
  /** Unique token identifying the user and game at the server level, for the current session. */
  SessionTicket?: string;
  /** Settings specific to this user. */
  SettingsForUser?: UserSettings;
  /** PlayFab unique user name. */
  Username?: string;
}

/** This API removes an existing contact email from the player's profile. */
export interface RemoveContactEmailRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
}

export interface RemoveContactEmailResult {}

export interface RemoveFriendRequest {
  /** PlayFab identifier of the friend account which is to be removed. */
  FriendPlayFabId: string;
}

export interface RemoveFriendResult {}

export interface RemoveGenericIDRequest {
  /** Generic service identifier to be removed from the player. */
  GenericId: GenericServiceId;
}

export interface RemoveGenericIDResult {}

export interface RemoveSharedGroupMembersRequest {
  /** An array of unique PlayFab assigned ID of the user on whom the operation will be performed. */
  PlayFabIds: string[];
  /** Unique identifier for the shared group. */
  SharedGroupId: string;
}

export interface RemoveSharedGroupMembersResult {}

/** Report ad activity */
export interface ReportAdActivityRequest {
  /** Type of activity, may be Opened, Closed, Start or End */
  Activity: AdActivity;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Unique ID of the placement to report for */
  PlacementId: string;
  /** Unique ID of the reward the player was offered */
  RewardId: string;
}

/** Report ad activity response has no body */
export interface ReportAdActivityResult {}

export interface ReportPlayerClientRequest {
  /** Optional additional comment by reporting player. */
  Comment?: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Unique PlayFab identifier of the reported player. */
  ReporteeId: string;
}

/** Players are currently limited to five reports per day. Attempts by a single user account to submit reports beyond five will result in Updated being returned as false. */
export interface ReportPlayerClientResult {
  /** The number of remaining reports which may be filed today. */
  SubmissionsRemaining: number;
}

/** The title should obtain a refresh receipt via restoreCompletedTransactions in the SKPaymentQueue of the Apple StoreKit and pass that in to this call. The resultant receipt contains new receipt instances for all non-consumable goods previously purchased by the user. This API call iterates through every purchase in the receipt and restores the items if they still exist in the catalog and can be validated. */
export interface RestoreIOSPurchasesRequest {
  /** Catalog version of the restored items. If null, defaults to primary catalog. */
  CatalogVersion?: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Base64 encoded receipt data, passed back by the App Store as a result of a successful purchase. */
  ReceiptData: string;
}

/** Once verified, the valid items will be restored into the user's inventory. */
export interface RestoreIOSPurchasesResult {
  /** Fulfilled inventory items and recorded purchases in fulfillment of the validated receipt transactions. */
  Fulfillments?: PurchaseReceiptFulfillment[];
}

/** Details on which placement and reward to perform a grant on */
export interface RewardAdActivityRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Placement unique ID */
  PlacementId: string;
  /** Reward unique ID */
  RewardId: string;
}

/** Result for rewarding an ad activity */
export interface RewardAdActivityResult {
  /** PlayStream Event ID that was generated by this reward (all subsequent events are associated with this event identifier) */
  AdActivityEventId?: string;
  /** Debug results from the grants */
  DebugResults?: string[];
  /** Id of the placement the reward was for */
  PlacementId?: string;
  /** Name of the placement the reward was for */
  PlacementName?: string;
  /** If placement has viewing limits indicates how many views are left */
  PlacementViewsRemaining?: number;
  /** If placement has viewing limits indicates when they will next reset */
  PlacementViewsResetMinutes?: number;
  /** Reward results */
  RewardResults?: AdRewardResults;
}

export interface ScriptExecutionError {
  /** Error code, such as CloudScriptNotFound, JavascriptException, CloudScriptFunctionArgumentSizeExceeded, CloudScriptAPIRequestCountExceeded, CloudScriptAPIRequestError, or CloudScriptHTTPRequestError */
  Error?: string;
  /** Details about the error */
  Message?: string;
  /** Point during the execution of the script at which the error occurred, if any */
  StackTrace?: string;
}

/** If the account in question is a "temporary" account (for example, one that was created via a call to LoginFromIOSDeviceID), thisfunction will have no effect. Only PlayFab accounts which have valid email addresses will be able to receive a password reset email using this API. */
export interface SendAccountRecoveryEmailRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** User email address attached to their account */
  Email: string;
  /** The email template id of the account recovery email template to send. */
  EmailTemplateId?: string;
  /** Unique identifier for the title, found in the Settings > Game Properties section of the PlayFab developer site when a title has been selected. */
  TitleId: string;
}

export interface SendAccountRecoveryEmailResult {}

/** This operation is not additive. It will completely replace the tag list for the specified user. Please note that only users in the PlayFab friends list can be assigned tags. Attempting to set a tag on a friend only included in the friends list from a social site integration (such as Facebook or Steam) will return the AccountNotFound error. */
export interface SetFriendTagsRequest {
  /** PlayFab identifier of the friend account to which the tag(s) should be applied. */
  FriendPlayFabId: string;
  /** Array of tags to set on the friend account. */
  Tags: string[];
}

export interface SetFriendTagsResult {}

/** APIs that require signatures require that the player have a configured Player Secret Key that is used to sign all requests. Players that don't have a secret will be blocked from making API calls until it is configured. To create a signature header add a SHA256 hashed string containing UTF8 encoded JSON body as it will be sent to the server, the current time in UTC formatted to ISO 8601, and the players secret formatted as 'body.date.secret'. Place the resulting hash into the header X-PlayFab-Signature, along with a header X-PlayFab-Timestamp of the same UTC timestamp used in the signature. */
export interface SetPlayerSecretRequest {
  /** Base64 encoded body that is encrypted with the Title's public RSA key (Enterprise Only). */
  EncryptedRequest?: string;
  /** Player secret that is used to verify API request signatures (Enterprise Only). */
  PlayerSecret?: string;
}

export interface SetPlayerSecretResult {}

export interface SharedGroupDataRecord {
  /** Timestamp for when this data was last updated. */
  LastUpdated: string;
  /** Unique PlayFab identifier of the user to last update this value. */
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

/** This API must be enabled for use as an option in the game manager website. It is disabled by default. */
export interface StartGameRequest {
  /** version information for the build of the game server which is to be started */
  BuildVersion: string;
  /** character to use for stats based matching. Leave null to use account stats */
  CharacterId?: string;
  /** custom command line argument when starting game server process */
  CustomCommandLineData?: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** the title-defined game mode this server is to be running (defaults to 0 if there is only one mode) */
  GameMode: string;
  /** the region to associate this server with for match filtering */
  Region: Region;
  /** player statistic for others to use in finding this game. May be null for no stat-based matching */
  StatisticName?: string;
}

export interface StartGameResult {
  /** timestamp for when the server should expire, if applicable */
  Expires?: string;
  /** unique identifier for the lobby of the server started */
  LobbyID?: string;
  /** password required to log into the server */
  Password?: string;
  /** server IPV4 address */
  ServerIPV4Address?: string;
  /** server IPV6 address */
  ServerIPV6Address?: string;
  /** port on the server to be used for communication */
  ServerPort?: number;
  /** server public DNS name */
  ServerPublicDNSName?: string;
  /** unique identifier for the server */
  Ticket?: string;
}

/** This is the first step in the purchasing process. For security purposes, once the order (or "cart") has been created, additional inventory objects may no longer be added. In addition, inventory objects will be locked to the current prices, regardless of any subsequent changes at the catalog level which may occur during the next two steps. */
export interface StartPurchaseRequest {
  /** Catalog version for the items to be purchased. Defaults to most recent catalog. */
  CatalogVersion?: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Array of items to purchase. */
  Items: ItemPurchaseRequest[];
  /** Store through which to purchase items. If not set, prices will be pulled from the catalog itself. */
  StoreId?: string;
}

export interface StartPurchaseResult {
  /** Cart items to be purchased. */
  Contents?: CartItem[];
  /** Purchase order identifier. */
  OrderId?: string;
  /** Available methods by which the user can pay. */
  PaymentOptions?: PaymentOption[];
  /** Current virtual currency totals for the user. */
  VirtualCurrencyBalances?: Record<string, unknown>;
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

/** This API must be enabled for use as an option in the game manager website. It is disabled by default. */
export interface SubtractUserVirtualCurrencyRequest {
  /** Amount to be subtracted from the user balance of the specified virtual currency. */
  Amount: number;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
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
  /** News item text. */
  Body?: string;
  /** Unique identifier of news item. */
  NewsId?: string;
  /** Date and time when the news item was posted. */
  Timestamp: string;
  /** Title of the news item. */
  Title?: string;
}

export interface TradeInfo {
  /** Item instances from the accepting player that are used to fulfill the trade. If null, no one has accepted the trade. */
  AcceptedInventoryInstanceIds?: string[];
  /** The PlayFab ID of the player who accepted the trade. If null, no one has accepted the trade. */
  AcceptedPlayerId?: string;
  /** An optional list of players allowed to complete this trade. If null, anybody can complete the trade. */
  AllowedPlayerIds?: string[];
  /** If set, The UTC time when this trade was canceled. */
  CancelledAt?: string;
  /** If set, The UTC time when this trade was fulfilled. */
  FilledAt?: string;
  /** If set, The UTC time when this trade was made invalid. */
  InvalidatedAt?: string;
  /** The catalogItem Ids of the item instances being offered. */
  OfferedCatalogItemIds?: string[];
  /** The itemInstance Ids that are being offered. */
  OfferedInventoryInstanceIds?: string[];
  /** The PlayFabId for the offering player. */
  OfferingPlayerId?: string;
  /** The UTC time when this trade was created. */
  OpenedAt?: string;
  /** The catalogItem Ids requested in exchange. */
  RequestedCatalogItemIds?: string[];
  /** Describes the current state of this trade. */
  Status?: TradeStatus;
  /** The identifier for this trade. */
  TradeId?: string;
}

export enum TradeStatus {
  Invalid = "Invalid",
  Opening = "Opening",
  Open = "Open",
  Accepting = "Accepting",
  Accepted = "Accepted",
  Filled = "Filled",
  Cancelled = "Cancelled",
}

export enum TransactionStatus {
  CreateCart = "CreateCart",
  Init = "Init",
  Approved = "Approved",
  Succeeded = "Succeeded",
  FailedByProvider = "FailedByProvider",
  DisputePending = "DisputePending",
  RefundPending = "RefundPending",
  Refunded = "Refunded",
  RefundFailed = "RefundFailed",
  ChargedBack = "ChargedBack",
  FailedByUber = "FailedByUber",
  FailedByPlayFab = "FailedByPlayFab",
  Revoked = "Revoked",
  TradePending = "TradePending",
  Traded = "Traded",
  Upgraded = "Upgraded",
  StackPending = "StackPending",
  Stacked = "Stacked",
  Other = "Other",
  Failed = "Failed",
}

export interface TreatmentAssignment {
  /** List of the experiment variables. */
  Variables?: Variable[];
  /** List of the experiment variants. */
  Variants?: string[];
}

export interface TwitchPlayFabIdPair {
  /** Unique PlayFab identifier for a user, or null if no PlayFab account is linked to the Twitch identifier. */
  PlayFabId?: string;
  /** Unique Twitch identifier for a user. */
  TwitchId?: string;
}

export interface UnlinkAndroidDeviceIDRequest {
  /** Android device identifier for the user's device. If not specified, the most recently signed in Android Device ID will be used. */
  AndroidDeviceId?: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
}

export interface UnlinkAndroidDeviceIDResult {}

export interface UnlinkAppleRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
}

export interface UnlinkCustomIDRequest {
  /** Custom unique identifier for the user, generated by the title. If not specified, the most recently signed in Custom ID will be used. */
  CustomId?: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
}

export interface UnlinkCustomIDResult {}

export interface UnlinkFacebookAccountRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
}

export interface UnlinkFacebookAccountResult {}

export interface UnlinkFacebookInstantGamesIdRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Facebook Instant Games identifier for the user. If not specified, the most recently signed in ID will be used. */
  FacebookInstantGamesId?: string;
}

export interface UnlinkFacebookInstantGamesIdResult {}

export interface UnlinkGameCenterAccountRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
}

export interface UnlinkGameCenterAccountResult {}

export interface UnlinkGoogleAccountRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
}

export interface UnlinkGoogleAccountResult {}

export interface UnlinkIOSDeviceIDRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Vendor-specific iOS identifier for the user's device. If not specified, the most recently signed in iOS Device ID will be used. */
  DeviceId?: string;
}

export interface UnlinkIOSDeviceIDResult {}

export interface UnlinkKongregateAccountRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
}

export interface UnlinkKongregateAccountResult {}

export interface UnlinkNintendoServiceAccountRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
}

export interface UnlinkNintendoSwitchDeviceIdRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Nintendo Switch Device identifier for the user. If not specified, the most recently signed in device ID will be used. */
  NintendoSwitchDeviceId?: string;
}

export interface UnlinkNintendoSwitchDeviceIdResult {}

export interface UnlinkOpenIdConnectRequest {
  /** A name that identifies which configured OpenID Connect provider relationship to use. Maximum 100 characters. */
  ConnectionId: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
}

export interface UnlinkPSNAccountRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
}

export interface UnlinkPSNAccountResult {}

export interface UnlinkSteamAccountRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
}

export interface UnlinkSteamAccountResult {}

export interface UnlinkTwitchAccountRequest {
  /** Valid token issued by Twitch. Used to specify which twitch account to unlink from the profile. By default it uses the one that is present on the profile. */
  AccessToken?: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
}

export interface UnlinkTwitchAccountResult {}

export interface UnlinkXboxAccountRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
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
}

/** The items and vc found within the container. These will be added and stacked in the appropriate inventory. */
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
}

/** This function performs an additive update of the arbitrary strings containing the custom data for the character. In updating the custom data object, keys which already exist in the object will have their values overwritten, while keys with null values will be removed. New keys will be added, with the given values. No other key-value pairs will be changed apart from those specified in the call. */
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
}

export interface UpdateCharacterDataResult {
  /** Indicates the current version of the data that has been set. This is incremented with every set call for that type of data (read-only, internal, etc). This version can be provided in Get calls to find updated data. */
  DataVersion: number;
}

/** Enable this option with the 'Allow Client to Post Player Statistics' option in PlayFab GameManager for your title. However, this is not best practice, as this data will no longer be safely controlled by the server. This operation is additive. Character Statistics not currently defined will be added, while those already defined will be updated with the given values. All other user statistics will remain unchanged. Character statistics are used by the character-leaderboard apis, and accessible for custom game-logic. */
export interface UpdateCharacterStatisticsRequest {
  /** Unique PlayFab assigned ID for a specific character owned by a user */
  CharacterId: string;
  /** Statistics to be updated with the provided values, in the Key(string), Value(int) pattern. */
  CharacterStatistics?: Record<string, unknown>;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
}

export interface UpdateCharacterStatisticsResult {}

/** Enable this option with the 'Allow Client to Post Player Statistics' option in PlayFab GameManager for your title. However, this is not best practice, as this data will no longer be safely controlled by the server. This operation is additive. Statistics not currently defined will be added, while those already defined will be updated with the given values. All other user statistics will remain unchanged. Note that if the statistic is intended to have a reset period, the UpdatePlayerStatisticDefinition API call can be used to define that reset period. Once a statistic has been versioned (reset), the now-previous version can still be written to for up a short, pre-defined period (currently 10 seconds), using the Version parameter in this call. */
export interface UpdatePlayerStatisticsRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
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

/** This function performs an additive update of the arbitrary strings containing the custom data for the user. In updating the custom data object, keys which already exist in the object will have their values overwritten, while keys with null values will be removed. New keys will be added, with the given values. No other key-value pairs will be changed apart from those specified in the call. */
export interface UpdateUserDataRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Key-value pairs to be written to the custom data. Note that keys are trimmed of whitespace, are limited in size, and may not begin with a '!' character or be null. */
  Data?: Record<string, unknown>;
  /** Optional list of Data-keys to remove from UserData. Some SDKs cannot insert null-values into Data due to language constraints. Use this to delete the keys directly. */
  KeysToRemove?: string[];
  /** Permission to be applied to all user data keys written in this request. Defaults to "private" if not set. This is used for requests by one player for information about another player; those requests will only return Public keys. */
  Permission?: UserDataPermission;
}

export interface UpdateUserDataResult {
  /** Indicates the current version of the data that has been set. This is incremented with every set call for that type of data (read-only, internal, etc). This version can be provided in Get calls to find updated data. */
  DataVersion: number;
}

/** In addition to the PlayFab username, titles can make use of a DisplayName which is also a unique identifier, but specific to the title. This allows for unique names which more closely match the theme or genre of a title, for example. */
export interface UpdateUserTitleDisplayNameRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** New title display name for the user - must be between 3 and 25 characters. */
  DisplayName: string;
}

export interface UpdateUserTitleDisplayNameResult {
  /** Current title display name for the user (this will be the original display name if the rename attempt failed). */
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

export interface ValidateAmazonReceiptRequest {
  /** Catalog version of the fulfilled items. If null, defaults to the primary catalog. */
  CatalogVersion?: string;
  /** Currency used to pay for the purchase (ISO 4217 currency code). */
  CurrencyCode?: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Amount of the stated currency paid, in centesimal units. */
  PurchasePrice: number;
  /** ReceiptId returned by the Amazon App Store in-app purchase API */
  ReceiptId: string;
  /** AmazonId of the user making the purchase as returned by the Amazon App Store in-app purchase API */
  UserId: string;
}

/** Once verified, the catalog item matching the Amazon item name will be added to the user's inventory. */
export interface ValidateAmazonReceiptResult {
  /** Fulfilled inventory items and recorded purchases in fulfillment of the validated receipt transactions. */
  Fulfillments?: PurchaseReceiptFulfillment[];
}

/** The packageName and productId are defined in the GooglePlay store. The productId must match the ItemId of the inventory item in the PlayFab catalog for the title. This enables the PlayFab service to securely validate that the purchase is for the correct item, in order to prevent uses from passing valid receipts as being for more expensive items (passing a receipt for a 99-cent purchase as being for a $19.99 purchase, for example). Each receipt may be validated only once to avoid granting the same item over and over from a single purchase. */
export interface ValidateGooglePlayPurchaseRequest {
  /** Catalog version of the fulfilled items. If null, defaults to the primary catalog. */
  CatalogVersion?: string;
  /** Currency used to pay for the purchase (ISO 4217 currency code). */
  CurrencyCode?: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Amount of the stated currency paid, in centesimal units. */
  PurchasePrice?: number;
  /** Original JSON string returned by the Google Play IAB API. */
  ReceiptJson: string;
  /** Signature returned by the Google Play IAB API. */
  Signature: string;
}

/** Once verified, the catalog item (ItemId) matching the GooglePlay store item (productId) will be added to the user's inventory. */
export interface ValidateGooglePlayPurchaseResult {
  /** Fulfilled inventory items and recorded purchases in fulfillment of the validated receipt transactions. */
  Fulfillments?: PurchaseReceiptFulfillment[];
}

/** The CurrencyCode and PurchasePrice must match the price which was set up for the item in the Apple store. In addition, The ItemId of the inventory in the PlayFab Catalog must match the Product ID as it was set up in the Apple store. This enables the PlayFab service to securely validate that the purchase is for the correct item, in order to prevent uses from passing valid receipts as being for more expensive items (passing a receipt for a 99-cent purchase as being for a $19.99 purchase, for example). */
export interface ValidateIOSReceiptRequest {
  /** Catalog version of the fulfilled items. If null, defaults to the primary catalog. */
  CatalogVersion?: string;
  /** Currency used to pay for the purchase (ISO 4217 currency code). */
  CurrencyCode?: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Amount of the stated currency paid, in centesimal units. */
  PurchasePrice: number;
  /** Base64 encoded receipt data, passed back by the App Store as a result of a successful purchase. */
  ReceiptData: string;
}

/** Once verified, the catalog item matching the iTunes item name will be added to the user's inventory. */
export interface ValidateIOSReceiptResult {
  /** Fulfilled inventory items and recorded purchases in fulfillment of the validated receipt transactions. */
  Fulfillments?: PurchaseReceiptFulfillment[];
}

export interface ValidateWindowsReceiptRequest {
  /** Catalog version of the fulfilled items. If null, defaults to the primary catalog. */
  CatalogVersion?: string;
  /** Currency used to pay for the purchase (ISO 4217 currency code). */
  CurrencyCode: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Amount of the stated currency paid, in centesimal units. */
  PurchasePrice: number;
  /** XML Receipt returned by the Windows App Store in-app purchase API */
  Receipt: string;
}

/** Once verified, the catalog item matching the Product name will be added to the user's inventory. */
export interface ValidateWindowsReceiptResult {
  /** Fulfilled inventory items and recorded purchases in fulfillment of the validated receipt transactions. */
  Fulfillments?: PurchaseReceiptFulfillment[];
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

/** This API is designed to write a multitude of different client-defined events into PlayStream. It supports a flexible JSON schema, which allowsfor arbitrary key-value pairs to describe any character-based event. The created event will be locked to the authenticated title and player.  */
export interface WriteClientCharacterEventRequest {
  /** Custom event properties. Each property consists of a name (string) and a value (JSON object). */
  Body?: Record<string, unknown>;
  /** Unique PlayFab assigned ID for a specific character owned by a user */
  CharacterId: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** The name of the event, within the namespace scoped to the title. The naming convention is up to the caller, but it commonly follows the subject_verb_object pattern (e.g. player_logged_in). */
  EventName: string;
  /** The time (in UTC) associated with this event. The value defaults to the current time. */
  Timestamp?: string;
}

/** This API is designed to write a multitude of different event types into PlayStream. It supports a flexible JSON schema, which allowsfor arbitrary key-value pairs to describe any player-based event. The created event will be locked to the authenticated title and player.  */
export interface WriteClientPlayerEventRequest {
  /** Custom data properties associated with the event. Each property consists of a name (string) and a value (JSON object). */
  Body?: Record<string, unknown>;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** The name of the event, within the namespace scoped to the title. The naming convention is up to the caller, but it commonly follows the subject_verb_object pattern (e.g. player_logged_in). */
  EventName: string;
  /** The time (in UTC) associated with this event. The value defaults to the current time. */
  Timestamp?: string;
}

export interface WriteEventResponse {
  /** The unique identifier of the event. The values of this identifier consist of ASCII characters and are not constrained to any particular format. */
  EventId?: string;
}

/** This API is designed to write a multitude of different client-defined events into PlayStream. It supports a flexible JSON schema, which allowsfor arbitrary key-value pairs to describe any title-based event. The created event will be locked to the authenticated title.  */
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
 * Accepts an open trade (one that has not yet been accepted or cancelled), if the locally signed-in player is in the allowed player list for the trade, or it is open to all players. If the call is successful, the offered and accepted items will be swapped between the two players' inventories.
 * @param {AcceptTradeRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<AcceptTradeResponse>}
 */ 
export function AcceptTrade(
  request: AcceptTradeRequest,
  options: RequestOptions
): Promise<AcceptTradeResponse> {
  return dispatchRequest<AcceptTradeResponse>(
    "/Client/AcceptTrade",
    request,
    options
  );
}

/**
 * Adds the PlayFab user, based upon a match against a supplied unique identifier, to the friend list of the local user. At least one of FriendPlayFabId,FriendUsername,FriendEmail, or FriendTitleDisplayName should be initialized.
 * @param {AddFriendRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<AddFriendResult>}
 */ 
export function AddFriend(
  request: AddFriendRequest,
  options: RequestOptions
): Promise<AddFriendResult> {
  return dispatchRequest<AddFriendResult>(
    "/Client/AddFriend",
    request,
    options
  );
}

/**
 * Adds the specified generic service identifier to the player's PlayFab account. This is designed to allow for a PlayFab ID lookup of any arbitrary service identifier a title wants to add. This identifier should never be used as authentication credentials, as the intent is that it is easily accessible by other players.
 * @param {AddGenericIDRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<AddGenericIDResult>}
 */ 
export function AddGenericID(
  request: AddGenericIDRequest,
  options: RequestOptions
): Promise<AddGenericIDResult> {
  return dispatchRequest<AddGenericIDResult>(
    "/Client/AddGenericID",
    request,
    options
  );
}

/**
 * Adds or updates a contact email to the player's profile.
 * @param {AddOrUpdateContactEmailRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<AddOrUpdateContactEmailResult>}
 */ 
export function AddOrUpdateContactEmail(
  request: AddOrUpdateContactEmailRequest,
  options: RequestOptions
): Promise<AddOrUpdateContactEmailResult> {
  return dispatchRequest<AddOrUpdateContactEmailResult>(
    "/Client/AddOrUpdateContactEmail",
    request,
    options
  );
}

/**
 * Adds users to the set of those able to update both the shared data, as well as the set of users in the group. Only users in the group can add new members. Shared Groups are designed for sharing data between a very small number of players, please see our guide: https://docs.microsoft.com/gaming/playfab/features/social/groups/using-shared-group-data
 * @param {AddSharedGroupMembersRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<AddSharedGroupMembersResult>}
 */ 
export function AddSharedGroupMembers(
  request: AddSharedGroupMembersRequest,
  options: RequestOptions
): Promise<AddSharedGroupMembersResult> {
  return dispatchRequest<AddSharedGroupMembersResult>(
    "/Client/AddSharedGroupMembers",
    request,
    options
  );
}

/**
 * Adds playfab username/password auth to an existing account created via an anonymous auth method, e.g. automatic device ID login.
 * @param {AddUsernamePasswordRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<AddUsernamePasswordResult>}
 */ 
export function AddUsernamePassword(
  request: AddUsernamePasswordRequest,
  options: RequestOptions
): Promise<AddUsernamePasswordResult> {
  return dispatchRequest<AddUsernamePasswordResult>(
    "/Client/AddUsernamePassword",
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
    "/Client/AddUserVirtualCurrency",
    request,
    options
  );
}

/**
 * Registers the Android device to receive push notifications
 * @param {AndroidDevicePushNotificationRegistrationRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<AndroidDevicePushNotificationRegistrationResult>}
 */ 
export function AndroidDevicePushNotificationRegistration(
  request: AndroidDevicePushNotificationRegistrationRequest,
  options: RequestOptions
): Promise<AndroidDevicePushNotificationRegistrationResult> {
  return dispatchRequest<AndroidDevicePushNotificationRegistrationResult>(
    "/Client/AndroidDevicePushNotificationRegistration",
    request,
    options
  );
}

/**
 * Attributes an install for advertisment.
 * @param {AttributeInstallRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<AttributeInstallResult>}
 */ 
export function AttributeInstall(
  request: AttributeInstallRequest,
  options: RequestOptions
): Promise<AttributeInstallResult> {
  return dispatchRequest<AttributeInstallResult>(
    "/Client/AttributeInstall",
    request,
    options
  );
}

/**
 * Cancels an open trade (one that has not yet been accepted or cancelled). Note that only the player who created the trade can cancel it via this API call, to prevent griefing of the trade system (cancelling trades in order to prevent other players from accepting them, for trades that can be claimed by more than one player).
 * @param {CancelTradeRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<CancelTradeResponse>}
 */ 
export function CancelTrade(
  request: CancelTradeRequest,
  options: RequestOptions
): Promise<CancelTradeResponse> {
  return dispatchRequest<CancelTradeResponse>(
    "/Client/CancelTrade",
    request,
    options
  );
}

/**
 * Confirms with the payment provider that the purchase was approved (if applicable) and adjusts inventory and virtual currency balances as appropriate
 * @param {ConfirmPurchaseRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<ConfirmPurchaseResult>}
 */ 
export function ConfirmPurchase(
  request: ConfirmPurchaseRequest,
  options: RequestOptions
): Promise<ConfirmPurchaseResult> {
  return dispatchRequest<ConfirmPurchaseResult>(
    "/Client/ConfirmPurchase",
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
    "/Client/ConsumeItem",
    request,
    options
  );
}

/**
 * Grants the player's current entitlements from Microsoft Store's Collection API
 * @param {ConsumeMicrosoftStoreEntitlementsRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<ConsumeMicrosoftStoreEntitlementsResponse>}
 */ 
export function ConsumeMicrosoftStoreEntitlements(
  request: ConsumeMicrosoftStoreEntitlementsRequest,
  options: RequestOptions
): Promise<ConsumeMicrosoftStoreEntitlementsResponse> {
  return dispatchRequest<ConsumeMicrosoftStoreEntitlementsResponse>(
    "/Client/ConsumeMicrosoftStoreEntitlements",
    request,
    options
  );
}

/**
 * Checks for any new PS5 entitlements. If any are found, they are consumed (if they're consumables) and added as PlayFab items
 * @param {ConsumePS5EntitlementsRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<ConsumePS5EntitlementsResult>}
 */ 
export function ConsumePS5Entitlements(
  request: ConsumePS5EntitlementsRequest,
  options: RequestOptions
): Promise<ConsumePS5EntitlementsResult> {
  return dispatchRequest<ConsumePS5EntitlementsResult>(
    "/Client/ConsumePS5Entitlements",
    request,
    options
  );
}

/**
 * Checks for any new consumable entitlements. If any are found, they are consumed and added as PlayFab items
 * @param {ConsumePSNEntitlementsRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<ConsumePSNEntitlementsResult>}
 */ 
export function ConsumePSNEntitlements(
  request: ConsumePSNEntitlementsRequest,
  options: RequestOptions
): Promise<ConsumePSNEntitlementsResult> {
  return dispatchRequest<ConsumePSNEntitlementsResult>(
    "/Client/ConsumePSNEntitlements",
    request,
    options
  );
}

/**
 * Grants the player's current entitlements from Xbox Live, consuming all availble items in Xbox and granting them to the player's PlayFab inventory. This call is idempotent and will not grant previously granted items to the player.
 * @param {ConsumeXboxEntitlementsRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<ConsumeXboxEntitlementsResult>}
 */ 
export function ConsumeXboxEntitlements(
  request: ConsumeXboxEntitlementsRequest,
  options: RequestOptions
): Promise<ConsumeXboxEntitlementsResult> {
  return dispatchRequest<ConsumeXboxEntitlementsResult>(
    "/Client/ConsumeXboxEntitlements",
    request,
    options
  );
}

/**
 * Requests the creation of a shared group object, containing key/value pairs which may be updated by all members of the group. Upon creation, the current user will be the only member of the group. Shared Groups are designed for sharing data between a very small number of players, please see our guide: https://docs.microsoft.com/gaming/playfab/features/social/groups/using-shared-group-data
 * @param {CreateSharedGroupRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<CreateSharedGroupResult>}
 */ 
export function CreateSharedGroup(
  request: CreateSharedGroupRequest,
  options: RequestOptions
): Promise<CreateSharedGroupResult> {
  return dispatchRequest<CreateSharedGroupResult>(
    "/Client/CreateSharedGroup",
    request,
    options
  );
}

/**
 * Executes a CloudScript function, with the 'currentPlayerId' set to the PlayFab ID of the authenticated player.
 * @param {ExecuteCloudScriptRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<ExecuteCloudScriptResult>}
 */ 
export function ExecuteCloudScript(
  request: ExecuteCloudScriptRequest,
  options: RequestOptions
): Promise<ExecuteCloudScriptResult> {
  return dispatchRequest<ExecuteCloudScriptResult>(
    "/Client/ExecuteCloudScript",
    request,
    options
  );
}

/**
 * Retrieves the user's PlayFab account details
 * @param {GetAccountInfoRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetAccountInfoResult>}
 */ 
export function GetAccountInfo(
  request: GetAccountInfoRequest,
  options: RequestOptions
): Promise<GetAccountInfoResult> {
  return dispatchRequest<GetAccountInfoResult>(
    "/Client/GetAccountInfo",
    request,
    options
  );
}

/**
 * Returns a list of ad placements and a reward for each
 * @param {GetAdPlacementsRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetAdPlacementsResult>}
 */ 
export function GetAdPlacements(
  request: GetAdPlacementsRequest,
  options: RequestOptions
): Promise<GetAdPlacementsResult> {
  return dispatchRequest<GetAdPlacementsResult>(
    "/Client/GetAdPlacements",
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
    "/Client/GetAllUsersCharacters",
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
    "/Client/GetCatalogItems",
    request,
    options
  );
}

/**
 * Retrieves the title-specific custom data for the character which is readable and writable by the client
 * @param {GetCharacterDataRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetCharacterDataResult>}
 */ 
export function GetCharacterData(
  request: GetCharacterDataRequest,
  options: RequestOptions
): Promise<GetCharacterDataResult> {
  return dispatchRequest<GetCharacterDataResult>(
    "/Client/GetCharacterData",
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
    "/Client/GetCharacterInventory",
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
    "/Client/GetCharacterLeaderboard",
    request,
    options
  );
}

/**
 * Retrieves the title-specific custom data for the character which can only be read by the client
 * @param {GetCharacterDataRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetCharacterDataResult>}
 */ 
export function GetCharacterReadOnlyData(
  request: GetCharacterDataRequest,
  options: RequestOptions
): Promise<GetCharacterDataResult> {
  return dispatchRequest<GetCharacterDataResult>(
    "/Client/GetCharacterReadOnlyData",
    request,
    options
  );
}

/**
 * Retrieves the details of all title-specific statistics for the user
 * @param {GetCharacterStatisticsRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetCharacterStatisticsResult>}
 */ 
export function GetCharacterStatistics(
  request: GetCharacterStatisticsRequest,
  options: RequestOptions
): Promise<GetCharacterStatisticsResult> {
  return dispatchRequest<GetCharacterStatisticsResult>(
    "/Client/GetCharacterStatistics",
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
    "/Client/GetContentDownloadUrl",
    request,
    options
  );
}

/**
 * Get details about all current running game servers matching the given parameters.
 * @param {CurrentGamesRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<CurrentGamesResult>}
 */ 
export function GetCurrentGames(
  request: CurrentGamesRequest,
  options: RequestOptions
): Promise<CurrentGamesResult> {
  return dispatchRequest<CurrentGamesResult>(
    "/Client/GetCurrentGames",
    request,
    options
  );
}

/**
 * Retrieves a list of ranked friends of the current player for the given statistic, starting from the indicated point in the leaderboard
 * @param {GetFriendLeaderboardRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetLeaderboardResult>}
 */ 
export function GetFriendLeaderboard(
  request: GetFriendLeaderboardRequest,
  options: RequestOptions
): Promise<GetLeaderboardResult> {
  return dispatchRequest<GetLeaderboardResult>(
    "/Client/GetFriendLeaderboard",
    request,
    options
  );
}

/**
 * Retrieves a list of ranked friends of the current player for the given statistic, centered on the requested PlayFab user. If PlayFabId is empty or null will return currently logged in user.
 * @param {GetFriendLeaderboardAroundPlayerRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetFriendLeaderboardAroundPlayerResult>}
 */ 
export function GetFriendLeaderboardAroundPlayer(
  request: GetFriendLeaderboardAroundPlayerRequest,
  options: RequestOptions
): Promise<GetFriendLeaderboardAroundPlayerResult> {
  return dispatchRequest<GetFriendLeaderboardAroundPlayerResult>(
    "/Client/GetFriendLeaderboardAroundPlayer",
    request,
    options
  );
}

/**
 * Retrieves the current friend list for the local user, constrained to users who have PlayFab accounts. Friends from linked accounts (Facebook, Steam) are also included. You may optionally exclude some linked services' friends.
 * @param {GetFriendsListRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetFriendsListResult>}
 */ 
export function GetFriendsList(
  request: GetFriendsListRequest,
  options: RequestOptions
): Promise<GetFriendsListResult> {
  return dispatchRequest<GetFriendsListResult>(
    "/Client/GetFriendsList",
    request,
    options
  );
}

/**
 *  Get details about the regions hosting game servers matching the given parameters.
 * @param {GameServerRegionsRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GameServerRegionsResult>}
 */ 
export function GetGameServerRegions(
  request: GameServerRegionsRequest,
  options: RequestOptions
): Promise<GameServerRegionsResult> {
  return dispatchRequest<GameServerRegionsResult>(
    "/Client/GetGameServerRegions",
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
    "/Client/GetLeaderboard",
    request,
    options
  );
}

/**
 * Retrieves a list of ranked characters for the given statistic, centered on the requested Character ID
 * @param {GetLeaderboardAroundCharacterRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetLeaderboardAroundCharacterResult>}
 */ 
export function GetLeaderboardAroundCharacter(
  request: GetLeaderboardAroundCharacterRequest,
  options: RequestOptions
): Promise<GetLeaderboardAroundCharacterResult> {
  return dispatchRequest<GetLeaderboardAroundCharacterResult>(
    "/Client/GetLeaderboardAroundCharacter",
    request,
    options
  );
}

/**
 * Retrieves a list of ranked users for the given statistic, centered on the requested player. If PlayFabId is empty or null will return currently logged in user.
 * @param {GetLeaderboardAroundPlayerRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetLeaderboardAroundPlayerResult>}
 */ 
export function GetLeaderboardAroundPlayer(
  request: GetLeaderboardAroundPlayerRequest,
  options: RequestOptions
): Promise<GetLeaderboardAroundPlayerResult> {
  return dispatchRequest<GetLeaderboardAroundPlayerResult>(
    "/Client/GetLeaderboardAroundPlayer",
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
    "/Client/GetLeaderboardForUserCharacters",
    request,
    options
  );
}

/**
 * For payments flows where the provider requires playfab (the fulfiller) to initiate the transaction, but the client completes the rest of the flow. In the Xsolla case, the token returned here will be passed to Xsolla by the client to create a cart. Poll GetPurchase using the returned OrderId once you've completed the payment.
 * @param {GetPaymentTokenRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetPaymentTokenResult>}
 */ 
export function GetPaymentToken(
  request: GetPaymentTokenRequest,
  options: RequestOptions
): Promise<GetPaymentTokenResult> {
  return dispatchRequest<GetPaymentTokenResult>(
    "/Client/GetPaymentToken",
    request,
    options
  );
}

/**
 * Gets a Photon custom authentication token that can be used to securely join the player into a Photon room. See https://docs.microsoft.com/gaming/playfab/features/multiplayer/photon/quickstart for more details.
 * @param {GetPhotonAuthenticationTokenRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetPhotonAuthenticationTokenResult>}
 */ 
export function GetPhotonAuthenticationToken(
  request: GetPhotonAuthenticationTokenRequest,
  options: RequestOptions
): Promise<GetPhotonAuthenticationTokenResult> {
  return dispatchRequest<GetPhotonAuthenticationTokenResult>(
    "/Client/GetPhotonAuthenticationToken",
    request,
    options
  );
}

/**
 * Retrieves all of the user's different kinds of info.
 * @param {GetPlayerCombinedInfoRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetPlayerCombinedInfoResult>}
 */ 
export function GetPlayerCombinedInfo(
  request: GetPlayerCombinedInfoRequest,
  options: RequestOptions
): Promise<GetPlayerCombinedInfoResult> {
  return dispatchRequest<GetPlayerCombinedInfoResult>(
    "/Client/GetPlayerCombinedInfo",
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
    "/Client/GetPlayerProfile",
    request,
    options
  );
}

/**
 * List all segments that a player currently belongs to at this moment in time.
 * @param {GetPlayerSegmentsRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetPlayerSegmentsResult>}
 */ 
export function GetPlayerSegments(
  request: GetPlayerSegmentsRequest,
  options: RequestOptions
): Promise<GetPlayerSegmentsResult> {
  return dispatchRequest<GetPlayerSegmentsResult>(
    "/Client/GetPlayerSegments",
    request,
    options
  );
}

/**
 * Retrieves the indicated statistics (current version and values for all statistics, if none are specified), for the local player.
 * @param {GetPlayerStatisticsRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetPlayerStatisticsResult>}
 */ 
export function GetPlayerStatistics(
  request: GetPlayerStatisticsRequest,
  options: RequestOptions
): Promise<GetPlayerStatisticsResult> {
  return dispatchRequest<GetPlayerStatisticsResult>(
    "/Client/GetPlayerStatistics",
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
    "/Client/GetPlayerStatisticVersions",
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
    "/Client/GetPlayerTags",
    request,
    options
  );
}

/**
 * Gets all trades the player has either opened or accepted, optionally filtered by trade status.
 * @param {GetPlayerTradesRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetPlayerTradesResponse>}
 */ 
export function GetPlayerTrades(
  request: GetPlayerTradesRequest,
  options: RequestOptions
): Promise<GetPlayerTradesResponse> {
  return dispatchRequest<GetPlayerTradesResponse>(
    "/Client/GetPlayerTrades",
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
    "/Client/GetPlayFabIDsFromFacebookIDs",
    request,
    options
  );
}

/**
 * Retrieves the unique PlayFab identifiers for the given set of Facebook Instant Game identifiers.
 * @param {GetPlayFabIDsFromFacebookInstantGamesIdsRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetPlayFabIDsFromFacebookInstantGamesIdsResult>}
 */ 
export function GetPlayFabIDsFromFacebookInstantGamesIds(
  request: GetPlayFabIDsFromFacebookInstantGamesIdsRequest,
  options: RequestOptions
): Promise<GetPlayFabIDsFromFacebookInstantGamesIdsResult> {
  return dispatchRequest<GetPlayFabIDsFromFacebookInstantGamesIdsResult>(
    "/Client/GetPlayFabIDsFromFacebookInstantGamesIds",
    request,
    options
  );
}

/**
 * Retrieves the unique PlayFab identifiers for the given set of Game Center identifiers (referenced in the Game Center Programming Guide as the Player Identifier).
 * @param {GetPlayFabIDsFromGameCenterIDsRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetPlayFabIDsFromGameCenterIDsResult>}
 */ 
export function GetPlayFabIDsFromGameCenterIDs(
  request: GetPlayFabIDsFromGameCenterIDsRequest,
  options: RequestOptions
): Promise<GetPlayFabIDsFromGameCenterIDsResult> {
  return dispatchRequest<GetPlayFabIDsFromGameCenterIDsResult>(
    "/Client/GetPlayFabIDsFromGameCenterIDs",
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
    "/Client/GetPlayFabIDsFromGenericIDs",
    request,
    options
  );
}

/**
 * Retrieves the unique PlayFab identifiers for the given set of Google identifiers. The Google identifiers are the IDs for the user accounts, available as "id" in the Google+ People API calls.
 * @param {GetPlayFabIDsFromGoogleIDsRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetPlayFabIDsFromGoogleIDsResult>}
 */ 
export function GetPlayFabIDsFromGoogleIDs(
  request: GetPlayFabIDsFromGoogleIDsRequest,
  options: RequestOptions
): Promise<GetPlayFabIDsFromGoogleIDsResult> {
  return dispatchRequest<GetPlayFabIDsFromGoogleIDsResult>(
    "/Client/GetPlayFabIDsFromGoogleIDs",
    request,
    options
  );
}

/**
 * Retrieves the unique PlayFab identifiers for the given set of Kongregate identifiers. The Kongregate identifiers are the IDs for the user accounts, available as "user_id" from the Kongregate API methods(ex: http://developers.kongregate.com/docs/client/getUserId).
 * @param {GetPlayFabIDsFromKongregateIDsRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetPlayFabIDsFromKongregateIDsResult>}
 */ 
export function GetPlayFabIDsFromKongregateIDs(
  request: GetPlayFabIDsFromKongregateIDsRequest,
  options: RequestOptions
): Promise<GetPlayFabIDsFromKongregateIDsResult> {
  return dispatchRequest<GetPlayFabIDsFromKongregateIDsResult>(
    "/Client/GetPlayFabIDsFromKongregateIDs",
    request,
    options
  );
}

/**
 * Retrieves the unique PlayFab identifiers for the given set of Nintendo Switch identifiers.
 * @param {GetPlayFabIDsFromNintendoSwitchDeviceIdsRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetPlayFabIDsFromNintendoSwitchDeviceIdsResult>}
 */ 
export function GetPlayFabIDsFromNintendoSwitchDeviceIds(
  request: GetPlayFabIDsFromNintendoSwitchDeviceIdsRequest,
  options: RequestOptions
): Promise<GetPlayFabIDsFromNintendoSwitchDeviceIdsResult> {
  return dispatchRequest<GetPlayFabIDsFromNintendoSwitchDeviceIdsResult>(
    "/Client/GetPlayFabIDsFromNintendoSwitchDeviceIds",
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
    "/Client/GetPlayFabIDsFromPSNAccountIDs",
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
    "/Client/GetPlayFabIDsFromSteamIDs",
    request,
    options
  );
}

/**
 * Retrieves the unique PlayFab identifiers for the given set of Twitch identifiers. The Twitch identifiers are the IDs for the user accounts, available as "_id" from the Twitch API methods (ex: https://github.com/justintv/Twitch-API/blob/master/v3_resources/users.md#get-usersuser).
 * @param {GetPlayFabIDsFromTwitchIDsRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetPlayFabIDsFromTwitchIDsResult>}
 */ 
export function GetPlayFabIDsFromTwitchIDs(
  request: GetPlayFabIDsFromTwitchIDsRequest,
  options: RequestOptions
): Promise<GetPlayFabIDsFromTwitchIDsResult> {
  return dispatchRequest<GetPlayFabIDsFromTwitchIDsResult>(
    "/Client/GetPlayFabIDsFromTwitchIDs",
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
    "/Client/GetPlayFabIDsFromXboxLiveIDs",
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
    "/Client/GetPublisherData",
    request,
    options
  );
}

/**
 * Retrieves a purchase along with its current PlayFab status. Returns inventory items from the purchase that are still active.
 * @param {GetPurchaseRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetPurchaseResult>}
 */ 
export function GetPurchase(
  request: GetPurchaseRequest,
  options: RequestOptions
): Promise<GetPurchaseResult> {
  return dispatchRequest<GetPurchaseResult>(
    "/Client/GetPurchase",
    request,
    options
  );
}

/**
 * Retrieves data stored in a shared group object, as well as the list of members in the group. Non-members of the group may use this to retrieve group data, including membership, but they will not receive data for keys marked as private. Shared Groups are designed for sharing data between a very small number of players, please see our guide: https://docs.microsoft.com/gaming/playfab/features/social/groups/using-shared-group-data
 * @param {GetSharedGroupDataRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetSharedGroupDataResult>}
 */ 
export function GetSharedGroupData(
  request: GetSharedGroupDataRequest,
  options: RequestOptions
): Promise<GetSharedGroupDataResult> {
  return dispatchRequest<GetSharedGroupDataResult>(
    "/Client/GetSharedGroupData",
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
    "/Client/GetStoreItems",
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
    "/Client/GetTime",
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
    "/Client/GetTitleData",
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
    "/Client/GetTitleNews",
    request,
    options
  );
}

/**
 * Returns the title's base 64 encoded RSA CSP blob.
 * @param {GetTitlePublicKeyRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetTitlePublicKeyResult>}
 */ 
export function GetTitlePublicKey(
  request: GetTitlePublicKeyRequest,
  options: RequestOptions
): Promise<GetTitlePublicKeyResult> {
  return dispatchRequest<GetTitlePublicKeyResult>(
    "/Client/GetTitlePublicKey",
    request,
    options
  );
}

/**
 * Gets the current status of an existing trade.
 * @param {GetTradeStatusRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetTradeStatusResponse>}
 */ 
export function GetTradeStatus(
  request: GetTradeStatusRequest,
  options: RequestOptions
): Promise<GetTradeStatusResponse> {
  return dispatchRequest<GetTradeStatusResponse>(
    "/Client/GetTradeStatus",
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
    "/Client/GetUserData",
    request,
    options
  );
}

/**
 * Retrieves the user's current inventory of virtual goods
 * @param {GetUserInventoryRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetUserInventoryResult>}
 */ 
export function GetUserInventory(
  request: GetUserInventoryRequest,
  options: RequestOptions
): Promise<GetUserInventoryResult> {
  return dispatchRequest<GetUserInventoryResult>(
    "/Client/GetUserInventory",
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
    "/Client/GetUserPublisherData",
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
    "/Client/GetUserPublisherReadOnlyData",
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
    "/Client/GetUserReadOnlyData",
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
    "/Client/GrantCharacterToUser",
    request,
    options
  );
}

/**
 * Links the Android device identifier to the user's PlayFab account
 * @param {LinkAndroidDeviceIDRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<LinkAndroidDeviceIDResult>}
 */ 
export function LinkAndroidDeviceID(
  request: LinkAndroidDeviceIDRequest,
  options: RequestOptions
): Promise<LinkAndroidDeviceIDResult> {
  return dispatchRequest<LinkAndroidDeviceIDResult>(
    "/Client/LinkAndroidDeviceID",
    request,
    options
  );
}

/**
 * Links the Apple account associated with the token to the user's PlayFab account.
 * @param {LinkAppleRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<EmptyResult>}
 */ 
export function LinkApple(
  request: LinkAppleRequest,
  options: RequestOptions
): Promise<EmptyResult> {
  return dispatchRequest<EmptyResult>(
    "/Client/LinkApple",
    request,
    options
  );
}

/**
 * Links the custom identifier, generated by the title, to the user's PlayFab account
 * @param {LinkCustomIDRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<LinkCustomIDResult>}
 */ 
export function LinkCustomID(
  request: LinkCustomIDRequest,
  options: RequestOptions
): Promise<LinkCustomIDResult> {
  return dispatchRequest<LinkCustomIDResult>(
    "/Client/LinkCustomID",
    request,
    options
  );
}

/**
 * Links the Facebook account associated with the provided Facebook access token to the user's PlayFab account
 * @param {LinkFacebookAccountRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<LinkFacebookAccountResult>}
 */ 
export function LinkFacebookAccount(
  request: LinkFacebookAccountRequest,
  options: RequestOptions
): Promise<LinkFacebookAccountResult> {
  return dispatchRequest<LinkFacebookAccountResult>(
    "/Client/LinkFacebookAccount",
    request,
    options
  );
}

/**
 * Links the Facebook Instant Games Id to the user's PlayFab account
 * @param {LinkFacebookInstantGamesIdRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<LinkFacebookInstantGamesIdResult>}
 */ 
export function LinkFacebookInstantGamesId(
  request: LinkFacebookInstantGamesIdRequest,
  options: RequestOptions
): Promise<LinkFacebookInstantGamesIdResult> {
  return dispatchRequest<LinkFacebookInstantGamesIdResult>(
    "/Client/LinkFacebookInstantGamesId",
    request,
    options
  );
}

/**
 * Links the Game Center account associated with the provided Game Center ID to the user's PlayFab account. Logging in with a Game Center ID is insecure if you do not include the optional PublicKeyUrl, Salt, Signature, and Timestamp parameters in this request. It is recommended you require these parameters on all Game Center calls by going to the Apple Add-ons page in the PlayFab Game Manager and enabling the 'Require secure authentication only for this app' option.
 * @param {LinkGameCenterAccountRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<LinkGameCenterAccountResult>}
 */ 
export function LinkGameCenterAccount(
  request: LinkGameCenterAccountRequest,
  options: RequestOptions
): Promise<LinkGameCenterAccountResult> {
  return dispatchRequest<LinkGameCenterAccountResult>(
    "/Client/LinkGameCenterAccount",
    request,
    options
  );
}

/**
 * Links the currently signed-in user account to their Google account, using their Google account credentials
 * @param {LinkGoogleAccountRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<LinkGoogleAccountResult>}
 */ 
export function LinkGoogleAccount(
  request: LinkGoogleAccountRequest,
  options: RequestOptions
): Promise<LinkGoogleAccountResult> {
  return dispatchRequest<LinkGoogleAccountResult>(
    "/Client/LinkGoogleAccount",
    request,
    options
  );
}

/**
 * Links the vendor-specific iOS device identifier to the user's PlayFab account
 * @param {LinkIOSDeviceIDRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<LinkIOSDeviceIDResult>}
 */ 
export function LinkIOSDeviceID(
  request: LinkIOSDeviceIDRequest,
  options: RequestOptions
): Promise<LinkIOSDeviceIDResult> {
  return dispatchRequest<LinkIOSDeviceIDResult>(
    "/Client/LinkIOSDeviceID",
    request,
    options
  );
}

/**
 * Links the Kongregate identifier to the user's PlayFab account
 * @param {LinkKongregateAccountRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<LinkKongregateAccountResult>}
 */ 
export function LinkKongregate(
  request: LinkKongregateAccountRequest,
  options: RequestOptions
): Promise<LinkKongregateAccountResult> {
  return dispatchRequest<LinkKongregateAccountResult>(
    "/Client/LinkKongregate",
    request,
    options
  );
}

/**
 * Links the Nintendo account associated with the token to the user's PlayFab account.
 * @param {LinkNintendoServiceAccountRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<EmptyResult>}
 */ 
export function LinkNintendoServiceAccount(
  request: LinkNintendoServiceAccountRequest,
  options: RequestOptions
): Promise<EmptyResult> {
  return dispatchRequest<EmptyResult>(
    "/Client/LinkNintendoServiceAccount",
    request,
    options
  );
}

/**
 * Links the NintendoSwitchDeviceId to the user's PlayFab account
 * @param {LinkNintendoSwitchDeviceIdRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<LinkNintendoSwitchDeviceIdResult>}
 */ 
export function LinkNintendoSwitchDeviceId(
  request: LinkNintendoSwitchDeviceIdRequest,
  options: RequestOptions
): Promise<LinkNintendoSwitchDeviceIdResult> {
  return dispatchRequest<LinkNintendoSwitchDeviceIdResult>(
    "/Client/LinkNintendoSwitchDeviceId",
    request,
    options
  );
}

/**
 * Links an OpenID Connect account to a user's PlayFab account, based on an existing relationship between a title and an Open ID Connect provider and the OpenId Connect JWT from that provider.
 * @param {LinkOpenIdConnectRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<EmptyResult>}
 */ 
export function LinkOpenIdConnect(
  request: LinkOpenIdConnectRequest,
  options: RequestOptions
): Promise<EmptyResult> {
  return dispatchRequest<EmptyResult>(
    "/Client/LinkOpenIdConnect",
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
    "/Client/LinkPSNAccount",
    request,
    options
  );
}

/**
 * Links the Steam account associated with the provided Steam authentication ticket to the user's PlayFab account
 * @param {LinkSteamAccountRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<LinkSteamAccountResult>}
 */ 
export function LinkSteamAccount(
  request: LinkSteamAccountRequest,
  options: RequestOptions
): Promise<LinkSteamAccountResult> {
  return dispatchRequest<LinkSteamAccountResult>(
    "/Client/LinkSteamAccount",
    request,
    options
  );
}

/**
 * Links the Twitch account associated with the token to the user's PlayFab account.
 * @param {LinkTwitchAccountRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<LinkTwitchAccountResult>}
 */ 
export function LinkTwitch(
  request: LinkTwitchAccountRequest,
  options: RequestOptions
): Promise<LinkTwitchAccountResult> {
  return dispatchRequest<LinkTwitchAccountResult>(
    "/Client/LinkTwitch",
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
    "/Client/LinkXboxAccount",
    request,
    options
  );
}

/**
 * Signs the user in using the Android device identifier, returning a session identifier that can subsequently be used for API calls which require an authenticated user
 * @param {LoginWithAndroidDeviceIDRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<LoginResult>}
 */ 
export function LoginWithAndroidDeviceID(
  request: LoginWithAndroidDeviceIDRequest,
  options: RequestOptions
): Promise<LoginResult> {
  return dispatchRequest<LoginResult>(
    "/Client/LoginWithAndroidDeviceID",
    request,
    options
  );
}

/**
 * Signs in the user with a Sign in with Apple identity token.
 * @param {LoginWithAppleRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<LoginResult>}
 */ 
export function LoginWithApple(
  request: LoginWithAppleRequest,
  options: RequestOptions
): Promise<LoginResult> {
  return dispatchRequest<LoginResult>(
    "/Client/LoginWithApple",
    request,
    options
  );
}

/**
 * Signs the user in using a custom unique identifier generated by the title, returning a session identifier that can subsequently be used for API calls which require an authenticated user
 * @param {LoginWithCustomIDRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<LoginResult>}
 */ 
export function LoginWithCustomID(
  request: LoginWithCustomIDRequest,
  options: RequestOptions
): Promise<LoginResult> {
  return dispatchRequest<LoginResult>(
    "/Client/LoginWithCustomID",
    request,
    options
  );
}

/**
 * Signs the user into the PlayFab account, returning a session identifier that can subsequently be used for API calls which require an authenticated user. Unlike most other login API calls, LoginWithEmailAddress does not permit the creation of new accounts via the CreateAccountFlag. Email addresses may be used to create accounts via RegisterPlayFabUser.
 * @param {LoginWithEmailAddressRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<LoginResult>}
 */ 
export function LoginWithEmailAddress(
  request: LoginWithEmailAddressRequest,
  options: RequestOptions
): Promise<LoginResult> {
  return dispatchRequest<LoginResult>(
    "/Client/LoginWithEmailAddress",
    request,
    options
  );
}

/**
 * Signs the user in using a Facebook access token, returning a session identifier that can subsequently be used for API calls which require an authenticated user
 * @param {LoginWithFacebookRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<LoginResult>}
 */ 
export function LoginWithFacebook(
  request: LoginWithFacebookRequest,
  options: RequestOptions
): Promise<LoginResult> {
  return dispatchRequest<LoginResult>(
    "/Client/LoginWithFacebook",
    request,
    options
  );
}

/**
 * Signs the user in using a Facebook Instant Games ID, returning a session identifier that can subsequently be used for API calls which require an authenticated user. Requires Facebook Instant Games to be configured.
 * @param {LoginWithFacebookInstantGamesIdRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<LoginResult>}
 */ 
export function LoginWithFacebookInstantGamesId(
  request: LoginWithFacebookInstantGamesIdRequest,
  options: RequestOptions
): Promise<LoginResult> {
  return dispatchRequest<LoginResult>(
    "/Client/LoginWithFacebookInstantGamesId",
    request,
    options
  );
}

/**
 * Signs the user in using an iOS Game Center player identifier, returning a session identifier that can subsequently be used for API calls which require an authenticated user. Logging in with a Game Center ID is insecure if you do not include the optional PublicKeyUrl, Salt, Signature, and Timestamp parameters in this request. It is recommended you require these parameters on all Game Center calls by going to the Apple Add-ons page in the PlayFab Game Manager and enabling the 'Require secure authentication only for this app' option.
 * @param {LoginWithGameCenterRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<LoginResult>}
 */ 
export function LoginWithGameCenter(
  request: LoginWithGameCenterRequest,
  options: RequestOptions
): Promise<LoginResult> {
  return dispatchRequest<LoginResult>(
    "/Client/LoginWithGameCenter",
    request,
    options
  );
}

/**
 * Signs the user in using their Google account credentials
 * @param {LoginWithGoogleAccountRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<LoginResult>}
 */ 
export function LoginWithGoogleAccount(
  request: LoginWithGoogleAccountRequest,
  options: RequestOptions
): Promise<LoginResult> {
  return dispatchRequest<LoginResult>(
    "/Client/LoginWithGoogleAccount",
    request,
    options
  );
}

/**
 * Signs the user in using the vendor-specific iOS device identifier, returning a session identifier that can subsequently be used for API calls which require an authenticated user
 * @param {LoginWithIOSDeviceIDRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<LoginResult>}
 */ 
export function LoginWithIOSDeviceID(
  request: LoginWithIOSDeviceIDRequest,
  options: RequestOptions
): Promise<LoginResult> {
  return dispatchRequest<LoginResult>(
    "/Client/LoginWithIOSDeviceID",
    request,
    options
  );
}

/**
 * Signs the user in using a Kongregate player account.
 * @param {LoginWithKongregateRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<LoginResult>}
 */ 
export function LoginWithKongregate(
  request: LoginWithKongregateRequest,
  options: RequestOptions
): Promise<LoginResult> {
  return dispatchRequest<LoginResult>(
    "/Client/LoginWithKongregate",
    request,
    options
  );
}

/**
 * Signs in the user with a Nintendo service account token.
 * @param {LoginWithNintendoServiceAccountRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<LoginResult>}
 */ 
export function LoginWithNintendoServiceAccount(
  request: LoginWithNintendoServiceAccountRequest,
  options: RequestOptions
): Promise<LoginResult> {
  return dispatchRequest<LoginResult>(
    "/Client/LoginWithNintendoServiceAccount",
    request,
    options
  );
}

/**
 * Signs the user in using a Nintendo Switch Device ID, returning a session identifier that can subsequently be used for API calls which require an authenticated user
 * @param {LoginWithNintendoSwitchDeviceIdRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<LoginResult>}
 */ 
export function LoginWithNintendoSwitchDeviceId(
  request: LoginWithNintendoSwitchDeviceIdRequest,
  options: RequestOptions
): Promise<LoginResult> {
  return dispatchRequest<LoginResult>(
    "/Client/LoginWithNintendoSwitchDeviceId",
    request,
    options
  );
}

/**
 * Logs in a user with an Open ID Connect JWT created by an existing relationship between a title and an Open ID Connect provider.
 * @param {LoginWithOpenIdConnectRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<LoginResult>}
 */ 
export function LoginWithOpenIdConnect(
  request: LoginWithOpenIdConnectRequest,
  options: RequestOptions
): Promise<LoginResult> {
  return dispatchRequest<LoginResult>(
    "/Client/LoginWithOpenIdConnect",
    request,
    options
  );
}

/**
 * Signs the user into the PlayFab account, returning a session identifier that can subsequently be used for API calls which require an authenticated user. Unlike most other login API calls, LoginWithPlayFab does not permit the creation of new accounts via the CreateAccountFlag. Username/Password credentials may be used to create accounts via RegisterPlayFabUser, or added to existing accounts using AddUsernamePassword.
 * @param {LoginWithPlayFabRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<LoginResult>}
 */ 
export function LoginWithPlayFab(
  request: LoginWithPlayFabRequest,
  options: RequestOptions
): Promise<LoginResult> {
  return dispatchRequest<LoginResult>(
    "/Client/LoginWithPlayFab",
    request,
    options
  );
}

/**
 * Signs the user in using a PlayStation Network authentication code, returning a session identifier that can subsequently be used for API calls which require an authenticated user
 * @param {LoginWithPSNRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<LoginResult>}
 */ 
export function LoginWithPSN(
  request: LoginWithPSNRequest,
  options: RequestOptions
): Promise<LoginResult> {
  return dispatchRequest<LoginResult>(
    "/Client/LoginWithPSN",
    request,
    options
  );
}

/**
 * Signs the user in using a Steam authentication ticket, returning a session identifier that can subsequently be used for API calls which require an authenticated user
 * @param {LoginWithSteamRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<LoginResult>}
 */ 
export function LoginWithSteam(
  request: LoginWithSteamRequest,
  options: RequestOptions
): Promise<LoginResult> {
  return dispatchRequest<LoginResult>(
    "/Client/LoginWithSteam",
    request,
    options
  );
}

/**
 * Signs the user in using a Twitch access token.
 * @param {LoginWithTwitchRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<LoginResult>}
 */ 
export function LoginWithTwitch(
  request: LoginWithTwitchRequest,
  options: RequestOptions
): Promise<LoginResult> {
  return dispatchRequest<LoginResult>(
    "/Client/LoginWithTwitch",
    request,
    options
  );
}

/**
 * Signs the user in using a Xbox Live Token, returning a session identifier that can subsequently be used for API calls which require an authenticated user
 * @param {LoginWithXboxRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<LoginResult>}
 */ 
export function LoginWithXbox(
  request: LoginWithXboxRequest,
  options: RequestOptions
): Promise<LoginResult> {
  return dispatchRequest<LoginResult>(
    "/Client/LoginWithXbox",
    request,
    options
  );
}

/**
 * Attempts to locate a game session matching the given parameters. If the goal is to match the player into a specific active session, only the LobbyId is required. Otherwise, the BuildVersion, GameMode, and Region are all required parameters. Note that parameters specified in the search are required (they are not weighting factors). If a slot is found in a server instance matching the parameters, the slot will be assigned to that player, removing it from the availabe set. In that case, the information on the game session will be returned, otherwise the Status returned will be GameNotFound.
 * @param {MatchmakeRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<MatchmakeResult>}
 */ 
export function Matchmake(
  request: MatchmakeRequest,
  options: RequestOptions
): Promise<MatchmakeResult> {
  return dispatchRequest<MatchmakeResult>(
    "/Client/Matchmake",
    request,
    options
  );
}

/**
 * Opens a new outstanding trade. Note that a given item instance may only be in one open trade at a time.
 * @param {OpenTradeRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<OpenTradeResponse>}
 */ 
export function OpenTrade(
  request: OpenTradeRequest,
  options: RequestOptions
): Promise<OpenTradeResponse> {
  return dispatchRequest<OpenTradeResponse>(
    "/Client/OpenTrade",
    request,
    options
  );
}

/**
 * Selects a payment option for purchase order created via StartPurchase
 * @param {PayForPurchaseRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<PayForPurchaseResult>}
 */ 
export function PayForPurchase(
  request: PayForPurchaseRequest,
  options: RequestOptions
): Promise<PayForPurchaseResult> {
  return dispatchRequest<PayForPurchaseResult>(
    "/Client/PayForPurchase",
    request,
    options
  );
}

/**
 * Buys a single item with virtual currency. You must specify both the virtual currency to use to purchase, as well as what the client believes the price to be. This lets the server fail the purchase if the price has changed.
 * @param {PurchaseItemRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<PurchaseItemResult>}
 */ 
export function PurchaseItem(
  request: PurchaseItemRequest,
  options: RequestOptions
): Promise<PurchaseItemResult> {
  return dispatchRequest<PurchaseItemResult>(
    "/Client/PurchaseItem",
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
    "/Client/RedeemCoupon",
    request,
    options
  );
}

/**
 * Uses the supplied OAuth code to refresh the internally cached player PSN auth token
 * @param {RefreshPSNAuthTokenRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<EmptyResponse>}
 */ 
export function RefreshPSNAuthToken(
  request: RefreshPSNAuthTokenRequest,
  options: RequestOptions
): Promise<EmptyResponse> {
  return dispatchRequest<EmptyResponse>(
    "/Client/RefreshPSNAuthToken",
    request,
    options
  );
}

/**
 * Registers the iOS device to receive push notifications
 * @param {RegisterForIOSPushNotificationRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<RegisterForIOSPushNotificationResult>}
 */ 
export function RegisterForIOSPushNotification(
  request: RegisterForIOSPushNotificationRequest,
  options: RequestOptions
): Promise<RegisterForIOSPushNotificationResult> {
  return dispatchRequest<RegisterForIOSPushNotificationResult>(
    "/Client/RegisterForIOSPushNotification",
    request,
    options
  );
}

/**
 * Registers a new Playfab user account, returning a session identifier that can subsequently be used for API calls which require an authenticated user. You must supply either a username or an email address.
 * @param {RegisterPlayFabUserRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<RegisterPlayFabUserResult>}
 */ 
export function RegisterPlayFabUser(
  request: RegisterPlayFabUserRequest,
  options: RequestOptions
): Promise<RegisterPlayFabUserResult> {
  return dispatchRequest<RegisterPlayFabUserResult>(
    "/Client/RegisterPlayFabUser",
    request,
    options
  );
}

/**
 * Removes a contact email from the player's profile.
 * @param {RemoveContactEmailRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<RemoveContactEmailResult>}
 */ 
export function RemoveContactEmail(
  request: RemoveContactEmailRequest,
  options: RequestOptions
): Promise<RemoveContactEmailResult> {
  return dispatchRequest<RemoveContactEmailResult>(
    "/Client/RemoveContactEmail",
    request,
    options
  );
}

/**
 * Removes a specified user from the friend list of the local user
 * @param {RemoveFriendRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<RemoveFriendResult>}
 */ 
export function RemoveFriend(
  request: RemoveFriendRequest,
  options: RequestOptions
): Promise<RemoveFriendResult> {
  return dispatchRequest<RemoveFriendResult>(
    "/Client/RemoveFriend",
    request,
    options
  );
}

/**
 * Removes the specified generic service identifier from the player's PlayFab account.
 * @param {RemoveGenericIDRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<RemoveGenericIDResult>}
 */ 
export function RemoveGenericID(
  request: RemoveGenericIDRequest,
  options: RequestOptions
): Promise<RemoveGenericIDResult> {
  return dispatchRequest<RemoveGenericIDResult>(
    "/Client/RemoveGenericID",
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
    "/Client/RemoveSharedGroupMembers",
    request,
    options
  );
}

/**
 * Report player's ad activity
 * @param {ReportAdActivityRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<ReportAdActivityResult>}
 */ 
export function ReportAdActivity(
  request: ReportAdActivityRequest,
  options: RequestOptions
): Promise<ReportAdActivityResult> {
  return dispatchRequest<ReportAdActivityResult>(
    "/Client/ReportAdActivity",
    request,
    options
  );
}

/**
 * Write a PlayStream event to describe the provided player device information. This API method is not designed to be called directly by developers. Each PlayFab client SDK will eventually report this information automatically.
 * @param {DeviceInfoRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<EmptyResponse>}
 */ 
export function ReportDeviceInfo(
  request: DeviceInfoRequest,
  options: RequestOptions
): Promise<EmptyResponse> {
  return dispatchRequest<EmptyResponse>(
    "/Client/ReportDeviceInfo",
    request,
    options
  );
}

/**
 * Submit a report for another player (due to bad bahavior, etc.), so that customer service representatives for the title can take action concerning potentially toxic players.
 * @param {ReportPlayerClientRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<ReportPlayerClientResult>}
 */ 
export function ReportPlayer(
  request: ReportPlayerClientRequest,
  options: RequestOptions
): Promise<ReportPlayerClientResult> {
  return dispatchRequest<ReportPlayerClientResult>(
    "/Client/ReportPlayer",
    request,
    options
  );
}

/**
 * Restores all in-app purchases based on the given restore receipt
 * @param {RestoreIOSPurchasesRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<RestoreIOSPurchasesResult>}
 */ 
export function RestoreIOSPurchases(
  request: RestoreIOSPurchasesRequest,
  options: RequestOptions
): Promise<RestoreIOSPurchasesResult> {
  return dispatchRequest<RestoreIOSPurchasesResult>(
    "/Client/RestoreIOSPurchases",
    request,
    options
  );
}

/**
 * Reward player's ad activity
 * @param {RewardAdActivityRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<RewardAdActivityResult>}
 */ 
export function RewardAdActivity(
  request: RewardAdActivityRequest,
  options: RequestOptions
): Promise<RewardAdActivityResult> {
  return dispatchRequest<RewardAdActivityResult>(
    "/Client/RewardAdActivity",
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
    "/Client/SendAccountRecoveryEmail",
    request,
    options
  );
}

/**
 * Updates the tag list for a specified user in the friend list of the local user
 * @param {SetFriendTagsRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<SetFriendTagsResult>}
 */ 
export function SetFriendTags(
  request: SetFriendTagsRequest,
  options: RequestOptions
): Promise<SetFriendTagsResult> {
  return dispatchRequest<SetFriendTagsResult>(
    "/Client/SetFriendTags",
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
    "/Client/SetPlayerSecret",
    request,
    options
  );
}

/**
 * Start a new game server with a given configuration, add the current player and return the connection information.
 * @param {StartGameRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<StartGameResult>}
 */ 
export function StartGame(
  request: StartGameRequest,
  options: RequestOptions
): Promise<StartGameResult> {
  return dispatchRequest<StartGameResult>(
    "/Client/StartGame",
    request,
    options
  );
}

/**
 * Creates an order for a list of items from the title catalog
 * @param {StartPurchaseRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<StartPurchaseResult>}
 */ 
export function StartPurchase(
  request: StartPurchaseRequest,
  options: RequestOptions
): Promise<StartPurchaseResult> {
  return dispatchRequest<StartPurchaseResult>(
    "/Client/StartPurchase",
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
    "/Client/SubtractUserVirtualCurrency",
    request,
    options
  );
}

/**
 * Unlinks the related Android device identifier from the user's PlayFab account
 * @param {UnlinkAndroidDeviceIDRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<UnlinkAndroidDeviceIDResult>}
 */ 
export function UnlinkAndroidDeviceID(
  request: UnlinkAndroidDeviceIDRequest,
  options: RequestOptions
): Promise<UnlinkAndroidDeviceIDResult> {
  return dispatchRequest<UnlinkAndroidDeviceIDResult>(
    "/Client/UnlinkAndroidDeviceID",
    request,
    options
  );
}

/**
 * Unlinks the related Apple account from the user's PlayFab account.
 * @param {UnlinkAppleRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<EmptyResponse>}
 */ 
export function UnlinkApple(
  request: UnlinkAppleRequest,
  options: RequestOptions
): Promise<EmptyResponse> {
  return dispatchRequest<EmptyResponse>(
    "/Client/UnlinkApple",
    request,
    options
  );
}

/**
 * Unlinks the related custom identifier from the user's PlayFab account
 * @param {UnlinkCustomIDRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<UnlinkCustomIDResult>}
 */ 
export function UnlinkCustomID(
  request: UnlinkCustomIDRequest,
  options: RequestOptions
): Promise<UnlinkCustomIDResult> {
  return dispatchRequest<UnlinkCustomIDResult>(
    "/Client/UnlinkCustomID",
    request,
    options
  );
}

/**
 * Unlinks the related Facebook account from the user's PlayFab account
 * @param {UnlinkFacebookAccountRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<UnlinkFacebookAccountResult>}
 */ 
export function UnlinkFacebookAccount(
  request: UnlinkFacebookAccountRequest,
  options: RequestOptions
): Promise<UnlinkFacebookAccountResult> {
  return dispatchRequest<UnlinkFacebookAccountResult>(
    "/Client/UnlinkFacebookAccount",
    request,
    options
  );
}

/**
 * Unlinks the related Facebook Instant Game Ids from the user's PlayFab account
 * @param {UnlinkFacebookInstantGamesIdRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<UnlinkFacebookInstantGamesIdResult>}
 */ 
export function UnlinkFacebookInstantGamesId(
  request: UnlinkFacebookInstantGamesIdRequest,
  options: RequestOptions
): Promise<UnlinkFacebookInstantGamesIdResult> {
  return dispatchRequest<UnlinkFacebookInstantGamesIdResult>(
    "/Client/UnlinkFacebookInstantGamesId",
    request,
    options
  );
}

/**
 * Unlinks the related Game Center account from the user's PlayFab account
 * @param {UnlinkGameCenterAccountRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<UnlinkGameCenterAccountResult>}
 */ 
export function UnlinkGameCenterAccount(
  request: UnlinkGameCenterAccountRequest,
  options: RequestOptions
): Promise<UnlinkGameCenterAccountResult> {
  return dispatchRequest<UnlinkGameCenterAccountResult>(
    "/Client/UnlinkGameCenterAccount",
    request,
    options
  );
}

/**
 * Unlinks the related Google account from the user's PlayFab account (https://developers.google.com/android/reference/com/google/android/gms/auth/GoogleAuthUtil#public-methods).
 * @param {UnlinkGoogleAccountRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<UnlinkGoogleAccountResult>}
 */ 
export function UnlinkGoogleAccount(
  request: UnlinkGoogleAccountRequest,
  options: RequestOptions
): Promise<UnlinkGoogleAccountResult> {
  return dispatchRequest<UnlinkGoogleAccountResult>(
    "/Client/UnlinkGoogleAccount",
    request,
    options
  );
}

/**
 * Unlinks the related iOS device identifier from the user's PlayFab account
 * @param {UnlinkIOSDeviceIDRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<UnlinkIOSDeviceIDResult>}
 */ 
export function UnlinkIOSDeviceID(
  request: UnlinkIOSDeviceIDRequest,
  options: RequestOptions
): Promise<UnlinkIOSDeviceIDResult> {
  return dispatchRequest<UnlinkIOSDeviceIDResult>(
    "/Client/UnlinkIOSDeviceID",
    request,
    options
  );
}

/**
 * Unlinks the related Kongregate identifier from the user's PlayFab account
 * @param {UnlinkKongregateAccountRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<UnlinkKongregateAccountResult>}
 */ 
export function UnlinkKongregate(
  request: UnlinkKongregateAccountRequest,
  options: RequestOptions
): Promise<UnlinkKongregateAccountResult> {
  return dispatchRequest<UnlinkKongregateAccountResult>(
    "/Client/UnlinkKongregate",
    request,
    options
  );
}

/**
 * Unlinks the related Nintendo account from the user's PlayFab account.
 * @param {UnlinkNintendoServiceAccountRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<EmptyResponse>}
 */ 
export function UnlinkNintendoServiceAccount(
  request: UnlinkNintendoServiceAccountRequest,
  options: RequestOptions
): Promise<EmptyResponse> {
  return dispatchRequest<EmptyResponse>(
    "/Client/UnlinkNintendoServiceAccount",
    request,
    options
  );
}

/**
 * Unlinks the related NintendoSwitchDeviceId from the user's PlayFab account
 * @param {UnlinkNintendoSwitchDeviceIdRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<UnlinkNintendoSwitchDeviceIdResult>}
 */ 
export function UnlinkNintendoSwitchDeviceId(
  request: UnlinkNintendoSwitchDeviceIdRequest,
  options: RequestOptions
): Promise<UnlinkNintendoSwitchDeviceIdResult> {
  return dispatchRequest<UnlinkNintendoSwitchDeviceIdResult>(
    "/Client/UnlinkNintendoSwitchDeviceId",
    request,
    options
  );
}

/**
 * Unlinks an OpenID Connect account from a user's PlayFab account, based on the connection ID of an existing relationship between a title and an Open ID Connect provider.
 * @param {UnlinkOpenIdConnectRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<EmptyResponse>}
 */ 
export function UnlinkOpenIdConnect(
  request: UnlinkOpenIdConnectRequest,
  options: RequestOptions
): Promise<EmptyResponse> {
  return dispatchRequest<EmptyResponse>(
    "/Client/UnlinkOpenIdConnect",
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
    "/Client/UnlinkPSNAccount",
    request,
    options
  );
}

/**
 * Unlinks the related Steam account from the user's PlayFab account
 * @param {UnlinkSteamAccountRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<UnlinkSteamAccountResult>}
 */ 
export function UnlinkSteamAccount(
  request: UnlinkSteamAccountRequest,
  options: RequestOptions
): Promise<UnlinkSteamAccountResult> {
  return dispatchRequest<UnlinkSteamAccountResult>(
    "/Client/UnlinkSteamAccount",
    request,
    options
  );
}

/**
 * Unlinks the related Twitch account from the user's PlayFab account.
 * @param {UnlinkTwitchAccountRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<UnlinkTwitchAccountResult>}
 */ 
export function UnlinkTwitch(
  request: UnlinkTwitchAccountRequest,
  options: RequestOptions
): Promise<UnlinkTwitchAccountResult> {
  return dispatchRequest<UnlinkTwitchAccountResult>(
    "/Client/UnlinkTwitch",
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
    "/Client/UnlinkXboxAccount",
    request,
    options
  );
}

/**
 * Opens the specified container, with the specified key (when required), and returns the contents of the opened container. If the container (and key when relevant) are consumable (RemainingUses > 0), their RemainingUses will be decremented, consistent with the operation of ConsumeItem.
 * @param {UnlockContainerInstanceRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<UnlockContainerItemResult>}
 */ 
export function UnlockContainerInstance(
  request: UnlockContainerInstanceRequest,
  options: RequestOptions
): Promise<UnlockContainerItemResult> {
  return dispatchRequest<UnlockContainerItemResult>(
    "/Client/UnlockContainerInstance",
    request,
    options
  );
}

/**
 * Searches target inventory for an ItemInstance matching the given CatalogItemId, if necessary unlocks it using an appropriate key, and returns the contents of the opened container. If the container (and key when relevant) are consumable (RemainingUses > 0), their RemainingUses will be decremented, consistent with the operation of ConsumeItem.
 * @param {UnlockContainerItemRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<UnlockContainerItemResult>}
 */ 
export function UnlockContainerItem(
  request: UnlockContainerItemRequest,
  options: RequestOptions
): Promise<UnlockContainerItemResult> {
  return dispatchRequest<UnlockContainerItemResult>(
    "/Client/UnlockContainerItem",
    request,
    options
  );
}

/**
 * Update the avatar URL of the player
 * @param {UpdateAvatarUrlRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<EmptyResponse>}
 */ 
export function UpdateAvatarUrl(
  request: UpdateAvatarUrlRequest,
  options: RequestOptions
): Promise<EmptyResponse> {
  return dispatchRequest<EmptyResponse>(
    "/Client/UpdateAvatarUrl",
    request,
    options
  );
}

/**
 * Creates and updates the title-specific custom data for the user's character which is readable and writable by the client
 * @param {UpdateCharacterDataRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<UpdateCharacterDataResult>}
 */ 
export function UpdateCharacterData(
  request: UpdateCharacterDataRequest,
  options: RequestOptions
): Promise<UpdateCharacterDataResult> {
  return dispatchRequest<UpdateCharacterDataResult>(
    "/Client/UpdateCharacterData",
    request,
    options
  );
}

/**
 * Updates the values of the specified title-specific statistics for the specific character. By default, clients are not permitted to update statistics. Developers may override this setting in the Game Manager > Settings > API Features.
 * @param {UpdateCharacterStatisticsRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<UpdateCharacterStatisticsResult>}
 */ 
export function UpdateCharacterStatistics(
  request: UpdateCharacterStatisticsRequest,
  options: RequestOptions
): Promise<UpdateCharacterStatisticsResult> {
  return dispatchRequest<UpdateCharacterStatisticsResult>(
    "/Client/UpdateCharacterStatistics",
    request,
    options
  );
}

/**
 * Updates the values of the specified title-specific statistics for the user. By default, clients are not permitted to update statistics. Developers may override this setting in the Game Manager > Settings > API Features.
 * @param {UpdatePlayerStatisticsRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<UpdatePlayerStatisticsResult>}
 */ 
export function UpdatePlayerStatistics(
  request: UpdatePlayerStatisticsRequest,
  options: RequestOptions
): Promise<UpdatePlayerStatisticsResult> {
  return dispatchRequest<UpdatePlayerStatisticsResult>(
    "/Client/UpdatePlayerStatistics",
    request,
    options
  );
}

/**
 * Adds, updates, and removes data keys for a shared group object. If the permission is set to Public, all fields updated or added in this call will be readable by users not in the group. By default, data permissions are set to Private. Regardless of the permission setting, only members of the group can update the data. Shared Groups are designed for sharing data between a very small number of players, please see our guide: https://docs.microsoft.com/gaming/playfab/features/social/groups/using-shared-group-data
 * @param {UpdateSharedGroupDataRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<UpdateSharedGroupDataResult>}
 */ 
export function UpdateSharedGroupData(
  request: UpdateSharedGroupDataRequest,
  options: RequestOptions
): Promise<UpdateSharedGroupDataResult> {
  return dispatchRequest<UpdateSharedGroupDataResult>(
    "/Client/UpdateSharedGroupData",
    request,
    options
  );
}

/**
 * Creates and updates the title-specific custom data for the user which is readable and writable by the client
 * @param {UpdateUserDataRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<UpdateUserDataResult>}
 */ 
export function UpdateUserData(
  request: UpdateUserDataRequest,
  options: RequestOptions
): Promise<UpdateUserDataResult> {
  return dispatchRequest<UpdateUserDataResult>(
    "/Client/UpdateUserData",
    request,
    options
  );
}

/**
 * Creates and updates the publisher-specific custom data for the user which is readable and writable by the client
 * @param {UpdateUserDataRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<UpdateUserDataResult>}
 */ 
export function UpdateUserPublisherData(
  request: UpdateUserDataRequest,
  options: RequestOptions
): Promise<UpdateUserDataResult> {
  return dispatchRequest<UpdateUserDataResult>(
    "/Client/UpdateUserPublisherData",
    request,
    options
  );
}

/**
 * Updates the title specific display name for the user
 * @param {UpdateUserTitleDisplayNameRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<UpdateUserTitleDisplayNameResult>}
 */ 
export function UpdateUserTitleDisplayName(
  request: UpdateUserTitleDisplayNameRequest,
  options: RequestOptions
): Promise<UpdateUserTitleDisplayNameResult> {
  return dispatchRequest<UpdateUserTitleDisplayNameResult>(
    "/Client/UpdateUserTitleDisplayName",
    request,
    options
  );
}

/**
 * Validates with Amazon that the receipt for an Amazon App Store in-app purchase is valid and that it matches the purchased catalog item
 * @param {ValidateAmazonReceiptRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<ValidateAmazonReceiptResult>}
 */ 
export function ValidateAmazonIAPReceipt(
  request: ValidateAmazonReceiptRequest,
  options: RequestOptions
): Promise<ValidateAmazonReceiptResult> {
  return dispatchRequest<ValidateAmazonReceiptResult>(
    "/Client/ValidateAmazonIAPReceipt",
    request,
    options
  );
}

/**
 * Validates a Google Play purchase and gives the corresponding item to the player.
 * @param {ValidateGooglePlayPurchaseRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<ValidateGooglePlayPurchaseResult>}
 */ 
export function ValidateGooglePlayPurchase(
  request: ValidateGooglePlayPurchaseRequest,
  options: RequestOptions
): Promise<ValidateGooglePlayPurchaseResult> {
  return dispatchRequest<ValidateGooglePlayPurchaseResult>(
    "/Client/ValidateGooglePlayPurchase",
    request,
    options
  );
}

/**
 * Validates with the Apple store that the receipt for an iOS in-app purchase is valid and that it matches the purchased catalog item
 * @param {ValidateIOSReceiptRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<ValidateIOSReceiptResult>}
 */ 
export function ValidateIOSReceipt(
  request: ValidateIOSReceiptRequest,
  options: RequestOptions
): Promise<ValidateIOSReceiptResult> {
  return dispatchRequest<ValidateIOSReceiptResult>(
    "/Client/ValidateIOSReceipt",
    request,
    options
  );
}

/**
 * Validates with Windows that the receipt for an Windows App Store in-app purchase is valid and that it matches the purchased catalog item
 * @param {ValidateWindowsReceiptRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<ValidateWindowsReceiptResult>}
 */ 
export function ValidateWindowsStoreReceipt(
  request: ValidateWindowsReceiptRequest,
  options: RequestOptions
): Promise<ValidateWindowsReceiptResult> {
  return dispatchRequest<ValidateWindowsReceiptResult>(
    "/Client/ValidateWindowsStoreReceipt",
    request,
    options
  );
}

/**
 * Writes a character-based event into PlayStream.
 * @param {WriteClientCharacterEventRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<WriteEventResponse>}
 */ 
export function WriteCharacterEvent(
  request: WriteClientCharacterEventRequest,
  options: RequestOptions
): Promise<WriteEventResponse> {
  return dispatchRequest<WriteEventResponse>(
    "/Client/WriteCharacterEvent",
    request,
    options
  );
}

/**
 * Writes a player-based event into PlayStream.
 * @param {WriteClientPlayerEventRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<WriteEventResponse>}
 */ 
export function WritePlayerEvent(
  request: WriteClientPlayerEventRequest,
  options: RequestOptions
): Promise<WriteEventResponse> {
  return dispatchRequest<WriteEventResponse>(
    "/Client/WritePlayerEvent",
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
    "/Client/WriteTitleEvent",
    request,
    options
  );
}

