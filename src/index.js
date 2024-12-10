import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Możesz zaimportować swój CSS, jeśli go masz

// Znajdź element o id "root" w index.html
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderuj główny komponent App
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
