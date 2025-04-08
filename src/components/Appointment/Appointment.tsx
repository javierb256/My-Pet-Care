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
  appointmentNumber?: number;
  deleteAppointment: any;
};

function Appointment(props: AppointmentDetail) {
  const {
    id,
    appointmentType,
    time,
    date,
    address,
    city,
    state,
    zipCode,
    deleteAppointment,
  } = props;
  return (
    <>
      <BoxContainer className={`${styles.box} margin-top-2`}>
        <header className={styles["header"]}>
          <h3 className={styles["appointment-header"]}>
            Appointment #{id + 1}
          </h3>
          <button onClick={() => deleteAppointment(id)}>x</button>
        </header>
        <div className={styles["appointment-details"]}>
          <div className={styles["appointment-content"]}>
            <p className={styles.label}>Type:</p>
            <span>{appointmentType}</span>
          </div>
          <div className={styles["appointment-content"]}>
            <p className={styles.label}>Time:</p>
            <span>{time}</span>
          </div>
          <div className={styles["appointment-content"]}>
            <p className={styles.label}>Date:</p>
            <span>{date}</span>
          </div>
          <div className={styles["appointment-content"]}>
            <p className={styles.label}>Location:</p>
            <span>{address}</span>
          </div>
          {city && (
            <div className={styles["appointment-content"]}>
              <p className={styles.label}>City:</p>
              <span>{city}</span>
            </div>
          )}
          {state && (
            <div className={styles["appointment-content"]}>
              <p className={styles.label}>State:</p>
              <span>{state}</span>
            </div>
          )}
          {zipCode && (
            <div className={styles["appointment-content"]}>
              <p className={styles.label}>ZipCode:</p>
              <span>{zipCode}</span>
            </div>
          )}
        </div>
      </BoxContainer>
    </>
  );
}

export default Appointment;
