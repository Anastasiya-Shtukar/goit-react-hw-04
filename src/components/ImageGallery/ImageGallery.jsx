import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images }) => {
  return (
    <ul>
      {images.map((image) => {
        return (
          <li key={image.id}>
            <ImageCard url={image.urls.small} alt={image.alt_descriptin} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
