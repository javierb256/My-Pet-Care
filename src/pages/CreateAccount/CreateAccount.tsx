import styles from "./CreateAccount.module.css";
import BoxContainer from "../../components/BoxContainer/BoxContainer"
import Button from "../../components/LinkButton/LinkButton";

function CreateAccount() {
  return (
    <>
      <header className={`${styles["create-account-header"]}`}>
        <h1>Create New Account</h1>
      </header>
      <h2 className={`${styles["create-account-h2"]} text-center`}>
        Account Information
      </h2>
      
      <BoxContainer>
        <form className={`${styles["account-information-form"]} margin-top-2`}>
            <div>
                <label htmlFor="first-name">First Name</label>
                <input id="first-name" name="first-name" type="text"></input>
            </div>
            <div>
                <label htmlFor="last-name">Last Name</label>
                <input id="last-name" name="last-name" type="text"></input>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input id="password" name="password" type="password"></input>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email"></input>
            </div>
            {/* place button here  */}
            <Button>Create Account</Button>
        </form>
      </BoxContainer>
    </>
  );
}

export default CreateAccount;
