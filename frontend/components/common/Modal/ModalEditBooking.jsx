import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import { ticketHolderData } from "@/data/dashboard";

const ModalEditBooking = ({ isOpen, onClose, booking, onSave }) => {
  const [formData, setFormData] = useState({
    username: '',
    bookingDate: '',
    numberOfTickets: '',
    totalCost: '',
    status: '',
  });
  const [ticketHolders, setTicketHolders] = useState([]);

  useEffect(() => {
    if (booking) {
      setFormData(booking);
      const holders = ticketHolderData.filter(
        (holder) => holder.bookingId === booking.orderNumber
      );
      setTicketHolders(holders);
    }
  }, [booking]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleTicketHolderChange = (index, e) => {
    const { name, value } = e.target;
    setTicketHolders((prevHolders) => {
      const updatedHolders = [...prevHolders];
      updatedHolders[index][name] = value;
      return updatedHolders;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...formData, ticketHolders });
  };

  const handleRefund = (ticketNumber) => {
    // Implement refund logic here
    console.log(`Refunding ticket ${ticketNumber}`);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="bg-white rounded-12 py-30 px-30 md:py-20 md:px-20">
        <h2 className="text-30 md:text-24 fw-700">Edit Booking</h2>
        <form onSubmit={handleSubmit}>
          <div className="row y-gap-30 contactForm pt-30">
            <div className="col-12 y-gap-40">
              <h3 className="text-20">Booking Details</h3>
              <div className="form-input">
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  value={formData.username}
                  onChange={handleChange}
                  disabled
                />
                <label className="lh-1 text-16 text-light-1">Username</label>
              </div>
              <div className="form-input">
                <input
                  type="text"
                  name="bookingDate"
                  className="form-control"
                  value={formData.bookingDate}
                  onChange={handleChange}
                />
                <label className="lh-1 text-16 text-light-1">Booking Date</label>
              </div>
              <div className="form-input">
                <input
                  type="number"
                  name="numberOfTickets"
                  className="form-control"
                  value={formData.numberOfTickets}
                  onChange={handleChange}
                  disabled
                />
                <label className="lh-1 text-16 text-light-1">Number of Tickets</label>
              </div>
              <div className="form-input">
                <input
                  type="text"
                  name="totalCost"
                  className="form-control"
                  value={formData.totalCost}
                  onChange={handleChange}
                />
                <label className="lh-1 text-16 text-light-1">Total Cost</label>
              </div>
              <div className="form-input">
                <label className="lh-1 text-16 text-accent-1">Status</label>
                <select
                  name="status"
                  className="form-control"
                  value={formData.status}
                  onChange={handleChange}
                >
                  <option value="Approved">Approved</option>
                  <option value="Pending">Pending</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </div>
            </div>
            <div className="col-12">
              <h3 className="text-20">Ticket Holders</h3>
              {ticketHolders.map((holder, index) => (
                <div key={holder.ticketNumber} className="mb-20 border p-10">
                  <div className="mb-10">
                    <label className="form-label">Ticket Number</label>
                    <input
                      type="text"
                      name="ticketNumber"
                      className="form-control"
                      value={holder.ticketNumber}
                      disabled
                    />
                  </div>
                  <div className="mb-10">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      value={holder.name}
                      onChange={(e) => handleTicketHolderChange(index, e)}
                    />
                  </div>
                  <div className="mb-10">
                    <label className="form-label">Ticket Type</label>
                    <input
                      type="text"
                      name="ticketType"
                      className="form-control"
                      value={holder.ticketType}
                      onChange={(e) => handleTicketHolderChange(index, e)}
                    />
                  </div>
                  <button
                    type="button"
                    className="button -sm -dark-1 bg-red-1 text-white"
                    onClick={() => handleRefund(holder.ticketNumber)}
                  >
                    Refund
                  </button>
                </div>
              ))}
            </div>
            <div className="col-12">
              <div className="row y-gap-20 items-center justify-between">
                <div className="col-auto">
                  <button className="button -sm -dark-1 bg-accent-1 text-white" type="submit">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default ModalEditBooking;
