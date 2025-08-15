import type { Todo } from '../../stores/todo/todoTypes';
import TodoItem from './TodoItem';

type Props = {
    todos: Todo[];
};

function TodoList({ todos }: Props) {
    return (
        <ul id="todoList" className="space-y-2">
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </ul>
    );
}

export default TodoList;
