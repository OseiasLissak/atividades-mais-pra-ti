import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/main.css' // <--- Linha adicionada

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)