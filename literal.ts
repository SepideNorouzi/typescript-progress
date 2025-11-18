type EventName = "click" | "abort" | "change" | "load";

const docEvent: EventName = "click";
// so that the only options available are the ones you defined.

// for numbers tho, we do not use literal types, its better to use enums:
type productType = "physical" | "virtual";
enum State {
  pending,
  started,
  cancel,
  abort,
}

const product: { type: productType; state: State } = {
  type: "virtual",
  state: State.abort,
};
