import styles from "./FirstTimeLogin.module.css";
import BoxContainer from "../../components/BoxContainer/BoxContainer";
import LinkButton from "../../components/LinkButton/LinkButton";
import BackButton from "../../components/BackButton/BackButton";
import { useState, useRef } from "react";

function FirstTimeLogin() {
  const [petImage, setPetImage] = useState("");
  const imageUploadRef = useRef<HTMLInputElement>(null);

  const showUploadedImage = async () => {
    if (imageUploadRef.current !== null) {
    //.files will give an array of files that are uploaded by the user
    //since only one is sent we use the first element [0]
      const petImageFile = imageUploadRef.current.files![0];
      const cachedURL = URL.createObjectURL(petImageFile);
      setPetImage(cachedURL);
    }
  };

  return (
    <>
      <header className={`${styles["header"]} blue-background`}>
        <h1 className="text-center">
          Thank You for using My Pet Care. To Start please add your first pet!
        </h1>
        {petImage === "" ? null : (
          <BoxContainer className={styles["pet-picture"]}>
            <img src={petImage} />
          </BoxContainer>
        )}
        <div className={styles["pet-picture-upload"]}>
          <label htmlFor="pet-picture-upload">Choose an image: </label>
          <input
            type="file"
            id="pet-picture-upload"
            name="pet-picture-upload"
            ref={imageUploadRef}
            onChange={showUploadedImage}
          />
        </div>
      </header>
      <BackButton to="/"/>
      <section className={styles["pet-information-section"]}>
        <BoxContainer className={styles["first-pet"]}>
          <div>
            <label htmlFor="pet-name" className="label">
              Pet Name
            </label>
            <input
              id="pet-name"
              name="pet-name"
              type="text"
              className="input"
            ></input>
          </div>
          <div className={styles["radio"]}>
            <legend>Gender</legend>
            <div>
              <input type="radio" id="male" name="gender" />
              <label className="label" htmlFor="male">
                Male
              </label>
            </div>
            <div>
              <input type="radio" id="female" name="gender" />
              <label className="label" htmlFor="female">
                Female
              </label>
            </div>
          </div>
          <div className={styles["pet-type"]}>
            <label htmlFor="pet-type">Select Pet Species</label>
            <select className={styles.select}>
              <option value="">Species</option>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="bird">Bird</option>
              <option value="fish">Fish</option>
              <option value="reptile">Reptile</option>
              <option value="small-mammal">Small Mammal</option>
            </select>
          </div>
          <LinkButton to="../home" color="scarlet" >
            Add New Pet
          </LinkButton>
        </BoxContainer>
      </section>
    </>
  );
}

export default FirstTimeLogin;
