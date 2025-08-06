import type { TodoState } from "./todoTypes";

export const TODO_KEY = "todo";

export const initialTodoState: TodoState =
    JSON.parse(window.localStorage.getItem(TODO_KEY)!) || { todos: [] };
