import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BookingProvider } from './context/BookingContext';
import './styles/main.css';

ReactDOM.render(
  <React.StrictMode>
    <BookingProvider>
      <App />
    </BookingProvider>
  </React.StrictMode>,
  document.getElementById('root')
);