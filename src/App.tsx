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
      </Routes>
    </Router>
  );
};

export default App;
