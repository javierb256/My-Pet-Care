// import styles from "./Confirmation.module.css"
import BoxContainer from "../../components/BoxContainer/BoxContainer";
import LinkButton from "../../components/LinkButton/LinkButton";
import styles from "./Confirmation.module.css";

function Confirmation() {
  return (
    <div className={styles.container}>
      <BoxContainer className={styles.box}>
        <p>
          Thank you for creating an account. An email confirmation was sent to
          your email. Please click the link in the email to login.
        </p>
        <LinkButton to="/" color="scarlet">
          Go back to Login
        </LinkButton>
      </BoxContainer>
    </div>
  );
}

export default Confirmation;
