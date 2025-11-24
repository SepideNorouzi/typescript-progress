// function makeDateByTimeStamp(timeStamp: number): Date {
//   return new Date(timeStamp);
// }

// function makeDateByYMD(Y: number, M: number, D: number): Date {
//   return new Date(Y, M, D);
// }

// function makeDateByDate(date: string): Date {
//   return new Date(date);
// }

// console.log(makeDateByTimeStamp(1763591328533));
// console.log(makeDateByYMD(2025, 11, 20));
// console.log(makeDateByDate("2025-11-19T22:35:44.123Z"));

function makeDate(date: string): Date;
function makeDate(timeStamp: number): Date;
function makeDate(Year: number, Month: number, Day: number): Date;
function makeDate(DTY: string | number, Month?: number, Day?: number): Date {
  if (DTY && !Month && !Day) {
    return new Date(DTY);
  }
  return new Date(+DTY, Month || 1, Day || 1);
}

console.log(makeDate("2025-12-19T20:30:00.000Z"));
console.log(makeDate(1763591328533));
console.log(makeDate(2018, 3, 22));
