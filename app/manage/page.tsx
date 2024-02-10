"use client";
import Nav from "@/src/components/manage/nav";
import Image from "next/image";
import ESTUDIANTES from "@/app/assets/img/pictures/ESTUDIANTES.png";
import EGRESADOS from "@/app/assets/img/pictures/EGRESADOS.png";
import { useRouter } from "next/navigation";

export default function Index() {
  const router = useRouter();
  return (
    <>
      <Nav />

      <div className=" text-center font-semibold italic text-6xl color-oscure-green  py-10">
        <h1>ESCOGER TIPO DE ESTUDIANTE</h1>
      </div>

      <div className="flex flex-col items-center md:flex-row gap-3 justify-center">
        <div
          onClick={() => router.push("/manage/estudiantes")}
          className="w-80 h-96 flex flex-col justify-center items-center border-4 border-solid rounded-xl bg-white border-color"
        >
          <Image src={ESTUDIANTES} alt="ICONO ESTUDIANTES" width={190} />
          <div className="px-6 py-2">
            <div className="font-bold text-xl mb-2">Estudiantes</div>
          </div>
        </div>

        <div
          onClick={() => router.push("/manage/egresados")}
          className="w-80 h-96 flex flex-col justify-center items-center border-4 border-solid rounded-xl bg-white border-color "
        >
          <Image src={EGRESADOS} alt="ICONO ESTUDIANTES" width={190} />
          <div className="px-6 py-2">
            <div className="font-bold text-xl mb-2">Egresados</div>
          </div>
        </div>
      </div>
    </>
  );
}
