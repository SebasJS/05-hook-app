import { useMemo } from "react";
import { useState } from "react"
import { useCounter } from "../hooks/useCounter"


const heavyStuff = (initialValue = 100) => {
    for (let i = 0; i < initialValue; i++) {
        console.log('ahí vamos...');        
    }

    return`${initialValue} iteraciones realizadas`
}

export const MemoHook = () => {

    const {counter, increment} = useCounter(500)
    const [show, setShow] = useState(true)
    const memorizeValue = useMemo( () => heavyStuff(counter) , [counter])

    return (
    <>
        <h1>Counter: <small>{counter}</small> </h1>
        
        <hr />

        <h4>{ memorizeValue }</h4>

        <button 
            className="btn btn-primary"
            onClick={() => increment()}
        >
            +1
        </button>

        <button 
        className="btn btn-outline-primary"
        onClick={()=>setShow(!show)}>
            {JSON.stringify(show)}
        </button>

    </>
  )
}
