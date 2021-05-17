// deno-lint-ignore-file
import { dispatchRequest, RequestOptions } from "./support/runtime.ts";

export interface AssetReference {
  /** The asset's file name. This is a filename with the .zip, .tar, or .tar.gz extension. */
  FileName?: string;
  /** The asset's mount path. */
  MountPath?: string;
}

export interface AssetReferenceParams {
  /** The asset's file name. */
  FileName: string;
  /** The asset's mount path. */
  MountPath?: string;
}

export interface AssetSummary {
  /** The asset's file name. This is a filename with the .zip, .tar, or .tar.gz extension. */
  FileName?: string;
  /** The metadata associated with the asset. */
  Metadata?: Record<string, unknown>;
}

export enum AttributeMergeFunction {
  Min = "Min",
  Max = "Max",
  Average = "Average",
}

export enum AttributeNotSpecifiedBehavior {
  UseDefault = "UseDefault",
  MatchAny = "MatchAny",
}

export enum AttributeSource {
  User = "User",
  PlayerEntity = "PlayerEntity",
}

export enum AzureRegion {
  AustraliaEast = "AustraliaEast",
  AustraliaSoutheast = "AustraliaSoutheast",
  BrazilSouth = "BrazilSouth",
  CentralUs = "CentralUs",
  EastAsia = "EastAsia",
  EastUs = "EastUs",
  EastUs2 = "EastUs2",
  JapanEast = "JapanEast",
  JapanWest = "JapanWest",
  NorthCentralUs = "NorthCentralUs",
  NorthEurope = "NorthEurope",
  SouthCentralUs = "SouthCentralUs",
  SoutheastAsia = "SoutheastAsia",
  WestEurope = "WestEurope",
  WestUs = "WestUs",
  SouthAfricaNorth = "SouthAfricaNorth",
  WestCentralUs = "WestCentralUs",
  KoreaCentral = "KoreaCentral",
  FranceCentral = "FranceCentral",
  WestUs2 = "WestUs2",
  CentralIndia = "CentralIndia",
  UaeNorth = "UaeNorth",
  UkSouth = "UkSouth",
}

export enum AzureVmFamily {
  A = "A",
  Av2 = "Av2",
  Dv2 = "Dv2",
  Dv3 = "Dv3",
  F = "F",
  Fsv2 = "Fsv2",
  Dasv4 = "Dasv4",
  Dav4 = "Dav4",
  Eav4 = "Eav4",
  Easv4 = "Easv4",
  Ev4 = "Ev4",
  Esv4 = "Esv4",
  Dsv3 = "Dsv3",
  Dsv2 = "Dsv2",
  NCasT4_v3 = "NCasT4_v3",
}

export enum AzureVmSize {
  Standard_A1 = "Standard_A1",
  Standard_A2 = "Standard_A2",
  Standard_A3 = "Standard_A3",
  Standard_A4 = "Standard_A4",
  Standard_A1_v2 = "Standard_A1_v2",
  Standard_A2_v2 = "Standard_A2_v2",
  Standard_A4_v2 = "Standard_A4_v2",
  Standard_A8_v2 = "Standard_A8_v2",
  Standard_D1_v2 = "Standard_D1_v2",
  Standard_D2_v2 = "Standard_D2_v2",
  Standard_D3_v2 = "Standard_D3_v2",
  Standard_D4_v2 = "Standard_D4_v2",
  Standard_D5_v2 = "Standard_D5_v2",
  Standard_D2_v3 = "Standard_D2_v3",
  Standard_D4_v3 = "Standard_D4_v3",
  Standard_D8_v3 = "Standard_D8_v3",
  Standard_D16_v3 = "Standard_D16_v3",
  Standard_F1 = "Standard_F1",
  Standard_F2 = "Standard_F2",
  Standard_F4 = "Standard_F4",
  Standard_F8 = "Standard_F8",
  Standard_F16 = "Standard_F16",
  Standard_F2s_v2 = "Standard_F2s_v2",
  Standard_F4s_v2 = "Standard_F4s_v2",
  Standard_F8s_v2 = "Standard_F8s_v2",
  Standard_F16s_v2 = "Standard_F16s_v2",
  Standard_D2as_v4 = "Standard_D2as_v4",
  Standard_D4as_v4 = "Standard_D4as_v4",
  Standard_D8as_v4 = "Standard_D8as_v4",
  Standard_D16as_v4 = "Standard_D16as_v4",
  Standard_D2a_v4 = "Standard_D2a_v4",
  Standard_D4a_v4 = "Standard_D4a_v4",
  Standard_D8a_v4 = "Standard_D8a_v4",
  Standard_D16a_v4 = "Standard_D16a_v4",
  Standard_E2a_v4 = "Standard_E2a_v4",
  Standard_E4a_v4 = "Standard_E4a_v4",
  Standard_E8a_v4 = "Standard_E8a_v4",
  Standard_E16a_v4 = "Standard_E16a_v4",
  Standard_E2as_v4 = "Standard_E2as_v4",
  Standard_E4as_v4 = "Standard_E4as_v4",
  Standard_E8as_v4 = "Standard_E8as_v4",
  Standard_E16as_v4 = "Standard_E16as_v4",
  Standard_D2s_v3 = "Standard_D2s_v3",
  Standard_D4s_v3 = "Standard_D4s_v3",
  Standard_D8s_v3 = "Standard_D8s_v3",
  Standard_D16s_v3 = "Standard_D16s_v3",
  Standard_DS1_v2 = "Standard_DS1_v2",
  Standard_DS2_v2 = "Standard_DS2_v2",
  Standard_DS3_v2 = "Standard_DS3_v2",
  Standard_DS4_v2 = "Standard_DS4_v2",
  Standard_DS5_v2 = "Standard_DS5_v2",
  Standard_NC4as_T4_v3 = "Standard_NC4as_T4_v3",
}

export interface BuildAliasDetailsResponse {
  /** The guid string alias Id of the alias to be created or updated. */
  AliasId?: string;
  /** The alias name. */
  AliasName?: string;
  /** Array of build selection criteria. */
  BuildSelectionCriteria?: BuildSelectionCriterion[];
}

export interface BuildAliasParams {
  /** The guid string alias ID to use for the request. */
  AliasId: string;
}

export interface BuildRegion {
  /** The current multiplayer server stats for the region. */
  CurrentServerStats?: CurrentServerStats;
  /** Optional settings to control dynamic adjustment of standby target */
  DynamicStandbySettings?: DynamicStandbySettings;
  /** The maximum number of multiplayer servers for the region. */
  MaxServers: number;
  /** The build region. */
  Region?: AzureRegion;
  /** Optional settings to set the standby target to specified values during the supplied schedules */
  ScheduledStandbySettings?: ScheduledStandbySettings;
  /** The target number of standby multiplayer servers for the region. */
  StandbyServers: number;
  /** The status of multiplayer servers in the build region. Valid values are - Unknown, Initialized, Deploying, Deployed, Unhealthy, Deleting, Deleted. */
  Status?: string;
}

export interface BuildRegionParams {
  /** Optional settings to control dynamic adjustment of standby target. If not specified, dynamic standby is disabled */
  DynamicStandbySettings?: DynamicStandbySettings;
  /** The maximum number of multiplayer servers for the region. */
  MaxServers: number;
  /** The build region. */
  Region: AzureRegion;
  /** Optional settings to set the standby target to specified values during the supplied schedules */
  ScheduledStandbySettings?: ScheduledStandbySettings;
  /** The number of standby multiplayer servers for the region. */
  StandbyServers: number;
}

export interface BuildSelectionCriterion {
  /** Dictionary of build ids and their respective weights for distribution of allocation requests. */
  BuildWeightDistribution?: Record<string, unknown>;
}

export interface BuildSummary {
  /** The guid string build ID of the build. */
  BuildId?: string;
  /** The build name. */
  BuildName?: string;
  /** The time the build was created in UTC. */
  CreationTime?: string;
  /** The metadata of the build. */
  Metadata?: Record<string, unknown>;
  /** The configuration and status for each region in the build. */
  RegionConfigurations?: BuildRegion[];
}

/** Cancels all tickets of which the player is a member in a given queue that are not cancelled or matched. This API is useful if you lose track of what tickets the player is a member of (if the title crashes for instance) and want to "reset". The Entity field is optional if the caller is a player and defaults to that player. Players may not cancel tickets for other people. The Entity field is required if the caller is a server (authenticated as the title). */
export interface CancelAllMatchmakingTicketsForPlayerRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** The entity key of the player whose tickets should be canceled. */
  Entity?: EntityKey;
  /** The name of the queue from which a player's tickets should be canceled. */
  QueueName: string;
}

export interface CancelAllMatchmakingTicketsForPlayerResult {}

/** Cancels all backfill tickets of which the player is a member in a given queue that are not cancelled or matched. This API is useful if you lose track of what tickets the player is a member of (if the server crashes for instance) and want to "reset". */
export interface CancelAllServerBackfillTicketsForPlayerRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** The entity key of the player whose backfill tickets should be canceled. */
  Entity: EntityKey;
  /** The name of the queue from which a player's backfill tickets should be canceled. */
  QueueName: string;
}

export interface CancelAllServerBackfillTicketsForPlayerResult {}

export enum CancellationReason {
  Requested = "Requested",
  Internal = "Internal",
  Timeout = "Timeout",
}

/** Only servers and ticket members can cancel a ticket. The ticket can be in five different states when it is cancelled. 1: the ticket is waiting for members to join it, and it has not started matching. If the ticket is cancelled at this stage, it will never match. 2: the ticket is matching. If the ticket is cancelled, it will stop matching. 3: the ticket is matched. A matched ticket cannot be cancelled. 4: the ticket is already cancelled and nothing happens. 5: the ticket is waiting for a server. If the ticket is cancelled, server allocation will be stopped. A server may still be allocated due to a race condition, but that will not be reflected in the ticket. There may be race conditions between the ticket getting matched and the client making a cancellation request. The client must handle the possibility that the cancel request fails if a match is found before the cancellation request is processed. We do not allow resubmitting a cancelled ticket because players must consent to enter matchmaking again. Create a new ticket instead. */
export interface CancelMatchmakingTicketRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** The name of the queue the ticket is in. */
  QueueName: string;
  /** The Id of the ticket to find a match for. */
  TicketId: string;
}

export interface CancelMatchmakingTicketResult {}

/** Only servers can cancel a backfill ticket. The ticket can be in three different states when it is cancelled. 1: the ticket is matching. If the ticket is cancelled, it will stop matching. 2: the ticket is matched. A matched ticket cannot be cancelled. 3: the ticket is already cancelled and nothing happens. There may be race conditions between the ticket getting matched and the server making a cancellation request. The server must handle the possibility that the cancel request fails if a match is found before the cancellation request is processed. We do not allow resubmitting a cancelled ticket. Create a new ticket instead. */
export interface CancelServerBackfillTicketRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** The name of the queue the ticket is in. */
  QueueName: string;
  /** The Id of the ticket to find a match for. */
  TicketId: string;
}

export interface CancelServerBackfillTicketResult {}

export interface Certificate {
  /** Base64 encoded string contents of the certificate. */
  Base64EncodedValue: string;
  /** A name for the certificate. This is used to reference certificates in build configurations. */
  Name: string;
  /** If required for your PFX certificate, use this field to provide a password that will be used to install the certificate on the container. */
  Password?: string;
}

export interface CertificateSummary {
  /** The name of the certificate. */
  Name?: string;
  /** The thumbprint for the certificate. */
  Thumbprint?: string;
}

export interface ConnectedPlayer {
  /** The player ID of the player connected to the multiplayer server. */
  PlayerId?: string;
}

export enum ContainerFlavor {
  ManagedWindowsServerCore = "ManagedWindowsServerCore",
  CustomLinux = "CustomLinux",
  ManagedWindowsServerCorePreview = "ManagedWindowsServerCorePreview",
  Invalid = "Invalid",
}

export interface ContainerImageReference {
  /** The container image name. */
  ImageName: string;
  /** The container tag. */
  Tag?: string;
}

export interface CoreCapacity {
  /** The available core capacity for the (Region, VmFamily) */
  Available: number;
  /** The AzureRegion */
  Region?: AzureRegion;
  /** The total core capacity for the (Region, VmFamily) */
  Total: number;
  /** The AzureVmFamily */
  VmFamily?: AzureVmFamily;
}

export interface CoreCapacityChange {
  /** New quota core limit for the given vm family/region. */
  NewCoreLimit: number;
  /** Region to change. */
  Region: AzureRegion;
  /** Virtual machine family to change. */
  VmFamily: AzureVmFamily;
}

/** Creates a multiplayer server build alias and returns the created alias. */
export interface CreateBuildAliasRequest {
  /** The alias name. */
  AliasName: string;
  /** Array of build selection criteria. */
  BuildSelectionCriteria?: BuildSelectionCriterion[];
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
}

/** Creates a multiplayer server build with a custom container and returns information about the build creation request. */
export interface CreateBuildWithCustomContainerRequest {
  /** When true, assets will not be copied for each server inside the VM. All serverswill run from the same set of assets, or will have the same assets mounted in the container. */
  AreAssetsReadonly?: boolean;
  /** The build name. */
  BuildName: string;
  /** The flavor of container to create a build from. */
  ContainerFlavor?: ContainerFlavor;
  /** The container reference, consisting of the image name and tag. */
  ContainerImageReference?: ContainerImageReference;
  /** The container command to run when the multiplayer server has been allocated, including any arguments. */
  ContainerRunCommand?: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** The list of game assets related to the build. */
  GameAssetReferences?: AssetReferenceParams[];
  /** The game certificates for the build. */
  GameCertificateReferences?: GameCertificateReferenceParams[];
  /** The Linux instrumentation configuration for the build. */
  LinuxInstrumentationConfiguration?: LinuxInstrumentationConfiguration;
  /** Metadata to tag the build. The keys are case insensitive. The build metadata is made available to the server through Game Server SDK (GSDK).Constraints: Maximum number of keys: 30, Maximum key length: 50, Maximum value length: 100 */
  Metadata?: Record<string, unknown>;
  /** The number of multiplayer servers to host on a single VM. */
  MultiplayerServerCountPerVm: number;
  /** The ports to map the build on. */
  Ports: Port[];
  /** The region configurations for the build. */
  RegionConfigurations: BuildRegionParams[];
  /** When true, assets will be downloaded and uncompressed in memory, without the compressedversion being written first to disc. */
  UseStreamingForAssetDownloads?: boolean;
  /** The VM size to create the build on. */
  VmSize?: AzureVmSize;
}

export interface CreateBuildWithCustomContainerResponse {
  /** When true, assets will not be copied for each server inside the VM. All serverswill run from the same set of assets, or will have the same assets mounted in the container. */
  AreAssetsReadonly?: boolean;
  /** The guid string build ID. Must be unique for every build. */
  BuildId?: string;
  /** The build name. */
  BuildName?: string;
  /** The flavor of container of the build. */
  ContainerFlavor?: ContainerFlavor;
  /** The container command to run when the multiplayer server has been allocated, including any arguments. */
  ContainerRunCommand?: string;
  /** The time the build was created in UTC. */
  CreationTime?: string;
  /** The custom game container image reference information. */
  CustomGameContainerImage?: ContainerImageReference;
  /** The game assets for the build. */
  GameAssetReferences?: AssetReference[];
  /** The game certificates for the build. */
  GameCertificateReferences?: GameCertificateReference[];
  /** The Linux instrumentation configuration for this build. */
  LinuxInstrumentationConfiguration?: LinuxInstrumentationConfiguration;
  /** The metadata of the build. */
  Metadata?: Record<string, unknown>;
  /** The number of multiplayer servers to host on a single VM of the build. */
  MultiplayerServerCountPerVm: number;
  /** The OS platform used for running the game process. */
  OsPlatform?: OsPlatform;
  /** The ports the build is mapped on. */
  Ports?: Port[];
  /** The region configuration for the build. */
  RegionConfigurations?: BuildRegion[];
  /** The type of game server being hosted. */
  ServerType?: ServerType;
  /** When true, assets will be downloaded and uncompressed in memory, without the compressedversion being written first to disc. */
  UseStreamingForAssetDownloads?: boolean;
  /** The VM size the build was created on. */
  VmSize?: AzureVmSize;
}

/** Creates a multiplayer server build with a managed container and returns information about the build creation request. */
export interface CreateBuildWithManagedContainerRequest {
  /** When true, assets will not be copied for each server inside the VM. All serverswill run from the same set of assets, or will have the same assets mounted in the container. */
  AreAssetsReadonly?: boolean;
  /** The build name. */
  BuildName: string;
  /** The flavor of container to create a build from. */
  ContainerFlavor?: ContainerFlavor;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** The list of game assets related to the build. */
  GameAssetReferences: AssetReferenceParams[];
  /** The game certificates for the build. */
  GameCertificateReferences?: GameCertificateReferenceParams[];
  /** The directory containing the game executable. This would be the start path of the game assets that contain the main game server executable. If not provided, a best effort will be made to extract it from the start game command. */
  GameWorkingDirectory?: string;
  /** The instrumentation configuration for the build. */
  InstrumentationConfiguration?: InstrumentationConfiguration;
  /** Metadata to tag the build. The keys are case insensitive. The build metadata is made available to the server through Game Server SDK (GSDK).Constraints: Maximum number of keys: 30, Maximum key length: 50, Maximum value length: 100 */
  Metadata?: Record<string, unknown>;
  /** The number of multiplayer servers to host on a single VM. */
  MultiplayerServerCountPerVm: number;
  /** The ports to map the build on. */
  Ports: Port[];
  /** The region configurations for the build. */
  RegionConfigurations: BuildRegionParams[];
  /** The command to run when the multiplayer server is started, including any arguments. */
  StartMultiplayerServerCommand: string;
  /** When true, assets will be downloaded and uncompressed in memory, without the compressedversion being written first to disc. */
  UseStreamingForAssetDownloads?: boolean;
  /** The VM size to create the build on. */
  VmSize?: AzureVmSize;
}

export interface CreateBuildWithManagedContainerResponse {
  /** When true, assets will not be copied for each server inside the VM. All serverswill run from the same set of assets, or will have the same assets mounted in the container. */
  AreAssetsReadonly?: boolean;
  /** The guid string build ID. Must be unique for every build. */
  BuildId?: string;
  /** The build name. */
  BuildName?: string;
  /** The flavor of container of the build. */
  ContainerFlavor?: ContainerFlavor;
  /** The time the build was created in UTC. */
  CreationTime?: string;
  /** The game assets for the build. */
  GameAssetReferences?: AssetReference[];
  /** The game certificates for the build. */
  GameCertificateReferences?: GameCertificateReference[];
  /** The directory containing the game executable. This would be the start path of the game assets that contain the main game server executable. If not provided, a best effort will be made to extract it from the start game command. */
  GameWorkingDirectory?: string;
  /** The instrumentation configuration for this build. */
  InstrumentationConfiguration?: InstrumentationConfiguration;
  /** The metadata of the build. */
  Metadata?: Record<string, unknown>;
  /** The number of multiplayer servers to host on a single VM of the build. */
  MultiplayerServerCountPerVm: number;
  /** The OS platform used for running the game process. */
  OsPlatform?: OsPlatform;
  /** The ports the build is mapped on. */
  Ports?: Port[];
  /** The region configuration for the build. */
  RegionConfigurations?: BuildRegion[];
  /** The type of game server being hosted. */
  ServerType?: ServerType;
  /** The command to run when the multiplayer server has been allocated, including any arguments. */
  StartMultiplayerServerCommand?: string;
  /** When true, assets will be downloaded and uncompressed in memory, without the compressedversion being written first to disc. */
  UseStreamingForAssetDownloads?: boolean;
  /** The VM size the build was created on. */
  VmSize?: AzureVmSize;
}

/** Creates a multiplayer server build with the game server running as a process and returns information about the build creation request. */
export interface CreateBuildWithProcessBasedServerRequest {
  /** When true, assets will not be copied for each server inside the VM. All serverswill run from the same set of assets, or will have the same assets mounted in the container. */
  AreAssetsReadonly?: boolean;
  /** The build name. */
  BuildName: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** The list of game assets related to the build. */
  GameAssetReferences: AssetReferenceParams[];
  /** The game certificates for the build. */
  GameCertificateReferences?: GameCertificateReferenceParams[];
  /** The working directory for the game process. If this is not provided, the working directory will be set based on the mount path of the game server executable. */
  GameWorkingDirectory?: string;
  /** The instrumentation configuration for the build. */
  InstrumentationConfiguration?: InstrumentationConfiguration;
  /** Indicates whether this build will be created using the OS Preview versionPreview OS is recommended for dev builds to detect any breaking changes before they are released to retail. Retail builds should set this value to false. */
  IsOSPreview?: boolean;
  /** Metadata to tag the build. The keys are case insensitive. The build metadata is made available to the server through Game Server SDK (GSDK).Constraints: Maximum number of keys: 30, Maximum key length: 50, Maximum value length: 100 */
  Metadata?: Record<string, unknown>;
  /** The number of multiplayer servers to host on a single VM. */
  MultiplayerServerCountPerVm: number;
  /** The OS platform used for running the game process. */
  OsPlatform?: OsPlatform;
  /** The ports to map the build on. */
  Ports: Port[];
  /** The region configurations for the build. */
  RegionConfigurations: BuildRegionParams[];
  /** The command to run when the multiplayer server is started, including any arguments. The path to any executable should be relative to the root asset folder when unzipped. */
  StartMultiplayerServerCommand: string;
  /** When true, assets will be downloaded and uncompressed in memory, without the compressedversion being written first to disc. */
  UseStreamingForAssetDownloads?: boolean;
  /** The VM size to create the build on. */
  VmSize?: AzureVmSize;
}

export interface CreateBuildWithProcessBasedServerResponse {
  /** When true, assets will not be copied for each server inside the VM. All serverswill run from the same set of assets, or will have the same assets mounted in the container. */
  AreAssetsReadonly?: boolean;
  /** The guid string build ID. Must be unique for every build. */
  BuildId?: string;
  /** The build name. */
  BuildName?: string;
  /** The flavor of container of the build. */
  ContainerFlavor?: ContainerFlavor;
  /** The time the build was created in UTC. */
  CreationTime?: string;
  /** The game assets for the build. */
  GameAssetReferences?: AssetReference[];
  /** The game certificates for the build. */
  GameCertificateReferences?: GameCertificateReference[];
  /** The working directory for the game process. If this is not provided, the working directory will be set based on the mount path of the game server executable. */
  GameWorkingDirectory?: string;
  /** The instrumentation configuration for this build. */
  InstrumentationConfiguration?: InstrumentationConfiguration;
  /** Indicates whether this build will be created using the OS Preview versionPreview OS is recommended for dev builds to detect any breaking changes before they are released to retail. Retail builds should set this value to false. */
  IsOSPreview?: boolean;
  /** The metadata of the build. */
  Metadata?: Record<string, unknown>;
  /** The number of multiplayer servers to host on a single VM of the build. */
  MultiplayerServerCountPerVm: number;
  /** The OS platform used for running the game process. */
  OsPlatform?: OsPlatform;
  /** The ports the build is mapped on. */
  Ports?: Port[];
  /** The region configuration for the build. */
  RegionConfigurations?: BuildRegion[];
  /** The type of game server being hosted. */
  ServerType?: ServerType;
  /** The command to run when the multiplayer server is started, including any arguments. The path to any executable is relative to the root asset folder when unzipped. */
  StartMultiplayerServerCommand?: string;
  /** When true, assets will be downloaded and uncompressed in memory, without the compressedversion being written first to disc. */
  UseStreamingForAssetDownloads?: boolean;
  /** The VM size the build was created on. */
  VmSize?: AzureVmSize;
}

/** The client specifies the creator's attributes and optionally a list of other users to match with. */
export interface CreateMatchmakingTicketRequest {
  /** The User who created this ticket. */
  Creator: MatchmakingPlayer;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** How long to attempt matching this ticket in seconds. */
  GiveUpAfterSeconds: number;
  /** A list of Entity Keys of other users to match with. */
  MembersToMatchWith?: EntityKey[];
  /** The Id of a match queue. */
  QueueName: string;
}

export interface CreateMatchmakingTicketResult {
  /** The Id of the ticket to find a match for. */
  TicketId: string;
}

/** Creates a remote user to log on to a VM for a multiplayer server build in a specific region. Returns user credential information necessary to log on. */
export interface CreateRemoteUserRequest {
  /** The guid string build ID of to create the remote user for. */
  BuildId: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** The expiration time for the remote user created. Defaults to expiring in one day if not specified. */
  ExpirationTime?: string;
  /** The region of virtual machine to create the remote user for. */
  Region: AzureRegion;
  /** The username to create the remote user with. */
  Username: string;
  /** The virtual machine ID the multiplayer server is located on. */
  VmId: string;
}

export interface CreateRemoteUserResponse {
  /** The expiration time for the remote user created. */
  ExpirationTime?: string;
  /** The generated password for the remote user that was created. */
  Password?: string;
  /** The username for the remote user that was created. */
  Username?: string;
}

/** The server specifies all the members, their teams and their attributes, and the server details if applicable. */
export interface CreateServerBackfillTicketRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** How long to attempt matching this ticket in seconds. */
  GiveUpAfterSeconds: number;
  /** The users who will be part of this ticket, along with their team assignments. */
  Members: MatchmakingPlayerWithTeamAssignment[];
  /** The Id of a match queue. */
  QueueName: string;
  /** The details of the server the members are connected to. */
  ServerDetails?: ServerDetails;
}

export interface CreateServerBackfillTicketResult {
  /** The Id of the ticket to find a match for. */
  TicketId: string;
}

/** The server specifies all the members and their attributes. */
export interface CreateServerMatchmakingTicketRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** How long to attempt matching this ticket in seconds. */
  GiveUpAfterSeconds: number;
  /** The users who will be part of this ticket. */
  Members: MatchmakingPlayer[];
  /** The Id of a match queue. */
  QueueName: string;
}

/** Creates a request to change a title's multiplayer server quotas. */
export interface CreateTitleMultiplayerServersQuotaChangeRequest {
  /** A brief description of the requested changes. */
  ChangeDescription?: string;
  /** Changes to make to the titles cores quota. */
  Changes: CoreCapacityChange[];
  /** Email to be contacted by our team about this request. Only required when a request is not approved. */
  ContactEmail?: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Additional information about this request that our team can use to better understand the requirements. */
  Notes?: string;
  /** When these changes would need to be in effect. Only required when a request is not approved. */
  StartDate?: string;
}

export interface CreateTitleMultiplayerServersQuotaChangeResponse {
  /** Id of the change request that was created. */
  RequestId?: string;
  /** Determines if the request was approved or not. When false, our team is reviewing and may respond within 2 business days. */
  WasApproved: boolean;
}

export interface CurrentServerStats {
  /** The number of active multiplayer servers. */
  Active: number;
  /** The number of multiplayer servers still downloading game resources (such as assets). */
  Propping: number;
  /** The number of standingby multiplayer servers. */
  StandingBy: number;
  /** The total number of multiplayer servers. */
  Total: number;
}

export interface CustomDifferenceRuleExpansion {
  /** Manually specify the values to use for each expansion interval (this overrides Difference, Delta, and MaxDifference). */
  DifferenceOverrides: OverrideDouble[];
  /** How many seconds before this rule is expanded. */
  SecondsBetweenExpansions: number;
}

export interface CustomRegionSelectionRuleExpansion {
  /** Manually specify the maximum latency to use for each expansion interval. */
  MaxLatencyOverrides: OverrideUnsignedInt[];
  /** How many seconds before this rule is expanded. */
  SecondsBetweenExpansions: number;
}

export interface CustomSetIntersectionRuleExpansion {
  /** Manually specify the values to use for each expansion interval. */
  MinIntersectionSizeOverrides: OverrideUnsignedInt[];
  /** How many seconds before this rule is expanded. */
  SecondsBetweenExpansions: number;
}

export interface CustomTeamDifferenceRuleExpansion {
  /** Manually specify the team difference value to use for each expansion interval. */
  DifferenceOverrides: OverrideDouble[];
  /** How many seconds before this rule is expanded. */
  SecondsBetweenExpansions: number;
}

export interface CustomTeamSizeBalanceRuleExpansion {
  /** Manually specify the team size difference to use for each expansion interval. */
  DifferenceOverrides: OverrideUnsignedInt[];
  /** How many seconds before this rule is expanded. */
  SecondsBetweenExpansions: number;
}

/** Deletes a multiplayer server game asset for a title. */
export interface DeleteAssetRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** The filename of the asset to delete. */
  FileName: string;
}

/** Deletes a multiplayer server build alias. */
export interface DeleteBuildAliasRequest {
  /** The guid string alias ID of the alias to perform the action on. */
  AliasId: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
}

/** Removes a multiplayer server build's region. */
export interface DeleteBuildRegionRequest {
  /** The guid string ID of the build we want to update regions for. */
  BuildId: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** The build region to delete. */
  Region: AzureRegion;
}

/** Deletes a multiplayer server build. */
export interface DeleteBuildRequest {
  /** The guid string build ID of the build to delete. */
  BuildId: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
}

/** Deletes a multiplayer server game certificate. */
export interface DeleteCertificateRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** The name of the certificate. */
  Name: string;
}

/** Removes the specified container image repository. After this operation, a 'docker pull' will fail for all the tags of the specified image. Morever, ListContainerImages will not return the specified image. */
export interface DeleteContainerImageRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** The container image repository we want to delete. */
  ImageName?: string;
}

/** Deletes a remote user to log on to a VM for a multiplayer server build in a specific region. Returns user credential information necessary to log on. */
export interface DeleteRemoteUserRequest {
  /** The guid string build ID of the multiplayer server where the remote user is to delete. */
  BuildId: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** The region of the multiplayer server where the remote user is to delete. */
  Region: AzureRegion;
  /** The username of the remote user to delete. */
  Username: string;
  /** The virtual machine ID the multiplayer server is located on. */
  VmId: string;
}

export interface DifferenceRule {
  /** Description of the attribute used by this rule to match tickets. */
  Attribute: QueueRuleAttribute;
  /** Describes the behavior when an attribute is not specified in the ticket creation request or in the user's entity profile. */
  AttributeNotSpecifiedBehavior: AttributeNotSpecifiedBehavior;
  /** Collection of fields relating to expanding this rule at set intervals. Only one expansion can be set per rule. When this is set, Difference is ignored. */
  CustomExpansion?: CustomDifferenceRuleExpansion;
  /** The default value assigned to tickets that are missing the attribute specified by AttributePath (assuming that AttributeNotSpecifiedBehavior is false). Optional. */
  DefaultAttributeValue?: number;
  /** The allowed difference between any two tickets at the start of matchmaking. */
  Difference: number;
  /** Collection of fields relating to expanding this rule at set intervals. Only one expansion can be set per rule. */
  LinearExpansion?: LinearDifferenceRuleExpansion;
  /** How values are treated when there are multiple players in a single ticket. */
  MergeFunction: AttributeMergeFunction;
  /** Friendly name chosen by developer. */
  Name: string;
  /** How many seconds before this rule is no longer enforced (but tickets that comply with this rule will still be prioritized over those that don't). Leave blank if this rule is always enforced. */
  SecondsUntilOptional?: number;
  /** The relative weight of this rule compared to others. */
  Weight: number;
}

export interface DynamicStandbySettings {
  /** List of auto standing by trigger values and corresponding standing by multiplier. Defaults to 1.5X at 50%, 3X at 25%, and 4X at 5% */
  DynamicFloorMultiplierThresholds?: DynamicStandbyThreshold[];
  /** When true, dynamic standby will be enabled */
  IsEnabled: boolean;
  /** The time it takes to reduce target standing by to configured floor value after an increase. Defaults to 30 minutes */
  RampDownSeconds?: number;
}

export interface DynamicStandbyThreshold {
  /** When the trigger threshold is reached, multiply by this value */
  Multiplier: number;
  /** The multiplier will be applied when the actual standby divided by target standby floor is less than this value */
  TriggerThresholdPercentage: number;
}

export interface EmptyResponse {}

/** Enables the multiplayer server feature for a title and returns the enabled status. The enabled status can be Initializing, Enabled, and Disabled. It can up to 20 minutes or more for the title to be enabled for the feature. On average, it can take up to 20 minutes for the title to be enabled for the feature. */
export interface EnableMultiplayerServersForTitleRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
}

export interface EnableMultiplayerServersForTitleResponse {
  /** The enabled status for the multiplayer server features for the title. */
  Status?: TitleMultiplayerServerEnabledStatus;
}

/** Combined entity type and ID structure which uniquely identifies a single entity. */
export interface EntityKey {
  /** Unique ID of the entity. */
  Id: string;
  /** Entity type. See https://docs.microsoft.com/gaming/playfab/features/data/entities/available-built-in-entity-types */
  Type?: string;
}

export interface GameCertificateReference {
  /** An alias for the game certificate. The game server will reference this alias via GSDK config to retrieve the game certificate. This alias is used as an identifier in game server code to allow a new certificate with different Name field to be uploaded without the need to change any game server code to reference the new Name. */
  GsdkAlias?: string;
  /** The name of the game certificate. This name should match the name of a certificate that was previously uploaded to this title. */
  Name?: string;
}

export interface GameCertificateReferenceParams {
  /** An alias for the game certificate. The game server will reference this alias via GSDK config to retrieve the game certificate. This alias is used as an identifier in game server code to allow a new certificate with different Name field to be uploaded without the need to change any game server code to reference the new Name. */
  GsdkAlias: string;
  /** The name of the game certificate. This name should match the name of a certificate that was previously uploaded to this title. */
  Name: string;
}

/** Gets the URL to upload assets to. */
export interface GetAssetUploadUrlRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** The asset's file name to get the upload URL for. */
  FileName: string;
}

export interface GetAssetUploadUrlResponse {
  /** The asset's upload URL. */
  AssetUploadUrl?: string;
  /** The asset's file name to get the upload URL for. */
  FileName?: string;
}

/** Returns the details about a multiplayer server build alias. */
export interface GetBuildAliasRequest {
  /** The guid string alias ID of the alias to perform the action on. */
  AliasId: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
}

/** Returns the details about a multiplayer server build. */
export interface GetBuildRequest {
  /** The guid string build ID of the build to get. */
  BuildId: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
}

export interface GetBuildResponse {
  /** When true, assets will not be copied for each server inside the VM. All serverswill run from the same set of assets, or will have the same assets mounted in the container. */
  AreAssetsReadonly?: boolean;
  /** The guid string build ID of the build. */
  BuildId?: string;
  /** The build name. */
  BuildName?: string;
  /** The current build status. Valid values are - Deploying, Deployed, DeletingRegion, Unhealthy. */
  BuildStatus?: string;
  /** The flavor of container of he build. */
  ContainerFlavor?: ContainerFlavor;
  /** The container command to run when the multiplayer server has been allocated, including any arguments. This only applies to custom builds. If the build is a managed build, this field will be null. */
  ContainerRunCommand?: string;
  /** The time the build was created in UTC. */
  CreationTime?: string;
  /** The custom game container image for a custom build. */
  CustomGameContainerImage?: ContainerImageReference;
  /** The game assets for the build. */
  GameAssetReferences?: AssetReference[];
  /** The game certificates for the build. */
  GameCertificateReferences?: GameCertificateReference[];
  /** The instrumentation configuration of the build. */
  InstrumentationConfiguration?: InstrumentationConfiguration;
  /** Metadata of the build. The keys are case insensitive. The build metadata is made available to the server through Game Server SDK (GSDK). */
  Metadata?: Record<string, unknown>;
  /** The number of multiplayer servers to hosted on a single VM of the build. */
  MultiplayerServerCountPerVm: number;
  /** The OS platform used for running the game process. */
  OsPlatform?: OsPlatform;
  /** The ports the build is mapped on. */
  Ports?: Port[];
  /** The region configuration for the build. */
  RegionConfigurations?: BuildRegion[];
  /** The type of game server being hosted. */
  ServerType?: ServerType;
  /** The command to run when the multiplayer server has been allocated, including any arguments. This only applies to managed builds. If the build is a custom build, this field will be null. */
  StartMultiplayerServerCommand?: string;
  /** When true, assets will be downloaded and uncompressed in memory, without the compressedversion being written first to disc. */
  UseStreamingForAssetDownloads?: boolean;
  /** The VM size the build was created on. */
  VmSize?: AzureVmSize;
}

/** Gets credentials to the container registry where game developers can upload custom container images to before creating a new build. */
export interface GetContainerRegistryCredentialsRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
}

export interface GetContainerRegistryCredentialsResponse {
  /** The url of the container registry. */
  DnsName?: string;
  /** The password for accessing the container registry. */
  Password?: string;
  /** The username for accessing the container registry. */
  Username?: string;
}

/** Gets the current configuration for a queue. */
export interface GetMatchmakingQueueRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** The Id of the matchmaking queue to retrieve. */
  QueueName?: string;
}

export interface GetMatchmakingQueueResult {
  /** The matchmaking queue config. */
  MatchmakingQueue?: MatchmakingQueueConfig;
}

/** The ticket includes the invited players, their attributes if they have joined, the ticket status, the match Id when applicable, etc. Only servers, the ticket creator and the invited players can get the ticket. */
export interface GetMatchmakingTicketRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Determines whether the matchmaking attributes will be returned as an escaped JSON string or as an un-escaped JSON object. */
  EscapeObject: boolean;
  /** The name of the queue to find a match for. */
  QueueName: string;
  /** The Id of the ticket to find a match for. */
  TicketId: string;
}

export interface GetMatchmakingTicketResult {
  /** The reason why the current ticket was canceled. This field is only set if the ticket is in canceled state. */
  CancellationReasonString?: string;
  /** The server date and time at which ticket was created. */
  Created: string;
  /** The Creator's entity key. */
  Creator: EntityKey;
  /** How long to attempt matching this ticket in seconds. */
  GiveUpAfterSeconds: number;
  /** The Id of a match. */
  MatchId?: string;
  /** A list of Users that have joined this ticket. */
  Members: MatchmakingPlayer[];
  /** A list of PlayFab Ids of Users to match with. */
  MembersToMatchWith?: EntityKey[];
  /** The Id of a match queue. */
  QueueName: string;
  /** The current ticket status. Possible values are: WaitingForPlayers, WaitingForMatch, WaitingForServer, Canceled and Matched. */
  Status: string;
  /** The Id of the ticket to find a match for. */
  TicketId: string;
}

/** When matchmaking has successfully matched together a collection of tickets, it produces a 'match' with an Id. The match contains all of the players that were matched together, and their team assigments. Only servers and ticket members can get the match. */
export interface GetMatchRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Determines whether the matchmaking attributes will be returned as an escaped JSON string or as an un-escaped JSON object. */
  EscapeObject: boolean;
  /** The Id of a match. */
  MatchId: string;
  /** The name of the queue to join. */
  QueueName: string;
  /** Determines whether the matchmaking attributes for each user should be returned in the response for match request. */
  ReturnMemberAttributes: boolean;
}

export interface GetMatchResult {
  /** The Id of a match. */
  MatchId: string;
  /** A list of Users that are matched together, along with their team assignments. */
  Members: MatchmakingPlayerWithTeamAssignment[];
  /** A list of regions that the match could be played in sorted by preference. This value is only set if the queue has a region selection rule. */
  RegionPreferences?: string[];
  /** The details of the server that the match has been allocated to. */
  ServerDetails?: ServerDetails;
}

/** Gets multiplayer server session details for a build in a specific region. */
export interface GetMultiplayerServerDetailsRequest {
  /** The guid string build ID of the multiplayer server to get details for. */
  BuildId: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** The region the multiplayer server is located in to get details for. */
  Region: AzureRegion;
  /** The title generated guid string session ID of the multiplayer server to get details for. This is to keep track of multiplayer server sessions. */
  SessionId: string;
}

export interface GetMultiplayerServerDetailsResponse {
  /** The identity of the build in which the server was allocated. */
  BuildId?: string;
  /** The connected players in the multiplayer server. */
  ConnectedPlayers?: ConnectedPlayer[];
  /** The fully qualified domain name of the virtual machine that is hosting this multiplayer server. */
  FQDN?: string;
  /** The IPv4 address of the virtual machine that is hosting this multiplayer server. */
  IPV4Address?: string;
  /** The time (UTC) at which a change in the multiplayer server state was observed. */
  LastStateTransitionTime?: string;
  /** The ports the multiplayer server uses. */
  Ports?: Port[];
  /** The region the multiplayer server is located in. */
  Region?: AzureRegion;
  /** The string server ID of the multiplayer server generated by PlayFab. */
  ServerId?: string;
  /** The guid string session ID of the multiplayer server. */
  SessionId?: string;
  /** The state of the multiplayer server. */
  State?: string;
  /** The virtual machine ID that the multiplayer server is located on. */
  VmId?: string;
}

/** Gets multiplayer server logs for a specific server id in a region. The logs are available only after a server has terminated. */
export interface GetMultiplayerServerLogsRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** The server ID of multiplayer server to get logs for. */
  ServerId: string;
}

export interface GetMultiplayerServerLogsResponse {
  /** URL for logs download. */
  LogDownloadUrl?: string;
}

/** Gets multiplayer server logs for a specific server id in a region. The logs are available only after a server has terminated. */
export interface GetMultiplayerSessionLogsBySessionIdRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** The server ID of multiplayer server to get logs for. */
  SessionId: string;
}

/** Returns the matchmaking statistics for a queue. These include the number of players matching and the statistics related to the time to match statistics in seconds (average and percentiles). Statistics are refreshed once every 5 minutes. Servers can access all statistics no matter what the ClientStatisticsVisibility is configured to. Clients can access statistics according to the ClientStatisticsVisibility. Client requests are forbidden if all visibility fields are false. */
export interface GetQueueStatisticsRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** The name of the queue. */
  QueueName: string;
}

export interface GetQueueStatisticsResult {
  /** The current number of players in the matchmaking queue, who are waiting to be matched. */
  NumberOfPlayersMatching?: number;
  /** Statistics representing the time (in seconds) it takes for tickets to find a match. */
  TimeToMatchStatisticsInSeconds?: Statistics;
}

/** Gets a remote login endpoint to a VM that is hosting a multiplayer server build in a specific region. */
export interface GetRemoteLoginEndpointRequest {
  /** The guid string build ID of the multiplayer server to get remote login information for. */
  BuildId: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** The region of the multiplayer server to get remote login information for. */
  Region: AzureRegion;
  /** The virtual machine ID the multiplayer server is located on. */
  VmId: string;
}

export interface GetRemoteLoginEndpointResponse {
  /** The remote login IPV4 address of multiplayer server. */
  IPV4Address?: string;
  /** The remote login port of multiplayer server. */
  Port: number;
}

/** The ticket includes the players, their attributes, their teams, the ticket status, the match Id and the server details when applicable, etc. Only servers can get the ticket. */
export interface GetServerBackfillTicketRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Determines whether the matchmaking attributes will be returned as an escaped JSON string or as an un-escaped JSON object. */
  EscapeObject: boolean;
  /** The name of the queue to find a match for. */
  QueueName: string;
  /** The Id of the ticket to find a match for. */
  TicketId: string;
}

export interface GetServerBackfillTicketResult {
  /** The reason why the current ticket was canceled. This field is only set if the ticket is in canceled state. */
  CancellationReasonString?: string;
  /** The server date and time at which ticket was created. */
  Created: string;
  /** How long to attempt matching this ticket in seconds. */
  GiveUpAfterSeconds: number;
  /** The Id of a match. */
  MatchId?: string;
  /** A list of Users that are part of this ticket, along with their team assignments. */
  Members: MatchmakingPlayerWithTeamAssignment[];
  /** The Id of a match queue. */
  QueueName: string;
  /** The details of the server the members are connected to. */
  ServerDetails: ServerDetails;
  /** The current ticket status. Possible values are: WaitingForMatch, Canceled and Matched. */
  Status: string;
  /** The Id of the ticket to find a match for. */
  TicketId: string;
}

/** Gets the status of whether a title is enabled for the multiplayer server feature. The enabled status can be Initializing, Enabled, and Disabled. */
export interface GetTitleEnabledForMultiplayerServersStatusRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
}

export interface GetTitleEnabledForMultiplayerServersStatusResponse {
  /** The enabled status for the multiplayer server features for the title. */
  Status?: TitleMultiplayerServerEnabledStatus;
}

/** Gets a title's server quota change request. */
export interface GetTitleMultiplayerServersQuotaChangeRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Id of the change request to get. */
  RequestId: string;
}

export interface GetTitleMultiplayerServersQuotaChangeResponse {
  /** The change request for this title. */
  Change?: QuotaChange;
}

/** Gets the quotas for a title in relation to multiplayer servers. */
export interface GetTitleMultiplayerServersQuotasRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
}

export interface GetTitleMultiplayerServersQuotasResponse {
  /** The various quotas for multiplayer servers for the title. */
  Quotas?: TitleMultiplayerServersQuotas;
}

export interface InstrumentationConfiguration {
  /** The list of processes to be monitored on a VM for this build. Providing processes will turn on performance metrics collection for this build. Process names should not include extensions. If the game server process is: GameServer.exe; then, ProcessesToMonitor = [ GameServer ]  */
  ProcessesToMonitor?: string[];
}

/** Add the player to a matchmaking ticket and specify all of its matchmaking attributes. Players can join a ticket if and only if their EntityKeys are already listed in the ticket's Members list. The matchmaking service automatically starts matching the ticket against other matchmaking tickets once all players have joined the ticket. It is not possible to join a ticket once it has started matching. */
export interface JoinMatchmakingTicketRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** The User who wants to join the ticket. Their Id must be listed in PlayFabIdsToMatchWith. */
  Member: MatchmakingPlayer;
  /** The name of the queue to join. */
  QueueName: string;
  /** The Id of the ticket to find a match for. */
  TicketId: string;
}

export interface JoinMatchmakingTicketResult {}

export interface LinearDifferenceRuleExpansion {
  /** This value gets added to Difference at every expansion interval. */
  Delta: number;
  /** Once the total difference reaches this value, expansion stops. Optional. */
  Limit?: number;
  /** How many seconds before this rule is expanded. */
  SecondsBetweenExpansions: number;
}

export interface LinearRegionSelectionRuleExpansion {
  /** This value gets added to MaxLatency at every expansion interval. */
  Delta: number;
  /** Once the max Latency reaches this value, expansion stops. */
  Limit: number;
  /** How many seconds before this rule is expanded. */
  SecondsBetweenExpansions: number;
}

export interface LinearSetIntersectionRuleExpansion {
  /** This value gets added to MinIntersectionSize at every expansion interval. */
  Delta: number;
  /** How many seconds before this rule is expanded. */
  SecondsBetweenExpansions: number;
}

export interface LinearTeamDifferenceRuleExpansion {
  /** This value gets added to Difference at every expansion interval. */
  Delta: number;
  /** Once the total difference reaches this value, expansion stops. Optional. */
  Limit?: number;
  /** How many seconds before this rule is expanded. */
  SecondsBetweenExpansions: number;
}

export interface LinearTeamSizeBalanceRuleExpansion {
  /** This value gets added to Difference at every expansion interval. */
  Delta: number;
  /** Once the total difference reaches this value, expansion stops. Optional. */
  Limit?: number;
  /** How many seconds before this rule is expanded. */
  SecondsBetweenExpansions: number;
}

export interface LinuxInstrumentationConfiguration {
  /** Designates whether Linux instrumentation configuration will be enabled for this Build */
  IsEnabled: boolean;
}

/** Returns a list of multiplayer server game asset summaries for a title. */
export interface ListAssetSummariesRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** The page size for the request. */
  PageSize?: number;
  /** The skip token for the paged request. */
  SkipToken?: string;
}

export interface ListAssetSummariesResponse {
  /** The list of asset summaries. */
  AssetSummaries?: AssetSummary[];
  /** The page size on the response. */
  PageSize: number;
  /** The skip token for the paged response. */
  SkipToken?: string;
}

/** Returns a list of summarized details of all multiplayer server builds for a title. */
export interface ListBuildAliasesRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** The page size for the request. */
  PageSize?: number;
  /** The skip token for the paged request. */
  SkipToken?: string;
}

export interface ListBuildAliasesResponse {
  /** The list of build aliases for the title */
  BuildAliases?: BuildAliasDetailsResponse[];
  /** The page size on the response. */
  PageSize: number;
  /** The skip token for the paged response. */
  SkipToken?: string;
}

/** Returns a list of summarized details of all multiplayer server builds for a title. */
export interface ListBuildSummariesRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** The page size for the request. */
  PageSize?: number;
  /** The skip token for the paged request. */
  SkipToken?: string;
}

export interface ListBuildSummariesResponse {
  /** The list of build summaries for a title. */
  BuildSummaries?: BuildSummary[];
  /** The page size on the response. */
  PageSize: number;
  /** The skip token for the paged response. */
  SkipToken?: string;
}

/** Returns a list of multiplayer server game certificates for a title. */
export interface ListCertificateSummariesRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** The page size for the request. */
  PageSize?: number;
  /** The skip token for the paged request. */
  SkipToken?: string;
}

export interface ListCertificateSummariesResponse {
  /** The list of game certificates. */
  CertificateSummaries?: CertificateSummary[];
  /** The page size on the response. */
  PageSize: number;
  /** The skip token for the paged response. */
  SkipToken?: string;
}

/** Returns a list of the container images that have been uploaded to the container registry for a title. */
export interface ListContainerImagesRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** The page size for the request. */
  PageSize?: number;
  /** The skip token for the paged request. */
  SkipToken?: string;
}

export interface ListContainerImagesResponse {
  /** The list of container images. */
  Images?: string[];
  /** The page size on the response. */
  PageSize: number;
  /** The skip token for the paged response. */
  SkipToken?: string;
}

/** Returns a list of the tags for a particular container image that exists in the container registry for a title. */
export interface ListContainerImageTagsRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** The container images we want to list tags for. */
  ImageName?: string;
}

export interface ListContainerImageTagsResponse {
  /** The list of tags for a particular container image. */
  Tags?: string[];
}

/** Gets a list of all the matchmaking queue configurations for the title. */
export interface ListMatchmakingQueuesRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
}

export interface ListMatchmakingQueuesResult {
  /** The list of matchmaking queue configs for this title. */
  MatchMakingQueues?: MatchmakingQueueConfig[];
}

/** If the caller is a title, the EntityKey in the request is required. If the caller is a player, then it is optional. If it is provided it must match the caller's entity. */
export interface ListMatchmakingTicketsForPlayerRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** The entity key for which to find the ticket Ids. */
  Entity?: EntityKey;
  /** The name of the queue to find a match for. */
  QueueName: string;
}

export interface ListMatchmakingTicketsForPlayerResult {
  /** The list of ticket Ids the user is a member of. */
  TicketIds: string[];
}

/** Returns a list of multiplayer servers for a build in a specific region. */
export interface ListMultiplayerServersRequest {
  /** The guid string build ID of the multiplayer servers to list. */
  BuildId: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** The page size for the request. */
  PageSize?: number;
  /** The region the multiplayer servers to list. */
  Region: AzureRegion;
  /** The skip token for the paged request. */
  SkipToken?: string;
}

export interface ListMultiplayerServersResponse {
  /** The list of multiplayer server summary details. */
  MultiplayerServerSummaries?: MultiplayerServerSummary[];
  /** The page size on the response. */
  PageSize: number;
  /** The skip token for the paged response. */
  SkipToken?: string;
}

/** Returns a list of quality of service servers for party. */
export interface ListPartyQosServersRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
}

export interface ListPartyQosServersResponse {
  /** The page size on the response. */
  PageSize: number;
  /** The list of QoS servers. */
  QosServers?: QosServer[];
  /** The skip token for the paged response. */
  SkipToken?: string;
}

/** Returns a list of quality of service servers for a title. */
export interface ListQosServersForTitleRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Indicates that the response should contain Qos servers for all regions, including those where there are no builds deployed for the title. */
  IncludeAllRegions?: boolean;
}

export interface ListQosServersForTitleResponse {
  /** The page size on the response. */
  PageSize: number;
  /** The list of QoS servers. */
  QosServers?: QosServer[];
  /** The skip token for the paged response. */
  SkipToken?: string;
}

/** List all server backfill ticket Ids the user is a member of. */
export interface ListServerBackfillTicketsForPlayerRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** The entity key for which to find the ticket Ids. */
  Entity: EntityKey;
  /** The name of the queue the tickets are in. */
  QueueName: string;
}

export interface ListServerBackfillTicketsForPlayerResult {
  /** The list of backfill ticket Ids the user is a member of. */
  TicketIds: string[];
}

/** List all server quota change requests for a title. */
export interface ListTitleMultiplayerServersQuotaChangesRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
}

export interface ListTitleMultiplayerServersQuotaChangesResponse {
  /** All change requests for this title. */
  Changes?: QuotaChange[];
}

/** Returns a list of virtual machines for a title. */
export interface ListVirtualMachineSummariesRequest {
  /** The guid string build ID of the virtual machines to list. */
  BuildId: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** The page size for the request. */
  PageSize?: number;
  /** The region of the virtual machines to list. */
  Region: AzureRegion;
  /** The skip token for the paged request. */
  SkipToken?: string;
}

export interface ListVirtualMachineSummariesResponse {
  /** The page size on the response. */
  PageSize: number;
  /** The skip token for the paged response. */
  SkipToken?: string;
  /** The list of virtual machine summaries. */
  VirtualMachines?: VirtualMachineSummary[];
}

/** A user in a matchmaking ticket. */
export interface MatchmakingPlayer {
  /** The user's attributes custom to the title. */
  Attributes?: MatchmakingPlayerAttributes;
  /** The entity key of the matchmaking user. */
  Entity: EntityKey;
}

/** The matchmaking attributes for a user. */
export interface MatchmakingPlayerAttributes {
  /** A data object representing a user's attributes. */
  DataObject?: Record<string, unknown>;
  /** An escaped data object representing a user's attributes. */
  EscapedDataObject?: string;
}

/** A player in a created matchmaking match with a team assignment. */
export interface MatchmakingPlayerWithTeamAssignment {
  /** The user's attributes custom to the title. These attributes will be null unless the request has ReturnMemberAttributes flag set to true. */
  Attributes?: MatchmakingPlayerAttributes;
  /** The entity key of the matchmaking user. */
  Entity: EntityKey;
  /** The Id of the team the User is assigned to. */
  TeamId?: string;
}

export interface MatchmakingQueueConfig {
  /** This is the buildId that will be used to allocate the multiplayer server for the match. */
  BuildId?: string;
  /** List of difference rules used to find an optimal match. */
  DifferenceRules?: DifferenceRule[];
  /** List of match total rules used to find an optimal match. */
  MatchTotalRules?: MatchTotalRule[];
  /** Maximum number of players in a match. */
  MaxMatchSize: number;
  /** Maximum number of players in a ticket. Optional. */
  MaxTicketSize?: number;
  /** Minimum number of players in a match. */
  MinMatchSize: number;
  /** Unique identifier for a Queue. Chosen by the developer. */
  Name: string;
  /** Region selection rule used to find an optimal match. */
  RegionSelectionRule?: RegionSelectionRule;
  /** Boolean flag to enable server allocation for the queue. */
  ServerAllocationEnabled: boolean;
  /** List of set intersection rules used to find an optimal match. */
  SetIntersectionRules?: SetIntersectionRule[];
  /** Controls which statistics are visible to players. */
  StatisticsVisibilityToPlayers?: StatisticsVisibilityToPlayers;
  /** List of string equality rules used to find an optimal match. */
  StringEqualityRules?: StringEqualityRule[];
  /** List of team difference rules used to find an optimal match. */
  TeamDifferenceRules?: TeamDifferenceRule[];
  /** The team configuration for a match. This may be null if there are no teams. */
  Teams?: MatchmakingQueueTeam[];
  /** Team size balance rule used to find an optimal match. */
  TeamSizeBalanceRule?: TeamSizeBalanceRule;
  /** Team ticket size similarity rule used to find an optimal match. */
  TeamTicketSizeSimilarityRule?: TeamTicketSizeSimilarityRule;
}

export interface MatchmakingQueueTeam {
  /** The maximum number of players required for the team. */
  MaxTeamSize: number;
  /** The minimum number of players required for the team. */
  MinTeamSize: number;
  /** A name to identify the team. This is case insensitive. */
  Name: string;
}

export interface MatchTotalRule {
  /** Description of the attribute used by this rule to match tickets. */
  Attribute: QueueRuleAttribute;
  /** Collection of fields relating to expanding this rule at set intervals. */
  Expansion?: MatchTotalRuleExpansion;
  /** The maximum total value for a group. Must be >= Min. */
  Max: number;
  /** The minimum total value for a group. Must be >=2. */
  Min: number;
  /** Friendly name chosen by developer. */
  Name: string;
  /** How many seconds before this rule is no longer enforced (but tickets that comply with this rule will still be prioritized over those that don't). Leave blank if this rule is always enforced. */
  SecondsUntilOptional?: number;
  /** The relative weight of this rule compared to others. */
  Weight: number;
}

export interface MatchTotalRuleExpansion {
  /** Manually specify the values to use for each expansion interval. When this is set, Max is ignored. */
  MaxOverrides?: OverrideDouble[];
  /** Manually specify the values to use for each expansion interval. When this is set, Min is ignored. */
  MinOverrides?: OverrideDouble[];
  /** How many seconds before this rule is expanded. */
  SecondsBetweenExpansions: number;
}

export interface MultiplayerServerSummary {
  /** The connected players in the multiplayer server. */
  ConnectedPlayers?: ConnectedPlayer[];
  /** The time (UTC) at which a change in the multiplayer server state was observed. */
  LastStateTransitionTime?: string;
  /** The region the multiplayer server is located in. */
  Region?: AzureRegion;
  /** The string server ID of the multiplayer server generated by PlayFab. */
  ServerId?: string;
  /** The title generated guid string session ID of the multiplayer server. */
  SessionId?: string;
  /** The state of the multiplayer server. */
  State?: string;
  /** The virtual machine ID that the multiplayer server is located on. */
  VmId?: string;
}

export enum OsPlatform {
  Windows = "Windows",
  Linux = "Linux",
}

export interface OverrideDouble {
  /** The custom expansion value. */
  Value: number;
}

export interface OverrideUnsignedInt {
  /** The custom expansion value. */
  Value: number;
}

export interface Port {
  /** The name for the port. */
  Name: string;
  /** The number for the port. */
  Num: number;
  /** The protocol for the port. */
  Protocol: ProtocolType;
}

export enum ProtocolType {
  TCP = "TCP",
  UDP = "UDP",
}

export interface QosServer {
  /** The region the QoS server is located in. */
  Region?: AzureRegion;
  /** The QoS server URL. */
  ServerUrl?: string;
}

export interface QueueRuleAttribute {
  /** Specifies which attribute in a ticket to use. */
  Path: string;
  /** Specifies which source the attribute comes from. */
  Source: AttributeSource;
}

export interface QuotaChange {
  /** A brief description of the requested changes. */
  ChangeDescription?: string;
  /** Requested changes to make to the titles cores quota. */
  Changes?: CoreCapacityChange[];
  /** Whether or not this request is pending a review. */
  IsPendingReview: boolean;
  /** Additional information about this request that our team can use to better understand the requirements. */
  Notes?: string;
  /** Id of the change request. */
  RequestId?: string;
  /** Comments by our team when a request is reviewed. */
  ReviewComments?: string;
  /** Whether or not this request was approved. */
  WasApproved: boolean;
}

export interface RegionSelectionRule {
  /** Controls how the Max Latency parameter expands over time. Only one expansion can be set per rule. When this is set, MaxLatency is ignored. */
  CustomExpansion?: CustomRegionSelectionRuleExpansion;
  /** Controls how the Max Latency parameter expands over time. Only one expansion can be set per rule. */
  LinearExpansion?: LinearRegionSelectionRuleExpansion;
  /** Specifies the maximum latency that is allowed between the client and the selected server. The value is in milliseconds. */
  MaxLatency: number;
  /** Friendly name chosen by developer. */
  Name: string;
  /** Specifies which attribute in a ticket to use. */
  Path: string;
  /** How many seconds before this rule is no longer enforced (but tickets that comply with this rule will still be prioritized over those that don't). Leave blank if this rule is always enforced. */
  SecondsUntilOptional?: number;
  /** The relative weight of this rule compared to others. */
  Weight: number;
}

/** Deletes the configuration for a queue. This will permanently delete the configuration and players will no longer be able to match in the queue. All outstanding matchmaking tickets will be cancelled. */
export interface RemoveMatchmakingQueueRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** The Id of the matchmaking queue to remove. */
  QueueName?: string;
}

export interface RemoveMatchmakingQueueResult {}

/** Requests a multiplayer server session from a particular build in any of the given preferred regions. */
export interface RequestMultiplayerServerRequest {
  /** The identifiers of the build alias to use for the request. */
  BuildAliasParams?: BuildAliasParams;
  /** The guid string build ID of the multiplayer server to request. */
  BuildId?: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Initial list of players (potentially matchmade) allowed to connect to the game. This list is passed to the game server when requested (via GSDK) and can be used to validate players connecting to it. */
  InitialPlayers?: string[];
  /** The preferred regions to request a multiplayer server from. The Multiplayer Service will iterate through the regions in the specified order and allocate a server from the first one that has servers available. */
  PreferredRegions: AzureRegion[];
  /** Data encoded as a string that is passed to the game server when requested. This can be used to to communicate information such as game mode or map through the request flow. */
  SessionCookie?: string;
  /** A guid string session ID created track the multiplayer server session over its life. */
  SessionId: string;
}

export interface RequestMultiplayerServerResponse {
  /** The identity of the build in which the server was allocated. */
  BuildId?: string;
  /** The connected players in the multiplayer server. */
  ConnectedPlayers?: ConnectedPlayer[];
  /** The fully qualified domain name of the virtual machine that is hosting this multiplayer server. */
  FQDN?: string;
  /** The IPv4 address of the virtual machine that is hosting this multiplayer server. */
  IPV4Address?: string;
  /** The time (UTC) at which a change in the multiplayer server state was observed. */
  LastStateTransitionTime?: string;
  /** The ports the multiplayer server uses. */
  Ports?: Port[];
  /** The region the multiplayer server is located in. */
  Region?: AzureRegion;
  /** The string server ID of the multiplayer server generated by PlayFab. */
  ServerId?: string;
  /** The guid string session ID of the multiplayer server. */
  SessionId?: string;
  /** The state of the multiplayer server. */
  State?: string;
  /** The virtual machine ID that the multiplayer server is located on. */
  VmId?: string;
}

/** Gets new credentials to the container registry where game developers can upload custom container images to before creating a new build. */
export interface RolloverContainerRegistryCredentialsRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
}

export interface RolloverContainerRegistryCredentialsResponse {
  /** The url of the container registry. */
  DnsName?: string;
  /** The password for accessing the container registry. */
  Password?: string;
  /** The username for accessing the container registry. */
  Username?: string;
}

export interface Schedule {
  /** A short description about this schedule. For example, "Game launch on July 15th". */
  Description?: string;
  /** The date and time in UTC at which the schedule ends. If IsRecurringWeekly is true, this schedule will keep renewing for future weeks until disabled or removed. */
  EndTime: string;
  /** Disables the schedule. */
  IsDisabled: boolean;
  /** If true, the StartTime and EndTime will get renewed every week. */
  IsRecurringWeekly: boolean;
  /** The date and time in UTC at which the schedule starts. */
  StartTime: string;
  /** The standby target to maintain for the duration of the schedule. */
  TargetStandby: number;
}

export interface ScheduledStandbySettings {
  /** When true, scheduled standby will be enabled */
  IsEnabled: boolean;
  /** A list of non-overlapping schedules */
  ScheduleList?: Schedule[];
}

export interface ServerDetails {
  /** The fully qualified domain name of the virtual machine that is hosting this multiplayer server. */
  Fqdn?: string;
  /** The IPv4 address of the virtual machine that is hosting this multiplayer server. */
  IPV4Address?: string;
  /** The ports the multiplayer server uses. */
  Ports?: Port[];
  /** The server's region. */
  Region?: string;
}

export enum ServerType {
  Container = "Container",
  Process = "Process",
}

export interface SetIntersectionRule {
  /** Description of the attribute used by this rule to match tickets. */
  Attribute: QueueRuleAttribute;
  /** Describes the behavior when an attribute is not specified in the ticket creation request or in the user's entity profile. */
  AttributeNotSpecifiedBehavior: AttributeNotSpecifiedBehavior;
  /** Collection of fields relating to expanding this rule at set intervals. Only one expansion can be set per rule. When this is set, MinIntersectionSize is ignored. */
  CustomExpansion?: CustomSetIntersectionRuleExpansion;
  /** The default value assigned to tickets that are missing the attribute specified by AttributePath (assuming that AttributeNotSpecifiedBehavior is UseDefault). Values must be unique. */
  DefaultAttributeValue?: string[];
  /** Collection of fields relating to expanding this rule at set intervals. Only one expansion can be set per rule. */
  LinearExpansion?: LinearSetIntersectionRuleExpansion;
  /** The minimum number of values that must match between sets. */
  MinIntersectionSize: number;
  /** Friendly name chosen by developer. */
  Name: string;
  /** How many seconds before this rule is no longer enforced (but tickets that comply with this rule will still be prioritized over those that don't). Leave blank if this rule is always enforced. */
  SecondsUntilOptional?: number;
  /** The relative weight of this rule compared to others. */
  Weight: number;
}

/** Use this API to create or update matchmaking queue configurations. The queue configuration defines the matchmaking rules. The matchmaking service will match tickets together according to the configured rules. Queue resources are not spun up by calling this API. Queues are created when the first ticket is submitted. */
export interface SetMatchmakingQueueRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** The matchmaking queue config. */
  MatchmakingQueue?: MatchmakingQueueConfig;
}

export interface SetMatchmakingQueueResult {}

/** Executes the shutdown callback from the GSDK and terminates the multiplayer server session. The callback in the GSDK will allow for graceful shutdown with a 15 minute timeoutIf graceful shutdown has not been completed before 15 minutes have elapsed, the multiplayer server session will be forcefully terminated on it's own. */
export interface ShutdownMultiplayerServerRequest {
  /** The guid string build ID of the multiplayer server to delete. */
  BuildId: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** The region of the multiplayer server to shut down. */
  Region: AzureRegion;
  /** A guid string session ID of the multiplayer server to shut down. */
  SessionId: string;
}

export interface Statistics {
  /** The average. */
  Average: number;
  /** The 50th percentile. */
  Percentile50: number;
  /** The 90th percentile. */
  Percentile90: number;
  /** The 99th percentile. */
  Percentile99: number;
}

export interface StatisticsVisibilityToPlayers {
  /** Whether to allow players to view the current number of players in the matchmaking queue. */
  ShowNumberOfPlayersMatching: boolean;
  /** Whether to allow players to view statistics representing the time it takes for tickets to find a match. */
  ShowTimeToMatch: boolean;
}

export interface StringEqualityRule {
  /** Description of the attribute used by this rule to match tickets. */
  Attribute: QueueRuleAttribute;
  /** Describes the behavior when an attribute is not specified in the ticket creation request or in the user's entity profile. */
  AttributeNotSpecifiedBehavior: AttributeNotSpecifiedBehavior;
  /** The default value assigned to tickets that are missing the attribute specified by AttributePath (assuming that AttributeNotSpecifiedBehavior is false). */
  DefaultAttributeValue?: string;
  /** Collection of fields relating to expanding this rule at set intervals. For StringEqualityRules, this is limited to turning the rule off or on during different intervals. */
  Expansion?: StringEqualityRuleExpansion;
  /** Friendly name chosen by developer. */
  Name: string;
  /** How many seconds before this rule is no longer enforced (but tickets that comply with this rule will still be prioritized over those that don't). Leave blank if this rule is always enforced. */
  SecondsUntilOptional?: number;
  /** The relative weight of this rule compared to others. */
  Weight: number;
}

export interface StringEqualityRuleExpansion {
  /** List of bools specifying whether the rule is applied during this expansion. */
  EnabledOverrides: boolean[];
  /** How many seconds before this rule is expanded. */
  SecondsBetweenExpansions: number;
}

export interface TeamDifferenceRule {
  /** Description of the attribute used by this rule to match teams. */
  Attribute: QueueRuleAttribute;
  /** Collection of fields relating to expanding this rule at set intervals. Only one expansion can be set per rule. When this is set, Difference is ignored. */
  CustomExpansion?: CustomTeamDifferenceRuleExpansion;
  /** The default value assigned to tickets that are missing the attribute specified by AttributePath (assuming that AttributeNotSpecifiedBehavior is false). */
  DefaultAttributeValue: number;
  /** The allowed difference between any two teams at the start of matchmaking. */
  Difference: number;
  /** Collection of fields relating to expanding this rule at set intervals. Only one expansion can be set per rule. */
  LinearExpansion?: LinearTeamDifferenceRuleExpansion;
  /** Friendly name chosen by developer. */
  Name: string;
  /** How many seconds before this rule is no longer enforced (but tickets that comply with this rule will still be prioritized over those that don't). Leave blank if this rule is always enforced. */
  SecondsUntilOptional?: number;
}

export interface TeamSizeBalanceRule {
  /** Controls how the Difference parameter expands over time. Only one expansion can be set per rule. When this is set, Difference is ignored. */
  CustomExpansion?: CustomTeamSizeBalanceRuleExpansion;
  /** The allowed difference in team size between any two teams. */
  Difference: number;
  /** Controls how the Difference parameter expands over time. Only one expansion can be set per rule. */
  LinearExpansion?: LinearTeamSizeBalanceRuleExpansion;
  /** Friendly name chosen by developer. */
  Name: string;
  /** How many seconds before this rule is no longer enforced (but tickets that comply with this rule will still be prioritized over those that don't). Leave blank if this rule is always enforced. */
  SecondsUntilOptional?: number;
}

export interface TeamTicketSizeSimilarityRule {
  /** Friendly name chosen by developer. */
  Name: string;
  /** How many seconds before this rule is no longer enforced (but tickets that comply with this rule will still be prioritized over those that don't). Leave blank if this rule is always enforced. */
  SecondsUntilOptional?: number;
}

export enum TitleMultiplayerServerEnabledStatus {
  Initializing = "Initializing",
  Enabled = "Enabled",
  Disabled = "Disabled",
}

export interface TitleMultiplayerServersQuotas {
  /** The core capacity for the various regions and VM Family */
  CoreCapacities?: CoreCapacity[];
}

/** Removes the specified tag from the image. After this operation, a 'docker pull' will fail for the specified image and tag combination. Morever, ListContainerImageTags will not return the specified tag. */
export interface UntagContainerImageRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** The container image which tag we want to remove. */
  ImageName?: string;
  /** The tag we want to remove. */
  Tag?: string;
}

/** Creates a multiplayer server build alias and returns the created alias. */
export interface UpdateBuildAliasRequest {
  /** The guid string alias Id of the alias to be updated. */
  AliasId: string;
  /** The alias name. */
  AliasName?: string;
  /** Array of build selection criteria. */
  BuildSelectionCriteria?: BuildSelectionCriterion[];
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
}

/** Updates a multiplayer server build's name. */
export interface UpdateBuildNameRequest {
  /** The guid string ID of the build we want to update the name of. */
  BuildId: string;
  /** The build name. */
  BuildName: string;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
}

/** Updates a multiplayer server build's region. */
export interface UpdateBuildRegionRequest {
  /** The guid string ID of the build we want to update regions for. */
  BuildId: string;
  /** The updated region configuration that should be applied to the specified build. */
  BuildRegion: BuildRegionParams;
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
}

/** Updates a multiplayer server build's regions. */
export interface UpdateBuildRegionsRequest {
  /** The guid string ID of the build we want to update regions for. */
  BuildId: string;
  /** The updated region configuration that should be applied to the specified build. */
  BuildRegions: BuildRegionParams[];
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
}

/** Uploads a multiplayer server game certificate. */
export interface UploadCertificateRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** The game certificate to upload. */
  GameCertificate: Certificate;
}

export interface VirtualMachineSummary {
  /** The virtual machine health status. */
  HealthStatus?: string;
  /** The virtual machine state. */
  State?: string;
  /** The virtual machine ID. */
  VmId?: string;
}

/**
 * Cancel all active tickets the player is a member of in a given queue.
 * @param {CancelAllMatchmakingTicketsForPlayerRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<CancelAllMatchmakingTicketsForPlayerResult>}
 */ 
export function CancelAllMatchmakingTicketsForPlayer(
  request: CancelAllMatchmakingTicketsForPlayerRequest,
  options: RequestOptions
): Promise<CancelAllMatchmakingTicketsForPlayerResult> {
  return dispatchRequest<CancelAllMatchmakingTicketsForPlayerResult>(
    "/Match/CancelAllMatchmakingTicketsForPlayer",
    request,
    options
  );
}

/**
 * Cancel all active backfill tickets the player is a member of in a given queue.
 * @param {CancelAllServerBackfillTicketsForPlayerRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<CancelAllServerBackfillTicketsForPlayerResult>}
 */ 
export function CancelAllServerBackfillTicketsForPlayer(
  request: CancelAllServerBackfillTicketsForPlayerRequest,
  options: RequestOptions
): Promise<CancelAllServerBackfillTicketsForPlayerResult> {
  return dispatchRequest<CancelAllServerBackfillTicketsForPlayerResult>(
    "/Match/CancelAllServerBackfillTicketsForPlayer",
    request,
    options
  );
}

/**
 * Cancel a matchmaking ticket.
 * @param {CancelMatchmakingTicketRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<CancelMatchmakingTicketResult>}
 */ 
export function CancelMatchmakingTicket(
  request: CancelMatchmakingTicketRequest,
  options: RequestOptions
): Promise<CancelMatchmakingTicketResult> {
  return dispatchRequest<CancelMatchmakingTicketResult>(
    "/Match/CancelMatchmakingTicket",
    request,
    options
  );
}

/**
 * Cancel a server backfill ticket.
 * @param {CancelServerBackfillTicketRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<CancelServerBackfillTicketResult>}
 */ 
export function CancelServerBackfillTicket(
  request: CancelServerBackfillTicketRequest,
  options: RequestOptions
): Promise<CancelServerBackfillTicketResult> {
  return dispatchRequest<CancelServerBackfillTicketResult>(
    "/Match/CancelServerBackfillTicket",
    request,
    options
  );
}

/**
 * Create a matchmaking ticket as a client.
 * @param {CreateMatchmakingTicketRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<CreateMatchmakingTicketResult>}
 */ 
export function CreateMatchmakingTicket(
  request: CreateMatchmakingTicketRequest,
  options: RequestOptions
): Promise<CreateMatchmakingTicketResult> {
  return dispatchRequest<CreateMatchmakingTicketResult>(
    "/Match/CreateMatchmakingTicket",
    request,
    options
  );
}

/**
 * Create a backfill matchmaking ticket as a server. A backfill ticket represents an ongoing game. The matchmaking service automatically starts matching the backfill ticket against other matchmaking tickets. Backfill tickets cannot match with other backfill tickets.
 * @param {CreateServerBackfillTicketRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<CreateServerBackfillTicketResult>}
 */ 
export function CreateServerBackfillTicket(
  request: CreateServerBackfillTicketRequest,
  options: RequestOptions
): Promise<CreateServerBackfillTicketResult> {
  return dispatchRequest<CreateServerBackfillTicketResult>(
    "/Match/CreateServerBackfillTicket",
    request,
    options
  );
}

/**
 * Create a matchmaking ticket as a server. The matchmaking service automatically starts matching the ticket against other matchmaking tickets.
 * @param {CreateServerMatchmakingTicketRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<CreateMatchmakingTicketResult>}
 */ 
export function CreateServerMatchmakingTicket(
  request: CreateServerMatchmakingTicketRequest,
  options: RequestOptions
): Promise<CreateMatchmakingTicketResult> {
  return dispatchRequest<CreateMatchmakingTicketResult>(
    "/Match/CreateServerMatchmakingTicket",
    request,
    options
  );
}

/**
 * Get a match.
 * @param {GetMatchRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetMatchResult>}
 */ 
export function GetMatch(
  request: GetMatchRequest,
  options: RequestOptions
): Promise<GetMatchResult> {
  return dispatchRequest<GetMatchResult>(
    "/Match/GetMatch",
    request,
    options
  );
}

/**
 * SDK support is limited to C# and Java for this API. Get a matchmaking queue configuration.
 * @param {GetMatchmakingQueueRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetMatchmakingQueueResult>}
 */ 
export function GetMatchmakingQueue(
  request: GetMatchmakingQueueRequest,
  options: RequestOptions
): Promise<GetMatchmakingQueueResult> {
  return dispatchRequest<GetMatchmakingQueueResult>(
    "/Match/GetMatchmakingQueue",
    request,
    options
  );
}

/**
 * Get a matchmaking ticket by ticket Id.
 * @param {GetMatchmakingTicketRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetMatchmakingTicketResult>}
 */ 
export function GetMatchmakingTicket(
  request: GetMatchmakingTicketRequest,
  options: RequestOptions
): Promise<GetMatchmakingTicketResult> {
  return dispatchRequest<GetMatchmakingTicketResult>(
    "/Match/GetMatchmakingTicket",
    request,
    options
  );
}

/**
 * Get the statistics for a queue.
 * @param {GetQueueStatisticsRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetQueueStatisticsResult>}
 */ 
export function GetQueueStatistics(
  request: GetQueueStatisticsRequest,
  options: RequestOptions
): Promise<GetQueueStatisticsResult> {
  return dispatchRequest<GetQueueStatisticsResult>(
    "/Match/GetQueueStatistics",
    request,
    options
  );
}

/**
 * Get a matchmaking backfill ticket by ticket Id.
 * @param {GetServerBackfillTicketRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetServerBackfillTicketResult>}
 */ 
export function GetServerBackfillTicket(
  request: GetServerBackfillTicketRequest,
  options: RequestOptions
): Promise<GetServerBackfillTicketResult> {
  return dispatchRequest<GetServerBackfillTicketResult>(
    "/Match/GetServerBackfillTicket",
    request,
    options
  );
}

/**
 * Join a matchmaking ticket.
 * @param {JoinMatchmakingTicketRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<JoinMatchmakingTicketResult>}
 */ 
export function JoinMatchmakingTicket(
  request: JoinMatchmakingTicketRequest,
  options: RequestOptions
): Promise<JoinMatchmakingTicketResult> {
  return dispatchRequest<JoinMatchmakingTicketResult>(
    "/Match/JoinMatchmakingTicket",
    request,
    options
  );
}

/**
 * SDK support is limited to C# and Java for this API. List all matchmaking queue configs.
 * @param {ListMatchmakingQueuesRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<ListMatchmakingQueuesResult>}
 */ 
export function ListMatchmakingQueues(
  request: ListMatchmakingQueuesRequest,
  options: RequestOptions
): Promise<ListMatchmakingQueuesResult> {
  return dispatchRequest<ListMatchmakingQueuesResult>(
    "/Match/ListMatchmakingQueues",
    request,
    options
  );
}

/**
 * List all matchmaking ticket Ids the user is a member of.
 * @param {ListMatchmakingTicketsForPlayerRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<ListMatchmakingTicketsForPlayerResult>}
 */ 
export function ListMatchmakingTicketsForPlayer(
  request: ListMatchmakingTicketsForPlayerRequest,
  options: RequestOptions
): Promise<ListMatchmakingTicketsForPlayerResult> {
  return dispatchRequest<ListMatchmakingTicketsForPlayerResult>(
    "/Match/ListMatchmakingTicketsForPlayer",
    request,
    options
  );
}

/**
 * List all server backfill ticket Ids the user is a member of.
 * @param {ListServerBackfillTicketsForPlayerRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<ListServerBackfillTicketsForPlayerResult>}
 */ 
export function ListServerBackfillTicketsForPlayer(
  request: ListServerBackfillTicketsForPlayerRequest,
  options: RequestOptions
): Promise<ListServerBackfillTicketsForPlayerResult> {
  return dispatchRequest<ListServerBackfillTicketsForPlayerResult>(
    "/Match/ListServerBackfillTicketsForPlayer",
    request,
    options
  );
}

/**
 * SDK support is limited to C# and Java for this API. Remove a matchmaking queue config.
 * @param {RemoveMatchmakingQueueRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<RemoveMatchmakingQueueResult>}
 */ 
export function RemoveMatchmakingQueue(
  request: RemoveMatchmakingQueueRequest,
  options: RequestOptions
): Promise<RemoveMatchmakingQueueResult> {
  return dispatchRequest<RemoveMatchmakingQueueResult>(
    "/Match/RemoveMatchmakingQueue",
    request,
    options
  );
}

/**
 * SDK support is limited to C# and Java for this API. Create or update a matchmaking queue configuration.
 * @param {SetMatchmakingQueueRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<SetMatchmakingQueueResult>}
 */ 
export function SetMatchmakingQueue(
  request: SetMatchmakingQueueRequest,
  options: RequestOptions
): Promise<SetMatchmakingQueueResult> {
  return dispatchRequest<SetMatchmakingQueueResult>(
    "/Match/SetMatchmakingQueue",
    request,
    options
  );
}

/**
 * Creates a multiplayer server build alias.
 * @param {CreateBuildAliasRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<BuildAliasDetailsResponse>}
 */ 
export function CreateBuildAlias(
  request: CreateBuildAliasRequest,
  options: RequestOptions
): Promise<BuildAliasDetailsResponse> {
  return dispatchRequest<BuildAliasDetailsResponse>(
    "/MultiplayerServer/CreateBuildAlias",
    request,
    options
  );
}

/**
 * Creates a multiplayer server build with a custom container.
 * @param {CreateBuildWithCustomContainerRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<CreateBuildWithCustomContainerResponse>}
 */ 
export function CreateBuildWithCustomContainer(
  request: CreateBuildWithCustomContainerRequest,
  options: RequestOptions
): Promise<CreateBuildWithCustomContainerResponse> {
  return dispatchRequest<CreateBuildWithCustomContainerResponse>(
    "/MultiplayerServer/CreateBuildWithCustomContainer",
    request,
    options
  );
}

/**
 * Creates a multiplayer server build with a managed container.
 * @param {CreateBuildWithManagedContainerRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<CreateBuildWithManagedContainerResponse>}
 */ 
export function CreateBuildWithManagedContainer(
  request: CreateBuildWithManagedContainerRequest,
  options: RequestOptions
): Promise<CreateBuildWithManagedContainerResponse> {
  return dispatchRequest<CreateBuildWithManagedContainerResponse>(
    "/MultiplayerServer/CreateBuildWithManagedContainer",
    request,
    options
  );
}

/**
 * Creates a multiplayer server build with the server running as a process.
 * @param {CreateBuildWithProcessBasedServerRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<CreateBuildWithProcessBasedServerResponse>}
 */ 
export function CreateBuildWithProcessBasedServer(
  request: CreateBuildWithProcessBasedServerRequest,
  options: RequestOptions
): Promise<CreateBuildWithProcessBasedServerResponse> {
  return dispatchRequest<CreateBuildWithProcessBasedServerResponse>(
    "/MultiplayerServer/CreateBuildWithProcessBasedServer",
    request,
    options
  );
}

/**
 * Creates a remote user to log on to a VM for a multiplayer server build.
 * @param {CreateRemoteUserRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<CreateRemoteUserResponse>}
 */ 
export function CreateRemoteUser(
  request: CreateRemoteUserRequest,
  options: RequestOptions
): Promise<CreateRemoteUserResponse> {
  return dispatchRequest<CreateRemoteUserResponse>(
    "/MultiplayerServer/CreateRemoteUser",
    request,
    options
  );
}

/**
 * Creates a request to change a title's multiplayer server quotas.
 * @param {CreateTitleMultiplayerServersQuotaChangeRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<CreateTitleMultiplayerServersQuotaChangeResponse>}
 */ 
export function CreateTitleMultiplayerServersQuotaChange(
  request: CreateTitleMultiplayerServersQuotaChangeRequest,
  options: RequestOptions
): Promise<CreateTitleMultiplayerServersQuotaChangeResponse> {
  return dispatchRequest<CreateTitleMultiplayerServersQuotaChangeResponse>(
    "/MultiplayerServer/CreateTitleMultiplayerServersQuotaChange",
    request,
    options
  );
}

/**
 * Deletes a multiplayer server game asset for a title.
 * @param {DeleteAssetRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<EmptyResponse>}
 */ 
export function DeleteAsset(
  request: DeleteAssetRequest,
  options: RequestOptions
): Promise<EmptyResponse> {
  return dispatchRequest<EmptyResponse>(
    "/MultiplayerServer/DeleteAsset",
    request,
    options
  );
}

/**
 * Deletes a multiplayer server build.
 * @param {DeleteBuildRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<EmptyResponse>}
 */ 
export function DeleteBuild(
  request: DeleteBuildRequest,
  options: RequestOptions
): Promise<EmptyResponse> {
  return dispatchRequest<EmptyResponse>(
    "/MultiplayerServer/DeleteBuild",
    request,
    options
  );
}

/**
 * Deletes a multiplayer server build alias.
 * @param {DeleteBuildAliasRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<EmptyResponse>}
 */ 
export function DeleteBuildAlias(
  request: DeleteBuildAliasRequest,
  options: RequestOptions
): Promise<EmptyResponse> {
  return dispatchRequest<EmptyResponse>(
    "/MultiplayerServer/DeleteBuildAlias",
    request,
    options
  );
}

/**
 * Removes a multiplayer server build's region.
 * @param {DeleteBuildRegionRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<EmptyResponse>}
 */ 
export function DeleteBuildRegion(
  request: DeleteBuildRegionRequest,
  options: RequestOptions
): Promise<EmptyResponse> {
  return dispatchRequest<EmptyResponse>(
    "/MultiplayerServer/DeleteBuildRegion",
    request,
    options
  );
}

/**
 * Deletes a multiplayer server game certificate.
 * @param {DeleteCertificateRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<EmptyResponse>}
 */ 
export function DeleteCertificate(
  request: DeleteCertificateRequest,
  options: RequestOptions
): Promise<EmptyResponse> {
  return dispatchRequest<EmptyResponse>(
    "/MultiplayerServer/DeleteCertificate",
    request,
    options
  );
}

/**
 * Deletes a container image repository.
 * @param {DeleteContainerImageRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<EmptyResponse>}
 */ 
export function DeleteContainerImageRepository(
  request: DeleteContainerImageRequest,
  options: RequestOptions
): Promise<EmptyResponse> {
  return dispatchRequest<EmptyResponse>(
    "/MultiplayerServer/DeleteContainerImageRepository",
    request,
    options
  );
}

/**
 * Deletes a remote user to log on to a VM for a multiplayer server build.
 * @param {DeleteRemoteUserRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<EmptyResponse>}
 */ 
export function DeleteRemoteUser(
  request: DeleteRemoteUserRequest,
  options: RequestOptions
): Promise<EmptyResponse> {
  return dispatchRequest<EmptyResponse>(
    "/MultiplayerServer/DeleteRemoteUser",
    request,
    options
  );
}

/**
 * Enables the multiplayer server feature for a title.
 * @param {EnableMultiplayerServersForTitleRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<EnableMultiplayerServersForTitleResponse>}
 */ 
export function EnableMultiplayerServersForTitle(
  request: EnableMultiplayerServersForTitleRequest,
  options: RequestOptions
): Promise<EnableMultiplayerServersForTitleResponse> {
  return dispatchRequest<EnableMultiplayerServersForTitleResponse>(
    "/MultiplayerServer/EnableMultiplayerServersForTitle",
    request,
    options
  );
}

/**
 * Gets the URL to upload assets to.
 * @param {GetAssetUploadUrlRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetAssetUploadUrlResponse>}
 */ 
export function GetAssetUploadUrl(
  request: GetAssetUploadUrlRequest,
  options: RequestOptions
): Promise<GetAssetUploadUrlResponse> {
  return dispatchRequest<GetAssetUploadUrlResponse>(
    "/MultiplayerServer/GetAssetUploadUrl",
    request,
    options
  );
}

/**
 * Gets a multiplayer server build.
 * @param {GetBuildRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetBuildResponse>}
 */ 
export function GetBuild(
  request: GetBuildRequest,
  options: RequestOptions
): Promise<GetBuildResponse> {
  return dispatchRequest<GetBuildResponse>(
    "/MultiplayerServer/GetBuild",
    request,
    options
  );
}

/**
 * Gets a multiplayer server build alias.
 * @param {GetBuildAliasRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<BuildAliasDetailsResponse>}
 */ 
export function GetBuildAlias(
  request: GetBuildAliasRequest,
  options: RequestOptions
): Promise<BuildAliasDetailsResponse> {
  return dispatchRequest<BuildAliasDetailsResponse>(
    "/MultiplayerServer/GetBuildAlias",
    request,
    options
  );
}

/**
 * Gets the credentials to the container registry.
 * @param {GetContainerRegistryCredentialsRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetContainerRegistryCredentialsResponse>}
 */ 
export function GetContainerRegistryCredentials(
  request: GetContainerRegistryCredentialsRequest,
  options: RequestOptions
): Promise<GetContainerRegistryCredentialsResponse> {
  return dispatchRequest<GetContainerRegistryCredentialsResponse>(
    "/MultiplayerServer/GetContainerRegistryCredentials",
    request,
    options
  );
}

/**
 * Gets multiplayer server session details for a build.
 * @param {GetMultiplayerServerDetailsRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetMultiplayerServerDetailsResponse>}
 */ 
export function GetMultiplayerServerDetails(
  request: GetMultiplayerServerDetailsRequest,
  options: RequestOptions
): Promise<GetMultiplayerServerDetailsResponse> {
  return dispatchRequest<GetMultiplayerServerDetailsResponse>(
    "/MultiplayerServer/GetMultiplayerServerDetails",
    request,
    options
  );
}

/**
 * Gets multiplayer server logs after a server has terminated.
 * @param {GetMultiplayerServerLogsRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetMultiplayerServerLogsResponse>}
 */ 
export function GetMultiplayerServerLogs(
  request: GetMultiplayerServerLogsRequest,
  options: RequestOptions
): Promise<GetMultiplayerServerLogsResponse> {
  return dispatchRequest<GetMultiplayerServerLogsResponse>(
    "/MultiplayerServer/GetMultiplayerServerLogs",
    request,
    options
  );
}

/**
 * Gets multiplayer server logs after a server has terminated.
 * @param {GetMultiplayerSessionLogsBySessionIdRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetMultiplayerServerLogsResponse>}
 */ 
export function GetMultiplayerSessionLogsBySessionId(
  request: GetMultiplayerSessionLogsBySessionIdRequest,
  options: RequestOptions
): Promise<GetMultiplayerServerLogsResponse> {
  return dispatchRequest<GetMultiplayerServerLogsResponse>(
    "/MultiplayerServer/GetMultiplayerSessionLogsBySessionId",
    request,
    options
  );
}

/**
 * Gets a remote login endpoint to a VM that is hosting a multiplayer server build.
 * @param {GetRemoteLoginEndpointRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetRemoteLoginEndpointResponse>}
 */ 
export function GetRemoteLoginEndpoint(
  request: GetRemoteLoginEndpointRequest,
  options: RequestOptions
): Promise<GetRemoteLoginEndpointResponse> {
  return dispatchRequest<GetRemoteLoginEndpointResponse>(
    "/MultiplayerServer/GetRemoteLoginEndpoint",
    request,
    options
  );
}

/**
 * Gets the status of whether a title is enabled for the multiplayer server feature.
 * @param {GetTitleEnabledForMultiplayerServersStatusRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetTitleEnabledForMultiplayerServersStatusResponse>}
 */ 
export function GetTitleEnabledForMultiplayerServersStatus(
  request: GetTitleEnabledForMultiplayerServersStatusRequest,
  options: RequestOptions
): Promise<GetTitleEnabledForMultiplayerServersStatusResponse> {
  return dispatchRequest<GetTitleEnabledForMultiplayerServersStatusResponse>(
    "/MultiplayerServer/GetTitleEnabledForMultiplayerServersStatus",
    request,
    options
  );
}

/**
 * Gets a title's server quota change request.
 * @param {GetTitleMultiplayerServersQuotaChangeRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetTitleMultiplayerServersQuotaChangeResponse>}
 */ 
export function GetTitleMultiplayerServersQuotaChange(
  request: GetTitleMultiplayerServersQuotaChangeRequest,
  options: RequestOptions
): Promise<GetTitleMultiplayerServersQuotaChangeResponse> {
  return dispatchRequest<GetTitleMultiplayerServersQuotaChangeResponse>(
    "/MultiplayerServer/GetTitleMultiplayerServersQuotaChange",
    request,
    options
  );
}

/**
 * Gets the quotas for a title in relation to multiplayer servers.
 * @param {GetTitleMultiplayerServersQuotasRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetTitleMultiplayerServersQuotasResponse>}
 */ 
export function GetTitleMultiplayerServersQuotas(
  request: GetTitleMultiplayerServersQuotasRequest,
  options: RequestOptions
): Promise<GetTitleMultiplayerServersQuotasResponse> {
  return dispatchRequest<GetTitleMultiplayerServersQuotasResponse>(
    "/MultiplayerServer/GetTitleMultiplayerServersQuotas",
    request,
    options
  );
}

/**
 * Lists archived multiplayer server sessions for a build.
 * @param {ListMultiplayerServersRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<ListMultiplayerServersResponse>}
 */ 
export function ListArchivedMultiplayerServers(
  request: ListMultiplayerServersRequest,
  options: RequestOptions
): Promise<ListMultiplayerServersResponse> {
  return dispatchRequest<ListMultiplayerServersResponse>(
    "/MultiplayerServer/ListArchivedMultiplayerServers",
    request,
    options
  );
}

/**
 * Lists multiplayer server game assets for a title.
 * @param {ListAssetSummariesRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<ListAssetSummariesResponse>}
 */ 
export function ListAssetSummaries(
  request: ListAssetSummariesRequest,
  options: RequestOptions
): Promise<ListAssetSummariesResponse> {
  return dispatchRequest<ListAssetSummariesResponse>(
    "/MultiplayerServer/ListAssetSummaries",
    request,
    options
  );
}

/**
 * Lists details of all build aliases for a title. Accepts tokens for title and if game client access is enabled, allows game client to request list of builds with player entity token.
 * @param {ListBuildAliasesRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<ListBuildAliasesResponse>}
 */ 
export function ListBuildAliases(
  request: ListBuildAliasesRequest,
  options: RequestOptions
): Promise<ListBuildAliasesResponse> {
  return dispatchRequest<ListBuildAliasesResponse>(
    "/MultiplayerServer/ListBuildAliases",
    request,
    options
  );
}

/**
 * Lists summarized details of all multiplayer server builds for a title. Accepts tokens for title and if game client access is enabled, allows game client to request list of builds with player entity token.
 * @param {ListBuildSummariesRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<ListBuildSummariesResponse>}
 */ 
export function ListBuildSummariesV2(
  request: ListBuildSummariesRequest,
  options: RequestOptions
): Promise<ListBuildSummariesResponse> {
  return dispatchRequest<ListBuildSummariesResponse>(
    "/MultiplayerServer/ListBuildSummariesV2",
    request,
    options
  );
}

/**
 * Lists multiplayer server game certificates for a title.
 * @param {ListCertificateSummariesRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<ListCertificateSummariesResponse>}
 */ 
export function ListCertificateSummaries(
  request: ListCertificateSummariesRequest,
  options: RequestOptions
): Promise<ListCertificateSummariesResponse> {
  return dispatchRequest<ListCertificateSummariesResponse>(
    "/MultiplayerServer/ListCertificateSummaries",
    request,
    options
  );
}

/**
 * Lists custom container images for a title.
 * @param {ListContainerImagesRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<ListContainerImagesResponse>}
 */ 
export function ListContainerImages(
  request: ListContainerImagesRequest,
  options: RequestOptions
): Promise<ListContainerImagesResponse> {
  return dispatchRequest<ListContainerImagesResponse>(
    "/MultiplayerServer/ListContainerImages",
    request,
    options
  );
}

/**
 * Lists the tags for a custom container image.
 * @param {ListContainerImageTagsRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<ListContainerImageTagsResponse>}
 */ 
export function ListContainerImageTags(
  request: ListContainerImageTagsRequest,
  options: RequestOptions
): Promise<ListContainerImageTagsResponse> {
  return dispatchRequest<ListContainerImageTagsResponse>(
    "/MultiplayerServer/ListContainerImageTags",
    request,
    options
  );
}

/**
 * Lists multiplayer server sessions for a build.
 * @param {ListMultiplayerServersRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<ListMultiplayerServersResponse>}
 */ 
export function ListMultiplayerServers(
  request: ListMultiplayerServersRequest,
  options: RequestOptions
): Promise<ListMultiplayerServersResponse> {
  return dispatchRequest<ListMultiplayerServersResponse>(
    "/MultiplayerServer/ListMultiplayerServers",
    request,
    options
  );
}

/**
 * Lists quality of service servers for party.
 * @param {ListPartyQosServersRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<ListPartyQosServersResponse>}
 */ 
export function ListPartyQosServers(
  request: ListPartyQosServersRequest,
  options: RequestOptions
): Promise<ListPartyQosServersResponse> {
  return dispatchRequest<ListPartyQosServersResponse>(
    "/MultiplayerServer/ListPartyQosServers",
    request,
    options
  );
}

/**
 * Lists quality of service servers for the title. By default, servers are only returned for regions where a Multiplayer Servers build has been deployed.
 * @param {ListQosServersForTitleRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<ListQosServersForTitleResponse>}
 */ 
export function ListQosServersForTitle(
  request: ListQosServersForTitleRequest,
  options: RequestOptions
): Promise<ListQosServersForTitleResponse> {
  return dispatchRequest<ListQosServersForTitleResponse>(
    "/MultiplayerServer/ListQosServersForTitle",
    request,
    options
  );
}

/**
 * List all server quota change requests for a title.
 * @param {ListTitleMultiplayerServersQuotaChangesRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<ListTitleMultiplayerServersQuotaChangesResponse>}
 */ 
export function ListTitleMultiplayerServersQuotaChanges(
  request: ListTitleMultiplayerServersQuotaChangesRequest,
  options: RequestOptions
): Promise<ListTitleMultiplayerServersQuotaChangesResponse> {
  return dispatchRequest<ListTitleMultiplayerServersQuotaChangesResponse>(
    "/MultiplayerServer/ListTitleMultiplayerServersQuotaChanges",
    request,
    options
  );
}

/**
 * Lists virtual machines for a title.
 * @param {ListVirtualMachineSummariesRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<ListVirtualMachineSummariesResponse>}
 */ 
export function ListVirtualMachineSummaries(
  request: ListVirtualMachineSummariesRequest,
  options: RequestOptions
): Promise<ListVirtualMachineSummariesResponse> {
  return dispatchRequest<ListVirtualMachineSummariesResponse>(
    "/MultiplayerServer/ListVirtualMachineSummaries",
    request,
    options
  );
}

/**
 * Request a multiplayer server session. Accepts tokens for title and if game client access is enabled, allows game client to request a server with player entity token.
 * @param {RequestMultiplayerServerRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<RequestMultiplayerServerResponse>}
 */ 
export function RequestMultiplayerServer(
  request: RequestMultiplayerServerRequest,
  options: RequestOptions
): Promise<RequestMultiplayerServerResponse> {
  return dispatchRequest<RequestMultiplayerServerResponse>(
    "/MultiplayerServer/RequestMultiplayerServer",
    request,
    options
  );
}

/**
 * Rolls over the credentials to the container registry.
 * @param {RolloverContainerRegistryCredentialsRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<RolloverContainerRegistryCredentialsResponse>}
 */ 
export function RolloverContainerRegistryCredentials(
  request: RolloverContainerRegistryCredentialsRequest,
  options: RequestOptions
): Promise<RolloverContainerRegistryCredentialsResponse> {
  return dispatchRequest<RolloverContainerRegistryCredentialsResponse>(
    "/MultiplayerServer/RolloverContainerRegistryCredentials",
    request,
    options
  );
}

/**
 * Shuts down a multiplayer server session.
 * @param {ShutdownMultiplayerServerRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<EmptyResponse>}
 */ 
export function ShutdownMultiplayerServer(
  request: ShutdownMultiplayerServerRequest,
  options: RequestOptions
): Promise<EmptyResponse> {
  return dispatchRequest<EmptyResponse>(
    "/MultiplayerServer/ShutdownMultiplayerServer",
    request,
    options
  );
}

/**
 * Untags a container image.
 * @param {UntagContainerImageRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<EmptyResponse>}
 */ 
export function UntagContainerImage(
  request: UntagContainerImageRequest,
  options: RequestOptions
): Promise<EmptyResponse> {
  return dispatchRequest<EmptyResponse>(
    "/MultiplayerServer/UntagContainerImage",
    request,
    options
  );
}

/**
 * Creates a multiplayer server build alias.
 * @param {UpdateBuildAliasRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<BuildAliasDetailsResponse>}
 */ 
export function UpdateBuildAlias(
  request: UpdateBuildAliasRequest,
  options: RequestOptions
): Promise<BuildAliasDetailsResponse> {
  return dispatchRequest<BuildAliasDetailsResponse>(
    "/MultiplayerServer/UpdateBuildAlias",
    request,
    options
  );
}

/**
 * Updates a multiplayer server build's name.
 * @param {UpdateBuildNameRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<EmptyResponse>}
 */ 
export function UpdateBuildName(
  request: UpdateBuildNameRequest,
  options: RequestOptions
): Promise<EmptyResponse> {
  return dispatchRequest<EmptyResponse>(
    "/MultiplayerServer/UpdateBuildName",
    request,
    options
  );
}

/**
 * Updates a multiplayer server build's region. If the region is not yet created, it will be created
 * @param {UpdateBuildRegionRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<EmptyResponse>}
 */ 
export function UpdateBuildRegion(
  request: UpdateBuildRegionRequest,
  options: RequestOptions
): Promise<EmptyResponse> {
  return dispatchRequest<EmptyResponse>(
    "/MultiplayerServer/UpdateBuildRegion",
    request,
    options
  );
}

/**
 * Updates a multiplayer server build's regions.
 * @param {UpdateBuildRegionsRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<EmptyResponse>}
 */ 
export function UpdateBuildRegions(
  request: UpdateBuildRegionsRequest,
  options: RequestOptions
): Promise<EmptyResponse> {
  return dispatchRequest<EmptyResponse>(
    "/MultiplayerServer/UpdateBuildRegions",
    request,
    options
  );
}

/**
 * Uploads a multiplayer server game certificate.
 * @param {UploadCertificateRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<EmptyResponse>}
 */ 
export function UploadCertificate(
  request: UploadCertificateRequest,
  options: RequestOptions
): Promise<EmptyResponse> {
  return dispatchRequest<EmptyResponse>(
    "/MultiplayerServer/UploadCertificate",
    request,
    options
  );
}

