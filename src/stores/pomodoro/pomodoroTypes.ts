export type Phase = "focus" | "shortBreak" | "longBreak";

export interface PomodoroState {
    phase: Phase;
    isRunning: boolean;
    timeLeft: number;
    focusDuration: number;
    shortBreakDuration: number;
    longBreakDuration: number;
    completedPomodoros: number;
}

export type PomodoroTypeAction =
    | "START"
    | "SKIP"
    | "PAUSE"
    | "TICK"
    | "RESET"
    | "NEXT_PHASE"
    | "SET_DURATIONS";

export type PomodoroAction = {
    type: PomodoroTypeAction;
    payload?: Partial<PomodoroState>;
};

export interface PomodoroContextType {
    pomodoro: PomodoroState;
    startPomodoro: () => void;
    pausePomodoro: () => void;
    tickPomodoro: () => void;
    resetPomodoro: () => void;
    completePhase: () => void;
    setDurations: (durations: {
        focusDuration?: number;
        shortBreakDuration?: number;
        longBreakDuration?: number;
    }) => void;
}
