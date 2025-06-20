import { useState, useEffect, useCallback } from 'react';
import TodoInput from './Components/TodoInput';
import Todo from './Components/Todo';

import TodoWrapper from './Components/TodoWrapper';

// building an application that send request to the todo-backend that find todo based on the title using useEffect 
function App() {
    const [title, setTitle] = useState("");
    const [todos, setTodos] = useState([]);

    // I want to send the request to the backend-server when the title changes => using useEffect with title as dependency array
    useEffect(function() {
        fetchTodos();
    }, [title])

    // using useCallback
    const fetchTodos = useCallback(async function() {
        const finalTitle = title;
        const response = await fetch(`http://localhost:3000/todos/todoDetails?title=${finalTitle}`);
        const output = await response.json();

        setTodos(output.result);
    }, [title]);


    // this function gets only created at once when the component intially gets rendered / mounts on the screen, due to the useCallback it memorizes the reference and only changes when values present inside the depedency array changes
    const updateTitle = useCallback(function(event) {
        const domElement = event.target;
        const value = domElement.value;
        setTitle(value);
    }, []);

    return (
        <div style={{
            display:"flex", flexDirection:"row", flexWrap:"wrap", gap: 20
        }}>
            <TodoInput title={title} updateTitle={updateTitle} />

            <AllTodosByTitle todos={todos}/>
        </div>
    )
}

export default App;

function AllTodosByTitle({ todos }) {

    return (
        <>
            {todos.map(todo => {
                return (
                    <TodoWrapper key={todo._id}>
                        <Todo title={todo.title} description={todo.description} />
                    </TodoWrapper>
                )
            })}
        </>
    )
}


// side_effects are all those that we want to do after the components gets renders / mounts on the screen
// useEffect is alternative of the life-cycle methods of class-base-components ( componentDidMount, componentDidUnMount, componentDidUpdate ) the functionality off all life-cycle-method is provided in a single api (useEffect)

// The useEffect has a dependency array that contains different values on the updation of any value the side_effect will be called again, the dependency can contains state_variables or normal_variables but if the value of these changes the side_effect will be called again

// the side_effect should either return clean-up function or undefined