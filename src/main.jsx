import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import './landingPage.scss'
import './aboutcontent.scss'
import './productcontent.scss'
import './reccipescontent.scss'
import './kidCornercontent.scss'
import './contactuscontent.scss'
import './Ham.css'
import './font.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
