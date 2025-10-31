import React from 'react';
import { FaCheckCircle, FaUsers, FaGlobe, FaAward, FaCalendarCheck, FaStar, FaTrophy, FaHandshake } from 'react-icons/fa';
import { HiTrendingUp, HiLightBulb } from 'react-icons/hi';

const CompletedProjects = () => {
  const completedProjects = [
    {
      id: 1,
      title: 'Rural Water Supply and Sanitation Program',
      description: 'Successfully implemented comprehensive water and sanitation infrastructure in remote villages',
      outcomes: [
        'Provided clean water access to 15,000+ people',
        'Built 50+ community water systems',
        'Trained 200+ local technicians for maintenance',
        'Reduced waterborne diseases by 85%',
        'Established 25 water user committees'
      ],
      duration: '2019-2022',
      partner: 'World Bank & Local Government',
      category: 'Water & Sanitation',
      icon: 'water',
      beneficiaries: '15,000+',
      budget: '$2.5M',
      completion: '2022'
    },
    {
      id: 2,
      title: 'Sustainable Agriculture and Food Security Initiative',
      description: 'Enhanced agricultural productivity and food security through modern farming techniques',
      outcomes: [
        'Increased crop yield by 40% for participating farmers',
        'Introduced climate-smart agriculture to 500+ farmers',
        'Established 12 farmer cooperatives',
        'Created market linkages for 300+ smallholder farmers',
        'Reduced post-harvest losses by 60%'
      ],
      duration: '2020-2023',
      partner: 'FAO & Agricultural Development Bank',
      category: 'Agriculture',
      icon: 'agriculture',
      beneficiaries: '5,000+',
      budget: '$1.8M',
      completion: '2023'
    },
    {
      id: 3,
      title: 'Women Empowerment and Economic Development',
      description: 'Empowered women through skill development, microfinance, and leadership training',
      outcomes: [
        'Trained 800+ women in various vocational skills',
        'Provided microfinance to 600+ women entrepreneurs',
        'Established 20+ women-led enterprises',
        'Achieved 90% loan repayment rate',
        'Created sustainable income sources for 1,200+ families'
      ],
      duration: '2018-2021',
      partner: 'UN Women & Microfinance Institutions',
      category: 'Women Empowerment',
      icon: 'women',
      beneficiaries: '8,000+',
      budget: '$1.2M',
      completion: '2021'
    },
    {
      id: 4,
      title: 'Community Health and Nutrition Program',
      description: 'Improved health outcomes and nutrition status in marginalized communities',
      outcomes: [
        'Reduced child malnutrition by 45%',
        'Trained 150+ community health workers',
        'Conducted health screenings for 10,000+ people',
        'Established 30+ health posts',
        'Improved maternal health indicators by 60%'
      ],
      duration: '2019-2022',
      partner: 'WHO & Ministry of Health',
      category: 'Health',
      icon: 'health',
      beneficiaries: '12,000+',
      budget: '$3.1M',
      completion: '2022'
    },
    {
      id: 5,
      title: 'Education Infrastructure Development',
      description: 'Built and renovated schools to improve access to quality education',
      outcomes: [
        'Built 25+ new school buildings',
        'Renovated 40+ existing schools',
        'Provided education materials to 5,000+ students',
        'Trained 200+ teachers',
        'Increased school enrollment by 35%'
      ],
      duration: '2017-2020',
      partner: 'UNESCO & Department of Education',
      category: 'Education',
      icon: 'education',
      beneficiaries: '7,500+',
      budget: '$2.8M',
      completion: '2020'
    }
  ];

  const getProjectIcon = (iconType) => {
    switch (iconType) {
      case 'water':
        return <FaGlobe className="text-white text-2xl" />;
      case 'agriculture':
        return <FaUsers className="text-white text-2xl" />;
      case 'women':
        return <FaHandshake className="text-white text-2xl" />;
      case 'health':
        return <FaAward className="text-white text-2xl" />;
      case 'education':
        return <FaTrophy className="text-white text-2xl" />;
      default:
        return <FaCheckCircle className="text-white text-2xl" />;
    }
  };

  const getCardGradient = (category) => {
    switch (category) {
      case 'Water & Sanitation':
        return 'from-blue-50 to-cyan-50 border-blue-100';
      case 'Agriculture':
        return 'from-green-50 to-emerald-50 border-green-100';
      case 'Women Empowerment':
        return 'from-pink-50 to-rose-50 border-pink-100';
      case 'Health':
        return 'from-red-50 to-orange-50 border-red-100';
      case 'Education':
        return 'from-purple-50 to-indigo-50 border-purple-100';
      default:
        return 'from-gray-50 to-slate-50 border-gray-100';
    }
  };

  const getIconGradient = (category) => {
    switch (category) {
      case 'Water & Sanitation':
        return 'from-blue-500 to-cyan-500';
      case 'Agriculture':
        return 'from-emerald-500 to-teal-500';
      case 'Women Empowerment':
        return 'from-pink-500 to-rose-500';
      case 'Health':
        return 'from-red-500 to-orange-500';
      case 'Education':
        return 'from-purple-500 to-indigo-500';
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
        
        .success-badge {
          background: linear-gradient(135deg, #10b981, #059669);
          color: white;
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 16px;
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
          <span className="bg-gradient-to-r from-white via-green-100 to-blue-200 bg-clip-text text-transparent">
            Completed Projects
          </span>
        </h1>
        <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
          Celebrating our achievements and the lasting impact we've created in communities through successful project completion
        </p>
      </div>

      {/* Overall Impact Statistics */}
      <div className="glass-card rounded-3xl p-8 lg:p-12 mb-20 floating-animation">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold gradient-text mb-4">Cumulative Impact</h2>
          <p className="text-gray-600 text-lg">Our completed projects have created lasting change across multiple sectors</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mb-4">
              <FaCheckCircle className="text-white text-2xl" />
            </div>
            <h3 className="text-3xl font-bold text-green-600 mb-2">{completedProjects.length}</h3>
            <p className="text-gray-600 font-medium">Projects Completed</p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-4">
              <FaUsers className="text-white text-2xl" />
            </div>
            <h3 className="text-3xl font-bold text-blue-600 mb-2">47,500+</h3>
            <p className="text-gray-600 font-medium">Lives Impacted</p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4">
              <FaAward className="text-white text-2xl" />
            </div>
            <h3 className="text-3xl font-bold text-purple-600 mb-2">$11.4M</h3>
            <p className="text-gray-600 font-medium">Total Investment</p>
          </div>
          
          <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-2xl">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full mb-4">
              <FaStar className="text-white text-2xl" />
            </div>
            <h3 className="text-3xl font-bold text-orange-600 mb-2">95%</h3>
            <p className="text-gray-600 font-medium">Success Rate</p>
          </div>
        </div>
      </div>

      {/* Completed Projects Section */}
      <div className="space-y-8">
        {completedProjects.map((project, index) => (
          <div
            key={project.id}
            className={`project-card glass-card rounded-3xl p-8 lg:p-12 floating-animation`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Project Header */}
              <div className="lg:col-span-3">
                <div className="success-badge">
                  <FaCheckCircle className="text-sm" />
                  Successfully Completed
                </div>
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
                    <span className="inline-block px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-full text-sm font-medium mb-2">
                      {project.category}
                    </span>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p><strong>Duration:</strong> {project.duration}</p>
                      <p><strong>Completed:</strong> {project.completion}</p>
                      <p><strong>Budget:</strong> {project.budget}</p>
                      <p><strong>Beneficiaries:</strong> {project.beneficiaries}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Project Outcomes */}
              <div className="lg:col-span-3">
                <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <FaTrophy className="text-green-500 mr-2" />
                  Key Achievements & Outcomes
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.outcomes.map((outcome, outcomeIndex) => (
                    <div key={outcomeIndex} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mt-2"></div>
                      <p className="text-gray-700 leading-relaxed">{outcome}</p>
                    </div>
                  ))}
                </div>
                
                {/* Partner Information */}
                <div className="mt-6 p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl">
                  <p className="text-gray-600">
                    <strong className="text-gray-800">Implementation Partner:</strong> {project.partner}
                  </p>
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
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">Building on Success</h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Our successful track record demonstrates our commitment to creating lasting positive change. 
            Partner with us to continue building sustainable solutions for communities in need.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-green-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-xl">
              Partner With Us
            </button>
            <button className="bg-white/80 backdrop-blur-lg border border-green-200 text-green-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-green-50 transform hover:scale-105 transition-all duration-300">
              View Case Studies
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default CompletedProjects;
