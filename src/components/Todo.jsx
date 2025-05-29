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

  return (
    <div className="todo-box">
      <button onClick={onCompleteButtonClick}>✅</button>
      <span>{todo.todo}</span>
      {todo.isComplete ? "end" : ""}
      <button onClick={onDeleteButtonClick}>❌</button>
    </div>
  );
}
