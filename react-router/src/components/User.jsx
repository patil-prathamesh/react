import { useParams } from "react-router"

const User = () => {
    console.log("hello")
    const { userid } = useParams()
    return (
        <div>
            <h1>Prathamesh Patil</h1>
            {userid ? <h1>User {userid}</h1> : <h1>Unknown user</h1>}
        </div>
    )
}

export default User