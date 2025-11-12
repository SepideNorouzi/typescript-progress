enum steps {
  zero,
  one,
  two,
  three,
}
console.log(steps.zero);

// pending, checkout, faild, success, warning, error, info
enum USER_PAYMENT_STATUS {
  PENDING = "pending",
  CHECKOUT = "checkout",
  FAILD = "faild",
  SUCCESS = "success",
  WARNING = "warning",
  ERROR = "error",
  INFO = "info",
}

enum USER_ACTIVE_STATE {
  TRUE = 1,
  FALSE = 0,
}

enum ERROR_MESSAGES {
  VALIDATION = "validation error",
  NOT_FOUND = "Not found",
  SERVER = "server error",
  UNAUTHORIZATION = "unauthorized",
}

enum STATUS_CODE {
  OK = 200,
  CREATED = 201,
  ACCEPTED = 202,
  NOT_FOUND = 404,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
}

let user: Object = {
  name: "",
  age: 20,
  state: USER_PAYMENT_STATUS.SUCCESS,
  isActive: USER_ACTIVE_STATE.TRUE,
};
console.log(user);
