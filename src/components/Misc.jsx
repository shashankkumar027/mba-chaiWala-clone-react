import React from 'react'
import { BsMouse } from "react-icons/bs";
import logo from '../assets/logo.png'

const Misc = () => {
  return (
    <>
      <div className="cursor"></div>
      <a href="/" className="logo">
        <img src={logo} alt="Logo" data-cursorpointer={true} />
      </a>
      <a href="/franchise" className="franchiseBtn" data-cursorpointer={true}>
        GET A FRENCHISE
      </a>
      <BsMouse className="scrollBtn" data-cursorpointer={true} />
    </>
  );
}

export default Misc