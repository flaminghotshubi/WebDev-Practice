import './App.css';
import { useState } from 'react';
import TodoTable from './Components/TodoTable';
import NewTodoForm from './Components/NewTodoForm';

function App() {

  const [todos, setTodos] = useState([
    { rowNumber: 1, rowDescription: 'Feed puppy', rowAssigned: 'User One' },
    { rowNumber: 2, rowDescription: 'Water plants', rowAssigned: 'User One' },
    { rowNumber: 3, rowDescription: 'Make dinner', rowAssigned: 'User One' }
  ]);

  const [showForm, setShowForm] = useState(false);

  const addToDo = (description, assigned) => {

    let rowNumber = 0;
    if (todos.length > 0) {
      rowNumber = todos[todos.length - 1].rowNumber + 1;
    } else rowNumber = 1;

    setTodos([...todos, {
      rowNumber: rowNumber,
      rowDescription: description,
      rowAssigned: assigned
    }])
  }

  const deleteToDo = (id) => {
    setTodos(todos.filter(item => item.rowNumber !== id))
  }

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your to-do's
        </div>
        <div className='card-body'>
          <TodoTable todos={todos} deleteToDo={deleteToDo} />
          <button type="button" className="btn btn-primary" onClick={() => setShowForm(!showForm)}>
            {showForm ? 'Close' : 'Add new'}
          </button>
          {showForm && <NewTodoForm addToDo={addToDo} />}
        </div>
      </div>
    </div>
  );
}

export default App;
