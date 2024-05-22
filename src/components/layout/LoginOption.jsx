import React from "react";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import {signInWithGoogle} from '../../utils/auth'
import {hideLoginModal} from '../../ReduxSlices/loginModalSlice'
import {useDispatch} from 'react-redux'

const LoginOption = ({click}) => {
  const dispatch = useDispatch()
  return (
    <div className="bg-white-100 p-6 sm:p-16 rounded-md gap-3 sm:absolute sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 text-center">
      <h1 className="text-3xl text-black font-black mb-5 text-center">Sign in</h1>

      <div className='flex items-center justify-center gap-5 flex-col'>
        <button onClick={() => {signInWithGoogle()
                                dispatch(hideLoginModal())}} 
        className="p-3 sm:p-5 flex items-center gap-3 border border-solid border-gray-700 rounded-full hover:gray-700">
          <FcGoogle size={30} /> Sign in with google
        </button>

        <span className="text-linkMobile md:text-link">Or</span>

        <button
          onClick={click}
          className="p-3 sm:p-5 flex items-center gap-3 border border-solid border-gray-700 rounded-full"
        >
          <MdEmail size={30} /> Sign in with Email
        </button>
      </div>
    </div>
  );
};

export default LoginOption;
