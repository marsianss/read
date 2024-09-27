import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Button from './Button.jsx'; 
import React from 'react';
import ReactDOM from 'react-dom';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Button />
  </StrictMode>,
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);