
import React from 'react';
import { useState, useEffect, useRef } from "react";
import { 
  FaAward, 
  FaUsers, 
  FaHandsHelping, 
  FaRegLightbulb,
  FaHeart,
  FaGlobe,
  FaLeaf,
  FaHandHoldingHeart,
  FaUserGraduate,
  FaMedkit,
  FaSeedling
} from 'react-icons/fa';
import { 
  
  HiLightBulb, 
  HiFlag, 
  HiTrendingUp,
  HiChevronRight,
  HiCheckCircle,
  HiCalendar
} from 'react-icons/hi';

function useOnScreen(ref) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);

  return isVisible;
}

const AboutPage = () => {
  const sectionRef = useRef(null);
  const isVisible = useOnScreen(sectionRef);
  const [experience, setExperience] = useState(0);
  const [clients, setClients] = useState(0);
  const [projects, setProjects] = useState(0);

  useEffect(() => {
    if (isVisible) {
      let experienceInterval = setInterval(() => {
        setExperience((prev) => (prev < 32 ? prev + 1 : prev));
      }, 80);
      let clientsInterval = setInterval(() => {
        setClients((prev) => (prev < 1000 ? prev + 25 : prev));
      }, 50);
      let projectsInterval = setInterval(() => {
        setProjects((prev) => (prev < 200 ? prev + 5 : prev));
      }, 60);

      return () => {
        clearInterval(experienceInterval);
        clearInterval(clientsInterval);
        clearInterval(projectsInterval);
      };
    }
  }, [isVisible]);

  return (
    <div className="min-h-screen relative overflow-hidden mt-20 pt-24 pb-16" style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #6366f1 100%)'
    }}>
      <style>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        
        .glass-card-dark {
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.95) 0%, rgba(139, 92, 246, 0.9) 100%);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }
        
        .floating-animation {
          animation: float 6s ease-in-out infinite;
        }
        
        .floating-animation:nth-child(2) {
          animation-delay: -2s;
        }
        
        .floating-animation:nth-child(3) {
          animation-delay: -4s;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        .counter-animation {
          animation: countUp 2s ease-out forwards;
        }
        
        @keyframes countUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .mission-card {
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }
        
        .mission-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s ease;
        }
        
        .mission-card:hover::before {
          left: 100%;
        }
        
        .mission-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
        }
        
        .value-card {
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }
        
        .value-card:hover {
          transform: translateY(-5px);
          border-color: #6366f1;
          box-shadow: 0 20px 40px rgba(99, 102, 241, 0.2);
        }
        
        .achievement-card {
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .achievement-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
        }
        
        .background-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(40px);
          opacity: 0.7;
          animation: blob 7s infinite;
        }
        
        .blob-1 {
          top: 10%;
          left: 10%;
          width: 300px;
          height: 300px;
          background: linear-gradient(45deg, #ec4899, #f97316);
          animation-delay: 0s;
        }
        
        .blob-2 {
          top: 60%;
          right: 15%;
          width: 250px;
          height: 250px;
          background: linear-gradient(45deg, #8b5cf6, #3b82f6);
          animation-delay: 2s;
        }
        
        .blob-3 {
          bottom: 20%;
          left: 40%;
          width: 200px;
          height: 200px;
          background: linear-gradient(45deg, #10b981, #06b6d4);
          animation-delay: 4s;
        }
        
        @keyframes blob {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        
        .pulse-glow {
          animation: pulseGlow 2s infinite;
        }
        
        @keyframes pulseGlow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(99, 102, 241, 0.5);
          }
          50% {
            box-shadow: 0 0 40px rgba(99, 102, 241, 0.8);
          }
        }
        
        .timeline-item {
          position: relative;
        }
        
        .timeline-item::before {
          content: '';
          position: absolute;
          left: -15px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, #6366f1, #8b5cf6);
        }
        
        .timeline-item::after {
          content: '';
          position: absolute;
          left: -21px;
          top: 12px;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #6366f1;
          border: 3px solid white;
          box-shadow: 0 0 10px rgba(99, 102, 241, 0.5);
        }
      `}</style>
      
      {/* Background Blobs */}
      <div className="background-blob blob-1"></div>
      <div className="background-blob blob-2"></div>
      <div className="background-blob blob-3"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 mb-8"><span className="text-white/80 font-medium tracking-wider uppercase text-sm">Our Story</span></div>
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8">
            <span className="bg-gradient-to-r from-white via-purple-100 to-pink-200 bg-clip-text text-transparent">
              About TWUC
            </span>
          </h1>
          <p className="text-xl text-white/90 max-w-5xl mx-auto leading-relaxed">
            Empowering women and transforming communities since 1992
          </p>
        </div>

        {/* Introduction Section */}
        <div className="glass-card rounded-3xl p-8 lg:p-12 mb-16 floating-animation">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-center space-x-4 mb-12">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center">
                <FaUsers className="text-white text-2xl" />
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold gradient-text text-center">
                Tharu Women Upliftment Center
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  The <span className="font-bold text-purple-600">Tharu Women Upliftment Center (TWUC)</span> is a marginalized, women-led non-profit, non-governmental organization established in <span className="font-bold">1992</span>. It has a board of trustees with <span className="font-bold">11 female members</span> and a membership of over <span className="font-bold">200 women</span>, including 11 active executive committee members.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  TWUC is actively working to empower women, children, and disadvantaged groups in society across social, economic, cultural, and political realms to enhance human rights, social justice, and environmental conservation.
                </p>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl transform rotate-3 opacity-20"></div>
                <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-3xl">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600">1992</div>
                      <div className="text-sm text-gray-600">Founded</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600">200+</div>
                      <div className="text-sm text-gray-600">Members</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600">11</div>
                      <div className="text-sm text-gray-600">Trustees</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600">32+</div>
                      <div className="text-sm text-gray-600">Years</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div ref={sectionRef} className="mb-20">
          <div className="glass-card-dark rounded-3xl p-8 lg:p-12 floating-animation">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                Our Impact in Numbers
              </h2>
              <p className="text-white/80 text-xl">
                Three decades of transforming lives and communities
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mb-6 pulse-glow">
                  <HiTrendingUp className="text-white text-3xl" />
                </div>
                <h3 className="text-5xl lg:text-6xl font-extrabold text-white counter-animation">{experience}+</h3>
                <p className="text-xl text-white/90 mt-2 font-semibold">Years of Experience</p>
                <p className="text-white/70 mt-2">
                  Over three decades of dedicated service to marginalized communities
                </p>
              </div>
              
              <div className="text-center p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mb-6 pulse-glow">
                  <FaUsers className="text-white text-3xl" />
                </div>
                <h3 className="text-5xl lg:text-6xl font-extrabold text-white counter-animation">{clients}+</h3>
                <p className="text-xl text-white/90 mt-2 font-semibold">Lives Empowered</p>
                <p className="text-white/70 mt-2">
                  Women and families supported through our comprehensive programs
                </p>
              </div>
              
              <div className="text-center p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mb-6 pulse-glow">
                  <FaHandsHelping className="text-white text-3xl" />
                </div>
                <h3 className="text-5xl lg:text-6xl font-extrabold text-white counter-animation">{projects}+</h3>
                <p className="text-xl text-white/90 mt-2 font-semibold">Health Campaigns</p>
                <p className="text-white/70 mt-2">
                  Health and awareness campaigns conducted in rural communities
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Vision, Mission, and Goal Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          <div className="mission-card glass-card rounded-3xl p-8 lg:p-10 floating-animation">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mb-6">
                <HiLightBulb className="text-white text-3xl" />
              </div>
              <h3 className="text-3xl font-bold gradient-text mb-6">Our Vision</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                To make aware, creative, self-governed, equitable, and esteem society where every individual has the opportunity to thrive and contribute meaningfully.
              </p>
            </div>
          </div>
          
          <div className="mission-card glass-card rounded-3xl p-8 lg:p-10 floating-animation">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mb-6">
                <HiFlag className="text-white text-3xl" />
              </div>
              <h3 className="text-3xl font-bold gradient-text mb-6">Our Mission</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                To empower women, children, and disadvantaged groups in society across social, economic, cultural, and political aspects for the improvement of human rights, social justice, and environmental conservation.
              </p>
            </div>
          </div>
          
          <div className="mission-card glass-card rounded-3xl p-8 lg:p-10 floating-animation">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mb-6">
                <FaAward className="text-white text-3xl" />
              </div>
              <h3 className="text-3xl font-bold gradient-text mb-6">Our Goal</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                To ensure women's human rights and improved livelihoods through natural resource management, institutional building, and human resource development to enable an equitable society.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="glass-card rounded-3xl p-8 lg:p-12 mb-20 floating-animation">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide our mission and define our character
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="value-card bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mb-6">
                <FaHandHoldingHeart className="text-white text-2xl" />
              </div>
              <h4 className="text-2xl font-bold text-purple-600 mb-4">Empowerment</h4>
              <p className="text-gray-700">Equipping women with skills, resources, and confidence to achieve independence and leadership.</p>
            </div>
            
            <div className="value-card bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl mb-6">
                <HiCheckCircle className="text-white text-2xl" />
              </div>
              <h4 className="text-2xl font-bold text-blue-600 mb-4">Integrity</h4>
              <p className="text-gray-700">We uphold transparency, honesty, and fairness in all our initiatives and relationships.</p>
            </div>
            
            <div className="value-card bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl mb-6">
                <FaGlobe className="text-white text-2xl" />
              </div>
              <h4 className="text-2xl font-bold text-green-600 mb-4">Inclusion</h4>
              <p className="text-gray-700">We foster a welcoming and inclusive environment for everyone, regardless of background.</p>
            </div>
            
            <div className="value-card bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl mb-6">
                <FaLeaf className="text-white text-2xl" />
              </div>
              <h4 className="text-2xl font-bold text-orange-600 mb-4">Sustainability</h4>
              <p className="text-gray-700">Our programs are designed to create long-lasting impact and sustainable growth for future generations.</p>
            </div>
          </div>
        </div>

        {/* History Section */}
        <div className="glass-card rounded-3xl p-8 lg:p-12 mb-20 floating-animation">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">
              A legacy of empowerment and transformation spanning decades
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="timeline-item bg-white/60 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <div className="flex items-center mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl mr-4">
                      <HiCalendar className="text-white text-xl" />
                    </div>
                    <h4 className="text-2xl font-bold text-blue-600">Foundation</h4>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    TWUC was founded with a vision to create sustainable change in women's lives through 
                    education, skill development, and community building. Our journey began with small 
                    initiatives that would grow into impactful programs.
                  </p>
                </div>
                
                <div className="timeline-item bg-white/60 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <div className="flex items-center mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl mr-4">
                      <HiTrendingUp className="text-white text-xl" />
                    </div>
                    <h4 className="text-2xl font-bold text-green-600">Growth</h4>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Through dedicated efforts and community support, we expanded our reach across multiple 
                    regions, touching thousands of lives and creating a network of empowered women leaders.
                  </p>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="timeline-item bg-white/60 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <div className="flex items-center mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl mr-4">
                      <FaUsers className="text-white text-xl" />
                    </div>
                    <h4 className="text-2xl font-bold text-purple-600">Impact</h4>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Our programs have transformed communities, with thousands of women gaining financial 
                    independence, leadership skills, and the confidence to drive change in their own communities.
                  </p>
                </div>
                
                <div className="timeline-item bg-white/60 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <div className="flex items-center mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl mr-4"></div>
                    <h4 className="text-2xl font-bold text-orange-600">Future</h4>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    As we look ahead, we continue to innovate and expand our programs, embracing technology 
                    and modern approaches to create even greater impact in the years to come.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Achievements Section */}
        <div className="glass-card rounded-3xl p-8 lg:p-12 mb-20 floating-animation">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">Key Achievements</h2>
            <p className="text-xl text-gray-600">
              Milestones that mark our journey of empowerment and transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="achievement-card bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl mb-6">
                <FaAward className="text-white text-2xl" />
              </div>
              <h4 className="text-2xl font-bold text-orange-600 mb-4">Recognition Awards</h4>
              <p className="text-gray-700 leading-relaxed">
                Received multiple national and international awards for our outstanding contribution 
                to women's empowerment and community development.
              </p>
            </div>
            
            <div className="achievement-card bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-2xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl mb-6">
                <HiTrendingUp className="text-white text-2xl" />
              </div>
              <h4 className="text-2xl font-bold text-green-600 mb-4">Program Success</h4>
              <p className="text-gray-700 leading-relaxed">
                Successfully implemented over 100 projects with a 95% success rate in achieving 
                sustainable outcomes for program participants.
              </p>
            </div>
            
            <div className="achievement-card bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mb-6">
                <FaGlobe className="text-white text-2xl" />
              </div>
              <h4 className="text-2xl font-bold text-purple-600 mb-4">Global Partnerships</h4>
              <p className="text-gray-700 leading-relaxed">
                Established strategic partnerships with international organizations, expanding 
                our reach and impact across multiple countries and regions.
              </p>
            </div>
            
            <div className="achievement-card bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl mb-6">
                <FaUsers className="text-white text-2xl" />
              </div>
              <h4 className="text-2xl font-bold text-blue-600 mb-4">Community Impact</h4>
              <p className="text-gray-700 leading-relaxed">
                Empowered over 10,000 women through our various programs, creating a ripple 
                effect of positive change in communities worldwide.
              </p>
            </div>
            
            <div className="achievement-card bg-gradient-to-br from-red-50 to-pink-50 p-8 rounded-2xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl mb-6">
                <HiLightBulb className="text-white text-2xl" />
              </div>
              <h4 className="text-2xl font-bold text-red-600 mb-4">Innovation</h4>
              <p className="text-gray-700 leading-relaxed">
                Pioneered innovative approaches to women's empowerment, setting new standards 
                for community-based development programs.
              </p>
            </div>
            
            <div className="achievement-card bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-2xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl mb-6">
                <FaLeaf className="text-white text-2xl" />
              </div>
              <h4 className="text-2xl font-bold text-cyan-600 mb-4">Sustainability</h4>
              <p className="text-gray-700 leading-relaxed">
                Developed sustainable models that continue to generate positive outcomes long 
                after initial program implementation, ensuring lasting impact.
              </p>
            </div>
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="glass-card rounded-3xl p-8 lg:p-12 text-center floating-animation">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">Join Our Mission</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Together, we can create a world where every woman has the opportunity to thrive, 
              lead, and make a meaningful impact in her community. Be part of this transformative journey.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl mb-4">
                  <FaHandHoldingHeart className="text-white text-xl" />
                </div>
                <h4 className="text-lg font-bold text-purple-600 mb-2">Volunteer</h4>
                <p className="text-gray-600 text-sm">Share your skills and time to make a direct impact</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl mb-4">
                  <FaGlobe className="text-white text-xl" />
                </div>
                <h4 className="text-lg font-bold text-blue-600 mb-2">Partner</h4>
                <p className="text-gray-600 text-sm">Collaborate with us to expand our reach and impact</p>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl mb-4"></div>
                <h4 className="text-lg font-bold text-green-600 mb-2">Support</h4>
                <p className="text-gray-600 text-sm">Contribute to our programs and help us grow</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/donate-us"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-xl"
              >
                Donate Now
              </a>
              <a
                href="/opportunities"
                className="bg-white/80 backdrop-blur-lg border border-purple-200 text-purple-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-purple-50 transform hover:scale-105 transition-all duration-300"
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

export default AboutPage;
