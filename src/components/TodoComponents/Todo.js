import React from 'react'

const Todo = (props) => {
    return (
        <div 
            className={`item${props.todo.completed ? 'done': ""}`}
            onClick={() => props.completed(props.todo.id)}
        >
            {props.todo.task}
        </div>
    )
};

export default Todo;