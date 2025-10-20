import { useContext } from "react"
import UserContext from "../context/UserContext"
import useUserContext from "../context/user"

const Profile = () => {
    const {user} = useUserContext(UserContext)
    if(!user) {
        return <h1>Not logged in</h1>
    }
    return (
        <div>Profile: {user.username}</div>
    )
}

export default Profile