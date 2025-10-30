import React from "react";
import { FaWrench, FaTint, FaBroom, FaTrash } from "react-icons/fa";
import "../css/Logo.css";

export default function Logo({ size = 140 }) {
  return (
    <div
      className="skilllink-logo"
      style={{
        width: size,
        height: size,
      }}
    >
      <div className="quadrant top-left">
        <FaWrench className="logo-icon" />
      </div>
      <div className="quadrant top-right">
        <FaTint className="logo-icon" />
      </div>
      <div className="quadrant bottom-left">
        <FaBroom className="logo-icon" />
      </div>
      <div className="quadrant bottom-right">
        <FaTrash className="logo-icon" />
      </div>
    </div>
  );
}
