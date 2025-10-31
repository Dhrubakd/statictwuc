
import React from 'react';
import { FaHandshake, FaGlobe, FaUsers, FaHeart } from 'react-icons/fa';
import { HiLightBulb } from 'react-icons/hi';

const Partner = () => {
  const internationalPartners = [
    { id: 1, name: 'I.C.R.C', category: 'International' },
    { id: 2, name: 'DAN Church Aid', category: 'International' },
    { id: 3, name: 'Heifer Project International', category: 'International' },
    { id: 4, name: 'Helvetas', category: 'International' },
    { id: 5, name: 'IFA/Germany', category: 'International' },
    { id: 6, name: 'Oxfam', category: 'International' },
    { id: 7, name: 'Plan International Nepal', category: 'International' },
    { id: 8, name: 'The Lutheran World Federation Nepal', category: 'International' },
    { id: 9, name: 'UN HABITAT', category: 'UN Agencies' },
    { id: 10, name: 'UNDP', category: 'UN Agencies' },
    { id: 11, name: 'USAID', category: 'Government' },
    { id: 12, name: 'US Fish and Wildlife Service', category: 'Government' },
  ];

  const localPartners = [
    { id: 13, name: 'IDE Nepal', category: 'Local NGO' },
    { id: 14, name: 'Nagarik Aawaz', category: 'Local NGO' },
    { id: 15, name: 'NGO Federation', category: 'Network' },
    { id: 16, name: 'Saathi', category: 'Local NGO' },
    { id: 17, name: 'SAP Nepal', category: 'Local NGO' },
    { id: 18, name: 'Shtrii Shakti', category: 'Local NGO' },
    { id: 19, name: 'World Education', category: 'Educational' },
  ];

  const getPartnerIcon = (category) => {
    switch (category) {
      case 'International':
        return <FaGlobe className="text-white text-xl" />;
      case 'UN Agencies':
        return <FaUsers className="text-white text-xl" />;
      case 'Government':
        return <HiLightBulb className="text-white text-xl" />;
      case 'Local NGO':
        return <FaHeart className="text-white text-xl" />;
      case 'Network':
        return <FaHandshake className="text-white text-xl" />;
      default:
        return <FaHandshake className="text-white text-xl" />;
    }
  };

  const getCardGradient = (category) => {
    switch (category) {
      case 'International':
        return 'from-blue-50 to-indigo-50 border-blue-100';
      case 'UN Agencies':
        return 'from-purple-50 to-violet-50 border-purple-100';
      case 'Government':
        return 'from-green-50 to-emerald-50 border-green-100';
      case 'Local NGO':
        return 'from-orange-50 to-red-50 border-orange-100';
      case 'Network':
        return 'from-teal-50 to-cyan-50 border-teal-100';
      default:
        return 'from-gray-50 to-slate-50 border-gray-100';
    }
  };

  const getIconGradient = (category) => {
    switch (category) {
      case 'International':
        return 'from-blue-500 to-indigo-500';
      case 'UN Agencies':
        return 'from-purple-500 to-violet-500';
      case 'Government':
        return 'from-emerald-500 to-teal-500';
      case 'Local NGO':
        return 'from-red-500 to-pink-500';
      case 'Network':
        return 'from-teal-500 to-cyan-500';
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
        
        .partner-card {
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .partner-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s ease;
        }
        
        .partner-card:hover::before {
          left: 100%;
        }
        
        .partner-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
        }
      `}</style>

      {/* Background Blobs */}
      <div className="background-blob blob-1"></div>
      <div className="background-blob blob-2"></div>
      
      <div className="container mx-auto px-4 relative z-10">

      {/* Header Section */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center space-x-2 mb-8"><span className="text-white/80 font-medium tracking-wider uppercase text-sm">Partnerships</span></div>
        <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8">
          <span className="bg-gradient-to-r from-white via-purple-100 to-pink-200 bg-clip-text text-transparent">
            Our Partners
          </span>
        </h1>
        <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
          Collaborating with exceptional organizations worldwide to amplify our impact and create lasting change in communities
        </p>
      </div>

      {/* International Partners Section */}
      <div className="glass-card rounded-3xl p-8 lg:p-12 mb-20 floating-animation">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl mb-6">
            <FaGlobe className="text-white text-2xl" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">International Partners</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Global organizations and agencies that support our mission across borders
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {internationalPartners.map((partner) => (
            <div
              key={partner.id}
              className={`partner-card bg-gradient-to-br ${getCardGradient(partner.category)} p-8 rounded-2xl border`}
            >
              <div className="text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${getIconGradient(partner.category)} rounded-full mb-6`}>
                  {getPartnerIcon(partner.category)}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{partner.name}</h3>
                <p className="text-sm text-gray-600 font-medium px-3 py-1 bg-white/60 rounded-full inline-block">
                  {partner.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Local Partners Section */}
      <div className="glass-card rounded-3xl p-8 lg:p-12 mb-20 floating-animation">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl mb-6">
            <FaHeart className="text-white text-2xl" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">Local Partners</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Community-based organizations and local networks that strengthen our grassroots impact
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {localPartners.map((partner) => (
            <div
              key={partner.id}
              className={`partner-card bg-gradient-to-br ${getCardGradient(partner.category)} p-8 rounded-2xl border`}
            >
              <div className="text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${getIconGradient(partner.category)} rounded-full mb-6`}>
                  {getPartnerIcon(partner.category)}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{partner.name}</h3>
                <p className="text-sm text-gray-600 font-medium px-3 py-1 bg-white/60 rounded-full inline-block">
                  {partner.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Partnership Opportunities Section */}
      <div className="glass-card rounded-3xl p-8 lg:p-12 text-center floating-animation">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl mb-6">
            <FaHandshake className="text-white text-2xl" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">Partner With Us</h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Join our network of partners and help us create meaningful change. Together, we can amplify our impact 
            and build stronger, more empowered communities worldwide.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl mb-4">
                <FaGlobe className="text-white text-xl" />
              </div>
              <h4 className="text-lg font-bold text-blue-600 mb-2">Global Reach</h4>
              <p className="text-gray-600 text-sm">Expand your impact across communities</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl mb-4">
                <FaUsers className="text-white text-xl" />
              </div>
              <h4 className="text-lg font-bold text-purple-600 mb-2">Shared Vision</h4>
              <p className="text-gray-600 text-sm">Align with our mission of empowerment</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl mb-4">
                <HiLightBulb className="text-white text-xl" />
              </div>
              <h4 className="text-lg font-bold text-green-600 mb-2">Innovation</h4>
              <p className="text-gray-600 text-sm">Collaborate on innovative solutions</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-xl">
              Become a Partner
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

export default Partner;
