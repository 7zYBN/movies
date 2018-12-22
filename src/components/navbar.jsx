import React from "react";

const NavBar = ({ totalCounters }) => {
  return (
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="localhost:3000">
          Navbar{" "}
          <span className="badge m-2 badge-success">{totalCounters}</span>
        </a>
      </nav>
  );
};

export default NavBar;
