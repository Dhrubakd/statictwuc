import React from 'react';
import { FaFilePdf, FaBook, FaFolderOpen, FaCloudDownloadAlt, FaNewspaper, FaBookOpen } from 'react-icons/fa';
import { HiDocumentText, HiDownload } from 'react-icons/hi';

const Publications = () => {
  const featuredPublications = [
    {
      title: "Annual Report 2024",
      description: "Our comprehensive annual report highlights key achievements, milestones, and financial details of the year.",
      icon: <FaFilePdf className="text-3xl" />,
      color: "from-red-500 to-pink-500",
      type: "Report",
      size: "2.3 MB",
      pages: "48 pages"
    },
    {
      title: "Community Impact Report",
      description: "A detailed report showcasing the success stories, impact metrics, and case studies from our programs.",
      icon: <FaBook className="text-3xl" />,
      color: "from-blue-500 to-cyan-500",
      type: "Impact Study",
      size: "1.8 MB",
      pages: "32 pages"
    },
    {
      title: "Research Paper on Women's Leadership",
      description: "An in-depth research paper exploring the role of women leaders in rural communities and their contributions.",
      icon: <FaFolderOpen className="text-3xl" />,
      color: "from-emerald-500 to-teal-500",
      type: "Research",
      size: "850 KB",
      pages: "24 pages"
    }
  ];

  const categories = [
    {
      title: "Annual Reports",
      description: "Explore our annual reports that outline key activities, goals, and financial summaries.",
      icon: <FaNewspaper className="text-2xl" />,
      color: "from-blue-500 to-purple-500",
      count: "5 reports"
    },
    {
      title: "Newsletters",
      description: "Stay connected with our regular updates, announcements, and success stories through our newsletters.",
      icon: <HiDocumentText className="text-2xl" />,
      color: "from-green-500 to-blue-500",
      count: "12 issues"
    },
    {
      title: "Research Papers",
      description: "Access research papers on key topics such as women's empowerment, leadership, and sustainable development.",
      icon: <FaBookOpen className="text-2xl" />,
      color: "from-purple-500 to-pink-500",
      count: "8 papers"
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden mt-20 pt-24 pb-16" style={{
      background: 'linear-gradient(135deg, #fef3c7 0%, #e0e7ff 50%, #f3e8ff 100%)'
    }}>
      <style>{`
        .background-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(40px);
          opacity: 0.5;
          animation: blob 8s infinite;
        }
        
        .blob-1 {
          top: 15%;
          left: 10%;
          width: 200px;
          height: 200px;
          background: linear-gradient(45deg, #fbbf24, #f59e0b);
          animation-delay: 0s;
        }
        
        .blob-2 {
          top: 70%;
          right: 10%;
          width: 150px;
          height: 150px;
          background: linear-gradient(45deg, #8b5cf6, #a855f7);
          animation-delay: 3s;
        }
        
        .blob-3 {
          bottom: 10%;
          left: 40%;
          width: 180px;
          height: 180px;
          background: linear-gradient(45deg, #10b981, #059669);
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
            transform: translateY(-15px);
          }
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .publication-card {
          transition: all 0.3s ease;
        }
        
        .publication-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
        }
        
        .category-card {
          transition: all 0.3s ease;
        }
        
        .category-card:hover {
          transform: translateY(-5px) scale(1.02);
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
          <div className="inline-flex items-center space-x-2 mb-8"><span className="text-gray-700 font-medium tracking-wider uppercase text-sm">Knowledge Hub</span></div>
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-8">
            <span className="bg-gradient-to-r from-yellow-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
              Our Publications
            </span>
          </h1>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Stay informed with our reports, research papers, newsletters, and program updates. Our publications reflect our journey, achievements, and plans for a brighter future.
          </p>
        </div>

        {/* Featured Publications Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">Featured Publications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our most impactful reports and research that showcase our commitment to community development
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPublications.map((publication, index) => (
              <div key={index} className="publication-card glass-card rounded-3xl p-8 floating-animation" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${publication.color} rounded-full text-white mb-6`}>
                  {publication.icon}
                </div>
                
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-yellow-100 to-green-100 text-orange-700 rounded-full text-sm font-medium mb-3">
                    {publication.type}
                  </span>
                  <h3 className="text-xl font-bold gradient-text mb-3">{publication.title}</h3>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-6">{publication.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{publication.size}</span>
                  <span>{publication.pages}</span>
                </div>
                
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2">
                  <HiDownload />
                  <span>Download PDF</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Categories Section */}
        <div className="glass-card rounded-3xl p-8 lg:p-12 mb-16 floating-animation">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl mb-6">
              <FaFolderOpen className="text-white text-2xl" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">Publication Categories</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Explore our diverse collection of documents organized by category for easy access
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="category-card bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl border border-gray-100">
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl text-white mb-4`}>
                  {category.icon}
                </div>
                
                <h3 className="text-xl font-bold gradient-text mb-3">{category.title}</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">{category.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{category.count}</span>
                  <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                    Browse →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="glass-card rounded-3xl p-8 lg:p-12 floating-animation">
            <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">Stay Updated</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Stay informed about our latest publications and reports. Subscribe to our newsletter to receive updates straight to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-xl">
                Subscribe Now
              </button>
              <a
                href="/contact-us"
                className="bg-white/80 backdrop-blur-lg border border-green-200 text-green-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-green-50 transform hover:scale-105 transition-all duration-300"
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

export default Publications;
