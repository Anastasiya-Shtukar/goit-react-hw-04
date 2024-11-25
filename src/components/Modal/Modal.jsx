import css from "./Modal.module.css";
import Modal from "react-modal";
import { IoIosCloseCircleOutline } from "react-icons/io";

const ImageModal = ({ image, onRequestClose, isOpen }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} ariaHideApp={false}>
      <button type="submit" onClick={onRequestClose}>
        <IoIosCloseCircleOutline />
      </button>
      <img
        src={image.urls.regular}
        alt={image.alt_description}
        className={css.image}
      />
    </Modal>
  );
};

export default ImageModal;
