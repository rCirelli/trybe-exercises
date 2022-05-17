import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import Exercise1 from './Exercise1';
import Exercise2 from './Exercise2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Exercise1 /> */}
    <Exercise2 />
  </React.StrictMode>
);
