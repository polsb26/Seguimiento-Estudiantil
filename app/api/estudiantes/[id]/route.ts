import { NextResponse } from "next/server"

export function GET(){
    return NextResponse.json({
        message: 'getting alumno'
    })
}

export function DELETE(){
    return NextResponse.json({
        message:'deleting alumno'
    })
}

export function PUT(){
    return NextResponse.json({
        message:'updating alumno'
    })
}