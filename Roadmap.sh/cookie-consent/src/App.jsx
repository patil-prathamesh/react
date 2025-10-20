import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Popup from './Popup'

function App() {
  const [consent, setConsent] = useState(false)
  const [cookie, setCookie] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let data = localStorage.getItem('cookie-consent')
    if (!data) {
      setCookie(false);
    }
    else {
      setCookie(true);
    }
    setIsLoading(false)
  }, [consent])

  if(isLoading) return <div>Loading......</div>;

  return (
    <>
      {cookie ? <div>Hello</div> : <Popup handleConsent={setConsent} />}
    </>
  )
}

export default App
