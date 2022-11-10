import React, { useState, FC, ChangeEvent } from 'react';
import './App.css';
import Input from './Input';
import TodoItem from './TodoItem';
import { TodoList } from './TodoList';

const initialTodos: Array<Todo> = [
   {text: 'eat breakfast', complete: false}
];


const App: FC = () => {
    const [todos, setTodos] = useState(initialTodos);
    const [newTodo, setNewTodo] = useState('')

    // const handleChange = (e: ChangeEvent<HTMLInputElement>)=>{

    //   setnewTodo(e.target.value)
    // }
    const toggleTodo = (selectedTodo: Todo) => {
        const newTodos = todos.map((todo) => {
            if (todo === selectedTodo) {
                return {
                    ...todo,
                    complete: !todo.complete,
                };
            }
            return todo;
        });

        setTodos(newTodos)
    };

    const addTodo = (e:React.ChangeEvent<HTMLInputElement>)=>{
      setNewTodo(e.target.value)
      
      
    }

    const displayNewTodo = ()=>{
      console.log(newTodo)
    }

    return (
        <div className="App">
            <header className="App-header">
            <TodoList todos={todos} toggleTodo={toggleTodo} />
                <button style={{ margin: '2 rem' }} onClick={displayNewTodo}>Add todo</button>
                <input
                    type="text"
                    style={{ padding: '20 px' }}
                    value={newTodo}
                    onChange={addTodo}
                />

                <Input placeholder="username" name="username" />
            </header>
        </div>
    );
};

export default App;
