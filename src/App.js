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

function App() {
  return (
    <>
    <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
                    <Route path="/labours" element={<LabourList />} />


<Route path="/labour/:id" element={<LabourDetails />} />
          <Route path="/register-labour" element={<RegisterLabour />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />

        </Routes>
    </>
  );
}

export default App;
