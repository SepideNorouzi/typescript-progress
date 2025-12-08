// intersection types

type A = {
  B: number;
};
type B = A & {
  //   b: number;
  c: string;
};
// by using &, the element they share(b here) is counted as one
// and is inherited.
// ------------------------------------------------------------------------

enum PROVINCE {
  TEHRAN = "Tehran",
  KORDESTAN = "Kordestan",
  AZERBAIJAN = "Azerbaijan",
}
enum TEHRAN {
  Tehran,
  Varamin,
  pardis,
}

interface city {
  Tehran?: TEHRAN;
}

// type City = {};
type Detail = {
  name?: string;
  aboutMe?: string;
};
type Security = {
  password: string;
  token?: string;
  refreshToken?: string;
};
type Contact = {
  phone: string;
  email?: string;
};
type Address = {
  province: PROVINCE;
  city?: city;
  street?: string;
  alley?: string;
  postalCode?: string;
  zipCode?: string;
};

// const User: Detail & Address & Security & Contact = {
//   city: { Tehran: TEHRAN.pardis },
// //   this line was important.
//   province: PROVINCE.KORDESTAN,
// };

type User1 = Detail & Address & Security & Contact & { id: number };

interface IUser {
  id: number;
  detail: Detail;
  address: Address;
  contact: Contact;
  security: Security;
}

const user: IUser = {
  id: 1,
  detail: {},
  address: {
    province: PROVINCE.TEHRAN,
  },
  security: {
    password: "111",
  },
  contact: {
    phone: "1111",
  },
};
