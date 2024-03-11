import { blockBody } from "../scripts";
import "../styles/components/modal.scss";

interface Props {
  isOpened: boolean;
  setOpenedState: (state: boolean) => void;
  children;
}

const Modal = ({ isOpened, setOpenedState, children }: Props) => {
  if (isOpened) blockBody(isOpened);
  return (
    <>
      {isOpened ? (
        <div className="modal-background" onClick={() => setOpenedState(false)}>
          <div className="modal">
            <button
              style={{ backgroundColor: "transparent" }}
              onClick={() => setOpenedState(false)}
              className="close-button"
            >
              <i className="fa fa-times fa-2x"></i>
            </button>
            <div className="modal-content">{children}</div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Modal;
