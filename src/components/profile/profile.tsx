
import { PiUserCircleFill } from "react-icons/pi"
import ButtonBack from "./buttonback"

export default function ProfileContainer() {
    return (
        <>
            <div className="bg-white h-full md:px-2 rounded-xl shadow-lg mx-4" >

                <div className="text-center">
                    <ButtonBack />
                    <div className="w-80">
                        <PiUserCircleFill size={150} color="rgba(231, 234, 241, 1)" className="mx-20 " />
                    </div>
                    <div>
                        Nombre del usuario
                    </div>
                    <div>
                        ESTADO ACTUAL:
                    </div>
                    <hr className="h-px mx-4 border-t-0 bg-gradient-to-r from-transparent via-neutral-500 to-neutral-500 dark:from-neutral-500 dark:to-neutral-500" />
                </div>
                <div className="manage-bg-color mx-4 my-1">
                    Datos Personales:

                </div>
                <div className="flex">
                    <div className="">
                        <ul>
                            <li>hola</li>
                            <li>hola</li>
                            <li>hola</li>
                            <li>hola</li>
                        </ul>
                       
                    </div>
                </div>
            </div>
        </>
    )
}