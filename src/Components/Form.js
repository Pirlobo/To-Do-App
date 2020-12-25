import React from 'react';

const From = ({todos, setTodos, inputText, setInputText, setStatus}) => {
    // Input changes and call this function
    const inputTextHandler = (e) => {
        // console.log(e.target.value);
        setInputText(e.target.value);
    }
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, 
            {text: inputText, 
                completed: false, 
                id: Math.random() * 1000
            }
        ]);
        setInputText("");
    };
    const statusHandler = (e) => {
        setStatus(e.target.value);
    }
    return (
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input"></input>
            <button onClick={submitTodoHandler} className="todo-button">
                <i className="fa fa-plus-square" aria-hidden="true"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default From;

         //https://daveceddia.com/usestate-hook-examples/