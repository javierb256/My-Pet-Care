import Navbar from "../../components/Navbar/Navbar";
import styles from "./Appointments.module.css";
import BoxContainer from "../../components/BoxContainer/BoxContainer";
import Appointment from "../../components/Appointment/Appointment";
import {formatDate} from "../../utilities/utils";
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

  const formatTime = (time:string) => {
    const oldTime: string[] = time.split(":")
    const hour:string = oldTime[0];
    const minute:string = oldTime[1];

    if(/00/.test(hour) == true){
      return `12:${minute} AM`      
    }

    else if(Number(hour) <12){
      return `${hour}:${minute} AM`
    }

    else if(Number(hour) == 12){
      return `${hour}:${minute} PM`
    }

    else {
      return `${Number(hour)-12}:${minute} PM`;
    }

  }

  const deleteAppointment = (removeId: number) => {
    setAppointmentsArray((prevItems: any) =>
      prevItems.filter((_: any, index: number) => index !== removeId)
    );
  };

  const appointmentProp = {
    appointmentType: appointmentForm.appointmentType,
    time: formatTime(appointmentForm.time),
    date: formatDate(appointmentForm.date),
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
              required
            >
              <option value=""></option>
              <option value="Checkup">Checkup</option>
              <option value="Dental care">Dental Care</option>
              <option value="Vaccination">Vaccination</option>
              <option value="Grooming">Grooming</option>
              <option value="Nail trim">Nail Trim</option>
              <option value="Surgery">Surgery</option>
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
              required
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
              required
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
                minLength={6}
                maxLength={6}
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
