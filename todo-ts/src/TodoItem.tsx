import React, { FC } from 'react';
import style from './TodoItem.module.css'

interface TodoProps {
    todo: {
        text: string;
        complete: boolean;
    };
    toggleTodo: (selectedTodo: Todo)=>void;
   
}

const TodoItem: FC<TodoProps> = ({ todo, toggleTodo }) => {
    return (
        <label className={todo.complete? style.complete : undefined}>
            <input type='checkbox' checked={todo.complete} onChange={()=>toggleTodo(todo)} />
            {todo.text}
        </label>
    );
};
export default TodoItem;
