import React from "react";
import { FaCalendar, FaCheckCircle, FaFlag, FaRocket, FaTrophy, FaHandshake } from "react-icons/fa";
import { HiLightBulb } from "react-icons/hi";

const Milestone = () => {
  const milestones = [
    {
      year: "2005",
      title: "Foundation & Vision",
      description: "Established TWUC with a clear mission to empower communities and drive sustainable development through innovative programs.",
      icon: <FaFlag className="text-3xl" />,
      color: "from-blue-500 to-cyan-500",
      achievements: ["Legal establishment", "Core team formation", "Vision documentation"]
    },
    {
      year: "2010",
      title: "First Community Projects",
      description: "Launched our first community development projects, focusing on education and basic infrastructure in remote areas.",
      icon: <FaRocket className="text-3xl" />,
      color: "from-emerald-500 to-teal-500",
      achievements: ["500+ women trained", "50+ families benefited", "Community partnerships"]
    },
    {
      year: "2015",
      title: "Partnership Growth",
      description: "Expanded our network through strategic partnerships with local organizations and international development agencies.",
      icon: <FaHandshake className="text-3xl" />,
      color: "from-purple-500 to-pink-500",
      achievements: ["10+ partnerships", "Scholarship program", "Program expansion"]
    },
    {
      year: "2020",
      title: "Digital Innovation",
      description: "Embraced technology to enhance program delivery and monitoring, implementing digital solutions for better community reach.",
      icon: <HiLightBulb className="text-3xl" />,
      color: "from-red-500 to-pink-500",
      achievements: ["Leadership initiative", "Online training programs", "Remote monitoring"]
    },
    {
      year: "2022",
      title: "Recognition & Awards",
      description: "Received national recognition for outstanding contribution to community development and sustainable practices.",
      icon: <FaTrophy className="text-3xl" />,
      color: "from-yellow-500 to-amber-500",
      achievements: ["200+ health campaigns", "Media recognition", "Best practices documentation"]
    },
    {
      year: "2024",
      title: "Sustainable Impact",
      description: "Achieved significant milestones in sustainable development with measurable impact across multiple communities.",
      icon: <FaCheckCircle className="text-3xl" />,
      color: "from-indigo-500 to-blue-500",
      achievements: ["250+ projects completed", "500+ families impacted", "Sustainability certification"]
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
        
        .timeline-line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 4px;
          background: linear-gradient(to bottom, #6366f1, #8b5cf6, #ec4899);
          transform: translateX(-50%);
        }
        
        .milestone-card {
          transition: all 0.3s ease;
        }
        
        .milestone-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
        }
        
        @media (max-width: 768px) {
          .timeline-line {
            left: 20px;
          }
        }
      `}</style>

      {/* Background Blobs */}
      <div className="background-blob blob-1"></div>
      <div className="background-blob blob-2"></div>
      <div className="background-blob blob-3"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-8"><span className="text-white/80 font-medium tracking-wider uppercase text-sm">Our Journey</span></div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8">
            <span className="bg-gradient-to-r from-white via-yellow-100 to-green-200 bg-clip-text text-transparent">
              Milestones & Progress
            </span>
          </h1>
          <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Discover our journey of growth, innovation, and impact through the years. 
            Each milestone represents a step forward in our mission to empower communities.
          </p>
        </div>

        {/* Timeline Section */}
        <div className="relative max-w-6xl mx-auto">
          {/* Timeline Line */}
          <div className="timeline-line hidden md:block"></div>
          
          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Content Card */}
                <div className="flex-1 w-full">
                  <div className="milestone-card glass-card rounded-3xl p-8 floating-animation" style={{ animationDelay: `${index * 0.2}s` }}>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${milestone.color} rounded-full text-white`}>
                        {milestone.icon}
                      </div>
                      <div>
                        <span className={`inline-block px-4 py-2 bg-gradient-to-r ${milestone.color} text-white rounded-full font-bold text-lg mb-2`}>
                          {milestone.year}
                        </span>
                        <h3 className="text-2xl lg:text-3xl font-bold gradient-text">{milestone.title}</h3>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                      {milestone.description}
                    </p>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-800 text-lg">Key Achievements:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {milestone.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex items-center space-x-2 bg-gradient-to-r from-green-50 to-blue-50 p-3 rounded-xl">
                            <FaCheckCircle className="text-green-500 text-sm flex-shrink-0" />
                            <span className="text-gray-700 text-sm font-medium">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Timeline Dot */}
                <div className="hidden md:flex items-center justify-center relative">
                  <div className={`w-6 h-6 bg-gradient-to-r ${milestone.color} rounded-full z-10 ring-4 ring-white shadow-xl`}></div>
                </div>
                
                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Overview */}
        <div className="mt-20 text-center">
          <div className="glass-card rounded-3xl p-8 lg:p-12 floating-animation">
            <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-8">Our Journey in Numbers</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-4">
                  <FaCalendar className="text-white text-2xl" />
                </div>
                <h3 className="text-4xl font-bold text-blue-600 mb-2">19</h3>
                <p className="text-gray-600 font-medium">Years of Impact</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mb-4">
                  <FaCheckCircle className="text-white text-2xl" />
                </div>
                <h3 className="text-4xl font-bold text-green-600 mb-2">250+</h3>
                <p className="text-gray-600 font-medium">Projects Completed</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4">
                  <FaTrophy className="text-white text-2xl" />
                </div>
                <h3 className="text-4xl font-bold text-purple-600 mb-2">500+</h3>
                <p className="text-gray-600 font-medium">Families Impacted</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="glass-card rounded-3xl p-8 lg:p-12 floating-animation">
            <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">Join Our Continued Journey</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Be part of our next milestone. Together, we can achieve even greater impact 
              and create lasting change in communities worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-xl">
                <span className="flex items-center justify-center space-x-2">
                  <FaRocket />
                  <span>Get Involved</span>
                </span>
              </button>
              <button className="bg-white/80 backdrop-blur-lg border border-purple-200 text-purple-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-purple-50 transform hover:scale-105 transition-all duration-300">
                View Our Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Milestone;
