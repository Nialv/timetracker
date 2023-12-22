import { NavLink } from "react-router-dom";
import logo from '../assets/oowlish-logo.png'; 

type NavItem = {
  name: string;
  to: string;
};

const Navbar = () => {
  const navItems: NavItem[] = [
    { name: "Time Tracker", to: "/home" },
    { name: "Time leave / Vacations", to: "/vacations" },
    { name: "Payments", to: "/payments" },
    { name: "Reports", to: "/reports" },
    { name: "Holidays", to: "/holidays" },
  ];

  return (
    <nav className="bg-white shadow-sm mb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img className="h-8 w-15" src={logo} alt="Logo" />
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {navItems.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.to}
                    className={({ isActive }) =>
                      isActive
                        ? 'text-black px-3 py-2 border-b-2 border-orange-500 font-medium'
                        : 'text-black hover:text-orange-500 px-3 py-2'
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <button className="text-black bg-gray-100 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-200">
              Action Button
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
