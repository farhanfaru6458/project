import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";
import {
  FaBolt,
  FaTools,
  FaHammer,
  FaBrush,
  FaBroom,
  FaCar,
  FaCut,
  FaLeaf,
  FaCalendarCheck,
  FaUtensils,
  FaMusic,
  FaPalette,
  FaCamera,
  FaStar,
  FaLightbulb,
  FaMicrophone,
  FaVideo,
  FaBirthdayCake,
  FaHeadphones,
  FaUserTie,
  FaWater,
  FaUserShield,
  FaClock,
  FaHandshake,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";
import "../css/Home.css";
import { useNavigate } from "react-router-dom";



export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
const navigate = useNavigate();
  const categories = [
    { icon: <FaBolt />, title: "Electrician", desc: "Expert in electrical setup and maintenance." },
    { icon: <FaTools />, title: "Plumber", desc: "Professional plumbing and pipework service." },
    { icon: <FaHammer />, title: "Carpenter", desc: "Custom furniture and woodwork services." },
    { icon: <FaBrush />, title: "Painter", desc: "High-quality painting and wall design." },
    { icon: <FaHammer />, title: "Mason", desc: "Expert masonry and construction work." },
    { icon: <FaBroom />, title: "Cleaner", desc: "Reliable cleaning and sanitation service." },
    { icon: <FaCar />, title: "Driver", desc: "Professional drivers for all occasions." },
    { icon: <FaCut />, title: "Tailor", desc: "Custom stitching and clothing alteration." },
    { icon: <FaLeaf />, title: "Gardener", desc: "Expert gardening and landscaping service." },
    { icon: <FaCalendarCheck />, title: "Event Manager", desc: "Organize and execute perfect events." },
    { icon: <FaUtensils />, title: "Caterer", desc: "Delicious catering for all types of events." },
    { icon: <FaMusic />, title: "DJ & Sound Technician", desc: "Make every event sound perfect." },
    { icon: <FaPalette />, title: "Decorator", desc: "Beautiful event and stage decorations." },
    { icon: <FaCamera />, title: "Photographer", desc: "Capture special moments with style." },
    { icon: <FaStar />, title: "Makeup Artist", desc: "Professional makeup and beauty service." },
    { icon: <FaLightbulb />, title: "Light & Stage Technician", desc: "Event lighting and stage setup expert." },
    { icon: <FaMicrophone />, title: "Event Host (MC)", desc: "Engaging hosts for your events." },
    { icon: <FaVideo />, title: "Videographer", desc: "High-quality video coverage for all events." },
    { icon: <FaBirthdayCake />, title: "Cake Designer", desc: "Creative and delicious cake designs." },
    { icon: <FaHeadphones />, title: "Sound Engineer", desc: "Perfect audio mixing and sound setup." },
    { icon: <FaUserTie />, title: "Event Coordinator", desc: "Professional event planning and execution." },
    { icon: <FaWater />, title: "Water Supplier", desc: "Reliable water supply service for all events." },
    { icon: <FaLightbulb />, title: "Light & Stage Technician", desc: "Event lighting and stage setup expert." },
    { icon: <FaMicrophone />, title: "Event Host (MC)", desc: "Engaging hosts for your events." },
  ];

  const chunkSize = 6;
  const categoryChunks = [];
  for (let i = 0; i < categories.length; i += chunkSize) {
    categoryChunks.push(categories.slice(i, i + chunkSize));
  }
 const [user, setUser] = useState(null);
   useEffect(() => {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (storedUser) {
        setUser(storedUser);
      }
    }, []);
  return (
    <div className="text-secondary">

      {/* Navbar */}
      

    {/* Hero Section */}
<section className="hero-section text-center py-5 text-white position-relative overflow-hidden">
  {/* Floating Icons Layer */}
  <div className="floating-icons">
    <FaBolt className="float-icon text-warning" style={{ top: "10%", left: "5%" }} />
    <FaTools className="float-icon text-info" style={{ top: "25%", left: "85%" }} />
    <FaBrush className="float-icon text-danger" style={{ top: "70%", left: "10%" }} />
    <FaBroom className="float-icon text-light" style={{ top: "60%", left: "80%" }} />
    <FaCar className="float-icon text-primary" style={{ top: "15%", left: "45%" }} />
    <FaHammer className="float-icon text-success" style={{ top: "80%", left: "50%" }} />
    <FaLeaf className="float-icon text-success" style={{ top: "40%", left: "15%" }} />
    <FaBrush className="float-icon text-warning" style={{ top: "50%", left: "70%" }} />
    <FaLightbulb className="float-icon text-warning" style={{ top: "20%", left: "30%" }} />
    <FaMusic className="float-icon text-info" style={{ top: "85%", left: "20%" }} />
  </div>


  {/* Hero Content */}
  <div className="container py-5 position-relative z-3">
    <h1
      className="fw-bold mb-3 animate__animated animate__fadeInUp"
      data-aos="fade-up"
    >
      Connecting Local Talent with <br /> Local Opportunities
    </h1>
    <p
      className="text-white-50 mb-4 animate__animated animate__fadeInUp"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      Find skilled labours and book them instantly in your area
    </p>
  <div data-aos="zoom-in" data-aos-delay="400">
       {user ? (
      <Link to="/labours" className="btn btn-warning btn-lg mx-2">
        Find Labour
      </Link>):(<>
         <Link to="/labours" className="btn btn-warning btn-lg mx-2">
        Find Labour
      </Link>
        <Link to="/register-labour" className="btn btn-outline-light btn-lg mx-2">
        Register as Labour
      </Link> </>)}
    </div>
   
      
    
  </div>
</section>
      {/* Why Choose Section */}
      <section id="features" className="py-5 bg-white text-center">
        <div className="container">
          <h2 className="fw-bold mb-5" data-aos="fade-up">
            Why Choose SkillLink?
          </h2>
          <div className="row g-4">
            <FeatureCard
              icon={<FaUserShield />}
              title="Verified Professionals"
              text="All labours are verified and background checked for your safety."
              aos="fade-right"
            />
            <FeatureCard
              icon={<FaClock />}
              title="Quick Booking"
              text="Book skilled professionals in minutes using our instant system."
              aos="zoom-in"
            />
            <FeatureCard
              icon={<FaHandshake />}
              title="Trusted Network"
              text="Join thousands of verified workers and managers on SkillLink."
              aos="fade-left"
            />
          </div>
        </div>
      </section>

      {/* Labour Categories Carousel */}
      <section id="categories" className="py-5 bg-light text-center">
        <div className="p-5 ">
          <h2 className="fw-bold mb-4" data-aos="fade-up">
            Our Labour Categories
          </h2>

          <div
            id="categoryCarousel"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
            data-bs-interval="3500"
          >
            <div className="carousel-inner bg-white">
              {categoryChunks.map((chunk, i) => (
                <div key={i} className={`carousel-item ${i === 0 ? "active" : ""}`}>
                  <div className="row g-4 justify-content-center">
                    {chunk.map((c, j) => (
                      <div
                        key={j}
                        className="col-12 col-sm-6 col-md-4 col-lg-2"
                        data-aos="zoom-in"
                        data-aos-delay={j * 100}
                      >
<div
  className="card border-0 shadow-lg p-4 h-100 category-card animate__animated animate__fadeInUp"
  style={{ cursor: "pointer", transition: "0.3s" }}
  onClick={() => navigate("/labours", { state: { skill: c.title } })}
>
  <div className="display-5 text-primary mb-3">{c.icon}</div>
  <h5 className="fw-semibold">{c.title}</h5>
  <p className="text-muted small">{c.desc}</p>
</div>

                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Controls */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#categoryCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon bg-dark rounded-circle p-3 shadow"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#categoryCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon bg-dark rounded-circle p-3 shadow"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
      {user ?(<></>):(<section className="py-5 text-center bg-primary text-white position-relative overflow-hidden">
  <div className="container py-5">
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

    <div data-aos="zoom-in" data-aos-delay="400">
      <Link to="/register-labour" className="btn btn-warning btn-lg mx-2 shadow-sm">
        Register as Labour
      </Link>
      <Link to="/find" className="btn btn-outline-light btn-lg mx-2">
        View Labourers
      </Link>
    </div>
  </div>

  {/* Decorative Floating Icons (optional for consistency) */}
  <FaBolt className="float-icon text-danger" style={{ top: "15%", left: "10%" }} />
  <FaTools className="float-icon text-danger" style={{ top: "70%", left: "80%" }} />
  <FaBrush className="float-icon text-danger" style={{ top: "40%", left: "50%" }} />
</section>
)}

     
    </div>
  );
}

function FeatureCard({ icon, title, text, aos }) {
  return (
    <div className="col-md-4" data-aos={aos}>
      <div className="card border-0 shadow-sm h-100 p-4 card-animate">
        <div className="display-5 text-primary mb-3">{icon}</div>
        <h5 className="fw-semibold mb-2">{title}</h5>
        <p className="text-muted small">{text}</p>
      </div>
    </div>
  );
}
