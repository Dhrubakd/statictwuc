import React from 'react';
import { FaChalkboardTeacher, FaHandsHelping, FaSeedling, FaHeartbeat, FaLaptopCode, FaBookReader, FaStar, FaTrophy } from 'react-icons/fa';
import { HiLightBulb } from 'react-icons/hi';

const Programs = () => {
  const programs = [
    {
      id: 1,
      title: "Educational Workshops",
      description: "Providing workshops on literacy, leadership, and self-development to equip women with knowledge and confidence.",
      icon: <FaChalkboardTeacher className="text-white text-3xl" />,
      gradient: "from-emerald-500 to-teal-500",
      bgGradient: "from-green-50 to-emerald-50",
      stats: "1,000+ Women Educated",
      impact: "95% Success Rate"
    },
    {
      id: 2,
      title: "Leadership & Advocacy",
      description: "Training women to become advocates and community leaders who can inspire and drive positive change.",
      icon: <FaHandsHelping className="text-white text-3xl" />,
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      stats: "500+ Leaders Trained",
      impact: "80% Community Impact"
    },
    {
      id: 3,
      title: "Health & Wellness Programs",
      description: "Organizing health campaigns and wellness drives to promote hygiene, maternal health, and overall well-being.",
      icon: <FaHeartbeat className="text-white text-3xl" />,
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-blue-50 to-purple-50",
      stats: "200+ Health Programs",
      impact: "60% Health Improvement"
    },
    {
      id: 4,
      title: "Digital Literacy Training",
      description: "Offering courses in basic computer skills, internet usage, and digital literacy to bridge the digital divide.",
      icon: <FaLaptopCode className="text-white text-3xl" />,
      gradient: "from-red-500 to-pink-500",
      bgGradient: "from-orange-50 to-red-50",
      stats: "800+ Digitally Literate",
      impact: "85% Skill Improvement"
    },
    {
      id: 5,
      title: "Sustainable Livelihood Support",
      description: "Providing skill-based training in agriculture, craft-making, and small business management for sustainable growth.",
      icon: <FaSeedling className="text-white text-3xl" />,
      gradient: "from-teal-500 to-green-500",
      bgGradient: "from-teal-50 to-green-50",
      stats: "300+ Entrepreneurs",
      impact: "70% Income Increase"
    },
    {
      id: 6,
      title: "Scholarship Programs",
      description: "Awarding educational scholarships to girls and women to pursue formal education and break barriers of inequality.",
      icon: <FaBookReader className="text-white text-3xl" />,
      gradient: "from-indigo-600 to-blue-600",
      bgGradient: "from-indigo-50 to-purple-50",
      stats: "150+ Scholarships",
      impact: "100% Education Access"
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
        
        .program-card {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          overflow: hidden;
        }
        
        .program-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s ease;
        }
        
        .program-card:hover::before {
          left: 100%;
        }
        
        .program-card:hover {
          transform: translateY(-8px) scale(1.03);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
        }
      `}</style>

      {/* Background Blobs */}
      <div className="background-blob blob-1"></div>
      <div className="background-blob blob-2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-8"><span className="text-white/80 font-medium tracking-wider uppercase text-sm">Empowerment Programs</span></div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8">
            <span className="bg-gradient-to-r from-white via-green-100 to-blue-200 bg-clip-text text-transparent">
              Our Programs
            </span>
          </h1>
          <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Our programs focus on empowering women and fostering community growth through 
            education, leadership, and skill-building initiatives.
          </p>
        </div>

        {/* Overall Impact Statistics */}
        <div className="glass-card rounded-3xl p-8 lg:p-12 mb-20 floating-animation">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold gradient-text mb-4">Program Impact Overview</h2>
            <p className="text-gray-600 text-lg">Transforming lives through comprehensive program delivery</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mb-4">
                <FaBookReader className="text-white text-2xl" />
              </div>
              <h3 className="text-3xl font-bold text-green-600 mb-2">1,000+</h3>
              <p className="text-gray-600 font-medium">Women Educated</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-4">
                <FaHeartbeat className="text-white text-2xl" />
              </div>
              <h3 className="text-3xl font-bold text-blue-600 mb-2">200+</h3>
              <p className="text-gray-600 font-medium">Health Programs</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4">
                <FaSeedling className="text-white text-2xl" />
              </div>
              <h3 className="text-3xl font-bold text-purple-600 mb-2">300+</h3>
              <p className="text-gray-600 font-medium">Entrepreneurs Supported</p>
            </div>
          </div>
        </div>

        {/* Programs Grid */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-100 mb-6">
              Our Key Programs
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Comprehensive initiatives designed to create lasting positive impact
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div
                key={program.id}
                className={`program-card glass-card rounded-3xl p-8 floating-animation`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${program.gradient} rounded-2xl mb-6`}>
                  {program.icon}
                </div>
                
                <h3 className="text-2xl font-bold gradient-text mb-4">{program.title}</h3>
                <p className="text-gray-700 leading-relaxed mb-6">{program.description}</p>
                
                <div className="space-y-3">
                  <div className={`bg-gradient-to-r ${program.bgGradient} p-4 rounded-xl`}>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 font-medium">Reach:</span>
                      <span className={`font-bold text-transparent bg-gradient-to-r ${program.gradient} bg-clip-text`}>
                        {program.stats}
                      </span>
                    </div>
                  </div>
                  
                  <div className={`bg-gradient-to-r ${program.bgGradient} p-4 rounded-xl`}>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 font-medium">Impact:</span>
                      <span className={`font-bold text-transparent bg-gradient-to-r ${program.gradient} bg-clip-text`}>
                        {program.impact}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call-to-Action Section */}
        <div className="glass-card rounded-3xl p-8 lg:p-12 text-center floating-animation">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl mb-6">
              <FaTrophy className="text-white text-2xl" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">Support Our Programs</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Join us in empowering women and fostering sustainable communities. 
              Your support helps us expand our programs and make a lasting impact.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/donate-us"
                className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-green-700 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-xl"
              >
                <span className="flex items-center justify-center space-x-2">
                  <FaStar />
                  <span>Donate Now</span>
                </span>
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
    </div>
  );
};

export default Programs;
