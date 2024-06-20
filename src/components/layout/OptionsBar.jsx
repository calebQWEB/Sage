import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../utils/auth";

const OptionsBar = () => {
  const {logout} = useAuth()
  return (
    <div className="bg-white-100 rounded-md absolute top-full right-10 z-50">
      <div className="grid gap-5 p-5">
        <Link to='/profile'>Profile</Link>
        <div className="w-full bg-gray-700 h-[1px]" />
        <Link>Notification</Link>
        <Link>Help</Link>
        <Link>Settings</Link>
        <div className="w-full bg-gray-700 h-[1px]" />
        <Link onClick={logout}>Logout</Link>
      </div>
    </div>
  );
};

export default OptionsBar;
