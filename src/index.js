import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';

import Login from './pages/Login';
import ListadoHabitacion from './pages/ListadoHabitacion';
import ModificarHabitacion from './pages/ModificarHabitacion';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}></Route>
      
      <Route path="/listado-habitaciones-admin" element={<ListadoHabitacion/>}></Route>
      <Route path="/modificar-habitaciones-admin" element={<ModificarHabitacion/>}></Route>
    </Routes>
  </BrowserRouter>
);
