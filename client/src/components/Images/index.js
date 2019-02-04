import React from "react";

 function Images({source,children}){
    return(
       <img  src={source} alt="Logo" class="rounded mx-auto d-block" alt="pic" width="200" height="200"/>
    );
  }

  export default Images

  