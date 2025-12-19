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
 <nav 
className="
  fixed w-full z-50
  bg-gradient-to-r from-indigo-600/80 to-purple-800/80
  backdrop-blur-md
  border-b border-purple-400/80
  shadow-[0_10px_30px_rgba(99,102,241,0.35)]
  animate-navbar-glow
"

>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="flex justify-between h-16 items-center">
      
      {/* Logo */}
      <Link to="/" className="flex items-center justify-between space-x-2 mr-auto -ml-14">
        <img
          src="/icons/logo.svg"
          alt="Logo"
          className="w-80 h-80"  
        />
      </Link>
      {/* Desktop navigation */}
      <div className="hidden md:flex items-center space-x-8">
        {navigation.map((item) => (
          <button
            key={item.name}
            onClick={() => handleClick(item)}
            className={`
              relative text-sm font-medium tracking-wide
              transition-all duration-300
              ${
                activeSection === item.href.replace("#", "") ||
                (location.pathname === item.href && item.href.startsWith("/"))
                  ? "text-white"
                  : "text-white/80 hover:text-white"
              }
              after:content-[''] after:absolute after:left-0 after:-bottom-1
              after:h-[2px] after:w-0 after:bg-white
              after:transition-all after:duration-300
              hover:after:w-full
            `}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  </div>
</nav>

  );
};

export default Navbar;
