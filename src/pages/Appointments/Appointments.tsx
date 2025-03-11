import Navbar from "../../components/Navbar/Navbar";
import styles from "./Appointments.module.css";
import BoxContainer from "../../components/BoxContainer/BoxContainer";
import Appointment from "../../components/Appointment/Appointment";
import { useState } from "react";
const appointmentsArray: any = [];
let id: number = 1;

function Appointments() {
  const [appointmentForm, setAppointmentForm] = useState({
    id: id,
    appointmentType: "",
    time: "",
    date: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const appointmentProp = {
    id: appointmentForm.id,
    appointmentType: appointmentForm.appointmentType,
    time: appointmentForm.time,
    date: appointmentForm.date,
    address: appointmentForm.address,
    city: appointmentForm.city,
    state: appointmentForm.state,
    zipCode: appointmentForm.zipCode,
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    id++;
    setAppointmentForm({
      // id: appointmentsArray.length==0 ? 1 : appointmentsArray.length,
      id: id,
      appointmentType: "",
      time: "",
      date: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
    });
    appointmentsArray.push(<Appointment key={id} {...appointmentProp} />);
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
              <option value=""></option>
              <option value="vet">Checkup</option>
              <option value="dental care">Dental Care</option>
              <option value="vaccination">Vaccination</option>
              <option value="grooming">Grooming</option>
              <option value="nail trim">Nail Trim</option>
              <option value="surgery">Surgery</option>
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
      <div className={styles.appointments}>{appointmentsArray}</div>
    </>
  );
}

export default Appointments;
