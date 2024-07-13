import { useState } from "react";
import "../styles/CalculateComponent.css";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import { red } from "@mui/material/colors";

const CalculateComponent = () => {
  const [transacciones, setTransacciones] = useState([]);
  const [amigos, setAmigos] = useState([]);
  const [nombre, setNombre] = useState("");
  const [gasto, setGasto] = useState("");
  const totalGasto = amigos.reduce(
    (total, amigo) => total + Number(amigo.expense),
    0
  );

  const addFriend = () => {
    if (nombre.trim() === "" || gasto.trim() === "") {
      return;
    }
    const newFriend = { name: nombre, expense: gasto };
    setAmigos([...amigos, newFriend]);
    setNombre("");
    setGasto("");
  };

  const resetButton = () => {
    setAmigos([]);
    setNombre("");
    setGasto("");
    setTransacciones([])
  };

  const handleCalcular = () => {
    const totalGasto = amigos.reduce(
      (total, amigo) => total + Number(amigo.expense),
      0
    );
    const gastoPromedio = totalGasto / amigos.length;

    const diferencias = amigos.map((amigo) => ({
      name: amigo.name,
      diferencia: Number(amigo.expense) - gastoPromedio,
    }));

    const deudores = diferencias.filter((d) => d.diferencia < 0);
    const acreedores = diferencias.filter((d) => d.diferencia > 0);

    const transaccionesCalculadas = [];

    deudores.forEach(deudor =>{
      let deuda = Math.abs(deudor.diferencia)
      acreedores.forEach(acreedor =>{
        if(deuda>0){
          const pago = Math.min(deuda, acreedor.diferencia);
          transaccionesCalculadas.push(
            `${deudor.name} debe $${pago.toFixed(2)} a ${acreedor.name}`)
            deuda -= pago
            acreedor.diferencia -= pago;
        }
      })
    })
    setTransacciones(transaccionesCalculadas)
  };

  const deleteFriend = (index) => {
    const updatedAmigos = amigos.filter((_, i) => i !== index);
    setAmigos(updatedAmigos);
  };
  return (
    <>
      <div>
        <h1>Paguen sus deudas o mueran</h1>
        <form>
          <div className="friend">
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
              placeholder="Nombre"
              onKeyDown={(e) => {
                if (!/^[A-Za-z ]/.test(e.key) && e.key !== "Backspace") {
                  e.preventDefault();
                }
              }}
            />
            <input
              type="number"
              value={gasto}
              onChange={(e) => setGasto(e.target.value)}
              placeholder="Gasto"
            />
          </div>
          <div className="d-grid gap-1">
            <button
              onClick={addFriend}
              className="btn btn-primary"
              type="button"
            >
              Agregar Persona
            </button>

            <button
              onClick={() => handleCalcular()}
              className="btn btn-success"
              type="button"
            >
              Calcular
            </button>
            <button
              onClick={resetButton}
              className="btn btn-danger"
              type="button"
            >
              Resetear
            </button>

            <ul>
              {amigos.map((amigo, index) => (
                <li key={index} className="friend-list">
                  {amigo.name} puso: ${amigo.expense}
                  <DeleteForeverRoundedIcon
                    onClick={() => deleteFriend(index)}
                    className="delete-icon"
                    sx={{ color: red[500] }}
                  />
                </li>
              ))}
            </ul>
            <p>Total:${totalGasto}</p>
            <ul>
              {transacciones.map((transaccion, index) => (
                <li key={index}>{transaccion}</li>
              ))}
            </ul>
          </div>
        </form>
      </div>
    </>
  );
};

export default CalculateComponent;
