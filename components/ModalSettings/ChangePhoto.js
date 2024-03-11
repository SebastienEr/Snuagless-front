import React, { useState, useRef, useEffect } from "react";
import styles from "./ChangePhoto.module.css";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { changePhoto } from "../../reducers/user";

function ChangePhoto({ onClose, open }) {
  const [imagePicked, setImagePicked] = useState(null);
  const imageInput = useRef();
  const user = useSelector((state) => state.user.value);
  const token = useSelector((state) => state.user.value.token);
  const dispatch = useDispatch();

  const handlePickClick = () => {
    imageInput.current.click();
  };

  useEffect(() => {
    if (!open) {
    }
    setImagePicked(null);
  }, [open]);

  const changePhotoHandler = async (event) => {
    try {
      const file = event.target.files[0];
      console.log(file);
      const formData = new FormData();
      formData.append("image", file);
      const response = await fetch(
        `http://localhost:3000/users/upload/${user}`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to upload image");
      }

      const data = await response.json();
      console.log(data);
      setImagePicked(data.url);
    } catch (error) {
      console.error("Error uploading image:", error);
      // Handle the error, e.g., display a message to the user
    }
  };

  const onConfirmHandler = () => {
    onClose();
    dispatch(changePhoto(imagePicked));
    setImagePicked(null);
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {!imagePicked && !user.image && (
        <img src="/images/avatar.jpg" alt="logo" className={styles.avatar} />
      )}
      {!imagePicked && user.image && (
        <Image
          src={user.image}
          alt="The image selected by user."
          className={styles.avatar}
          width={80}
          height={80}
        />
      )}
      {imagePicked && (
        <Image
          src={imagePicked}
          alt="The image selected by user."
          className={styles.avatar}
          width={80}
          height={80}
        />
      )}
      <input
        type="file"
        accept="image/png, image/jpeg, image/jpg"
        onChange={() => changePhotoHandler()}
        id="image"
        name="image"
        ref={imageInput}
        style={{ display: "none" }}
      />
      {!imagePicked && (
        <button
          type="button"
          className={styles.button}
          onClick={() => handlePickClick()}
        >
          <span>Change Photo</span>
        </button>
      )}
      {imagePicked && (
        <div
          style={{
            display: "flex",
            width: "110%",
            justifyContent: "space-between",
          }}
        >
          <button
            type="button"
            onClick={() => onConfirmHandler()}
            className={styles.button}
          >
            <span>Confirm </span>
          </button>
          <button
            type="button"
            onClick={() => handlePickClick()}
            className={styles.buttonAlt}
          >
            <span>Pick Another Image</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default ChangePhoto;
