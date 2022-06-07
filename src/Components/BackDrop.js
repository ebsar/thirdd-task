import React from "react";
function Backdrop(props) {
    return( <div onClick={props.onClose} className='backdrop' />
    );
  }
  
  export default Backdrop;