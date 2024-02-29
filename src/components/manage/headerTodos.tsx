import InputHeader from '@/src/components/inputs/inputsearch'
export default function HeaderTodos() {
    return (
      <>
        <div className="flex flex-col bg-container rounded-t-2xl h-20">
            <InputHeader/>
          <div>
            <ul className="flex justify-around font-bold mt-3">
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
                <span>Periodo</span>
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