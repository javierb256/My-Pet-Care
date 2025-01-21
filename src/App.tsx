import "./App.css";
import { Link } from "react-router";
import logo from "./assets/My Pet Care Logo Blue.png";

function App() {
  // Login Page
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
        {/* <form action="">
          <label htmlFor="username">
            Username
            <input type="text" name="username" id="username" />
          </label>
          <label>
            Password
            <input type="password" name="password" id="password" />
          </label>
        </form> */}
        {/* <Link to="home" className="button">Login</Link>
        <Link to="first-login" className="button">New User</Link>
        <Link to="account-recovery">Can't Login? Recover Account</Link> */}
      </section>
    </>
  );
}

// function handleSubmit =(event)=> {
//   event.preventDefault();
//   alert('stopped form')
// }

export default App;
