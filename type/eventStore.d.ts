import { Subscriber } from "./subscriber";

/**
 * Verwaltung der Abonnenten der einzelnen Events
 */
export interface EventStore {
  [eventName: string]: Subscriber[]
}
