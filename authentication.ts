type User = {
  name: string;
  username: string;
  password: string;
};
type Response = {
  message: string;
};

class controllers {
  protected sendSMS(message: string): void {
    console.log("message sent:", message);
  }
}

class Authentication extends controllers {
  private Users: User[] = [];
  //   when defining a property and we dont set it in the constructure, we need to define
  // a default value manually like this([])
  register(name: string, username: string, password: string): Response {
    this.Users.push({
      name,
      password,
      username,
    });
    this.sendSMS("welcome");
    return {
      message: "user registred successfully",
    };
  }
  login(username: string, password: string): User | Response {
    const user = this.Users.find((user) => user.username == username);
    if (!user) return { message: "can not find username" };
    if (user.password != password)
      return { message: "incorrect username or password" };
    return user;
  }
  getAllUsers(): User[] {
    return this.Users;
  }
}

const auth = new Authentication();
auth.register("Sepide", "sepidenrz", "1234");

console.log(auth.getAllUsers());
console.log(auth.login("sepidenrz", "456"));
