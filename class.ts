type profile = {
  name: string;
  mobile: string;
  age: number;
};
type editProfile = {
  name?: string;
  mobile?: string;
  age?: number;
};

// private: only accessible within the class
// protected : only accessible within class 'User' and its subclasses
class User {
  private name: string;
  protected mobile: string;
  private age: number;

  constructor(name: string, mobile: string, age: number) {
    this.name = name;
    this.mobile = mobile;
    this.age = age;
  }
  getUserProfile(): profile {
    return {
      name: this.name,
      mobile: this.mobile,
      age: this.age,
    };
  }
  editUserProfile(profileOBJ: editProfile): profile {
    if (profileOBJ.name) {
      this.name = profileOBJ.name;
    }
    if (profileOBJ.mobile) {
      this.mobile = profileOBJ.mobile;
    }
    if (profileOBJ.age) {
      this.age = profileOBJ.age;
    }

    return {
      name: this.name,
      mobile: this.mobile,
      age: this.age,
    };
  }
}

const user: User = new User("sepide norouzi", "09111111111", 20);
user.editUserProfile({ age: 35 });
console.log(user);

