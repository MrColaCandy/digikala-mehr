import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import '@assets/styles/sizes.css'
import '@assets/styles/colors.css'
import '@assets/styles/spacing.css'
import "@assets/styles/reset.css"
import "@assets/styles/font.css"
import "@assets/styles/rtl.css"
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
     <App/>
  </StrictMode>,
)
