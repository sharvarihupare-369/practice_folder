import React, { memo, useMemo } from 'react'

const heavyTask = (time) => {
    let start = Date.now();
    
    while(Date.now() - start < time){
        continue;
    }
   return 10;
}

// const customCheck = (prev,curr) => {
//     return prev.title ===  curr.title && prev.status === curr.status
// }

const Todo = memo(({id,title,status,handleDelete,handleToggle}) => {
 
    // heavyTask(200); 
    useMemo(()=>{
        heavyTask(200)
    },[])
   
  return (
    <div>
        <h3>{title}</h3>
        <p>{status ? "Completed" : "Pending"}</p>
        <button onClick={()=>handleToggle(id)}>Toggle</button>
        <button onClick={()=>handleDelete(id)}>Delete</button>
    </div>
  )
}
// ,
// customCheck
)

export default Todo


//useCallback
//useMemo

