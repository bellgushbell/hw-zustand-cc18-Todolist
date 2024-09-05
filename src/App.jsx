import { useState } from 'react'
import Section1 from './components/Section1'
import SessionFirst from './components/SessionFirst'
import './index.css'
import Navbar from './components/Navbar'
import { ToastContainer } from 'react-toastify'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
       <ToastContainer className="flex mx-auto text-center w-1/4 " autoClose='2000' />
      <Navbar />
     
      <SessionFirst/>
    </div>
  )
}

export default App
