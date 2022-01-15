import { expect } from "chai";
import { test } from "mocha";
import Sinon from "sinon";
import { eventBus } from ".";

describe('eventBus', () => {
  it('registers events and fires the events to the registered subscribers', () => {
    const firstEvent = 'firstEvent';
    const firstEventSubscriber1 = Sinon.stub();
    const firstEventSubscriber2 = Sinon.stub();
    const firstEventData = {
      someField: 'someData'
    };

    const secondEvent = 'secondEvent';
    const secondEventSubscriber = Sinon.stub();

    const testEventBus = eventBus();

    testEventBus.subscribeEvent(firstEvent, firstEventSubscriber1);
    testEventBus.subscribeEvent(firstEvent, firstEventSubscriber2);

    testEventBus.subscribeEvent(secondEvent, secondEventSubscriber);

    testEventBus.fireEvent(firstEvent, firstEventData);
    testEventBus.fireEvent(secondEvent);

    expect(firstEventSubscriber1).to.have.been.calledOnceWith(firstEventData);
    expect(firstEventSubscriber2).to.have.been.calledOnceWith(firstEventData);

    expect(secondEventSubscriber).to.have.been.calledOnce;




  });
});
