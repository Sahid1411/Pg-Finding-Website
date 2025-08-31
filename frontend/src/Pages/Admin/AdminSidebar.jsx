import { useState } from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [active, setActive] = useState("home");

  const menuItems = [
    { name: "Users", icon: <i className="fa-solid fa-users" />, badge: 2 },
    { name: "See Owners", icon: <i className="fa-solid fa-users" /> },
    { name: "See Pg", icon: <i className="fa-solid fa-house" /> }, 
    { name: "Add Pg", icon: <i className="fa-solid fa-credit-card" /> },
    { name: "Profile Settings", icon: <i className="fa-solid fa-gear"></i> },
    // { name: "See Contacts", icon: <i className="fa-solid fa-circle-question"></i> },
  ];
  const adminId = localStorage.getItem("adminId")?.replace(/"/g, "");

  return (
    <div className="d-flex flex-column p-3 text-white vh-100" style={{ width: "250px" }}>
      <Link to={`/admin-panel/${adminId}`} style={{color:'white',textDecoration:'none',fontSize:'25px'}} className="fw-bold mb-4">Admin Panel</Link>

      {/* Search Bar */}
      <div className="mb-3 position-relative">
        <input type="text" className="form-control ps-4" placeholder="Search" />
        <i className="fa-solid fa-magnifying-glass position-absolute top-50 start-0 translate-middle-y ms-2 text-secondary"></i>
      </div>

      {/* Menu Items */}  
      <Nav className="flex-column">
        {menuItems.map((item, index) => (
          <Nav.Item key={index}>
            <Link
              to={`/${item.name.toLowerCase().replace(/\s+/g, "-")}`}
              onClick={() => setActive(item.name.toLowerCase())}
              className={`d-flex justify-content-between align-items-center text-white text-decoration-none py-2 px-3 rounded ${
                active === item.name.toLowerCase() ? "bg-secondary" : "hover-bg-light"
              }`}
              style={{ cursor: "pointer" }}
            >
              <span className="d-flex align-items-center gap-2">
                {item.icon} {item.name}
              </span>
              {item.badge && (
                <span className="badge bg-white text-primary fw-bold">{item.badge}</span>
              )}
            </Link>
          </Nav.Item>
        ))}
      </Nav>

      {/* Logout Button */}
      <div className="my-4">  
        <button
          className="btn btn-outline-light w-100"
          onClick={() => {
            localStorage.removeItem("authtoken");
            localStorage.removeItem("adminId");
            window.location.href = "/admin-login";
          }}
        >
          <i className="fa-solid fa-right-from-bracket me-2"></i> Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
