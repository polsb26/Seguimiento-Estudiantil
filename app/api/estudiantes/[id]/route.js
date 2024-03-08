import { NextResponse } from "next/server";
import { conn } from "@/src/libs/db";

export async function GET(request, { params }) {
    try {
        const result = await conn.query(`
            SELECT 
                datos_alumno.*, 
                detalles_ingreso.*, 
                perfil_academico_actual.*, 
                estado_estudiante.tipo_estado AS nombre_estado, 
                datos_extra_alumno.*
            FROM 
                datos_alumno
            LEFT JOIN 
                detalles_ingreso ON datos_alumno.alumno_id = detalles_ingreso.alumno_id
            LEFT JOIN 
                perfil_academico_actual ON datos_alumno.alumno_id = perfil_academico_actual.alumno_id
            LEFT JOIN 
                estado_estudiante ON perfil_academico_actual.estado_id = estado_estudiante.estado_id
            LEFT JOIN 
                datos_extra_alumno ON datos_alumno.alumno_id = datos_extra_alumno.alumno_id
            WHERE 
                datos_alumno.alumno_id = ?
        `, [params.id]);

        if (result.length === 0) {
            return NextResponse.json({
                message: "Alumno no encontrado"
            }, {
                status: 404,
            });
        }

        return NextResponse.json(result[0]);
    } catch (error) {
        return NextResponse.json({
            message: error.message,
        }, {
            status: 500
        });
    }
}