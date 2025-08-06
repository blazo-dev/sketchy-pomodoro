import usePomodoro from '../../hooks/usePomodoro';
import SettingInput from './SettingInput';

function SettingsPanel() {
    const { pomodoro, setDurations } = usePomodoro();
    const { focusDuration, shortBreakDuration, longBreakDuration } = pomodoro;

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <SettingInput
                label="Focus Time (minutes)"
                id="focusTime"
                value={focusDuration / 60}
                min={1}
                max={60}
                onChange={e => setDurations({ focusDuration: Number(e.target.value) * 60 })}
                containerClassName="sketch-rotate-4"
                inputClassName="focus:border-red-500 dark:focus:border-red-400"
            />
            <SettingInput
                label="Short Break (minutes)"
                id="shortBreak"
                value={shortBreakDuration / 60}
                min={1}
                max={30}
                onChange={e => setDurations({ shortBreakDuration: Number(e.target.value) * 60 })}
                containerClassName="sketch-rotate-1"
                inputClassName="focus:border-blue-500 dark:focus:border-blue-400"
            />
            <SettingInput
                label="Long Break (minutes)"
                id="longBreak"
                value={longBreakDuration / 60}
                min={1}
                max={60}
                onChange={e => setDurations({ longBreakDuration: Number(e.target.value) * 60 })}
                containerClassName="sketch-rotate-3"
                inputClassName="focus:border-green-500 dark:focus:border-green-400"
            />
        </div>
    );
}

export default SettingsPanel;
