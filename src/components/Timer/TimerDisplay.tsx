import usePomodoro from "../../hooks/usePomodoro";
import { formatTime, getLabel } from "../../utils/display";
import TimerLabel from "./TimerLabel";


function TimerDisplay() {
    const { pomodoro } = usePomodoro();
    const { timeLeft } = pomodoro;

    const label = getLabel(pomodoro.phase);

    return (
        <div className="relative w-68 h-68 bg-gray-50/20 dark:bg-gray-700/50 rounded-full border-4 border-gray-800 dark:border-gray-300 shadow-xl flex items-center justify-center flex-col -rotate-5 transition-colors duration-300">
            <h2 className="text-5xl font-bold text-gray-800 dark:text-amber-50">
                {formatTime(timeLeft)}
            </h2>
            <TimerLabel label={label} />
        </div>
    )
}

export default TimerDisplay