function sayHello(firstName?: string, lastName?: string): void {
  console.log(`Hi ${firstName || "new user"} ${lastName || ""}, welcome!`);
}

sayHello();

let blog: {
  title: string;
  text: string;
  likes: number;
  author: object;
  comments?: object[];
};
blog = {
  title: "new title",
  text: "new text",
  likes: 0,
  author: { name: "sepide" },
};
