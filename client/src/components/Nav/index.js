import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        E@Home
      </a>
      <a className="navbar-brand" href="/search">
        Foodie
      </a>
      <a className="navbar-brand" href="/saved">
        Vendor
      </a>
     
    </nav>
  );
}

export default Nav;
