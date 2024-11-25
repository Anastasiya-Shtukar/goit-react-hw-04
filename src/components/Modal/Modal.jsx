import css from "./Modal.module.css";
import Modal from "react-modal";
import { IoIosCloseCircleOutline } from "react-icons/io";

const ImageModal = ({ image, onRequestClose, isOpen }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
      overlayClassName={css.modal}
      className={css.modalContent}
    >
      <div className={css.modalWindow}>
        <button type="submit" onClick={onRequestClose} className={css.button}>
          <IoIosCloseCircleOutline className={css.icon} />
        </button>
        <img
          src={image.urls.regular}
          alt={image.alt_description}
          className={css.image}
        />
      </div>
    </Modal>
  );
};

export default ImageModal;
