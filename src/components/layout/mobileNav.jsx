import React from "react";
import { Link } from "react-router-dom";
import { styles } from "../../styles";
import Categories from "./Categories";

const MobileNav = ({
  active,
  setActive,
  showCategories,
  setShowCategories,
}) => {
  return (
    <div
      className={`absolute right-0 left-0 top-full bg-primary ${styles.paddingX} py-10 bounce-in-top`}
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
    </div>
  );
};

export default MobileNav;
