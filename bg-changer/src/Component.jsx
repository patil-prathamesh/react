import { useState } from "react"

const Component = () => {
    const [styles, setStyles] = useState("bg-blue-200")
    return (
        <div className={`${styles} h-screen w-screen flex justify-center items-center gap-4`}>
            <button onClick={(e) => setStyles("bg-blue-200")} className="bg-blue-500 px-4 py-2">Blue</button>
            <button onClick={(e) => setStyles("bg-red-200")} className="bg-red-500 px-4 py-2">Red</button>
            <button onClick={(e) => setStyles("bg-green-200")} className="bg-green-500 px-4 py-2">Green</button>
        </div>
    )
}

export default Component