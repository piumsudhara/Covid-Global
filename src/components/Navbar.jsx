import React from "react";
import { Link } from "react-scroll";
import ReactLogo from "../img/logo512.png";


const Navbar = () => {
  return (
  
    <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"></link>
                <link href="https://fonts.googleapis.com/css?family=Baloo+Da+2&display=swap" rel="stylesheet"></link>
      <a className='navbar-brand' href='/'>
        <img src={ReactLogo} alt='help' /> Covid-19 Global Pandemic
      </a>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarResponsive'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarResponsive'>
        <ul className='navbar-nav ml-auto'>
          <li className='nav-item'>
            
            <a href="https://github.com/piumsudhara" ><h1><i className='fab fa-github'></i></h1></a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
