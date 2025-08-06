import { initialPomodoroState } from "./pomodoroInitialState";
import type {
    Phase,
    PomodoroAction,
    PomodoroState,
    PomodoroTypeAction,
} from "./pomodoroTypes";

export const POMODORO_ACTIONS: Record<string, PomodoroTypeAction> = {
    START: "START",
    PAUSE: "PAUSE",
    RESET: "RESET",
    TICK: "TICK",
    NEXT_PHASE: "NEXT_PHASE",
    SET_DURATIONS: "SET_DURATIONS",
};

export const pomodoroReducer = (
    state: PomodoroState,
    action: PomodoroAction
): PomodoroState => {
    const { type, payload } = action;

    switch (type) {
        case POMODORO_ACTIONS.START: {
            return { ...state, isRunning: true };
        }

        case POMODORO_ACTIONS.PAUSE: {
            return { ...state, isRunning: false };
        }

        case POMODORO_ACTIONS.TICK: {
            const newTime = Math.max(state.timeLeft - 1, 0);
            return { ...state, timeLeft: newTime };
        }

        case POMODORO_ACTIONS.RESET: {
            return {
                ...state,
                ...initialPomodoroState,
            };
        }

        case POMODORO_ACTIONS.NEXT_PHASE: {
            let nextPhase: Phase;
            let newCompleted = state.completedPomodoros;

            if (newCompleted === 4) newCompleted = 0;

            if (state.phase === "focus") {
                newCompleted += 1;
                nextPhase = newCompleted % 4 === 0 ? "longBreak" : "shortBreak";
            } else {
                nextPhase = "focus";
            }

            const newTime = getDurationFor(nextPhase, state);

            return {
                ...state,
                phase: nextPhase,
                timeLeft: newTime,
                isRunning: false,
                completedPomodoros: newCompleted,
            };
        }

        case POMODORO_ACTIONS.SET_DURATIONS: {
            const newDurations = {
                ...state,
                ...payload,
            };
            const updated = {
                ...newDurations,
                timeLeft: state.isRunning
                    ? state.timeLeft
                    : getDurationFor(state.phase, newDurations),
            };

            return updated;
        }

        default:
            return state;
    }
};

function getDurationFor(phase: Phase, state: PomodoroState): number {
    switch (phase) {
        case "focus":
            return state.focusDuration;
        case "shortBreak":
            return state.shortBreakDuration;
        case "longBreak":
            return state.longBreakDuration;
    }
}
