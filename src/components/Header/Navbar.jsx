import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="container mx-auto">
        <div className="navbar bg-transparent">
          <div className="flex-1">
            <NavLink to="/">
              <img src="/images/Logo.png" alt="" />
            </NavLink>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1 text-lg">
              <li>
                <NavLink
                  className={({ isActive, isPending }) =>
                    isActive
                      ? " text-primary underline bg-transparent"
                      : isPending
                      ? "pending"
                      : ""
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive, isPending }) =>
                    isActive
                      ? "text-primary underline bg-transparent"
                      : isPending
                      ? "pending"
                      : ""
                  }
                  to="/donation"
                >
                  Donation
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive, isPending }) =>
                    isActive
                      ? "text-primary underline bg-transparent"
                      : isPending
                      ? "pending"
                      : ""
                  }
                  to="/statistics"
                >
                  Statistics
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
