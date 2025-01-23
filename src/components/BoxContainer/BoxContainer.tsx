import styles from "./BoxContainer.module.css"

interface BoxContainerProps {
    children: React.ReactNode,
    className?: string;
}

const BoxContainer: React.FC<BoxContainerProps> = ({className, children}) => {
    return <div className={`${className} ${styles.container}`}>{children}</div>
}

export default BoxContainer