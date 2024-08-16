import React ,{useEffect}from 'react';
import { useModal } from '../context/ModalContext.jsx';
import '../css_files/delete_modal.css'; 
import { connectStorageEmulator } from 'firebase/storage';

export const Modal = () => {
  const { showDeleteModal,showCompletionModal, modalTitle, modalMessage, modalConfirm, hideModal } = useModal();


    useEffect(() => {
    if (showDeleteModal || showCompletionModal) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [showDeleteModal, showCompletionModal]);

  if (!showDeleteModal && !showCompletionModal) return null;


  return (<>{
    showDeleteModal &&
   <> <div className="delete-overlay"></div>
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
    </>}

   { showCompletionModal &&
    <> <div className="delete-overlay"></div>
    <div className="delete-modal">
      <div className="delete-modal-content">
        <h2>{modalTitle}</h2>
        <p>{modalMessage}</p>
        <div className='delete-modal-buttons'>
        <button onClick={hideModal}>Close</button>
        </div>
      </div>
      </div>
    </>
   }
   </>

  );
};

