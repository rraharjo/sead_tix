import React from 'react';
import Modal from './Modal';

const ModalEditTicket = ({ isOpen, onClose, ticket, onSave }) => {
  const handleConfirmSave = () => {
    const updatedTicket = { ...ticket, sold: ticket.quota, available: 0 }; // Mark the ticket as sold out
    onSave(updatedTicket);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="bg-white rounded-12 py-30 px-30 md:py-20 md:px-20">
        <h2 className="text-30 md:text-24 fw-700">Confirm Action</h2>
        <p>Are you sure you want to mark the tickets as sold out? This action is irreversible and will permanently mark the tickets as sold out.</p>
        <div className="row y-gap-20 items-center justify-end pt-30">
          <div className="col-auto">
            <button className="button -sm -error-2 bg-red-1 text-white" onClick={handleConfirmSave}>
              Confirm
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalEditTicket;
