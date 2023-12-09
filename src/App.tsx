import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Data6 from "./Components/Axios6";
import PexelsGallery2 from "./Components/Pagination2";
import Navigation from "./Components/Navigation";
import Landing from "./LandingPage";
import HeroSection from "./Components/heroSection";

const client = new QueryClient();

function App() {
  return (
    <html>
      <header>
        <Navigation></Navigation>
      </header>
      <body>
        <HeroSection></HeroSection>
      </body>
    </html>
  );
}

export default App;
