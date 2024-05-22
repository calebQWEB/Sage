import "./App.css";
import Navbar from "../src/components/layout/Navbar";
import Footer from "../src/components/layout/Footer";
import Login from '../src/components/layout/Login'
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { hideMobileNav } from "./ReduxSlices/mobileNavSlice";
import { hideCategories } from "./ReduxSlices/categoriesSlice";
import {showLoginModal} from './ReduxSlices/loginModalSlice'
import {hideOptions} from './ReduxSlices/optionsBar'
import { useEffect } from "react";

const AppWrapper = () => {
  const dispatch = useDispatch()
  const navIsVisible = useSelector((state) => state.mobileNav.value)
  const categoriesIsVisible = useSelector((state) => state.categories.value)
  const loginModalIsVisible = useSelector((state) => state.loginModal.value)
  const optionsIsVisible = useSelector((state) => state.options.value)
  
  return (
    <>
    {loginModalIsVisible && <Login />}
    <Navbar />
    <div className="violet-gradient min-h-full" 
        onClick={() => {
            dispatch(hideMobileNav())
            dispatch(hideCategories())
            dispatch((hideOptions()))}}>
      <Outlet />
    </div>
    <Footer />
  </>
  )
}

export default AppWrapper