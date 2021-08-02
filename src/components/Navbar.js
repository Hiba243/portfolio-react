import { useRef } from 'react';

const Navbar = () => {

  const refHamburger = useRef();
  const refNavMenu = useRef();
  const refStar1 = useRef();
  const refStar2 = useRef();
  const refStar3 = useRef();

  function mobileMenu() {
    const hamburger = refHamburger.current;
    const navMenu = refNavMenu.current;
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    var bodyelem;
    if (hamburger.classList.contains('active')) {
      bodyelem = document.getElementsByTagName('body');
      bodyelem[0].style.overflow = 'hidden';
    }
    else {
      bodyelem = document.getElementsByTagName('body');
      bodyelem[0].style.overflow = 'visible';
    }
  }

  function closeMenu() {
    const hamburger = refHamburger.current;
    const navMenu = refNavMenu.current;
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    var bodyelem = document.getElementsByTagName('body');
    bodyelem[0].style.position = 'relative';
    bodyelem[0].style.overflow = 'visible';
  }
  function rotate1() {
    const star1 = refStar1.current;
    star1.classList.toggle("star-hover");
  }
  function rotate2() {
    const star2 = refStar2.current;
    star2.classList.toggle("star-hover");
  }
  function rotate3() {
    const star3 = refStar3.current;
    star3.classList.toggle("star-hover");
  }

  return (
    <header>
      <nav className="navbar">
        <p className="nav__logo">Portfolio 2021</p>
        <ul className="nav__menu" ref={refNavMenu}>
          <div className="link-flex">
            <div className="star" id="star-1" ref={refStar1}></div>
            <li className="nav__item">
              <a href="#about" className="nav__link" onClick={closeMenu} onMouseOver={rotate1} onMouseLeave={rotate1}
              >About</a
              >
            </li>
          </div>
          <div className="link-flex">
            <div className="star" id="star-2" ref={refStar2}></div>
            <li className="nav__item">
              <a href="#work" className="nav__link" onClick={closeMenu} onMouseOver={rotate2} onMouseLeave={rotate2}>Work</a>
            </li>
          </div>
          <div className="link-flex">
            <div className="star" id="star-3" ref={refStar3}></div>
            <li className="nav__item">
              <a href="#contact" className="nav__link" onClick={closeMenu} onMouseOver={rotate3} onMouseLeave={rotate3}
              >Contact</a
              >
            </li>
          </div>
        </ul>
        <div className="hamburger" ref={refHamburger} onClick={mobileMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;