import { useContext } from "react";
import { TodoContext } from "../stores/todo/TodoContext";

export default function useTodo() {
    const todoContext = useContext(TodoContext);
    if (!todoContext) {
        throw new Error("useTodo must be used within a TodoProvider");
    }
    return todoContext;
}
