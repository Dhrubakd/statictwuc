import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { FaChevronDown, FaBars, FaTimes, FaUser, FaCheckCircle, FaHandshake, FaProjectDiagram, FaTrophy, FaBullseye, FaGlobe, FaCamera, FaPlay, FaNewspaper, FaBroadcastTower, FaBook, FaBell, FaBriefcase } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => {
    setMenuOpen(false);
    setActiveDropdown(null);
  };

  const handleDropdownToggle = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  // Scroll to top when navigating between routes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location]);

  // Lock scroll on mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <>
      <style>{`
        .navbar-glass {
          backdrop-filter: blur(25px);
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.85) 0%, rgba(30, 58, 138, 0.9) 100%);
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }
        .navbar-solid {
          background: linear-gradient(135deg, #3b82f6 0%, #1e3a8a 100%);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        }
        
        .logo-glow {
          filter: drop-shadow(0 0 8px rgba(251, 191, 36, 0.3));
        }
        
        .nav-link {
          position: relative;
          font-weight: 500;
          letter-spacing: 0.025em;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        .nav-link::before {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 50%;
          width: 0;
          height: 3px;
          background: linear-gradient(90deg, #fbbf24, #f59e0b, #d97706);
          border-radius: 2px;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          transform: translateX(-50%);
        }
        
        .nav-link:hover::before,
        .nav-link.active::before {
          width: 100%;
        }
        
        .nav-link:hover {
          transform: translateY(-2px);
          text-shadow: 0 2px 8px rgba(251, 191, 36, 0.3);
        }
        
        .dropdown-container {
          position: relative;
        }
        
        .dropdown-menu {
          position: absolute;
          top: calc(100% + 12px);
          left: 0;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(20px);
          border-radius: 16px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15), 0 8px 25px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.8);
          opacity: 0;
          visibility: hidden;
          transform: translateY(-15px) scale(0.9);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          z-index: 1000;
          min-width: 280px;
          overflow: hidden;
        }
        
        .dropdown-container:hover .dropdown-menu,
        .dropdown-menu.show {
          opacity: 1;
          visibility: visible;
          transform: translateY(0) scale(1);
        }
        
        .dropdown-item {
          display: flex;
          align-items: center;
          padding: 14px 20px;
          color: #374151;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
          border-radius: 8px;
          margin: 4px 8px;
          position: relative;
          overflow: hidden;
        }
        
        .dropdown-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.1), transparent);
          transition: left 0.5s ease;
        }
        
        .dropdown-item:hover::before {
          left: 100%;
        }
        
        .dropdown-item:hover {
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(147, 197, 253, 0.12) 100%);
          transform: translateX(8px);
          color: #1d4ed8;
        }
        
        .dropdown-icon {
          width: 18px;
          height: 18px;
          margin-right: 12px;
          transition: all 0.3s ease;
        }
        
        .dropdown-item:hover .dropdown-icon {
          transform: scale(1.1) rotate(5deg);
        }
        
        .mobile-menu {
          background: linear-gradient(135deg, rgba(30, 58, 138, 0.98) 0%, rgba(59, 130, 246, 0.95) 100%);
          backdrop-filter: blur(25px);
          border-top: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
          max-height: calc(100vh - 80px);
          overflow-y: auto;
        }
        
        .mobile-menu-item {
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .mobile-menu-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transition: left 0.5s ease;
        }
        
        .mobile-menu-item:hover::before {
          left: 100%;
        }
        
        .mobile-menu-item:hover {
          background: rgba(255, 255, 255, 0.1);
        }
        
        .mobile-nav-link {
          display: block;
          color: white;
          padding: 12px 16px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
          position: relative;
        }
        
        .mobile-nav-link:hover,
        .mobile-nav-link.active {
          color: #fbbf24;
          background: rgba(251, 191, 36, 0.1);
          transform: translateX(8px);
        }
        
        .mobile-dropdown-toggle {
          padding: 12px;
          color: white;
          background: none;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          border-radius: 8px;
        }
        
        .mobile-dropdown-toggle:hover {
          background: rgba(255, 255, 255, 0.1);
          color: #fbbf24;
        }
        
        .hamburger-line {
          display: block;
          width: 22px;
          height: 3px;
          background: white;
          margin: 3px 0;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 2px;
          transform-origin: center;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
        }
        
        .hamburger-active .hamburger-line:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }
        
        .hamburger-active .hamburger-line:nth-child(2) {
          opacity: 0;
          transform: scale(0);
        }
        
        .hamburger-active .hamburger-line:nth-child(3) {
          transform: rotate(-45deg) translate(7px, -6px);
        }
        
        .donate-button {
          background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
          box-shadow: 0 4px 15px rgba(245, 158, 11, 0.4);
          transition: all 0.3s ease;
        }
        
        .donate-button:hover {
          background: linear-gradient(135deg, #d97706 0%, #b45309 100%);
          box-shadow: 0 6px 20px rgba(245, 158, 11, 0.6);
          transform: translateY(-2px);
        }
        

        
        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .mobile-menu-enter {
          animation: slideInDown 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        @media (max-width: 1023px) {
          .dropdown-menu {
            position: static !important;
            opacity: 1 !important;
            visibility: visible !important;
            transform: none !important;
            background: rgba(255, 255, 255, 0.1) !important;
            backdrop-filter: blur(15px) !important;
            box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2) !important;
            border: 1px solid rgba(255, 255, 255, 0.2) !important;
            margin: 8px 0 !important;
            min-width: auto !important;
          }
          
          .dropdown-item {
            color: white !important;
            margin: 2px 4px !important;
            padding: 10px 16px !important;
          }
          
          .dropdown-item:hover {
            background: rgba(255, 255, 255, 0.15) !important;
            color: #fbbf24 !important;
          }
        }
      `}</style>

      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'navbar-glass' : 'navbar-solid'
      }`}>
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo Section */}
            <div className="flex items-center space-x-4">
              <NavLink to="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <img 
                    src="/images/logo/TWUC.png" 
                    alt="TWUC Logo" 
                    className="h-10 lg:h-12 w-auto logo-glow group-hover:scale-110 transition-transform duration-300" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300"></div>
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-xl lg:text-2xl font-bold text-white">
                    <span className="bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">
                      TWUC
                    </span>
                  </h1>
                  {/* <p className="text-xs lg:text-sm text-blue-200 font-medium">
                    Women Upliftment Center
                  </p> */}
                </div>
              </NavLink>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {/* Home */}
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `nav-link text-white px-3 py-2 rounded-lg ${isActive ? 'active' : ''}`
                }
              >
                Home
              </NavLink>

              {/* About Us Dropdown */}
              <div className="dropdown-container">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `nav-link text-white px-3 py-2 rounded-lg ${isActive ? 'active' : ''}`
                  }
                >
                  About Us
                </NavLink>
                <div className="dropdown-menu">
                  <NavLink to="/about/leadership" className="dropdown-item">
                    <FaUser className="dropdown-icon text-blue-600" />
                    <span>Leadership</span>
                  </NavLink>
                  <NavLink to="/about/partnerships" className="dropdown-item">
                    <FaHandshake className="dropdown-icon text-orange-500" />
                    <span>Partnerships</span>
                  </NavLink>
                  <NavLink to="/about/projects" className="dropdown-item">
                    <FaProjectDiagram className="dropdown-icon text-green-500" />
                    <span>Running Projects</span>
                  </NavLink>
                  <NavLink to="/about/completed-projects" className="dropdown-item">
                    <FaCheckCircle className="dropdown-icon text-blue-600" />
                    <span>Completed Projects</span>
                  </NavLink>
                </div>
              </div>

              {/* Our Works Dropdown */}
              <div className="dropdown-container">
                <NavLink
                  to="/works"
                  className={({ isActive }) =>
                    `nav-link text-white px-3 py-2 rounded-lg ${isActive ? 'active' : ''}`
                  }
                >
                  Our Works
                </NavLink>
                <div className="dropdown-menu">
                  <NavLink to="/works/programs" className="dropdown-item">
                    <FaProjectDiagram className="dropdown-icon text-green-500" />
                    <span>Programs</span>
                  </NavLink>
                  <NavLink to="/works/achievements" className="dropdown-item">
                    <FaTrophy className="dropdown-icon text-yellow-500" />
                    <span>Achievements</span>
                  </NavLink>
                  <NavLink to="/works/milestone" className="dropdown-item">
                    <FaBullseye className="dropdown-icon text-blue-600" />
                    <span>Milestones</span>
                  </NavLink>
                  <NavLink to="/works/geographical" className="dropdown-item">
                    <FaGlobe className="dropdown-icon text-blue-600" />
                    <span>Geographical Reach</span>
                  </NavLink>
                </div>
              </div>

              {/* Gallery Dropdown */}
              <div className="dropdown-container">
                <NavLink
                  to="/gallery"
                  className={({ isActive }) =>
                    `nav-link text-white px-3 py-2 rounded-lg ${isActive ? 'active' : ''}`
                  }
                >
                  Gallery
                </NavLink>
                <div className="dropdown-menu">
                  <NavLink to="/gallery/photos" className="dropdown-item">
                    <FaCamera className="dropdown-icon text-blue-600" />
                    <span>Photos</span>
                  </NavLink>
                  <NavLink to="/gallery/videos" className="dropdown-item">
                    <FaPlay className="dropdown-icon text-pink-500" />
                    <span>Videos</span>
                  </NavLink>
                </div>
              </div>

              {/* Resources Dropdown */}
              <div className="dropdown-container">
                <NavLink
                  to="/resources"
                  className={({ isActive }) =>
                    `nav-link text-white px-3 py-2 rounded-lg ${isActive ? 'active' : ''}`
                  }
                >
                  Resources
                </NavLink>
                <div className="dropdown-menu">
                  <NavLink to="/resources/news-events" className="dropdown-item">
                    <FaNewspaper className="dropdown-icon text-orange-500" />
                    <span>News & Events</span>
                  </NavLink>
                  <NavLink to="/resources/media-coverage" className="dropdown-item">
                    <FaBroadcastTower className="dropdown-icon text-red-500" />
                    <span>Media Coverage</span>
                  </NavLink>
                  <NavLink to="/resources/publications" className="dropdown-item">
                    <FaBook className="dropdown-icon text-blue-600" />
                    <span>Publications</span>
                  </NavLink>
                  <NavLink to="/resources/notices" className="dropdown-item">
                    <FaBell className="dropdown-icon text-green-500" />
                    <span>Notices</span>
                  </NavLink>
                </div>
              </div>

              {/* Other Links */}
              <NavLink
                to="/opportunities"
                className={({ isActive }) =>
                  `nav-link text-white px-3 py-2 rounded-lg ${isActive ? 'active' : ''}`
                }
              >
                Opportunities
              </NavLink>

              <NavLink
                to="/contact-us"
                className={({ isActive }) =>
                  `nav-link text-white px-3 py-2 rounded-lg ${isActive ? 'active' : ''}`
                }
              >
                Contact
              </NavLink>
            </div>

            {/* Action Buttons & Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* Donate Button - Desktop */}
              <NavLink
                to="/donate-us"
                className="hidden lg:block donate-button text-white font-semibold px-6 py-2 rounded-full text-sm"
              >
                Donate Now
              </NavLink>

              {/* ...admin button removed... */}

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMenu}
                className={`lg:hidden relative p-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all duration-300 focus:outline-none shadow-lg ${menuOpen ? 'hamburger-active' : ''}`}
              >
                <div className="w-6 h-5 flex flex-col justify-between">
                  <span className="hamburger-line"></span>
                  <span className="hamburger-line"></span>
                  <span className="hamburger-line"></span>
                </div>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        <div
          className={`lg:hidden mobile-menu ${
            menuOpen ? "block mobile-menu-enter" : "hidden"
          } absolute top-full left-0 w-full z-40`}
        >
          <div className="px-4 py-6 space-y-4">
            {/* Mobile Home */}
            <div className="mobile-menu-item">
              <NavLink
                to="/"
                className="block text-white py-3 px-4 rounded-lg"
                onClick={closeMenu}
              >
                Home
              </NavLink>
            </div>

            {/* Mobile About Us */}
            <div className="mobile-menu-item">
              <div className="flex items-center justify-between">
                <NavLink
                  to="/about"
                  className="block text-white py-3 px-4 rounded-lg flex-1"
                  onClick={closeMenu}
                >
                  About Us
                </NavLink>
                <button
                  onClick={() => handleDropdownToggle("about")}
                  className="p-3 text-white"
                >
                  <FaChevronDown className={`transform transition-transform duration-300 ${activeDropdown === 'about' ? 'rotate-180' : ''}`} />
                </button>
              </div>
              <div className={`dropdown-menu ${activeDropdown === "about" ? "show" : ""}`}>
                <NavLink to="/about/leadership" className="dropdown-item" onClick={closeMenu}>
                  <FaUser className="dropdown-icon" />
                  <span>Leadership</span>
                </NavLink>
                <NavLink to="/about/partnerships" className="dropdown-item" onClick={closeMenu}>
                  <FaHandshake className="dropdown-icon" />
                  <span>Partnerships</span>
                </NavLink>
                <NavLink to="/about/projects" className="dropdown-item" onClick={closeMenu}>
                  <FaProjectDiagram className="dropdown-icon" />
                  <span>Running Projects</span>
                </NavLink>
                <NavLink to="/about/completed-projects" className="dropdown-item" onClick={closeMenu}>
                  <FaCheckCircle className="dropdown-icon" />
                  <span>Completed Projects</span>
                </NavLink>
              </div>
            </div>

            {/* Mobile Our Works */}
            <div className="mobile-menu-item">
              <div className="flex items-center justify-between">
                <NavLink
                  to="/works"
                  className="block text-white py-3 px-4 rounded-lg flex-1"
                  onClick={closeMenu}
                >
                  Our Works
                </NavLink>
                <button
                  onClick={() => handleDropdownToggle("works")}
                  className="p-3 text-white"
                >
                  <FaChevronDown className={`transform transition-transform duration-300 ${activeDropdown === 'works' ? 'rotate-180' : ''}`} />
                </button>
              </div>
              <div className={`dropdown-menu ${activeDropdown === "works" ? "show" : ""}`}>
                <NavLink to="/works/programs" className="dropdown-item" onClick={closeMenu}>
                  <FaProjectDiagram className="dropdown-icon" />
                  <span>Programs</span>
                </NavLink>
                <NavLink to="/works/achievements" className="dropdown-item" onClick={closeMenu}>
                  <FaTrophy className="dropdown-icon" />
                  <span>Achievements</span>
                </NavLink>
                <NavLink to="/works/milestone" className="dropdown-item" onClick={closeMenu}>
                  <FaBullseye className="dropdown-icon" />
                  <span>Milestones</span>
                </NavLink>
                <NavLink to="/works/geographical" className="dropdown-item" onClick={closeMenu}>
                  <FaGlobe className="dropdown-icon" />
                  <span>Geographical Reach</span>
                </NavLink>
              </div>
            </div>

            {/* Mobile Gallery */}
            <div className="mobile-menu-item">
              <div className="flex items-center justify-between">
                <NavLink
                  to="/gallery"
                  className="block text-white py-3 px-4 rounded-lg flex-1"
                  onClick={closeMenu}
                >
                  Gallery
                </NavLink>
                <button
                  onClick={() => handleDropdownToggle("gallery")}
                  className="p-3 text-white"
                >
                  <FaChevronDown className={`transform transition-transform duration-300 ${activeDropdown === 'gallery' ? 'rotate-180' : ''}`} />
                </button>
              </div>
              <div className={`dropdown-menu ${activeDropdown === "gallery" ? "show" : ""}`}>
                <NavLink to="/gallery/photos" className="dropdown-item" onClick={closeMenu}>
                  <FaCamera className="dropdown-icon" />
                  <span>Photos</span>
                </NavLink>
                <NavLink to="/gallery/videos" className="dropdown-item" onClick={closeMenu}>
                  <FaPlay className="dropdown-icon" />
                  <span>Videos</span>
                </NavLink>
              </div>
            </div>

            {/* Mobile Resources */}
            <div className="mobile-menu-item">
              <div className="flex items-center justify-between">
                <NavLink
                  to="/resources"
                  className="block text-white py-3 px-4 rounded-lg flex-1"
                  onClick={closeMenu}
                >
                  Resources
                </NavLink>
                <button
                  onClick={() => handleDropdownToggle("resources")}
                  className="p-3 text-white"
                >
                  <FaChevronDown className={`transform transition-transform duration-300 ${activeDropdown === 'resources' ? 'rotate-180' : ''}`} />
                </button>
              </div>
              <div className={`dropdown-menu ${activeDropdown === "resources" ? "show" : ""}`}>
                <NavLink to="/resources/news-events" className="dropdown-item" onClick={closeMenu}>
                  <FaNewspaper className="dropdown-icon" />
                  <span>News & Events</span>
                </NavLink>
                <NavLink to="/resources/media-coverage" className="dropdown-item" onClick={closeMenu}>
                  <FaBroadcastTower className="dropdown-icon" />
                  <span>Media Coverage</span>
                </NavLink>
                <NavLink to="/resources/publications" className="dropdown-item" onClick={closeMenu}>
                  <FaBook className="dropdown-icon" />
                  <span>Publications</span>
                </NavLink>
                <NavLink to="/resources/notices" className="dropdown-item" onClick={closeMenu}>
                  <FaBell className="dropdown-icon" />
                  <span>Notices</span>
                </NavLink>
              </div>
            </div>

            {/* Mobile Other Links */}
            <div className="mobile-menu-item">
              <NavLink
                to="/opportunities"
                className="block text-white py-3 px-4 rounded-lg"
                onClick={closeMenu}
              >
                Opportunities
              </NavLink>
            </div>

            <div className="mobile-menu-item">
              <NavLink
                to="/contact-us"
                className="block text-white py-3 px-4 rounded-lg"
                onClick={closeMenu}
              >
                Contact Us
              </NavLink>
            </div>

            {/* Mobile Action Buttons */}
            <div className="space-y-3 pt-4 border-t border-white/20">
              <NavLink
                to="/donate-us"
                className="block donate-button text-center text-white font-semibold py-3 px-6 rounded-full"
                onClick={closeMenu}
              >
                Donate Now
              </NavLink>
              
              {/* ...admin login button removed... */}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
