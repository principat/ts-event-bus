import { expect } from 'chai';
import Sinon from 'sinon';
import { subscribeEvent } from './subscribeEvent';
import { EventStore } from '../type/eventStore';

describe('subscribeEvent', () => {
  it('registers a subscriber for the event', () => {
    const subscriptionStore: EventStore = {};
    const subscriber = Sinon.stub();
    const event = 'TestEvent';

    const unsubscribe = subscribeEvent(subscriptionStore, event, subscriber);

    expect(subscriptionStore).to.have.key(event);
    expect(subscriptionStore[event]).to.include(subscriber);
  });

  it('returns a function to unsubscribe ', () => {
    const subscriptionStore: EventStore = {};
    const subscriber = Sinon.stub();
    const event = 'TestEvent';
    const unsubscribe = subscribeEvent(subscriptionStore, event, subscriber);
    expect(subscriptionStore[event]).to.include(subscriber);

    unsubscribe();
    expect(subscriptionStore[event]).to.eql([]);
  });

  it('supports multiple subscribers for an event', () => {
    const subscriptionStore: EventStore = {};
    const subscriber1 = Sinon.stub();
    const subscriber2 = Sinon.stub();
    const event = 'TestEvent';

    const unsubscribe = subscribeEvent(subscriptionStore, event, subscriber1);
    expect(subscriptionStore[event]).to.include(subscriber1);

    subscribeEvent(subscriptionStore, event, subscriber2);
    expect(subscriptionStore[event]).to.include(subscriber2);

    unsubscribe();

    expect(subscriptionStore[event]).to.eql([subscriber2]);

  });
});
