type someType = string | number | undefined;

type Person = {
  age: number;
  name: string;
  role: string;
};
type Teacher = Person & {
  teacherID: number;
};
type Student = Person & {
  studentID: number;
};

function setValue(data: any) {
  let value: someType;
  if (typeof data == "string") {
    value = "my string data :" + data;
  } else if (typeof data == "number") {
    value = "my number data :" + data;
  } else if (typeof data == "undefined") {
    value = "my undefined data :" + data;
  } else {
    throw typeof data + " is invalid data type";
  }
  console.log(value);
}

let person: Person = { name: "", age: 2, role: "teacher" };

function detectPerson(data: Student | Teacher) {
  const props = Object.getOwnPropertyNames(data);

  let teacher: object = { teacherID: 0, ...person },
    student: object = { studentID: 0, ...person };

  const isTeacher = props.every((prp) => prp in teacher);
  const isStudent = props.every((prp) => prp in student);

  if (isTeacher) {
    console.log("teachers data");
  } else if (isStudent) {
    console.log("students data");
  } else {
    console.log("error");
  }
}

detectPerson({ ...person, teacherID: 1 });
detectPerson({ ...person, studentID: 2 });

setValue("");
setValue(1);
setValue(undefined);
setValue({});
