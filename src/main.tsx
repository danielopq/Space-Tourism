import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import NavBar from './components/navBar/navBar'
import '../src/assets/css/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NavBar/>
  </StrictMode>,
)
