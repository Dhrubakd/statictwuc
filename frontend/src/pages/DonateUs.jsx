
import React from "react";
import { Link } from "react-router-dom";
import { 
  HiTrendingUp,
  HiLightBulb,
  HiAcademicCap,
  HiHeart,
  HiCheckCircle,
  HiGift,
  HiLocationMarker,
  HiMail,
  HiChevronRight
} from "react-icons/hi";
import { 
  FaUniversity, 
  FaHandHoldingHeart, 
  FaGlobe, 
  FaEnvelope,
  FaMapMarkerAlt,
  FaCopy
} from "react-icons/fa";

const DonateUs = () => {
  const [acknowledgment, setAcknowledgment] = React.useState(false);
  const [sendMethod, setSendMethod] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [copied, setCopied] = React.useState("");

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(""), 2000);
  };

  return (
    <div 
      className="min-h-screen relative overflow-hidden mt-20 pt-24 pb-16" 
      style={{
        background: 'linear-gradient(135deg, #10b981 0%, #059669 50%, #047857 100%)'
      }}
    >
      <style>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        
        .glass-card-green {
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.95) 0%, rgba(5, 150, 105, 0.9) 100%);
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
          border: 2px solid rgba(16, 185, 129, 0.2);
          transition: all 0.3s ease;
        }
        
        .form-input:focus {
          background: rgba(255, 255, 255, 1);
          border-color: #10b981;
          box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.1);
          transform: translateY(-2px);
        }
        
        .donate-button {
          background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
          box-shadow: 0 10px 30px rgba(245, 158, 11, 0.4);
          transition: all 0.3s ease;
        }
        
        .donate-button:hover {
          background: linear-gradient(135deg, #d97706 0%, #b45309 100%);
          box-shadow: 0 15px 40px rgba(245, 158, 11, 0.6);
          transform: translateY(-3px);
        }
        
        .bank-item {
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .bank-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s ease;
        }
        
        .bank-item:hover::before {
          left: 100%;
        }
        
        .bank-item:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.1);
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
          background: linear-gradient(45deg, #34d399, #10b981);
          animation-delay: 0s;
        }
        
        .blob-2 {
          top: 70%;
          right: 10%;
          width: 250px;
          height: 250px;
          background: linear-gradient(45deg, #fbbf24, #f59e0b);
          animation-delay: 2s;
        }
        
        .blob-3 {
          bottom: 10%;
          left: 50%;
          width: 200px;
          height: 200px;
          background: linear-gradient(45deg, #60a5fa, #3b82f6);
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
        
        .copy-button {
          transition: all 0.3s ease;
        }
        
        .copy-button:hover {
          background: rgba(16, 185, 129, 0.1);
          transform: scale(1.1);
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #10b981 0%, #34d399 50%, #6ee7b7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .pulse-animation {
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
      `}</style>
      
      {/* Background Blobs */}
      <div className="background-blob blob-1"></div>
      <div className="background-blob blob-2"></div>
      <div className="background-blob blob-3"></div>
      
      <div className="container mx-auto px-4 relative z-10">
      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-6">
            <HiHeart className="text-yellow-300 text-2xl pulse-animation" />
            <span className="text-white/80 font-medium tracking-wider uppercase text-sm">Make a Difference</span>
            <HiHeart className="text-yellow-300 text-2xl pulse-animation" />
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-white via-green-100 to-yellow-200 bg-clip-text text-transparent">
              Donate with Purpose
            </span>
          </h1>
          <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Your support helps us continue our mission of empowering women and uplifting communities. 
            <br className="hidden sm:block" />
            Any amount you donate makes a significant difference in transforming lives.
          </p>
        </div>

        {/* Bank Details Section */}
        <div className="glass-card-green rounded-3xl p-8 lg:p-12 mb-12 floating-animation">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center">
              <FaUniversity className="text-white text-2xl" />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-white">Bank Account Details</h2>
              <p className="text-white/80 mt-2">Secure and direct donation method</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bank-item p-6 rounded-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/80 text-sm font-medium">Bank Name</p>
                  <p className="text-white text-xl font-bold">Everest Bank Limited</p>
                </div>
                <button
                  onClick={() => copyToClipboard("Everest Bank Limited", "bank")}
                  className="copy-button p-2 rounded-lg text-white/60 hover:text-white"
                >
                  {copied === "bank" ? <HiCheckCircle className="text-green-300" /> : <FaCopy />}
                </button>
              </div>
            </div>

            <div className="bank-item p-6 rounded-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/80 text-sm font-medium">Branch</p>
                  <p className="text-white text-xl font-bold">Gulariya Branch, Bardiya</p>
                </div>
                <button
                  onClick={() => copyToClipboard("Gulariya Branch, Bardiya", "branch")}
                  className="copy-button p-2 rounded-lg text-white/60 hover:text-white"
                >
                  {copied === "branch" ? <HiCheckCircle className="text-green-300" /> : <FaCopy />}
                </button>
              </div>
            </div>

            <div className="bank-item p-6 rounded-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/80 text-sm font-medium">Account Holder</p>
                  <p className="text-white text-xl font-bold">Tharu Women Upliftment Center</p>
                </div>
                <button
                  onClick={() => copyToClipboard("Tharu Women Upliftment Center", "holder")}
                  className="copy-button p-2 rounded-lg text-white/60 hover:text-white"
                >
                  {copied === "holder" ? <HiCheckCircle className="text-green-300" /> : <FaCopy />}
                </button>
              </div>
            </div>

            <div className="bank-item p-6 rounded-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/80 text-sm font-medium">Account Number</p>
                  <p className="text-white text-xl font-bold font-mono">0840123456789001</p>
                </div>
                <button
                  onClick={() => copyToClipboard("0840123456789001", "account")}
                  className="copy-button p-2 rounded-lg text-white/60 hover:text-white"
                >
                  {copied === "account" ? <HiCheckCircle className="text-green-300" /> : <FaCopy />}
                </button>
              </div>
            </div>

            <div className="bank-item p-6 rounded-2xl lg:col-span-2">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/80 text-sm font-medium">SWIFT Code</p>
                  <p className="text-white text-xl font-bold font-mono">EVBLNPKA</p>
                </div>
                <button
                  onClick={() => copyToClipboard("EVBLNPKA", "swift")}
                  className="copy-button p-2 rounded-lg text-white/60 hover:text-white"
                >
                  {copied === "swift" ? <HiCheckCircle className="text-green-300" /> : <FaCopy />}
                </button>
              </div>
            </div>
          </div>
        </div>

        </div>

        {/* Donation Purpose Section */}
        <div className="glass-card rounded-3xl p-8 lg:p-12 floating-animation">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center">
              <HiGift className="text-white text-2xl" />
            </div>
            <div>
              <h2 className="text-4xl font-bold gradient-text">Special Purpose for Your Donation</h2>
              <p className="text-gray-600 mt-2">Personalize your contribution with a meaningful dedication</p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <label className="block text-lg font-semibold text-gray-700 mb-3">
                I want my donation to be dedicated:
              </label>
              <input
                type="text"
                placeholder="In honor of, in memory of, for a special occasion..."
                className="form-input w-full px-6 py-4 rounded-2xl focus:outline-none text-lg"
              />
            </div>

            {/* Enhanced Checkbox */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl border-2 border-green-100">
              <div className="flex items-start space-x-4">
                <div className="relative">
                  <input
                    type="checkbox"
                    id="acknowledgmentCheckbox"
                    className="hidden"
                    checked={acknowledgment}
                    onChange={() => setAcknowledgment(!acknowledgment)}
                  />
                  <label 
                    htmlFor="acknowledgmentCheckbox" 
                    className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center cursor-pointer transition-all duration-300 ${
                      acknowledgment 
                        ? 'bg-green-500 border-green-500 text-white' 
                        : 'border-gray-300 bg-white hover:border-green-400'
                    }`}
                  >
                    {acknowledgment && <HiCheckCircle className="w-4 h-4" />}
                  </label>
                </div>
                <div>
                  <p className="text-gray-700 font-medium">
                    Send Acknowledgment
                  </p>
                  <p className="text-gray-600 text-sm mt-1">
                    Please send an acknowledgment to the individual or organization I am dedicating my donation to.
                  </p>
                </div>
              </div>
            </div>

            {/* Conditional Acknowledgment Section */}
            {acknowledgment && (
              <div className="space-y-8 mt-8 p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl border border-blue-100">
                <div>
                  <label htmlFor="recipientMessage" className="block text-lg font-semibold text-gray-700 mb-3">
                    Message to the recipient:
                  </label>
                  <textarea
                    id="recipientMessage"
                    rows="4"
                    placeholder="Your heartfelt message to the recipient..."
                    className="form-input w-full px-6 py-4 rounded-2xl focus:outline-none resize-none"
                  />
                </div>

                {/* Enhanced Radio Buttons */}
                <div>
                  <p className="text-lg font-semibold text-gray-700 mb-6">How would you like to send the acknowledgment?</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Email Option */}
                    <div
                      className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                        sendMethod === "email"
                          ? 'border-green-500 bg-green-50'
                          : 'border-gray-200 bg-white hover:border-green-300'
                      }`}
                      onClick={() => setSendMethod("email")}
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          sendMethod === "email" ? 'border-green-500' : 'border-gray-300'
                        }`}>
                          {sendMethod === "email" && <div className="w-3 h-3 bg-green-500 rounded-full"></div>}
                        </div>
                        <div className="flex items-center space-x-3">
                          <FaEnvelope className="text-blue-600 text-xl" />
                          <div>
                            <p className="font-semibold text-gray-700">Send via Email</p>
                            <p className="text-sm text-gray-500">Fast and eco-friendly</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Postal Option */}
                    <div
                      className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                        sendMethod === "postal"
                          ? 'border-green-500 bg-green-50'
                          : 'border-gray-200 bg-white hover:border-green-300'
                      }`}
                      onClick={() => setSendMethod("postal")}
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          sendMethod === "postal" ? 'border-green-500' : 'border-gray-300'
                        }`}>
                          {sendMethod === "postal" && <div className="w-3 h-3 bg-green-500 rounded-full"></div>}
                        </div>
                        <div className="flex items-center space-x-3">
                          <FaMapMarkerAlt className="text-red-500 text-xl" />
                          <div>
                            <p className="font-semibold text-gray-700">Postal Mail</p>
                            <p className="text-sm text-gray-500">Traditional and personal</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Email Input */}
                {sendMethod === "email" && (
                  <div className="mt-6 p-6 bg-white rounded-2xl border border-blue-200">
                    <label htmlFor="email" className="block text-lg font-semibold text-gray-700 mb-3">
                      Recipient's Email Address:
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="recipient@example.com"
                      className="form-input w-full px-6 py-4 rounded-2xl focus:outline-none"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                )}

                {/* Postal Mail Details */}
                {sendMethod === "postal" && (
                  <div className="mt-6 p-8 bg-white rounded-2xl border border-blue-200">
                    <div className="flex items-center space-x-3 mb-6">
                      <HiLocationMarker className="text-red-500 text-2xl" />
                      <h3 className="text-2xl font-bold text-gray-800">Postal Mail Information</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          placeholder="Recipient's full name"
                          className="form-input w-full px-4 py-3 rounded-xl focus:outline-none"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-2">
                          Street Address *
                        </label>
                        <input
                          type="text"
                          id="address"
                          placeholder="Street address"
                          className="form-input w-full px-4 py-3 rounded-xl focus:outline-none"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="city" className="block text-sm font-semibold text-gray-700 mb-2">
                          City *
                        </label>
                        <input
                          type="text"
                          id="city"
                          placeholder="City"
                          className="form-input w-full px-4 py-3 rounded-xl focus:outline-none"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="state" className="block text-sm font-semibold text-gray-700 mb-2">
                          State/Province
                        </label>
                        <input
                          type="text"
                          id="state"
                          placeholder="State or Province"
                          className="form-input w-full px-4 py-3 rounded-xl focus:outline-none"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="zipcode" className="block text-sm font-semibold text-gray-700 mb-2">
                          Postal Code
                        </label>
                        <input
                          type="text"
                          id="zipcode"
                          placeholder="Postal/Zip Code"
                          className="form-input w-full px-4 py-3 rounded-xl focus:outline-none"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="country" className="block text-sm font-semibold text-gray-700 mb-2">
                          Country *
                        </label>
                        <input
                          type="text"
                          id="country"
                          placeholder="Country"
                          className="form-input w-full px-4 py-3 rounded-xl focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        </div>

        {/* Final Thank You Section */}
        <div className="mt-16">
          <div className="glass-card rounded-3xl p-8 lg:p-12 text-center floating-animation">
            <div className="max-w-4xl mx-auto">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mb-8">
                <FaHandHoldingHeart className="text-white text-3xl" />
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">
                Thank You for Your Support!
              </h2>
              
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Your generosity helps us create positive change and provide opportunities for women in need. 
                Together, we can make a lasting impact that transforms lives and builds stronger communities.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <HiAcademicCap className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Empowerment</h3>
                  <p className="text-gray-600">Supporting women's education and skill development</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <FaGlobe className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Community</h3>
                  <p className="text-gray-600">Building stronger, more inclusive communities</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <HiHeart className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Impact</h3>
                  <p className="text-gray-600">Creating lasting positive change in lives</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/contact-us"
                  className="donate-button text-white font-semibold py-4 px-8 rounded-2xl flex items-center space-x-3 hover:scale-105 transition-transform duration-300"
                >
                  <HiMail className="text-xl" />
                  <span>Contact Us for More Information</span>
                  <HiChevronRight className="text-lg" />
                </Link>
                
                <Link
                  to="/about"
                  className="bg-white border-2 border-green-500 text-green-600 font-semibold py-4 px-8 rounded-2xl hover:bg-green-50 transition-all duration-300 flex items-center space-x-3"
                >
                  <span>Learn About Our Mission</span>
                  <HiChevronRight className="text-lg" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
  
  );
};

export default DonateUs;
