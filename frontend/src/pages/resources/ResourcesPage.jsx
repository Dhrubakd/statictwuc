import React from 'react';
import { FaNewspaper, FaCamera, FaBookOpen, FaBullhorn, FaFileAlt, FaCalendarAlt } from 'react-icons/fa';
import { HiNewspaper, HiDocumentText } from 'react-icons/hi';
import { colors, textGradients, backgroundGradients, buttonStyles, iconStyles } from "../../utils/colors";

const ResourcesPage = () => {
  const newsEvents = [
    {
      title: "Health Awareness Program",
      description: "Our recent health awareness event reached over 500 families with essential healthcare education.",
      icon: <FaBullhorn className="text-3xl" />,
      color: colors.success.main,
      date: "March 2024"
    },
    {
      title: "Leadership Workshop",
      description: "A leadership workshop for 100 women in Bardiya focused on advocacy and community leadership.",
      icon: <FaCalendarAlt className="text-3xl" />,
      color: colors.primary.main,
      date: "February 2024"
    },
    {
      title: "Financial Literacy Campaign",
      description: "Empowering women through financial literacy program, with 300 women receiving budgeting and savings training.",
      icon: <FaFileAlt className="text-3xl" />,
      color: colors.secondary.main,
      date: "January 2024"
    }
  ];

  const mediaHighlights = [
    {
      title: "Featured on Local News",
      description: "Our programs were recently featured on the Bardiya Community News Channel, highlighting our efforts in rural education.",
      source: "Bardiya Community News"
    },
    {
      title: "Radio Interview",
      description: "Our director spoke on Radio Bardiya about the importance of skill development for women in the region.",
      source: "Radio Bardiya"
    },
    {
      title: "Feature Article in NGO Journal",
      description: "A feature article in 'NGO Progress' magazine praised our organization for innovative community-based programs.",
      source: "NGO Progress Magazine"
    }
  ];

  const publications = [
    {
      title: "Annual Report 2024",
      description: "Download our annual report to learn about our achievements, partnerships, and future goals.",
      link: "/resources/annual-report-2024.pdf",
      type: "Report"
    },
    {
      title: "Community Impact Stories",
      description: "Read inspiring stories from women who have transformed their lives through our programs.",
      link: "/resources/community-stories.pdf",
      type: "Stories"
    },
    {
      title: "Program Highlights",
      description: "Learn about the key highlights and results from our educational and community outreach programs.",
      link: "/resources/program-highlights.pdf",
      type: "Highlights"
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
        
        .resource-card {
          transition: all 0.3s ease;
        }
        
        .resource-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
        }
        
        .news-card {
          transition: all 0.3s ease;
        }
        
        .news-card:hover {
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
        }
      `}</style>

      {/* Background Blobs */}
      <div className="background-blob blob-1"></div>
      <div className="background-blob blob-2"></div>
      <div className="background-blob blob-3"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-8"><span className="text-white/80 font-medium tracking-wider uppercase text-sm">Stay Informed</span></div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8">
            <span className="bg-gradient-to-r from-white via-yellow-100 to-green-200 bg-clip-text text-transparent">
              Our Resources
            </span>
          </h1>
          <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Explore our latest updates, news, media highlights, and publications. Stay informed about 
            the progress and success stories of our community-driven initiatives.
          </p>
        </div>

        {/* News and Events Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">News & Events</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Latest happenings and upcoming initiatives that drive our mission forward
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {newsEvents.map((item, index) => (
              <div key={index} className="news-card glass-card rounded-3xl p-8 floating-animation" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${item.color} rounded-full text-white mb-6`}>
                  {item.icon}
                </div>
                
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-medium mb-3">
                    {item.date}
                  </span>
                  <h3 className="text-2xl font-bold gradient-text mb-3">{item.title}</h3>
                </div>
                
                <p className="text-gray-700 text-lg leading-relaxed">{item.description}</p>
                
                <button className="mt-6 text-blue-600 font-semibold hover:text-blue-800 transition-colors flex items-center space-x-2">
                  <span>Learn More</span>
                  <HiNewspaper className="text-lg" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Media Coverage Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Media Coverage</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Recognition and coverage of our impactful work in various media outlets
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mediaHighlights.map((media, index) => (
              <div key={index} className="resource-card glass-card rounded-3xl p-8 text-center floating-animation" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full text-white mb-6">
                  <FaCamera className="text-2xl" />
                </div>
                
                <h3 className="text-xl font-bold gradient-text mb-3">{media.title}</h3>
                <p className="text-sm text-gray-500 mb-4 font-medium">{media.source}</p>
                <p className="text-gray-700 leading-relaxed">{media.description}</p>
                
                <button className="mt-6 text-orange-600 font-semibold hover:text-orange-800 transition-colors">
                  Read Coverage →
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Publications Section */}
        <div className="glass-card rounded-3xl p-8 lg:p-12 mb-16 floating-animation">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mb-6">
              <FaBookOpen className="text-white text-2xl" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">Our Publications</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Access our comprehensive reports, impact stories, and program documentation 
              that showcase our journey and achievements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {publications.map((pub, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl border border-purple-100 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <HiDocumentText className="text-purple-600 text-2xl" />
                  <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                    {pub.type}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-purple-800 mb-3">{pub.title}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">{pub.description}</p>
                
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
                >
                  <FaFileAlt />
                  <span>Download</span>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="text-center">
          <div className="glass-card rounded-3xl p-8 lg:p-12 floating-animation">
            <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">Stay Updated</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Subscribe to our newsletter to receive the latest news, updates, and upcoming events 
              directly in your inbox. Be the first to know about our impact and initiatives.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto mb-8">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
              />
              <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-green-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-xl">
                Subscribe
              </button>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white/80 backdrop-blur-lg border border-green-200 text-green-600 px-8 py-4 rounded-2xl font-semibold hover:bg-green-50 transform hover:scale-105 transition-all duration-300">
                View All Resources
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;
