import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";

export default function ManagerProfile() {
  const [manager, setManager] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // ✅ Get logged-in user from localStorage
    const loggedUser = JSON.parse(localStorage.getItem("user"));

    // Redirect if not logged in or not a manager
    if (!loggedUser || loggedUser.role !== "manager") {
      navigate("/login");
      return;
    }

    // ✅ Fetch manager details from registered users or fallback
    const registeredUsers =
      JSON.parse(localStorage.getItem("registeredUsers")) || [];

    const foundManager = registeredUsers.find(
      (u) => u.username === loggedUser.username && u.role === "manager"
    );

    // ✅ If found, use stored data; otherwise use loggedUser fallback
    setManager(foundManager || loggedUser);
  }, [navigate]);

  if (!manager)
    return (
      <div className="text-center mt-5">
        <h4>Loading profile...</h4>
      </div>
    );

  return (
    <div className="container my-5 animate__animated animate__fadeIn">
      {/* Header Section */}
      <div className="bg-primary text-white rounded-3 p-4 shadow-lg text-center mb-4">
        <img
          src={manager.profilePic || "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"}
          alt="Manager"
          className="rounded-circle border border-3 border-light mb-3"
          width="120"
          height="120"
        />
        <h3>{manager.fullName || manager.username}</h3>
        <p className="mb-1">{manager.role ? "Project Manager" : "Manager"}</p>
        <span className="badge bg-success mb-2">✔ Verified</span>
        <p className="mb-1">{manager.company || "SkillLink Pvt. Ltd."}</p>
        <p className="mb-0">
          <i className="bi bi-geo-alt-fill"></i>{" "}
          {manager.location || "Bangalore, India"} •{" "}
          <i className="bi bi-star-fill text-warning"></i>{" "}
          {manager.rating || "4.9"} ({manager.reviews || 25} reviews)
        </p>
      </div>

      {/* Contact Info */}
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5 className="card-title text-primary mb-3">
            <i className="bi bi-person-lines-fill"></i> Contact Information
          </h5>
          <p><strong>Email:</strong> {manager.email || "Not provided"}</p>
          <p><strong>Phone:</strong> {manager.phone || "Not provided"}</p>
          <p><strong>Experience:</strong> {manager.experience || "N/A"}</p>
        </div>
      </div>

      {/* Skills */}
      {manager.skills && manager.skills.length > 0 && (
        <div className="card mb-4 shadow-sm">
          <div className="card-body">
            <h5 className="card-title text-primary mb-3">
              <i className="bi bi-lightning-charge-fill"></i> Management Skills
            </h5>
            <div className="d-flex flex-wrap gap-2">
              {manager.skills.map((skill, i) => (
                <span
                  key={i}
                  className="badge bg-secondary-subtle text-dark border rounded-pill px-3 py-2"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Projects (Optional Static Example) */}
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5 className="card-title text-primary mb-3">
            <i className="bi bi-briefcase-fill"></i> Completed Projects
          </h5>
          <ul>
            <li>Corporate Meetup 2024</li>
            <li>Wedding Event – Sharma Family</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
