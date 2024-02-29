import InputHeader from '@/src/components/inputs/inputsearch'
export default function HeaderEgresados() {
  return (
    <>
      <div className="flex flex-col bg-container rounded-t-2xl h-20">
        <InputHeader/>
        <ul className="flex justify-around font-bold mt-3 ">
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
            <span>Fecha de Egreso</span>
          </li>
          <li>
            <span>Semestre de Egreso</span>
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