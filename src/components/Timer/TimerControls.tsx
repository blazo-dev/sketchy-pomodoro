import usePomodoro from '../../hooks/usePomodoro';
import SketchyButton from '../SketchyButton';

function TimerControls() {
    const { pomodoro, startPomodoro, pausePomodoro, resetPomodoro, completePhase } = usePomodoro();
    const { isRunning } = pomodoro;

    return (
        <div className='flex gap-4 items-center justify-center'>
            {isRunning ? (
                <SketchyButton variant="pause" onClick={pausePomodoro} />
            ) : (
                <SketchyButton variant="play" onClick={startPomodoro} />
            )}
            <SketchyButton variant="reset" onClick={resetPomodoro} />
            <SketchyButton variant="skip" onClick={completePhase} />
        </div>
    );
}


export default TimerControls;
