enum EventType {
  SPORT = "sport",
  FRIENDLY = "friendly",
}

type ID = string | number;

type Event = {
  name: string;
  created: Date;
  type: EventType;
};
type UserEvent = Event & {
  userId?: ID;
};
interface userEvent2 extends Event {
  userId?: ID;
}

interface Event2 {
  name: string;
  created: Date;
  type: EventType;
}
type UserEvent3 = Event2 & {
  userId?: ID;
};
interface userEvent2 extends Event2 {
  userId?: ID;
}
// not only interface can inherit from types, but it can
// also inherit from another interface as well.

let userEvent: userEvent2 = {
  name: "sepide",
  created: new Date(),
  type: EventType.SPORT,
};
