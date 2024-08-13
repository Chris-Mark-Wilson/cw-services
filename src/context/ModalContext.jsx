
import React, { createContext, useState, useContext } from 'react';

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [modalConfirm, setModalConfirm] = useState(() => () => {});

  const showModalDelete = (title, message, onConfirm) => {
    console.log('in show modal');
    setModalTitle(title);
    setModalMessage(message);
    setModalConfirm(() => onConfirm);
    setShowDeleteModal(true);
  };

  const showModalComplete = (title, message) => {
    setModalTitle(title);
    setModalMessage(message);
    setShowCompletionModal(true);
   
  };

  const hideModal = () => {
    setShowDeleteModal(false);
    setShowCompletionModal(false);
  };

  return (
    <ModalContext.Provider
      value={{
        showCompletionModal,
        showDeleteModal,
        modalTitle,
        modalMessage,
        modalConfirm,
        showModalDelete,
        showModalComplete,
        hideModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};