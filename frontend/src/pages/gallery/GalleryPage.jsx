import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaImages, FaVideo, FaCamera, FaPlay } from "react-icons/fa";
import { HiCollection } from "react-icons/hi";

const GalleryPage = () => {
  return (
    <div className="min-h-screen relative overflow-hidden mt-20 pt-24 pb-16" style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #6366f1 100%)'
    }}>
      <style>{`
        .background-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(40px);
          opacity: 0.6;
          animation: blob 8s infinite;
        }
        
        .blob-1 {
          top: 10%;
          left: 15%;
          width: 200px;
          height: 200px;
          background: linear-gradient(45deg, #ec4899, #f97316);
          animation-delay: 0s;
        }
        
        .blob-2 {
          top: 60%;
          right: 20%;
          width: 150px;
          height: 150px;
          background: linear-gradient(45deg, #8b5cf6, #3b82f6);
          animation-delay: 3s;
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
            transform: translateY(-15px);
          }
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .tab-button {
          position: relative;
          transition: all 0.3s ease;
          overflow: hidden;
        }
        
        .tab-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s ease;
        }
        
        .tab-button:hover::before {
          left: 100%;
        }
        
        .tab-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
        }
        
        .gallery-container {
          transition: all 0.4s ease;
        }
      `}</style>

      {/* Background Blobs */}
      <div className="background-blob blob-1"></div>
      <div className="background-blob blob-2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-8"><span className="text-white/80 font-medium tracking-wider uppercase text-sm">Visual Stories</span></div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8">
            <span className="bg-gradient-to-r from-white via-purple-100 to-pink-200 bg-clip-text text-transparent">
              Our Gallery
            </span>
          </h1>
          <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Explore memorable moments from our events, programs, and initiatives. 
            Our gallery showcases the inspiring work being done and the smiles we've brought to our communities.
          </p>
        </div>

        {/* Gallery Navigation Tabs */}
        <div className="glass-card rounded-3xl p-8 lg:p-12 mb-12 floating-animation">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mb-4 sm:mb-0">
              <HiCollection className="text-white text-2xl" />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <NavLink
                to="photos"
                className={({ isActive }) =>
                  `tab-button inline-flex items-center space-x-3 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-xl"
                      : "bg-white/80 backdrop-blur-lg border border-purple-200 text-purple-600 hover:bg-purple-50"
                  }`
                }
              >
                <FaCamera className="text-xl" />
                <span>Photo Gallery</span>
                <div className="px-2 py-1 bg-white/20 rounded-full text-xs">
                  Images
                </div>
              </NavLink>
              
              <NavLink
                to="videos"
                className={({ isActive }) =>
                  `tab-button inline-flex items-center space-x-3 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl"
                      : "bg-white/80 backdrop-blur-lg border border-blue-200 text-blue-600 hover:bg-blue-50"
                  }`
                }
              >
                <FaPlay className="text-xl" />
                <span>Video Gallery</span>
                <div className="px-2 py-1 bg-white/20 rounded-full text-xs">
                  Videos
                </div>
              </NavLink>
            </div>
          </div>
        </div>

        {/* Gallery Content Area */}
        <div className="gallery-container">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;

// import React from "react";
// import { NavLink, Outlet } from "react-router-dom";
// import { FaImages, FaVideo } from "react-icons/fa";

// const GalleryPage = () => {
//   return (
//     <div className="text-center max-w-7xl mx-auto py-16 px-6">
//       <h2 className="text-5xl font-extrabold text-purple-700 mb-12">
//         Our Gallery
//       </h2>
//       <p className="text-xl text-gray-600 leading-relaxed mb-12">
//         Explore memorable moments from our events, programs, and initiatives.
//         Our gallery showcases the inspiring work being done and the smiles we’ve
//         brought to our communities.
//       </p>

//       {/* Buttons for Photo and Video Gallery */}
//       <div className="flex justify-center gap-6 mb-8">
//         <NavLink
//           to="photos"
//           className={({ isActive }) =>
//             `text-lg py-3 px-6 font-semibold rounded-lg shadow-md transition-all duration-300 ${
//               isActive
//                 ? "bg-purple-700 text-white"
//                 : "bg-gray-100 text-gray-700 hover:bg-purple-600 hover:text-white"
//             }`
//           }
//         >
//           <FaImages className="inline mr-2" /> Photo Gallery
//         </NavLink>
//         <NavLink
//           to="videos"
//           className={({ isActive }) =>
//             `text-lg py-3 px-6 font-semibold rounded-lg shadow-md transition-all duration-300 ${
//               isActive
//                 ? "bg-purple-700 text-white"
//                 : "bg-gray-100 text-gray-700 hover:bg-purple-600 hover:text-white"
//             }`
//           }
//         >
//           <FaVideo className="inline mr-2" /> Video Gallery
//         </NavLink>
//       </div>

//       {/* Render the Subpage (PhotosPage or VideosPage) below the tabs */}
//       <div className="mt-8">
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default GalleryPage;
