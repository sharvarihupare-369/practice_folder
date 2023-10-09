import React, { useCallback, useState } from 'react'
import Todo from './Todo'

const initialState = [
   {id:1, title :"Task-1", status:false},
   {id:2, title :"Task-2", status:false},
   {id:3, title :"Task-3", status:false},
]

const TodoInput = () => {
    const [todos,setTodos] = useState(initialState)
    const [title,setTitle] = useState("")
    const handleAdd = () => {
        const newTodo = {
            id:todos.length,
            title,
            status:false
        }
        setTodos(prev => [...prev,newTodo])
    }

    const handleToggle = useCallback((id) => {
       setTodos(prev => {
          return prev.map((el)=> el.id === id ? {...el,status : !el.status} : el )
       })
    },[])

    // useCallback(()=>{
                        //   we aere avoiding comparision
    // },[state])

    const handleDelete = useCallback((id) => {
        setTodos(prev => {
            return prev.filter(el => el.id !== id)
        })
    },[])

  return (
    <div>
        <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)}  placeholder='Add Todo' />
        <button onClick={handleAdd}>Add Todo</button>
        <h3>Todo List</h3>
        {
            todos.map((el)=>{
                return <Todo key={el.id}  {...el} handleDelete={handleDelete} handleToggle={handleToggle} />
            })
        }
    </div>
  )
}

export default TodoInput;
