import styles from "./Button.module.css";

interface ButtonProp {
  children: React.ReactNode;
  className?: string,
  // specify that it is a void function
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProp> = ({ children, onClick,className }) => {
  return (
    <button onClick={onClick} className={`${className && className} ${styles.button}`}>
      {children}
    </button>
  );
};

export default Button;
