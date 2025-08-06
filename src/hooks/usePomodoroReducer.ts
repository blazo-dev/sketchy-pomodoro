import { useEffect, useRef, useReducer } from "react";
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

    const intervalRef = useRef<number | null>(null);

    useEffect(() => {
        if (pomodoro.isRunning && intervalRef.current === null) {
            intervalRef.current = window.setInterval(() => {
                dispatch({ type: POMODORO_ACTIONS.TICK });
            }, 1000);
        }

        if (!pomodoro.isRunning && intervalRef.current !== null) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }

        return () => {
            if (intervalRef.current !== null) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        };
    }, [pomodoro.isRunning]);

    useEffect(() => {
        if (pomodoro.isRunning && pomodoro.timeLeft <= 0) {
            dispatch({ type: POMODORO_ACTIONS.NEXT_PHASE });
        }
    }, [pomodoro.timeLeft, pomodoro.isRunning]);

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
        dispatch({ type: POMODORO_ACTIONS.NEXT_PHASE });
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
