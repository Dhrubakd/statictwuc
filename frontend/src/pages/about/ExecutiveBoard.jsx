
import React from 'react';
import { FaUserTie, FaUsers, FaMedal, FaHandshake } from 'react-icons/fa';
import { HiStar } from 'react-icons/hi';

const ExecutiveBoard = () => {
  const boardMembers = [
    { id: 1, name: 'Lilawati Tharu', designation: 'Chairman', type: 'executive' },
    { id: 2, name: 'Dipa Lammichhane', designation: 'Vice Chairman', type: 'executive' },
    { id: 3, name: 'Sunita Chaudhary', designation: 'Secretary', type: 'executive' },
    { id: 4, name: 'Punyakala Chaudhary', designation: 'Treasurer', type: 'executive' },
    { id: 5, name: 'Fulkumari Chaudhary', designation: 'Member', type: 'executive' },
    { id: 6, name: 'Nan Kumari Chaudhary', designation: 'Member', type: 'executive' },
    { id: 7, name: 'Bhagwati Tripathi', designation: 'Member', type: 'executive' },
    { id: 8, name: 'Salama Chaudhary', designation: 'Member', type: 'executive' },
    { id: 9, name: 'Imrana Ansari', designation: 'Member', type: 'executive' },
    { id: 10, name: 'Manju Chaudhary', designation: 'Member', type: 'executive' },
    { id: 11, name: 'Sujuni Tharuni', designation: 'Member', type: 'executive' },
    { id: 12, name: 'Prizma Singh Anmol Tharu', designation: 'Executive Director', type: 'executive' },
  ];

  const founderMembers = [
    { id: 1, name: 'Nirmala Chaudhary', designation: 'Chairperson', type: 'founder' },
    { id: 2, name: 'Sabitri Gautam', designation: 'Vice Chairperson', type: 'founder' },
    { id: 3, name: 'Prizma Singh Anmol Tharu', designation: 'Secretary', type: 'founder' },
    { id: 4, name: 'Holbi Tharu', designation: 'Treasurer', type: 'founder' },
    { id: 5, name: 'Kalti Tharu', designation: 'Member', type: 'founder' },
    { id: 6, name: 'Pradeshni Tharu', designation: 'Member', type: 'founder' },
    { id: 7, name: 'Jageshwori Tharu', designation: 'Member', type: 'founder' },
    { id: 8, name: 'Munsi Devi Tharu', designation: 'Member', type: 'founder' },
    { id: 9, name: 'Mayalu Tharu', designation: 'Member', type: 'founder' },
    { id: 10, name: 'Bidiya Tharu', designation: 'Member', type: 'founder' },
    { id: 11, name: 'Subutri Tharu', designation: 'Member', type: 'founder' },
    { id: 12, name: 'Sompati Tharu', designation: 'Member', type: 'founder' },
    { id: 13, name: 'Rupani Tharu', designation: 'Member', type: 'founder' },
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
        
        .member-card {
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .member-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s ease;
        }
        
        .member-card:hover::before {
          left: 100%;
        }
        
        .member-card:hover {
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
        <div className="inline-flex items-center space-x-2 mb-8"><span className="text-white/80 font-medium tracking-wider uppercase text-sm">Our Leadership</span></div>
        <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8">
          <span className="bg-gradient-to-r from-white via-purple-100 to-pink-200 bg-clip-text text-transparent">
            Leadership Team
          </span>
        </h1>
        <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
          Meet the visionary leaders and dedicated founders who guide TWUC's mission of empowerment and transformation
        </p>
      </div>

      {/* Executive Board Section */}
      <div className="glass-card rounded-3xl p-8 lg:p-12 mb-20 floating-animation">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-6">
            <FaUserTie className="text-white text-2xl" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">Executive Board</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our experienced board members who oversee strategic direction and organizational governance
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {boardMembers.map((member, index) => (
            <div
              key={member.id}
              className="member-card bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl border border-blue-100"
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6">
                  {member.designation.includes('Chairman') || member.designation.includes('Director') ? (
                    <HiStar className="text-white text-2xl" />
                  ) : (
                    <FaUserTie className="text-white text-xl" />
                  )}
                </div>
                <h3 className="text-xl font-bold text-blue-600 mb-2">{member.name}</h3>
                <p className="text-gray-600 font-medium">{member.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Founder Members Section */}
      <div className="glass-card rounded-3xl p-8 lg:p-12 mb-20 floating-animation">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl mb-6">
            <FaMedal className="text-white text-2xl" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">Founder Members</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The visionary pioneers who established TWUC and laid the foundation for our mission
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {founderMembers.map((member, index) => (
            <div
              key={member.id}
              className="member-card bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl border border-purple-100"
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6">
                  {member.designation.includes('Chairperson') || member.designation.includes('Secretary') ? (
                    <FaMedal className="text-white text-xl" />
                  ) : (
                    <FaUsers className="text-white text-xl" />
                  )}
                </div>
                <h3 className="text-xl font-bold text-purple-600 mb-2">{member.name}</h3>
                <p className="text-gray-600 font-medium">{member.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="glass-card rounded-3xl p-8 lg:p-12 text-center floating-animation">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl mb-6">
            <FaHandshake className="text-white text-2xl" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">Join Our Leadership</h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            We're always looking for passionate individuals who share our vision of empowerment and transformation. 
            Connect with our leadership team to explore opportunities for collaboration.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-xl">
              Contact Leadership
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

export default ExecutiveBoard;
