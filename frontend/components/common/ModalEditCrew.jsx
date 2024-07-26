import React, { useState, useEffect } from 'react';
import Modal from './Modal';

const ModalEditCrew = ({ isOpen, onClose, crew, onSave }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    if (crew) {
      setUsername(crew.username);
      setEmail(crew.email);
      setRole(crew.role);
      setStatus(crew.status);
    }
  }, [crew]);

  const handleSave = () => {
    const updatedCrew = { ...crew, username, email, role, status };
    onSave(updatedCrew);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="bg-white rounded-12 py-30 px-30 md:py-20 md:px-20">
        <h2 className="text-30 md:text-24 fw-700">Edit Crew Member</h2>
        <div className="row y-gap-30 contactForm pt-30">
          <div className="col-12">
            <div className="form-input">
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
              <label className="lh-1 text-16 text-light-1">Username</label>
            </div>
          </div>
          <div className="col-12">
            <div className="form-input">
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <label className="lh-1 text-16 text-light-1">Email</label>
            </div>
          </div>
          <div className="col-12">
            <div className="form-input">
              <select value={role} onChange={(e) => setRole(e.target.value)} required>
                <option value="ticketing">Ticketing</option>
                <option value="gating">Gating</option>
              </select>
              <label className="lh-1 text-16 text-light-1" style={{ top: '-10px' }}>Role</label>
            </div>
          </div>
          <div className="col-12">
            <div className="form-input">
              <select value={status} onChange={(e) => setStatus(e.target.value)} required>
                <option value="on duty">On Duty</option>
                <option value="off duty">Off Duty</option>
                <option value="off by admin">Off by Admin</option>
              </select>
              <label className="lh-1 text-16 text-light-1" style={{ top: '-10px' }}>Status</label>
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

export default ModalEditCrew;
