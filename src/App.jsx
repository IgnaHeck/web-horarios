import './App.css';
import * as React from 'react';
import Tasks from './components/Tasks';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Materias, horarios y Recursos
        </h1>
      </header>
      <Tasks></Tasks>
    </div>
  );
}

export default App;