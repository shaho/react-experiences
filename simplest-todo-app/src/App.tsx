import React, { useState } from "react";
import { TodoListItem } from "./TodoListItem";

const initialTodos: Array<Todo> = [
  { text: "Walk the dog", complete: true },
  { text: "Write App", complete: false },
];

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);

  return (
    <>
      <ul>
        <TodoListItem todo={todos[0]} />
        <TodoListItem todo={todos[1]} />
      </ul>
    </>
  );
};

export default App;
