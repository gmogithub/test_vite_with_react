let nextId = 0;
let calls = 0;

export function createTodo(text: string, completed = false): Todo {
  return {
    id: nextId++,
    text,
    completed
  };
}

export const initialTodos: Todo[] = [
  createTodo('Get apples', true),
  createTodo('Get oranges', true),
  createTodo('Get carrots'),
];


export interface Todo {
  text: string,
  completed: boolean,
  id: number
}

export function getVisibleTodos(todos: Todo[], showActive: boolean) {
  console.log(`getVisibleTodos() was called ${++calls} times`);
  const activeTodos = todos.filter(todo => !todo.completed);
  return showActive ? activeTodos : todos;
}