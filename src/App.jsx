import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';
import Button from "react-bootstrap/Button";

function TodoList({todos, onDelete}) {
  console.log(todos)
  
  return(
    <ul>
      {todos.map((todo,index)=>{
        return <li key={index}>{todo} 
        <Button variant="danger" size="sm" className="ms-2" onClick={() => onDelete(index)}>
          Delete
        </Button>
        </li>
      })}
    </ul>
  )
}

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  function addTodo() {
    setTodos([...todos, newTodo]);
    setNewTodo("");
  }

  function deleteTodo(index) {
    setTodos(todos => todos.filter((_, i) => i !== index));
  }

 return (
   <div className={`m-3`}>
     <input
     type="text"
     value={newTodo}
     onChange={(event) => setNewTodo(event.target.value)}
     />
     <Button variant="primary" className="ms-3" onClick={addTodo}>
       Add
     </Button>
     
     <TodoList todos={todos} onDelete={deleteTodo} />
   </div>
 );
}

export default App;
