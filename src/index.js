import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { TrackersContextProvider } from './context/TrackersContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <TrackersContextProvider>
          <App />
      </TrackersContextProvider>
  </React.StrictMode>
);
