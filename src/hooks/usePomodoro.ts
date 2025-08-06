import { useContext } from "react";
import { PomodoroContext } from "../stores/pomodoro/PodomoroContext";

function usePomodoro() {
    const context = useContext(PomodoroContext);
    if (!context) {
        throw new Error("usePomodoro must be used within a PomodoroProvider");
    }

    return context;
}

export default usePomodoro;
