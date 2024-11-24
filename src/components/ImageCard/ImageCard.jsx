import css from "./ImageCard.module.css";

const ImageCard = ({ url, alt }) => {
  return (
    <div>
      <img src={url} alt={alt} />
    </div>
  );
};

export default ImageCard;
