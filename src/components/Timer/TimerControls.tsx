import { useState } from 'react';
import usePomodoro from '../../hooks/usePomodoro';
import SketchyButton from '../SketchyButton';

function TimerControls() {
    const { pomodoro, startPomodoro, pausePomodoro, resetPomodoro, completePhase, tickPomodoro } = usePomodoro();
    const { isRunning, timeLeft } = pomodoro;
    const [timer, setTimer] = useState<number>();

    const handleStart = () => {
        if (isRunning) return;
        setTimer(setInterval(() => {
            tickPomodoro();
            if (timeLeft <= 0) {
                completePhase();
            }
        }, 1000))

        startPomodoro();
    }

    const handlePause = () => {
        if (!isRunning) return;
        clearInterval(timer);
        pausePomodoro();
    }

    const handleReset = () => {
        clearInterval(timer);
        resetPomodoro();
    }

    const handleSkip = () => {
        clearInterval(timer);
        completePhase();
    }



    return (
        <div className='flex gap-4 items-center justify-center'>
            {
                isRunning ? (
                    <SketchyButton variant="pause" onClick={() => handlePause()} />
                ) : (
                    <SketchyButton variant="play" onClick={() => handleStart()} />
                )
            }
            <SketchyButton variant="reset" onClick={() => handleReset()} />
            <SketchyButton variant="skip" onClick={() => handleSkip()} />
        </div>
    )
}

export default TimerControls