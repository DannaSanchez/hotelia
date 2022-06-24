import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Router, Routes } from 'react-router-dom';
import './index.css';
import Login from './pages/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Router path="/" element={<Login/>}></Router>
    </Routes>
  </BrowserRouter>
);
