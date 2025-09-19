import { NavLink } from "react-router";
import { useState } from "react";

function NavBarComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile toggle button */}
      <button 
        className="btn btn-dark d-md-none position-fixed" 
        style={{ top: "10px", left: "10px", zIndex: 1001 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        
      </button>
      
      {/* Sidebar */}
      <div className={`bg-dark text-white position-fixed vh-100 ${isOpen ? 'd-block' : 'd-none d-md-block'}`} 
           style={{ width: "250px", zIndex: 1000 }}>
        <div className="p-4">
          <h4 className="mb-4 text-white">Heygen MVP</h4>
          <nav className="nav flex-column">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `nav-link d-flex align-items-center gap-2 py-2 ${isActive ? "active text-white bg-primary rounded" : "text-white-50"}`
              }
              onClick={() => setIsOpen(false)}
            >
              <span></span>
              <span>Home</span>
            </NavLink>
            <NavLink
              to="/avatars"
              className={({ isActive }) =>
                `nav-link d-flex align-items-center gap-2 py-2 ${isActive ? "active text-white bg-primary rounded" : "text-white-50"}`
              }
              onClick={() => setIsOpen(false)}
            >
              <span></span>
              <span>Avatars</span>
            </NavLink>
            <NavLink
              to="/voices"
              className={({ isActive }) =>
                `nav-link d-flex align-items-center gap-2 py-2 ${isActive ? "active text-white bg-primary rounded" : "text-white-50"}`
              }
              onClick={() => setIsOpen(false)}
            >
              <span></span>
              <span>Voices</span>
            </NavLink>
            <NavLink
              to="/create"
              className={({ isActive }) =>
                `nav-link d-flex align-items-center gap-2 py-2 ${isActive ? "active text-white bg-primary rounded" : "text-white-50"}`
              }
              onClick={() => setIsOpen(false)}
            >
              <span></span>
              <span>Create Video</span>
            </NavLink>
            <NavLink
              to="/text-generator"
              className={({ isActive }) =>
                `nav-link d-flex align-items-center gap-2 py-2 ${isActive ? "active text-white bg-primary rounded" : "text-white-50"}`
              }
              onClick={() => setIsOpen(false)}
            >
              <span></span>
              <span>Text Generator</span>
            </NavLink>
            <NavLink
              to="/social-post"
              className={({ isActive }) =>
                `nav-link d-flex align-items-center gap-2 py-2 ${isActive ? "active text-white bg-primary rounded" : "text-white-50"}`
              }
              onClick={() => setIsOpen(false)}
            >
              <span></span>
              <span>Social Post</span>
            </NavLink>
          </nav>
        </div>
      </div>
      
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="d-md-none position-fixed bg-dark bg-opacity-50" 
          style={{ top: 0, left: 0, right: 0, bottom: 0, zIndex: 999 }}
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

export default NavBarComponent;
