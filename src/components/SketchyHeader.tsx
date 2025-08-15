import IconTomato from './icos/IconTomato'

function SketchyHeader() {
    return (
        <header className='w-full flex flex-col md:flex-row items-center justify-center gap-4'>
            <IconTomato className="w-16 h-16 -rotate-5 font-caveat hover:animate-wiggle active:animate-bounce-sketch" />
            <div className="grid">
                <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-amber-50">
                    Sketchy Pomodoro
                </h1>
                <p className='text-center text-gray-600 dark:text-gray-300 text-sm'>Productivity timer</p>
            </div>
        </header>
    )
}

export default SketchyHeader