import Navbar from "../../components/Navbar/Navbar";
import styles from "./Home.module.css";
import tempPetPicture from "../../assets/My Pet Care Logo Blue.png";
import petKennel from "../../assets/dog-crate-icon-white.png";
import genderIcon from "../../assets/unisex-symbol-icon-white.png";
import weightIcon from "../../assets/lbs-measure-weight-icon(1).png";
import ageIcon from "../../assets/age-icon-white.png";
import pawPrint from "../../assets/paw-icon-2.png";
import calendarIcon from "../../assets/calendar-regular.svg"
import stickyNote from "../../assets/sticky-note-white.svg"
import BoxContainer from "../../components/BoxContainer/BoxContainer";
import { useState } from "react";

function Home() {
  const [petPicture] = useState(tempPetPicture)
  return (
    <>
      <Navbar />
      {/* header section */}
      <section className={styles["home-header"]}>
        <img className={styles["background-image"]} src={pawPrint} alt="pet type icon" />
        <div className={styles["home-pet"]}>
          <h3>Sonic</h3>
          {/* get picture from first time login, then from database later */}
          <img src={petPicture} alt="pet picture" />
        </div>
        <div className={styles["home-pet-facts"]}>
          <h3>My Pet Facts</h3>
          {/* fact container */}
          <div className={styles["pet-fact-flex"]}>
            <div className={styles["pet-fact-container"]}>
              <div className={`${styles["icon-container"]} ${styles["blue-background"]}`}>
                <img src={petKennel} alt="pet kennel" />
              </div>
              <div className={styles["fact-details"]}>
                <p>Species</p>
                <p>name</p>
              </div>
            </div>
            {/* fact container */}
            <div className={styles["pet-fact-container"]}>
              <div className={`${styles["icon-container"]} ${styles["red-background"]}`}>
                <img src={genderIcon} alt="gender icon" />
              </div>
              <div className={styles["fact-details"]}>
                <p>Gender</p>
                <p>name</p>
              </div>
            </div>
            {/* fact container */}
            <div className={styles["pet-fact-container"]}>
              <div className={`${styles["icon-container"]} ${styles["green-background"]}`}>
                <img src={weightIcon} alt="weight icon" />
              </div>
              <div className={styles["fact-details"]}>
                <p>Weight</p>
                <p>name</p>
              </div>
            </div>
            {/* fact container */}
            <div className={styles["pet-fact-container"]}>
              <div className={`${styles["icon-container"]} ${styles["purple-background"]}`}>
                <img src={ageIcon} alt="age icon" />
              </div>
              <div className={styles["fact-details"]}>
                <p>Age</p>
                <p>name</p>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* weight chart */}
      <section className={styles["home-weight"]}>
        <h2>Weight Chart <span><img src={weightIcon} alt="weight icon"/></span></h2>
      </section>
      {/* calendar chart */}
      <section>
        <h2>Calendar <span><img src={calendarIcon} alt="calendar icon"/></span></h2>
      </section>
      {/* Notes chart */}
      <section>
        <h2>Notes <span><img src={stickyNote} alt="sticky note icon"/></span></h2>
        <BoxContainer className={`${styles.box} margin-top-2`}>
          <h3></h3>
        </BoxContainer>
      </section>
    </>
  );
}

export default Home;
