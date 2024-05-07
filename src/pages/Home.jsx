import Header from "../components/Header";
import HeroSection from "../components/HeroSection";

function Home() {
  return (
    <div className="bg-[#030637]">
      <Header />

      {/* Hero Section of the home page */}
      <HeroSection
        title="Movie Ranking Site"
        description="Welcome to our curated collection of top-rated films, where every movie
        lover can find something to cherish. our comprehensive rankings and
        reviews are here to guide you through the mesmerizing world of cinema."
        image="https://movie-ranking-platform.netlify.app/images/ghostbusters-action.webp"
      />

      <h1>Movie Genres</h1>
      
    </div>
  );
}

export default Home;
