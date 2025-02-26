import React from "react";
import "./Navbar.css";
import logo from "/src/assets/logo.png"; // ✅ เพิ่มโลโก้ (ตรวจสอบ path ให้ถูกต้อง)

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">
          <img src={logo} alt="Guidy Tour Logo" className="navbar-logo" /> {/* ✅ แสดงโลโก้ */}
          GuidyTour
        </a>
      </div>
      <ul className="nav-links">
        <li><a href="/packagetour.html">แพ็คเกจทัวร์</a></li>
        <li><a href="/about.html">เกี่ยวกับเรา</a></li>
        <li><a href="/contact.html">ติดต่อเรา</a></li>
        <li><a href="/login.html">เข้าสู่ระบบ</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
