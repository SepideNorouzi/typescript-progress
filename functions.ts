function sum(num1: number, num2: number): number {
  return num1 + num2;
}

const RESULT = sum(4, 6);
logger(RESULT);

function getName(firstName: string, lastName: string): string {
  return `hello ${firstName} - ${lastName}`;
}
const fullName = getName("sepide", "norouzi");
logger(fullName);

function getDate(): Date {
  return new Date();
}
logger(getDate());

function getTimeStamps(date: Date): number {
  return new Date().getTime();
}
logger(getTimeStamps(getDate()));

function logger(value: any): void {
  console.log(value);
}
logger("sepii");

function runFunction(fn: Function): Function {
  return fn;
}
runFunction(() => {
  console.log("hello everyone");
})();
