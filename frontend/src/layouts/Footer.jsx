import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhone, FaEnvelope, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';
import { HiHeart } from 'react-icons/hi';

const Footer = () => {
  return (
    <>
      {/* Modern Footer with Gradient Background */}
      <footer className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-10 right-10 w-32 h-32 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-32 h-32 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative container mx-auto py-16 px-6">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            
            {/* Organization Info */}
            <div className="col-span-1 lg:col-span-1">
              <div className="flex items-center mb-6 group">
                <div className="relative">
                  <FaUsers className="w-8 h-8 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute -inset-1 bg-yellow-400/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-2xl font-bold ml-3 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  TWUC
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Empowering Tharu women through sustainable development, education, and leadership programs for a brighter future.
              </p>
              
              {/* Modern Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                  <div className="text-xl font-bold text-yellow-400">500+</div>
                  <div className="text-xs text-gray-400">Women Empowered</div>
                </div>
                <div className="text-center p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                  <div className="text-xl font-bold text-green-400">25+</div>
                  <div className="text-xs text-gray-400">Programs</div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-6">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {[
                  { to: "/", label: "Home" },
                  { to: "/about", label: "About Us" },
                  { to: "/works", label: "Our Works" },
                  { to: "/gallery", label: "Gallery" },
                  { to: "/contact-us", label: "Contact Us" },
                  { to: "/donate-us", label: "Donate" }
                ].map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.to} 
                      className="text-gray-300 hover:text-white transition-all duration-300 flex items-center group hover:translate-x-2"
                    >
                      <div className="w-1 h-1 bg-blue-400 rounded-full mr-3 group-hover:w-2 transition-all duration-300"></div>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h3 className="text-xl font-semibold mb-6">
                Our Programs
              </h3>
              <ul className="space-y-3">
                {[
                  { to: "/works/programs", label: "Programs" },
                  { to: "/works/achievements", label: "Achievements" },
                  { to: "/works/milestone", label: "Milestones" },
                  { to: "/works/geographical", label: "Geographical Reach" },
                  { to: "/resources/notices", label: "Latest Notices" }
                ].map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.to} 
                      className="text-gray-300 hover:text-white transition-all duration-300 flex items-center group hover:translate-x-2"
                    >
                      <div className="w-1 h-1 bg-green-400 rounded-full mr-3 group-hover:w-2 transition-all duration-300"></div>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Social */}
            <div>
              <h3 className="text-xl font-semibold mb-6">
                Get in Touch
              </h3>
              
              {/* Contact Info */}
              <div className="space-y-4 mb-6">
                <div className="flex items-start group">
                  <FaMapMarkerAlt className="w-4 h-4 text-red-400 mt-1 mr-3 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-gray-300 text-sm">
                    Gulariya-7, Bardiya, Nepal
                  </div>
                </div>
                <div className="flex items-center group">
                  <FaPhone className="w-4 h-4 text-green-400 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                  <div className="text-gray-300 text-sm">
                    084 - 420350 / 347
                  </div>
                </div>
                <div className="flex items-center group">
                  <FaEnvelope className="w-4 h-4 text-blue-400 mr-3 group-hover:scale-110 transition-transform duration-300" />
                  <a 
                    href="mailto:twuc.bardiya2049@gmail.com" 
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                  >
                    twuc.bardiya2049@gmail.com
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex gap-3">
                {[
                  { icon: FaFacebookF, href: "https://facebook.com", bg: "bg-blue-600", hover: "hover:bg-blue-700" },
                  { icon: FaTwitter, href: "https://twitter.com", bg: "bg-blue-400", hover: "hover:bg-blue-500" },
                  { icon: FaInstagram, href: "https://instagram.com", bg: "bg-pink-500", hover: "hover:bg-pink-600" },
                  { icon: FaLinkedinIn, href: "https://linkedin.com", bg: "bg-blue-800", hover: "hover:bg-blue-900" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${social.bg} ${social.hover} p-3 rounded-full transition-all duration-300 hover:scale-110 hover:-translate-y-1 group relative overflow-hidden`}
                  >
                    <social.icon className="relative z-10" />
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                ))}
              </div>

              {/* External Links */}
              <div className="mt-6">
                <h4 className="text-sm font-semibold text-gray-400 mb-3">Partner Organizations</h4>
                <div className="space-y-2">
                  <a
                    href="https://www.swc.org.np/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-gray-400 hover:text-white transition-colors duration-300 text-xs hover:translate-x-2"
                  >
                    Social Welfare Council
                  </a>
                  <a
                    href="https://www.ngofederation.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-gray-400 hover:text-white transition-colors duration-300 text-xs hover:translate-x-2"
                  >
                    NGO Federation of Nepal
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Modern Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="bg-gradient-to-br from-gray-900 to-blue-900 px-4">
                <HiHeart className="w-6 h-6 text-red-400 animate-pulse" />
              </div>
            </div>
          </div>

          {/* Modern Credits Section */}
          <div className="text-center space-y-2">
            <p className="text-gray-400 text-sm flex items-center justify-center flex-wrap gap-2">
              <span>&copy; 2025 Tharu Women Upliftment Center.</span>
              <span className="hidden sm:inline">•</span>
              <span>All rights reserved.</span>
            </p>
            <p className="text-gray-500 text-xs flex items-center justify-center flex-wrap gap-2">
              <span>Crafted with</span>
              <HiHeart className="w-4 h-4 text-red-400 animate-pulse" />
              <span>by</span>
              <a 
                href="https://qubicconsulting.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-400 hover:text-white transition-colors duration-300 font-medium"
              >
                Qubic Consulting Pvt. Ltd.
              </a>
            </p>
          </div>
        </div>

        {/* Bottom gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
      </footer>

      {/* CSS-in-JS Animations */}
      <style>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </>
  );
};

export default Footer;
