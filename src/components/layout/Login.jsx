import {useState} from "react";
import Email from './Email'
import LoginOption from './LoginOption'
import { styles } from "../../styles";
import { FaXmark } from "react-icons/fa6";
import { hideLoginModal, showLoginModal } from "../../ReduxSlices/loginModalSlice"
import { useSelector, useDispatch } from 'react-redux';

const Login = () => {
  const dispatch = useDispatch()
  const [showEmail, setShowEmail] = useState(false)

  const showEmailClick = () => {
    setShowEmail(true)
  }

  return (
    <section className='h-screen bg-black fixed right-0 left-0 bottom-0 top-0 z-10 px-6 sm:px-48 py-16 sm:py-16'>
      <div className="grid items-end justify-end cursor-pointer" onClick={() => {dispatch(hideLoginModal())}}>
        <FaXmark size={40} color="#FFFFFF" />
      </div>

      {!showEmail && <LoginOption click={showEmailClick}/>}
      {showEmail && <Email />}
    </section>
  );
};

export default Login;
