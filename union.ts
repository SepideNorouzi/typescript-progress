//union types

function getRegisteredUsers(date: Date | undefined): object | undefined | null {
  if (date) {
    // search by date, put the users in a variable and return it.
    // if !user, return null.
    return [{}];
  } else {
    // get all users registered.
    // if !user, return undefined.
    return [{}, {}];
  }
}
console.log(typeof getRegisteredUsers);
