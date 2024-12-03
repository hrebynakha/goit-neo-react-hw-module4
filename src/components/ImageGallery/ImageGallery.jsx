import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images }) => {
  return (
    <ul>
      {images.map((img) => {
        <li key={img.id}>
          <ImageCard src={img.src} alt={img.alt} />
        </li>;
      })}
    </ul>
  );
};

export default ImageGallery;
