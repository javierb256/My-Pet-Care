import styles from "./AccountRecovery.module.css";
import BoxContainer from "../../components/BoxContainer/BoxContainer";
import Button from "../../components/Button/Button";
import { useState } from "react";
import BackButton from "../../components/BackButton/BackButton";

function AccountRecovery() {
  const [formSent, setFormSet] = useState(false);
  const formIsSent = () => setFormSet(true);
  return (
    <>
      <header>
        <h1 className={`${styles.header} text-center blue-background`}>
          Account Recovery
        </h1>
      </header>
      {formSent ? (
        <>
            <h2>Form is now sent</h2>
        </>
      ) : (
          <>
          <BackButton to="/" className="back"></BackButton>
          <h2 className="text-center margin-top-2">
            Please enter the email associated with your account
          </h2>
          <BoxContainer className={styles.box}>
            <div>
              <label className="label" htmlFor="email">
                Email address
              </label>
              <input className="input" type="email" name="email" id="email" />
            </div>
            <Button onClick={formIsSent}>Continue</Button>
          </BoxContainer>
        </>
      )}
    </>
  );
}

export default AccountRecovery;
