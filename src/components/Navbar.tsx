import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(""); // Tracks the current section
  const location = useLocation();
  const navigate = useNavigate();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Events", href: "/events" },
    { name: "Timeline", href: "/schedule" },
    { name: "Sponsors", href: "#sponsors" },
  ];

  const handleScroll = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  interface NavigationItem {
    name: string;
    href: string;
  }

  const handleClick = (item: NavigationItem) => {
    if (item.href.startsWith("#")) {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => handleScroll(item.href), 300); // Allow time for the page to load
      } else {
        handleScroll(item.href);
      }
    } else {
      navigate(item.href);
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // Trigger when 60% of the section is in view
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg fixed w-full z-50">
      <div className="absolute inset-0 bg-black opacity-50 z-0 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/logo.png" className="w-11 h-11 " alt="Logo" />
              <span className="text-white font-bold text-lg">
                <span className="text-orange-500">Tech</span>
                <span>Parva</span>
                <span className="text-orange-500"> 3.0</span>
              </span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleClick(item)}
                className={`${
                  activeSection === item.href.replace("#", "") ||
                  (location.pathname === item.href && item.href.startsWith("/"))
                    ? "text-white font-bold border-b-2 border-white"
                    : "text-yellow-100 hover:text-white"
                } transition-colors duration-200 font-medium`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Mobile navigation toggle */}
          <div className="md:hidden flex items-center z-20">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-indigo-300 transition-colors duration-200"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-indigo-600 to-purple-600 relative z-20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  handleClick(item);
                  setIsOpen(false); // Close the menu
                }}
                className={`${
                  activeSection === item.href.replace("#", "") ||
                  (location.pathname === item.href && item.href.startsWith("/"))
                    ? "bg-indigo-700 text-white"
                    : "text-white hover:bg-indigo-700 hover:text-white"
                } block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
