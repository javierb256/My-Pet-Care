import styles from "./BackButton.module.css"
import { Link } from "react-router"
import arrow from "../../assets/arrow-left-solid.svg"

interface BackButtonProps {
    to: string,
    className?: string;
}

const BackButton: React.FC<BackButtonProps> = ({to, className}) => {
    return <Link to={to} className={`${styles["button-container"]} ${className ? className : ""}`}><img src={arrow} alt="back button arrow" className={styles["button-image"]}/></Link>
}

export default BackButton;