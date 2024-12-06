import Modal from "react-modal";

import css from "./ImageModal.module.css";

const customStyles = {
  content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    color: "red",
    WebkitOverflowScrolling: "touch",
    borderRadius: "4px",
    outline: "none",
  },
};

Modal.setAppElement("#root");

const ImageModal = ({ modalIsOpen, closeModal, img = null }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Image modal"
    >
      {img && (
        <img
          className={css.img}
          src={img.urls.regular}
          alt={img.alt_description}
        />
      )}
    </Modal>
  );
};

export default ImageModal;
