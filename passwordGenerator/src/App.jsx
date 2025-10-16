import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('')

  //useRef hook

  const passwordRef = useRef(null)

  // useCallback caches function

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "qwertyuiopasdfghjklzxcvbnmMNBVCXZLKJHGFDSAQWERTYUIOP"
    if (numberAllowed) str += "123456789"
    if (charAllowed) str += "{}[]\|;:'\"/?.>,<!@#$%^&*()_+-=`~'"

    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * str.length)
      let char = str.charAt(index)
      pass += char
    }

    setPassword(pass)
  }, [length, numberAllowed, charAllowed])

  useEffect(() => {
    passwordGenerator()
  },[length, numberAllowed, charAllowed])

  const copyPassword = () => {
    console.log(passwordRef?.current)
    passwordRef?.current.select()
    window.navigator.clipboard.writeText(password)
  }

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
            type="text" 
            value={password} 
            className='outline-non w-full py-1 px-3'
            placeholder='password'
            readOnly
            ref={passwordRef}
          />
          <button
          onClick={copyPassword}
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          >Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
            min={8}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => setLength(e.target.value)}
             />
            <label htmlFor="">Length: {length}</label>
          </div>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" 
          defaultChecked={numberAllowed}
          id='numberInput'
          onChange={(e) => setNumberAllowed(prev => !prev)}
           />
           <label htmlFor="">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" 
          defaultChecked={charAllowed}
          id='characterInput'
          onChange={(e) => setCharAllowed(prev => !prev)}
           />
           <label htmlFor="">Characters</label>
        </div>
      </div>
    </>
  )
}

export default App
