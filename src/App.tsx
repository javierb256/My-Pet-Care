import "./App.css";
import { Link } from "react-router";
import logo from "./assets/My Pet Care Logo Blue.png";
import styles from "./components/styles/App.module.css";
import LinkButton from "./components/LinkButton/LinkButton";

function App() {
  return (
    <>
      <header className="blue-background flex-column-center">
        <div className={`${styles["home-logo"]} flex-column-center`}>
          <img src={logo} alt="My Pet Care Logo Blue" />
        </div>
        <h1 className={styles["main-page-h1"]}>My Pet Care</h1>
      </header>
      <section className={`${styles["main-page-section"]} flex-column-center`}>
        <h2>Please Login</h2>
        <form action="" className="main-page-form">
          <div>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
        </form>
        <div className={`${styles.links} flex-column-center`}>
          <LinkButton to="first-login">Login</LinkButton>
          <LinkButton to="create-account" color={"scarlet"}>
            New User
          </LinkButton>
          <Link to="account-recovery">Can't Login? Recover Account</Link>
        </div>
      </section>
    </>
  );
}

export default App;
