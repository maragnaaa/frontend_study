import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HeaderBar from './components/layout/header/HeaderBar'
import './styles/global.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HeaderBar />
  </StrictMode>,
)
