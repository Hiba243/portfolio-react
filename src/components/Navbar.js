import { useRef } from 'react';
const Navbar = () => {

  return (
    <header>
      <nav className="navbar">
        <p className="nav__logo">Portfolio 2021</p>
        <ul className="nav__menu">
          <div className="link-flex">
            <div className="star" id="star-1"></div>
            <li className="nav__item nav__item-1">
              <a href="#about" className="nav__link link-effect nav__link-1"
              >About</a
              >
            </li>
          </div>
          <div className="link-flex">
            <div className="star" id="star-2"></div>
            <li className="nav__item nav__item-2">
              <a href="#work" className="nav__link link-effect nav__link-2">Work</a>
            </li>
          </div>
          <div className="link-flex">
            <div className="star" id="star-3"></div>
            <li className="nav__item nav__item-3">
              <a href="#contact" className="nav__link link-effect nav__link-3"
              >Contact</a
              >
            </li>
          </div>
        </ul>
        <div className="hamburger">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;