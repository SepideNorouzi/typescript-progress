function getKeys(obj: object): string[] {
  const keys: string[] = Object.keys(obj);
  return keys;
}

const user = {
  name: "Sepide Norouzi",
  age: 26,
  skill: "typescript",
};

let numbers: Array<number> = [1, 2, 3, 4, 5, 6];
let numbers2: number[] = [1, 2, 3, 4, 5, 6];

console.log(getKeys(user), numbers);
