import React from 'react';
import Modal from './Modal';

const ModalBooking = ({ isOpen, onClose, onForceSoldOut }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="bg-white rounded-12 py-30 px-30 md:py-20 md:px-20">
        <h2 className="text-30 md:text-24 fw-700">Force Sold Out Ticket</h2>
        <p>Are you sure you want to forcefully mark this ticket as sold out?</p>
        <div className="row y-gap-20 items-center justify-end pt-30">
          <div className="col-auto">
            <button className="button -sm -dark-1 bg-accent-1 text-white" onClick={onClose}>
              Cancel
            </button>
          </div>
          <div className="col-auto">
            <button className="button -sm -error-2 bg-red-1 text-white" onClick={onForceSoldOut}>
              Force Sold Out
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalBooking;
