
import React, { createContext, useState, useContext } from 'react';

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [modalConfirm, setModalConfirm] = useState(() => () => {});

  const showModal = (title, message, onConfirm) => {
    console.log('in show modal');
    setModalTitle(title);
    setModalMessage(message);
    setModalConfirm(() => onConfirm);
    setShowDeleteModal(true);
  };

  const hideModal = () => {
    setShowDeleteModal(false);
  };

  return (
    <ModalContext.Provider
      value={{
        showDeleteModal,
        modalTitle,
        modalMessage,
        modalConfirm,
        showModal,
        hideModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};