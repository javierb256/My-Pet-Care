import styles from "./CreateAccount.module.css";
import BoxContainer from "../../components/BoxContainer/BoxContainer"
import LinkButton from "../../components/LinkButton/LinkButton";
import BackButton from "../../components/BackButton/BackButton";

// create back button to home screen
function CreateAccount() {
  return (
    <>
      <header className={`${styles["create-account-header"]}`}>
        <h1>Create New Account</h1>
      </header>
      <BackButton to="/" className={styles["back-button"]}></BackButton>
      <h2 className={`${styles["create-account-h2"]} text-center`}>
        Account Information
      </h2>
      
      <BoxContainer className={`${styles.container}`}>
        <form className={`${styles["account-information-form"]} `}>
            <div>
                <label htmlFor="first-name" className="label">First Name</label>
                <input id="first-name" name="first-name" type="text" className="input"></input>
            </div>
            <div>
                <label htmlFor="last-name" className="label">Last Name</label>
                <input id="last-name" name="last-name" type="text" className="input"></input>
            </div>
            <div>
                <label htmlFor="password" className="label">Password</label>
                <input id="password" name="password" type="password" className="input"></input>
            </div>
            <div>
                <label htmlFor="email" className="label">Email</label>
                <input id="email" name="email" type="email" className="input"></input>
            </div>
            <LinkButton to="confirmation" color="scarlet" className="margin-top-2">Create Account</LinkButton>
        </form>
      </BoxContainer>
    </>
  );
}

export default CreateAccount;
