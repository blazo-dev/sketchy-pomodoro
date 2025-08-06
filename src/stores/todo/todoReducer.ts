import { TODO_KEY } from "./todoInitialState";
import type { Todo, TodoAction, TodoState, TodoTypeAction } from "./todoTypes";

export const TODO_ACTIONS: Record<string, TodoTypeAction> = {
    ADD: "ADD",
    REMOVE: "REMOVE",
    COMPLETE: "COMPLETE",
};

const updateLocalTodoStorage = (state: Partial<TodoState>) => {
    window.localStorage.setItem(TODO_KEY, JSON.stringify(state));
};

export const todoReducer = (state: TodoState, action: TodoAction) => {
    const { type, payload } = action;

    switch (type) {
        case TODO_ACTIONS.ADD: {
            const newTodo = payload as Todo;
            const updatedTodos = [...state.todos, newTodo];
            updateLocalTodoStorage({ todos: updatedTodos });
            return { todos: updatedTodos };
        }
        case TODO_ACTIONS.REMOVE: {
            const { id } = payload as { id: string };
            const updatedTodos = state.todos.filter((todo) => todo.id !== id);
            updateLocalTodoStorage({ todos: updatedTodos });
            return { todos: updatedTodos };
        }
        case TODO_ACTIONS.COMPLETE: {
            const { id } = payload as { id: string };
            const updatedTodos = state.todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            );
            updateLocalTodoStorage({ todos: updatedTodos });
            return { todos: updatedTodos };
        }
        default:
            return state;
    }
};
