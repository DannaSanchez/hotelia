import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Habitaciones from './pages/Habitaciones';
import Login from './pages/Login';
import PerfilUsuario from './pages/PerfilUsuario';
import RegistroHuesped from './pages/RegistroHuesped';
import ReservaRealizada from './pages/ReservaRealizada';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path='/Form/huesped' element={<RegistroHuesped/>}></Route>
      <Route path='/editarperfil' element={<PerfilUsuario/>}></Route>
      <Route path="/habitaciones" element={<Habitaciones/>}></Route>
      <Route path='/reservas' element={<ReservaRealizada/>}></Route>
    </Routes>
  </BrowserRouter>
);
