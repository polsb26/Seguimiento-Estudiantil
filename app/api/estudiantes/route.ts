import { NextResponse } from "next/server";
import { prisma } from "@/src/libs/prisma";

export async function GET() {
    try {
        const alumnos = await prisma.datosAlumno.findMany()
        return NextResponse.json(alumnos)
    }
    catch (error) {
        if (error instanceof Error) {
            return NextResponse.json(
                {
                    message: error.message,
                },
                {
                    status: 500,
                }
            )
        }
    }

}

export async function POST(request: Request) {
    //const body = await request.json()
    //console.log(body)
    try {
        const alumnos = await prisma.datosAlumno.findMany()
        return NextResponse.json(alumnos)
    }
    catch (error) {
        if (error instanceof Error) {
            return NextResponse.json(
                {
                    message: error.message,
                },
                {
                    status: 500,
                }
            )
        }
    }
    const { DNI, estado_Civil, sexo, edad, fecha_Nacimiento, correo, celular, direccion, departamento, provincia, distrito } = await request.json();
    const newAlumno = await prisma.datosAlumno.create({
        data: {
            DNI,
            estado_Civil,
            sexo,
            edad,
            fecha_Nacimiento,
            correo,
            celular,
            direccion,
            departamento,
            provincia,
            distrito,
        },
    });
    return NextResponse.json(newAlumno);
    //return NextResponse.json({
    //    message: 'creando alumnos'
    //})
}