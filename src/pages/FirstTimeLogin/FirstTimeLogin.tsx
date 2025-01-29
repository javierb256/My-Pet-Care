import styles from "./FirstTimeLogin.module.css"
import BoxContainer from "../../components/BoxContainer/BoxContainer"
import LinkButton from "../../components/LinkButton/LinkButton"

function FirstTimeLogin(){
    return (
        <>
        <header className={`${styles["header"]} blue-background`}>
            <h1 className="text-center">Thank You for using My Pet Care. To Start please add your first pet!</h1>
            <BoxContainer className={`${styles.box} grey-filler`}><p>Click to add image</p></BoxContainer>
        </header>
        <section>
            <BoxContainer className={styles["first-pet"]}>
                <div>
                    <label htmlFor="pet-name" className="label">Pet Name</label>
                    <input id="pet-name" name="pet-name" type="text" className="input"></input>
                </div>
                <div className={styles["radio"]}>
                    <legend>Gender</legend>
                    <div>
                        <input type="radio" id="male" name="gender"/>
                        <label className="label" htmlFor="male">Male</label>
                    </div>
                    <div>
                        <input type="radio" id="female" name="gender"/>
                        <label className="label" htmlFor="female">Female</label>
                    </div>
                </div>
                <div className={styles["pet-type"]}>
                    <label htmlFor="pet-type">Select Pet Species</label>
                    <select className={styles.select}>
                        <option value="">Species</option>
                        <option value="dog">Dog</option>
                        <option value="cat">Cat</option>
                        <option value="bird">Bird</option>
                        <option value="fish">Fish</option>
                    </select>
                    {/* select menu */}
                </div>
                <LinkButton to="../home" color="scarlet">Add New Pet</LinkButton>
            </BoxContainer>
        </section>
        </>
    )
}

export default FirstTimeLogin