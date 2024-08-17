"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import SidebarEvent from "./Sidebar-event";
import Header from "./Header";
import Pagination from "../common/Pagination";
import { gateData, checkInData } from "@/data/dashboard";
import ModalAddGate from "../common/Modal/ModalAddGate";
import ModalEditGate from "../common/Modal/ModalEditGate";
import { FaSearch } from 'react-icons/fa';

const tabs = ["Checked In", "Not Checked In"];

export default function DbGating({ isSpecific = true }) {
  const { id: eventId } = useParams();
  const [sideBarOpen, setSideBarOpen] = useState(true);
  const [currentTab, setCurrentTab] = useState("Checked In");
  const [currentPage, setCurrentPage] = useState(1);
  const [isAddGateModalOpen, setIsAddGateModalOpen] = useState(false);
  const [isEditGateModalOpen, setIsEditGateModalOpen] = useState(false);
  const [selectedGate, setSelectedGate] = useState(null);
  const [gates, setGates] = useState([]);
  const [category, setCategory] = useState("");

  const itemsPerPage = 10; // Number of items per page

  useEffect(() => {
    if (isSpecific) {
      setGates(gateData.filter((gate) => gate.eventId === eventId));
    } else {
      setGates(gateData);
    }
  }, [isSpecific, eventId]);

  const handleEditGate = (gate) => {
    setSelectedGate(gate);
    setIsEditGateModalOpen(true);
  };

  const handleSaveGate = (updatedGate) => {
    // Update the gate data in your state or context here
    console.log(updatedGate);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const filteredCheckInData = checkInData.filter(
    (elm) => elm.eventId === eventId && elm.status.toLowerCase() === currentTab.toLowerCase()
  );

  const currentCheckIns = filteredCheckInData.slice(
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
            <h1 className="text-30">Event Gating</h1>
            <button
              className="button -md -dark-1 bg-accent-1 text-white"
              style={{ maxHeight: '40px' }}
              onClick={() => setIsAddGateModalOpen(true)}
            >
                <span className="desktop-text">Add Gate</span>
                <span className="mobile-text">Add Gate</span>
                <i className="icon-add text-16 ml-10"></i>
            </button>
          </div>

          <div className="row y-gap-20 x-gap-20 mt-20">
            {gates.map((gate) => (
              <div className="col-4" key={gate.key}>
                <div className="rounded-12 bg-white shadow-2 px-30 py-30">
                  <div className="d-flex justify-content-between">
                    <div>
                      <h2>{gate.gateName}</h2>
                      <p>Crew: {gate.crew.join(', ')}</p>
                      <p>Scans: {gate.scans}</p>
                      <button className="button mt-10 -sm -error-2 bg-red-1 text-white" onClick={() => handleEditGate(gate)}>Edit Gate</button>
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
                          <th style={{ width: "25%" }}>{currentTab === "Checked In" ? "Gate" : ""}</th>
                          <th style={{ width: "25%" }}>{currentTab === "Checked In" ? "Crew" : ""}</th>
                          <th style={{ width: "20%" }}>{currentTab === "Checked In" ? "Check-In Time" : ""}</th>
                        </tr>
                      </thead>

                      <tbody>
                        {currentCheckIns.map((elm, i) => (
                          <tr key={i}>
                            <td>{(currentPage - 1) * itemsPerPage + i + 1}</td>
                            <td>{elm.name}</td>
                            {currentTab === "Checked In" ? (
                              <>
                                <td>{elm.gate}</td>
                                <td>{elm.crew}</td>
                                <td>{elm.checkInTime}</td>
                              </>
                            ) : (
                              <>
                                <td></td>
                                <td></td>
                                <td></td>
                              </>
                            )}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {filteredCheckInData.length > itemsPerPage && (
                    <Pagination
                      currentPage={currentPage}
                      totalPages={Math.ceil(filteredCheckInData.length / itemsPerPage)}
                      onPageChange={handlePageChange}
                    />
                  )}

                  <div className="text-14 text-center mt-20">
                    Showing results {(currentPage - 1) * itemsPerPage + 1}-{Math.min(currentPage * itemsPerPage, filteredCheckInData.length)} of {filteredCheckInData.length}
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

      <ModalAddGate isOpen={isAddGateModalOpen} onClose={() => setIsAddGateModalOpen(false)} />
      <ModalEditGate
        isOpen={isEditGateModalOpen}
        onClose={() => setIsEditGateModalOpen(false)}
        gate={selectedGate}
        onSave={handleSaveGate}
      />
    </div>
  );
}
