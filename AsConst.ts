const user: object = {
  fullName: "sepidenrz",
  age: 20,
  email: "sepidenrz@gmail.com",
  password: "jhgfdsa",
} as const;

for (const key in user) {
  console.log(key);
}
// you can access the keys in the loop but not the values.

const numbers = [1, 5, 6] as const;
// numbers.push(1);
console.log(numbers);

// user.fullName = "ali";
console.log(user);

// the difference between array and object when using as const is that
// you do not have the access to the values in the object but you have
// access to the data in the arrays.
