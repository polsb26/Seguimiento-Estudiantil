import Image from 'next/image'
import loginImg from '@/app/assets/img/bg/login_img.webp'
import style from '@/src/styles/style.module.css'
import logoU from '@/app/assets/img/logos/logoU.png'
import Column from '@/src/components/column/column'

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
      <div className="absolute flex flex-row  w-full py-10 px-16">
        <Image
          src={logoU}
          alt='logo de la universidad' />
      </div>
      <div
        className="absolute inset-y-28 right-14 "
        id="login"
      >
        <div
          className="flex flex-col shadow-xl bg-white md:w-[29rem] md:h-[26rem] rounded-[1.25rem] mx-5 sm:mx-8 md:mx-24 lg:mx-auto pt-6 pb-8 px-12 gap-8"
        >
          <h3 className="text-color-green text-3xl md:text-5xl text-center">
            SISEG
          </h3>
          <p className="text-gray-500 text-center font-sitara italic text-base font-normal leading-normal">
            Sistema de seguimiento del egresado
          </p>
          <Column spacerPx={10}></Column>
        </div>
      </div>



    </>
  )
}
