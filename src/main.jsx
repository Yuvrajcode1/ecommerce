import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { ClerkProvider } from '@clerk/react'
import { Dataprovider } from './componnents/Datacontext.jsx'


const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ClerkProvider>
    <Dataprovider>
  <App />
    </Dataprovider>
  </ClerkProvider>
  </BrowserRouter>
  
)
