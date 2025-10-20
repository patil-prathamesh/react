import { useParams } from 'react-router'
const FirstTab = () => {
    const { id } = useParams()
    return (
        <div>First Tab {id && id}</div>
    )
}

export default FirstTab;