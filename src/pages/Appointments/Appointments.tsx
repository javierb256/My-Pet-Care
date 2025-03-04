// import styles from "./Appointments.module.css"
import Navbar from "../../components/Navbar/Navbar"
import styles from "./Appointments.module.css";
import BoxContainer from "../../components/BoxContainer/BoxContainer";

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
}

function Appointments() {
    return (
        <>
        <Navbar />
        <h1 className={`margin-top-2 text-center ${styles.header1}`}>Appointments</h1>
        <BoxContainer className={`${styles.box} margin-top-2`}>
            <h3 className={styles["appointment-header"]}>Create New Appointment</h3>
            <form onSubmit={handleSubmit} className={styles["appointment-form"]}>
                <div>
                    <label htmlFor="type">Type:</label>
                    <select id="type" name="type" className="input">
                        <option>Vet</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="time">Time:</label>
                    <input type="time" id="time" name="time" className="input"/>
                </div>
                <div>
                    <label htmlFor="date">Date:</label>
                    <input type="date" id="date" name="date" className="input"/>
                </div>
                <div>
                    <label htmlFor="address">Address:</label>
                    <input type="text" id="address" name="address" className="input"/>
                </div>
                <div>
                    <label htmlFor="city">City:</label>
                    <input type="text" id="city" name="address" className="input"/>
                </div>
                <div className={styles["half-inputs"]}>
                    <div>
                        <label htmlFor="state">State:</label>
                        <input type="text" id="state" name="address" className="input"/>
                    </div>
                    <div>
                        <label htmlFor="zipCode">Zip Code:</label>
                        <input type="text" id="zipCode" name="address" className="input"/>
                    </div>
                </div>
                <button type="submit" className={styles.button}>Create Appointment</button>
            </form>
        </BoxContainer>
        {/* <hr className={styles.break}/> */}
        </>
    )
}

export default Appointments