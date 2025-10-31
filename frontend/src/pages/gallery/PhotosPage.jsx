
import React from "react";
import { FaFilter, FaImage, FaEye } from "react-icons/fa";
import { categoryColors, textGradients, cardStyles } from "../../utils/colors";

const PhotosPage = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  // Static photo data
  const photos = [
    { id: 1, src: "/images/hero/img1.jpg", category: "Agency" },
    { id: 2, src: "/images/hero/img2.jpg", category: "CS" },
    { id: 3, src: "/photos/img3.jpg", category: "LICED" },
    { id: 4, src: "/photos/img4.jpg", category: "Organization" },
  ];
  const filteredPhotos = selectedCategory === "All" ? photos : photos.filter((photo) => photo.category === selectedCategory);
  const categories = ["All", "Agency", "CS", "LICED", "Organization"];

  const getCategoryColor = (category) => {
    return categoryColors[category] || categoryColors["All"];
  };

  return (
    <div className="glass-card rounded-3xl p-8 lg:p-12" style={{
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(20px)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)'
    }}>
      <style>{`
        .photo-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 24px;
        }
        
        .photo-card {
          position: relative;
          overflow: hidden;
          border-radius: 16px;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          background: linear-gradient(145deg, #ffffff, #f0f0f0);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
        }
        
        .photo-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
        }
        
        .photo-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, rgba(99, 102, 241, 0.8), rgba(139, 92, 246, 0.8));
          opacity: 0;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .photo-card:hover .photo-overlay {
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
        
        .loading-shimmer {
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
        }
        
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>

      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center space-x-2 mb-6">
          <FaImage className="text-blue-600 text-2xl" />
          <h2 className={`text-4xl lg:text-5xl font-bold ${textGradients.primary}`}>
            Photo Gallery
          </h2>
          <FaImage className="text-blue-600 text-2xl" />
        </div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover our journey through captivating moments and meaningful memories
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
                  : "bg-white/80 backdrop-blur-lg border border-gray-200 text-gray-700 hover:border-purple-300"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

  {/* Photos Grid */}
  {filteredPhotos.length > 0 ? (
    <div className="photo-grid">
      {filteredPhotos.map((photo) => (
        <div key={photo.id} className="photo-card group cursor-pointer">
          <img
            src={photo.src}
            alt={`${photo.category} photo`}
            className="w-full h-64 object-cover"
            loading="lazy"
          />
          <div className="photo-overlay">
            <div className="text-center">
              <FaEye className="text-white text-3xl mb-2 mx-auto" />
              <p className="text-white font-semibold text-lg">{photo.category}</p>
            </div>
          </div>
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className={`px-3 py-1 bg-gradient-to-r ${getCategoryColor(photo.category)} text-white text-xs font-semibold rounded-full shadow-lg`}>
              {photo.category}
            </span>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div className="text-center py-20">
      <div className="inline-flex items-center justify-center w-24 h-24 bg-gray-100 rounded-full mb-6">
        <FaImage className="text-gray-400 text-3xl" />
      </div>
      <h3 className="text-2xl font-bold text-gray-700 mb-4">No Photos Found</h3>
      <p className="text-gray-500 text-lg">
        No photos available for the "{selectedCategory}" category.
      </p>
      <p className="text-gray-400 text-sm mt-2">
        Try selecting a different category or check back later.
      </p>
    </div>
  )}

  {/* Statistics */}
  {filteredPhotos.length > 0 && (
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="text-center">
            <div className="inline-flex items-center space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">{filteredPhotos.length}</div>
                <div className="text-sm text-gray-500">Photos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{selectedCategory}</div>
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

export default PhotosPage;
