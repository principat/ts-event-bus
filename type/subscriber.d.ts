export type Subscriber<PayloadDataType = unknown> = (eventData?: PayloadDataType) => void
