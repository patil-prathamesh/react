import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useLanguages from './hooks/useLanguages'
import useGithubRepos from './hooks/useGithubRepos'
import { useEffect } from 'react'
import GithubData from './components/GithubData'

function App() {
  const [count, setCount] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState('')
  const languages = useLanguages();
  const data = useGithubRepos(selectedLanguage, setIsLoading)
  console.log(" -->  ",data, " -----")
  console.log(typeof languages)
  return (
    <>
      <div className='p-2 w-[300px] bg--50'>
        <div className='flex justify-center items-center'>
          <div className='w-[30px] h-[30px] bg-black rounded-lg mr-2'></div>
          <p>Github Repository Finder</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <select 
            className='w-[260px] border-2 py-2 px-1 rounded-lg mt-3'
            value={selectedLanguage}
            onChange={(e) => {
              console.log(e.target.value)
              setSelectedLanguage(e.target.value)
            }}
          >
            <option value="">Select a Language</option>
            {
              languages.map(language => (
                <option key={language.value} value={language.value}>{language.title}</option>
              ))
            } 
          </select>
        </div>
        {Object.keys(data).length === 0 ? <div className='w-full h-[100px] bg-gray-100 mt-3 rounded-md flex justify-center items-center font-semi'>
          {!isLoading ? <p>Please select a language...</p> : <p>Loading, please wait...</p>}
        </div> : <GithubData data={data}/>}
      </div>
    </>
  )
}

export default App
