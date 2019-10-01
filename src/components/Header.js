import React from "react";

const Header = props => (
  <div className="header">
    <div className="container">
      <h1 className="header___title">{props.title}</h1>
      <h2 className="header__subtitle">{props.subtitle}</h2>
    </div>
  </div>
);

Header.defaultProps = {
  title: "Default App"
};

export default Header;
