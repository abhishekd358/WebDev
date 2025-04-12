import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MoneyState from './Topics/Context/MoneyState.jsx'

createRoot(document.getElementById('root')).render(

  // we have to change the strictMode to the file name of MoneyState if we want to use the context in the childeren
  <MoneyState>
    <App />
  </MoneyState>,
)
