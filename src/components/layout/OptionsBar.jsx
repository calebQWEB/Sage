import React from "react";
import { Link } from "react-router-dom";
import {logout} from '../../utils/auth'

const OptionsBar = () => {
  return (
    <div className="bg-white-100 rounded-md absolute top-full right-10">

      <div className="grid gap-5 p-5">
        <Link>Profile</Link>
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
