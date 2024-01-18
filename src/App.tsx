import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navigation from "./Components/Navigation";
import Landing from "./Home";
import HeroSection from "./Components/heroSection";
import Home from "./Home";
import About from "./About";
import RecentSongsSection from "./songscard";
import ContactMeSection from "./Components/contact";
import PastProjects from "./Components/Projects";
import PastWork from "./Components/pastwork";
import CTASection from "./Components/colaberation";
import ServicesSection from "./Components/services";
import InternshipCTASection from "./Internship";

const client = new QueryClient();

function App() {
  return (
    <>
      <div>
        <HeroSection></HeroSection>
      </div>
      <div>
        <About></About>
      </div>
      <div style={{ height: 20 }}></div>

      {/* <div>
        <PastWork></PastWork>
      </div>
      <div style={{ height: 20 }}></div>

      <div>
        <PastProjects></PastProjects>
      </div> */}
      <div>
        <CTASection></CTASection>
      </div>

      <div>
        <ServicesSection></ServicesSection>
      </div>
      <div style={{ height: 20 }}></div>
      <div>
        <RecentSongsSection></RecentSongsSection>
      </div>
      <div style={{ height: 20 }}></div>
      <div>
        <InternshipCTASection></InternshipCTASection>
      </div>
      <div style={{ height: 20 }}></div>

      <div>
        <ContactMeSection></ContactMeSection>
      </div>
    </>
  );
}

export default App;
