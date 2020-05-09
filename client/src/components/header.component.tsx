import React, { FC } from "react";
import { NavLink } from "react-router-dom";

const Header: FC = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Shop</NavLink>
          </li>
          <li>
            <NavLink to="/admin/add-product">Add Product</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
