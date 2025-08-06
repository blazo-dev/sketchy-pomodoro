import SessionTracker from "./components/SessionTracker/SessionTracker"
import SettingsPanel from "./components/SettingsPanel/SettingsPanel"
import SketchyHeader from "./components/SketchyHeader"
import ThemeToggle from "./components/ThemeToggle"
import Timer from "./components/Timer/Timer"
import Todo from "./components/TodoList/Todo"
import { PomodoroProvider } from "./stores/pomodoro/PomodoroProvider"
import { TodoProvider } from "./stores/todo/TodoProvider"

function App() {

  return (
    <>
      <main className="max-w-4xl w-wrapper mx-auto space-y-8 bg-notebook bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 shadow-md relative overflow-hidden notebook-lines transition-colors duration-300">
        <ThemeToggle />
        <PomodoroProvider>
          <SketchyHeader />
          <Timer />
          <SessionTracker />
          <SettingsPanel />
        </PomodoroProvider>
        <TodoProvider>
          <Todo />
        </TodoProvider>
      </main>
    </>
  )
}

export default App
