import TodoItem from "../todo-item/todo-item";

import "./todos-list.scss";

const TodosList = ({todos, setTodos}) => {
  return (
    <ul className="todos-list">
      {
        // todos.map((todo) => <TodoItem todos={todos} setTodos={setTodos} {...todo} key={todo.id} />)
        todos.map((todo) => <TodoItem todos={todos} setTodos={setTodos} {...todo} key={todo.id} />)
      }
    </ul>
  );
};

export default TodosList;