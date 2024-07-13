import '../styles/CalculateComponent.css'
const CalculateComponent = () => {
  return (
    <>
      <div>
        <h1>Paguen sus deudas o mueran</h1>
        <form>
          <div className="friend">
            <input type="text" name="" id="" placeholder="Nombre" />
            <input type="text" name="" id="" placeholder="Gasto" />
          </div>
          <div className="d-grid gap-1">
            <button className="btn btn-primary" type="button">
              Agregar Persona
            </button>
            <button className="btn btn-success" type="button">
              Calcular
            </button>
            <button className="btn btn-danger" type="button">
              Resetear
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default CalculateComponent