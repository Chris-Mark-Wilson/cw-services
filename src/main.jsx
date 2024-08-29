import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { LoadingScreen } from './components/LoadingScreen.jsx'

import { WrittenProvider } from './components/zx81/contexts/WrittenContext.jsx'

import './css_files/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Suspense fallback={<LoadingScreen/>}>
    <BrowserRouter>
    <WrittenProvider>
    <App />
    </WrittenProvider>
    </BrowserRouter>
  </React.Suspense>,
)
