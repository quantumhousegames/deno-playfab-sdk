// deno-lint-ignore-file
import { dispatchRequest, RequestOptions } from "./support/runtime.ts";

/** Combined entity type and ID structure which uniquely identifies a single entity. */
export interface EntityKey {
  /** Unique ID of the entity. */
  Id: string;
  /** Entity type. See https://docs.microsoft.com/gaming/playfab/features/data/entities/available-built-in-entity-types */
  Type?: string;
}

export interface EventContents {
  /** The optional custom tags associated with the event (e.g. build number, external trace identifiers, etc.). Before an event is written, this collection and the base request custom tags will be merged, but not overriden. This enables the caller to specify static tags and per event tags. */
  CustomTags?: Record<string, unknown>;
  /** Entity associated with the event. If null, the event will apply to the calling entity. */
  Entity?: EntityKey;
  /** The namespace in which the event is defined. Allowed namespaces can vary by API. */
  EventNamespace: string;
  /** The name of this event. */
  Name: string;
  /** The original unique identifier associated with this event before it was posted to PlayFab. The value might differ from the EventId value, which is assigned when the event is received by the server. */
  OriginalId?: string;
  /** The time (in UTC) associated with this event when it occurred. If specified, this value is stored in the OriginalTimestamp property of the PlayStream event. */
  OriginalTimestamp?: string;
  /** Arbitrary data associated with the event. Only one of Payload or PayloadJSON is allowed. */
  Payload?: Record<string, unknown>;
  /** Arbitrary data associated with the event, represented as a JSON serialized string. Only one of Payload or PayloadJSON is allowed. */
  PayloadJSON?: string;
}

export interface WriteEventsRequest {
  /** The optional custom tags associated with the request (e.g. build number, external trace identifiers, etc.). */
  CustomTags?: Record<string, unknown>;
  /** Collection of events to write to PlayStream. */
  Events: EventContents[];
}

export interface WriteEventsResponse {
  /** The unique identifiers assigned by the server to the events, in the same order as the events in the request. Only returned if FlushToPlayStream option is true. */
  AssignedEventIds?: string[];
}

/**
 * Write batches of entity based events to PlayStream. The namespace of the Event must be 'custom' or start with 'custom.'.
 * @param {WriteEventsRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<WriteEventsResponse>}
 */ 
export function WriteEvents(
  request: WriteEventsRequest,
  options: RequestOptions
): Promise<WriteEventsResponse> {
  return dispatchRequest<WriteEventsResponse>(
    "/Event/WriteEvents",
    request,
    options
  );
}

/**
 * Write batches of entity based events to as Telemetry events (bypass PlayStream). The namespace must be 'custom' or start with 'custom.'
 * @param {WriteEventsRequest} request
 * @param {RequestOptions} options
 * @returns {Promise<WriteEventsResponse>}
 */ 
export function WriteTelemetryEvents(
  request: WriteEventsRequest,
  options: RequestOptions
): Promise<WriteEventsResponse> {
  return dispatchRequest<WriteEventsResponse>(
    "/Event/WriteTelemetryEvents",
    request,
    options
  );
}

