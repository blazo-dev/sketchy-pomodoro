import usePomodoro from '../../hooks/usePomodoro';
import SettingInput from './SettingInput';

function SettingsPanel() {
    const { pomodoro, setDurations } = usePomodoro();
    const { focusDuration, shortBreakDuration, longBreakDuration } = pomodoro;

    const handleDurationChange = (type: string, value: number) => {
        if (value < 1) value = 1;
        if (value > 60) value = 60;

        const durationInSeconds = value * 60;
        setDurations({ [type]: durationInSeconds });
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <SettingInput
                label="Focus Time (minutes)"
                id="focusTime"
                value={focusDuration / 60}
                min={1}
                max={60}
                onChange={e => handleDurationChange("focusDuration", Number(e.target.value))}
                containerClassName="sketch-rotate-4"
                inputClassName="focus:border-red-500 dark:focus:border-red-400"
            />
            <SettingInput
                label="Short Break (minutes)"
                id="shortBreak"
                value={shortBreakDuration / 60}
                min={1}
                max={30}
                onChange={e => handleDurationChange("shortBreakDuration", Number(e.target.value))}
                containerClassName="sketch-rotate-1"
                inputClassName="focus:border-blue-500 dark:focus:border-blue-400"
            />
            <SettingInput
                label="Long Break (minutes)"
                id="longBreak"
                value={longBreakDuration / 60}
                min={1}
                max={60}
                onChange={e => handleDurationChange("longBreakDuration", Number(e.target.value))}
                containerClassName="sketch-rotate-3"
                inputClassName="focus:border-green-500 dark:focus:border-green-400"
            />
        </div>
    );
}

export default SettingsPanel;
