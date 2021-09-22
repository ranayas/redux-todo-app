import Modal from "../Modal";
import "./CenteredModal.css";

const CenterdModal = ({children}) => {
  return (
    <Modal>
      <div className="centered-modal">
        {children}
      </div>
    </Modal>
  );
};

export default CenterdModal;
