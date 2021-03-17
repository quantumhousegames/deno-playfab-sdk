// deno-lint-ignore-file
import { dispatchRequest, RequestOptions } from "./support/runtime.ts";

export enum AnalysisTaskState {
  Waiting = "Waiting",
  ReadyForSubmission = "ReadyForSubmission",
  SubmittingToPipeline = "SubmittingToPipeline",
  Running = "Running",
  Completed = "Completed",
  Failed = "Failed",
  Canceled = "Canceled",
}

/** Given a title entity token and exclusion group details, will create a new exclusion group for the title. */
export interface CreateExclusionGroupRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Description of the exclusion group. */
  Description?: string;
  /** Friendly name of the exclusion group. */
  Name: string;
}

export interface CreateExclusionGroupResult {
  /** Identifier of the exclusion group. */
  ExclusionGroupId?: string;
}

/** Given a title entity token and experiment details, will create a new experiment for the title. */
export interface CreateExperimentRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Description of the experiment. */
  Description?: string;
  /** When experiment should end. */
  EndDate?: string;
  /** Id of the exclusion group. */
  ExclusionGroupId?: string;
  /** Percentage of exclusion group traffic that will see this experiment. */
  ExclusionGroupTrafficAllocation?: number;
  /** Type of experiment. */
  ExperimentType?: ExperimentType;
  /** Friendly name of the experiment. */
  Name: string;
  /** Id of the segment to which this experiment applies. Defaults to the 'All Players' segment. */
  SegmentId?: string;
  /** When experiment should start. */
  StartDate: string;
  /** List of title player account IDs that automatically receive treatments in the experiment, but are not included when calculating experiment metrics. */
  TitlePlayerAccountTestIds?: string[];
  /** List of variants for the experiment. */
  Variants: Variant[];
}

export interface CreateExperimentResult {
  /** The ID of the new experiment. */
  ExperimentId?: string;
}

/** Given an entity token and an exclusion group ID this API deletes the exclusion group. */
export interface DeleteExclusionGroupRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** The ID of the exclusion group to delete. */
  ExclusionGroupId: string;
}

/** Given an entity token and an experiment ID this API deletes the experiment. A running experiment must be stopped before it can be deleted. */
export interface DeleteExperimentRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** The ID of the experiment to delete. */
  ExperimentId: string;
}

export interface EmptyResponse {}

/** Combined entity type and ID structure which uniquely identifies a single entity. */
export interface EntityKey {
  /** Unique ID of the entity. */
  Id: string;
  /** Entity type. See https://docs.microsoft.com/gaming/playfab/features/data/entities/available-built-in-entity-types */
  Type?: string;
}

export interface ExclusionGroupTrafficAllocation {
  /** Id of the experiment. */
  ExperimentId?: string;
  /** Percentage of exclusion group traffic that will see this experiment. */
  TrafficAllocation: number;
}

export interface Experiment {
  /** Description of the experiment. */
  Description?: string;
  /** When experiment should end/was ended. */
  EndDate?: string;
  /** Id of the exclusion group for this experiment. */
  ExclusionGroupId?: string;
  /** Percentage of exclusion group traffic that will see this experiment. */
  ExclusionGroupTrafficAllocation?: number;
  /** Type of experiment. */
  ExperimentType?: ExperimentType;
  /** Id of the experiment. */
  Id?: string;
  /** Friendly name of the experiment. */
  Name?: string;
  /** Id of the segment to which this experiment applies. Defaults to the 'All Players' segment. */
  SegmentId?: string;
  /** When experiment should start/was started. */
  StartDate: string;
  /** State experiment is currently in. */
  State?: ExperimentState;
  /** List of title player account IDs that automatically receive treatments in the experiment, but are not included when calculating experiment metrics. */
  TitlePlayerAccountTestIds?: string[];
  /** List of variants for the experiment. */
  Variants?: Variant[];
}

export interface ExperimentExclusionGroup {
  /** Description of the exclusion group. */
  Description?: string;
  /** Id of the exclusion group. */
  ExclusionGroupId?: string;
  /** Friendly name of the exclusion group. */
  Name?: string;
}

export enum ExperimentState {
  New = "New",
  Started = "Started",
  Stopped = "Stopped",
  Deleted = "Deleted",
}

export enum ExperimentType {
  Active = "Active",
  Snapshot = "Snapshot",
}

/** Given a title entity token will return the list of all exclusion groups for a title. */
export interface GetExclusionGroupsRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
}

export interface GetExclusionGroupsResult {
  /** List of exclusion groups for the title. */
  ExclusionGroups?: ExperimentExclusionGroup[];
}

/** Given a title entity token and an exclusion group ID, will return the list of traffic allocations for the exclusion group. */
export interface GetExclusionGroupTrafficRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** The ID of the exclusion group. */
  ExclusionGroupId: string;
}

export interface GetExclusionGroupTrafficResult {
  /** List of traffic allocations for the exclusion group. */
  TrafficAllocations?: ExclusionGroupTrafficAllocation[];
}

/** Given a title entity token will return the list of all experiments for a title, including scheduled, started, stopped or completed experiments. */
export interface GetExperimentsRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
}

export interface GetExperimentsResult {
  /** List of experiments for the title. */
  Experiments?: Experiment[];
}

/** Given a title entity token and experiment details, will return the latest available scorecard. */
export interface GetLatestScorecardRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** The ID of the experiment. */
  ExperimentId?: string;
}

export interface GetLatestScorecardResult {
  /** Scorecard for the experiment of the title. */
  Scorecard?: Scorecard;
}

/** Given a title player or a title entity token, returns the treatment variants and variables assigned to the entity across all running experiments */
export interface GetTreatmentAssignmentRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** The entity to perform this action on. */
  Entity?: EntityKey;
}

export interface GetTreatmentAssignmentResult {
  /** Treatment assignment for the entity. */
  TreatmentAssignment?: TreatmentAssignment;
}

export interface MetricData {
  /** The upper bound of the confidence interval for the relative delta (Delta.RelativeValue). */
  ConfidenceIntervalEnd: number;
  /** The lower bound of the confidence interval for the relative delta (Delta.RelativeValue). */
  ConfidenceIntervalStart: number;
  /** The absolute delta between TreatmentStats.Average and ControlStats.Average. */
  DeltaAbsoluteChange: number;
  /** The relative delta ratio between TreatmentStats.Average and ControlStats.Average. */
  DeltaRelativeChange: number;
  /** The machine name of the metric. */
  InternalName?: string;
  /** Indicates if a movement was detected on that metric. */
  Movement?: string;
  /** The readable name of the metric. */
  Name?: string;
  /** The expectation that a movement is real */
  PMove: number;
  /** The p-value resulting from the statistical test run for this metric */
  PValue: number;
  /** The threshold for observing sample ratio mismatch. */
  PValueThreshold: number;
  /** Indicates if the movement is statistically significant. */
  StatSigLevel?: string;
  /** Observed standard deviation value of the metric. */
  StdDev: number;
  /** Observed average value of the metric. */
  Value: number;
}

export interface Scorecard {
  /** Represents the date the scorecard was generated. */
  DateGenerated?: string;
  /** Represents the duration of scorecard analysis. */
  Duration?: string;
  /** Represents the number of events processed for the generation of this scorecard */
  EventsProcessed: number;
  /** Id of the experiment. */
  ExperimentId?: string;
  /** Friendly name of the experiment. */
  ExperimentName?: string;
  /** Represents the latest compute job status. */
  LatestJobStatus?: AnalysisTaskState;
  /** Represents the presence of a sample ratio mismatch in the scorecard data. */
  SampleRatioMismatch: boolean;
  /** Scorecard containing list of analysis. */
  ScorecardDataRows?: ScorecardDataRow[];
}

export interface ScorecardDataRow {
  /** Represents whether the variant is control or not. */
  IsControl: boolean;
  /** Data of the analysis with the internal name of the metric as the key and an object of metric data as value. */
  MetricDataRows?: MetricData;
  /** Represents the player count in the variant. */
  PlayerCount: number;
  /** Name of the variant of analysis. */
  VariantName?: string;
}

/** Given a title entity token and an experiment ID, this API starts the experiment. */
export interface StartExperimentRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** The ID of the experiment to start. */
  ExperimentId: string;
}

/** Given a title entity token and an experiment ID, this API stops the experiment if it is running. */
export interface StopExperimentRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** The ID of the experiment to stop. */
  ExperimentId: string;
}

export interface TreatmentAssignment {
  /** List of the experiment variables. */
  Variables?: Variable[];
  /** List of the experiment variants. */
  Variants?: string[];
}

/** Given an entity token and exclusion group details this API updates the exclusion group. */
export interface UpdateExclusionGroupRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Description of the exclusion group. */
  Description?: string;
  /** The ID of the exclusion group to update. */
  ExclusionGroupId: string;
  /** Friendly name of the exclusion group. */
  Name: string;
}

/** Given a title entity token and experiment details, this API updates the experiment. If an experiment is already running, only the description and duration properties can be updated. */
export interface UpdateExperimentRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Description of the experiment. */
  Description?: string;
  /** When experiment should end. */
  EndDate?: string;
  /** Id of the exclusion group. */
  ExclusionGroupId?: string;
  /** Percentage of exclusion group traffic that will see this experiment. */
  ExclusionGroupTrafficAllocation?: number;
  /** Type of experiment. */
  ExperimentType?: ExperimentType;
  /** Id of the experiment. */
  Id: string;
  /** Friendly name of the experiment. */
  Name: string;
  /** Id of the segment to which this experiment applies. Defaults to the 'All Players' segment. */
  SegmentId?: string;
  /** When experiment should start. */
  StartDate: string;
  /** List of title player account IDs that automatically receive treatments in the experiment, but are not included when calculating experiment metrics. */
  TitlePlayerAccountTestIds?: string[];
  /** List of variants for the experiment. */
  Variants: Variant[];
}

export interface Variable {
  /** Name of the variable. */
  Name: string;
  /** Value of the variable. */
  Value?: string;
}

export interface Variant {
  /** Description of the variant. */
  Description?: string;
  /** Id of the variant. */
  Id?: string;
  /** Specifies if variant is control for experiment. */
  IsControl: boolean;
  /** Name of the variant. */
  Name: string;
  /** Id of the TitleDataOverride to use with this variant. */
  TitleDataOverrideLabel?: string;
  /** Percentage of target audience traffic that will see this variant. */
  TrafficPercentage: number;
  /** Variables returned by this variant. */
  Variables?: Variable[];
}

/**
 * Creates a new experiment exclusion group for a title.
 * @param {CreateExclusionGroupRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<CreateExclusionGroupResult>}
 */ 
export function CreateExclusionGroup(
  request: CreateExclusionGroupRequest,
  options: RequestOptions
): Promise<CreateExclusionGroupResult> {
  return dispatchRequest<CreateExclusionGroupResult>(
    "/Experimentation/CreateExclusionGroup",
    request,
    options
  );
}

/**
 * Creates a new experiment for a title.
 * @param {CreateExperimentRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<CreateExperimentResult>}
 */ 
export function CreateExperiment(
  request: CreateExperimentRequest,
  options: RequestOptions
): Promise<CreateExperimentResult> {
  return dispatchRequest<CreateExperimentResult>(
    "/Experimentation/CreateExperiment",
    request,
    options
  );
}

/**
 * Deletes an existing exclusion group for a title.
 * @param {DeleteExclusionGroupRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<EmptyResponse>}
 */ 
export function DeleteExclusionGroup(
  request: DeleteExclusionGroupRequest,
  options: RequestOptions
): Promise<EmptyResponse> {
  return dispatchRequest<EmptyResponse>(
    "/Experimentation/DeleteExclusionGroup",
    request,
    options
  );
}

/**
 * Deletes an existing experiment for a title.
 * @param {DeleteExperimentRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<EmptyResponse>}
 */ 
export function DeleteExperiment(
  request: DeleteExperimentRequest,
  options: RequestOptions
): Promise<EmptyResponse> {
  return dispatchRequest<EmptyResponse>(
    "/Experimentation/DeleteExperiment",
    request,
    options
  );
}

/**
 * Gets the details of all exclusion groups for a title.
 * @param {GetExclusionGroupsRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetExclusionGroupsResult>}
 */ 
export function GetExclusionGroups(
  request: GetExclusionGroupsRequest,
  options: RequestOptions
): Promise<GetExclusionGroupsResult> {
  return dispatchRequest<GetExclusionGroupsResult>(
    "/Experimentation/GetExclusionGroups",
    request,
    options
  );
}

/**
 * Gets the details of all exclusion groups for a title.
 * @param {GetExclusionGroupTrafficRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetExclusionGroupTrafficResult>}
 */ 
export function GetExclusionGroupTraffic(
  request: GetExclusionGroupTrafficRequest,
  options: RequestOptions
): Promise<GetExclusionGroupTrafficResult> {
  return dispatchRequest<GetExclusionGroupTrafficResult>(
    "/Experimentation/GetExclusionGroupTraffic",
    request,
    options
  );
}

/**
 * Gets the details of all experiments for a title.
 * @param {GetExperimentsRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetExperimentsResult>}
 */ 
export function GetExperiments(
  request: GetExperimentsRequest,
  options: RequestOptions
): Promise<GetExperimentsResult> {
  return dispatchRequest<GetExperimentsResult>(
    "/Experimentation/GetExperiments",
    request,
    options
  );
}

/**
 * Gets the latest scorecard of the experiment for the title.
 * @param {GetLatestScorecardRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetLatestScorecardResult>}
 */ 
export function GetLatestScorecard(
  request: GetLatestScorecardRequest,
  options: RequestOptions
): Promise<GetLatestScorecardResult> {
  return dispatchRequest<GetLatestScorecardResult>(
    "/Experimentation/GetLatestScorecard",
    request,
    options
  );
}

/**
 * Gets the treatment assignments for a player for every running experiment in the title.
 * @param {GetTreatmentAssignmentRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<GetTreatmentAssignmentResult>}
 */ 
export function GetTreatmentAssignment(
  request: GetTreatmentAssignmentRequest,
  options: RequestOptions
): Promise<GetTreatmentAssignmentResult> {
  return dispatchRequest<GetTreatmentAssignmentResult>(
    "/Experimentation/GetTreatmentAssignment",
    request,
    options
  );
}

/**
 * Starts an existing experiment for a title.
 * @param {StartExperimentRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<EmptyResponse>}
 */ 
export function StartExperiment(
  request: StartExperimentRequest,
  options: RequestOptions
): Promise<EmptyResponse> {
  return dispatchRequest<EmptyResponse>(
    "/Experimentation/StartExperiment",
    request,
    options
  );
}

/**
 * Stops an existing experiment for a title.
 * @param {StopExperimentRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<EmptyResponse>}
 */ 
export function StopExperiment(
  request: StopExperimentRequest,
  options: RequestOptions
): Promise<EmptyResponse> {
  return dispatchRequest<EmptyResponse>(
    "/Experimentation/StopExperiment",
    request,
    options
  );
}

/**
 * Updates an existing exclusion group for a title.
 * @param {UpdateExclusionGroupRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<EmptyResponse>}
 */ 
export function UpdateExclusionGroup(
  request: UpdateExclusionGroupRequest,
  options: RequestOptions
): Promise<EmptyResponse> {
  return dispatchRequest<EmptyResponse>(
    "/Experimentation/UpdateExclusionGroup",
    request,
    options
  );
}

/**
 * Updates an existing experiment for a title.
 * @param {UpdateExperimentRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<EmptyResponse>}
 */ 
export function UpdateExperiment(
  request: UpdateExperimentRequest,
  options: RequestOptions
): Promise<EmptyResponse> {
  return dispatchRequest<EmptyResponse>(
    "/Experimentation/UpdateExperiment",
    request,
    options
  );
}

