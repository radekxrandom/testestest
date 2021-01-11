import React from "react";

const NavbarElement = props => {
  return (
    <>
      <div className="nav_element" id={props.elementData.id}>
        {props.elementData.text}
      </div>
    </>
  );
};

export default NavbarElement;
