import { createContext } from "react";
import type { PomodoroContextType } from "./pomodoroTypes";

export const PomodoroContext = createContext<PomodoroContextType | null>(null);