
import Image from "next/image"
import logoU from "@/app/assets/img/logos/logoU.png"
import { PiUserCircleFill } from "react-icons/pi"
import { TiThMenu } from "react-icons/ti";

const Navbar = () => {
  return (
    <nav>
      <div className="flex justify-between items-center h-24 nav-color-bg">
        <div className="ml-9">
          <Image
            src={logoU}
            alt="logo Universidad"
            width={154}
            height={74}
          />
        </div>
        <div className="text-xl italic color-oscure-green font-semibold ">
          BIENVENIDO AL SEGUIMIENTO DE ESTUDIANTES DE LA FISI
        </div>
        <div className="flex items-center mr-9">
          <PiUserCircleFill size={60} />
          <TiThMenu size={40} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;