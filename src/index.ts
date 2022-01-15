import { fireEvent } from "./fireEvent";
import { subscribeEvent, UnsubscribeFunction } from "./subscribeEvent";
import { EventStore } from "../type/eventStore";
import { Subscriber } from "../type/subscriber";

export interface EventBus {
  subscribeEvent: (eventName: string, subscriber: Subscriber) => UnsubscribeFunction,
  fireEvent: (eventName: string, eventData?: unknown) => void,
}

/**
 * provides an event bus to subscribe callbacks for an event 
 * and fire the event
 * @returns EventBus
 */
export function eventBus(): EventBus {
  const eventStore: EventStore = {};

  return {
    subscribeEvent: (eventName: string, subscriber: Subscriber) =>
      subscribeEvent(eventStore, eventName, subscriber),
    fireEvent: (eventName: string, eventData?: unknown) => fireEvent(eventStore, eventName, eventData)
  };
}
