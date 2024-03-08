import DetallesIngreso from '@/src/components/datos/detallesI'
import PerfilAcademico from '@/src/components/datos/perfilA'
import DocumentosAcademico from '@/src/components/datos/documentosA'
import ProfileContainer from "@/src/components/profile/profile";
import axios from 'axios'

async function loadAlum(alumnoid){
    const {data} = await axios.get('http://localhost:3000/api/estudiantes/' + alumnoid)
    return data
  }
  

export default async function Profile({params}) {

    const alumno = await loadAlum(params.id);
    //console.log(alumno)

    return (
        <>
        <div className="flex flex-col  md:flex-row md:overflow-hidden">
            <div className="">
            <ProfileContainer alumno={alumno}/>   
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12 manage-bg-color">
            <div className="flex flex-col bg-white  shadow-xl rounded-lg gap-3">
                <h2 className="text-center font-semibold items-center">Detallles Academicos</h2>
                <hr className="h-px mx-4 border-t-0 bg-gradient-to-r from-transparent via-neutral-500 to-neutral-500 dark:from-neutral-500 dark:to-neutral-500" />
                
                <DetallesIngreso alumno={alumno}/>
                <PerfilAcademico alumno={alumno}/>
                <DocumentosAcademico alumno={alumno}/>
            </div>
            </div>
        </div>
      
            
        </>
    )
}