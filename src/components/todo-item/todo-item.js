import "./todo-item.scss";

const TodoItem = ({id, name, completed, todos, setTodos}) => {

  const handleDelete = () => {
    setTodos(todos.filter(todo => !(todo.id === id)));
  }


  return (
    <li className={"todo " + (completed ? "todo--done" : "")}>
      <input value={id} className="todo__checkbox" type="checkbox" />
      <p className= "todo__name">{name}</p>

      <button data-id={id} className="todo__action todo__edit">Edit todo</button>
      <button data-id={id} onClick={handleDelete} className="todo__action todo__delete">Delete todo</button>
    </li>
  );
};

export default TodoItem;