import React from "react";
import { FaTasks, FaEye, FaTimes, FaProjectDiagram, FaHandsHelping, FaLeaf, FaUsers } from "react-icons/fa";
import { HiLightBulb } from "react-icons/hi";

const OurWorksPage = () => {
  const activities = [
    {
      title: "LICED Project (Local Initiative for Community Empowerment and Development)",
      description: "Within LICED, TWUC is dedicated to enhancing the understanding and capabilities of target groups in natural resource management and ensuring equitable access to productive resources. The organization conducts activities to improve farm production for poor, vulnerable, and socially excluded individuals, as well as to provide WASH facilities for this same demographic.",
      image: "/images/hero/img1.jpg",
      icon: <FaLeaf className="text-white text-2xl" />,
      gradient: "from-emerald-500 to-teal-500",
      category: "Community Development"
    },
    {
      title: "CSN Project (Community Safety Net)",
      description: "TWUC is actively working to fulfill the objectives of providing urgent relief assistance to families and communities who have suffered from various types of natural, social, and man-made disasters and are at high risk of becoming victims. The organization aims to raise awareness about psychosocial well-being for those affected by different disasters to help them overcome trauma and pain. TWUC is fostering collaboration among women and other individuals who have been socially overlooked, marginalized, or excluded, along with families, groups, and communities. The goal is to establish connections with relevant parties and agencies, facilitating the initiation of efforts to address issues and problems that require attention.",
      image: "/images/hero/img2.jpg",
      icon: <FaHandsHelping className="text-white text-2xl" />,
      gradient: "from-blue-500 to-cyan-500",
      category: "Emergency Response"
    },
    {
      title: "AGenC Project",
      description: "Our auditing services provide independent and objective assessments of your financial statements. We conduct thorough audits to ensure accuracy, transparency, and compliance with applicable accounting standards.",
      image: "/photos/img3.jpg",
      icon: <FaUsers className="text-white text-2xl" />,
      gradient: "from-purple-500 to-pink-500",
      category: "Financial Services"
    },
    {
      title: "CLASSIK Project",
      description: "Promoting CLimAte ReSilient and Socially Inclusive Water Management in the Lower Karnali Watershed Region, Nepal (CLASSIK). This project aims to address the challenges faced by the Lower Karnali Watershed Region (LKWR) in Nepal to sustainably conserve and manage the available water resources for food security, economic prosperity and social transformation. The LKWR is subject to significant spatial and temporal variations in water resources, resulting in both water scarcity and excessive water availability, exacerbated by the impact of climate change. Groundwater depletion leading to lack of water for household and agricultural uses, loss of biodiversity, and degradation of water ecosystems are major concerns within the region.",
      image: "/photos/img4.jpg",
      icon: <FaProjectDiagram className="text-white text-2xl" />,
      gradient: "from-red-500 to-pink-500",
      category: "Climate Resilience"
    },
  ];

  const [selectedActivity, setSelectedActivity] = React.useState(null);

  const openModal = (activity) => {
    setSelectedActivity(activity);
  };

  const closeModal = () => {
    setSelectedActivity(null);
  };

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
          background: linear-gradient(45deg, #10b981, #3b82f6);
          animation-delay: 0s;
        }
        
        .blob-2 {
          top: 60%;
          right: 20%;
          width: 150px;
          height: 150px;
          background: linear-gradient(45deg, #8b5cf6, #ec4899);
          animation-delay: 3s;
        }
        
        .blob-3 {
          top: 30%;
          right: 10%;
          width: 100px;
          height: 100px;
          background: linear-gradient(45deg, #f97316, #eab308);
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
        
        .activity-card {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          overflow: hidden;
        }
        
        .activity-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s ease;
        }
        
        .activity-card:hover::before {
          left: 100%;
        }
        
        .activity-card:hover {
          transform: translateY(-8px) scale(1.03);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
        }
        
        .modal-backdrop {
          backdrop-filter: blur(10px);
          background: rgba(0, 0, 0, 0.7);
        }
        
        .modal-content {
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
        }
        
        .image-overlay {
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
        
        .activity-card:hover .image-overlay {
          opacity: 1;
        }
      `}</style>

      {/* Background Blobs */}
      <div className="background-blob blob-1"></div>
      <div className="background-blob blob-2"></div>
      <div className="background-blob blob-3"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-8"><span className="text-white/80 font-medium tracking-wider uppercase text-sm">Our Impact</span></div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8">
            <span className="bg-gradient-to-r from-white via-green-100 to-blue-200 bg-clip-text text-transparent">
              Our Works & Activities
            </span>
          </h1>
          <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            We believe in sustainable growth and empowering communities through our impactful programs. 
            Explore our key initiatives that foster progress and create lasting change.
          </p>
        </div>

        {/* Statistics Overview */}
        <div className="glass-card rounded-3xl p-8 lg:p-12 mb-20 floating-animation">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mb-4">
                <FaProjectDiagram className="text-white text-2xl" />
              </div>
              <h3 className="text-3xl font-bold text-green-600 mb-2">{activities.length}</h3>
              <p className="text-gray-600 font-medium">Active Projects</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-4">
                <FaUsers className="text-white text-2xl" />
              </div>
              <h3 className="text-3xl font-bold text-blue-600 mb-2">5000+</h3>
              <p className="text-gray-600 font-medium">Lives Impacted</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4">
                <FaHandsHelping className="text-white text-2xl" />
              </div>
              <h3 className="text-3xl font-bold text-purple-600 mb-2">25+</h3>
              <p className="text-gray-600 font-medium">Communities</p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-2xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full mb-4">
                <FaLeaf className="text-white text-2xl" />
              </div>
              <h3 className="text-3xl font-bold text-orange-600 mb-2">100%</h3>
              <p className="text-gray-600 font-medium">Sustainable</p>
            </div>
          </div>
        </div>

        {/* Activities Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-100 mb-6">
              Our Key Activities
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Discover the projects and initiatives that drive our mission forward
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {activities.map((activity, index) => (
              <div
                key={index}
                className={`activity-card glass-card rounded-3xl p-8 floating-animation`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative mb-6">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-64 object-cover rounded-2xl"
                  />
                  <div className="image-overlay rounded-2xl">
                    <FaEye className="text-white text-4xl" />
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 bg-gradient-to-r ${activity.gradient} text-white text-sm font-semibold rounded-full shadow-lg`}>
                      {activity.category}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${activity.gradient} rounded-2xl`}>
                    {activity.icon}
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold gradient-text flex-1">
                    {activity.title}
                  </h3>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  {activity.description.slice(0, 200)}...
                </p>
                
                <button
                  onClick={() => openModal(activity)}
                  className={`w-full bg-gradient-to-r ${activity.gradient} text-white py-3 px-6 rounded-2xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg`}
                >
                  <span className="flex items-center justify-center space-x-2">
                    <FaEye />
                    <span>Read More</span>
                  </span>
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Call-to-Action Section */}
        <div className="glass-card rounded-3xl p-8 lg:p-12 text-center floating-animation">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl mb-6">
              <HiLightBulb className="text-white text-2xl" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">Support Our Works</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Join us in making a lasting impact in the lives of women and their communities. 
              Your support helps us continue our mission of empowerment, sustainability, and leadership.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/donate-us"
                className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-green-700 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-xl"
              >
                Donate Now
              </a>
              <a
                href="/opportunities"
                className="bg-white/80 backdrop-blur-lg border border-blue-200 text-blue-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-blue-50 transform hover:scale-105 transition-all duration-300"
              >
                Join Our Team
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Modal */}
      {selectedActivity && (
        <div className="fixed inset-0 modal-backdrop flex justify-center items-center z-50 p-4">
          <div className="modal-content rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="relative">
              {/* Modal Header */}
              <div className="sticky top-0 bg-white/95 backdrop-blur-lg border-b border-gray-200 p-6 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${selectedActivity.gradient} rounded-xl`}>
                    {selectedActivity.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold gradient-text">{selectedActivity.title}</h3>
                    <span className={`px-3 py-1 bg-gradient-to-r ${selectedActivity.gradient} text-white text-sm font-semibold rounded-full`}>
                      {selectedActivity.category}
                    </span>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-xl transition-colors duration-300"
                >
                  <FaTimes className="text-xl" />
                </button>
              </div>
              
              {/* Modal Content */}
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
                <img
                  src={selectedActivity.image}
                  alt={selectedActivity.title}
                  className="w-full h-80 object-cover rounded-2xl mb-6 shadow-lg"
                />
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {selectedActivity.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OurWorksPage;
