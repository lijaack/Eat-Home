import React from "react";

function Jumbotron({ height, className, children }) {
  return (
    <div
      style={{ height: {height}, clear: "both", paddingTop: 120, textAlign: "center" }}
      className={"jumbotron" +" {className}"}
    >
      {children}
    </div>
  );
}

export default Jumbotron;
