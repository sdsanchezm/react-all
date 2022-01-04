import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

const todos = [
    {text: 'Cut onions', completed: false},
    {text: 'bake garlic', completed: false},
    {text: 'Enjoy food', completed: false},
]

function App() { // este es el componente App
    return (
        <React.Fragment>
            <TodoCounter /> 
            
            <TodoSearch />
            
            <TodoList >
                {todos.map( todo => (
                    <TodoItem key={todo} text={todo.text} />
                ))}
            </TodoList>

            <CreateTodoButton />
            
        </React.Fragment>
        // React.createElement('h1', { id: 'this is a title'}, 'Oli react')  // esta esta la forma vanilla de React
    );
  }
  
  export default App;