import React from "react";

function Jumbotron({ height, children }) {
  return (
    <div
      style={{ height: {height}, clear: "both", paddingTop: 120, textAlign: "center" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
