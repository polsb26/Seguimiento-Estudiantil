import Image from "next/image";
import loginImg from "@/app/assets/img/bg/login_img.webp";
import style from "@/src/styles/style.module.css";
import logoU from "@/app/assets/img/logos/logoU.png";
import ButtonLogin from "@/src/components/login/button";
import { CiUser } from "react-icons/ci";
import { RiLockPasswordLine } from "react-icons/ri";

export default function Login() {
  return (
    <>
      <div className={style.container_login}>
        <div
          style={{
            backgroundImage: `url(${loginImg.src})`,
            backgroundRepeat: "no repeat",
            backgroundSize: "cover",
          }}
          className={style.container_login_bg_img}
        ></div>
        <div className={style.container_login_bg_color} />
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-7 justify-center items-center">
        <Image
          src={logoU}
          alt="logo de la universidad"
          className="w-[12rem] md:w-[18rem]"
        />
        <div id="login">
          <div className="flex flex-col gap-4 rounded-[0.5rem] bg-white px-10 pb-8 pt-8 shadow-xl md:h-[23rem] md:w-[21rem]">
            <h3 className="color-green my-2 text-center text-5xl font-bold md:text-5xl">
              SISE
            </h3>
            <p className="text-center font-thin italic text-gray-500">
              Sistema de seguimiento al estudiante
            </p>
            <div className="color-green flex flex-col gap-5">
              <div className="flex border-b-2 border-b-lime-700 py-2 pl-2">
                <CiUser size={24} />
                <input
                  className="border-none pl-3 font-bold outline-none"
                  type="user"
                  placeholder="Usuario"
                  name="usuario"
                  id="user"
                />
              </div>
              <div className="flex border-b-2 border-b-lime-700 py-2 pl-2">
                <RiLockPasswordLine size={24} />
                <input
                  className="border-none pl-3 font-bold outline-none"
                  type="password"
                  placeholder="Contraseña"
                  name="contraseña"
                  id="pass"
                />
              </div>
            </div>
            <div className="flex flex-col px-10 py-4">
              <ButtonLogin />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
