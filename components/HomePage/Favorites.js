import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import styles from "../HomePage/Settings.module.css";

function FavoriteModal() {
  const user = useSelector((state) => state.user.value);
  const [favoritesMusics, setFavoritesMusics] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/users/favorites/${user.username}`)
      .then((res) => res.json())
      .then((data) => {
        setFavoritesMusics(data.favoriteMusics);
      });
  }, [user.username]);

  const handleDelete = (index) => {
    // Code to delete the song from favoritesMusics array
    // You need to implement this function according to your application logic
  };

  const addToFavorites = (music) => {
    // Check if the title already exists in favoritesMusics
    if (!favoritesMusics.some((favorite) => favorite.title === music.title)) {
      setFavoritesMusics((prevFavorites) => [...prevFavorites, music]);
    }
  };

  return (
    <div className={styles.settingsBox}>
      <h2>Favorite Songs</h2>
      {/* Render favorite songs */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          height: "100%",
          overflow: "auto",
          gap: "2%",
        }}
      >
        {!!favoritesMusics.length ? (
          favoritesMusics.map((music, index) => (
            <div key={index} style={{ textAlign: "center", width: "32%" }}>
              <img
                src={music.cover}
                style={{ width: "50px", height: "50px" }}
                alt="Cover"
              />
              <h5 style={{ margin: 0 }}>{music.title} </h5>
              <FontAwesomeIcon
                icon={faTrash}
                onClick={() => handleDelete(index)}
              />
            </div>
          ))
        ) : (
          <p>No favorite songs found</p>
        )}
      </div>
    </div>
  );
}

export default FavoriteModal;
