import styles from "./Health.module.css";
import BoxContainer from "../../components/BoxContainer/BoxContainer";
import Navbar from "../../components/Navbar/Navbar";
import HealthIcon from "../../assets/medical-sign-icon.png";
import PharmacyIcon from "../../assets/pharmacy-icon.png";
import MedicalReport from "../../assets/medical-report-icon.png";
import MedicalBag from "../../assets/medical-briefcase-icon.png";
import PawPrint from "../../assets/paw-icon.png";
import Tooth from "../../assets/dental-icon.png";
import InsuranceIcon from "../../assets/health-and-safety-color-icon.png";
import GenderIcon from "../../assets/unisex-symbol-icon.png";
import AgeIcon from "../../assets/age-icon.png";
import MicrochipIcon from "../../assets/technology-icon.png";
import ScaleIcon from "../../assets/weight-gain-icon.png";


function Health() {
  return (
    <>
      <Navbar />
      <h1 className={`${styles.header1} text-center margin-top-2`}>Health</h1>
      <BoxContainer className={`${styles.box} margin-top-2`}>
        <div className={styles["health-box"]}>
          <div className={styles["image-box"]}>
            <img src={HealthIcon} alt="health icon" />
          </div>
          <p>Health Issues</p>
        </div>
        <div className={styles["health-box"]}>
          <div className={styles["image-box"]}>
            <img src={PharmacyIcon} alt="pharmacy bottle icon"/>
          </div>
          <p>Medication:</p>
        </div>
        <div className={styles["health-box"]}>
          <div className={styles["image-box"]}>
            <img src={MedicalReport} alt="Medical clipboard icon"/>
          </div>
          <p>Checkup:</p>
        </div>
        <div className={styles["health-box"]}>
          <div className={styles["image-box"]}>
            <img src={MedicalBag} alt="Medical Bag icon"/>
          </div>
          <p>Spayed/Neutered:</p>
        </div>
        <div className={styles["health-box"]}>
          <div className={styles["image-box"]}>
            <img src={PawPrint} alt="pet paw icon"/>
          </div>
          <p>Nails</p>
        </div>
        <div className={styles["health-box"]}>
          <div className={styles["image-box"]}>
            <img src={Tooth} alt="tooth icon"/>
          </div>
          <p>Teeth</p>
        </div>
        <div className={styles["health-box"]}>
          <div className={styles["image-box"]}>
            <img src={InsuranceIcon} alt="medical insurance icon"/>
          </div>
          <p>Pet Insurance</p>
        </div>
        <div className={styles["health-box"]}>
          <div className={styles["image-box"]}>
            <img src={GenderIcon} alt="gender icon"/>
          </div>
          <p>Gender</p>
        </div>
        <div className={styles["health-box"]}>
          <div className={styles["image-box"]}>
            <img src={AgeIcon} alt="age icon"/>
          </div>
          <p>Age</p>
        </div>
        <div className={styles["health-box"]}>
          <div className={styles["image-box"]}>
            <img src={MicrochipIcon} alt="microchip icon"/>
          </div>
          <p>Microchiped:</p>
        </div>
        <div className={styles["health-box"]}>
          <div className={styles["image-box"]}>
            <img src={ScaleIcon} alt="weight icon"/>
          </div>
          <p>Diet:</p>
        </div>
      </BoxContainer>
    </>
  );
}

export default Health;
