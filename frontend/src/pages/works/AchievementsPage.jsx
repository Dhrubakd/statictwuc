import React, { useEffect, useState } from "react";
import { FaTrophy, FaUsers, FaAward, FaStar, FaHandsHelping } from "react-icons/fa";
import { HiTrendingUp } from "react-icons/hi";

const AchievementsPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [stats, setStats] = useState({
    projectsCompleted: 0,
    happyClients: 0,
    awardsWon: 0,
    teamMembers: 0,
  });

  const targetStats = {
    projectsCompleted: 250,
    happyClients: 500,
    awardsWon: 20,
    teamMembers: 50,
  };

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
      let interval;
      interval = setInterval(() => {
        setStats((prevStats) => {
          const newStats = { ...prevStats };
          Object.keys(newStats).forEach((key) => {
            if (newStats[key] < targetStats[key]) {
              newStats[key] += 5;
            }
          });
          return newStats;
        });

        if (
          stats.projectsCompleted >= targetStats.projectsCompleted &&
          stats.happyClients >= targetStats.happyClients &&
          stats.awardsWon >= targetStats.awardsWon &&
          stats.teamMembers >= targetStats.teamMembers
        ) {
          clearInterval(interval);
        }
      }, 50);

      return () => clearInterval(interval);
    }
  }, [isVisible, stats]);

  const achievements = [
    "Successfully completed 250+ projects across various industries.",
    "Recognized as a leader in our field with multiple industry awards.",
    "Established long-term partnerships with over 500 satisfied clients.",
    "Built a passionate team of over 50 professionals.",
    "Achieved 95% client satisfaction rate across all projects.",
    "Implemented sustainable practices in 100% of our operations."
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
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-8"><span className="text-white/80 font-medium tracking-wider uppercase text-sm">Success Stories</span></div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8">
            <span className="bg-gradient-to-r from-white via-yellow-100 to-green-200 bg-clip-text text-transparent">
              Our Achievements
            </span>
          </h1>
          <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            We are proud of what we've achieved over the years through hard work, 
            dedication, and innovation in community empowerment.
          </p>
        </div>

        {/* Achievements List */}
        <div className="glass-card rounded-3xl p-8 lg:p-12 mb-16 floating-animation">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold gradient-text mb-4">Highlights of Our Achievements</h2>
            <p className="text-gray-600 text-lg">Key milestones that define our journey</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                  <FaStar className="text-white text-sm" />
                </div>
                <p className="text-gray-700 font-medium">{achievement}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Animated Statistics */}
        <section id="stats-section" className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-100 mb-6">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Real achievements that demonstrate our commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="stats-card glass-card rounded-3xl p-8 text-center floating-animation">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-6">
                <FaTrophy className="text-white text-2xl" />
              </div>
              <h3 className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">{stats.projectsCompleted}+</h3>
              <p className="text-gray-600 font-medium text-lg">Projects Completed</p>
            </div>
            
            <div className="stats-card glass-card rounded-3xl p-8 text-center floating-animation" style={{ animationDelay: '0.2s' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mb-6">
                <FaUsers className="text-white text-2xl" />
              </div>
              <h3 className="text-4xl lg:text-5xl font-bold text-green-600 mb-2">{stats.happyClients}+</h3>
              <p className="text-gray-600 font-medium text-lg">Happy Clients</p>
            </div>
            
            <div className="stats-card glass-card rounded-3xl p-8 text-center floating-animation" style={{ animationDelay: '0.4s' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6">
                <FaAward className="text-white text-2xl" />
              </div>
              <h3 className="text-4xl lg:text-5xl font-bold text-purple-600 mb-2">{stats.awardsWon}</h3>
              <p className="text-gray-600 font-medium text-lg">Awards Won</p>
            </div>
            
            <div className="stats-card glass-card rounded-3xl p-8 text-center floating-animation" style={{ animationDelay: '0.6s' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full mb-6">
                <FaHandsHelping className="text-white text-2xl" />
              </div>
              <h3 className="text-4xl lg:text-5xl font-bold text-orange-600 mb-2">{stats.teamMembers}+</h3>
              <p className="text-gray-600 font-medium text-lg">Team Members</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className="glass-card rounded-3xl p-8 lg:p-12 text-center floating-animation">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-500 to-green-500 rounded-2xl mb-6">
              <HiTrendingUp className="text-white text-2xl" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">Be Part of Our Success Story</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Join us in our journey as we continue to achieve excellence and make a positive impact 
              in communities around the world.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-green-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-xl">
                <span className="flex items-center justify-center space-x-2">
                  <FaHandsHelping />
                  <span>Join Us</span>
                </span>
              </button>
              <button className="bg-white/80 backdrop-blur-lg border border-green-200 text-green-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-green-50 transform hover:scale-105 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementsPage;
