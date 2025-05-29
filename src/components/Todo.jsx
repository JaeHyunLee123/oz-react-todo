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
  const onDeleteButtonClick = () => {
    setTodos((todos) => todos.filter((element) => todo.id !== element.id));
  };

  return (
    <div className="todo-box">
      <span>{todo.todo}</span>
      <button onClick={onDeleteButtonClick}>❌</button>
    </div>
  );
}
