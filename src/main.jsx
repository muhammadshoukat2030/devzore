
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import { HelmetProvider } from 'react-helmet-async'

// import './index.css' 
// import './App.css'   

// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <HelmetProvider>
//       <App />
//     </HelmetProvider>
//   </StrictMode>
// )
// main.jsx — check karo yeh exactly aisa ho
import { HelmetProvider } from 'react-helmet-async';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);