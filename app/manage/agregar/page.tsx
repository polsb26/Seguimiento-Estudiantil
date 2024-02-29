import InputFile from "@/src/components/inputs/inputfile"
export default function AgregarAlumnos() {
    return (
        <>
            <div className="flex flex-col bg-white h-full shadow-xl rounded-3xl justify-center items-center">
                <div>
                    <InputFile />
                </div>
            </div>
        </>
    )
}