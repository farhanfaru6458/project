import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="text-white mt-5"
      style={{
        background: "linear-gradient(135deg, #007bff 0%, #6610f2 100%)",
        overflow: "hidden",
        position: "relative",
      }}
    >
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
  );
};

export default Footer;
