import React from "react";
import Navbar from "../components/navbar";
import Main from "../components/main";

const Wrapper = props => {
  return (
    <>
      <Navbar navbarElements={props.navbarElements} />
      <Main />
    </>
  );
};

export default Wrapper;
