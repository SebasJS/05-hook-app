import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {
  
  const [formState, setFormState] = useState({
    username: 'Goku',
    email: 'goku@gmail.com'
  })

  const { username, email } = formState;

  const onInputChange = ({ target } ) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [ name ] : value
    }) 
  }

  useEffect( () => {
    //console.log('useEffect se llamo');
  }, [])

  useEffect(() => {
    //console.log('formState cambio');
  },[formState])

  useEffect(() => {
    //console.log('email cambio');
  }, [email])
  
  
  return (
    <>
        <h1> FORMULARIO SIMPLE </h1>
        <hr/>

        <input
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"
            onChange={ onInputChange }
        />
        { (username === 'Joan1') && <Message/>}
        <input
            type="email"
            className="form-control mt-2"
            placeholder="example@google.com"
            name="email"
            onChange={ onInputChange }
        />    

    </>
  )
}
