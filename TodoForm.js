import React from 'react';

function TodoForm({addTodo, clearCompleted}) {
    return (
        <>
            <form onSubmit={addTodo}>
                <input type="text" placeholder="Enter todo" name="todo" />
                <button>Add todo</button><br /><br />
                <button onClick={clearCompleted}>Clear Completed</button>
            </form>
        </>
    )
}

export default TodoForm;