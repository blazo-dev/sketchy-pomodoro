import { useState } from 'react';
import SketchyInput from '../SketchyInput';
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';
import useTodo from '../../hooks/useTodo';

function Todo() {
    const { todos, addTodo } = useTodo();

    const [input, setInput] = useState('');

    const addTask = () => {
        if (!input.trim()) {
            return;
        }

        const newTodo = {
            id: crypto.randomUUID(),
            title: input.trim(),
            completed: false,
        };

        addTodo(newTodo);
        setInput('');

    };

    const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addTask();
        }
    };

    return (
        <div className="bg-white dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 rounded-2xl p-6 shadow-md sketch-rotate-2 transition-colors duration-300">
            <TodoHeader />
            <div className="flex gap-2 mb-4">
                <SketchyInput
                    type="text"
                    id="todoInput"
                    placeholder="Add a task for this pomodoro..."
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={handleInputKeyDown}
                    inputClassName="border-gray-300 dark:border-gray-600 focus:border-red-500 dark:focus:border-red-400"
                />
                <button
                    type="button"
                    onClick={addTask}
                    className="px-4 py-2 rounded-lg font-sketch bg-green-500 text-amber-50 hover:bg-green-600 transition-colors"
                >
                    Add
                </button>
            </div>
            <TodoList todos={todos} />
        </div>
    );
}

export default Todo;