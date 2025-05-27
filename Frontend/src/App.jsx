import React, { useState, useEffect } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import TransitionOverlay from './Components/TransitionOverlay'

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const [isTransitioning, setIsTransitioning] = useState(false);
  const [targetPath, setTargetPath] = useState(null);

  const setTransitionPath = (path) => {
    setTargetPath(path);
    setIsTransitioning(true);
  };

  const handleTransitionComplete = () => {
    if (targetPath) {
      navigate(targetPath);
      setTargetPath(null);
      setIsTransitioning(false);
    }
  };

  return (
    <>
      <TransitionOverlay isActive={isTransitioning} onComplete={handleTransitionComplete} />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home setTransitionPath={setTransitionPath} />} />
        <Route path="/contact" element={<Contact setTransitionPath={setTransitionPath} />} />
      </Routes>
    </>
  );
}

export default App;
