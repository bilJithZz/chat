import React, { useState } from "react";

const Navbar = () => {
  const [user, setUser] = useState(false);

  return (
    <div className="flex h-16 items-center bg-red-700 flex-row justify-between">
      <h1 className="pl-4">hello</h1>

      <div className="flex flex-row gap-6">
        {user ? (
          <>
            <h1 className="text-xl">Create Post</h1>
            <h1 className="pr-4 text-xl font-normal">LogOut</h1>
          </>
        ) : (
          <>
            <h1 className="text-xl">Login</h1>
            <h1 className="pr-4 text-xl font-normal">Register</h1>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
