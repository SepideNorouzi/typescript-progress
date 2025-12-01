// by using StaticRange, there is no need to define another
// object using the keyword "new"

class UserController {
  private static Users: object[] = [];
  static getUsers(): object[] {
    UserController.Users.push({
      id: 1,
      name: "sepide",
      age: 20,
    });
    return UserController.Users;
  }
}

// const user = new User();
console.log(UserController.getUsers());
