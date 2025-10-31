
import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import HomePage from "./pages/HomePage";
// ...admin panel imports removed...

// About Us Pages
import AboutPage from "./pages/about/AboutPage";
import ExecutiveBoard from "./pages/about/ExecutiveBoard";
import Partner from "./pages/about/Partner";
import RunningProjects from "./pages/about/RunningProjects";
import CompletedProjects from "./pages/about/CompletedProjects";

// Our Works Pages
import OurWorksPage from "./pages/works/OurWorksPage";
import Programs from "./pages/works/Programs";
import Milestone from "./pages/works/Milestone";
import Geographical from "./pages/works/Geographical";
import AchievementsPage from "./pages/works/AchievementsPage";

// Gallery Pages
import GalleryPage from "./pages/gallery/GalleryPage";
import PhotosPage from "./pages/gallery/PhotosPage";
import VideosPage from "./pages/gallery/VideosPage";

// Resources Pages
import ResourcesPage from "./pages/resources/ResourcesPage";
import NewsAndEvents from "./pages/resources/NewsAndEvents";
import MediaCoverage from "./pages/resources/MediaCoverage";
import Publications from "./pages/resources/Publications";
import Notices from "./pages/resources/Notices";

// Other Pages
import JobOpportunities from "./pages/opportunities/JobOpportunities";
import ContactUs from "./pages/ContactUs";
import DonateUs from "./pages/DonateUs";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<HomePage />} />

          {/* About Us Pages */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about/leadership" element={<ExecutiveBoard />} />
          <Route path="/about/partnerships" element={<Partner />} />
          <Route path="/about/projects" element={<RunningProjects />} />
          <Route path="/about/completed-projects" element={<CompletedProjects />} />

          {/* Our Works Pages */}
          <Route path="/works" element={<OurWorksPage />} />
          <Route path="/works/programs" element={<Programs />} />
          <Route path="/works/achievements" element={<AchievementsPage />} />
          <Route path="/works/milestone" element={<Milestone />} />
          <Route path="/works/geographical" element={<Geographical />} />

          {/* Gallery Pages */}
          <Route path="/gallery" element={<GalleryPage />}>
            <Route index element={<PhotosPage />} />
            <Route path="photos" element={<PhotosPage />} />
            <Route path="videos" element={<VideosPage />} />
          </Route>

          {/* Resources Pages */}
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/resources/news-events" element={<NewsAndEvents />} />
          <Route path="/resources/media-coverage" element={<MediaCoverage />} />
          <Route path="/resources/publications" element={<Publications />} />
          <Route path="/resources/notices" element={<Notices />} />

          {/* Opportunities Page */}
          <Route path="/opportunities" element={<JobOpportunities />} />

          {/* Contact, Donate Pages */}
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/donate-us" element={<DonateUs />} />

          {/* ...admin routes removed... */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
