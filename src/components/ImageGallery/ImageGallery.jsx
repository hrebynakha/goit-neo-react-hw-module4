import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className={css.gallery}>
      {images.map((img, i) => {
        return (
          <li key={img.id}>
            <ImageCard
              src={img.urls.small}
              alt={img.alt_description}
              onClick={() => openModal(i)}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
