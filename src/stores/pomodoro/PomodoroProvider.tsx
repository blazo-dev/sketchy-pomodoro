import { useMemo, type ReactNode } from "react";
import usePomodoroReducer from "../../hooks/usePomodoroReducer";
import { PomodoroContext } from "./PomodoroContext";

export function PomodoroProvider({ children }: { children: ReactNode }) {

    const { pomodoro, startPomodoro, pausePomodoro, tickPomodoro, resetPomodoro, completePhase, setDurations } = usePomodoroReducer();

    const value = useMemo(
        () => ({
            pomodoro,
            startPomodoro,
            pausePomodoro,
            tickPomodoro,
            resetPomodoro,
            completePhase,
            setDurations
        }),
        [pomodoro, startPomodoro, pausePomodoro, tickPomodoro, resetPomodoro, completePhase, setDurations]
    );

    return <PomodoroContext.Provider value={value}>{children}</PomodoroContext.Provider>
}
