
import React, { useEffect } from "react";
import Hero from "../components/Hero";
import { 
  FaHeart, 
  FaHandsHelping, 
  FaUsers, 
  FaSeedling, 
  FaGraduationCap, 
  FaGlobe,
  FaArrowRight,
  FaQuoteLeft,
  FaStar,
  FaAward,
  FaHandHoldingHeart,
  FaUserGraduate
} from "react-icons/fa";
import { 
  HiLightBulb, 
  HiAcademicCap,
  HiHeart,
  HiTrendingUp,
  HiUserGroup
} from "react-icons/hi";

import { colors, textGradients, backgroundGradients, buttonStyles, iconStyles } from "../utils/colors";

const HomePage = () => {
  useEffect(() => {
    // Scroll to the top of the page whenever the route changes
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="mt-16 mx-auto bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <Hero />

      {/* About Section - Modern Design */}
      <div className="px-4 sm:px-6 lg:px-8">
        <section className="relative bg-gradient-to-br from-blue-50 to-purple-50 py-20 rounded-3xl shadow-xl mt-16 overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 text-sm font-medium mb-4">
                <HiUserGroup className="w-4 h-4 mr-2" />
                Who We Are
              </div>
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8">
                Empowering Women,
                <br />
                <span className="text-4xl md:text-5xl">Transforming Communities</span>
              </h2>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-700 leading-relaxed text-center mb-8">
                The Tharu Women Upliftment Center is dedicated to uplifting women
                from marginalized communities by providing education, skill
                development, and leadership training. We focus on creating
                opportunities that lead to financial independence and a better
                quality of life.
              </p>
              
              {/* Stats Section */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 hover:transform hover:scale-105 transition-all duration-300">
                  <div className="text-3xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-gray-600 mt-1">Women Empowered</div>
                </div>
                <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 hover:transform hover:scale-105 transition-all duration-300">
                  <div className="text-3xl font-bold text-purple-600">50+</div>
                  <div className="text-sm text-gray-600 mt-1">Programs</div>
                </div>
                <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 hover:transform hover:scale-105 transition-all duration-300">
                  <div className="text-3xl font-bold text-green-600">25+</div>
                  <div className="text-sm text-gray-600 mt-1">Communities</div>
                </div>
                <div className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 hover:transform hover:scale-105 transition-all duration-300">
                  <div className="text-3xl font-bold text-orange-600">10+</div>
                  <div className="text-sm text-gray-600 mt-1">Years Impact</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Message from Chairman & Executive Director - Modern Cards */}
        <section className="py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-100 rounded-full text-indigo-700 text-sm font-medium mb-4">
              <HiUserGroup className="w-4 h-4 mr-2" />
              Leadership Messages
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Words from Our Leaders
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Inspiring messages from the visionaries leading our mission
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Chairman Message */}
            <div className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <div className="w-32 h-32 rounded-full border-4 border-blue-200 overflow-hidden">
                      <img
                        src="/images/leaders/chairman.jpg"
                        alt="Chairman"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <FaAward className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Chairman's Message
                    </h3>
                    <div className="w-12 h-1 bg-blue-500 mx-auto rounded-full"></div>
                  </div>
                  
                  <div className="relative">
                    <FaQuoteLeft className="absolute -top-4 -left-4 text-2xl text-blue-200" />
                    <p className="text-gray-700 leading-relaxed italic text-lg">
                      Our vision has always been to empower women and foster a
                      community of change-makers. Through education and support, we
                      continue to inspire the next generation of leaders.
                    </p>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <p className="font-semibold text-blue-600">
                      Chairman, Tharu Women Upliftment Center
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Executive Director Message */}
            <div className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <div className="w-32 h-32 rounded-full border-4 border-purple-200 overflow-hidden">
                      <img
                        src="/images/leaders/executive.jpg"
                        alt="Executive Director"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                      <FaUserGraduate className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Executive Director's Message
                    </h3>
                    <div className="w-12 h-1 bg-purple-500 mx-auto rounded-full"></div>
                  </div>
                  
                  <div className="relative">
                    <FaQuoteLeft className="absolute -top-4 -left-4 text-2xl text-purple-200" />
                    <p className="text-gray-700 leading-relaxed italic text-lg">
                      Our programs are built to create long-lasting impact. We
                      believe in empowering women with the tools and confidence to
                      lead independent and meaningful lives.
                    </p>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <p className="font-semibold text-purple-600">
                      Executive Director, Tharu Women Upliftment Center
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Programs Section - Modern Grid */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-green-700 text-sm font-medium mb-4">
              <HiLightBulb className="w-4 h-4 mr-2" />
              Our Impact Areas
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Overarching Themes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive programs designed to create lasting change in women's lives
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Program Cards with modern design */}
            <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors duration-500">
                  <HiAcademicCap className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white mb-4 transition-colors duration-500">
                  Skill Development Workshops
                </h3>
                <p className="text-gray-600 group-hover:text-blue-100 leading-relaxed transition-colors duration-500">
                  We offer hands-on workshops to help women develop valuable
                  skills, such as sewing, craft-making, and small business
                  management.
                </p>
                <div className="mt-6">
                  <div className="flex items-center text-blue-600 group-hover:text-white font-medium transition-colors duration-500">
                    Learn More <FaArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors duration-500">
                  <HiTrendingUp className="w-8 h-8 text-purple-600 group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white mb-4 transition-colors duration-500">
                  Leadership and Advocacy
                </h3>
                <p className="text-gray-600 group-hover:text-purple-100 leading-relaxed transition-colors duration-500">
                  Our leadership programs equip women with the knowledge and
                  confidence to lead and advocate for their communities.
                </p>
                <div className="mt-6">
                  <div className="flex items-center text-purple-600 group-hover:text-white font-medium transition-colors duration-500">
                    Learn More <FaArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-8">
                <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors duration-500">
                  <HiHeart className="w-8 h-8 text-pink-600 group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white mb-4 transition-colors duration-500">
                  Health and Awareness
                </h3>
                <p className="text-gray-600 group-hover:text-pink-100 leading-relaxed transition-colors duration-500">
                  We conduct health awareness drives and provide essential
                  healthcare education to ensure the well-being of our community.
                </p>
                <div className="mt-6">
                  <div className="flex items-center text-pink-600 group-hover:text-white font-medium transition-colors duration-500">
                    Learn More <FaArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-8">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors duration-500">
                  <FaGraduationCap className="w-8 h-8 text-green-600 group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white mb-4 transition-colors duration-500">
                  Educational Scholarships
                </h3>
                <p className="text-gray-600 group-hover:text-green-100 leading-relaxed transition-colors duration-500">
                  We provide educational scholarships to girls and women to help
                  them pursue their academic dreams and break the cycle of poverty.
                </p>
                <div className="mt-6">
                  <div className="flex items-center text-green-600 group-hover:text-white font-medium transition-colors duration-500">
                    Learn More <FaArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-8">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors duration-500">
                  <FaUsers className="w-8 h-8 text-orange-600 group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white mb-4 transition-colors duration-500">
                  Community Outreach
                </h3>
                <p className="text-gray-600 group-hover:text-orange-100 leading-relaxed transition-colors duration-500">
                  Through community engagement, we promote awareness of women's
                  rights, access to resources, and gender equality.
                </p>
                <div className="mt-6">
                  <div className="flex items-center text-orange-600 group-hover:text-white font-medium transition-colors duration-500">
                    Learn More <FaArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-8">
                <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors duration-500">
                  <FaHandHoldingHeart className="w-8 h-8 text-indigo-600 group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white mb-4 transition-colors duration-500">
                  Small Business Support
                </h3>
                <p className="text-gray-600 group-hover:text-indigo-100 leading-relaxed transition-colors duration-500">
                  We support women entrepreneurs by providing business training,
                  mentorship, and financial assistance to start their ventures.
                </p>
                <div className="mt-6">
                  <div className="flex items-center text-indigo-600 group-hover:text-white font-medium transition-colors duration-500">
                    Learn More <FaArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call-to-Action Section - Modern Design */}
        <section className="relative py-20 overflow-hidden">
          {/* Background with gradient and patterns */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700"></div>
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
                <HiHeart className="w-4 h-4 mr-2" />
                Join Our Mission
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Ready to Make an
                <br />
                <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Impact?
                </span>
              </h2>
              
              <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
                Whether you want to volunteer, donate, or join one of our programs,
                your support can make a lasting impact. Together, we can build
                stronger communities.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a
                  href="/donate-us"
                  className="group relative px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-2xl font-semibold text-lg hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 hover:-translate-y-1"
                >
                  <span className="flex items-center">
                    <FaHeart className="mr-2" />
                    Donate Now
                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </a>
                
                <a
                  href="/opportunities"
                  className="group relative px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-2xl font-semibold text-lg border-2 border-white/30 hover:bg-white/20 hover:shadow-2xl hover:shadow-white/10 transition-all duration-300 hover:-translate-y-1"
                >
                  <span className="flex items-center">
                    <FaUsers className="mr-2" />
                    Join Our Team
                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </a>
              </div>
              
              {/* Trust indicators */}
              <div className="mt-12 pt-8 border-t border-white/20">
                <p className="text-blue-200 text-sm mb-4">Trusted by communities nationwide</p>
                <div className="flex justify-center items-center space-x-8 opacity-60">
                  <div className="flex items-center space-x-2 text-white">
                    <FaStar className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm">4.9/5 Impact Rating</span>
                  </div>
                  <div className="flex items-center space-x-2 text-white">
                    <FaUsers className="w-4 h-4" />
                    <span className="text-sm">500+ Lives Changed</span>
                  </div>
                  <div className="flex items-center space-x-2 text-white">
                    <FaAward className="w-4 h-4" />
                    <span className="text-sm">NGO Certified</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16">
          <h2 className="text-4xl font-semibold text-center mb-8 text-[#3A7EA1]">
            What People Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg border hover:border-[#E76F51]">
              <p className="text-gray-700 italic text-lg">
                "Joining the skill development program changed my life. I now
                run my own tailoring business and support my family."
              </p>
              <p className="text-right text-sm font-semibold mt-4 text-[#264653]">
                – Participant, Tailoring Workshop
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border hover:border-[#3A7EA1]">
              <p className="text-gray-700 italic text-lg">
                "The health awareness sessions helped my family make better
                decisions about our well-being. I’m truly grateful!"
              </p>
              <p className="text-right text-sm font-semibold mt-4 text-[#264653]">
                – Community Member
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border hover:border-[#F4A261]">
              <p className="text-gray-700 italic text-lg">
                "Being part of the leadership program gave me the confidence to
                speak up and become a role model in my village."
              </p>
              <p className="text-right text-sm font-semibold mt-4 text-[#264653]">
                – Leadership Program Graduate
              </p>
            </div>
          </div>
        </section>
 {/* Modern CSS Animations */}
 <style>
 {`
   @keyframes scroll {
     0% {
       transform: translateX(100%);
     }
     100% {
       transform: translateX(-100%);
     }
   }

   @keyframes float {
     0%, 100% {
       transform: translateY(0px);
     }
     50% {
       transform: translateY(-10px);
     }
   }

   @keyframes pulse-glow {
     0%, 100% {
       box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
     }
     50% {
       box-shadow: 0 0 30px rgba(59, 130, 246, 0.8);
     }
   }

   .animate-scroll-icons {
     display: flex;
     gap: 60px;
     animation: scroll 30s linear infinite;
   }

   .animate-float {
     animation: float 3s ease-in-out infinite;
   }

   .animate-pulse-glow {
     animation: pulse-glow 2s ease-in-out infinite;
   }

   .animation-delay-2000 {
     animation-delay: 2s;
   }

   .animation-delay-4000 {
     animation-delay: 4s;
   }
 `}
</style>

{/* Partners Section - Modern Design */}
<div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 py-16 mb-8 shadow-2xl overflow-hidden">
  {/* Background patterns */}
  <div className="absolute inset-0">
    <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float"></div>
    <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float animation-delay-2000"></div>
  </div>
  
  <div className="relative z-10">
    <div className="text-center mb-12">
      <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-4">
        <FaHandsHelping className="w-4 h-4 mr-2" />
        Our Network
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Trusted Partners & Supporters
      </h2>
      <p className="text-lg text-indigo-100 max-w-2xl mx-auto">
        Working together with amazing organizations to create lasting impact
      </p>
    </div>
    
    <div className="overflow-hidden">
      <div className="flex justify-start gap-16 animate-scroll-icons">
        <div className="flex flex-col items-center group">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-2 group-hover:bg-white/30 transition-all duration-300">
            <FaHeart className="text-red-400 text-2xl group-hover:scale-110 transition-transform duration-300" />
          </div>
          <span className="text-white text-sm font-medium">Health Partners</span>
        </div>
        
        <div className="flex flex-col items-center group">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-2 group-hover:bg-white/30 transition-all duration-300">
            <FaHandsHelping className="text-yellow-400 text-2xl group-hover:scale-110 transition-transform duration-300" />
          </div>
          <span className="text-white text-sm font-medium">Community Aids</span>
        </div>
        
        <div className="flex flex-col items-center group">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-2 group-hover:bg-white/30 transition-all duration-300">
            <FaUsers className="text-blue-400 text-2xl group-hover:scale-110 transition-transform duration-300" />
          </div>
          <span className="text-white text-sm font-medium">NGO Network</span>
        </div>
        
        <div className="flex flex-col items-center group">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-2 group-hover:bg-white/30 transition-all duration-300">
            <FaSeedling className="text-green-400 text-2xl group-hover:scale-110 transition-transform duration-300" />
          </div>
          <span className="text-white text-sm font-medium">Eco Partners</span>
        </div>
        
        <div className="flex flex-col items-center group">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-2 group-hover:bg-white/30 transition-all duration-300">
            <FaGraduationCap className="text-purple-400 text-2xl group-hover:scale-110 transition-transform duration-300" />
          </div>
          <span className="text-white text-sm font-medium">Education</span>
        </div>
        
        <div className="flex flex-col items-center group">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-2 group-hover:bg-white/30 transition-all duration-300">
            <FaGlobe className="text-orange-400 text-2xl group-hover:scale-110 transition-transform duration-300" />
          </div>
          <span className="text-white text-sm font-medium">Global Network</span>
        </div>
        
        {/* Repeat for infinite scroll effect */}
        <div className="flex flex-col items-center group">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-2 group-hover:bg-white/30 transition-all duration-300">
            <FaHeart className="text-red-400 text-2xl group-hover:scale-110 transition-transform duration-300" />
          </div>
          <span className="text-white text-sm font-medium">Health Partners</span>
        </div>
        
        <div className="flex flex-col items-center group">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-2 group-hover:bg-white/30 transition-all duration-300">
            <FaHandsHelping className="text-yellow-400 text-2xl group-hover:scale-110 transition-transform duration-300" />
          </div>
          <span className="text-white text-sm font-medium">Community Aids</span>
        </div>
        
        <div className="flex flex-col items-center group">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-2 group-hover:bg-white/30 transition-all duration-300">
            <FaUsers className="text-blue-400 text-2xl group-hover:scale-110 transition-transform duration-300" />
          </div>
          <span className="text-white text-sm font-medium">NGO Network</span>
        </div>
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  );
};

export default HomePage;


// import React, { useEffect } from "react";
// import Hero from "../components/Hero";
// import { FaHeart, FaHandsHelping, FaUsers, FaSeedling, FaGraduationCap, FaGlobe } from "react-icons/fa"; // Importing icons
// import chairman from "../assets/chairman.jpg";
// import executive from "../assets/executive.jpg";

// const HomePage = () => {
//   useEffect(() => {
//     // Scroll to the top of the page whenever the route changes
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   }, []);

//   return (
//     <div className="mt-20 mx-auto">
//       {/* Hero Section */}
//       <Hero />



//       {/* Tailwind Keyframe Animation (Add this to your global CSS file or Tailwind config) */}
//       <style>
//         {`
//           @keyframes scroll {
//             0% {
//               transform: translateX(100%);
//             }
//             100% {
//               transform: translateX(-100%);
//             }
//           }

//           .animate-scroll-icons {
//             display: flex;
//             gap: 20px;
//             animation: scroll 20s linear infinite;
//           }
//         `}
//       </style>
      

//       {/* About Section */}
//       <div className="px-6">
//         <section className="bg-gradient-to-r from-[#F0F8FF] to-[#EAF4FF] py-12 rounded-lg shadow-md mt-12">
//           <h2 className="text-4xl font-semibold text-center mb-6 text-[#1A3C5A]">
//             Who We Are
//           </h2>
//           <p className="text-lg text-gray-700 text-center leading-relaxed max-w-3xl mx-auto">
//             The Tharu Women Upliftment Center is dedicated to uplifting women
//             from marginalized communities by providing education, skill
//             development, and leadership training. We focus on creating
//             opportunities that lead to financial independence and a better
//             quality of life.
//           </p>
//         </section>

//         {/* Message from Chairman & Executive Director */}
//         <section className="py-16">
//           <h2 className="text-4xl font-semibold text-center mb-8 text-[#3A7EA1]">
//             A Message from Our Leaders
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {/* Chairman Message */}
//             <div className="bg-white p-6 rounded-lg shadow-lg">
//               <img
//                 src={chairman}
//                 alt="Chairman"
//                 className="h-64 w-64 rounded-full mx-auto mb-4"
//               />
//               <h3 className="text-2xl font-semibold text-center text-[#1A3C5A]">
//                 Message from the Chairman
//               </h3>
//               <p className="text-gray-700 mt-4 text-center leading-relaxed">
//                 "Our vision has always been to empower women and foster a
//                 community of change-makers. Through education and support, we
//                 continue to inspire the next generation of leaders."
//               </p>
//               <p className="text-right font-semibold text-[#3A7EA1] mt-4">
//                 – Chairman, Tharu Women Upliftment Center
//               </p>
//             </div>

//             {/* Executive Director Message */}
//             <div className="bg-white p-6 rounded-lg shadow-lg">
//               <img
//                 src={executive}
//                 alt="Executive Director"
//                 className="h-64 w-64 rounded-full mx-auto mb-4"
//               />
//               <h3 className="text-2xl font-semibold text-center text-[#1A3C5A]">
//                 Message from the Executive Director
//               </h3>
//               <p className="text-gray-700 mt-4 text-center leading-relaxed">
//                 "Our programs are built to create long-lasting impact. We
//                 believe in empowering women with the tools and confidence to
//                 lead independent and meaningful lives."
//               </p>
//               <p className="text-right font-semibold text-[#3A7EA1] mt-4">
//                 – Executive Director, Tharu Women Upliftment Center
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Other Sections... */}
//               {/* Scrolling Icons Section */}
//       <div className="bg-gradient-to-r from-[#3A7EA1] to-[#5AA5E5] py-6 mb-4 shadow-lg">
//         <h2 className="text-center text-white text-2xl font-semibold mb-4">
//           Some of our partners and supporters
//         </h2>
//         <div className="overflow-hidden">
//           <div className="flex justify-start gap-12 animate-scroll-icons">
//             <FaHeart className="text-red-500 text-4xl" />
//             <FaHandsHelping className="text-yellow-500 text-4xl" />
//             <FaUsers className="text-blue-600 text-4xl" />
//             <FaSeedling className="text-green-500 text-4xl" />
//             <FaGraduationCap className="text-blue-600 text-4xl" />
//             <FaGlobe className="text-orange-500 text-4xl" />
//             <FaHeart className="text-red-500 text-4xl" />
//             <FaHandsHelping className="text-yellow-500 text-4xl" />
//             <FaUsers className="text-blue-600 text-4xl" />
//             <FaSeedling className="text-green-500 text-4xl" />
//             <FaGraduationCap className="text-blue-600 text-4xl" />
//             <FaGlobe className="text-orange-500 text-4xl" />
//           </div>
//         </div>
//       </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;
