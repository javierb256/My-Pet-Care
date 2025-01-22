import "./App.css";
import { Link } from "react-router";
import logo from "./assets/My Pet Care Logo Blue.png";

function App() {
  return (
    <>
      <header className="blue-background flex-column-center">
        <div className="home-logo flex-column-center">
          <img src={logo} alt="My Pet Care Logo Blue" />
        </div>
        <h1>My Pet Care</h1>
      </header>
      <section className="flex-column-center">
        <h2>Please Login</h2>
        <form action="">
          <div>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
        </form>
        <div className="flex-column-center links">
          <Link to="home" className="button">
            Login
          </Link>
          <Link to="first-login" className="button orange-button">
            Create Account
          </Link>
          <Link to="account-recovery">Can't Login? Recover Account</Link>

        </div>
      </section>
    </>
  );
}

export default App;
