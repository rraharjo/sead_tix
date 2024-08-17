import React from 'react';
import Modal from './Modal';

const ModalDeleteBooking = ({ isOpen, onClose, onDelete }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="bg-white rounded-12 py-30 px-30 md:py-20 md:px-20">
        <h2 className="text-30 md:text-24 fw-700">Delete Booking</h2>
        <p>Are you sure you want to delete this booking?</p>
        <div className="d-flex justify-end pt-30">
          <button className="button -sm -dark-1 bg-accent-1 text-white" onClick={onClose}>
            Cancel
          </button>
          <button className="button -sm -error-2 bg-red-1 text-white ml-10" onClick={onDelete}>
            Delete
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalDeleteBooking;
