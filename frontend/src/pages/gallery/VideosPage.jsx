import React from "react";
import { FaFilter, FaVideo, FaPlay, FaVolumeUp } from "react-icons/fa";
import { categoryColors, textGradients, cardStyles } from "../../utils/colors";

// Static video files (place your videos in public/videos and use relative URLs)
const staticVideos = [
  { id: 1, src: "/videos/sample1.mp4", category: "Agency" },
  { id: 2, src: "/videos/sample2.mp4", category: "CS" },
  { id: 3, src: "/videos/sample3.mp4", category: "LICED" },
  { id: 4, src: "/videos/sample4.mp4", category: "Organization" },
];

const VideosPage = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const videos = staticVideos;
  const filteredVideos = selectedCategory === "All" ? videos : videos.filter((video) => video.category === selectedCategory);
  const categories = ["All", "Agency", "CS", "LICED", "Organization"];

  const getCategoryColor = (category) => {
    return categoryColors[category] || categoryColors["All"];
  };

  return (
    <div className={`${cardStyles.glass} rounded-3xl p-8 lg:p-12`} style={{
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(20px)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)'
    }}>
      <style>{`
        .video-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 24px;
        }
        
        .video-card {
          position: relative;
          overflow: hidden;
          border-radius: 16px;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          background: linear-gradient(145deg, #ffffff, #f0f0f0);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }
        
        .video-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        }
        
        .video-player {
          width: 100%;
          height: 240px;
          border-radius: 12px;
          background: #000;
        }
        
        .video-overlay {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: rgba(0, 0, 0, 0.7);
          border-radius: 50%;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .video-card:hover .video-overlay {
          opacity: 1;
        }
        
        .category-filter {
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .category-filter::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s ease;
        }
        
        .category-filter:hover::before {
          left: 100%;
        }
        
        .category-filter:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }
      `}
      </style>

      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center space-x-2 mb-6">
          <FaVideo className="text-blue-600 text-2xl" />
          <h2 className={`text-4xl lg:text-5xl font-bold ${textGradients.primary}`}>
            Video Gallery
          </h2>
          <FaVideo className="text-blue-600 text-2xl" />
        </div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Experience our stories in motion through dynamic video content
        </p>
      </div>

      {/* Category Filters */}
      <div className="mb-8">
        <div className="flex items-center justify-center mb-6">
          <FaFilter className="text-gray-500 mr-2" />
          <span className="text-gray-700 font-medium">Filter by Category</span>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-filter px-6 py-3 font-semibold rounded-2xl transition-all duration-300 ${
                selectedCategory === category
                  ? `bg-gradient-to-r ${getCategoryColor(category)} text-white shadow-lg`
                  : "bg-white/80 backdrop-blur-lg border border-gray-200 text-gray-700 hover:border-blue-300"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Videos Grid */}
      {filteredVideos.length > 0 ? (
        <div className="video-grid">
          {filteredVideos.map((video) => (
            <div key={video.id} className="video-card group">
              <div className="relative">
                <video
                  className="video-player"
                  controls
                  preload="metadata"
                  poster={video.src + "#t=0.1"}
                >
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 bg-gradient-to-r ${getCategoryColor(video.category)} text-white text-xs font-semibold rounded-full shadow-lg`}>
                    {video.category}
                  </span>
                </div>
                {/* Play Button Overlay */}
                <div className="video-overlay">
                  <FaPlay className="text-white text-xl ml-1" />
                </div>
              </div>
              {/* Video Info */}
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <FaVolumeUp className="text-gray-400 text-sm" />
                    <span className="text-gray-600 text-sm font-medium">{video.category} Video</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-green-600 text-xs font-medium">Available</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gray-100 rounded-full mb-6">
            <FaVideo className="text-gray-400 text-3xl" />
          </div>
          <h3 className="text-2xl font-bold text-gray-700 mb-4">No Videos Found</h3>
          <p className="text-gray-500 text-lg">
            No videos available for the "{selectedCategory}" category.
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Try selecting a different category or check back later.
          </p>
        </div>
      )}

      {/* Statistics */}
      {filteredVideos.length > 0 && (
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="text-center">
            <div className="inline-flex items-center space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{filteredVideos.length}</div>
                <div className="text-sm text-gray-500">Videos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">{selectedCategory}</div>
                <div className="text-sm text-gray-500">Category</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">{categories.length - 1}</div>
                <div className="text-sm text-gray-500">Categories</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideosPage;
