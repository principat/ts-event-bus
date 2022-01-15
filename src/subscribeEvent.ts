import { EventStore } from "../type/eventStore";
import { Subscriber } from "../type/subscriber";

export type UnsubscribeFunction = () => void


/**
 * registers the subscriber to the event store for the event
 * @param subscriptionStore store where to register the subscriber
 * @param eventName name of the event, to subscribe
 * @param subscriber the subscriber, that would be called, if the event was fired
 * @returns unsubscribe function the stop the subscription for the subscriber
 */
export function subscribeEvent(subscriptionStore: EventStore, eventName: string,
  subscriber: Subscriber): UnsubscribeFunction {

  if (!(eventName in subscriptionStore)) {
    subscriptionStore[eventName] = [];
  }
  subscriptionStore[eventName].push(subscriber);

  /**
   * unsubscribes the subscriber from the event
   */
  function unsubscribe() {
    const index = subscriptionStore[eventName].indexOf(subscriber);
    if (index == -1) {
      return;
    }
    subscriptionStore[eventName].splice(index, 1);
  }
  return unsubscribe;
}
