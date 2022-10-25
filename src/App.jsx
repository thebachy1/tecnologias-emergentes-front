import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import "./App.css";
import Oficios from "./components/Oficios/oficios";
import OficioEsp from "./components/OficioEsp/OficioEsp";
import OficiosMult from "./components/OficiosMult/OficiosMult";
import OficiosAlta from "./components/OficiosAlta/OficiosAlta";
import OficiosCambio from "./components/OficiosCambio/OficiosCambio";
import OficioBaja from "./components/OficioBaja/OficioBaja";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/" className="app__title">
          <h1>Generador de oficios de humanidad</h1>
        </Link>
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
          className="button_group"
        >
          <Link to="/items" className="app__buttons">
            <Button>Todos los oficios</Button>
          </Link>
          <Link to="/item" className="app__buttons">
            <Button>Oficio especifico</Button>
          </Link>
          <Link to="/item/multiple" className="app__buttons">
            <Button>Varios Oficios</Button>
          </Link>
          <Link to="/item/add" className="app__buttons">
            <Button>Dar de alta un usuario</Button>
          </Link>
          <Link to="/item/delete" className="app__buttons">
            <Button>Dar de baja un usuario</Button>
          </Link>
          <Link to="/item/change" className="app__buttons">
            <Button>Cambiar datos de un usuario</Button>
          </Link>
        </ButtonGroup>

        <div>
          <Routes>
            <Route path="/items" element={<Oficios />} />
            <Route path="/item" element={<OficioEsp />} />
            <Route path="/item/multiple" element={<OficiosMult />} />
            <Route path="/item/add" element={<OficiosAlta />} />
            <Route path="/item/change" element={<OficiosCambio />} />
            <Route path="/item/delete" element={<OficioBaja />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
