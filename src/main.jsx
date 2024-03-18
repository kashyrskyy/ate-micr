import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Assuming you have global styles you want to apply
import App from './App.jsx'

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);