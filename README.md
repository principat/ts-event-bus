[![Node.js CI](https://github.com/principat/ts-event-bus/actions/workflows/node.js.yml/badge.svg)](https://github.com/principat/ts-event-bus/actions/workflows/node.js.yml)

# Typescript event bus

Simple event bus that was written in typescript

## Install

```
npm install @principatra/ts-event-bus
```

## Usage

```typescript
import { eventBus } from "ts-event-bus";

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