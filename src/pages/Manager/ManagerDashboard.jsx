import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaTachometerAlt,
  FaUsers,
  FaClipboardList,
  FaUserCircle,
  FaEye,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ManagerDashboard() {
  const [activeSection, setActiveSection] = useState("dashboard");

  return (
    <div className="d-flex bg-light min-vh-100">
      {/* Sidebar */}
      <aside
        className="bg-primary text-white d-flex flex-column p-3"
        style={{ width: "250px" }}
      >
        <h3 className="fw-bold mb-4">SkillLink</h3>
        <ul className="nav flex-column">
          <SidebarItem
            text="Dashboard"
            icon={<FaTachometerAlt />}
            active={activeSection === "dashboard"}
            onClick={() => setActiveSection("dashboard")}
          />

          {/* ✅ This now navigates to /labours */}
          <SidebarItemLink
            text="All Labours"
            icon={<FaUsers />}
            to="/labours"
            active={window.location.pathname === "/labours"}
          />

          <SidebarItem
            text="Bookings"
            icon={<FaClipboardList />}
            active={activeSection === "bookings"}
            onClick={() => setActiveSection("bookings")}
          />
          <SidebarItem
            text="Profile"
            icon={<FaUserCircle />}
            active={activeSection === "profile"}
            onClick={() => setActiveSection("profile")}
          />
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-grow-1 p-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h4 className="fw-bold text-primary mb-1">Welcome back, Manager!</h4>
            <p className="text-muted mb-0">{new Date().toDateString()}</p>
          </div>
        </div>

        {/* Conditional Rendering */}
        {activeSection === "dashboard" && <BookingsTable />}
        {activeSection === "bookings" && <BookingsTable />}
        {activeSection === "profile" && (
          <motion.div
            className="bg-white p-4 rounded-4 shadow-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h5 className="fw-bold mb-3">Profile</h5>
            <p className="text-muted">Manage your account information here.</p>
            <div className="mt-3">
              <p>
                <strong>Name:</strong>  Manager Nabeel
              </p>
              <p>
                <strong>Email:</strong> nabeel@gmail.com
              </p>
              <p>
                <strong>Phone:</strong> +91 98765 43210
              </p>
            </div>
          </motion.div>
        )}
      </main>
    </div>
  );
}

/* Sidebar Item Component (button type) */
function SidebarItem({ text, icon, active, onClick }) {
  return (
    <li className="nav-item mb-2">
      <button
        className={`nav-link text-white d-flex align-items-center gap-2 px-3 py-2 rounded border-0 bg-transparent w-100 text-start ${
          active ? "bg-white bg-opacity-25 fw-bold" : "opacity-75"
        }`}
        onClick={onClick}
      >
        {icon}
        <span>{text}</span>
      </button>
    </li>
  );
}

/* ✅ Sidebar Link Item (for navigation routes) */
function SidebarItemLink({ text, icon, to, active }) {
  return (
    <li className="nav-item mb-2">
      <Link
        to={to}
        className={`nav-link text-white d-flex align-items-center gap-2 px-3 py-2 rounded w-100 text-start ${
          active ? "bg-white bg-opacity-25 fw-bold" : "opacity-75"
        }`}
      >
        {icon}
        <span>{text}</span>
      </Link>
    </li>
  );
}

/* Bookings Table */
function BookingsTable() {
  const bookings = [
    ["Ahmed Hassan", "Plumbing", "Jan 15, 2024", "Confirmed"],
    ["Sarah Mitchell", "Electrical", "Jan 16, 2024", "Pending"],
    ["Michael Chen", "Carpentry", "Jan 14, 2024", "Completed"],
    ["Emma Rodriguez", "Painting", "Jan 17, 2024", "Confirmed"],
    ["David Thompson", "Welding", "Jan 18, 2024", "Pending"],
    ["Lisa Anderson", "Cleaning", "Jan 13, 2024", "Completed"],
  ];

  return (
    <motion.div
      className="bg-white rounded-4 shadow-sm p-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h5 className="fw-bold mb-3">Recent Bookings</h5>
      <div className="table-responsive">
        <table className="table table-borderless align-middle">
          <thead>
            <tr className="text-muted small">
              <th>Labour Name</th>
              <th>Skill</th>
              <th>Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map(([name, skill, date, status], i) => (
              <motion.tr
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <td className="fw-semibold text-primary">{name}</td>
                <td>
                  <span className="badge bg-light text-primary">{skill}</span>
                </td>
                <td>{date}</td>
                <td>
                  <span
                    className={`badge ${
                      status === "Confirmed"
                        ? "bg-success-subtle text-success"
                        : status === "Pending"
                        ? "bg-warning-subtle text-warning"
                        : "bg-info-subtle text-info"
                    }`}
                  >
                    {status}
                  </span>
                </td>
                <td>
                  <FaEye className="text-secondary" />
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
