import { IconTrashFilled } from "@tabler/icons-react";
import type { Todo } from "../../stores/todo/todoTypes";
import useTodo from "../../hooks/useTodo";

type Props = {
    todo: Todo;
};

function TodoItem({ todo }: Props) {
    const { removeTodo, completeTodo } = useTodo();
    const { title, completed, id } = todo;

    return (
        <li className="flex items-center gap-3 p-2 rounded-lg bg-gray-100 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 sketch-rotate-1">
            <input
                type="checkbox"
                className="w-5 h-5 text-red-500 dark:text-red-400"
                checked={completed}
                onChange={() => completeTodo(id)}
            />
            <span className="flex-1 text-gray-800 dark:text-gray-200">{title}</span>
            <button
                type="button"
                onClick={() => removeTodo(id)}
                className="ml-auto bg-none border-none text-red-500 dark:text-red-600 cursor-pointer text-xl hover:text-red-600 dark:hover:text-red-700 transition-colors"
            >
                <IconTrashFilled className="w-5 h-5" />
            </button>
        </li>
    );
}

export default TodoItem;
