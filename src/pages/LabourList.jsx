import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import { allLabours } from "../data/labours";
import LabourCard from "../components/LabourCard";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function LabourList() {
   const { state } = useLocation();
  const [skill, setSkill] = useState("All");
  const [city, setCity] = useState("All");
  const [experience, setExperience] = useState("All");


   useEffect(() => {
    if (state?.skill) {
      setSkill(state.skill);
    }
  }, [state]);
  const filtered = allLabours.filter(
    (l) =>
      (skill === "All" || l.skill === skill) &&
      (city === "All" || l.city === city) &&
      (experience === "All" || l.experience === experience)
  );

  return (
    <motion.div
      className="min-vh-100 bg-light"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Container className="py-5">
        {/* Page Title */}
        <motion.h2
          className="fw-bold text-primary mb-4 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Find Skilled Labour
        </motion.h2>

        {/* Filter Section */}
        <motion.div
          className="bg-white shadow-sm rounded-4 p-4 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Row className="align-items-center g-3">
            <Col md={4}>
              <Form.Select
                value={skill}
                onChange={(e) => setSkill(e.target.value)}
                className="py-2 border-0 shadow-sm rounded-3"
              >
                <option value="All">All Skills</option>
                <option>Electrician</option>
                <option>Event Manager</option>
                <option>Carpenter</option>
                <option>Painter</option>
                <option>Mason</option>
                <option>Cleaner</option>
                <option>Driver</option>
                <option>Tailor</option>
                <option>Gardener</option>
                <option>Plumber</option>
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

            <Col md={4}>
              <Form.Select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="py-2 border-0 shadow-sm rounded-3"
              >
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

            <Col md={4}>
              <Form.Select
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                className="py-2 border-0 shadow-sm rounded-3"
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
        </motion.div>

        {/* Labour Cards */}
        <motion.h5
          className="fw-bold mb-3 text-dark"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Available Labours ({filtered.length})
        </motion.h5>

        <Row xs={1} sm={2} md={3} lg={3} className="g-4">
          <AnimatePresence>
            {filtered.map((labour, index) => (
              <Col key={labour.id}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{
                    delay: index * 0.05,
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0px 8px 20px rgba(0,0,0,0.15)",
                  }}
                >
                  <LabourCard labour={labour} />
                </motion.div>
              </Col>
            ))}
          </AnimatePresence>
        </Row>

        {/* No Results Animation */}
        {filtered.length === 0 && (
          <motion.div
            className="text-center text-muted py-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h5>😕 No labours found matching your filters</h5>
          </motion.div>
        )}
      </Container>
    </motion.div>
  );
}
