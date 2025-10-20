import { useContext } from "react"
import { useState } from "react"
import UserContext from "../context/UserContext"
import useUserContext from "../context/user"

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useUserContext(UserContext)

    const handleSubmit = () => {
        setUser({username, password});
    }
    return (
        <div>
            <h2>Login</h2>
            <input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
            />
            <input 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}  
                placeholder="Password"
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login;