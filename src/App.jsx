import { useState } from 'react'
import { Biografia } from './Pages/Biografia'
import "./App.css"
import { useRoutes } from "react-router-dom"
import { routes } from "./routes"

function App() {
  const routesElements = useRoutes(routes)

  return (
    <>
      <div className='main-content'>
        {routesElements}
      </div>
      
    </>
  )
}

export default App


