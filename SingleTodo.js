import React from 'react';

function SingleTodo({val, e, handleToggle}) {

    let handleClick = (e) => {
        e.preventDefault();
        handleToggle(e.currentTarget.id);
    }

    return (
        <>
            <span className={val.complete ? "strike" : "todo"} id={val.id} onClick={handleClick}>{val.task}</span><br /><br />
        </>
    )
}

export default SingleTodo;