import { useEffect, useRef, useState } from "react";
import "./TodoList.css";
import Todo from "./Todo";

/** @typedef {import("../type").Todo} Todo*/

const TODOS_KEY = "todos";

const savedToDos = localStorage.getItem(TODOS_KEY);
const initialTodos = savedToDos ? JSON.parse(savedToDos) : [];

export default function TodoList() {
  /** @type {[Todo[], React.Dispatch<React.SetStateAction<Todo[]>>]} */
  const [todos, setTodos] = useState(initialTodos);

  useEffect(() => {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
  }, [todos]);

  const inputRef = useRef(null);

  const onTodoSubmit = (e) => {
    e.preventDefault();

    /** @type {Todo} */
    const newTodo = {
      id: new Date(),
      todo: inputRef.current.value,
      isComplete: false,
    };

    inputRef.current.value = "";

    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      {todos.length > 0 ? (
        todos.map((todo) => (
          <Todo todo={todo} setTodos={setTodos} key={todo.id} />
        ))
      ) : (
        <span>Add todo!</span>
      )}
      <form onSubmit={onTodoSubmit}>
        <input placeholder="Add Todo" ref={inputRef} />
        <button type="submit">추가</button>
      </form>
    </div>
  );
}
