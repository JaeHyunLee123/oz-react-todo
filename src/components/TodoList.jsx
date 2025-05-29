import { useEffect, useRef, useState } from "react";
import "./TodoList.css";
import Todo from "./Todo";

/** @typedef {import("../type").Todo} Todo*/

/** @type {Todo[]} */
const FAKE_TODOS = [
  {
    id: 1,
    todo: "test1",
    isComplete: false,
  },
  {
    id: 2,
    todo: "test2",
    isComplete: false,
  },
  {
    id: 3,
    todo: "test3",
    isComplete: false,
  },
  {
    id: 4,
    todo: "test4",
    isComplete: false,
  },
  {
    id: 5,
    todo: "test5",
    isComplete: false,
  },
];

export default function TodoList() {
  /** @type {[Todo[], React.Dispatch<React.SetStateAction<Todo[]>>]} */
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(FAKE_TODOS);
  }, []);

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
      {todos.map((todo) => (
        <Todo todo={todo} setTodos={setTodos} key={todo.id} />
      ))}
      <form onSubmit={onTodoSubmit}>
        <input placeholder="Add Todo" ref={inputRef} />
        <button type="submit">추가</button>
      </form>
    </div>
  );
}
