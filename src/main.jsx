import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { LoadingScreen } from './components/LoadingScreen.jsx'
import { CountProvider } from './context/CountContext.jsx'
import { CountContext } from './context/CountContext.jsx'
import { useContext } from 'react'
import { WrittenProvider } from './components/zx81/contexts/WrittenContext.jsx'
import { getCounter } from '../api/firebase_api';
import './css_files/index.css'
import { useEffect } from 'react'
import { incCounter } from '../api/firebase_api'


const incrementVisitorCounter = async () => {
  try {
    const response = await incCounter()
    return response
 } catch (error) {
    console.error('Error incrementing visitor counter:', error);
  }
};

const VisitorCounter = () => {
  const { setCounter } = useContext(CountContext);
  useEffect(() => {
 
    if (!sessionStorage.getItem('visitorCounterIncremented')) {

    incrementVisitorCounter()
    .then((result) => {
     setCounter(result);
     sessionStorage.setItem('visitorCounterIncremented', true);
    })
  } else {
    getCounter().then((result) => {
      setCounter(result);
  });
  }
}, []);
  return null;
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Suspense fallback={<LoadingScreen />}>
        <CountProvider>
    <BrowserRouter>
      <WrittenProvider>
          <VisitorCounter />
          <App />
      </WrittenProvider>
    </BrowserRouter>
        </CountProvider>
  </React.Suspense>,
)
