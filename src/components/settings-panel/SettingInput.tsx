import SketchyInput from "../SketchyInput";

type SettingInputProps = {
    label: string;
    id: string;
    value: number;
    min?: number;
    max?: number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    inputClassName?: string;
    containerClassName?: string;
    labelClassName?: string;
};

function SettingInput({
    label,
    id,
    value,
    min = 1,
    max = 60,
    onChange,
    inputClassName = '',
    containerClassName = '',
    labelClassName = '',
}: SettingInputProps) {
    return (
        <div className={`setting-group bg-gray-50 dark:bg-gray-700 p-6 rounded-2xl border-2 border-gray-300 dark:border-gray-600 shadow-md transition-colors duration-300 ${containerClassName}`}>
            <label htmlFor={id} className={`block text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3 ${labelClassName}`}>
                {label}
            </label>
            <SketchyInput
                type="number"
                id={id}
                value={value}
                min={min}
                max={max}
                onChange={onChange}
                inputClassName={inputClassName}
            />
        </div>
    );
}

export default SettingInput;