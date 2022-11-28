import { useState } from "react"
import React from 'react'

const hooksReact = () => {
    const initialCount =0
    const [count,setCount] = useState(initialCount)
  return (
    <div>
        Count : { count}
        <button onClick={()=>{setCount(initialCount)}}>Reset</button>
        <button onClick={()=>{setCount(prevCount => prevCount+1)}}>Increase</button>
        <button onClick={()=>{setCount(prevCount => prevCount-1)}}>Decrrease</button>
    </div>
  )
}

export default hooksReact