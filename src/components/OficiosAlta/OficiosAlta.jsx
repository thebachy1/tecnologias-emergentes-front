import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./OficiosAlta.css";

export default function OficiosAlta() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [apellido1, setApellido1] = useState("");
  const [apellido2, setApellido2] = useState("");
  const [cargo, setCargo] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [calle, setCalle] = useState("");
  const [numCalle, setNumCalle] = useState();
  const [colonia, setColonia] = useState("");
  const [municipio, setMunicipio] = useState("");
  const [estado, setEstado] = useState("");
  const [codigoPostal, setCodigoPostal] = useState();
  const [telefono, setTelefono] = useState();
  const [email, setEmail] = useState("");
  const [yearNacimiento, setYearNacimiento] = useState();
  const [monthNacimiento, setMonthNacimiento] = useState();
  const [dayNacimiento, setDayNacimiento] = useState();
  const [apiUrl, setApiUrl] = useState(`http://127.0.0.1:8000/item/add/`);

  const nameHandler = (event) => {
    setName(event.target.value);
  };

  const apellido1Handler = (event) => {
    setApellido1(event.target.value);
  };

  const apellido2Handler = (event) => {
    setApellido2(event.target.value);
  };

  const cargoHandler = (event) => {
    setCargo(event.target.value);
  };

  const empresaHandler = (event) => {
    setEmpresa(event.target.value);
  };

  const calleHandler = (event) => {
    setCalle(event.target.value);
  };

  const numCalleHandler = (event) => {
    setNumCalle(parseInt(event.target.value));
  };

  const coloniaHandler = (event) => {
    setColonia(event.target.value);
  };

  const municipioHandler = (event) => {
    setMunicipio(event.target.value);
  };

  const estadoHandler = (event) => {
    setEstado(event.target.value);
  };

  const codigoPostalHandler = (event) => {
    setCodigoPostal(parseInt(event.target.value));
  };

  const telefonoHandler = (event) => {
    setTelefono(parseInt(event.target.value));
  };

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const yearNacimientoHandler = (event) => {
    setYearNacimiento(parseInt(event.target.value));
  };

  const monthNacimientoHandler = (event) => {
    setMonthNacimiento(parseInt(event.target.value));
  };

  const dayNacimientoHandler = (event) => {
    setDayNacimiento(parseInt(event.target.value));
  };

  const searchHandler = () => {
    setApiUrl((apiUrl) =>
      apiUrl.concat(
        `?name=${name}&apellido1=${apellido1}&apellido2=${apellido2}&cargo=${cargo}&empresa=${empresa}&calle=${calle}&numCalle=${numCalle}&colonia=${colonia}&municipio=${municipio}&estado=${estado}&codigoPostal=${codigoPostal}&telefono=${telefono}&email=${email}&yearNacimiento=${yearNacimiento}&monthNacimiento=${monthNacimiento}&dayNacimiento=${monthNacimiento}`
      )
    );
  };

  const fetchHandler = () => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setData(data));
  };

  return (
    <div className="wrapper">
      <div className="container">
        <TextField
          className="text_input"
          id="outlined-basic"
          label="Nombre"
          variant="outlined"
          onChange={nameHandler}
          value={name}
        />

        <TextField
          className="text_input"
          id="outlined-basic"
          label="Apellido Paterno"
          variant="outlined"
          onChange={apellido1Handler}
          value={apellido1}
        />

        <TextField
          className="text_input"
          id="outlined-basic"
          label="Apellido Materno"
          variant="outlined"
          onChange={apellido2Handler}
          value={apellido2}
        />

        <TextField
          className="text_input"
          id="outlined-basic"
          label="Cargo"
          variant="outlined"
          onChange={cargoHandler}
          value={cargo}
        />

        <TextField
          className="text_input"
          id="outlined-basic"
          label="Empresa"
          variant="outlined"
          onChange={empresaHandler}
          value={empresa}
        />

        <TextField
          className="text_input"
          id="outlined-basic"
          label="Calle"
          variant="outlined"
          onChange={calleHandler}
          value={calle}
        />

        <TextField
          className="text_input"
          id="outlined-basic"
          label="Numero de Calle"
          variant="outlined"
          onChange={numCalleHandler}
          value={numCalle}
        />

        <TextField
          className="text_input"
          id="outlined-basic"
          label="Colonia"
          variant="outlined"
          onChange={coloniaHandler}
          value={colonia}
        />

        <TextField
          className="text_input"
          id="outlined-basic"
          label="Municipio"
          variant="outlined"
          onChange={municipioHandler}
          value={municipio}
        />

        <TextField
          className="text_input"
          id="outlined-basic"
          label="Estado"
          variant="outlined"
          onChange={estadoHandler}
          value={estado}
        />

        <TextField
          className="text_input"
          id="outlined-basic"
          label="Codigo Postal"
          variant="outlined"
          onChange={codigoPostalHandler}
          value={codigoPostal}
        />

        <TextField
          className="text_input"
          id="outlined-basic"
          label="Telefono"
          variant="outlined"
          onChange={telefonoHandler}
          value={telefono}
        />

        <TextField
          className="text_input"
          id="outlined-basic"
          label="Email"
          variant="outlined"
          onChange={emailHandler}
          value={email}
        />

        <TextField
          className="text_input"
          id="outlined-basic"
          label="Año de nacimiento"
          variant="outlined"
          onChange={yearNacimientoHandler}
          value={yearNacimiento}
        />

        <TextField
          className="text_input"
          id="outlined-basic"
          label="Mes de nacimiento"
          variant="outlined"
          onChange={monthNacimientoHandler}
          value={monthNacimiento}
        />

        <TextField
          className="text_input"
          id="outlined-basic"
          label="Dia de nacimiento"
          variant="outlined"
          onChange={dayNacimientoHandler}
          value={dayNacimiento}
        />
      </div>

      <div className="container_buttons">
        <Button
          variant="contained"
          color="success"
          onClick={searchHandler}
          className="input_send"
        >
          Validar datos
        </Button>

        <Button
          variant="contained"
          color="success"
          onClick={fetchHandler}
          className="input_send"
        >
          Agregar Usuario
        </Button>
      </div>

      <div className="data_container">{data && <div>{data}</div>}</div>
    </div>
  );
}
