import React from "react";
import Button from '../common/Button'
import { Link } from "react-router-dom";
import { styles } from "../../styles";
import Categories from "./Categories";
import { useSelector, useDispatch } from 'react-redux';
import { hideCategories, showCategories} from "../../ReduxSlices/categoriesSlice";
import { showLoginModal } from "../../ReduxSlices/loginModalSlice"

const MobileNav = ({active, setActive}) => {
  const categoriesIsVisible = useSelector((state) => state.categories.value)
  const dispatch = useDispatch()

  return (
    <div
      className={`absolute right-0 left-0 top-full bg-primary ${styles.paddingX} py-10 bounce-in-top grid gap-4`}
    >
      <ul className="grid g-4 mr-auto gap-[32px]">
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
          {categoriesIsVisible && <Categories />}
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

      <div className="grid items-start justify-start gap-4">
        <Button text="Sign up" borderColor="accent" click={() => dispatch(showLoginModal())}/>
        <Button text="Login" borderColor="accent" click={() => dispatch(showLoginModal())}/>
      </div>
    </div>
  );
};

export default MobileNav;
