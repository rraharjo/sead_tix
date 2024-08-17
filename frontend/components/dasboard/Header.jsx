"use client";

import Image from "next/image";
import { FaUserCircle } from 'react-icons/fa';

export default function Header({ setSideBarOpen }) {
  return (
    <div className="dashboard__content_header">
      <div className="d-flex items-center">
        <div className="mr-60">
          <button
            onClick={() => setSideBarOpen((pre) => !pre)}
            className="d-flex js-toggle-db-sidebar"
          >
            <i className="icon-main-menu text-20"></i>
          </button>
        </div>

        {/* <div className="dashboard__content_header_search d-flex items-center py-5 px-20 rounded-200 border-1 md:d-none">
          <i className="icon-search text-18 mr-10"></i>
          <input type="text" placeholder="Search" />
        </div> */}
      </div>

      <div>
        <div>
          <button>
            <i className="mr-10"><FaUserCircle size="25"/> </i>
          </button>
        </div>
      </div>
    </div>
  );
}
