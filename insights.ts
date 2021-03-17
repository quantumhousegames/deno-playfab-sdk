// deno-lint-ignore-file
import { dispatchRequest, RequestOptions } from "./support/runtime.ts";

export interface InsightsEmptyRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
}

export interface InsightsGetDetailsResponse {
  /** Amount of data (in MB) currently used by Insights. */
  DataUsageMb: number;
  /** Details of any error that occurred while retrieving Insights details. */
  ErrorMessage?: string;
  /** Allowed range of values for performance level and data storage retention. */
  Limits?: InsightsGetLimitsResponse;
  /** List of pending Insights operations for the title. */
  PendingOperations?: InsightsGetOperationStatusResponse[];
  /** Current Insights performance level setting. */
  PerformanceLevel: number;
  /** Current Insights data storage retention value in days. */
  RetentionDays: number;
}

export interface InsightsGetLimitsResponse {
  /** Default Insights performance level. */
  DefaultPerformanceLevel: number;
  /** Default Insights data storage retention days. */
  DefaultStorageRetentionDays: number;
  /** Maximum allowed data storage retention days. */
  StorageMaxRetentionDays: number;
  /** Minimum allowed data storage retention days. */
  StorageMinRetentionDays: number;
  /** List of Insights submeter limits for the allowed performance levels. */
  SubMeters?: InsightsPerformanceLevel[];
}

/** Returns the current status for the requested operation id. */
export interface InsightsGetOperationStatusRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Id of the Insights operation. */
  OperationId?: string;
}

export interface InsightsGetOperationStatusResponse {
  /** Optional message related to the operation details. */
  Message?: string;
  /** Time the operation was completed. */
  OperationCompletedTime: string;
  /** Id of the Insights operation. */
  OperationId?: string;
  /** Time the operation status was last updated. */
  OperationLastUpdated: string;
  /** Time the operation started. */
  OperationStartedTime: string;
  /** The type of operation, SetPerformance or SetStorageRetention. */
  OperationType?: string;
  /** The value requested for the operation. */
  OperationValue: number;
  /** Current status of the operation. */
  Status?: string;
}

/** Returns a list of operations that are in the pending state for the requested operation type. */
export interface InsightsGetPendingOperationsRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** The type of pending operations requested, or blank for all operation types. */
  OperationType?: string;
}

export interface InsightsGetPendingOperationsResponse {
  /** List of pending Insights operations. */
  PendingOperations?: InsightsGetOperationStatusResponse[];
}

export interface InsightsOperationResponse {
  /** Optional message related to the operation details. */
  Message?: string;
  /** Id of the Insights operation. */
  OperationId?: string;
  /** The type of operation, SetPerformance or SetStorageRetention. */
  OperationType?: string;
}

export interface InsightsPerformanceLevel {
  /** Number of allowed active event exports. */
  ActiveEventExports: number;
  /** Maximum cache size. */
  CacheSizeMB: number;
  /** Maximum number of concurrent queries. */
  Concurrency: number;
  /** Number of Insights credits consumed per minute. */
  CreditsPerMinute: number;
  /** Maximum events per second. */
  EventsPerSecond: number;
  /** Performance level. */
  Level: number;
  /** Maximum amount of memory allowed per query. */
  MaxMemoryPerQueryMB: number;
  /** Amount of compute power allocated for queries and operations. */
  VirtualCpuCores: number;
}

/** Sets the performance level to the requested value. Use the GetLimits method to get the allowed values. */
export interface InsightsSetPerformanceRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** The Insights performance level to apply to the title. */
  PerformanceLevel: number;
}

/** Sets the data storage retention to the requested value. Use the GetLimits method to get the range of allowed values. */
export interface InsightsSetStorageRetentionRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** The Insights data storage retention value (in days) to apply to the title. */
  RetentionDays: number;
}

/**
 * Gets the current values for the Insights performance and data storage retention, list of pending operations, and the performance and data storage retention limits.
 * @param {InsightsEmptyRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<InsightsGetDetailsResponse>}
 */ 
export function GetDetails(
  request: InsightsEmptyRequest,
  options: RequestOptions
): Promise<InsightsGetDetailsResponse> {
  return dispatchRequest<InsightsGetDetailsResponse>(
    "/Insights/GetDetails",
    request,
    options
  );
}

/**
 * Retrieves the range of allowed values for performance and data storage retention values as well as the submeter details for each performance level.
 * @param {InsightsEmptyRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<InsightsGetLimitsResponse>}
 */ 
export function GetLimits(
  request: InsightsEmptyRequest,
  options: RequestOptions
): Promise<InsightsGetLimitsResponse> {
  return dispatchRequest<InsightsGetLimitsResponse>(
    "/Insights/GetLimits",
    request,
    options
  );
}

/**
 * Gets the status of a SetPerformance or SetStorageRetention operation.
 * @param {InsightsGetOperationStatusRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<InsightsGetOperationStatusResponse>}
 */ 
export function GetOperationStatus(
  request: InsightsGetOperationStatusRequest,
  options: RequestOptions
): Promise<InsightsGetOperationStatusResponse> {
  return dispatchRequest<InsightsGetOperationStatusResponse>(
    "/Insights/GetOperationStatus",
    request,
    options
  );
}

/**
 * Gets a list of pending SetPerformance and/or SetStorageRetention operations for the title.
 * @param {InsightsGetPendingOperationsRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<InsightsGetPendingOperationsResponse>}
 */ 
export function GetPendingOperations(
  request: InsightsGetPendingOperationsRequest,
  options: RequestOptions
): Promise<InsightsGetPendingOperationsResponse> {
  return dispatchRequest<InsightsGetPendingOperationsResponse>(
    "/Insights/GetPendingOperations",
    request,
    options
  );
}

/**
 * Sets the Insights performance level value for the title.
 * @param {InsightsSetPerformanceRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<InsightsOperationResponse>}
 */ 
export function SetPerformance(
  request: InsightsSetPerformanceRequest,
  options: RequestOptions
): Promise<InsightsOperationResponse> {
  return dispatchRequest<InsightsOperationResponse>(
    "/Insights/SetPerformance",
    request,
    options
  );
}

/**
 * Sets the Insights data storage retention days value for the title.
 * @param {InsightsSetStorageRetentionRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<InsightsOperationResponse>}
 */ 
export function SetStorageRetention(
  request: InsightsSetStorageRetentionRequest,
  options: RequestOptions
): Promise<InsightsOperationResponse> {
  return dispatchRequest<InsightsOperationResponse>(
    "/Insights/SetStorageRetention",
    request,
    options
  );
}

