import styles from "./Appointment.module.css";
import BoxContainer from "../BoxContainer/BoxContainer";

type AppointmentDetail = {
  id: number;
  appointmentType: string;
  time: string;
  date: string;
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
};

function Appointment(appointment: AppointmentDetail) {
  return (
    <>
      <BoxContainer className={`${styles.box} margin-top-2`}>
        <header className={styles["header"]}>
          <h3 className={styles["appointment-header"]}>
            Appointment #{appointment.id}
          </h3>
          <button>x</button>
        </header>
        <div className={styles["appointment-details"]}>
          <div className={styles["appointment-content"]}>
            <p className={styles.label}>Type:</p>
            <span>{appointment.appointmentType}</span>
          </div>
          <div className={styles["appointment-content"]}>
            <p className={styles.label}>Time:</p>
            <span>{appointment.time}</span>
          </div>
          <div className={styles["appointment-content"]}>
            <p className={styles.label}>Date:</p>
            <span>{appointment.date}</span>
          </div>
          <div className={styles["appointment-content"]}>
            <p className={styles.label}>Location:</p>
            <span>{appointment.address}</span>
          </div>
          {appointment.city && (
            <div className={styles["appointment-content"]}>
              <p className={styles.label}>City:</p>
              <span>{appointment.city}</span>
            </div>
          )}
          {appointment.state && (
            <div className={styles["appointment-content"]}>
              <p className={styles.label}>State:</p>
              <span>{appointment.state}</span>
            </div>
          )}
          {appointment.zipCode && (
            <div className={styles["appointment-content"]}>
              <p className={styles.label}>ZipCode:</p>
              <span>{appointment.zipCode}</span>
            </div>
          )}
        </div>
      </BoxContainer>
    </>
  );
}

export default Appointment;
