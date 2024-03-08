import InputHeader from '@/src/components/inputs/inputsearch'
import axios from 'axios'
import { FiEye } from 'react-icons/fi';
import ButtonVerMas from "@/src/components/profile/buttonVermas";
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from 'react';


 export default  async function HeaderTodos() {

    return (
      <div className="flex flex-col bg-container rounded-t-2xl">
        <InputHeader/>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-4 py-2 text-sm">Nombre/DNI</th>
                <th className="px-4 py-2 text-sm">Cod.Univercitario</th>
                <th className="px-4 py-2 text-sm">Semestre de Ingreso</th>
                <th className="px-4 py-2 text-sm">Estado</th>
                <th className="px-4 py-2 text-sm">Correo</th>
                <th className="px-4 py-2 text-sm">Dirección/Celular</th>
                <th className="px-4 py-2 text-sm">Ver</th> 
              </tr>
            </thead>
            <tbody>
              
            </tbody>
          </table> 
        </div>
      </div>
    );
  }