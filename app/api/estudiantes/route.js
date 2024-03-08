import {NextResponse } from "next/server";
import {conn} from "@/src/libs/db";

export async function GET(){
    try {
        const result = await conn.query(`
            SELECT datos_alumno.*, detalles_ingreso.*, perfil_academico_actual.*, estado_estudiante.tipo_estado AS nombre_estado, datos_extra_alumno.*
            FROM datos_alumno
            JOIN detalles_ingreso ON datos_alumno.alumno_id = detalles_ingreso.alumno_id
            JOIN perfil_academico_actual ON datos_alumno.alumno_id = perfil_academico_actual.alumno_id
            JOIN estado_estudiante ON perfil_academico_actual.estado_id = estado_estudiante.estado_id
            JOIN datos_extra_alumno ON datos_alumno.alumno_id = datos_extra_alumno.alumno_id;
        `);
        return NextResponse.json(result)
    } catch (error) {
        return NextResponse.json(
        {
            message: error.message,
        },{
            status: 500,
        })
    }
}