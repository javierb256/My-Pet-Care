import styles from "./FirstTimeLogin.module.css";
import BoxContainer from "../../components/BoxContainer/BoxContainer";
import BackButton from "../../components/BackButton/BackButton";
import { useState, useRef } from "react";
import { useNavigate } from "react-router";

function FirstTimeLogin() {
  const [petImage, setPetImage] = useState("");
  const [petName, setPetName] = useState("Pet Name");
  const [imageUrl, setImageUrl] = useState("");
  const [gender, setGender] = useState("Male");
  const [species, setSpecies] = useState("");
  const imageUploadRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const showUploadedImage = async () => {
    if (imageUploadRef.current !== null) {
      //.files will give an array of files that are uploaded by the user
      //since only one is sent we use the first element [0]
      const petImageFile = imageUploadRef.current.files![0];
      const cachedURL = URL.createObjectURL(petImageFile);
      setPetImage(cachedURL);
      setImageUrl(cachedURL);
    }
  };

  const setPet = () => {
    if (nameRef.current !== null) {
      setPetName(nameRef.current!.value);
    }
  };

  const onGenderSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGender(event.target.value);
  };

  const speciesSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSpecies(event.target.value);
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate("/home", {
      state: { name: petName, imageUrl: imageUrl, gender: gender, species: species },
    });
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
      <BackButton to="/" />
      <section className={styles["pet-information-section"]}>
        <BoxContainer className={styles["first-pet"]}>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="pet-name" className="label">
                Pet Name
              </label>
              <input
                id="pet-name"
                name="pet-name"
                type="text"
                className="input"
                ref={nameRef}
              ></input>
            </div>
            <div className={styles["radio"]}>
              <legend>Gender</legend>
              <div>
                <input
                  onChange={onGenderSelect}
                  type="radio"
                  id="male"
                  name="gender"
                  value="Male"
                  checked={gender === "Male"}
                />
                <label className="label" htmlFor="male">
                  Male
                </label>
              </div>
              <div>
                <input
                  onChange={onGenderSelect}
                  type="radio"
                  id="female"
                  name="gender"
                  value="Female"
                  checked={gender === "Female"}
                />
                <label className="label" htmlFor="female">
                  Female
                </label>
              </div>
            </div>
            <div className={styles["pet-type"]}>
              <label htmlFor="pet-type">Select Pet Species</label>
              <select className={styles.select} onChange={speciesSelect}>
                <option value="">Species</option>
                <option value="Dog">Dog</option>
                <option value="Cat">Cat</option>
                <option value="Bird">Bird</option>
                <option value="Fish">Fish</option>
                <option value="Reptile">Reptile</option>
                <option value="Small Mammal">Small Mammal</option>
              </select>
            </div>
            <button className={styles.button} onClick={setPet} type="submit">
              Submit
            </button>
          </form>
        </BoxContainer>
      </section>
    </>
  );
}

export default FirstTimeLogin;
