import { useState } from 'react';

interface UseModalStateResponse {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const useModalState = (
  onCloseCallback?: () => void,
): UseModalStateResponse => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    if (onCloseCallback) {
      onCloseCallback();
    }

    setIsModalOpen(false);
  };

  return {
    isModalOpen,
    openModal,
    closeModal,
  };
};
