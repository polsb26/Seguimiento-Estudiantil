import InputHeader from "@/src/components/inputs/inputsearch"
export default function HeaderEstudiantes() {
  return (
    <>
      <div className="flex flex-col bg-container rounded-t-2xl h-20 gap-3">
      <InputHeader/>
        <div>
          <ul className="flex justify-around font-bold">
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
      </div>
    </>
  )
}