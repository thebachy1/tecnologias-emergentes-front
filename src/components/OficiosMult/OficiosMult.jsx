import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./OficiosMult.css";

export default function OficioMult() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [names, setNames] = useState([]);
  const [apiUrl, setApiUrl] = useState(`http://127.0.0.1:8000/item/multiple/`);

  const onChangeHandler = (event) => {
    setName(event.target.value.toLowerCase());
  };

  const addNameHandler = () => {
    setNames((names) => names.concat(name));
  };

  const searchHandler = () => {
    for (let i = 0; i < names.length; i++) {
      if (i == 0) {
        setApiUrl((apiUrl) => apiUrl.concat(`?names=${names[i]}`));
      }
      if (i != 0) {
        setApiUrl((apiUrl) => apiUrl.concat(`&names=${names[i]}`));
      }
    }
  };

  useEffect(() => {
    console.log(apiUrl);
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [searchHandler]);

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

          <Button variant="outlined" onClick={addNameHandler}>
            Agregar nombre
          </Button>
          <Button variant="contained" color="success" onClick={searchHandler}>
            Buscar
          </Button>
        </div>
      </div>
      <div className="data_container">
        {data && data.map((oficio) => <p>{oficio}</p>)}
      </div>
    </>
  );
}
