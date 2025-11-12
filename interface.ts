interface interfacePerson {
  firstName: string;
  lastName: string;
  age: number;
  userName: string;
  email: string;
}
// define the type only once using interface, then use it in multiple
// parts of the program as the type

function newUser(person: interfacePerson) {
  return person;
}

let personData: interfacePerson = {
  firstName: "sepide",
  lastName: "Norouzi",
  age: 20,
  userName: "sepidenorouzi",
  email: "sepide@gmail.com",
};
console.log(newUser(personData));

// let users: interfacePerson[] = [];

interface InewBlog {
  title: string;
  text: string;
  image: string;
  likes: number;
  createdAt?: Date;
}
let blog: InewBlog = {
  title: "",
  text: "",
  image: "",
  likes: 0,
  //   createdAt: new Date(1762940000000),
};

// nulish operator used
function createNewBlog(blog: InewBlog): InewBlog {
  blog.createdAt = blog.createdAt ?? new Date();
  return blog;
}
console.log(createNewBlog(blog));
