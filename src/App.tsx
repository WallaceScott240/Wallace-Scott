import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyNavbar from "./Components/RSA/Nav";
import Home2 from "./Components/RSA/PAGES/Home";
import ContentSectionRsaLabs from "./Components/RSA/About us/RsaLabs";
import CareersPage from "./Components/RSA/About us/CareerPage";
import KeyServicesPage from "./Components/RSA/About us/KeyServicesPage";
import Research from "./Components/RSA/About us/ResearchPage";
import Patent from "./Components/RSA/About us/PatentPage";
import ScrollToTop from "./scrolltop"; // Import the ScrollToTop component
import RapterPage from "./Components/RSA/About us/rapterPage";
import Portfolio from "./Components/RSA/About us/PortfolioPage";
import WorkInProgress from "./Components/RSA/About us/Error";
import NotFoundPage from "./Components/RSA/About us/Error";
import Partners from "./Components/RSA/About us/PartnersPage";
import Collabs from "./Components/RSA/About us/CollabsPage";
import BlogPage from "./Components/RSA/About us/Blogpage";

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop /> {/* Add this component inside Router */}
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home2 />} />
        <Route path="/rsa-labs" element={<ContentSectionRsaLabs />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/key-services" element={<KeyServicesPage />} />
        <Route path="/research-publication" element={<Research />} />
        <Route path="/ipr-patent" element={<Patent />} />
        <Route path="/rapter" element={<RapterPage />} />
        <Route path="/portfolio" element={<NotFoundPage />} />
        <Route path="/partnerships" element={<Partners />} />
        <Route path="/collaborations" element={<Collabs />} />
        <Route path="/resources" element={<NotFoundPage />} />
        <Route path="/blogs" element={<BlogPage />} />
      </Routes>
    </Router>
  );
};

export default App;
