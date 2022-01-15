import { EventStore } from "../type/eventStore";

/**
 * Triggers an event that is distributed to all subscribers for the event in the EventStore.
 * Optionally, data can be added to the event
 * @param eventStore Store for the subscribers of each event
 * @param eventName Name of the event that was triggered
 * @param eventData additional data for the event 
 */
export function fireEvent<EventData = unknown>(eventStore: EventStore, eventName: string,
  eventData?: EventData): void {
  const subscribers = eventStore[eventName];
  if (subscribers == undefined || subscribers.length == 0) {
    return;
  }

  subscribers.forEach((subscriber) => { subscriber(eventData); });
}
