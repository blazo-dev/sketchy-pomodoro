import type { PomodoroState } from "./pomodoroTypes";

export const initialPomodoroState: PomodoroState = {
    phase: "focus",
    isRunning: false,
    focusDuration: 25 * 60,
    shortBreakDuration: 5 * 60,
    longBreakDuration: 15 * 60,
    timeLeft: 25 * 60,
    completedPomodoros: 0,
};

export const POMODORO_KEY = "pomodoro";
