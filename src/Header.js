import React, { PureComponent } from "react";
import "./Header.css";

export default class Header extends PureComponent {
  render() {
    return (
      <header className="component-header">
        <div className="headerDiv">
          <div className="left">
          <img
          src={require('./monaLogo.png')}
          width="32"
          height="32"
          alt=""
        />
          </div>
          <div className="right">
GangNam-Gu
          </div>
       
        </div>
      </header>
    );
  }
}
