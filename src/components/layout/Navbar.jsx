import React from "react";
import { onAuthStateChanged } from 'firebase/auth'
import {auth} from '../../firebase.config.js'
import Button from "../common/Button";
import Logo from "../../assets/sage-logo.png";
import MobileNav from "./mobileNav";
import OptionsBar from './OptionsBar'
import { useSelector, useDispatch } from 'react-redux';

import { showMobileNav, hideMobileNav } from "../../ReduxSlices/mobileNavSlice";
import { showCategories} from "../../ReduxSlices/categoriesSlice";
import { showLoginModal } from "../../ReduxSlices/loginModalSlice"
import { showOptions } from "../../ReduxSlices/optionsBar.js";

import { Link } from "react-router-dom";
import { styles } from "../../styles";
import { useState, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { GiOpenBook, GiWhiteBook } from "react-icons/gi";
import Categories from "./Categories";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [user, setUser]  = useState(null)

  const NavIsVisible = useSelector((state) => state.mobileNav.value)
  const CategoriesIsVisible = useSelector((state) => state.categories.value)
  const optionsIsVisible = useSelector((state) => state.options.value)

  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      console.log(currentUser)
    })

    return unsubscribe
  }, [user])

  return (
    <nav
      className={`relative violet-gradient flex items-center gap-[32px] sm:py-3 py-3 ${styles.paddingX}`}
    >
      <img src={Logo} alt="Sage Logo" className="w-[48px] mr-auto sm:mr-0" />

      <ul className="hidden sm:flex g-4 mr-auto gap-[32px]">
        <li
          className={`lg:text-link text-linkMobile text-text ${
            active === "Home" ? "underline" : "no-underline"
          } cursor-pointer hover:underline`}
          onClick={() => setActive("Home")}
        >
          <Link>Home</Link>
        </li>

        <li
          className={`relative lg:text-link text-linkMobile text-text ${
            active === "Categories" ? "underline" : "no-underline"
          } cursor-pointer hover:underline`}
          onClick={() => {
            setActive("Categories");
            dispatch(showCategories())
          }}
        >
          Categories
          {CategoriesIsVisible && <Categories />}
        </li>

        <li
          className={`lg:text-link text-linkMobile text-text ${
            active === "Pricing" ? "underline" : "no-underline"
          } cursor-pointer hover:underline`}
          onClick={() => setActive("Pricing")}
        >
          <Link>Pricing</Link>
        </li>
      </ul>

      <form>
        <input
          type="text"
          className="hidden lg:block border border-gray-700 border-solid border-2 rounded-md pl-3 py-1 text-gray-400"
          placeholder="Search"
        />
        <IoSearch
          className="lg:hidden block cursor-pointer"
          size={30}
          color="#cccccc"
        />
      </form>

      {user? <div onClick={() => dispatch(showOptions())}>
        <img className='w-10 h-10 rounded-full cursor-pointer' src={user.photoURL || 'https://res.cloudinary.com/dmdg0lwhz/image/upload/v1716033496/cubes-male-avatar-1_wvwbyq.png'} alt='User image'/>
        {optionsIsVisible && <OptionsBar />}
      </div>
      
      :
      <div className="hidden sm:flex items-center gap-2">
        <Button text="Sign up" borderColor="accent" click={() => dispatch(showLoginModal())}/>
        <Button text="Login" borderColor="accent" click={() => dispatch(showLoginModal())}/>
      </div>
      }

      <div className="block sm:hidden">
        {NavIsVisible ? (
          <GiOpenBook
            size={40}
            color="#cccccc"
            onClick={() => {
              dispatch(hideMobileNav())
            }}
          />
        ) : (
          <GiWhiteBook
            size={40}
            color="#cccccc"
            onClick={() => {
             dispatch(showMobileNav())
            }}
          />
        )}
      </div>

      {NavIsVisible && <MobileNav active={active} setActive={setActive}/>}
    </nav>
  );
};

export default Navbar;
