import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import SpaceTourismApp from './SpaceTourismApp'
import '../src/assets/css/index.css'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <SpaceTourismApp />
    </BrowserRouter>
  </StrictMode>,
)
