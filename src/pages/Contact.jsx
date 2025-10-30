import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    alert(`Thank you, ${name}! Your message has been sent.`);
    e.target.reset();
  };

  // Animation variants for sections
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div
      className="bg-light py-5"
      style={{ minHeight: "100vh", overflow: "hidden" }}
    >
      <div className="container">
        {/* ===== Page Title ===== */}
        <motion.div
          className="text-center mb-5"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <motion.h2
            className="fw-bold text-primary"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Contact Us
          </motion.h2>
          <motion.p
            className="text-muted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Have questions or need help? Reach out to us below.
          </motion.p>
        </motion.div>

        {/* ===== Contact Form & Info Section ===== */}
        <div className="row g-4">
          {/* Left: Contact Form */}
          <motion.div
            className="col-12 col-lg-6"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
          >
            <motion.div
              className="bg-white shadow-sm rounded-3 p-4 h-100"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <h4 className="text-primary mb-4">Send us a Message</h4>
              <form onSubmit={handleSubmit}>
                <motion.div
                  className="mb-3"
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp}
                  custom={2}
                >
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your Name"
                    required
                  />
                </motion.div>
                <motion.div className="mb-3" variants={fadeUp} custom={3}>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Your Email"
                    required
                  />
                </motion.div>
                <motion.div className="mb-3" variants={fadeUp} custom={4}>
                  <input
                    type="text"
                    name="subject"
                    className="form-control"
                    placeholder="Subject"
                    required
                  />
                </motion.div>
                <motion.div className="mb-3" variants={fadeUp} custom={5}>
                  <textarea
                    name="message"
                    className="form-control"
                    placeholder="Your Message"
                    rows="5"
                    required
                  ></textarea>
                </motion.div>
                <motion.button
                  type="submit"
                  className="btn w-100 text-white fw-semibold"
                  style={{
                    backgroundColor: "#ffb400",
                    border: "none",
                  }}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#ff9900",
                    boxShadow: "0 4px 15px rgba(255, 180, 0, 0.4)",
                  }}
                  whileTap={{ scale: 0.97 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </motion.div>

          {/* Right: Contact Information */}
          <motion.div
            className="col-12 col-lg-6"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
          >
            <motion.div
              className="bg-white shadow-sm rounded-3 p-4 h-100"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <h4 className="text-primary mb-4">Contact Information</h4>

              {[
                {
                  icon: "📞",
                  title: "Phone",
                  text: (
                    <>
                      +91 999 000 8888
                      <br />
                      <small className="text-muted">Available 24/7</small>
                    </>
                  ),
                },
                {
                  icon: "✉️",
                  title: "Email",
                  text: (
                    <>
                      skillslink@example.com
                      <br />
                      <small className="text-muted">
                        We reply within 24 hours
                      </small>
                    </>
                  ),
                },
                {
                  icon: "📍",
                  title: "Location",
                  text: (
                    <>
                      123 Tech Street
                      <br />
                      City, State 12345
                    </>
                  ),
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="d-flex align-items-start bg-light p-3 rounded mb-3"
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.2 }}
                >
                  <div className="fs-4 me-3">{item.icon}</div>
                  <div>
                    <h6 className="mb-1 text-secondary">{item.title}</h6>
                    <p className="mb-0">{item.text}</p>
                  </div>
                </motion.div>
              ))}

              {/* Opening Hours */}
              <motion.div
                className="mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <h6 className="text-secondary mb-2">Opening Hours</h6>
                <table className="table table-borderless table-sm text-secondary">
                  <tbody>
                    <tr>
                      <td>Mon - Fri</td>
                      <td>9:00 AM - 6:00 PM</td>
                    </tr>
                    <tr>
                      <td>Saturday</td>
                      <td>10:00 AM - 4:00 PM</td>
                    </tr>
                    <tr>
                      <td>Sunday</td>
                      <td>Closed</td>
                    </tr>
                  </tbody>
                </table>
              </motion.div>

              {/* Social Media Links */}
              <motion.div
                className="mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <h6 className="text-secondary mb-2">Follow Us</h6>
                <div className="d-flex gap-3">
                  <motion.i
                    whileHover={{ scale: 1.2, color: "#0d6efd" }}
                    className="bi bi-facebook fs-4 text-primary"
                  ></motion.i>
                  <motion.i
                    whileHover={{ scale: 1.2, color: "#1da1f2" }}
                    className="bi bi-twitter fs-4 text-info"
                  ></motion.i>
                  <motion.i
                    whileHover={{ scale: 1.2, color: "#e1306c" }}
                    className="bi bi-instagram fs-4 text-danger"
                  ></motion.i>
                  <motion.i
                    whileHover={{ scale: 1.2, color: "#0077b5" }}
                    className="bi bi-linkedin fs-4 text-primary"
                  ></motion.i>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
