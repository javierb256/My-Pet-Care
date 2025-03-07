// import styles from "./Appointments.module.css"
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Appointments.module.css";
import BoxContainer from "../../components/BoxContainer/BoxContainer";
// import Appointment from "../../components/Appointment/Appointment";
import { useState } from "react";

function Appointments() {

  const [appointmentForm, setAppointmentForm] = useState({
    appointmentType: "",
    time: "",
    date: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAppointmentForm({
      appointmentType: "",
      time: "",
      date: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
    });
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setAppointmentForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <Navbar />
      <h1 className={`margin-top-2 text-center ${styles.header1}`}>
        Appointments
      </h1>
      <BoxContainer className={`${styles.box} margin-top-2`}>
        <h3 className={styles["appointment-header"]}>Create New Appointment</h3>
        <form onSubmit={handleSubmit} className={styles["appointment-form"]}>
          <div>
            <label htmlFor="appointmentType">Type:</label>
            <select
              id="appointmentType"
              name="appointmentType"
              className="input"
              value={appointmentForm.appointmentType}
              onChange={handleChange}
            >
              <option value="" ></option>
              <option value="vet">Vet</option>
              <option value="dentist">Dentist</option>
            </select>
          </div>
          <div>
            <label htmlFor="time">Time:</label>
            <input
              type="time"
              id="time"
              name="time"
              className="input"
              value={appointmentForm.time}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              name="date"
              className="input"
              value={appointmentForm.date}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              className="input"
              value={appointmentForm.address}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="city">City:</label>
            <input
              type="text"
              id="city"
              name="city"
              className="input"
              value={appointmentForm.city}
              onChange={handleChange}
            />
          </div>
          <div className={styles["half-inputs"]}>
            <div>
              <label htmlFor="state">State:</label>
              <input
                type="text"
                id="state"
                name="state"
                className="input"
                value={appointmentForm.state}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="zipCode">Zip Code:</label>
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                className="input"
                value={appointmentForm.zipCode}
                onChange={handleChange}
              />
            </div>
          </div>
          <button type="submit" className={styles.button}>
            Create Appointment
          </button>
        </form>
      </BoxContainer>
      <hr className={styles.break} />
      <div className={styles.appointments}>
        {/* using a map populate page with an appointment every time the create appointment form is submitted */}
      </div>
    </>
  );
}

export default Appointments;
