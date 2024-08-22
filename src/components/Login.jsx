import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

function Login() {

    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }

  return (
    <div>
        <div>
            <h2>LOGIN</h2>
            <input type="text"
            value={username}
            onChange={(e)=>setusername(e.target.value)}
             placeholder='Username' />
             <br/>
            <input type="text" 
            value={password}
            onChange={(e)=>setpassword(e.target.value)}
            placeholder='Password' />
            <br/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    </div>
  )
}

export default Login