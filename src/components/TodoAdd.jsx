import { useForm } from "../hooks/useForm"

export const TodoAdd = ({ onNewTodo }) => {

  const { description, onInputChange, onInputReset} = useForm({
    description: ''
  })

  const onFormSubmit = ( event ) => {
    event.preventDefault()

    if(description.length <= 1 ) return

    const newTodo = {
      done: false,
      id: new Date().getTime(),
      description,
    }

    onNewTodo(newTodo)
    onInputReset()
  }

  return (
    <>
      <form onSubmit={ onFormSubmit }>
        <input 
          type="text" 
          placeholder="Que TODO agregamos"
          className="form-control"
          name="description"
          value={ description }
          onChange={ onInputChange }
        />
        <button 
          type="submit"
          className="btn btn-outline-primary mt-1"
        >
        Agregar
        </button>            
      </form>
    </>
  )
}
