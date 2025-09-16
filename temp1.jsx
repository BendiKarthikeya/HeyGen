import { NavLink } from "react-router";

function NavBarComponent() {
  return (
    <div className="bg-dark text-white position-fixed vh-100" style={{ width: "250px", zIndex: 1000 }}>
      <div className="p-4">
        <h4 className="mb-4 text-white">Heygen MVP</h4>
        <nav className="nav flex-column">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `nav-link d-flex align-items-center gap-2 py-2 ${isActive ? "active text-white bg-primary rounded" : "text-white-50"}`
            }
          >
            <span></span>
            <span>Home</span>
          </NavLink>
          <NavLink
            to="/avatars"
            className={({ isActive }) =>
              `nav-link d-flex align-items-center gap-2 py-2 ${isActive ? "active text-white bg-primary rounded" : "text-white-50"}`
            }
          >
            <span></span>
            <span>Avatars</span>
          </NavLink>
          <NavLink
            to="/voices"
            className={({ isActive }) =>
              `nav-link d-flex align-items-center gap-2 py-2 ${isActive ? "active text-white bg-primary rounded" : "text-white-50"}`
            }
          >
            <span></span>
            <span>Voices</span>
          </NavLink>
          <NavLink
            to="/create"
            className={({ isActive }) =>
              `nav-link d-flex align-items-center gap-2 py-2 ${isActive ? "active text-white bg-primary rounded" : "text-white-50"}`
            }
          >
            <span></span>
            <span>Create Video</span>
          </NavLink>
        </nav>
      </div>
    </div>
  );
}

export default NavBarComponent;
