import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="container mx-auto">
        <div className="navbar bg-transparent">
          <div className="navbar-start w-full justify-between ">
            <NavLink to="/">
              <img className="w-36 md:w-auto" src="/images/Logo.png" alt="" />
            </NavLink>
            <div className="dropdown float-left">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 -left-40"
              >
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
                    to="/donate"
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
          <div className="navbar-end hidden lg:flex">
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
                  to="/donate"
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
