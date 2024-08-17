"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import SidebarEvent from "./Sidebar-event";
import Header from "./Header";
import Pagination from "../common/Pagination";
import { ticketData, ticketHolderData } from "@/data/dashboard";
import ModalAddTicket from "../common/Modal/ModalAddTicket";
import ModalEditTicket from "../common/Modal/ModalEditTicket";
import { FaSearch } from 'react-icons/fa';

export default function DbTicketing({ isSpecific = true }) {
  const { id: eventId } = useParams();
  const [sideBarOpen, setSideBarOpen] = useState(true);
  const [currentTab, setCurrentTab] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [isAddTicketModalOpen, setIsAddTicketModalOpen] = useState(false);
  const [isEditTicketModalOpen, setIsEditTicketModalOpen] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [tickets, setTickets] = useState([]);
  const [tabs, setTabs] = useState(["All"]);
  const [category, setCategory] = useState("");

  const itemsPerPage = 10; // Number of items per page

  useEffect(() => {
    const filteredTickets = isSpecific
      ? ticketData.filter((ticket) => ticket.eventId === eventId)
      : ticketData;

    setTickets(filteredTickets);
    setTabs(["All", ...new Set(filteredTickets.map((ticket) => ticket.name))]);
  }, [isSpecific, eventId]);

  const handleEditTicket = (ticket) => {
    setSelectedTicket(ticket);
    setIsEditTicketModalOpen(true);
  };

  const handleSaveTicket = (updatedTicket) => {
    // Update the ticket data in your state or context here
    console.log(updatedTicket);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const filteredTicketHolders = currentTab === "All"
    ? ticketHolderData.filter((holder) => holder.eventId === eventId)
    : ticketHolderData.filter((holder) => holder.eventId === eventId && holder.ticketType === currentTab);

  const currentTicketHolders = filteredTicketHolders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className={`dashboard ${sideBarOpen ? "-is-sidebar-visible" : ""} js-dashboard`}>
      <SidebarEvent setSideBarOpen={setSideBarOpen} eventId={eventId} />

      <div className="dashboard__content">
        <Header setSideBarOpen={setSideBarOpen} />
        <div className="dashboard__content_content flex-grow">

          <div className="col-12 d-flex align-items-center justify-content-between flex-wrap">
            <h1 className="text-30">Event Ticketing</h1>
            <button
              className="button -md -dark-1 bg-accent-1 text-white"
              style={{ maxHeight: '40px' }}
              onClick={() => setIsAddTicketModalOpen(true)}
            >
                <span className="desktop-text">Add Ticket</span>
                <span className="mobile-text">Add Ticket</span>
                <i className="icon-add text-16 ml-10"></i>
            </button>
          </div>

          <div className="row y-gap-20 x-gap-20 mt-20">
            {tickets.map((ticket) => (
              <div className="col-4" key={ticket.name}>
                <div className="rounded-12 bg-white shadow-2 px-30 py-30">
                  <div className="d-flex justify-content-between">
                    <div>
                      <h2>{ticket.name}</h2>
                      <p>Price: ${ticket.price}</p>
                      <p>Quota: {ticket.quota}</p>
                      <p>Sold: {ticket.sold}</p>
                      <p>Available: {ticket.quota - ticket.sold}</p>
                      <p>Sellout Percentage: {(ticket.sold / ticket.quota) * 100}%</p>
                      <button className="button mt-10 -sm -error-2 bg-red-1 text-white" onClick={() => handleEditTicket(ticket)}>Takedown</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-12 bg-white shadow-2 px-40 pt-40 pb-30 md:px-20 md:pt-20 md:mb-20 mt-60 flex-grow">
            <div className="tabs -underline-2 js-tabs">
              <div className="tabs__controls row x-gap-40 y-gap-10 lg:x-gap-20 js-tabs-controls">
                {tabs.map((elm, i) => (
                  <div
                    key={i}
                    className="col-auto"
                    onClick={() => {
                      setCurrentTab(elm);
                      setCurrentPage(1); // Reset to first page on tab change
                    }}
                  >
                    <button
                      className={`tabs__button text-20 lh-12 fw-500 pb-15 lg:pb-0 js-tabs-button ${
                        elm === currentTab ? "is-tab-el-active" : ""
                      }`}
                    >
                      {elm}
                    </button>
                  </div>
                ))}
              </div>

              <div className="searchForm -type-10">
                <div className="searchForm__form">
                  <div className="searchFormItem js-select-control">
                      <div className="searchFormItem__content">
                        <div className="js-select-control-chosen">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                          />
                        </div>
                      </div>
                  </div>
                  <div className="searchForm__button">
                    <button
                      onClick={() => router.push("/tour-list-1")}
                      className="button -dark-1 bg-accent-1 text-white"
                    >
                      <i className="mr-10"><FaSearch size="15"/> </i>
                      Search
                    </button>
                  </div>
                </div>
              </div>

              <div className="tabs__content js-tabs-content flex-grow">
                <div className="tabs__pane -tab-item-1 is-tab-el-active">
                  <div className="overflowAuto">
                    <table className="tableTest mb-30">
                      <thead className="bg-light-1 rounded-12">
                        <tr>
                          <th style={{ width: "5%" }}>No</th>
                          <th style={{ width: "25%" }}>Name</th>
                          <th style={{ width: "25%" }}>Ticket Type</th>
                          <th style={{ width: "25%" }}>Booking ID</th>
                          <th style={{ width: "20%" }}>Ticket Number</th>
                        </tr>
                      </thead>

                      <tbody>
                        {currentTicketHolders.map((holder, i) => (
                          <tr key={i}>
                            <td>{(currentPage - 1) * itemsPerPage + i + 1}</td>
                            <td>{holder.name}</td>
                            <td>{holder.ticketType}</td>
                            <td>{holder.bookingId}</td>
                            <td>{holder.ticketNumber}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {filteredTicketHolders.length > itemsPerPage && (
                    <Pagination currentPage={currentPage} totalPages={Math.ceil(filteredTicketHolders.length / itemsPerPage)} onPageChange={handlePageChange} />
                  )}

                  <div className="text-14 text-center mt-20">
                    Showing results {(currentPage - 1) * itemsPerPage + 1}-{Math.min(currentPage * itemsPerPage, filteredTicketHolders.length)} of {filteredTicketHolders.length}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center pt-30 flex-shrink-0 footer">
            © Copyright Seadtix {new Date().getFullYear()}
          </div>
        </div>
      </div>

      <ModalAddTicket isOpen={isAddTicketModalOpen} onClose={() => setIsAddTicketModalOpen(false)} />
      <ModalEditTicket
        isOpen={isEditTicketModalOpen}
        onClose={() => setIsEditTicketModalOpen(false)}
        ticket={selectedTicket}
        onSave={handleSaveTicket}
      />
    </div>
  );
}
