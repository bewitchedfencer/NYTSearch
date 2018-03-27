import React from "react";

const Button = props =>(
    <button className = "btn btn-success submitButton" type={props.buttonType} onClick= {props.handleFormSubmit}>{props.children}
    </button>
);

export default Button;