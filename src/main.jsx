import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HashRouter} from 'react-router-dom'
import { ClerkProvider } from '@clerk/react'
import { Dataprovider } from './componnents/Datacontext.jsx'
import { Cartprovider } from './componnents/Cartcontext.jsx'


const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
createRoot(document.getElementById('root')).render(
  <HashRouter>
  <ClerkProvider>
    <Cartprovider>
    <Dataprovider>
  <App />
    </Dataprovider>
    </Cartprovider>
  </ClerkProvider>
  </HashRouter>
  
)
