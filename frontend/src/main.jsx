import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './pages/App'
import "./index.css"
import { AppProvider } from './components/GlobalVariable'
import { BrowserRouter } from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <AppProvider>
      <App />
    </AppProvider>    
    </BrowserRouter>
  </StrictMode>,
)
