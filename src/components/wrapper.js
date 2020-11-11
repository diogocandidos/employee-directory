import React from "react";
import '../components/styles/Wrapper.css';


function Wrapper(props) {
  return ( <div 
        className="wrapper bg-light">
            { props.children }
           </div> );
}

export default Wrapper;
