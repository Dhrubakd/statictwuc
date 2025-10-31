import React from "react";
import { HiMail, HiPhone, HiLocationMarker, HiClock, HiPaperAirplane } from "react-icons/hi";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    alert(`Thank you, ${formData.name}. Your message has been sent!`);
    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen relative overflow-hidden mt-20 pt-24 pb-16" style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }}>
      <style>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        
        .glass-card-dark {
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.95) 0%, rgba(30, 58, 138, 0.9) 100%);
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
        
        .form-input {
          background: rgba(255, 255, 255, 0.9);
          border: 2px solid rgba(59, 130, 246, 0.2);
          transition: all 0.3s ease;
        }
        
        .form-input:focus {
          background: rgba(255, 255, 255, 1);
          border-color: #3b82f6;
          box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
          transform: translateY(-2px);
        }
        
        .submit-button {
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
          box-shadow: 0 10px 30px rgba(59, 130, 246, 0.4);
          transition: all 0.3s ease;
        }
        
        .submit-button:hover {
          background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
          box-shadow: 0 15px 40px rgba(59, 130, 246, 0.6);
          transform: translateY(-3px);
        }
        
        .contact-item {
          transition: all 0.3s ease;
        }
        
        .contact-item:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.2);
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
          background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
          animation-delay: 0s;
        }
        
        .blob-2 {
          top: 70%;
          right: 10%;
          width: 250px;
          height: 250px;
          background: linear-gradient(45deg, #a8edea, #fed6e3);
          animation-delay: 2s;
        }
        
        .blob-3 {
          bottom: 10%;
          left: 50%;
          width: 200px;
          height: 200px;
          background: linear-gradient(45deg, #ffecd2, #fcb69f);
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
        
        .shimmer {
          position: relative;
          overflow: hidden;
        }
        
        .shimmer::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s ease;
        }
        
        .shimmer:hover::before {
          left: 100%;
        }
      `}</style>
      
      {/* Background Blobs */}
      <div className="background-blob blob-1"></div>
      <div className="background-blob blob-2"></div>
      <div className="background-blob blob-3"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="text-white/80 font-medium tracking-wider uppercase text-sm">Get In Touch</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-white via-blue-100 to-yellow-200 bg-clip-text text-transparent">
              Contact Us
            </span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Have a question or need assistance? We'd love to hear from you. 
            <br className="hidden sm:block" />
            Get in touch and let's start a conversation!
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="glass-card rounded-3xl p-8 lg:p-10 floating-animation">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <HiPaperAirplane className="text-white text-xl" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800">Send Us a Message</h2>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input w-full px-4 py-3 rounded-xl focus:outline-none"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input w-full px-4 py-3 rounded-xl focus:outline-none"
                    placeholder="+977 xxx xxx xxxx"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input w-full px-4 py-3 rounded-xl focus:outline-none"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="form-input w-full px-4 py-3 rounded-xl focus:outline-none resize-none"
                  placeholder="Tell us how we can help you..."
                  required
                ></textarea>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="submit-button w-full text-white font-semibold py-4 px-8 rounded-xl flex items-center justify-center space-x-3 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <HiPaperAirplane className="text-xl" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details Card */}
            <div className="glass-card-dark rounded-3xl p-8 lg:p-10 text-white floating-animation">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl flex items-center justify-center">
                  <HiLocationMarker className="text-white text-xl" />
                </div>
                <h2 className="text-3xl font-bold">Contact Information</h2>
              </div>

              <div className="space-y-6">
                <div className="contact-item p-4 rounded-xl shimmer">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <FaEnvelope className="text-yellow-300" />
                    </div>
                    <div>
                      <p className="text-white/80 text-sm font-medium">Email Address</p>
                      <a
                        href="mailto:twuc.bardiya2049@gmail.com"
                        className="text-yellow-300 hover:text-yellow-200 font-semibold transition-colors"
                      >
                        twuc.bardiya2049@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="contact-item p-4 rounded-xl shimmer">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <FaPhoneAlt className="text-yellow-300" />
                    </div>
                    <div>
                      <p className="text-white/80 text-sm font-medium">Land-line</p>
                      <p className="text-white font-semibold">084 - 420350 / 347</p>
                    </div>
                  </div>
                </div>

                <div className="contact-item p-4 rounded-xl shimmer">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <FaMapMarkerAlt className="text-yellow-300" />
                    </div>
                    <div>
                      <p className="text-white/80 text-sm font-medium">Address</p>
                      <p className="text-white font-semibold">Gulariya-7, Bardiya, Nepal</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Hours Card */}
            <div className="glass-card rounded-3xl p-8 floating-animation">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center">
                  <FaClock className="text-white text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Office Hours</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-gradient-to-r from-green-50 to-teal-50 rounded-xl">
                  <span className="font-semibold text-gray-700">Sunday - Friday</span>
                  <span className="text-green-600 font-bold">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gradient-to-r from-red-50 to-pink-50 rounded-xl">
                  <span className="font-semibold text-gray-700">Saturday</span>
                  <span className="text-red-600 font-bold">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className="glass-card rounded-3xl overflow-hidden">
            <div className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                  <HiLocationMarker className="text-white text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Find Us Here</h3>
              </div>
            </div>
            <div className="relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.1651298833184!2d81.23130597420642!3d28.21356766050181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3997cf3eb24eae0f%3A0x7ab45b89e60dcbd3!2sGulariya%207%2C%20Bardiya%2C%20Nepal!5e0!3m2!1sen!2snp!4v1684234548123!5m2!1sen!2snp"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Google Maps Location"
                className="rounded-b-3xl"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
