import React from "react";
import Button from "../common/Button";
import Logo from "../../assets/sage-logo.png";
import MobileNav from "./mobileNav";
import { Link } from "react-router-dom";
import { styles } from "../../styles";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { GiOpenBook, GiWhiteBook } from "react-icons/gi";
import Categories from "./Categories";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [showNav, setShowNav] = useState(false);
  const [showCategories, setShowCategories] = useState(false);

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
            setShowCategories((prev) => !prev);
          }}
        >
          Categories
          {showCategories && <Categories />}
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

      <div className="hidden sm:flex items-center gap-2">
        <Button text="Sign up" borderColor="accent" />
        <Button text="Login" borderColor="accent" />
      </div>

      <div className="block sm:hidden">
        {showNav ? (
          <GiOpenBook
            size={40}
            color="#cccccc"
            onClick={() => {
              setShowNav((prevState) => !prevState);
            }}
          />
        ) : (
          <GiWhiteBook
            size={40}
            color="#cccccc"
            onClick={() => {
              setShowNav((prevState) => !prevState);
            }}
          />
        )}
      </div>

      {showNav && <MobileNav active={active} setActive={setActive} showCategories={showCategories} setShowCategories={setShowCategories}/>}
    </nav>
  );
};

export default Navbar;
