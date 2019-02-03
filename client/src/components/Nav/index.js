import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{borderBottom: "1px solid rgba(46,62,72,.12)"}}>
      <a className="navbar-brand" href="/">Home</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
      <div className="navbar-nav ml-auto">
        <a className="nav-item nav-link" href="/login">Login</a>
        <a className="nav-item nav-link" href="/signup">Sign Up</a>
        </div>
      </div>
	  </nav>

  );
}

export default Nav;
