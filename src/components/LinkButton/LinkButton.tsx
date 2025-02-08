import { Link } from "react-router";
import styles from "./LinkButton.module.css";

interface LinkButtonProps {
  to: string;
  className?: string;
  color?: string;
  children: React.ReactNode;
  state?: HTMLImageElement | string;
}

const LinkButton: React.FC<LinkButtonProps> = ({
  to,
  color,
  children,
  className,
  state,
}) => {
  return (
    <Link
      to={to}
      className={`${styles.button} ${color ? styles[color] : ""} ${className || ""}`}
      state={state}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
