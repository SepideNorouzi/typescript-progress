// type alias : are like userface, the only difference is that you can
// set union types as a type for alias,but cant do the same for interfaces.

type ID = number | string | null;

type basketType = { products: ID[]; discount?: string };

type user = {
  full_name: string;
  email: string;
  password: string;
  age: number;
  basket: basketType;
};

let userID: ID;

function getUser(userID: ID): user {
  return {
    full_name: "sepide norouzi",
    email: "fhdjdlfj",
    password: "ghhhkfjgt",
    age: 20,
    basket: {
      products: [],
    },
  };
}
