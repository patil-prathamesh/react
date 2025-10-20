import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const keys = Array.from({ length: 26 }, (_, i) => `key${String.fromCharCode(65 + i)}`);

  const handleType = (e) => {
    console.log(e)
    // setCount(prev => prev+1)
  }

  const handleKeyDown = (e) => {
    console.log(e)
    if (count >= 10 && e.key !== 'Backspace') {
      e.preventDefault();
      return;
    }
    if (e.code == "Space") {
      setCount(prev => prev + 1)
    }
    // Check if pressed key exists in array
    const found = keys.find(key => key === `key${e.key.toUpperCase()}`);
    if (found) {
      console.log('Letter key pressed:', found);
      setCount(prev => prev + 1)
    }

    if (e.key === 'Backspace') {
      setCount(prev => prev > 0 ? prev - 1 : 0);
    }
  }

  return (
    <>
      <div className='relative bg-red-100 w-fit'>
        <textarea className={`w-[400px] h-[100px] border-2 rounded-[25px] mt-5 mb-0 pt-2 pl-3 pb-0 ${count >= 10 ? "text-red-500" : "text-black"} outline-none`} placeholder='Start typing.....' onChange={handleType} onKeyDown={handleKeyDown} />
        <div className={`absolute bottom-4 left-90 text-[13px] ${count >= 10 ? "text-red-500 border-red-500" : "text-black border-black"}`}><p>{count}/10</p></div>
      </div>
    </>
  )
}

export default App
