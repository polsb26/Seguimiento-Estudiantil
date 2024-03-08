import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
export async function POST(req: Request) {
    cookies().delete('token')
    return NextResponse.json({})
}