import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navigation from "./Components/Navigation";
import Landing from "./Home";
import HeroSection from "./Components/heroSection";
import Home from "./Home";
import About from "./About";
import RecentSongsSection from "./songscard";

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
      <div>
      <RecentSongsSection></RecentSongsSection>
      </div>
    </>
  );
}

export default App;
