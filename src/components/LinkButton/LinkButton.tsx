import { Link } from "react-router";
import styles from "./LinkButton.module.css";

interface LinkButtonProps {
  to: string;
  className?: string;
  color?: string;
  children: React.ReactNode;
}

const LinkButton: React.FC<LinkButtonProps> = ({
  to,
  color,
  children,
  className,
}) => {
  return (
    <Link
      to={to}
      className={`${styles.button} ${color ? styles[color] : ""} ${className ? styles[className] : ""}`}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
