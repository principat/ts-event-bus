[![Node.js CI](https://github.com/principat/ts-event-bus/actions/workflows/node.js.yml/badge.svg)](https://github.com/principat/ts-event-bus/actions/workflows/node.js.yml)

# Typescript event bus

Simple event bus that was written in typescript

## Install

```
npm install @ra-solutions/ts-event-bus
```

## Usage

```typescript
import { eventBus } from "@ra-solutions/ts-event-bus";

const myEventBus = eventBus();

/**
 * register a simple subscriber to the "sayHello"-event 
 */
const unsubscribeSayHello = myEventBus.subscribeEvent('sayHello', (name: string) => {
  console.log(`Hello ${name}`);
});

/**
 * fires the "sayHello"-event with the name "tom"
 */
myEventBus.fireEvent('sayHello', 'tom');

/**
 * call the unsubscribe function, returned form subscribeEvent to unsubscribe from the event
 */
unsubscribeSayHello();
```

You could use multiple instances of the event bus.

## Recommendation

Instead of calling `fireEvent` with the event name directly, it is recommended to create a 
caller function for each event type:

```
function sayHello(name: string){
  myEventBus.fireEvent('sayHello', name);
}
```