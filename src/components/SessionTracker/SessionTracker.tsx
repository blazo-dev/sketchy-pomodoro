import usePomodoro from "../../hooks/usePomodoro";
import TomatoSlot from "./TomatoSlot";

function SessionTracker() {
    const { pomodoro } = usePomodoro();
    const { completedPomodoros } = pomodoro;

    return (
        <div className="text-center space-y-4">
            <h3 className="text-lg text-gray-800 dark:text-gray-100 sketch-rotate-3">
                Pomodoro Sessions
            </h3>
            <div className="flex justify-center gap-3 flex-wrap">
                {Array.from({ length: completedPomodoros }, (_, i) => (
                    <TomatoSlot key={i} active />
                ))}
                {Array.from({ length: 4 - completedPomodoros }, (_, i) => (
                    <TomatoSlot key={i} />
                ))}
            </div>
        </div>
    );
}

export default SessionTracker;