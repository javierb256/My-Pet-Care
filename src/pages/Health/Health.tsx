import styles from "./Health.module.css"
import BoxContainer from "../../components/BoxContainer/BoxContainer"
import Navbar from "../../components/Navbar/Navbar"

function Health(){
    return (
        <>
        <Navbar />
        <h1 className={`${styles.header1} text-center margin-top-2`}>Health</h1>
        <BoxContainer className={`${styles.box} margin-top-2`}>
            <div className={styles["health-box"]}>
                <div className={styles["image-box"]}><img /></div>
                <p>Health Issues</p>
            </div>
            <div className={styles["health-box"]}>
                <div className={styles["image-box"]}><img /></div>
                <p>Medication:</p>
            </div>
            <div className={styles["health-box"]}>
                <div className={styles["image-box"]}><img /></div>
                <p>Checkup:</p>
            </div>
            <div className={styles["health-box"]}>
                <div className={styles["image-box"]}><img /></div>
                <p>Spayed/Neutered:</p>
            </div>
            <div className={styles["health-box"]}>
                <div className={styles["image-box"]}><img /></div>
                <p>Nails</p>
            </div>
            <div className={styles["health-box"]}>
                <div className={styles["image-box"]}><img /></div>
                <p>Teeth</p>
            </div>
            <div className={styles["health-box"]}>
                <div className={styles["image-box"]}><img /></div>
                <p>Pet Insurance</p>
            </div>
            <div className={styles["health-box"]}>
                <div className={styles["image-box"]}><img /></div>
                <p>Gender</p>
            </div>
            <div className={styles["health-box"]}>
                <div className={styles["image-box"]}><img /></div>
                <p>Age</p>
            </div>
            <div className={styles["health-box"]}>
                <div className={styles["image-box"]}><img /></div>
                <p>Microchiped:</p>
            </div>
            <div className={styles["health-box"]}>
                <div className={styles["image-box"]}><img /></div>
                <p>Diet:</p>
            </div>
        </BoxContainer>
        </>
    )
}

export default Health