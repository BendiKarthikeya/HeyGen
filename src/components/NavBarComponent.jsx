import { NavLink } from "react-router";

function NavBarComponent() {
  return (
    <div className="bg-dark text-white p-3 d-flex flex-column" style={{ width: "250px" }}>
      <h4 className="mb-4">Heygen App</h4>
      <nav className="nav flex-column">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `nav-link d-flex align-items-center gap-2 ${isActive ? "active text-white" : "text-white-50"}`
          }
        >
          <i className="bi bi-house"></i>
          <span>Home</span>
        </NavLink>
        <NavLink
          to="/avatars"
          className={({ isActive }) =>
            `nav-link d-flex align-items-center gap-2 ${isActive ? "active text-white" : "text-white-50"}`
          }
        >
          <i className="bi bi-person"></i>
          <span>Avatars</span>
        </NavLink>
        <NavLink
          to="/voices"
          className={({ isActive }) =>
            `nav-link d-flex align-items-center gap-2 ${isActive ? "active text-white" : "text-white-50"}`
          }
        >
          <i className="bi bi-mic"></i>
          <span>Voices</span>
        </NavLink>
        <NavLink
          to="/create"
          className={({ isActive }) =>
            `nav-link d-flex align-items-center gap-2 ${isActive ? "active text-white" : "text-white-50"}`
          }
        >
          <i className="bi bi-play-circle"></i>
          <span>Create Video</span>
        </NavLink>
      </nav>
    </div>
  );
}

export default NavBarComponent; 