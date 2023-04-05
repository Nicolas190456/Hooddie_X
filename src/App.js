import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import React from 'react'

import './App.css';

//Importamos los componentes

import { Catalogo } from './Paginas/catalogo';
import { Contactanos } from './Paginas/contactanos';
import { Inicio } from './Paginas/inicio';
import { QuienesSomos } from './Paginas/quienessomos';
import  NavBarExample  from './Navegacion/navbar';


function App() { 
  return (
    <div className="App">
 
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <NavBarExample/> }>
            <Route index element={ <Inicio/> }/>
            <Route path='catalogo' element={ <Catalogo/> }/>
            <Route path='contactanos' element={ <Contactanos/> }/>
            <Route path='quienessomos' element={ <QuienesSomos/> }/>

            <Route path='*' element={ <Navigate replace to="/" />}/>
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
