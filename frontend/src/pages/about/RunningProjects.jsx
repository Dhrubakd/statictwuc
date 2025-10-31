import React from 'react';
import { FaRegClock, FaHandHoldingHeart, FaLeaf, FaProjectDiagram, FaSeedling, FaUsers, FaShieldAlt, FaBullseye } from 'react-icons/fa';
import { HiTrendingUp, HiLightBulb } from 'react-icons/hi';

const RunningProjects = () => {
  const ongoingProjects = [
    {
      id: 1,
      title: 'Promoting Climate Resilient and Socially Inclusive Water Management (CLASSIK)',
      description: 'Building climate resilience through sustainable water management and community empowerment',
      objectives: [
        'Identify vulnerabilities of local communities to climate-induced hazards',
        'Examine barriers faced by women, marginalized groups, and indigenous communities',
        'Evaluate approaches for water conservation and sustainable management',
        'Build capacity for sustainable water management',
        'Develop policy recommendations for inclusive water resource management',
      ],
      duration: '2023-2027',
      partner: 'IHE Delft',
      category: 'Water Management',
      icon: 'water',
      progress: 65,
    },
    {
      id: 2,
      title: 'Partnership for Smallholder Farmers and Youth Entrepreneurship',
      description: 'Empowering farmers and youth through sustainable agriculture and entrepreneurship',
      objectives: [
        'Promote environmentally friendly agricultural practices',
        'Ensure access to markets and support value chain participation',
        'Enhance enterprise profitability and financing',
        'Strengthen private sector involvement in agricultural investment',
      ],
      duration: '2023-2026',
      partner: 'Heifer Project International',
      category: 'Agriculture',
      icon: 'agriculture',
      progress: 45,
    },
    {
      id: 3,
      title: 'Community Safety Net',
      description: 'Providing urgent relief and building resilient communities',
      objectives: [
        'Provide urgent relief to families affected by disasters',
        'Raise awareness on psycho-social well-being',
        'Foster collaboration among marginalized communities',
        'Establish connections to address pressing issues',
      ],
      duration: '2023-2025',
      partner: 'Nagarik Aawaz',
      category: 'Emergency Response',
      icon: 'safety',
      progress: 80,
    },
    {
      id: 4,
      title: 'Local Initiative for Community Empowerment and Development (LICED)',
      description: 'Enhancing community capacity for sustainable development',
      objectives: [
        'Enhance capacities in natural resource management',
        'Ensure fair access to productive resources',
        'Improve farm production and sustainable practices',
      ],
      duration: '2024',
      partner: 'The Lutheran World Federation Nepal',
      category: 'Community Development',
      icon: 'community',
      progress: 90,
    },
  ];

  const getProjectIcon = (iconType) => {
    switch (iconType) {
      case 'water':
        return <FaLeaf className="text-white text-2xl" />;
      case 'agriculture':
        return <FaSeedling className="text-white text-2xl" />;
      case 'safety':
        return <FaShieldAlt className="text-white text-2xl" />;
      case 'community':
        return <FaUsers className="text-white text-2xl" />;
      default:
        return <FaProjectDiagram className="text-white text-2xl" />;
    }
  };

  const getCardGradient = (category) => {
    switch (category) {
      case 'Water Management':
        return 'from-blue-50 to-cyan-50 border-blue-100';
      case 'Agriculture':
        return 'from-green-50 to-emerald-50 border-green-100';
      case 'Emergency Response':
        return 'from-red-50 to-orange-50 border-red-100';
      case 'Community Development':
        return 'from-blue-50 to-purple-50 border-purple-100';
      default:
        return 'from-gray-50 to-slate-50 border-gray-100';
    }
  };

  const getIconGradient = (category) => {
    switch (category) {
      case 'Water Management':
        return 'from-blue-500 to-cyan-500';
      case 'Agriculture':
        return 'from-emerald-500 to-teal-500';
      case 'Emergency Response':
        return 'from-red-500 to-orange-500';
      case 'Community Development':
        return 'from-purple-500 to-pink-500';
      default:
        return 'from-gray-500 to-slate-500';
    }
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
        
        .project-card {
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .project-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s ease;
        }
        
        .project-card:hover::before {
          left: 100%;
        }
        
        .project-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
        }
        
        .progress-bar {
          width: 100%;
          height: 8px;
          background-color: #e5e7eb;
          border-radius: 4px;
          overflow: hidden;
        }
        
        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #6366f1, #8b5cf6);
          border-radius: 4px;
          transition: width 1s ease-in-out;
        }
      `}</style>

      {/* Background Blobs */}
      <div className="background-blob blob-1"></div>
      <div className="background-blob blob-2"></div>
      
      <div className="container mx-auto px-4 relative z-10">

      {/* Header Section */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center space-x-2 mb-8"><span className="text-white/80 font-medium tracking-wider uppercase text-sm">Current Initiatives</span></div>
        <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8">
          <span className="bg-gradient-to-r from-white via-purple-100 to-pink-200 bg-clip-text text-transparent">
            Our Projects
          </span>
        </h1>
        <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
          Discover our ongoing initiatives that are creating meaningful impact in communities across the region
        </p>
      </div>

      {/* Statistics Section */}
      <div className="glass-card rounded-3xl p-8 lg:p-12 mb-20 floating-animation">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-4">
              <FaProjectDiagram className="text-white text-2xl" />
            </div>
            <h3 className="text-3xl font-bold text-blue-600 mb-2">{ongoingProjects.length}</h3>
            <p className="text-gray-600 font-medium">Active Projects</p>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mb-4">
              <FaUsers className="text-white text-2xl" />
            </div>
            <h3 className="text-3xl font-bold text-green-600 mb-2">5000+</h3>
            <p className="text-gray-600 font-medium">Beneficiaries</p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4">
              <HiTrendingUp className="text-white text-2xl" />
            </div>
            <h3 className="text-3xl font-bold text-purple-600 mb-2">75%</h3>
            <p className="text-gray-600 font-medium">Avg Progress</p>
          </div>
          
          <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-2xl">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full mb-4">
              <FaHandHoldingHeart className="text-white text-2xl" />
            </div>
            <h3 className="text-3xl font-bold text-orange-600 mb-2">12</h3>
            <p className="text-gray-600 font-medium">Communities</p>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="space-y-8">
        {ongoingProjects.map((project, index) => (
          <div
            key={project.id}
            className={`project-card glass-card rounded-3xl p-8 lg:p-12 floating-animation`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Project Header */}
              <div className="lg:col-span-3">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                  <div className="flex items-center space-x-4 mb-4 md:mb-0">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${getIconGradient(project.category)} rounded-2xl`}>
                      {getProjectIcon(project.icon)}
                    </div>
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold gradient-text mb-2">{project.title}</h3>
                      <p className="text-gray-600 text-lg">{project.description}</p>
                    </div>
                  </div>
                  <div className="text-center md:text-right">
                    <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm font-medium mb-2">
                      {project.category}
                    </span>
                    <div className="text-sm text-gray-600">
                      <p><strong>Duration:</strong> {project.duration}</p>
                      <p><strong>Partner:</strong> {project.partner}</p>
                    </div>
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-600">Project Progress</span>
                    <span className="text-sm font-bold text-purple-600">{project.progress}%</span>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
              
              {/* Objectives */}
              <div className="lg:col-span-3">
                <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <FaBullseye className="text-blue-600 mr-2" />
                  Key Objectives
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.objectives.map((objective, objIndex) => (
                    <div key={objIndex} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2"></div>
                      <p className="text-gray-700 leading-relaxed">{objective}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call-to-Action Section */}
      <div className="glass-card rounded-3xl p-8 lg:p-12 text-center mt-20 floating-animation">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl mb-6">
            <HiLightBulb className="text-white text-2xl" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">Support Our Projects</h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Your support enables us to expand our reach and create lasting impact. Join us in building stronger, 
            more resilient communities through our innovative projects.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-xl">
              Fund a Project
            </button>
            <button className="bg-white/80 backdrop-blur-lg border border-purple-200 text-purple-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-purple-50 transform hover:scale-105 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default RunningProjects;
