//import { useEffect, useState } from "react"
import { useForm } from "../hooks/useForm";
//import { Message } from "./Message";

export const FormWithCustomHook = () => {
  
  const { onInputReset, onInputChange, username, email, password } = useForm({ 
    username: '',
    email: '', 
    password: ''
  })
  
  return (
    <>
        <h1> FORMULARIO SIMPLE </h1>
        <hr/>
        <input
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"
            value={ username }
            onChange={ onInputChange }
        />
        <input
            type="email"
            className="form-control mt-2"
            placeholder="example@google.com"
            name="email"
            value={ email }
            onChange={ onInputChange }
        />    
        <input
            type='password'
            className="form-control mt-2"
            placeholder="contraseña"
            name="password"
            value={ password }
            onChange={ onInputChange }
        />

        <button className="btn btn-primary mt-2" onClick={ onInputReset }>Borrar</button>    
    </>
  )
}
