import React from "react";
import "./button.component.styles.scss";

const Button = ({ label }) => {
  return (
    <div data-testid="button" className="button-style">
      {label}
    </div>
  );
};

export default Button;
