import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className={css.gallery}>
      {images.map((image) => {
        return (
          <li key={image.id} className={css.imageLi}>
            <ImageCard
              url={image.urls.small}
              alt={image.alt_description}
              openMadal={openModal}
              image={image}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
