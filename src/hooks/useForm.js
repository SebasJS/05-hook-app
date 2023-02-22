import { useState } from 'react'

export const useForm = (initialValue = {}) => {
  const [formState, setFormState] = useState(initialValue)
  // const { username, email, password } = formState;
  const onInputChange = ({ target }) => {
    const { name, value } = target
    setFormState({
      ...formState,
      [name]: value
    })
  }

  const onInputReset = () => {
    setFormState(initialValue)
    /* setFormState({
            username: '',
            email: '',
            password: '',
                })
        */
  }

  return {
    ...formState,
    formState,
    onInputChange,
    onInputReset
  }
}
