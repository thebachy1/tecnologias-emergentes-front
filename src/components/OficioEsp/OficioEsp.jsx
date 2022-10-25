import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./OficioEsp.css";

export default function OficioEsp() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");

  const onChangeHandler = (event) => {
    setName(event.target.value.toLowerCase());
  };

  const buttonHandler = () => {
    fetch(`http://127.0.0.1:8000/item/${name}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  };

  return (
    <>
      <div className="container">
        <div className="inputContainer">
          <TextField
            id="outlined-basic"
            label="Nombre"
            variant="outlined"
            onChange={onChangeHandler}
            value={name}
            className="input_name"
          />
          <Button variant="contained" color="success" onClick={buttonHandler}>
            Buscar
          </Button>
        </div>
      </div>
      <div className="data_container">{data && <div>{data}</div>}</div>
    </>
  );
}
