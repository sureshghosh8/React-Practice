import { v4 as uuidv4 } from 'uuid';
import {useState} from "react";
export default function TodoList(){
    let[todos,setTodos]=useState(["sample todo"]);
    let[newTodo,setNewTodo]=useState("");
    let addNewTask=()=>{
        setTodos([...todos,newTodo]);
        setNewTodo("");
    };
    let updateTodovalue=(event)=>{
        setNewTodo(event.target.value);

    };
    return(
        <div>
            <input placeholder="add a task" value={newTodo} onChange={updateTodovalue}></input>
            <br></br><button onClick={addNewTask}>Add Task</button>
            <br></br><br></br><br></br>
            <hr></hr>
            <h3 > Task Todo </h3>
            <br></br>
            <ul>
                {
                    todos.map((todo)=>(
                         <li>{todo}</li>
                    ))
                }
            </ul>
        </div>
    )
}