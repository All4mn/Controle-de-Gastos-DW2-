import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ListaDesp from './ListaDesp.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ListaDesp/>
    <App />
  </StrictMode>,
)
