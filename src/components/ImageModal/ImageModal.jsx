import Modal from "react-modal";

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

export const ImageModal = ({
  modalIsOpen,
  afterOpenModal,
  closeModal,
  img,
  subtitle,
}) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <button onClick={closeModal}>close</button>
      <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
      {/* <img
        src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2ODM1MDh8MHwxfHNlYXJjaHwxfHxvZmZpY2V8ZW58MHx8fHwxNzMzNDMwNjEyfDA&ixlib=rb-4.0.3&q=80&w=1080"
        alt="Sla"
      /> */}
      {/* <img src={img.urls.regular} alt={img.alt_description} /> */}
    </Modal>
  );
};
