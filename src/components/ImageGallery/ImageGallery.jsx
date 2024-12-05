import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
const ImageGallery = ({ images }) => {
  return (
    <ul className={css.gallery}>
      {images.map((img) => {
        return (
          <li key={img.id}>
            <ImageCard src={img.urls.small} alt={img.alt_description} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
