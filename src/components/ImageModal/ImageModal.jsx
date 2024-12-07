import Modal from "react-modal";
import { AiFillHeart } from "react-icons/ai";
import StatisticItem from "../StatisticItem/StatisticItem";
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
    color: "black",
    WebkitOverflowScrolling: "touch",
    borderRadius: "4px",
    outline: "none",
  },
};

Modal.setAppElement("#root");

const ImageModal = ({
  modalIsOpen,
  closeModal,
  afterOpenModal,
  infoImg,
  img,
}) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      onAfterOpen={afterOpenModal}
      style={customStyles}
      contentLabel="Image modal"
    >
      {img && (
        <>
          <img
            className={css.img}
            src={img.urls.regular}
            alt={img.alt_description}
          />
          <div className={css.info} ref={infoImg}>
            <div className={css.wrap}>
              <p className={css.title}>
                {img.user.name && img.user.name + ", "}
                {img.user.location && img.user.location + ", "}
                {img.created_at.substring(0, 4)}
              </p>
              <ul className={css.statistics}>
                <li>
                  <StatisticItem icon={AiFillHeart} value={img.likes} />
                </li>
              </ul>
            </div>
            <p className={css.description}>
              {img.description || img.alt_description}
            </p>
          </div>
        </>
      )}
    </Modal>
  );
};

export default ImageModal;
