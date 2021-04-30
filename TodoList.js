import React from 'react';
import SingleTodo from './SingleTodo';

function TodoList({data, handleToggle}) {

    return (
        <>
            {data.map( (val,index) => {
                return (
                    <>
                        <SingleTodo val={val} index={index} handleToggle={handleToggle}/>
                    </>
                )
            })}
        </>
    )
}

export default TodoList;