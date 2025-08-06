import { createContext } from "react";
import type { TodoContextType } from "./todoTypes";

export const TodoContext = createContext<TodoContextType | null>(null);