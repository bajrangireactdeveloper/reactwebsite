import React from 'react'
import { Outlet , Link } from 'react-router-dom';
import '../Navbar.css';
export default function Navbar() {


  return (
    // <div>
    //   <h2>Navbar</h2>
    //   <img src="/assets/nav/menuIcon.png" alt='toggle menu'/>
    // </div>
    <>
     <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container">
    <Link className="navbar-brand text-white fw-bold" to="/">Website</Link>
    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon text-dark"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/services">Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact Us</Link>
        </li>
       
      
      </ul>
      
    </div>
  </div>
</nav>
<Outlet/>
    </>
  )
}
