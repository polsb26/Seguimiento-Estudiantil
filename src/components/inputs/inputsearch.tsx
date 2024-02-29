
import { CiSearch } from "react-icons/ci";
export default function InputHeader() {
    return (
        <div className="flex justify-end mt-3 mr-5">
            <div className="flex bg-white rounded-lg w-80 justify-start">
                <CiSearch size={20} className="mt-1 mx-2"/>
                <input type="search" name="Buscar" id="Buscar" placeholder="Buscar" className=" outline-none w-64" />
            </div>
           
        </div>
    )
}