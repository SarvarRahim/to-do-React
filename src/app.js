import { useState } from "react";
import AddTodo from "./components/add-todo/add-todo"
import TodosList from "./components/todos-list/todos-list";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      name: "Dars qilish",
      completed: false
    },
    {
      id: 2,
      name: "Kitob o'qish",
      completed: false
    },
    {
      id: 3,
      name: "Do'konga chiqish",
      completed: false
    },
  ]);

  return (
    <main className="main">
      <h1 className="main__title">Simple todo app</h1>

      <AddTodo todos={todos} setTodos={setTodos} {...todos} />

      <TodosList todos={todos} setTodos={setTodos} />
    </main>
  );
}

export default App;
