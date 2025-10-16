import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Component } from './Component'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1 className='text-blue-400'>hello</h1>
      <Component info={{namee: 'patil', age: 23, location: 'mumbai'}} name="Prathamesh" styles="bg-blue-100" list={['cricket', 'swimming', 'footbal']} />
      <Component info={{namee: 'patil', age: 23, location: 'mumbai'}} name="Prathamesh" styles="bg-pink-600" list={['cricket', 'swimming', 'footbal']} />
    </div>
  )
}

export default App
