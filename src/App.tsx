import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './About'; // Create a placeholder About page
import MyNavbar from './Components/RSA/Nav';
import Home2 from './Components/RSA/PAGES/Home';
import ContentSectionRsaLabs from './Components/RSA/About us/RsaLabs';
import CareersPage from './Components/RSA/About us/CareerPage';
import KeyServicesPage from './Components/RSA/About us/KeyServicesPage';
import Research from './Components/RSA/About us/ResearchPage';
import Patent from './Components/RSA/About us/PatentPage';

const App: React.FC = () => {
  return (
    <Router>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home2 />} />
        <Route path="/rsa-labs" element={<ContentSectionRsaLabs />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/key-services" element={<KeyServicesPage />} />
        <Route path="/research-publication" element={<Research />} />
        <Route path="/ipr-patent" element={<Patent />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
