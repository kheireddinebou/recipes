import React from "react";
import { NavLink } from "react-router-dom";
import { FaPizzaSlice ,FaHamburger} from "react-icons/fa";
import { GiNoodles ,GiChopsticks} from "react-icons/gi";


function Category() {
  return (
    <div className="category-list">
      <NavLink className="category-cicle" to={"/cuisine/Italiane"}>
        <FaPizzaSlice size={"1.4rem"} />
        <span className="category-title">Italiane</span>
      </NavLink>

      <NavLink className="category-cicle" to={"/cuisine/American"}>
        <FaHamburger size={"1.4rem"} />
        <span className="category-title">American</span>
      </NavLink>

      <NavLink className="category-cicle" to={"/cuisine/Thai"}>
        <GiNoodles size={"1.4rem"} />
        <span className="category-title">Thai</span>
      </NavLink>

      <NavLink className="category-cicle" to={"/cuisine/Japanese"}>
        <GiChopsticks size={"1.4rem"} />
        <span className="category-title">Japanese</span>
      </NavLink>
    </div>
  );
}

export default Category;
