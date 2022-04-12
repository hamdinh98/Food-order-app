import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css';
import App from './App';
import { ContextProvider } from './components/context/ContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode><ContextProvider><App /></ContextProvider></React.StrictMode>);
