
import React from "react";
import { FaBriefcase, FaUsers, FaGraduationCap, FaHandshake, FaMapMarkerAlt, FaCalendarAlt, FaEnvelope, FaRocket, FaStar, FaHeart } from "react-icons/fa";
import { HiLightBulb, HiTrendingUp } from "react-icons/hi";

const JobOpportunities = () => {
  const jobCategories = [
    {
      id: 1,
      title: "Field Staff",
      description: "Social Workers, Project Coordinators, and Community Outreach Officers.",
      icon: <FaUsers className="text-white text-3xl" />,
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-100",
      openings: 3
    },
    {
      id: 2,
      title: "Office Staff",
      description: "Finance Officers, HR Assistants, and Administrative Coordinators.",
      icon: <FaBriefcase className="text-white text-3xl" />,
      gradient: "from-emerald-500 to-teal-500",
      bgGradient: "from-green-50 to-emerald-50",
      borderColor: "border-green-100",
      openings: 2
    },
    {
      id: 3,
      title: "Training & Education",
      description: "Trainers for skill development programs, Workshop Coordinators.",
      icon: <FaGraduationCap className="text-white text-3xl" />,
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-blue-50 to-purple-50",
      borderColor: "border-purple-100",
      openings: 1
    },
    {
      id: 4,
      title: "Internships",
      description: "Opportunities for students in project management, community development, and public health.",
      icon: <FaRocket className="text-white text-3xl" />,
      gradient: "from-red-500 to-pink-500",
      bgGradient: "from-orange-50 to-red-50",
      borderColor: "border-orange-100",
      openings: 5
    }
  ];

  const openPositions = [
    {
      id: 1,
      title: "Community Outreach Officer",
      location: "Gulariya-7, Bardiya",
      description: "Coordinate field activities, interact with local communities, and support ongoing projects.",
      deadline: "October 31, 2025",
      type: "Full-time",
      category: "Field Staff",
      gradient: "from-blue-500 to-cyan-500",
      urgent: false
    },
    {
      id: 2,
      title: "Finance Officer",
      location: "Office-based (Gulariya)",
      description: "Manage budgets, prepare financial reports, and handle expense tracking for projects.",
      deadline: "November 10, 2025",
      type: "Full-time",
      category: "Office Staff",
      gradient: "from-emerald-500 to-teal-500",
      urgent: true
    },
    {
      id: 3,
      title: "Training Program Coordinator",
      location: "Hybrid (Remote + Field)",
      description: "Plan and oversee workshops, monitor participant progress, and ensure successful training delivery.",
      deadline: "November 15, 2025",
      type: "Part-time",
      category: "Training & Education",
      gradient: "from-purple-500 to-pink-500",
      urgent: false
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
        
        .job-card {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          overflow: hidden;
        }
        
        .job-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s ease;
        }
        
        .job-card:hover::before {
          left: 100%;
        }
        
        .job-card:hover {
          transform: translateY(-8px) scale(1.03);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
        }
        
        .position-card {
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .position-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }
        
        .urgent-badge {
          background: linear-gradient(135deg, #ef4444, #dc2626);
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }
        
        .apply-button {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        
        .apply-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s ease;
        }
        
        .apply-button:hover::before {
          left: 100%;
        }
        
        .apply-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 30px rgba(59, 130, 246, 0.4);
        }
      `}</style>

      {/* Background Blobs */}
      <div className="background-blob blob-1"></div>
      <div className="background-blob blob-2"></div>
      <div className="background-blob blob-3"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-8"><span className="text-white/80 font-medium tracking-wider uppercase text-sm">Career Opportunities</span></div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8">
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
              Join Our Team
            </span>
          </h1>
          <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Be a part of our mission to empower women and uplift communities. We seek dedicated individuals 
            passionate about making a lasting impact through innovation and compassion.
          </p>
        </div>

        {/* Impact Statistics */}
        <div className="glass-card rounded-3xl p-8 lg:p-12 mb-20 floating-animation">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-4">
                <FaBriefcase className="text-white text-2xl" />
              </div>
              <h3 className="text-3xl font-bold text-blue-600 mb-2">11</h3>
              <p className="text-gray-600 font-medium">Open Positions</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mb-4">
                <FaUsers className="text-white text-2xl" />
              </div>
              <h3 className="text-3xl font-bold text-green-600 mb-2">50+</h3>
              <p className="text-gray-600 font-medium">Team Members</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4">
                <HiTrendingUp className="text-white text-2xl" />
              </div>
              <h3 className="text-3xl font-bold text-purple-600 mb-2">95%</h3>
              <p className="text-gray-600 font-medium">Growth Rate</p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-2xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full mb-4">
                <FaHeart className="text-white text-2xl" />
              </div>
              <h3 className="text-3xl font-bold text-orange-600 mb-2">100%</h3>
              <p className="text-gray-600 font-medium">Job Satisfaction</p>
            </div>
          </div>
        </div>

        {/* Job Categories Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-100 mb-6">
              Available Job Categories
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Explore diverse career paths and find your perfect role in our mission-driven organization
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {jobCategories.map((category, index) => (
              <div
                key={category.id}
                className={`job-card glass-card rounded-3xl p-8 text-center floating-animation`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${category.gradient} rounded-2xl mb-6`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold gradient-text mb-4">{category.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{category.description}</p>
                
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-600 font-semibold text-sm">
                    {category.openings} Opening{category.openings > 1 ? 's' : ''}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Current Open Positions */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-100 mb-6">
              Current Open Positions
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Join our team and make a meaningful impact in the community
            </p>
          </div>
          
          <div className="space-y-8">
            {openPositions.map((position, index) => (
              <div
                key={position.id}
                className={`position-card glass-card rounded-3xl p-8 lg:p-12 floating-animation`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${position.gradient} rounded-2xl`}>
                        <FaBriefcase className="text-white text-2xl" />
                      </div>
                      <div>
                        <h3 className="text-2xl lg:text-3xl font-bold gradient-text">{position.title}</h3>
                        <div className="flex items-center space-x-4 mt-2">
                          <span className="inline-flex items-center space-x-1 text-gray-600">
                            <FaMapMarkerAlt className="text-sm" />
                            <span>{position.location}</span>
                          </span>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            position.type === 'Full-time' 
                              ? 'bg-green-100 text-green-700' 
                              : 'bg-blue-100 text-blue-700'
                          }`}>
                            {position.type}
                          </span>
                          {position.urgent && (
                            <span className="urgent-badge px-3 py-1 rounded-full text-xs font-semibold text-white">
                              Urgent
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">{position.description}</p>
                    
                    <div className="flex items-center space-x-2 text-purple-600">
                      <FaCalendarAlt className="text-sm" />
                      <span className="font-semibold">Deadline: {position.deadline}</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 lg:mt-0 lg:ml-8">
                    <button className="apply-button w-full lg:w-auto px-8 py-4 text-white font-semibold rounded-2xl hover:scale-105 transition-all duration-300">
                      <span className="flex items-center space-x-2">
                        <FaEnvelope />
                        <span>Apply Now</span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How to Apply Section */}
        <section className="glass-card rounded-3xl p-8 lg:p-12 mb-20 floating-animation">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl mb-6">
              <HiLightBulb className="text-white text-2xl" />
            </div>
            <h2 className="text-4xl font-bold gradient-text mb-4">How to Apply</h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-bold text-xl mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Prepare Documents</h3>
                <p className="text-gray-600">Update your resume and write a compelling cover letter</p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-bold text-xl mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Email Application</h3>
                <p className="text-gray-600">Send to <span className="font-semibold text-blue-600">twuc.bardiya2049@gmail.com</span></p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-full text-white font-bold text-xl mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Include Job Title</h3>
                <p className="text-gray-600">Mention the position in your email subject line</p>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl">
              <p className="text-lg text-gray-700 text-center">
                <strong>For internships:</strong> Please indicate your area of interest and available dates in your cover letter.
              </p>
            </div>
          </div>
        </section>

        {/* Final Call to Action */}
        <div className="glass-card rounded-3xl p-8 lg:p-12 text-center floating-animation">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl mb-6">
              <FaStar className="text-white text-2xl" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">Be Part of Our Mission</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We welcome passionate individuals who are ready to make a difference. 
              Join our dedicated team and help empower the community.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:twuc.bardiya2049@gmail.com"
                className="apply-button inline-flex items-center space-x-3 px-8 py-4 text-white font-semibold rounded-2xl hover:scale-105 transition-all duration-300 text-lg"
              >
                <FaEnvelope />
                <span>Apply Now</span>
              </a>
              <button className="bg-white/80 backdrop-blur-lg border border-blue-200 text-blue-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-blue-50 transform hover:scale-105 transition-all duration-300">
                Download Job Guide
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobOpportunities;
