import { useRef } from "react";
import "./add-todo.scss";

const AddTodo = ({todos, setTodos}) => {
  const inputRef = useRef();
  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    if (inputRef.current.value.trim()) {
      setTodgitos([
        ...todos,
        {
          id: Math.random(),
          name: inputRef.current.value,
          completed: false
        }
      ]);
      inputRef.current.value = ""
    }

  };

  return (
    <form onSubmit={handleFormSubmit} className="add-todo" action="#">
      <input ref={inputRef} placeholder="Todo name" className="add-todo__input" type="text" />
      <button className="add-todo__submit" type="submit" >Add todo</button>
    </form>
  );
};

export default AddTodo;