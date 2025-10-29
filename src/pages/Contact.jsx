import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    alert(`Thank you, ${name}! Your message has been sent.`);
    e.target.reset();
  };

  return (
    <div className="bg-light py-5">
      <div className="container">
        {/* ===== Page Title ===== */}
        <div className="text-center mb-5">
          <h2 className="fw-bold text-primary">Contact Us</h2>
          <p className="text-muted">
            Have questions or need help? Reach out to us below.
          </p>
        </div>

        {/* ===== Contact Form & Info Section ===== */}
        <div className="row g-4">
          {/* Left: Contact Form */}
          <div className="col-12 col-lg-6">
            <div className="bg-white shadow-sm rounded-3 p-4 h-100">
              <h4 className="text-primary mb-4">Send us a Message</h4>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    name="subject"
                    className="form-control"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    name="message"
                    className="form-control"
                    placeholder="Your Message"
                    rows="5"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn w-100 text-white fw-semibold"
                  style={{
                    backgroundColor: "#ffb400",
                    border: "none",
                  }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Right: Contact Information */}
          <div className="col-12 col-lg-6">
            <div className="bg-white shadow-sm rounded-3 p-4 h-100">
              <h4 className="text-primary mb-4">Contact Information</h4>

              <div className="d-flex align-items-start bg-light p-3 rounded mb-3">
                <div className="fs-4 me-3">📞</div>
                <div>
                  <h6 className="mb-1 text-secondary">Phone</h6>
                  <p className="mb-0">
                    +91 999 000 8888
                    <br />
                    <small className="text-muted">Available 24/7</small>
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-start bg-light p-3 rounded mb-3">
                <div className="fs-4 me-3">✉️</div>
                <div>
                  <h6 className="mb-1 text-secondary">Email</h6>
                  <p className="mb-0">
                    skillslink@example.com
                    <br />
                    <small className="text-muted">We reply within 24 hours</small>
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-start bg-light p-3 rounded mb-3">
                <div className="fs-4 me-3">📍</div>
                <div>
                  <h6 className="mb-1 text-secondary">Location</h6>
                  <p className="mb-0">
                    123 Tech Street
                    <br />
                    City, State 12345
                  </p>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="mt-4">
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
              </div>

              {/* Social Media Links */}
              <div className="mt-4">
                <h6 className="text-secondary mb-2">Follow Us</h6>
                <div className="d-flex gap-3">
                  <i className="bi bi-facebook fs-4 text-primary"></i>
                  <i className="bi bi-twitter fs-4 text-info"></i>
                  <i className="bi bi-instagram fs-4 text-danger"></i>
                  <i className="bi bi-linkedin fs-4 text-primary"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
