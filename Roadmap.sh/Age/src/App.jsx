import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [date, setDate] = useState("")
  const [year, setYears] = useState(null)

  const handleDateChange = (e) => {
    console.log(e)
    setDate(e.target.value)
  }

  const calculateAge = () => {
    let today = new Date()
    console.log(today, " **")
    let arr = date.split("-")
    let year = Number(arr[0])
    setYears(2025-year)
  }

  return (
    <>
      <div className='flex items-center justify-center mt-[200px]'>
        <div className='w-[350px]'>
          <h2 className='text-center text-[30px]'>Age Calculator</h2>
          <p className='font-bold pt-[20px]'>Enter your birth date:</p>
          <input type="date" name="" id="" onChange={handleDateChange}/>
          <button className='block w-full bg-gray-300 p-2 rounded-lg' onClick={calculateAge}>Calculate</button>
          {year && <div>Your are {year} years old</div>}
        </div>
      </div>
    </>
  )
}

export default App
