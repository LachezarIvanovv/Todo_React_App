import React, {useState} from 'react';
import './App.css';
import ToDoTable from './components/ToDoTable';
import NewTodoForm from './components/NewTodoForm';

function App() {

  const [showAddTodoForm, setShowAddTodoForm] = useState(false);

  const [todos, setTodos] = useState([
    {rowNumber: 1, rowDescription: 'Early Wake up', rowAssigned: 'Between 6.30/7.30'},
    {rowNumber: 2, rowDescription: 'Read a book', rowAssigned: '10-20 pages'},
    {rowNumber: 3, rowDescription: 'Training session', rowAssigned: 'Full body'},
    {rowNumber: 4, rowDescription: 'Learning', rowAssigned: 'React fundamentals'}
  ]
  )

    const addTodo = (description, assigned) => {

      let rowNumber = 0;

      if(todos.length > 0){
        rowNumber = todos[todos.length - 1].rowNumber + 1
        } else {
          rowNumber = 1;
        }
          const newTodo = {
            rowNumber: rowNumber, 
            rowDescription: description, 
            rowAssigned: assigned
          };

        setTodos(todos => [...todos, newTodo])
      }

      const deleteTodo = (deleteTodoRowNumber) => {
        let filtered = todos.filter(function (value) {
          return value.rowNumber !== deleteTodoRowNumber;
        });
        setTodos(filtered);
      }
    

  return (
    <div className='mt-5 container'>
      <div className="card">
        <div className="card-header">
          Daily Todo
        </div>
        <div className="card-body">
          <ToDoTable todos={todos} deleteTodo={deleteTodo}/>
          <button 
            onClick={() => setShowAddTodoForm(!showAddTodoForm)} 
            className='btn btn-primary'>
            {showAddTodoForm ? 'Close New Todo' : 'New Todo'}
          </button>
          {showAddTodoForm && 
            <NewTodoForm addTodo={addTodo}/>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
