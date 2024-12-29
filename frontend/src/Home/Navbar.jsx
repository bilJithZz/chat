import React, { useState } from "react";
import Logo from "../assets/Logo (1).png"
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate=useNavigate()
  const [user, setUser] = useState(false);

  const handlechange=()=>{
 navigate('/create')
  }

  return (
    <div className="flex h-16 items-center flex-row justify-between">
      <img className="w-36" src={Logo} alt="" />
      <div className="flex flex-row gap-6">
        {user ? (
          <>
            <h1 onClick={handlechange} className="cursor-pointer text-xl">Create Post</h1>
            <h1 className="pr-4 text-xl cursor-pointer font-normal">LogOut</h1>
          </>
        ) : (
          <>
            <h1 onClick={()=>navigate('/login')} className="cursor-pointer text-xl">Login</h1>
            <h1 onClick={()=>navigate('/register')} className="pr-4 text-xl cursor-pointer font-normal">Register</h1>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
