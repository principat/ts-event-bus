import { eventBus } from "ts-event-bus";

const myEventBus = eventBus();

/**
 * register a simple subscriber to the "sayHello"-event 
 */
const unsubscribeSayHello = myEventBus.subscribeEvent('sayHello', (name: string) => {
  console.log(`Hello ${name}`);
}
);

/**
 * fires the "sayHello"-event with the name "tom"
 */
myEventBus.fireEvent('sayHello', 'tom');

/**
 * call the function, returned form subscribeEvent to unsubscribe from the event
 */
unsubscribeSayHello();
