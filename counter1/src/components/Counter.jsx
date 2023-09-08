import React from 'react'
import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
      setCount(count + 1);
    };
    const decrement = () => {
      setCount(count - 1);
    };
  
  
  return (
    <div>
    <h1 className='head'>Counter App</h1>
    <p className='counter'>Count: {count}</p>
    <button className="increment-button" onClick={increment}>
      Increment
    </button>
    <button className="decrement-button" onClick={decrement}>Decrement</button>
  </div>

  )
}

export default Counter