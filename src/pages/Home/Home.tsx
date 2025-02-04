import Navbar from "../../components/Navbar/Navbar";
import styles from "./Home.module.css";
import tempPetPicture from "../../assets/My Pet Care Logo Blue.png";
import petKennel from "../../assets/dog-crate-icon-white.png";
import genderIcon from "../../assets/unisex-symbol-icon-white.png";
import weightIcon from "../../assets/lbs-measure-weight-icon(1).png";
import ageIcon from "../../assets/age-icon-white.png";

function Home() {
  return (
    <>
      <Navbar />
      {/* header section */}
      <section className={styles["home-header"]}>
        <div className={styles["home-pet"]}>
          <h3>Sonic</h3>
          {/* get picture from first time login, then from database later */}
          <img src={tempPetPicture} alt="pet picture" />
        </div>
        <div className={styles["home-pet-facts"]}>
          <h3>My Pet Facts</h3>
          {/* fact container */}
          <div className={styles["pet-fact-container"]}>
            <div className={`${styles["icon-container"]} ${styles["blue-background"]}`}>
              <img src={petKennel} alt="pet kennel" />
            </div>
            <div>
              <p>Species</p>
              <p>name</p>
            </div>
          </div>
          {/* fact container */}
          <div className={styles["pet-fact-container"]}>
            <div className={`${styles["icon-container"]} ${styles["red-background"]}`}>
              <img src={genderIcon} alt="gender icon" />
            </div>
            <div>
              <p>Gender</p>
              <p>name</p>
            </div>
          </div>
          {/* fact container */}
          <div className={styles["pet-fact-container"]}>
            <div className={`${styles["icon-container"]} ${styles["green-background"]}`}>
              <img src={weightIcon} alt="weight icon" />
            </div>
            <div>
              <p>Weight</p>
              <p>name</p>
            </div>
          </div>
          {/* fact container */}
          <div className={styles["pet-fact-container"]}>
            <div className={`${styles["icon-container"]} ${styles["purple-background"]}`}>
              <img src={ageIcon} alt="age icon" />
            </div>
            <div>
              <p>Age</p>
              <p>name</p>
            </div>
          </div>
        </div>
      </section>
      {/* weight chart */}
      <section></section>
      {/* calendar chart */}
      <section></section>
      {/* Notes chart */}
      <section></section>
    </>
  );
}

export default Home;
