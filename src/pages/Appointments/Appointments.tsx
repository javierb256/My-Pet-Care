import Navbar from "../../components/Navbar/Navbar";
import styles from "./Appointments.module.css";
import BoxContainer from "../../components/BoxContainer/BoxContainer";
import Appointment from "../../components/Appointment/Appointment";
import { useState } from "react";
import uuid from "react-uuid";

function Appointments() {
  const [appointmentsArray, setAppointmentsArray] = useState<any>([]);
  const [appointmentForm, setAppointmentForm] = useState({

    appointmentType: "",
    time: "",
    date: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const deleteAppointment = (removeId: number) => {
    setAppointmentsArray((prevItems: any) =>
      prevItems.filter((_: any, index: number) => index !== removeId)
    );
  };

  const appointmentProp = {
    appointmentType: appointmentForm.appointmentType,
    time: appointmentForm.time,
    date: appointmentForm.date,
    address: appointmentForm.address,
    city: appointmentForm.city,
    state: appointmentForm.state,
    zipCode: appointmentForm.zipCode,
    deleteAppointment: deleteAppointment,
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAppointmentsArray((prevItems: any) => {
      const newAppointment: any = [...prevItems, appointmentProp];
      return newAppointment;
    });
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
              <option value=""></option>
              <option value="checkup">Checkup</option>
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

      <div className={styles.appointments}>
        {appointmentsArray.map((appointment: any, index: number) => {
          const key = uuid();
          return (
            <Appointment
              key={key}
              id={index}
              {...appointment}
            />
          );
        })}
      </div>
    </>
  );
}

export default Appointments;
