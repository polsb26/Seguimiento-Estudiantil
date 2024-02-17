
import { PiUserCircleFill } from "react-icons/pi"
import ButtonBack from "./buttonback"

export default function ProfileContainer() {
    return (
        <>
            <div className="bg-white h-full rounded-xl shadow-lg " >
                <ButtonBack/>
                <div className="text-center">
                    <div className="flex flex-col mx-20 ">
                        <PiUserCircleFill size={150} color="rgba(231, 234, 241, 1)"/>
                        Nombre del usuario
                    </div>
                    ESTADO ACTUAL:
                    <hr className="h-px mx-4 border-t-0 bg-gradient-to-r from-transparent via-neutral-500 to-neutral-500 dark:from-neutral-500 dark:to-neutral-500" />
                </div>
                <div className="manage-bg-color mx-4 my-1">
                    Datos Personales:
                </div>
                <div>

                </div>
            </div>
        </>
    )
}