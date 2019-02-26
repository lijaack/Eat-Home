import React from "react";
import API from "../../utils/API";
import PlacesSearch from "../../components/PlacesSearch";

export function NavUser() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{borderBottom: "1px solid rgba(46,62,72,.12)"}}>
      <a className="navbar-brand" href="/">Home</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
      <div className="navbar-nav ml-auto">
        <a className="nav-item nav-link" href="/restaurants">Restaurants</a>
        <a className="nav-item nav-link" href="/myrestaurant">My Restaurant</a>
        <a className="nav-item nav-link" href="/myrestaurant">My Profile</a>
        <a className="nav-item nav-link" href="/signout" onClick={() => {API.signOut(); window.location.href = "/"}}>Sign out</a>
        </div>
      </div>
	  </nav>
  
  );
}

export function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{borderBottom: "1px solid rgba(46,62,72,.12)"}}>
      <a className="navbar-brand" href="/">Home</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
      <div className="navbar-nav ml-auto">
        <a className="nav-item nav-link" href="/restaurants">Restaurants</a>
        <a className="nav-item nav-link" href="/login">Login</a>
        <a className="nav-item nav-link" href="/signup">Sign Up</a>
        </div>
      </div>
	  </nav>

  );
}


