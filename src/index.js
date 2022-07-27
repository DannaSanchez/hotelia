import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './index.css';
import Inicio from './pages/Inicio';
import Login from './pages/Login';
import ListadoHabitacion from './pages/ListadoHabitacion';
import ModificarHabitacion from './pages/ModificarHabitacion';
import RegistrarHabitacion from './pages/RegistroHabitacion';
import Habitaciones from './pages/Habitaciones';
import PerfilUsuario from './pages/PerfilUsuario';
import RegistroHuesped from './pages/RegistroHuesped';
import ReservaRealizada from './pages/ReservaRealizada';
import FormHuesped2 from './components/formHuesped/FormHuesped copy';
import Muestra from './components/formHuesped/muesta';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      
      <Route path="/" element={<Inicio />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/listado-habitaciones-admin" element={<ListadoHabitacion />}></Route>
      <Route path="/modificar-habitaciones-admin" element={<ModificarHabitacion />}></Route>
      <Route path="/registrar-habitaciones-admin" element={<RegistrarHabitacion />}></Route>
      <Route path="/" element={<Login />}></Route>
      <Route path='/form/huesped' element={<RegistroHuesped />}></Route>
      <Route path='/intento' element={<Muestra />}></Route>
      <Route path='/editarperfil' element={<PerfilUsuario />}></Route>
      <Route path="/habitaciones" element={<Habitaciones />}></Route>
      <Route path='/reservas' element={<ReservaRealizada />}></Route>
    </Routes>
  </BrowserRouter>
);
