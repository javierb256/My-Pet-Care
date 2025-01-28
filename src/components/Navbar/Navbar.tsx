import styles from "./Navbar.module.css"
import { Link } from "react-router"
import Logo from "../../assets/My Pet Care Logo Blue.png"
import ProfileIcon from "../../assets/user-profile-icon.svg"
import DownArrow from "../../assets/thin-chevron-arrow-bottom-icon.svg"

function Navbar() {
    return (
        <div className={styles.navbar}>
            <ul className={styles["navbar-links"]}>
                <li><Link to={"/home"}><img src={Logo} alt="site logo blue" className={`${styles["navbar-image"]}`}/></Link></li>
                <li><Link to={"/home"}>Home</Link></li>
                <li><Link to={"/health"}>Health</Link></li>
                <li><Link to={"/appointments"}>Appointments</Link></li>
            </ul>
            <div className={styles["profile-options"]}>
                <img src={DownArrow} alt="down arrow"/>
                <img src={ProfileIcon} className={styles["navbar-image"]} alt="stock profile picture"/>
            </div>
        </div>

    )
}

export default Navbar