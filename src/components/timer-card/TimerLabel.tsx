function TimerLabel({ label }: { label?: string }) {
    return (
        <p className="text-lg font-medium text-gray-600 dark:text-amber-50">
            {label || "FOCUS TIME"}
        </p>
    )
}

export default TimerLabel   