import { useState } from 'react'
import './App.css'
import {Hello, Temp, obj} from './Hello.jsx'

function App() {
  const [count, setCount] = useState(0)
  console.log(obj)

  const addValue = () => {
    setCount((prev) => prev+1)
    setCount(prev => prev+1)
    setCount(prev => prev+1)
  }

  const removeValue = () => {
    if(count > 0)
      setCount(count-1)
  }

  return (
    <div>
      <h1>{count}</h1>
      <h2>{count}</h2>
      <Hello count={count} />
      <Temp count={count} />
      <button onClick={addValue}>Add</button>
      <button onClick={removeValue}>Remove</button>
    </div>
  )
}

export default App
