import React, { FC } from 'react';
import './App.css';

const App: FC = ()=> {
  return (
    <div className="App">
      <header className="App-header">
       <input type='text' placeholder="add todo"/>
       <button>Add todo</button>
      </header>
    </div>
  );
}

export default App;
