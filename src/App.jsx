import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './pages/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DatingForm } from './pages/DatingForm'
import { Login } from './pages/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element ={<HomePage/>}></Route>
      <Route path='/register' element ={<DatingForm/>}></Route>
      <Route path='/login' element ={<Login/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
