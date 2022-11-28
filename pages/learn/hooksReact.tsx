import { useState } from "react"
import React from 'react'
import styles from '../../styles/Home.module.css'

const hooksReact = () => {
    const initialCount =0
    const [count,setCount] = useState(initialCount)

    // function to perform increamenting value by 5
    const incFive = ()=>{
      for (let index = 0; index <5; index++) {
        setCount(prevCount => prevCount+1)
        
      }
    }
  return (
    <div className={styles.container}>
        <h1 className={styles.cardInsta}>Count : { count}</h1>
        <div className={styles.centerAlign}>
        <button className={styles.cardYt} onClick={()=>{setCount(initialCount)}}>Reset</button>
        <button className={styles.card} onClick={()=>{setCount(prevCount => prevCount+1)}}>Increase</button>
        <button className={styles.card} onClick={()=>{setCount(prevCount => prevCount-1)}}>Decrrease</button>
        </div>
        <div className={styles.container}>
          <button className={styles.cardYt} onClick={incFive}>Increase by 5</button>
        </div>
    </div>
  )
}

export default hooksReact