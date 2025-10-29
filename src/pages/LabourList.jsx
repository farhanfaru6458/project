// src/pages/LabourList.jsx
import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import {allLabours} from "../data/labours";
import LabourCard from "../components/LabourCard";

export default function LabourList() {
  const [skill, setSkill] = useState("All");
  const [city, setCity] = useState("All");
  const [experience, setExperience] = useState("All");

  const filtered = allLabours.filter(
    (l) =>
      (skill === "All" || l.skill === skill) &&
      (city === "All" || l.city === city) &&
      (experience === "All" || l.experience === experience)
  );

  return (
    <Container className="my-4">
      <h3 className="mb-4 fw-bold">Find Labour</h3>

      {/* --- Filter Section --- */}
      <Row className="align-items-center mb-4 g-3">
        <Col md={3}>
          <Form.Select value={skill} onChange={(e) => setSkill(e.target.value)}>
            <option value="All">All Skills</option>
            <option>Electrician</option>
            <option>Plumber</option>
            <option>Carpenter</option>
            <option>Painter</option>
            <option>Mason</option>
            <option>Cleaner</option>
            <option>Driver</option>
            <option>Tailor</option>
            <option>Gardener</option>
            <option>Event Manager</option>
            <option>Caterer</option>
            <option>DJ & Sound Technician</option>
            <option>Decorator</option>
            <option>Photographer</option>
            <option>Makeup Artist</option>
            <option>Light & Stage Technician</option>
            <option>Event Host (MC)</option>
            <option>Videographer</option>
            <option>Cake Designer</option>
            <option>Sound Engineer</option>
            <option>Event Coordinator</option>
            <option>Water Supplier</option>
          </Form.Select>
        </Col>

        <Col md={3}>
          <Form.Select value={city} onChange={(e) => setCity(e.target.value)}>
            <option value="All">All Cities</option>
            <option>Trivandrum</option>
            <option>Kozhikode</option>
            <option>Kannur</option>
            <option>Thrissur</option>
            <option>Ernakulam</option>
            <option>Palakkad</option>
            <option>Malappuram</option>
          </Form.Select>
        </Col>

        <Col md={3}>
          <Form.Select
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          >
            <option value="All">All Experience</option>
            <option>3 years</option>
            <option>4 years</option>
            <option>5 years</option>
            <option>6 years</option>
            <option>7 years</option>
            <option>8 years</option>
            <option>9 years</option>
          </Form.Select>
        </Col>
      </Row>

      {/* --- Labour Cards --- */}
<h5 className="fw-bold mb-3">Available Labours ({filtered.length})</h5>
<Row xs={1} sm={2} md={3} lg={3} className="g-4">
  {filtered.map((labour) => (
    <Col key={labour.id}>
      <LabourCard labour={labour} /> {/* ✅ Reusable Card */}
    </Col>
  ))}
</Row>
    </Container>
  );
}
