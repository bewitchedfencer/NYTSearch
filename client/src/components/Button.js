import React from "react";

const Button = props =>(
    <button className = "btn btn-success submitButton">{props.children}
    </button>
);

export default Button;