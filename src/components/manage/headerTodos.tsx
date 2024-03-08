import InputHeader from '@/src/components/inputs/inputsearch'
import axios from 'axios'
import { FiEye } from 'react-icons/fi';
import ButtonVerMas from "@/src/components/profile/buttonVermas";
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from 'react';

async function loadAlumnos(){
  const {data} = await axios.get('http://localhost:3000/api/estudiantes')
  return data
}


 export default  async function HeaderTodos() {

    const alumnos = await loadAlumnos();
    //console.log(alumno);

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
              {alumnos.map((alum: {
                nombre_estado: ReactNode;
                estado_id: ReactNode;
                periodo_ingreso: ReactNode;
                codigo_universitario: ReactNode; alumno_id: Key | null | undefined; 
                Nombre: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; 
                Apellido: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined;
                DNI: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; 
                sexo: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; 
                direccion: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined;
                correo: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined;
                celular: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; 
}) => (
                <tr key={alum.alumno_id} className="bg-white">
                   <td className="px-4 py-2 text-xs text-center ">
                    <div>
                      <span>{alum.Nombre} {alum.Apellido}</span>
                    </div>
                    <div className="text-xs text-center text-gray-500">{alum.DNI}</div>
                  </td>                                   
                  <td className="px-4 py-2 text-xs text-center ">{alum.codigo_universitario}</td>
                  <td className="px-4 py-2 text-xs text-center ">{alum.periodo_ingreso}</td>
                  <td className={`px-4 py-2 text-xs text-center ${alum.nombre_estado === 'Egresado' ? 'text-blue-500' : alum.nombre_estado === 'Activo' ? 'text-green-500' : 'text-red-500'}`}>
                    {alum.nombre_estado}
                  </td>
                  <td className="px-4 py-2 text-xs">{alum.correo}</td>
                  <td className="px-4 py-2 text-xs text-center ">
                    <div>
                      <span>{alum.direccion}</span>
                    </div>
                    <div className="text-xs text-center text-gray-500">{alum.celular}</div>
                  </td>
                  <td>
                  <ButtonVerMas alumnoid ={ alum.alumno_id}/>
                  </td>
                </tr>
              ))}
            </tbody>
          </table> 
        </div>
      </div>
    );
  }