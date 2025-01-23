import styles from "./CreateAccount.module.css";
import BoxContainer from "../../components/BoxContainer/BoxContainer"

function CreateAccount() {
  return (
    <>
      <header className={`${styles["create-account-header"]}`}>
        <h1>Create New Account</h1>
      </header>
      <h2 className={`${styles["create-account-h2"]} text-center`}>
        Account Information
      </h2>
      
      <BoxContainer className={`blue-background`}>
        <form>
            <div>
                <label></label>
                <input></input>
            </div>
            <div>
                <label></label>
                <input></input>
            </div>
            <div>
                <label></label>
                <input></input>
            </div>
            <div>
                <label></label>
                <input></input>
            </div>
            {/* place button here  */}
        </form>
      </BoxContainer>
    </>
  );
}

export default CreateAccount;
