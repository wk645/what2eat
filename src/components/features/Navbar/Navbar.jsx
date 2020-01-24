import React from "react";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <NavLink className="Navbar nav-item" activeClassName="" to="/">
        What2Eat
      </NavLink>
      <NavLink className="Navbar nav-item" activeClassName="" to="/cuisines">
        Cuisines
      </NavLink>
      <NavLink className="Navbar nav-item" activeClassName="" to="/search">
        Search
      </NavLink>
    </div>
  );
};

export default Navbar;
