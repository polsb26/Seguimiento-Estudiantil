import { FaCloudUploadAlt } from "react-icons/fa";
export default function InputFile() {
    return (
        <>
            <div className="  bg-input w-72 h-96 rounded-md border-dashed border-4 border-bg-container text-base font-bold ">
                <div className="flex flex-col justify-center items-center my-10">
                    <FaCloudUploadAlt size={50} color="rgb(209 213 219)"/>
                    Arrastra y suelta
                </div>
                <div className="flex justify-center items-center">
                    <div className="h-0.5 w-24 bg-gray-400"></div>
                    <div className="h-3 w-3 rounded-full bg-gray-400 mx-2"></div>
                    <div className="h-0.5 w-24 bg-gray-400"></div>
                </div>
                <div className="flex flex-col justify-center items-center my-10 bg-gray-300 mx-10 h-10 rounded-md">
                    Buscar Archivo
                </div>

            </div>

        </>
    )
}