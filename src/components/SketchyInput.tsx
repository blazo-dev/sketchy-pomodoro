import React from 'react';

type SketchyInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    inputClassName?: string;
};

function SketchyInput({ inputClassName = '', ...props }: SketchyInputProps) {
    return (
        <input
            {...props}
            className={`w-full p-3 border-2 rounded-lg font-sketch text-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none transition-colors duration-300 border-gray-300 dark:border-gray-600 ${inputClassName} ${props.className ?? ''}`}
        />
    );
}

export default SketchyInput;