import React, { useState, useEffect } from 'react';
import Modal from './Modal';

const ModalToken = ({ isOpen, onClose }) => {
  const [token, setToken] = useState('');
  const [expiryTime, setExpiryTime] = useState(null);
  const [timeLeft, setTimeLeft] = useState(0);

  const generateToken = () => {
    const newToken = Math.random().toString(36).substr(2, 8);
    setToken(newToken);
    const expiry = Date.now() + 3 * 60 * 1000; // 3 minutes in milliseconds
    setExpiryTime(expiry);
  };

  useEffect(() => {
    if (isOpen) {
      if (!token || Date.now() >= expiryTime) {
        generateToken();
      }

      const timer = setInterval(() => {
        const now = Date.now();
        const timeLeft = Math.max(0, expiryTime - now);
        setTimeLeft(timeLeft);

        if (timeLeft <= 0) {
          clearInterval(timer);
        }
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isOpen, token, expiryTime]);

  const handleRegenerate = () => {
    generateToken();
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="bg-white rounded-12 py-30 px-30 md:py-20 md:px-20">
        <h2 className="text-30 md:text-24 fw-700">Generate Token</h2>
        {token && (
          <div>
            <p>Token: <span className="text-20 fw-600">{token}</span></p>
            <p>Expires in: <span className="text-20 fw-600">{formatTime(timeLeft)}</span></p>
            <button className="button -md -dark-1 bg-accent-1 text-white mt-20" onClick={handleRegenerate}>
              Regenerate Token
            </button>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default ModalToken;
