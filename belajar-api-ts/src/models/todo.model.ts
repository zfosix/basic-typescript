import { ITodo } from "../interfaces/todo.interface";

let todos: ITodo[] = [];
let nextId = 1; // Mulai dari 1

export const createTodo = (todo: Omit<ITodo, 'id' | 'createdAt'>): ITodo => {
  const newTodo: ITodo = {
    id: nextId++, 
    ...todo,
    createdAt: new Date()
  };
  todos.push(newTodo);
  return newTodo;
};

export const getTodos = (): ITodo[] => {
  return todos;
};

export const getTodoById = (id: number): ITodo | undefined => {
  return todos.find(todo => todo.id === id);
};

export const updateTodo = (id: number, updatedTodo: Partial<ITodo>): ITodo | null => {
  const index = todos.findIndex(todo => todo.id === id);
  if (index === -1) return null;

  todos[index] = { ...todos[index], ...updatedTodo };
  return todos[index];
};

export const deleteTodo = (id: number): boolean => {
  const initialLength = todos.length;
  todos = todos.filter(todo => todo.id !== id);
  return todos.length !== initialLength;
};
