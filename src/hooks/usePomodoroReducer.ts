import { useReducer } from "react";
import {
    POMODORO_ACTIONS,
    pomodoroReducer,
} from "../stores/pomodoro/pomodoroReducer";
import { initialPomodoroState } from "../stores/pomodoro/pomodoroInitialState";

export default function usePomodoroReducer() {
    const [pomodoro, dispatch] = useReducer(
        pomodoroReducer,
        initialPomodoroState
    );

    const startPomodoro = () => {
        if (pomodoro.isRunning) return;

        dispatch({ type: POMODORO_ACTIONS.START });
    };

    const pausePomodoro = () => {
        if (!pomodoro.isRunning) return;

        dispatch({ type: POMODORO_ACTIONS.PAUSE });
    };

    const tickPomodoro = () => {
        dispatch({ type: POMODORO_ACTIONS.TICK });
    };

    const resetPomodoro = () => {
        dispatch({ type: POMODORO_ACTIONS.RESET });
    };

    const completePhase = () => {
        dispatch({
            type: POMODORO_ACTIONS.NEXT_PHASE,
        });
    };

    const setDurations = (durations: {
        focusDuration?: number;
        shortBreakDuration?: number;
        longBreakDuration?: number;
    }) => {
        dispatch({
            type: POMODORO_ACTIONS.SET_DURATIONS,
            payload: durations,
        });
    };

    return {
        pomodoro,
        startPomodoro,
        pausePomodoro,
        tickPomodoro,
        resetPomodoro,
        completePhase,
        setDurations,
    };
}
