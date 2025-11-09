// null, undefined, void

let value1: undefined = undefined;
let value2: null = null;
console.log(typeof value1, value1, typeof value2, value2);
console.log(!value1, !value2);

function checkType(): void {
  console.log();
  while (true) {}
}

// any, unknown, never

let value3: any;
value3 = "string";
value3 = true;
value3 = false;
value3 = 2425;
value3 = 1.05;
value3 = () => {};
value3 = null;
value3 = undefined;
value3 = ["", 44, {}];
value3 = {};

// unknown is safer than any
let value4: unknown;
value4 = "string";
value4 = true;
value4 = false;
value4 = 2425;
value4 = 1.05;
value4 = () => {};
value4 = null;
value4 = undefined;
value4 = ["", 44, {}];
value4 = {};

// let data1: unknown = "string";
// let value6: number = data1;
// let value5: string = data1;
// let value7: string[] = data1;
// let value8: number[] = data1;
// let value9: boolean = data1;
// let value10: undefined = data1;
// let value11: object = data1;
// let value12: any = data1;
// let value13: any[] = data1;
// let value14: never = data1;
// let value15: null = data1;
// notice that all show error exept any.

function sendError(): never {
  throw { error: "message", code: 401, status: false };
}
// never is only used for the final usage, it means it never does or return anything
// its for handling errors.
