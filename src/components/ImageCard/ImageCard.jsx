import css from "./ImageCard.module.css";

const ImageCard = ({ url, alt, openModal, image }) => {
  const hendleClick = () => {
    openModal(image);
  };

  return (
    <div onClick={hendleClick}>
      <img src={url} alt={alt} className={css.image} />
    </div>
  );
};

export default ImageCard;
