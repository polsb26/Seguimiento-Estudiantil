import Image from 'next/image'
import loginImg from '@/app/assets/img/bg/login_img.webp'
import style from '@/src/styles/style.module.css'
import logoU from '@/app/assets/img/logos/logoU.png'
import ButtonLogin from '@/src/components/login/button'

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
          className="flex flex-col shadow-xl bg-white md:w-[21rem] md:h-[23rem] rounded-[0.5rem] pt-8 pb-8 px-10 gap-10"
        >
          <h3 className="text-color-green text-5xl md:text-5xl text-center">
            SISE
          </h3>
          <p className="text-gray-500 text-center italic font-thin">
            Sistema de seguimiento al estudiante
          </p>
        <div>
          
        </div>
          <div className="flex flex-col ">
            <ButtonLogin />
          </div>
          
        </div>
      </div>



    </>
  )
}
