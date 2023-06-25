import React, { useState, useEffect } from "react";
import TodoService from "../Services/TodoService";
import FetchClient from "../ServiceClients/FetchClients";

const TodoList = () => {
    const [todos, setTodos] = useState([]);    

    useEffect( () => {

        const todoService = new TodoService(FetchClient);

        const fetchTodos = async () => {
            try{
                const todos = await todoService.getTodos();
                setTodos(todos);
            } catch(err){
                console.log(err);
            }
        }

        fetchTodos();
    },[]);

    const handleCreateTodo = async (todo) => {
        const todoService = new TodoService(FetchClient)
        try {
            const createdTodo = await todoService.createTodo(todo);
            setTodos([...todos, createdTodo]);
        }catch(err){
            console.log(err);
        }
    }

    const testObject ={
        "id": 9,
        "name": "Burbuja",
        "lastname": "Sanc",
        "type": "perruncho",
        "age": 36,
        "isActive": 0
    }

    return (
        <div>
            <button onClick={()=>{handleCreateTodo({...testObject})}}>create</button>
            <hr/>
            {todos.map( (item) => (
                 <h2 key={item.id}>{item.name}</h2> 
            ))}
        </div>
    )
}

export default TodoList;