import React, { useState, useEffect } from "react";
import "./Oficios.css";

export default function Oficios() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("http://127.0.0.1:8000/items")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="oficios__container">
      {data && data?.map((oficio) => <p>{oficio}</p>)}
    </div>
  );
}
