// An enum is like a traffic light.
// It tells you that only specific words are allowed
enum STATE {
  START = "start",
  DONE = "done",
  CANCEL = "cancel",
  TOP_LIST = "top-list",
}

// when evaluating inputs and outputs, we use types.
// A type tells you what shape something must have
type Todo = {
  id: number;
  title: string;
  state: STATE;
};

type createTodoDTO = {
  title: string;
  state: STATE;
};
// DTO : data transfer object : transfers the data based on a certain type.
// imagine the createTodo in the interface is used to transfer data from FE to BE.
// DTOs are like tiny mail packages you send to the backend
type Response = {
  message: string;
};
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
  public createTodo(todo: createTodoDTO): Response {
    const id = this.todos.length + 1;
    const newTodo: Todo = {
      id,
      title: todo.title,
      state: todo.state,
    };
    this.todos.push(newTodo);
    return { message: "created" };
  }
  //   override the method: changed void to response.
  public getList(): Todo[] {
    return this.todos;
  }
  public getById(id: number): Todo | Response {
    const todo = this.todos.find((todo) => todo.id == id);
    if (todo) return todo;
    return { message: "todo not found" };
  }
  public delete(id: number): Response {
    const newtodos = this.todos.filter((todo) => todo.id !== id);
    this.todos = newtodos;
    return { message: "Todo removed" };
  }
}
// difference between implements and extends =>
// implements : you must call and write all the methods from the parent in
// your class.
// extends : gives you free will to use the methods or do not.

const todo = new TodoController();
console.log(todo.createTodo({ title: "study", state: STATE.DONE }));
console.log(todo.createTodo({ title: "Ts course", state: STATE.TOP_LIST }));
console.log(todo.createTodo({ title: "Ds study", state: STATE.START }));
console.log(todo.getList());
console.log(todo.getById(2));
console.log(todo.delete(2));
console.log(todo.getList());
