import React from 'react';
import { createRoot } from 'react-dom/client'; // Importer createRoot depuis react-dom/client
import App from './App';

// Utilise createRoot au lieu de ReactDOM.render
createRoot(document.getElementById('root')).render(<App />);