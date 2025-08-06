export interface Todo {
    id: string;
    title: string;
    completed: boolean;
}

export interface TodoState {
    todos: Todo[];
}

export type TodoTypeAction = "ADD" | "REMOVE" | "COMPLETE";

export type TodoAction =
    | { type: TodoTypeAction; payload: Todo }
    | { type: TodoTypeAction; payload: { id: string } };

export interface TodoContextType {
    todos: Todo[];
    addTodo: (todo: Todo) => void;
    removeTodo: (id: string) => void;
    completeTodo: (id: string) => void;
}
