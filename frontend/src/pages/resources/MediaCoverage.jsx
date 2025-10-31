import { HiNewspaper, HiOutlineShare } from 'react-icons/hi';

const mediaArticles = [
  {
    id: 1,
    title: "Empowering Women in Rural Nepal",
    source: "Nepal Times",
    date: "March 15, 2023",
    description:
      "A detailed report highlighting the efforts of Tharu Women Upliftment Center in improving education and livelihood opportunities for marginalized women in Bardiya, Nepal.",
    link: "#",
  },
  {
    id: 2,
    title: "Community Resilience Amidst Adversity",
    source: "The Himalayan Post",
    date: "January 20, 2023",
    description:
      "An inspiring story about how the community-led programs have made significant contributions to disaster recovery and resilience-building initiatives.",
    link: "#",
  },
  {
    id: 3,
    title: "Leadership Programs for Women Gain National Attention",
    source: "Kathmandu Chronicle",
    date: "October 10, 2022",
    description:
      "Coverage of the recent leadership workshops held for young women in rural areas, fostering leadership and self-reliance.",
    link: "#",
  },
  {
    id: 4,
    title: "Breaking Barriers with Health Awareness Drives",
    source: "National Daily",
    date: "August 5, 2022",
    description:
      "This feature highlights the success of health and wellness campaigns led by the organization, which have improved health outcomes in remote villages.",
    link: "#",
  },
];

const MediaCoverage = () => {
  return (
    <div className="min-h-screen relative overflow-hidden mt-20 pt-24 pb-16" style={{
      background: 'linear-gradient(135deg, #e0e7ff 0%, #f0abfc 100%)'
    }}>
      <style>{`
        .background-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(40px);
          opacity: 0.5;
          animation: blob 8s infinite;
        }
        .blob-1 {
          top: 10%;
          left: 10%;
          width: 180px;
          height: 180px;
          background: linear-gradient(45deg, #a5b4fc, #f472b6);
          animation-delay: 0s;
        }
        .blob-2 {
          top: 60%;
          right: 15%;
          width: 140px;
          height: 140px;
          background: linear-gradient(45deg, #fbbf24, #f59e0b);
          animation-delay: 3s;
        }
        .blob-3 {
          bottom: 15%;
          left: 30%;
          width: 160px;
          height: 160px;
          background: linear-gradient(45deg, #6ee7b7, #3b82f6);
          animation-delay: 6s;
        }
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(20px, -30px) scale(1.1); }
          66% { transform: translate(-15px, 15px) scale(0.9); }
        }
        .glass-card {
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.3);
          box-shadow: 0 20px 40px rgba(0,0,0,0.08);
        }
        .floating-animation {
          animation: float 6s ease-in-out infinite;
        }
        .floating-animation:nth-child(even) {
          animation-delay: -3s;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        .gradient-text {
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .media-card {
          transition: all 0.3s ease;
        }
        .media-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 24px 48px rgba(0,0,0,0.13);
        }
      `}</style>

      {/* Background Blobs */}
      <div className="background-blob blob-1"></div>
      <div className="background-blob blob-2"></div>
      <div className="background-blob blob-3"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 mb-8"><span className="text-blue-900/80 font-medium tracking-wider uppercase text-sm">Media Spotlight</span></div>
          <h1 className="text-5xl lg:text-6xl font-bold text-blue-900 mb-8">
            <span className="bg-clip-text bg-gradient-to-r from-blue-400 via-pink-200 to-green-200 ">
              Media Coverage
            </span>
          </h1>
          <p className="text-xl text-blue-900/90 max-w-4xl mx-auto leading-relaxed">
            Explore how local and national media have recognized our journey of empowerment, resilience, and community transformation.
          </p>
        </div>

        {/* Media Articles Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {mediaArticles.map((article, idx) => (
            <div key={article.id} className="media-card glass-card rounded-3xl p-8 floating-animation" style={{ animationDelay: `${idx * 0.18}s` }}>
              <div className="flex items-center mb-4">
                <HiNewspaper className="text-3xl text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold gradient-text mb-0 flex-1">{article.title}</h3>
              </div>
              <p className="text-sm text-gray-500 mb-2">
                <span className="font-semibold">{article.source}</span> &bull; {article.date}
              </p>
              <p className="text-gray-700 mb-6">{article.description}</p>
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-semibold hover:underline flex items-center gap-1"
              >
                Read Full Article <span aria-hidden="true">→</span>
              </a>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="glass-card rounded-3xl p-8 lg:p-12 floating-animation">
            <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">Share Our Story</h2>
            <p className="text-xl text-blue-900 mb-8 max-w-3xl mx-auto leading-relaxed">
              Help spread the word about our work and impact by sharing our achievements with your network.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact-us"
                className="bg-gradient-to-r from-blue-600 to-pink-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-blue-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-xl"
              >
                Contact Us
              </a>
              <a
                href="/donate-us"
                className="bg-white/80 backdrop-blur-lg border border-green-200 text-green-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-green-50 transform hover:scale-105 transition-all duration-300"
              >
                Donate Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaCoverage;
