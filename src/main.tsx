import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home1 from './pages/Home1'
import Home2 from './pages/Home2'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home2 />
  </StrictMode>,
)
