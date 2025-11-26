// type profile = {
//   name: string;
//   mobile: string;
//   age: number;
// };
// type editProfile = {
//   name?: string;
//   mobile?: string;
//   age?: number;
// };

// // private: only accessible within the class
// // protected : only accessible within class 'User' and its subclasses
// class User {
//   private name: string;
//   protected mobile: string;
//   private age: number;

//   constructor(name: string, mobile: string, age: number) {
//     this.name = name;
//     this.mobile = mobile;
//     this.age = age;
//   }
//   getUserProfile(): profile {
//     return {
//       name: this.name,
//       mobile: this.mobile,
//       age: this.age,
//     };
//   }
//   editUserProfile(profileOBJ: editProfile): profile {
//     if (profileOBJ.name) {
//       this.name = profileOBJ.name;
//     }
//     if (profileOBJ.mobile) {
//       this.mobile = profileOBJ.mobile;
//     }
//     if (profileOBJ.age) {
//       this.age = profileOBJ.age;
//     }

//     return {
//       name: this.name,
//       mobile: this.mobile,
//       age: this.age,
//     };
//   }
// }

// const user: User = new User("sepide norouzi", "09111111111", 20);
// user.editUserProfile({ age: 35 });
// console.log(user);

// getter and setters actual job is to prevent the access to private
// properties and we can validate the inputs using these two.
interface IUser {
  id: number;
  name: string;
  email: string;
  mobile: string;
  nationalCode: string | null;
}

class User implements IUser {
  public id: number = 22;
  public name: string = "sepide";
  public email: string = "@@";
  public mobile: string = "0999";
  private nationalID: string | null = null;

  get nationalCode(): string | null {
    return "your id:" + this.nationalID;
  }
  set nationalCode(value: string | null) {
    if (isNationalIdValid(value)) {
      this.nationalID = value;
    }
  }
}

const sepide = new User();
sepide.nationalCode = "2080582585";
console.log(sepide.nationalCode);

function isNationalIdValid(nationalId: string | null): boolean {
  if (!nationalId) return false;

  if (nationalId.length < 8 || nationalId.length > 10) return false;

  const invalidNationalCodes = [
    "0000000000",
    "1111111111",
    "2222222222",
    "3333333333",
    "4444444444",
  ];
  if (invalidNationalCodes.includes(nationalId)) return false;

  if (nationalId.length < 10) {
    nationalId = nationalId.padStart(10, "0");
  }

  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += Number(nationalId![i]) * (10 - i);
  }

  let mod = sum % 11;
  let finalValue = mod >= 2 ? 11 - mod : mod;

  return finalValue === Number(nationalId![9]);
}
