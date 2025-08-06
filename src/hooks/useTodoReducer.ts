import { useReducer } from "react";
import { TODO_ACTIONS, todoReducer } from "../stores/todo/todoReducer";
import { initialTodoState } from "../stores/todo/todoInitialState";
import type { Todo } from "../stores/todo/todoTypes";

export default function useTodoReducer() {
    const [todo, dispatch] = useReducer(todoReducer, initialTodoState);

    const addTodo = (todo: Todo) => {
        dispatch({ type: TODO_ACTIONS.ADD, payload: todo });
    };

    const removeTodo = (todoId: string) => {
        dispatch({ type: TODO_ACTIONS.REMOVE, payload: { id: todoId } });
    };

    const completeTodo = (todoId: string) => {
        dispatch({ type: TODO_ACTIONS.COMPLETE, payload: { id: todoId } });
    };

    return { todos: todo.todos, addTodo, completeTodo, removeTodo };
}
