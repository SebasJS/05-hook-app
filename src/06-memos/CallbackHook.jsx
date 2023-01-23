import { useCallback } from "react"
import { useState } from "react"
import { ShowIncrement } from "./ShowIncrement"

export const CallbackHook = () => {

    const [counter, setCounter] = useState( 10 )

    const incrementFather = useCallback(
        (value = 1) => {
            setCounter(( c ) => c + value)
        },[]
    )

    return (
    <>
        <h1>Callback Hook: { counter }</h1>
        <hr />
        <ShowIncrement increment={incrementFather}/>
    </>
  )
}
