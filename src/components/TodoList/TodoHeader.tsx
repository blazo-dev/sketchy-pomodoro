function TodoHeader() {
    return (
        <h3 className="font-doodle text-2xl text-gray-800 dark:text-gray-100 mb-4 text-center flex items-center justify-center gap-3">
            <svg width="28" height="28" viewBox="0 0 24 24" className="sketch-rotate-1">
                <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"
                    className="fill-yellow-400 stroke-yellow-600 dark:fill-yellow-500 dark:stroke-yellow-600" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="m13.5 6.5 4 4"
                    className="stroke-yellow-600 dark:stroke-yellow-600" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Today's Tasks
        </h3>
    );
}

export default TodoHeader;
