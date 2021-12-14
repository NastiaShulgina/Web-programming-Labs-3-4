import { useParams } from "react-router";
import CookDetailsCSS from "./CookDetails.module.css";
import { useState, useEffect } from "react";
import CookInfo from "./CookInfo";
import CookPhoto from "./CookPhoto";
import axios from "axios";
import { getCookies, getCook } from "../features/catchData";

const CookDetails = () => {
  const [cooks, SetTheCooks] = useState([]);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    getCook(parseInt(id)).then((cook) => SetTheCooks([cook]));
  }, []);
  useEffect(() => {
    setPhotos(
      cooks.map((chef) => createImage(chef.image, chef.name, chef.id))
    );
  }, [cooks]);
  const createImage = function (src, title, id) {
    const photo = new Image();
    photo.src = src;
    photo.alt = title;
    photo.id = id;
    return photo;
  };

  const [photos, setPhotos] = useState([]);
  console.log(photos);

  const ident = parseInt(id);

  return (
    <div className={CookDetailsCSS.information}>
      <CookInfo cooks={cooks.filter((cook) => parseInt(cook.id) === ident)} />
      <CookPhoto
        photos={photos.filter((photo) => parseInt(photo.id) === ident)}
      />
    </div>
  );
};

export default CookDetails;
