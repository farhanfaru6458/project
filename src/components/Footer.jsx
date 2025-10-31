import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn,FaBolt,FaTools,FaBrush } from "react-icons/fa";

const Footer = () => {

const [user, setUser] = useState(null);
   useEffect(() => {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (storedUser) {
        setUser(storedUser);
      }
    }, []);

  return (<>


    <footer
      className="text-white mt-5"
      style={{
        background: "linear-gradient(135deg, #007bff 0%, #6610f2 100%)",
        overflow: "hidden",
        position: "relative",
      }}
    >
            {user ?(<></>):(<section className="py-5 text-center  text-white position-relative overflow-hidden" >
  <div className="container py-5"  >
    <h2
      className="fw-bold mb-3 animate__animated animate__fadeInUp"
      data-aos="fade-up"
    >
      Ready to Get Started?
    </h2>
    <p
      className="text-white-50 mb-4 animate__animated animate__fadeInUp"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      Join SkillLink today and connect with the best local talent around you.
    </p>

    <div className="d-flex flex-wrap justify-content-center gap-3 mt-3" data-aos="zoom-in" data-aos-delay="400">
    <>
      <Link to="/labours" className="btn btn-warning btn-lg px-4 py-2 shadow-sm">
        Find Labour
      </Link>
      <Link
        to="/register-labour"
        className="btn btn-outline-light btn-lg px-4 py-2 shadow-sm"
      >
        Register as Labour
      </Link>
    </>
    </div>
  </div>

  {/* Decorative Floating Icons (optional for consistency) */}
  <FaBolt className="float-icon text-danger" style={{ top: "15%", left: "10%" }} />
  <FaTools className="float-icon text-danger" style={{ top: "70%", left: "80%" }} />
  <FaBrush className="float-icon text-danger" style={{ top: "40%", left: "50%" }} />
</section>
)}
      {/* Floating circles for subtle animation */}
      <motion.div
        className="position-absolute rounded-circle"
        style={{
          width: 200,
          height: 200,
          background: "rgba(255, 255, 255, 0.1)",
          top: "-50px",
          left: "-50px",
        }}
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="position-absolute rounded-circle"
        style={{
          width: 150,
          height: 150,
          background: "rgba(255, 255, 255, 0.08)",
          bottom: "-40px",
          right: "-40px",
        }}
        animate={{ x: [0, -20, 0], y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container py-5 position-relative z-1">
        {/* Logo & Description */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <h3 className="fw-bold">SkillLink</h3>
          <p className="text-light">
            Connecting skilled labours with the right opportunities.  
            Your trusted platform for quality and reliability.
          </p>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="d-flex justify-content-center gap-4 mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
            <motion.a
              key={i}
              href="#"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.95 }}
              className="text-white fs-4"
              style={{
                background: "rgba(255,255,255,0.15)",
                padding: "10px",
                borderRadius: "50%",
                boxShadow: "0 0 8px rgba(255,255,255,0.3)",
                transition: "all 0.3s ease",
              }}
            >
              <Icon />
            </motion.a>
          ))}
        </motion.div>

   {/* Links */}
<motion.div
  className="d-flex justify-content-center flex-wrap gap-4 mb-4"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ delay: 0.5, duration: 0.6 }}
>
  {[
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
    { name: "Privacy Policy", link: "/privacy-policy" },
    { name: "Terms of Service", link: "/terms-of-service" },
  ].map((item, i) => (
    <motion.a
      key={i}
      href={item.link}
      whileHover={{ scale: 1.1, color: "#ffd700" }}
      className="text-light text-decoration-none fw-medium"
    >
      {item.name}
    </motion.a>
  ))}
</motion.div>


        {/* Bottom Line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-center border-top border-light pt-3"
        >
          <p className="small mb-0">
            © {new Date().getFullYear()} <strong>SkillLink</strong>. All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
