import Navbar from "../../components/Navbar/Navbar";
import styles from "./Home.module.css";
import tempPetPicture from "../../assets/My Pet Care Logo Blue.png";
import petKennel from "../../assets/dog-crate-icon-white.png";
import genderIcon from "../../assets/unisex-symbol-icon-white.png";
import weightIcon from "../../assets/lbs-measure-weight-icon(1).png";
import ageIcon from "../../assets/age-icon-white.png";
import pawPrint from "../../assets/paw-icon-2.png";
import calendarIcon from "../../assets/calendar-regular.svg";
import stickyNote from "../../assets/sticky-note-white.svg";
import BoxContainer from "../../components/BoxContainer/BoxContainer";
import WeightChart from "../../components/WeightChart/WeightChart";
import { useLocation } from "react-router";
import { useState } from "react";

function Home() {
  const location = useLocation();
  const petName = location.state ? location.state.name : "";
  const imgUrl = location.state ? location.state.imageUrl : "";
  const gender = location.state ? location.state.gender : "";
  const species = location.state ? location.state.species : "";
  const weight = location.state ? location.state.weight : "";
  const age = location.state ? location.state.age : "";
  const [weightDataForm, setWeightDataForm] = useState({
    weight: "",
    date: "",
  });
  const [dataArray, setDataArray] = useState([]);

  //function to pass all chart data collected from form
  const handleChartDataSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDataArray((prevItems: any) => {
      //format date into Date object to allow sorting
      const newDate = new Date(weightDataForm.date);
      //chart uses data in the form [date, value]
      const newData: any = [...prevItems, [newDate, weightDataForm.weight]];
      return newData;
    });

    setWeightDataForm({
      weight: "",
      date: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setWeightDataForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <Navbar />
      {/* header section */}
      <section className={`${styles["home-header"]} ${styles["home-section"]}`}>
        <img
          className={styles["background-image"]}
          src={pawPrint}
          alt="pet type icon"
        />
        <div className={styles["home-pet"]}>
          <h3>{petName === "" ? "Pet Name" : petName}</h3>
          {/* get picture from first time login, then from database later */}
          {/* <img src={petPicture} alt="pet picture" /> */}
          <img
            src={imgUrl === "" ? tempPetPicture : imgUrl}
            alt="pet picture"
          />
        </div>
        <div className={styles["home-pet-facts"]}>
          <h3>My Pet Facts</h3>
          {/* fact container */}
          <div className={styles["pet-fact-flex"]}>
            <div className={styles["pet-fact-container"]}>
              <div
                className={`${styles["icon-container"]} ${styles["blue-background"]}`}
              >
                <img src={petKennel} alt="pet kennel" />
              </div>
              <div className={styles["fact-details"]}>
                <p>Species</p>
                <p>{species}</p>
              </div>
            </div>
            {/* fact container */}
            <div className={styles["pet-fact-container"]}>
              <div
                className={`${styles["icon-container"]} ${styles["red-background"]}`}
              >
                <img src={genderIcon} alt="gender icon" />
              </div>
              <div className={styles["fact-details"]}>
                <p>Gender</p>
                <p>{gender}</p>
              </div>
            </div>
            {/* fact container */}
            <div className={styles["pet-fact-container"]}>
              <div
                className={`${styles["icon-container"]} ${styles["green-background"]}`}
              >
                <img src={weightIcon} alt="weight icon" />
              </div>
              <div className={styles["fact-details"]}>
                <p>Weight</p>
                {weight == "" ? <p></p> : <p>{weight} lbs</p>}
              </div>
            </div>
            {/* fact container */}
            <div className={styles["pet-fact-container"]}>
              <div
                className={`${styles["icon-container"]} ${styles["purple-background"]}`}
              >
                <img src={ageIcon} alt="age icon" />
              </div>
              <div className={styles["fact-details"]}>
                <p>Age</p>
                <p>{age}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* weight chart */}
      <section className={`${styles["home-weight"]} ${styles["home-section"]}`}>
        <h2 className={styles["home"]}>
          Weight Chart{" "}
          <span>
            <img src={weightIcon} alt="weight icon" />
          </span>
        </h2>
        <div className={styles["chart-container"]}>
          <WeightChart data={dataArray} petName={petName}/>

          <form
            className={styles["new-weight-container"]}
            onSubmit={handleChartDataSubmit}
          >
            <label htmlFor="weight">
              Enter Pet Weight (lbs)
              <input
                type="number"
                id="weight"
                name="weight"
                // value={petWeight}
                value={weightDataForm.weight}
                onChange={handleChange}
                min={1}
                max={200}
              />
            </label>

            <label htmlFor="date">
              Date
              <input
                type="date"
                id="date"
                name="date"
                value={weightDataForm.date}
                onChange={handleChange}
              />
            </label>
            <button className="button" type="submit">
              Add Weight
            </button>
          </form>
        </div>
      </section>
      {/* calendar chart */}
      <section className={styles["home-section"]}>
        <h2 className={styles["home"]}>
          Calendar{" "}
          <span>
            <img src={calendarIcon} alt="calendar icon" />
          </span>
        </h2>
      </section>
      {/* Notes chart */}
      <section className={styles["home-section"]}>
        <h2 className={styles["home"]}>
          Notes{" "}
          <span>
            <img src={stickyNote} alt="sticky note icon" />
          </span>
        </h2>
        <BoxContainer className={`${styles.box} margin-top-2`}>
          <h3></h3>
        </BoxContainer>
      </section>
    </>
  );
}

export default Home;
