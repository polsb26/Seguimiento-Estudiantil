
import Image from 'next/image'
import loginImg from '@/app/assets/img/bg/login_img.webp'
import style from '@/src/styles/style.module.css'
import logoU from '@/app/assets/img/logos/logoU.png'
import ButtonLogin from '@/src/components/login/button'
import { CiUser } from 'react-icons/ci'
import { RiLockPasswordLine } from 'react-icons/ri'

export default function Login() {

  return (
    <>
      < div className={style.container_login}>
        <div style={{
          backgroundImage: `url(${loginImg.src})`,
          backgroundRepeat: 'no repeat',
          backgroundSize: 'cover'
        }} className={style.container_login_bg_img}></div>
        <div className={style.container_login_bg_color} />
      </div>
      <div className="absolute py-7 px-12">
        <Image
          src={logoU}
          alt='logo de la universidad'
          width={444}
          height={221} />
      </div>
      <div
        className="absolute inset-y-32 right-24 "
        id="login"
      >
        <div
          className="flex flex-col shadow-xl bg-white md:w-[21rem] md:h-[23rem] rounded-[0.5rem] pt-8 pb-8 px-10 gap-4"
        >
          <h3 className="color-green text-5xl md:text-5xl text-center font-bold my-2">
            SISE
          </h3>
          <p className="text-gray-500 text-center italic font-thin">
            Sistema de seguimiento al estudiante
          </p>
          <div className='flex flex-col color-green gap-5'>
            <div className='flex border-b-2 border-b-lime-700 pl-2 py-2'>
              <CiUser size={24} />
              <input className='border-none outline-none font-bold pl-3'
                type="user" placeholder='Usuario' name='usuario' id='user' />
            </div>
            <div className='flex border-b-2 border-b-lime-700 pl-2 py-2'>
              <RiLockPasswordLine size={24} />
              <input className='border-none outline-none font-bold pl-3'
                type="password" placeholder='Contraseña' name="contraseña" id="pass" />
            </div>
          </div>
          <div className="flex flex-col px-10 py-4">
            <ButtonLogin />
          </div>
        </div>
      </div>
    </>
  )
}
