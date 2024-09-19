import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import NavBar from './components/navBar/NavBar'
import Home from './components/home/Home'
import '../src/assets/css/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NavBar />
    <Home />
  </StrictMode>,
)
