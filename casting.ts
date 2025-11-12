// Assertion
let value1: any = "string";
let value2 = <Object>value1;
// let value2 = value1 as number;
// let value2 = <Array<number>>value1 ;  ===> means an array of numbers.

console.log(typeof value2, value2);
console.log(Object.keys(value2));
// type of value2 is string, its value is also string but we are
// using the object(or number or whatever) prototype so it recognizes
// it as an object .
