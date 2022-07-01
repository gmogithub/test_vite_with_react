import React, { FC, useEffect, useMemo, useState } from "react";
import { createTodo, getVisibleTodos, initialTodos, Todo } from "./todos";

interface TodoListProps {

}

export const TodoList: FC<TodoListProps> = (props) => {
  const [todos, setTodos] = useState(initialTodos);
  const [showActive, setShowActive] = useState(false);
  // const activeTodos = todos.filter(todo => !todo.completed);
  const visibleTodos = useMemo(() => {
    return getVisibleTodos(todos, showActive)
  }, [todos, showActive]);

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={showActive}
          onChange={e => setShowActive(e.target.checked)}
        />
        Show only active todos
      </label>
      <NewTodo onAdd={newTodo => setTodos([...todos, newTodo])}/>
      <ul>
        {visibleTodos.map(todo => (
          <li key={todo.id}>
            {todo.completed ? <s>{todo.text}</s> : todo.text}
          </li>
        ))}
      </ul>
      <footer>
        {visibleTodos.length} todos left
      </footer>
    </>
  );
}


interface NewTodoProps {
  onAdd: (todo: Todo) => void
}

const NewTodo: FC<NewTodoProps> = ({ onAdd }) => {
  const [text, setText] = useState('');

  function handleAddClick() {
    setText('');
    onAdd(createTodo(text));
  }

  return (
    <>
      <input value={text} onChange={e => setText(e.target.value)}/>
      <button onClick={handleAddClick}>
        Add
      </button>
    </>
  );
}