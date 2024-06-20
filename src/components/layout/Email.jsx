import { useState } from "react";
import EmailLogin from "./EmailLogin";
import EmailSignUp from "./EmailSignUp";
import {Link} from 'react-router-dom'

const Email = () => {
  const [signInModal, setSignInModal] = useState(false);

  return (
    <div className="bg-white-100 p-16 rounded-md gap-3 sm:absolute sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2">
      <h1 className="text-3xl text-black font-black mb-5 text-center">
        {signInModal ? "Login" : "Sign Up"}
      </h1>

      {!signInModal && <EmailSignUp setSignInModal={setSignInModal}/>}
      {signInModal && <EmailLogin setSignInModal={setSignInModal}/>}

      <Link to='/user-page'>Not now</Link>
    </div>
  );
};

export default Email;
