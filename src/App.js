import "./App.css";
import Home from "./pages/Home";
import RegisterLabour from "./pages/RegisterLabour";
import Login from "./pages/Login";
import Contact from "./pages/Contact";

import About from "./pages/About";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import LabourDetails from "./pages/LabourDetails"
import {  Routes, Route } from "react-router-dom";
import LabourList from "./pages/LabourList"
import Navbar from "./components/Navbar";
import AboutUs from "./pages/About";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import ManagerDashboard from "./pages/Manager/ManagerDashboard";
import Footer from "./components/Footer";
import LabourProfile from "./pages/LabourProfile";
import ManagerProfile from "./pages/Manager/ManagerProfile";

// Fix Leaflet's default icon paths
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

function App() {
  return (
    <>
    <Navbar/>
        <Routes>
        
          <Route path="/contact" element={<Contact />} />

          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
                    <Route path="/labours" element={<LabourList />} />


          <Route path="/labour/:id" element={<LabourDetails />} />
          <Route path="/register-labour" element={<RegisterLabour />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/manager-dashboard" element={<ManagerDashboard/>}/>
          <Route path="/about" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/labour-profile" element={<LabourProfile/>}/>
          <Route path="/manager-profile" element={<ManagerProfile/>}/>
     
          <Route path="/register-labour" element={<RegisterLabour />} />
  <Route path="/" element={<Home />} />
        </Routes>
        <Footer/>
    </>
  );
}

export default App;