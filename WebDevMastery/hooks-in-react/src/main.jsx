import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MoneyState from './Hooks/useContext/MoneyState.jsx'



// 3rd stage : we have to bind into the MoneyState
createRoot(document.getElementById('root')).render(
  <MoneyState>
    <App />
  </MoneyState>,
)
