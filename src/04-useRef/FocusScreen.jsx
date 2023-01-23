import { useRef } from "react";

export const FocusScreen = () => {
    
    const inputRef = useRef()

    const handleClick = () => {
        inputRef.current.select();
    }

    return (
    <>
        <h1>Focus Screen</h1>
        
        <hr />
        
        <input
            ref={inputRef}
            className="form-control"
            placeholder="Ingrese el dato"
            type= 'text'
        ></input>
        <button
            onClick={handleClick} 
            className="btn btn-primary mt-2"
        >
            Set focus
        </button>
    </>
  )
}
