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
  bg-gradient-to-r from-indigo-600/80 to-purple-600/30
  backdrop-blur-md
  border-b border-purple-400/80
  shadow-[0_10px_30px_rgba(99,102,241,0.35)]
  animate-navbar-glow
"

>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="flex justify-between h-16 items-center">
      
      {/* Logo */}
      <Link to="/" className="flex items-center space-x-2">
        <img src="/logo.png" className="w-11 h-11" alt="Logo" />
        <span className="text-white font-bold text-lg">
          <span className="text-orange-500">Tech</span>
          <span>Parva</span>
          <span className="text-orange-500"> 3.0</span>
        </span>
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

        {/* Register button */}
        <Link
          to="/register"
          className="
            ml-4 px-5 py-2 rounded-full
            bg-orange-500/90 text-white font-semibold
            backdrop-blur-sm
            hover:bg-orange-500
            hover:scale-105
            transition-all duration-300
            shadow-md
          "
        >
          Register
        </Link>
      </div>

      {/* Mobile toggle */}
      {/* <div className="md:hidden flex items-center z-20">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white hover:text-white/80 transition"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div> */}
    </div>
  </div>

  {/* Mobile menu */}
  {/* {isOpen && (
    <div className="
      md:hidden
      bg-gradient-to-r from-indigo-600/40 to-purple-600/40
      backdrop-blur-md
      border-t border-white/20
    ">
      <div className="px-3 pt-3 pb-4 space-y-1">
        {navigation.map((item) => (
          <button
            key={item.name}
            onClick={() => {
              handleClick(item);
              setIsOpen(false);
            }}
            className="
              block w-full text-left
              px-3 py-2 rounded-md
              text-white/90
              hover:bg-white/10
              transition
            "
          >
            {item.name}
          </button>
        ))} */}

        {/* Mobile Register */}
        {/* <Link
          to="/register"
          className="
            // block mt-3 text-center
            // bg-orange-500/90 text-white
            // px-4 py-2 rounded-full font-semibold
            // hover:bg-orange-500
            // transition
          "
        >
          Register
        </Link> */}
      {/* </div> */}
    {/* </div> */}
  {/* )} */}
</nav>

  );
};

export default Navbar;
