import { NextApiHandler } from "next";
import { NextResponse } from "next/server";
import { sign } from "jsonwebtoken"
import bcrypt from "bcrypt"
import { PrismaClient } from "@prisma/client";

import { serialize } from "cookie"
/* export async function GET(req: Request) {
  const instance = new PrismaClient()
  const users = await instance.usuarios.create({
    data: {
      contrasena: await bcrypt.hash("12345", 10),
      usuario: "july apestosa",
    }
  })
  return NextResponse.json(users)
} */

export async function POST(req: Request) {
  const instance = new PrismaClient()
  const { usuario, password } = await req.json()
  const user = await instance.usuarios.findFirst({ where: { usuario } })
  if (!user) {
    return NextResponse.json({
      error: "Credenciales invalidas"
    }, {
      status: 401
    })
  }
  const isValid = await bcrypt.compare(password, user.contrasena)
  if (!isValid) {
    return NextResponse.json({
      error: "Contraseña invalida"
    }, {
      status: 401
    })
  }
  const token = sign({
    usuario: user.usuario
  }, "secrete")
  const serialized = serialize("token", token, {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 30,
    sameSite: "strict",
    path: "/",
  })
  return NextResponse.json({
    token
  }, {
    headers: {
      "Set-Cookie": serialized
    }
  })
}

