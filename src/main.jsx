import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import {AuthProvider} from './context/authProvider.jsx'
// import {SocketProvider} from './context/socketContext.jsx'
createRoot(document.getElementById('root')).render(
    <AuthProvider>
    <BrowserRouter>
    {/* <SocketProvider> */}
    <App/>
    {/* </SocketProvider> */}
    </BrowserRouter>
    </AuthProvider>
)
