import { Todo } from "./type";

// constants
const CREATE_TODO = "CREATE_TODO";
const EDIT_TODO = "EIT_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const DELETE_TODO = "DELETE_TODO";
const SELECT_TODO = "SELECT_TODO";

// Actions & Action Type
interface createTodoActionType {
  type: typeof CREATE_TODO;
  payload: Todo;
}
