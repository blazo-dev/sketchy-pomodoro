import TimerControls from "./TimerControls"
import TimerDisplay from "./TimerDisplay"

function Timer() {
    return (
        <section className="flex flex-col gap-4 items-center justify-center w-full h-full">
            <TimerDisplay />
            <TimerControls />
        </section>
    )
}

export default Timer