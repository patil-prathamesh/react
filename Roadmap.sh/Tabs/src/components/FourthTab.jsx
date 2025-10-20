import {useLoaderData} from 'react-router'

const FourthTab = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>Fourth Tab {data.success}  {data.data}</div>
    )
}

export const fetchData = () => {
    //fetch data
    return {success: true, data: "prthmsh"}
}

export default FourthTab;