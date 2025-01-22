import styles from "./CreateAccount.module.css"

function CreateAccount(){
    return (
        <>
            <header className={`${styles["create-account-header"]}`}>
                <h1>Account Information</h1>
            </header>
        </>
    )
}

export default CreateAccount