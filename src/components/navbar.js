import React from "react";
import NavbarElement from "../components/nav_element";

const Navbar = props => {
  return (
    <>
      <div className="navbar">
        {props.navbarElements.map(el => (
          <NavbarElement elementData={el} key={el.id} />
        ))}
      </div>
    </>
  );
};

export default Navbar;
