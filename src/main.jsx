import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import '@assets/styles/font-size.css'
import '@assets/styles/colors.css'
import '@assets/styles/gap-space.css'
import '@assets/styles/padding-size.css'
import '@assets/styles/border-radius-size.css'
import '@assets/styles/line-height-size.css'
import "@assets/styles/reset.css"
import "@assets/styles/font.css"
import "@assets/styles/rtl.css"
import "@assets/styles/loading-animations.css"


const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
