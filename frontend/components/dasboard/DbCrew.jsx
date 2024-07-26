"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import Sidebar from "./Sidebar";
import SidebarEvent from "./Sidebar-event";
import Header from "./Header";
import Pagination from "../common/Pagination";
import { crewData } from "@/data/dashboard";
import ModalAddCrew from "../common/ModalAddCrew";
import ModalToken from "../common/ModalToken";
import ModalEditCrew from "../common/ModalEditCrew";
import ModalDeleteCrew from "../common/ModalDeleteCrew";

const tabs = ["All", "Gating", "Ticketing"];

export default function DbCrew({ isSpecific = false }) {
  const { id: eventId } = useParams();
  const [sideBarOpen, setSideBarOpen] = useState(true);
  const [currentTab, setCurrentTab] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortKey, setSortKey] = useState("username");
  const [sortOrder, setSortOrder] = useState("asc");
  const [isAddCrewModalOpen, setIsAddCrewModalOpen] = useState(false);
  const [isTokenModalOpen, setIsTokenModalOpen] = useState(false);
  const [isEditCrewModalOpen, setIsEditCrewModalOpen] = useState(false);
  const [isDeleteCrewModalOpen, setIsDeleteCrewModalOpen] = useState(false);
  const [selectedCrew, setSelectedCrew] = useState(null);

  const itemsPerPage = 10; // Number of items per page

  const handleSort = (key) => {
    setSortOrder(sortKey === key && sortOrder === "asc" ? "desc" : "asc");
    setSortKey(key);
  };

  const handleEditCrew = (crew) => {
    setSelectedCrew(crew);
    setIsEditCrewModalOpen(true);
  };

  const handleSaveCrew = (updatedCrew) => {
    // Update the crew data in your state or context here
    console.log(updatedCrew);
  };

  const handleDeleteCrew = (crew) => {
    setSelectedCrew(crew);
    setIsDeleteCrewModalOpen(true);
  };

  const handleConfirmDelete = () => {
    // Perform the delete action here
    console.log("Deleting crew:", selectedCrew);
    setIsDeleteCrewModalOpen(false);
  };

  // Filter crew by event ID if specific
  const filteredCrew = isSpecific
    ? crewData.filter((crew) => crew.eventId === eventId)
    : crewData;

  const sortedCrew = [...filteredCrew].sort((a, b) => {
    if (sortOrder === "asc") {
      return a[sortKey] > b[sortKey] ? 1 : -1;
    } else {
      return a[sortKey] < b[sortKey] ? 1 : -1;
    }
  });

  const filteredByTabCrew = currentTab === "All"
    ? sortedCrew
    : sortedCrew.filter((elm) => elm.role.toLowerCase() === currentTab.toLowerCase());

  const totalItems = filteredByTabCrew.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const currentCrew = filteredByTabCrew.slice(
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
          
          <div className="col-12 d-flex align-items-center justify-content-between flex-wrap">
            <h1 className="text-30">Crew</h1>
            <div className="d-flex align-items-center buttons-container">
                <button
                  className="button -md -dark-1 bg-accent-1 text-white crew-button"
                  style={{ maxHeight: '40px' }}
                  onClick={() => setIsAddCrewModalOpen(true)}
                >
                    <span className="desktop-text">Add Crew</span>
                    <span className="mobile-text">Add Crew</span>
                    <i className="icon-person text-16 ml-10"></i>
                </button>
                <button
                  className="button -md -dark-1 bg-accent-1 text-white ml-10 token-button"
                  style={{ maxHeight: '40px' }}
                  onClick={() => setIsTokenModalOpen(true)}
                >
                    <span className="desktop-text">Generate Token</span>
                    <span className="mobile-text">New Token</span>
                    <i className="icon-application text-16 ml-10"></i>
                </button>
            </div>
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

              <div className="tabs__content js-tabs-content flex-grow">
                <div className="tabs__pane -tab-item-1 is-tab-el-active">
                  <div className="overflowAuto">
                    <table className="tableTest mb-30">
                      <thead className="bg-light-1 rounded-12">
                        <tr>
                          <th style={{ width: "5%" }}>No</th>
                          <th onClick={() => handleSort("username")} style={{ width: "15%" }}>
                            Username {sortKey === "username" ? (sortOrder === "asc" ? "↑" : "↓") : ""}
                          </th>
                          <th onClick={() => handleSort("email")} style={{ width: "25%" }}>
                            Email {sortKey === "email" ? (sortOrder === "asc" ? "↑" : "↓") : ""}
                          </th>
                          <th onClick={() => handleSort("crewId")} style={{ width: "15%" }}>
                            Crew ID {sortKey === "crewId" ? (sortOrder === "asc" ? "↑" : "↓") : ""}
                          </th>
                          <th onClick={() => handleSort("role")} style={{ width: "15%" }}>
                            Role {sortKey === "role" ? (sortOrder === "asc" ? "↑" : "↓") : ""}
                          </th>
                          <th onClick={() => handleSort("status")} style={{ width: "15%" }}>
                            Status {sortKey === "status" ? (sortOrder === "asc" ? "↑" : "↓") : ""}
                          </th>
                          <th style={{ width: "35%" }}>Action</th>
                        </tr>
                      </thead>

                      <tbody>
                        {currentCrew.map((elm, i) => (
                          <tr key={i}>
                            <td className="max-w-300">{(currentPage - 1) * itemsPerPage + i + 1}</td>
                            <td className="min-w-200">{elm.username}</td>
                            <td className="max-w-300">{elm.email}</td>
                            <td className="max-w-300">{elm.crewId}</td>
                            <td>{elm.role}</td>
                            <td>
                              <div className={`circle ${elm.status === "on duty" ? "text-purple-1" : elm.status === "off duty" ? "text-yellow-1" : "text-red-2"}`}>
                                {elm.status}
                              </div>
                            </td>
                            <td>
                              <div className="d-flex items-center">
                                <button
                                  className="button -dark-1 size-35 bg-light-1 rounded-full flex-center"
                                  onClick={() => handleEditCrew(elm)}
                                >
                                  <i className="icon-pencil text-14"></i>
                                </button>
                                <button
                                  className="button -dark-1 size-35 bg-light-1 rounded-full flex-center ml-10"
                                  onClick={() => handleDeleteCrew(elm)}
                                >
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

      <ModalAddCrew isOpen={isAddCrewModalOpen} onClose={() => setIsAddCrewModalOpen(false)} />
      <ModalToken isOpen={isTokenModalOpen} onClose={() => setIsTokenModalOpen(false)} />
      <ModalEditCrew
        isOpen={isEditCrewModalOpen}
        onClose={() => setIsEditCrewModalOpen(false)}
        crew={selectedCrew}
        onSave={handleSaveCrew}
      />
      <ModalDeleteCrew
        isOpen={isDeleteCrewModalOpen}
        onClose={() => setIsDeleteCrewModalOpen(false)}
        onDelete={handleConfirmDelete}
      />
    </div>
  );
}
