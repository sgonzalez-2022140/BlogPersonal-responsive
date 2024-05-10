import { useState } from 'react'
import {Navbar} from './Components/Navbar'
import { Content } from './Components/Content'
import { Biografia } from './Pages/Biografia'
import "./App.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='main-content'>
        <Navbar/>
        <Content/>
        <Biografia/>
      </div>
      
    </>
  )
}

export default App


