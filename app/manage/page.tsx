'use client'
import Nav from "@/src/components/login/nav"
import Image from "next/image"
import ESTUDIANTES from "@/app/assets/img/pictures/ESTUDIANTES.png"
import EGRESADOS from "@/app/assets/img/pictures/EGRESADOS.png"
import { useRouter } from "next/navigation"

export default function Index() {
    const router = useRouter()
    return (
        <>
                <Nav />

                <div className=" text-center font-semibold italic text-6xl text-color-oscure-green  py-10">
                    <h1>ESCOGER TIPO DE ESTUDIANTE</h1>
                </div>

                <div className="flex justify-between  px-72">
                    <div onClick={() => router.push('/manage/estudiantes')} className="card-size">
                        <Image
                            src={ESTUDIANTES}
                            alt="ICONO ESTUDIANTES"
                            width={190}
                        />
                        <div className="px-6 py-2">
                            <div className="font-bold text-xl mb-2">Estudiantes</div>
                        </div>
                    </div>

                    <div onClick={() => router.push('/manage/egresados')} className="card-size">
                        <Image
                            src={EGRESADOS}
                            alt="ICONO ESTUDIANTES"
                            width={190}
                        />
                        <div className="px-6 py-2">
                            <div className="font-bold text-xl mb-2">Egresados</div>
                        </div>
                    </div>
                </div>
        </>
    )
}