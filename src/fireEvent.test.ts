import { expect } from "chai";
import Sinon from "sinon";
import { fireEvent } from "./fireEvent";
import { EventStore } from "../type/eventStore";

describe('fireEvent', () => {
  it('throws no Error, when the event does not exist in the store', () => {
    const eventStore: EventStore = {};

    let ocurredError = null;
    try {
      fireEvent(eventStore, 'unknownEvent');
    }
    catch (error) {
      ocurredError = error;
    }
    expect(ocurredError).to.be.null;
  });

  it('does not throw an Error if the event exists, but no subscribers', () => {
    const eventStore: EventStore = {
      existingEvent: []
    };

    let ocurredError = null;
    try {
      fireEvent(eventStore, 'existingEvent');
    }
    catch (error) {
      ocurredError = error;
    }
    expect(ocurredError).to.be.null;
  });

  it('distributes the event to all subscribers registered for the event in the store', () => {
    const subscriber1 = Sinon.stub();
    const subscriber2 = Sinon.stub();
    const eventStore: EventStore = {
      existingEvent: [subscriber1, subscriber2]
    };

    fireEvent(eventStore, 'existingEvent');

    expect(subscriber1).to.have.been.calledOnce;
    expect(subscriber2).to.have.been.calledOnce;
  });
});
