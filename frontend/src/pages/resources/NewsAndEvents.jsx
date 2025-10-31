import React from 'react';
import { FaCalendarAlt, FaBullhorn, FaNewspaper, FaRegClock, FaUsers, FaHandsHelping } from 'react-icons/fa';
import { HiCalendar, HiClock } from 'react-icons/hi';

const NewsAndEvents = () => {
  const featuredNews = [
    {
      title: "Community Empowerment Drive",
      description: "We launched a month-long community drive focused on skill-building workshops and leadership training in Bardiya.",
      icon: <FaNewspaper className="text-3xl" />,
      color: "from-blue-500 to-cyan-500",
      date: "March 2024",
      category: "Program Launch"
    },
    {
      title: "Annual Women's Conference 2024",
      description: "Our annual conference brought together over 500 women leaders to discuss sustainable development and advocacy.",
      icon: <FaCalendarAlt className="text-3xl" />,
      color: "from-red-500 to-pink-500",
      date: "February 2024",
      category: "Event"
    },
    {
      title: "Health Awareness Week",
      description: "A series of health camps and awareness sessions were conducted in 10 rural communities, focusing on maternal health.",
      icon: <FaBullhorn className="text-3xl" />,
      color: "from-emerald-500 to-teal-500",
      date: "January 2024",
      category: "Health Campaign"
    },
    {
      title: "Upcoming Workshop",
      description: "Join our upcoming workshop on financial literacy and entrepreneurship for women scheduled for next month.",
      icon: <FaRegClock className="text-3xl" />,
      color: "from-purple-500 to-indigo-500",
      date: "Coming Soon",
      category: "Workshop"
    }
  ];

  const timeline = [
    {
      year: "2024",
      title: "Annual Women's Conference",
      description: "A platform for over 500 women leaders to share experiences and discuss future projects.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      year: "2023",
      title: "Leadership Training Program",
      description: "Launched a leadership program to train 200 women as community advocates and leaders.",
      color: "from-emerald-500 to-teal-500"
    },
    {
      year: "2022",
      title: "Health Awareness Week",
      description: "Conducted health awareness events in 10 communities, benefiting over 1,000 families.",
      color: "from-yellow-500 to-orange-500"
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
        
        .news-card {
          transition: all 0.3s ease;
        }
        
        .news-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
        }
        
        .timeline-card {
          transition: all 0.3s ease;
        }
        
        .timeline-card:hover {
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
          <div className="inline-flex items-center space-x-2 mb-8"><span className="text-white/80 font-medium tracking-wider uppercase text-sm">Latest Updates</span></div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8">
            <span className="bg-gradient-to-r from-white via-yellow-100 to-green-200 bg-clip-text text-transparent">
              News & Events
            </span>
          </h1>
          <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Stay informed about the latest news, events, and initiatives from Tharu Women Upliftment Center. 
            Discover how we're making a difference and get involved in our upcoming programs.
          </p>
        </div>

        {/* Featured News Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Featured News</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Highlights of our recent activities and upcoming events that shape our community impact
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredNews.map((news, index) => (
              <div key={index} className="news-card glass-card rounded-3xl p-8 floating-animation" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${news.color} rounded-full text-white mb-6`}>
                  {news.icon}
                </div>
                
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-medium mb-3">
                    {news.category}
                  </span>
                  <p className="text-sm text-gray-500 mb-2 flex items-center">
                    <HiCalendar className="mr-1" />
                    {news.date}
                  </p>
                  <h3 className="text-xl font-bold gradient-text mb-3">{news.title}</h3>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-6">{news.description}</p>
                
                <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors flex items-center space-x-2">
                  <span>Read More</span>
                  <FaNewspaper className="text-sm" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div className="glass-card rounded-3xl p-8 lg:p-12 mb-16 floating-animation">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl mb-6">
              <HiClock className="text-white text-2xl" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">Recent Highlights</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              A chronological view of our major achievements and milestones that define our journey
            </p>
          </div>
          
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="timeline-card flex items-start space-x-8 p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl">
                <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                  {item.year}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold gradient-text mb-3">{item.title}</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="glass-card rounded-3xl p-8 lg:p-12 mb-16 floating-animation">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mb-6">
              <FaCalendarAlt className="text-white text-2xl" />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">Upcoming Events</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Mark your calendar for these exciting upcoming events and opportunities to get involved
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl border border-purple-100">
              <div className="flex items-center space-x-3 mb-4">
                <FaUsers className="text-purple-600 text-2xl" />
                <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                  Workshop
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-purple-800 mb-3">Financial Literacy Workshop</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Join us for an intensive workshop on financial literacy and entrepreneurship for women. 
                Learn essential skills for managing finances and starting your own business.
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Coming in April 2024</span>
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                  Register Now
                </button>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-2xl border border-green-100">
              <div className="flex items-center space-x-3 mb-4">
                <FaHandsHelping className="text-green-600 text-2xl" />
                <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                  Community Event
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-green-800 mb-3">Community Health Fair</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                A comprehensive health fair featuring free health screenings, vaccination drives, 
                and health education sessions for families in rural communities.
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Coming in May 2024</span>
                <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-2 rounded-xl font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="glass-card rounded-3xl p-8 lg:p-12 floating-animation">
            <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">Join Us at Our Next Event</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Stay connected with us and be a part of our journey. Don't miss our upcoming events 
              and initiatives aimed at empowering communities and creating lasting change.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-green-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-xl">
                <span className="flex items-center justify-center space-x-2">
                  <FaCalendarAlt />
                  <span>View Calendar</span>
                </span>
              </button>
              <button className="bg-white/80 backdrop-blur-lg border border-green-200 text-green-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-green-50 transform hover:scale-105 transition-all duration-300">
                Subscribe for Updates
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsAndEvents;
