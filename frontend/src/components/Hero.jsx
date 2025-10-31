import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { 
  FaPlay, 
  FaArrowRight, 
  FaHeart, 
  FaUsers, 
  FaGraduationCap,
  FaChevronDown 
} from 'react-icons/fa';
import { 
  HiLightBulb,
  HiTrendingUp 
} from 'react-icons/hi';
import { colors, textGradients, backgroundGradients, buttonStyles } from "../utils/colors";

// Import images explicitly

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTextVisible, setIsTextVisible] = useState(false);
  
  const images = ["/images/hero/img1.jpg", "/images/hero/img2.jpg", "/photos/img3.jpg", "/photos/img4.jpg"]; // Array of images

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTextVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    fade: true,
    pauseOnHover: false,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex);
      setIsTextVisible(false);
      setTimeout(() => setIsTextVisible(true), 300);
    },
    customPaging: function(i) {
      return (
        <div className="w-3 h-3 rounded-full bg-white/50 hover:bg-white transition-all duration-300 cursor-pointer"></div>
      );
    },
    dotsClass: "slick-dots slick-thumb custom-dots"
  };

  return (
    <div className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Custom CSS for animations */}
      <style>{`
        .custom-dots {
          bottom: 20px !important;
          z-index: 20;
        }
        @media (min-width: 640px) {
          .custom-dots {
            bottom: 30px !important;
          }
        }
        .custom-dots li {
          margin: 0 4px;
        }
        @media (min-width: 640px) {
          .custom-dots li {
            margin: 0 8px;
          }
        }
        .custom-dots li.slick-active div {
          background-color: white !important;
          transform: scale(1.2);
        }
        .hero-content {
          animation: heroFadeIn 1s ease-out forwards;
        }
        @keyframes heroFadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .floating-elements {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(1deg); }
          66% { transform: translateY(-5px) rotate(-1deg); }
        }
        .text-glow {
          text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
        }
        @media (max-width: 639px) {
          .text-glow {
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
          }
        }
      `}</style>

      {/* Image Slider */}
      <Slider {...settings} className="h-full">
        {images.map((image, index) => (
          <div key={index} className="relative w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-indigo-900/40 z-10"></div>
            <img
              src={image}
              alt={`Empowering women in our community - Slide ${index + 1}`}
              className="w-full h-screen object-cover transform hover:scale-105 transition-transform duration-[10s]"
            />
            {/* Animated overlay pattern */}
            <div className="absolute inset-0 opacity-20 z-10">
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white rounded-full blur-3xl floating-elements"></div>
              <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-blue-300 rounded-full blur-2xl floating-elements" style={{animationDelay: '2s'}}></div>
              <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-purple-300 rounded-full blur-xl floating-elements" style={{animationDelay: '4s'}}></div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Modern Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 sm:px-6 lg:px-8 z-20 pt-16 sm:pt-20 md:pt-0">
        <div className={`hero-content w-full max-w-6xl mx-auto ${isTextVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
          
          {/* Badge */}
          <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs sm:text-sm font-medium mb-4 sm:mb-6 border border-white/30">
            <HiTrendingUp className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
            Empowering Women Since 2010
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight px-2">
            <span className="block bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent text-glow">
              Transforming Lives
            </span>
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2 text-blue-100">
              Building Stronger Communities
            </span>
          </h1>

          {/* Nepali Title */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-6 md:mb-8 text-yellow-200 text-glow px-2">
            थारु महिला उत्थान केन्द्रमा स्वागत छ
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-4xl mx-auto leading-relaxed mb-6 sm:mb-8 md:mb-12 text-blue-50 px-2">
            Empowering women through education, leadership training, and sustainable development programs. 
            Together, we create opportunities for financial independence and community growth.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center mb-6 sm:mb-8 md:mb-12 px-4">
            <a
              href="/about"
              className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:-translate-y-1 min-w-[200px]"
            >
              <span className="flex items-center justify-center">
                <HiLightBulb className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base md:text-lg">Discover Our Mission</span>
                <FaArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </a>
            
            <a
              href="/donate-us"
              className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg border-2 border-white/30 hover:bg-white/20 hover:shadow-2xl hover:shadow-white/10 transition-all duration-300 hover:-translate-y-1 min-w-[200px]"
            >
              <span className="flex items-center justify-center">
                <FaHeart className="mr-2 w-4 h-4 sm:w-5 sm:h-5 text-red-300" />
                <span className="text-sm sm:text-base md:text-lg">Support Our Cause</span>
                <FaArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </a>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-3xl mx-auto px-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center justify-center mb-1 sm:mb-2">
                <FaUsers className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-blue-300" />
              </div>
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-0.5 sm:mb-1">500+</div>
              <div className="text-blue-200 text-xs sm:text-sm">Women Empowered</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center justify-center mb-1 sm:mb-2">
                <FaGraduationCap className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-purple-300" />
              </div>
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-0.5 sm:mb-1">50+</div>
              <div className="text-purple-200 text-xs sm:text-sm">Programs Delivered</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center justify-center mb-1 sm:mb-2">
                <HiTrendingUp className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-green-300" />
              </div>
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-0.5 sm:mb-1">25+</div>
              <div className="text-green-200 text-xs sm:text-sm">Communities Served</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        {/* <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center text-white/80">
            <span className="text-xs sm:text-sm mb-1 sm:mb-2 hidden sm:block">Scroll to explore</span>
            <FaChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
        </div> */}
      </div>

      {/* Enhanced Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50 z-10"></div>
    </div>
  );
};

export default Hero;
