import React, { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaUsers, FaGlobeAsia, FaHandsHelping, FaEye, FaLeaf } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";

const Geographical = () => {
  const [stats, setStats] = useState({
    womenEmpowered: 0,
    communitiesReached: 0,
    healthPrograms: 0,
  });

  const targetStats = {
    womenEmpowered: 5000,
    communitiesReached: 50,
    healthPrograms: 200,
  };

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    const statsSection = document.getElementById("stats-section");
    if (statsSection) observer.observe(statsSection);
  }, []);

  useEffect(() => {
    if (isVisible) {
      let interval = setInterval(() => {
        setStats((prevStats) => {
          const newStats = { ...prevStats };
          Object.keys(newStats).forEach((key) => {
            if (newStats[key] < targetStats[key]) {
              newStats[key] += Math.ceil(targetStats[key] / 100);
            }
          });
          return newStats;
        });

        if (
          stats.womenEmpowered >= targetStats.womenEmpowered &&
          stats.communitiesReached >= targetStats.communitiesReached &&
          stats.healthPrograms >= targetStats.healthPrograms
        ) {
          clearInterval(interval);
        }
      }, 50);

      return () => clearInterval(interval);
    }
  }, [isVisible, stats]);

  const regions = [
    {
      name: "Bardiya Region",
      description: "Providing skill development workshops and leadership training in Bardiya's rural areas with focus on sustainable development.",
      icon: <FaMapMarkerAlt className="text-3xl" />,
      color: "from-blue-500 to-cyan-500",
      features: ["Skill workshops", "Leadership training", "Rural development"]
    },
    {
      name: "Surrounding Villages",
      description: "Expanding educational outreach to neighboring villages, ensuring inclusive growth and learning opportunities for all.",
      icon: <FaGlobeAsia className="text-3xl" />,
      color: "from-emerald-500 to-teal-500",
      features: ["Educational outreach", "Inclusive growth", "Community learning"]
    },
    {
      name: "Partnerships Across Nepal",
      description: "Collaborating with organizations to promote sustainable programs and resource sharing throughout Nepal.",
      icon: <FaHandsHelping className="text-3xl" />,
      color: "from-purple-500 to-pink-500",
      features: ["Strategic partnerships", "Resource sharing", "Sustainable programs"]
    }
  ];

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
          background: linear-gradient(45deg, #fbbf24, #f59e0b);
          animation-delay: 0s;
        }
        
        .blob-2 {
          top: 60%;
          right: 20%;
          width: 150px;
          height: 150px;
          background: linear-gradient(45deg, #10b981, #059669);
          animation-delay: 3s;
        }
        
        .blob-3 {
          bottom: 20%;
          left: 30%;
          width: 180px;
          height: 180px;
          background: linear-gradient(45deg, #8b5cf6, #a855f7);
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
        
        .region-card {
          transition: all 0.3s ease;
        }
        
        .region-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
        }
        
        .stats-card {
          transition: all 0.3s ease;
        }
        
        .stats-card:hover {
          transform: translateY(-5px) scale(1.05);
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
          <div className="inline-flex items-center space-x-2 mb-8"><span className="text-white/80 font-medium tracking-wider uppercase text-sm">Our Reach</span></div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8">
            <span className="bg-gradient-to-r from-white via-yellow-100 to-green-200 bg-clip-text text-transparent">
              Geographical Impact
            </span>
          </h1>
          <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            We proudly serve communities in rural areas with a focus on empowering women, 
            providing education, and fostering sustainable development across multiple regions.
          </p>
        </div>

        {/* Vision Statement */}
        <div className="glass-card rounded-3xl p-8 lg:p-12 mb-16 text-center floating-animation">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl mb-6">
            <FaEye className="text-white text-2xl" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold gradient-text mb-6">Our Geographic Vision</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            To create a network of empowered communities across Nepal, where every woman has access 
            to education, healthcare, and economic opportunities, fostering sustainable development 
            that transcends geographical boundaries.
          </p>
        </div>

        {/* Focus Regions */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-100 mb-6">Focus Regions</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Strategic locations where we concentrate our efforts for maximum community impact
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {regions.map((region, index) => (
              <div key={index} className="region-card glass-card rounded-3xl p-8 floating-animation" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${region.color} rounded-full text-white mb-6`}>
                  {region.icon}
                </div>
                
                <h3 className="text-2xl font-bold gradient-text mb-4">{region.name}</h3>
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">{region.description}</p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800">Key Features:</h4>
                  {region.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2 bg-gradient-to-r from-green-50 to-blue-50 p-3 rounded-xl">
                      <HiLocationMarker className="text-green-500 text-sm flex-shrink-0" />
                      <span className="text-gray-700 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Statistics */}
        <section id="stats-section" className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-100 mb-6">Our Geographic Impact</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Real numbers that demonstrate our reach across communities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="stats-card glass-card rounded-3xl p-8 text-center floating-animation">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mb-6">
                <FaUsers className="text-white text-2xl" />
              </div>
              <h3 className="text-4xl lg:text-5xl font-bold text-green-600 mb-2">{stats.womenEmpowered.toLocaleString()}+</h3>
              <p className="text-gray-600 font-medium text-lg">Women Empowered</p>
            </div>
            
            <div className="stats-card glass-card rounded-3xl p-8 text-center floating-animation" style={{ animationDelay: '0.2s' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-6">
                <FaMapMarkerAlt className="text-white text-2xl" />
              </div>
              <h3 className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">{stats.communitiesReached}+</h3>
              <p className="text-gray-600 font-medium text-lg">Communities Reached</p>
            </div>
            
            <div className="stats-card glass-card rounded-3xl p-8 text-center floating-animation" style={{ animationDelay: '0.4s' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6">
                <FaHandsHelping className="text-white text-2xl" />
              </div>
              <h3 className="text-4xl lg:text-5xl font-bold text-purple-600 mb-2">{stats.healthPrograms}+</h3>
              <p className="text-gray-600 font-medium text-lg">Health & Awareness Programs</p>
            </div>
          </div>
        </section>

        {/* Sustainability Focus */}
        <div className="glass-card rounded-3xl p-8 lg:p-12 mb-16 floating-animation">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl mb-6">
              <FaLeaf className="text-white text-2xl" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">Sustainable Development</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our geographical expansion follows sustainable development principles, ensuring that each 
              community we serve becomes self-sufficient and capable of continued growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Environmental Impact</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Eco-friendly program implementation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Sustainable resource management</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Green technology adoption</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Social Impact</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Community-led development</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Cultural preservation initiatives</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Inclusive growth strategies</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="glass-card rounded-3xl p-8 lg:p-12 floating-animation">
            <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">Expand Our Reach Together</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Help us reach more communities and create lasting change. Your support enables us 
              to expand our geographical impact and empower more lives.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-green-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-xl">
                <span className="flex items-center justify-center space-x-2">
                  <FaHandsHelping />
                  <span>Support Our Mission</span>
                </span>
              </button>
              <button className="bg-white/80 backdrop-blur-lg border border-green-200 text-green-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-green-50 transform hover:scale-105 transition-all duration-300">
                View Our Programs
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Geographical;
