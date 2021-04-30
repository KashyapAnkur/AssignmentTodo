import React,{useState} from 'react';
import Header from './Header';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import Data from './Data.json';

function Todo() {

    const [ toDoList, setToDoList ] = useState(Data);

    let addTodo = (e) => {
        e.preventDefault();
        let temp = [...toDoList, {id:toDoList.length + 1,task: e.target.todo.value,complete:false}];
        setToDoList(temp);
    }

    const handleToggle = (id) => {
        let mapped = toDoList.map(task => {
            return task.id === Number(id) ? {...task, complete: !task.complete } : {...task};
        });
        setToDoList(mapped);
    }

    let clearCompleted = (e) => {
        e.preventDefault();
        let temp = toDoList.filter( task => !task.complete);
        setToDoList(temp);
    }

    return (
        <>
            <Header />
            <TodoForm addTodo={addTodo} clearCompleted={clearCompleted}/><br /><br />
            <TodoList handleToggle={handleToggle} data={toDoList}/>
            {console.log(toDoList)}
        </>
    )
}

export default Todo;