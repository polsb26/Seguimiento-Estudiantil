export default function HeaderEstudiantes() {
  return (
    <>
      <div className=" bg-container rounded-t h-10 p-2">
        <div>
        </div>
        <ul className="flex justify-around">
          <li>
            <span>N°</span>
          </li>
          <li>
            <span>Nombre/DNI</span>
          </li>
          <li>
            <span>Codigo universitario</span>
          </li>
          <li>
            <span>Semestre actual</span>
          </li>
          <li>
            <span>Estado</span>
          </li>
          <li>
            <span>Correo</span>
          </li>
          <li>
            <span>Direccion/Celular</span>
          </li>
        </ul>
      </div>
    </>
  )
}