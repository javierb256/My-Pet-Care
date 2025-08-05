import styles from "./Navbar.module.css";
import { Link } from "react-router";
import Logo from "../../assets/My Pet Care Logo Blue.png";
import logoTransparent from "../../assets/My Pet Care Logo Blue Transparent.png";
import ProfileIcon from "../../assets/user-profile-icon.svg";
// import DownArrow from "../../assets/thin-chevron-arrow-bottom-icon.svg";
import LinkButton from "../LinkButton/LinkButton";
import { useState } from "react";
import { useRef } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const topDiv = useRef<HTMLDivElement>(null);
  const bottomDiv = useRef<HTMLDivElement>(null);
  const middleDiv = useRef<HTMLDivElement>(null);
  const openNavbar = () => {
    topDiv.current!.classList.toggle(styles.active);
    bottomDiv.current!.classList.toggle(styles.active);
    middleDiv.current!.classList.toggle(styles.active);
    setMenuOpen(!menuOpen);
  }

  return (
    <>
      <div className={styles.navbar}>
        <ul className={styles["navbar-links"]}>
          <li>
            <Link to={"/home"}>
              <img
                src={Logo}
                alt="site logo blue"
                className={`${styles["navbar-image"]}`}
              />
            </Link>
          </li>
          <li>
            <Link to={"/home"}>Home</Link>
          </li>
          <li>
            <Link to={"/health"}>Health</Link>
          </li>
          <li>
            <Link to={"/appointments"}>Appointments</Link>
          </li>
        </ul>
        <div className={styles["profile-options"]}>
          {/* <img src={DownArrow} alt="down arrow" /> */}
          {/* <img
            src={ProfileIcon}
            className={styles["navbar-image"]}
            alt="stock profile picture"
          /> */}
          <div className={styles["profile-dropdown"]}>
            <div className={styles["profile-dropdown-user"]}>
              <img src={ProfileIcon}/>
              {/* <div>
                <p>Username</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className={styles["navbar-mobile"]}>
        <div className={styles["navbar-mobile-bar"]}>
          <Link to="/home">
            <img src={logoTransparent} alt="My Pet Care Logo" />
          </Link>
          <div className={styles["hamburger-menu"]} onClick={openNavbar}>
            <div ref={topDiv}></div>
            <div ref={middleDiv}></div>
            <div ref={bottomDiv}></div>
          </div>
        </div>
        <div
          className={`${styles["navbar-mobile-links"]} ${
            menuOpen == false ? styles["display-none"] : ""
          }`}
        >
          <ul>
            <li>
              <Link to={"/home"}>Home</Link>
            </li>
            <li>
              <Link to={"/health"}>Health</Link>
            </li>
            <li>
              <Link to={"/appointments"}>Appointments</Link>
            </li>
          </ul>
          <LinkButton to="/" className={styles["link-button"]}>Log Out</LinkButton>
        </div>
      </div>
    </>
  );
}

export default Navbar;
