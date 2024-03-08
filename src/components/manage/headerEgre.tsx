import InputHeader from '@/src/components/inputs/inputsearch';
import { TiArrowSortedDown,TiArrowSortedUp } from "react-icons/ti";
import { TbArrowsMoveVertical } from "react-icons/tb";
export default function HeaderEgresados() {
  return (
    <>
      <div className="flex flex-col bg-container rounded-t-2xl h-20">
        <InputHeader/>
        <ul className="flex justify-around font-bold mt-3 ">
          <li>
            <span>N°</span>
          </li>
          <li className='flex'>
            <span>Nombre/DNI</span>
            <div className=''>
            <TbArrowsMoveVertical size={25}/>
            </div>
          </li>
          <li>
            <span>Codigo universitario</span>
          </li>
          <li>
            <span>Fecha de Egreso</span>
          </li>
          <li className='flex'>
            <span>Semestre de Egreso</span>
            <div className=''>
            <TbArrowsMoveVertical size={25}/>
            </div>
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