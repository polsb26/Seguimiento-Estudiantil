'use client'
import { useRouter } from "next/navigation"
import { FiEye } from 'react-icons/fi';


export default function ButtonVerMas({ alumnoid }) {
    const router = useRouter()
    const handleClick = () => {
        // Navegar a la página del perfil del alumno con el ID pasado como parámetro
        router.push(`/profile/estudiantes/${alumnoid}`)
        //console.log(alumnoid)
    }
    return (
        <button onClick={handleClick} className="text-xl px-4 text-center color-white bg-button-login rounded-xl" style={{ backgroundColor: 'white' }}>
            <FiEye color="blue" />
        </button>
    )
}