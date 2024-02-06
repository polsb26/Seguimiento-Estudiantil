
import Image from "next/image"
import logoU from "@/app/assets/img/logos/logoU.png"
import { PiUserCircleFill } from "react-icons/pi"

const Navbar = () => {
    return (
      <nav>
        <div className="nav-container ">
          <div className="">
            <Image
              src={logoU}
              alt="logo Universidad"
              width={154}
              height={74}
            />
          </div>
          <div className="text-xl italic text-color-oscure-green font-semibold">
            BIENVENIDO AL SEGUIMIENTO DE ESTUDIANTES DE LA FISI
          </div>
          <div className="">
            <PiUserCircleFill size={60} />
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;