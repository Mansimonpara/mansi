import { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="Navbar-logo">Trippy</h1>
        <div className="menu-icons">
          <i className="fas fa-bars"></i>
          <i className="fas fa-times"></i>
        </div>

        <ul className="Nav-menu">
            {MenuItems.map((item, index) =>{
                return(
                    <li key={index}>
            <a className={item.cName}  href="/">
              <i className={item.icon}></i>{item.title}
            </a>
          </li>
                );
            })}
          <button>Sign Up</button>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
