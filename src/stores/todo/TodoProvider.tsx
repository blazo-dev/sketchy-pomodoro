import { useMemo, type ReactNode } from "react";
import useTodoReducer from "../../hooks/useTodoReducer";
import { TodoContext } from "./TodoContext";

export function TodoProvider({ children }: { children: ReactNode }) {

    const { todos, addTodo, removeTodo, completeTodo } = useTodoReducer();

    const value = useMemo(
        () => ({
            todos,
            addTodo,
            removeTodo,
            completeTodo
        }),
        [todos, addTodo, removeTodo, completeTodo]
    );

    return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
}
