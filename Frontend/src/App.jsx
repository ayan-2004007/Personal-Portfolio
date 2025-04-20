import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Contact from "./Pages/Contact"
function App() {

  return (
    <>
			<Routes>
			<Route path='/' element={<Home />} />
			<Route path="/contact" element ={<Contact/>}/>
			</Routes>
		</>
  )
}

export default App
