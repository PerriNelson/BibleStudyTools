import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#F15B2A" };

  return (
    <div className="navbar fixed-top navbar-dark bg-dark navbar-expand-lg">
      <div className="container">
        <NavLink
          to="/"
          activeStyle={activeStyle}
          className="navbar-brand"
          exact
        >
          Home
        </NavLink>
        <button
          type="button"
          className="navbar-toggler"
          data-toggle="collapse"
          data-target=".navbar-collapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse clearfix">
          <div className="navbar-nav mr-auto">
            <NavLink
              to="/books/"
              activeStyle={activeStyle}
              className="nav-item nav-link"
            >
              Books
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
