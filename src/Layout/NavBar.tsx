import { IoBagOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="grid grid-cols-3 px-3 py-3 shadow-lg justify-between items-center">
      <ul className="flex items-center justify-center gap-10">
        <li className="text-lg">
          <NavLink
            to={"product/homme"}
            className={({ isActive }) => (isActive ? "font-bold" : "")}
          >
            Homme
          </NavLink>
        </li>
        <li className="text-lg">
          <NavLink
            to={"product/femme"}
            className={({ isActive }) => (isActive ? "font-bold" : "")}
          >
            Femme
          </NavLink>
        </li>
        <li className="text-lg">
          <NavLink
            to={"product/accessoires"}
            className={({ isActive }) => (isActive ? "font-bold" : "")}
          >
            Accessoires
          </NavLink>
        </li>
      </ul>
      <div className="flex justify-center">
        <NavLink to={"/"}>
          <img
            className="w-20 rounded-xl"
            src="assets/elenashop-logo.png"
            alt="Elena shop logo"
          />
        </NavLink>
      </div>
      <div className="flex justify-center gap-8">
        <NavLink to={"product/checkout"}>
          <div>
            <span className=" absolute text-xs bg-red-500 text-white rounded-full px-2 py-1 ml-5 mt-3">
              0
            </span>
            <IoBagOutline size={35} />
          </div>
        </NavLink>
        <NavLink to={"/login"}>
          <CiUser size={35} />
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
