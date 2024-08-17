import React, { useState } from 'react';
import Modal from './Modal';

const ModalAddTicket = ({ isOpen, onClose, onSave }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quota, setQuota] = useState('');

  const handleAddTicket = () => {
    if (!name || !price || !quota) {
      alert("All fields are required");
      return;
    }

    if (isNaN(price) || isNaN(quota)) {
      alert("Price and Quota must be numbers");
      return;
    }

    if (parseFloat(price) < 0 || parseInt(quota) < 0) {
      alert("Price and Quota cannot be less than 0");
      return;
    }

    const newTicket = { name, price: parseFloat(price), quota: parseInt(quota), sold: 0 };
    onSave(newTicket);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="bg-white rounded-12 py-30 px-30 md:py-20 md:px-20">
        <h2 className="text-30 md:text-24 fw-700">Add Ticket</h2>
        <div className="row y-gap-30 contactForm pt-30">
          <div className="col-12">
            <div className="form-input">
              <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required 
              />
              <label className="lh-1 text-16 text-light-1">Ticket Title</label>
            </div>
          </div>
          <div className="col-12">
            <div className="form-input">
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
                className="no-spinner"
                min="0"
              />
              <label className="lh-1 text-16 text-light-1">Price</label>
            </div>
          </div>
          <div className="col-12">
            <div className="form-input">
              <input
                type="number"
                value={quota}
                onChange={(e) => setQuota(e.target.value)}
                required
                className="no-spinner"
                min="0"
              />
              <label className="lh-1 text-16 text-light-1">Quota</label>
            </div>
          </div>
          <div className="col-12">
            <div className="row y-gap-20 items-center justify-between">
              <div className="col-auto">
                <div className="text-14">
                  By continuing, you agree to the Seadtix Terms of Use and Privacy Policy.
                </div>
              </div>
              <div className="col-auto">
                <button 
                  className="button -sm -dark-1 bg-accent-1 text-white" 
                  onClick={handleAddTicket}
                >
                  Add Ticket
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalAddTicket;
