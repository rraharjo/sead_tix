import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import Modal from './Modal';
import { allCrewMembers } from "@/data/dashboard";

const ModalEditGate = ({ isOpen, onClose, gate, onSave }) => {
  const [gateName, setGateName] = useState('');
  const [selectedCrew, setSelectedCrew] = useState([]);

  useEffect(() => {
    if (gate) {
      setGateName(gate.gateName);
      setSelectedCrew(gate.crew.map(crewMember => ({ value: crewMember, label: crewMember })));
    }
  }, [gate]);

  const handleSave = () => {
    if (!gateName || selectedCrew.length === 0) {
      alert("All fields are required");
      return;
    }

    const updatedGate = {
      ...gate,
      gateName,
      crew: selectedCrew.map(option => option.value)
    };
    onSave(updatedGate);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="bg-white rounded-12 py-30 px-30 md:py-20 md:px-20">
        <h2 className="text-30 md:text-24 fw-700">Edit Gate</h2>
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
            <label className="lh-1 text-16 text-accent-1">Crew</label>
            <div className="form-input">
              <Select
                isMulti
                value={selectedCrew}
                onChange={setSelectedCrew}
                options={allCrewMembers.map(member => ({ value: member, label: member }))}
              />
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

export default ModalEditGate;
