import css from "./ImageCard.module.css";
const ImageCard = ({ src, alt }) => {
  return (
    <div>
      <img className={css.card} src={src} alt={alt} />
    </div>
  );
};

export default ImageCard;
