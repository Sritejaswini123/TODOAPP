import React, { useState } from 'react';
import './App.css';
//adding the items to the todo list
const App = () => {
  const initialTodosList = [
    { id: 1, title: 'Buy groceries' },
    { id: 2, title: 'Read a book' },
    { id: 3, title: 'Go for a walk' },
    { id: 4, title: 'Go for a coffee' }
  ];

//creating a add function to add the items to the todo

  const [todos, setTodos] = useState(initialTodosList);
  const [newTodo, setNewTodo] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      const newTodoItem = {
        id: todos.length + 1,
        title: newTodo.trim()
      };
      setTodos([...todos, newTodoItem]);
      setNewTodo('');
    }
  };
//creating a delete function to delete the added todo item
  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  const filterTodos = () => {
    const filteredTodos = todos.filter(todo =>
      todo.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setTodos(filteredTodos);
  };
 //reset function
  const resetFilter = () => {
    setTodos(initialTodosList);
    setSearchTerm('');
  };
 //heading
  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      

      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search todos"
        />
        <button onClick={filterTodos}>Search</button>
        <button onClick={resetFilter}>Reset</button>
      </div>

      
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter new todo"
        />
        <button onClick={addTodo}>Add</button>
      </div>



      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.title}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

