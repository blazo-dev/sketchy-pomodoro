type Props = {
    className?: string;
    variant?: "play" | "pause" | "reset" | "skip";
    onClick?: () => void;
}

const icons = {
    play: "▶ Start",
    pause: "■ Pause",
    reset: "↺ Reset",
    skip: "⏭ Skip",
};

const classVariants = {
    play: "bg-green-600 hover:bg-green-700 -rotate-6",
    pause: "bg-red-600 hover:bg-red-700 -rotate-6",
    reset: "bg-gray-300 hover:bg-gray-400 translate-y-1",
    skip: "bg-yellow-600 hover:bg-yellow-700 rotate-6",
};


function SketchyButton({ className, variant = "play", onClick }: Props) {
    return (
        <button id="playPauseBtn" className={`text-gray-800 border-2 border-gray-800 font-medium text-sm transition-colors duration-300 p-0.5 active:animate-bounce-sketch cursor-pointer ${classVariants[variant]} ${className}`} onClick={onClick}>
            {icons[variant]}
        </button>
    )
}

export default SketchyButton