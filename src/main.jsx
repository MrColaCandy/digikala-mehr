import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import '@assets/styles/spacing.css'

const root = createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
