import React, { useState } from 'react';
import Modal from './Modal';

const ModalAddGate = ({ isOpen, onClose, onSave }) => {
  const [gateName, setGateName] = useState('');
  const [crew, setCrew] = useState('');

  const handleSave = () => {
    if (!gateName || !crew) {
      alert("All fields are required");
      return;
    }

    const newGate = { gateName, crew: crew.split(','), scans: 0, eventId: "event1" };
    onSave(newGate);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="bg-white rounded-12 py-30 px-30 md:py-20 md:px-20">
        <h2 className="text-30 md:text-24 fw-700">Add Gate</h2>
        <div className="row y-gap-30 contactForm pt-30">
          <div className="col-12">
            <div className="form-input">
              <input
                type="text"
                value={gateName}
                onChange={(e) => setGateName(e.target.value)}
                required
              />
              <label className="lh-1 text-16 text-light-1">Gate Name</label>
            </div>
          </div>
          <div className="col-12">
            <div className="form-input">
              <input
                type="text"
                value={crew}
                onChange={(e) => setCrew(e.target.value)}
                required
              />
              <label className="lh-1 text-16 text-light-1">Crew (comma separated)</label>
            </div>
          </div>
          <div className="col-12">
            <div className="row y-gap-20 items-center justify-between">
              <div className="col-auto">
                <button className="button -sm -dark-1 bg-accent-1 text-white" onClick={handleSave}>
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalAddGate;
