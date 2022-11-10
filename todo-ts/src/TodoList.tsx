import React, { FC } from 'react';
import TodoItem from './TodoItem';

interface TodoListProps {
    todos: Array<Todo>;
    toggleTodo: ToggleTodo;
}

export const TodoList: FC<TodoListProps> = ({ todos, toggleTodo }) => {
    return (
        <ul>
            {todos.map((todo) => {
                return <TodoItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />;
            })}
        </ul>
    );
};
