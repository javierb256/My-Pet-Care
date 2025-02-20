import styles from "./FirstTimeLogin.module.css";
import BoxContainer from "../../components/BoxContainer/BoxContainer";
import BackButton from "../../components/BackButton/BackButton";
import { useState, useRef } from "react";
import { useNavigate } from "react-router";

function FirstTimeLogin() {
  const [petImage, setPetImage] = useState("");
  const [petName, setPetName] = useState("Pet Name");
  const [imageUrl, setImageUrl] = useState("");
  const [gender, setGender] = useState("");
  const [species, setSpecies] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
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
  };

  const selectWeight = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWeight(event.target.value)
  }

  const selectAge = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAge(event.target.value);
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate("/home", {
      state: {
        name: petName,
        imageUrl: imageUrl,
        gender: gender,
        species: species,
        weight: weight,
        age: age,
      },
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
          <form onSubmit={handleSubmit} className={styles["my-pet-form"]}>
            <div>
              <label htmlFor="pet-name" className={`${styles.label}`}>
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
              <label className={styles.label} htmlFor="gender">Gender</label>
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
            <div>
              <label htmlFor="pet-type" className={styles.label}>
                Select Pet Species
              </label>
              <select
                className={styles.select}
                id="pet-type"
                name="pet-type"
                onChange={speciesSelect}
              >
                <option value="">Species</option>
                <option value="Dog">Dog</option>
                <option value="Cat">Cat</option>
                <option value="Bird">Bird</option>
                <option value="Fish">Fish</option>
                <option value="Reptile">Reptile</option>
                <option value="Small Mammal">Small Mammal</option>
              </select>
            </div>
            <div>
              <label className={styles.label} htmlFor="weight">Weight (in lbs)</label>
              <input type="number" name="weight" id="weight" min="0" max="200" onChange={selectWeight}/>
            </div>
            <div>
              <label className={styles.label} htmlFor="age">
                Age
              </label>
              <input type="number" name="age" id="age" min="0" max="50" onChange={selectAge}/>
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
