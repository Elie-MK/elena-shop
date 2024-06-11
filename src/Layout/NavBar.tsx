import { IoBagOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { NavLink } from "react-router-dom";

import { useAppSelector } from "../store/store";
import { CgLogOut } from "react-icons/cg";
import { user } from "@/Utils/DummyUser";
import { useEffect, useState } from "react";

function NavBar() {
  const selector = useAppSelector((state)=>state.cart)

  const [user, setUser] = useState<user | null>(null);
  const userJson = localStorage.getItem('user');

  useEffect(() => {
    if (userJson) {
      try {
        const parsedUser: user = JSON.parse(userJson);
        setUser(parsedUser);
      } catch (error) {
        setUser(null)
        console.error('Failed to parse user from localStorage', error);
      }
    }
  }, [userJson])
  
  const handleLogOut=()=>{
    localStorage.removeItem('user')
    window.location.reload()
  }

  return (
    <div className="grid grid-cols-3 px-3 py-3 shadow-lg justify-between items-center">
      <ul className="flex items-center justify-center gap-5">
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
        <li className="text-lg">
          <NavLink
            to={"product/chaussures"}
            className={({ isActive }) => (isActive ? "font-bold" : "")}
          >
            Chaussures
          </NavLink>
        </li>
      </ul>
      <div className="flex justify-center">
        <NavLink to={"/"}>
          <img
            className="w-20 rounded-xl"
            src="/assets/elenashop-logo.png"
            alt="Elena shop logo"
          />
        </NavLink>
      </div>
      <div className={`flex items-center justify-center  ${user?.isAdmin ?'gap-5':'gap-8'}`}>
        <NavLink to={"product/checkout"}>
          <div>
            <span className=" absolute text-xs bg-red-500 text-white rounded-full px-2 py-1 ml-5 mt-3">
              {selector.cart.length}
            </span>
            <IoBagOutline size={35} />
          </div>
        </NavLink>
        {
          !user? <NavLink to={"/login"}>
          <CiUser size={35} />
        </NavLink>:<span className="text-xl font-semibold">{user.name.toUpperCase()}</span>
        }
        {
          user?.isAdmin && <NavLink to={"/dashboard"}>
            <p className="flex gap-3 items-center hover:text-white bg-slate-300 p-2 rounded-md hover:bg-blue-900 transition-all duration-300">Dashboard</p>
          </NavLink>
        }
        {
          user && <button onClick={handleLogOut} className="flex gap-3 items-center hover:text-white bg-slate-300 p-2 rounded-md hover:bg-red-600 transition-all duration-300">
          <span >Se deconnecter</span>
          <CgLogOut size={20} />
        </button>
        }
        
      </div>
    </div>
  );
}

export default NavBar;
