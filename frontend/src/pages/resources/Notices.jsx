
import React from "react";
import { FaFilePdf, FaCalendarAlt, FaEye, FaBell } from 'react-icons/fa';
import { HiDocumentText } from 'react-icons/hi';

const Notices = () => {
  // Static notices data
  const notices = [
    {
      id: 1,
      title: "Terms of Reference for Project X",
      createdAt: "2024-07-01T10:00:00Z",
      pdfPath: "/notices/sample-notice.pdf"
    },
    // Add more notices as needed
  ];
  const message = "";

  return (
    <div className="min-h-screen relative overflow-hidden mt-20 pt-24 pb-16" style={{
      background: 'linear-gradient(135deg, #f0f9ff 0%, #ecfdf5 50%, #fef7cd 100%)'
    }}>
      <style>{`
        .background-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(40px);
          opacity: 0.4;
          animation: blob 8s infinite;
        }
        
        .blob-1 {
          top: 20%;
          left: 10%;
          width: 160px;
          height: 160px;
          background: linear-gradient(45deg, #3b82f6, #1d4ed8);
          animation-delay: 0s;
        }
        
        .blob-2 {
          top: 60%;
          right: 20%;
          width: 120px;
          height: 120px;
          background: linear-gradient(45deg, #10b981, #047857);
          animation-delay: 3s;
        }
        
        .blob-3 {
          bottom: 20%;
          left: 50%;
          width: 140px;
          height: 140px;
          background: linear-gradient(45deg, #f59e0b, #d97706);
          animation-delay: 6s;
        }
        
        @keyframes blob {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(20px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-15px, 15px) scale(0.9);
          }
        }
        
        .glass-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        
        .floating-animation {
          animation: float 6s ease-in-out infinite;
        }
        
        .floating-animation:nth-child(even) {
          animation-delay: -3s;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .notice-card {
          transition: all 0.3s ease;
        }
        
        .notice-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
        }
      `}</style>

      {/* Background Blobs */}
      <div className="background-blob blob-1"></div>
      <div className="background-blob blob-2"></div>
      <div className="background-blob blob-3"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-8"><span className="text-gray-700 font-medium tracking-wider uppercase text-sm">Important Updates</span></div>
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-8">
            <span className="bg-gradient-to-r from-blue-400 via-green-400 to-yellow-400 bg-clip-text text-transparent">
              Official Notices
            </span>
          </h1>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Stay informed with our latest announcements, official documents, and important updates from Tharu Women Upliftment Center.
          </p>
        </div>

        {/* Notices Section */}
        <div className="glass-card rounded-3xl p-8 lg:p-12 mb-16 floating-animation">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl mb-6">
              <FaBell className="text-white text-2xl" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">Current Notices</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Download and view our official notices and announcements
            </p>
          </div>
          
          {message && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl mb-8 text-center">
              {message}
            </div>
          )}
          
          <div className="space-y-6">
            {notices.length > 0 ? (
              notices.map((notice, index) => (
                <div key={notice.id} className="notice-card bg-gradient-to-r from-white to-blue-50 p-6 rounded-2xl border border-blue-100" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl flex items-center justify-center">
                        <FaFilePdf className="text-white text-xl" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold gradient-text mb-2">{notice.title}</h3>
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <FaCalendarAlt className="mr-2" />
                        <span>Posted on {new Date(notice.createdAt || Date.now()).toLocaleDateString()}</span>
                      </div>
                    </div>
                    
                    <div className="flex-shrink-0">
                      <a
                        href={notice.pdfPath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center space-x-2 shadow-lg"
                      >
                        <FaEye />
                        <span>View PDF</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-16">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full mb-6">
                  <HiDocumentText className="text-gray-500 text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-600 mb-4">No Notices Available</h3>
                <p className="text-gray-500 text-lg">
                  There are currently no notices to display. Please check back later for updates.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="glass-card rounded-3xl p-8 lg:p-12 floating-animation">
            <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">Stay Connected</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Subscribe to our newsletter to receive instant notifications about new notices and important announcements.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-blue-700 hover:to-green-700 transform hover:scale-105 transition-all duration-300 shadow-xl">
                <span className="flex items-center justify-center space-x-2">
                  <FaBell />
                  <span>Subscribe for Updates</span>
                </span>
              </button>
              <a
                href="/contact-us"
                className="bg-white/80 backdrop-blur-lg border border-blue-200 text-blue-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-blue-50 transform hover:scale-105 transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notices;
