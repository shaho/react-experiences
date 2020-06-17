import React, {
  ChangeEvent,
  FormEvent,
  useState,
  useRef,
  useEffect,
} from "react";
import "./App.css";
import { v1 as uuid } from "uuid";

const todos: Todo[] = [
  {
    id: uuid(),
    desc: "Learn React",
    isComplete: true,
  },
  {
    id: uuid(),
    desc: "Learn Redux",
    isComplete: true,
  },
  {
    id: uuid(),
    desc: "Learn Redux-Toolkit",
    isComplete: false,
  },
];

const selectedTodoItem = todos[1].id;
const editedCount = 0;

const App = () => {
  const [newTodoInput, setNewTodoInput] = useState<string>("");
  const [editTodoInput, setEditTodoInput] = useState<string>("");
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const editInput = useRef<HTMLInputElement>(null);

  const selectTodo =
    (selectedTodoItem && todos.find((todo) => todo.id === selectedTodoItem)) ||
    null;

  const handleNewInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setNewTodoInput(e.target.value);
  };

  return (
    <div className="App">
      <div className="App_counter">Todos Updated Count: {editedCount}</div>
      <div className="App_header">
        <h1>Todo: Redux vs RTK Edition</h1>
        <form onSubmit={handleCreateNewTodo}>
          <label htmlFor="new-todo">Add new:</label>
          <input
            onChange={handleNewInputChange}
            id="new-todo"
            value={newTodoInput}
          />
          <button type="submit">Create</button>
        </form>
      </div>

      <div className="App__body">
        <ul className="App__list">
          <h2>My Todos:</h2>
          {todos.map((todo, i) => (
            <li
              className={`${todo.isComplete ? "done" : ""} ${
                todo.id === selectedTodoId ? "active" : ""
              }`}
              key={todo.id}
              onClick={handleSelectTodo(todo.id)}
            >
              <span className="list-number">{i + 1})</span> {todo.desc}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
