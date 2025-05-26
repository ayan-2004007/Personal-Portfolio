import React,{useState,useEffect} from 'react'
import { Route, Routes,useLocation, useNavigate } from 'react-router-dom'
import Home from './Pages/Home'
import Contact from "./Pages/Contact"
import TransitionOverlay from "./Components/TransitionOverlay"
function App() {
	const location=useLocation()
	const navigate=useNavigate()
	const [transitionPath,setTransitionPath]=useState(null)
	useEffect(()=>{
		if(transitionPath){
			const timeout=setTimeout(()=>{
				navigate(transitionPath)
				setTransitionPath=null
			},1200)
			return ()=>clearTimeout(timeout)
		}
	},[transitionPath])
	
	return (
		<>
			{transitionPath && <TransitionOverlay/>}
			<Routes location={location}>
				<Route path="/" element={<Home setTransitionPath={setTransitionPath}/>}/>
				<Route path="/contact" element={<Contact setTransitionPath={setTransitionPath}/>}/>
			</Routes>
		</>
	)
}

export default App
