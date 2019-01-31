import React from "react";

function Nav() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{borderBottom: "1px solid rgba(46,62,72,.12)"}}>
      <a class="navbar-brand" href="/">Home</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
      <div class="navbar-nav ml-auto">
        <a class="nav-item nav-link" href="/login">Login</a>
        <a class="nav-item nav-link" href="/signup">Sign Up</a>
        </div>
      </div>
	  </nav>

  );
}

export default Nav;
