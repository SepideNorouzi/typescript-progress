let user: [name: string, age: number];
user = ["sepide", 20];

let position: [lat: number, long: number] = [61.9347856477, -31.5648284];
let [lat, long] = position;

position.push(545);

console.log(position);

// optional tuple : notice we put them at the end of the list.
let book: [name: string, author: string, pages: number, publishCount?: number];
book = ["ACOTAR", "sarah j.mass", 800];
let [bookName, author, pages] = book;

let score: [userName: string, ...scores: number[]];
// let score: [userName: string, ...scores:[firstR : number, secondR: number, thirdR : number]];
score = ["sepide", 10, 20, 30, 40];
console.log(score);
