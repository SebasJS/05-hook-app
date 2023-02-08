import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export const LoginPage = () => {

  const { user, setUser } = useContext( UserContext )

  return( 
    <>
      <h1>LoginPage</h1>
      <hr />

      <pre>
        { JSON.stringify(user, null, 3)}
      </pre>

      <button
        onClick={ () => setUser({email: 'user1@abc.com', id: 1, name: 'User 1' })  }
      >
        Set user
      </button>
    </>
  )
}