import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

//importing css file
import './global.css';

//rendering content of the function inside html element
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
