import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
<<<<<<< HEAD
import '@assets/styles/colors.css'
=======
import '@assets/styles/spacing.css'
>>>>>>> 0b2a5c128267067ec464316036bbd75cd0e2066c

const root = createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
