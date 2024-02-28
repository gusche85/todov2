import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';
import Button from "react-bootstrap/Button";

function TodoList({todos, del}) {
  console.log(todos)
  return(
    <ul>
      {todos.map((todo,index)=>{
        return <li key={index}>{todo}</li>
      })}
    </ul>
  )
}

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [del, delTodo] = useState({todos});

  function addTodo() {
    setTodos([...todos, newTodo]);
    setNewTodo("");
  }

  function deleteTodo() {
    delTodo([...todos, del]);
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
     <Button variant="danger" className="ms-3" onClick={deleteTodo}>
        Delete
      </Button>
     <TodoList todos={todos} />
   </div>
 );
}

export default App;
