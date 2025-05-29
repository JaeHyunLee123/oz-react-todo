import { useRef, useState } from "react";
import "./Todo.css";

/** @typedef {import("../type").Todo} Todo*/

/**
 * @typedef {object} TodoProps
 * @property {Todo} todo
 * @property {React.Dispatch<React.SetStateAction<Todo[]>>} setTodos
 */

/**
 * @param {TodoProps} props
 */
export default function Todo({ todo, setTodos }) {
  const [isFixing, setIsFixing] = useState(false);

  const inputRef = useRef(null);

  const onCompleteButtonClick = () => {
    /**@type {Todo} */
    const newTodo = {
      id: todo.id,
      todo: todo.todo,
      isComplete: !todo.isComplete,
    };

    setTodos((todos) =>
      todos.map((element) => (todo.id === element.id ? newTodo : element))
    );
  };

  const onDeleteButtonClick = () => {
    setTodos((todos) => todos.filter((element) => todo.id !== element.id));
  };

  const onFixButtonClick = () => {
    if (isFixing) {
      /**@type {Todo} */
      const newTodo = {
        id: todo.id,
        isComplete: todo.isComplete,
        todo: inputRef.current.value || todo.todo,
      };
      setTodos((todos) =>
        todos.map((element) => (todo.id === element.id ? newTodo : element))
      );
    }

    setIsFixing(!isFixing);
  };

  return (
    <div className="todo-box">
      <button className="todo-box__button" onClick={onCompleteButtonClick}>
        ✅
      </button>
      {isFixing ? (
        <input
          className="todo-box__input"
          defaultValue={todo.todo}
          ref={inputRef}
        />
      ) : (
        <span
          className={`todo-box__todo ${todo.isComplete ? "center-line" : ""}`}
        >
          {todo.todo}
        </span>
      )}

      <button className="todo-box__button" onClick={onFixButtonClick}>
        🔧
      </button>
      <button className="todo-box__button" onClick={onDeleteButtonClick}>
        ❌
      </button>
    </div>
  );
}
