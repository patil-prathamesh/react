import { useState } from "react"

export const Component = ({name, list, styles, info: {namee, location, age}}) => {
    const [changeColor, setChangeColor] = useState(false)
    const handleClick = () => {
        setChangeColor(prev => !prev)
    }
    return (
        <div className={`${styles}`}>
            <h1 className="text-red-400">{name}</h1>
            <ul className="list-disc">
            {
                list.map(item => (
                    <li className="text-pink-300">{item}</li>
                ))
            }
            <button onClick={handleClick}>{namee}</button>
            <button>{location}</button>
            {changeColor && <button>{age}</button>}
            </ul>
        </div>
    )
}

