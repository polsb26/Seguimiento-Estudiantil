import DetallesIngreso from '@/src/components/datos/detallesI'
import PerfilAcademico from '@/src/components/datos/perfilA'
import DocumentosAcademico from '@/src/components/datos/documentosA'
export default function Profile() {

    return (
        <>
            <div className="flex flex-col bg-white h-full shadow-xl rounded-lg gap-3">
                <h2 className="text-center font-semibold items-center">Detallles Academicos</h2>
                <hr className="h-px mx-4 border-t-0 bg-gradient-to-r from-transparent via-neutral-500 to-neutral-500 dark:from-neutral-500 dark:to-neutral-500" />
                <DetallesIngreso />
                <PerfilAcademico />
                <DocumentosAcademico />
            </div>
        </>
    )
}