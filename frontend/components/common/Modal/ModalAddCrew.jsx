import React, { useState } from 'react';
import Modal from './Modal';

const ModalAddCrew = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('ticketing');

  const handleAddCrew = () => {
    if (!username || !email || !role) {
      alert("All fields are required");
      return;
    }

    if (username.length <= 6) {
      alert("Username must be more than 6 characters");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address");
      return;
    }

    const newCrewMember = { username, email, role };
    console.log(newCrewMember);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="bg-white rounded-12 py-30 px-30 md:py-20 md:px-20">
        <h2 className="text-30 md:text-24 fw-700">Add Crew Member</h2>
        <div className="row y-gap-30 contactForm pt-30">
          <div className="col-12">
            <div className="form-input">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <label className="lh-1 text-16 text-light-1">Username</label>
            </div>
          </div>
          <div className="col-12">
            <div className="form-input">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label className="lh-1 text-16 text-light-1">Email</label>
            </div>
          </div>
          <div className="col-12">
            <div className="form-input">
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
              >
                <option value="ticketing">Ticketing</option>
                <option value="gating">Gating</option>
              </select>
              <label className="lh-1 text-16 text-light-1" style={{ top: '-10px' }}>Role</label>
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
                <button className="button -sm -dark-1 bg-accent-1 text-white" onClick={handleAddCrew}>
                  Add Crew
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalAddCrew;
