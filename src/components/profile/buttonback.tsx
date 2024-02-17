'use client'
import { IoArrowBackCircle } from "react-icons/io5"
import { useRouter } from "next/navigation"

export default function ButtonBack() {
    const router = useRouter()
    return (
        <>
            <IoArrowBackCircle size={30} className="absolute " onClick={() => router.push('/manage')} />
        </>
    )
} 