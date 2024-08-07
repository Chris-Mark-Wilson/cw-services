import React ,{useEffect}from 'react';
import { useModal } from '../context/ModalContext.jsx';
import '../css_files/delete_modal.css'; // Ensure the CSS file is imported

export const Modal = () => {
  const { showDeleteModal, modalTitle, modalMessage, modalConfirm, hideModal } = useModal();


    useEffect(() => {
    if (showDeleteModal) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [showDeleteModal]);
  if (!showDeleteModal) return null;

  return (<>
    <div className="delete-overlay"></div>
    <div className="delete-modal">
      <div className="delete-modal-content">
        <h2>{modalTitle}</h2>
        <p>{modalMessage}</p>
        <div className='delete-modal-buttons'>
        <button onClick={() => { modalConfirm(); hideModal(); }}>Confirm</button>
        <button onClick={hideModal}>Cancel</button>
        </div>
      </div>
    </div>
    </>
  );
};

