import React from "react";


const Button = ({buttonValue, buttonEffect}) => {
    return (
        <button onClick={buttonEffect}>
          {buttonValue}
        </button>
      );

    };
export default Button;
