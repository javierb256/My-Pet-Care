import styles from "./Appointment.module.css";
import BoxContainer from "../BoxContainer/BoxContainer";

type AppointmentDetail = {
    appointmentType:string, 
    time:string, 
    date:string, 
    address?:string, 
    city?:string, 
    state?:string, 
    zipCode?:string, 
    key?:number
}

function Appointment(appointment:AppointmentDetail){
// function Appointment(appointment:AppointmentDetail){
// function Appointment({type, time, date, address, city, state, zipCode, key}){
    return (
        <>
        <BoxContainer className={`${styles.box} margin-top-2`}>
                <h3 className={styles["appointment-header"]}>Appointment #{appointment.key}</h3>
                <div className={styles["appointment-details"]}>
                    <div className={styles["appointment-content"]}>
                        <p className={styles.label}>Type:</p><span>{appointment.appointmentType}</span>
                    </div>
                    <div className={styles["appointment-content"]}>
                        <p className={styles.label}>Time:</p><span>{appointment.time}</span>
                    </div>
                    <div className={styles["appointment-content"]}>
                        <p className={styles.label}>Date:</p><span>{appointment.date}</span>
                    </div>
                    <div className={styles["appointment-content"]}>
                        <p className={styles.label}>Location:</p><span>{appointment.address}</span>
                    </div>
                </div>

            </BoxContainer>
        </>
    )
    
}

export default Appointment;