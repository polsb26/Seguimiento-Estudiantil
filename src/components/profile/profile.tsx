
import { PiUserCircleFill } from "react-icons/pi"
import ButtonBack from "./buttonback"

export default function ProfileContainer() {
    return (
        <>
            <div className="bg-white h-full md:px-2 rounded-xl shadow-lg mx-4 " >

                <div className="text-center ">
                    <ButtonBack />
                    <div className="w-80">
                        <PiUserCircleFill size={150} color="rgba(231, 234, 241, 1)" className="mx-20 " />
                    </div>
                    <div className="">
                        Nombre del usuario
                    </div>
                    <div className="font-bold text-sm my-4">
                        ESTADO ACTUAL:
                    </div>
                    <hr className="h-px mx-4 border-t-0 bg-gradient-to-r from-transparent via-neutral-500 to-neutral-500 dark:from-neutral-500 dark:to-neutral-500" />
                </div>
                <div className="manage-bg-color mx-1  font-bold my-2 px-4">
                    Datos Personales
                </div>


                <div className="flex ">
                    <table className="table-fixed mx-2 ">
                        <thead>
                            <tr></tr>
                        </thead>
                        <tbody className="">
                            <tr>
                                <td className="font-bold">DNI</td>
                                <td className="">:</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td className="w-1/2 font-bold">Estado Civil</td>
                                <td className="">:</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td className="w-1/2 font-bold">Sexo</td>
                                <td className="">:</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td className="w-1/2 font-bold">Edad</td>
                                <td className="">:</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td className="w-1/2 font-bold">Fecha de Nacimiento</td>
                                <td className="">:</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td className="w-1/2 font-bold">Correo</td>
                                <td className="">:</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td className="w-1/2 font-bold">Celular</td>
                                <td className="">:</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td className="w-1/2 font-bold">Dirección</td>
                                <td className="">:</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td className="w-1/2 font-bold">Dep/Prov/Dist</td>
                                <td className="">:</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </>
    )
}