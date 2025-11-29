// An enum is like a traffic light.
// It tells you that only specific words are allowed
enum state {
  QUEUE = "queue",
  DONE = "done",
  CANCEL = "cancel",
  TOP_LIST = "top-list",
}

// when evaluating inputs and outputs, we use types.
// A type tells you what shape something must have
type Todo = {
  id: number;
  title: string;
  state: state;
};

type createTodoDTO = {
  title: string;
  state: state;
};
// DTO : data transfer object : transfers the data based on a certain type.
// imagine the createTodo in the interface is used to transfer data from FE to BE.
// DTOs are like tiny mail packages you send to the backend

// use interfaces to define the general type of the classes and implementing them.
// “the class MUST do these things.”
// It doesn’t explain how to do them.Just that you must do them.
interface ITodo {
  createTodo(todo: createTodoDTO): void;
  delete(id: number): void;
  getList(): void;
  getById(id: number): void;
}

// use abstract classes for inheritting a class and develope
// that class with the data in the abstract class(kindda a roadmap),
// and then override the properties of the abstract class.
// An abstract class is like a partially built machine.Some pieces work already,
// Some pieces are left unfinished on purpose
abstract class TodoRepository implements ITodo {
  protected todos: Todo[];
  constructor() {
    this.todos = [];
  }
  public createTodo(todo: createTodoDTO): void {}
  public delete(id: number): void {}
  public getList(): void {}
  public getById(id: number): void {}
}

//   controller will inherit from the abstract and override the methods.
class TodoController extends TodoRepository {
  constructor() {
    super();
  }
  public createTodo(todo: createTodoDTO): any {
    return { newTodo: "created" };
  }
  //   override the method: changed void to any.
}
// difference between implements and extends =>
// implements : you must call and write all the methods from the parent in
// your class.
// extends : gives you free will to use the methods or do not.

console.log(
  new TodoController().createTodo({ title: "study", state: state.DONE })
);
