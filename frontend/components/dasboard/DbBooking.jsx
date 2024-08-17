"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import Sidebar from "./Sidebar";
import SidebarEvent from "./Sidebar-event";
import Header from "./Header";
import Pagination from "../common/Pagination";
import { bookingData } from "@/data/dashboard";
import { ticketHolderData } from "@/data/dashboard";
import { FaSearch } from 'react-icons/fa';
import ModalEditBooking from '../common/Modal/ModalEditBooking';
import ModalDeleteBooking from '../common/Modal/ModalDeleteBooking';

const tabs = ["All", "Approved", "Pending", "Cancelled"];

export default function DbBooking({ isSpecific = false }) {
  const { id: eventId } = useParams();
  const [sideBarOpen, setSideBarOpen] = useState(true);
  const [currentTab, setCurrentTab] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortKey, setSortKey] = useState("orderNumber");
  const [sortOrder, setSortOrder] = useState("asc");
  const [category, setCategory] = useState("");
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const itemsPerPage = 10; // Number of items per page

  const handleSort = (key) => {
    setSortOrder(sortKey === key && sortOrder === "asc" ? "desc" : "asc");
    setSortKey(key);
  };

  const handleEditClick = (booking) => {
    const bookingWithHolders = {
      ...booking,
      ticketHolders: ticketHolderData.filter((holder) => holder.bookingId === booking.orderNumber),
    };
    setSelectedBooking(bookingWithHolders);
    setIsEditModalOpen(true);
  };

  const handleDeleteClick = (booking) => {
    setSelectedBooking(booking);
    setIsDeleteModalOpen(true);
  };

  const handleEditSave = (updatedBooking) => {
    // Save the updated booking (update the state or send to backend)
    setIsEditModalOpen(false);
    // Update the bookingData here or send it to the backend
    console.log("Updated Booking:", updatedBooking);
  };

  const handleDeleteConfirm = () => {
    // Delete the booking (update the state or send to backend)
    setIsDeleteModalOpen(false);
    // Remove the booking from bookingData here or send the request to the backend
    console.log("Deleted Booking:", selectedBooking);
  };

  // Filter bookings by event ID if specific
  const filteredBookings = isSpecific
    ? bookingData.filter((booking) => booking.eventId === eventId)
    : bookingData;

  const sortedBookings = [...filteredBookings].sort((a, b) => {
    if (sortOrder === "asc") {
      return a[sortKey] > b[sortKey] ? 1 : -1;
    } else {
      return a[sortKey] < b[sortKey] ? 1 : -1;
    }
  });

  const filteredByTabBookings = currentTab === "All"
    ? sortedBookings
    : sortedBookings.filter((elm) => elm.status === currentTab);

  const totalItems = filteredByTabBookings.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const currentBookings = filteredByTabBookings.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className={`dashboard ${sideBarOpen ? "-is-sidebar-visible" : ""} js-dashboard`}>
      {isSpecific ? (
        <SidebarEvent setSideBarOpen={setSideBarOpen} eventId={eventId} />
      ) : (
        <Sidebar setSideBarOpen={setSideBarOpen} />
      )}

      <div className="dashboard__content">
        <Header setSideBarOpen={setSideBarOpen} />
        <div className="dashboard__content_content flex-grow">
          <h1 className="text-30">Booking</h1>

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
                          <th onClick={() => handleSort("orderNumber")} style={{ width: "15%" }}>
                            ID {sortKey === "orderNumber" ? (sortOrder === "asc" ? "↑" : "↓") : ""}
                          </th>
                          <th onClick={() => handleSort("username")} style={{ width: "15%" }}>
                            Username {sortKey === "username" ? (sortOrder === "asc" ? "↑" : "↓") : ""}
                          </th>
                          <th onClick={() => handleSort("bookingDate")} style={{ width: "15%" }}>
                            Booking Date {sortKey === "bookingDate" ? (sortOrder === "asc" ? "↑" : "↓") : ""}
                          </th>
                          <th onClick={() => handleSort("numberOfTickets")} style={{ width: "10%" }}>
                            Tickets {sortKey === "numberOfTickets" ? (sortOrder === "asc" ? "↑" : "↓") : ""}
                          </th>
                          <th onClick={() => handleSort("totalCost")} style={{ width: "10%" }}>
                            Total Cost {sortKey === "totalCost" ? (sortOrder === "asc" ? "↑" : "↓") : ""}
                          </th>
                          <th onClick={() => handleSort("status")} style={{ width: "10%" }}>
                            Status {sortKey === "status" ? (sortOrder === "asc" ? "↑" : "↓") : ""}
                          </th>
                          <th style={{ width: "10%" }}>Action</th>
                        </tr>
                      </thead>

                      <tbody>
                        {currentBookings.map((elm, i) => (
                          <tr key={i}>
                            <td className="max-w-300">{elm.orderNumber}</td>
                            <td className="min-w-200">{elm.username}</td>
                            <td className="max-w-300">{elm.bookingDate}</td>
                            <td className="max-w-300">{elm.numberOfTickets}</td>
                            <td>{elm.totalCost}</td>
                            <td>
                              <div className={`circle ${elm.status === "Approved" ? "text-purple-1" : elm.status === "Pending" ? "text-yellow-1" : "text-red-2"}`}>
                                {elm.status}
                              </div>
                            </td>
                            <td>
                              <div className="d-flex items-center">
                                <button className="button -dark-1 size-35 bg-light-1 rounded-full flex-center" onClick={() => handleEditClick(elm)}>
                                  <i className="icon-pencil text-14"></i>
                                </button>
                                <button className="button -dark-1 size-35 bg-light-1 rounded-full flex-center ml-10" onClick={() => handleDeleteClick(elm)}>
                                  <i className="icon-delete text-14"></i>
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {totalPages > 1 && (
                    <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
                  )}

                  <div className="text-14 text-center mt-20">
                    Showing results {(currentPage - 1) * itemsPerPage + 1}-{Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems}
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

      {/* Modals */}
      <ModalEditBooking
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        booking={selectedBooking}
        onSave={handleEditSave}
      />

      <ModalDeleteBooking
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onDelete={handleDeleteConfirm}
      />
    </div>
  );
}
