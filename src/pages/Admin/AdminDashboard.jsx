import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AdminDashboard() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const username = "Admin";

  const cards = [
    { title: "Total Labours", count: 58, color: "#007bff", icon: "🧑‍🔧" },
    { title: "Total Managers", count: 12, color: "#28a745", icon: "👷‍♂️" },
    { title: "Categories", count: 9, color: "#f8b400", icon: "📋" },
  ];

  return (
    <div className="container py-5">
      {/* Header */}
      <h2 className="fw-bold text-center text-primary mb-1">
        Admin Dashboard
      </h2>
      <p className="text-center text-muted mb-4">
        Welcome, <strong>{username}</strong> 👋
      </p>

      {/* Summary Cards */}
      <div className="row g-4 mb-5">
        {cards.map((card, i) => (
          <div className="col-12 col-md-4" key={i}>
            <div
              className="card text-white shadow-lg border-0"
              style={{
                backgroundColor: card.color,
                borderRadius: "12px",
              }}
            >
              <div className="card-body text-center">
                <div style={{ fontSize: "40px" }}>{card.icon}</div>
                <h5 className="mt-3">{card.title}</h5>
                <h3 className="fw-bold">{card.count}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="card shadow border-0 p-4">
        <h5 className="fw-bold text-secondary mb-3">Quick Actions</h5>
        <div className="row g-3">

          {/* Manage Categories */}
          <div className="col-12 col-md-4 position-relative">
            <button
              className="btn w-100 text-white fw-semibold py-2"
              style={{ backgroundColor: "#f8b400" }}
              onClick={() => toggleDropdown("categories")}
            >
              📋 Manage Categories
            </button>

            {openDropdown === "categories" && (
              <div className="dropdown-menu show mt-2 w-100 shadow-sm">
                <button className="dropdown-item">Add Category</button>
                <button className="dropdown-item">Edit Category</button>
                <button className="dropdown-item">Delete Category</button>
              </div>
            )}
          </div>

          {/* View Labours */}
          <div className="col-12 col-md-4 position-relative">
            <button
              className="btn w-100 btn-primary fw-semibold py-2"
              onClick={() => toggleDropdown("labours")}
            >
              🧑‍🔧 View Labours
            </button>

            {openDropdown === "labours" && (
              <div className="dropdown-menu show mt-2 w-100 shadow-sm">
                <button className="dropdown-item">Add Labour</button>
                <button className="dropdown-item">Edit Labour</button>
                <button className="dropdown-item">Delete Labour</button>
              </div>
            )}
          </div>

          {/* View Managers */}
          <div className="col-12 col-md-4 position-relative">
            <button
              className="btn w-100 btn-success fw-semibold py-2"
              onClick={() => toggleDropdown("managers")}
            >
              👷‍♂️ View Managers
            </button>

            {openDropdown === "managers" && (
              <div className="dropdown-menu show mt-2 w-100 shadow-sm">
                <button className="dropdown-item">Add Manager</button>
                <button className="dropdown-item">Edit Manager</button>
                <button className="dropdown-item">Delete Manager</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
