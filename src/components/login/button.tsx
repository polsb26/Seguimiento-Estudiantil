'use client'
import { useRouter } from "next/navigation"

export default function ButtonLogin(){
    const router = useRouter()
    return(
        <button onClick={() => router.push('/manage')} className="text-xl text-center color-white bg-button-login rounded-xl">INICIAR</button>
    )
}  