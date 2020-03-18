import React from 'react';
import './Menu.css';
import {Link} from 'react-router-dom';
const Menu=()=>{
	
	return(
	<div className="">
	
	
	<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <i className="fa fa-bars" aria-hidden="true"></i>

  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav ml-auto text-center">
      <Link className="nav-item nav-link active" to="/">Home </Link>
      <Link className="nav-item nav-link" to="About">About</Link>
      <Link className="nav-item nav-link" to="Contact">Contact</Link>
     
    </div>
  </div>
</nav>
	
	</div>
	)
	
	
	
	
	
	
}



export default Menu;