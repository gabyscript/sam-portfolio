import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='h-svh flex flex-col items-center justify-center bg-green-600'>
        <img src='./android-chrome-512x512.png'/>
        <h1 className="text-3xl font-bold underline align-middle">
          Sitio en construccion
        </h1>
      </div>      
    </>
  )
}

export default App
