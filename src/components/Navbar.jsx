import { Link, useLocation } from "react-router-dom";
import { navItems } from "../nav-items";

const Navbar = () => {
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  return (
    <nav className="bg-card text-card-foreground shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-primary">
              HN Reader
            </Link>
          </div>
          {!isLandingPage && (
            <div className="flex">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-foreground hover:text-primary hover:bg-secondary"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
