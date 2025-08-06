
type Props = {
    active?: boolean;
    className?: string;
};

function TomatoSlot({ active = false, className = "" }: Props) {
    const tomatoClass =
        active
            ? "fill-red-500 stroke-red-700"
            : "fill-white stroke-gray-300 dark:fill-white dark:stroke-gray-300";

    const leaveClass =
        active
            ? "fill-green-500 stroke-green-700"
            : "fill-gray-300 stroke-gray-400";

    return (
        <div
            className={`w-12 h-12 bg-gray-200 dark:bg-gray-600 border-2 border-gray-400 dark:border-gray-500 rounded-full flex items-center justify-center transition-all duration-300 rotate-5 ${className}`}
        >
            <svg width="24" height="24" viewBox="0 0 40 40">
                <path d="M20 34 C12 34 8 28 8 20 C8 14 12 10 16 10 C18 8 22 8 24 10 C28 10 32 14 32 20 C32 28 28 34 20 34 Z"
                    className={tomatoClass} strokeWidth="1" />
                <path d="M18 10 C18 8 19 6 20 4 C21 6 22 8 22 10"
                    className={leaveClass} strokeWidth="1" />
            </svg>
        </div>
    );
}

export default TomatoSlot;
