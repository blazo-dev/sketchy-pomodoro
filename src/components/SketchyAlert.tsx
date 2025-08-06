
function SketchyAlert() {
    return (
        <div id="notification" className="fixed top-20 right-4 bg-green-500 dark:bg-green-600 text-white p-4 rounded-xl font-semibold transform translate-x-full transition-transform duration-300 z-40 shadow-lg max-w-sm">
            {/* Notification content can be dynamically inserted here */}
            <p className="text-center">This is a sketchy alert!</p>
        </div>
    )
}

export default SketchyAlert 