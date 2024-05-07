import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import GenreCard from "../components/GenreCard";

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

      <h1 className="font-sans text-white text-5xl text-center p-8 font-bold mb-4">Movie Genres</h1>
      <section className="w-[70%] m-auto pb-8 flex justify-around">
        <GenreCard 
            genre="Action"
            image="https://movie-ranking-platform.netlify.app/images/Kings-man-action1.webp"
        />
        <GenreCard 
            genre="Adventure"
            image="https://movie-ranking-platform.netlify.app/images/jumanji-commedy1.webp"
        />
        <GenreCard 
            genre="Sci-fiction"
            image="https://movie-ranking-platform.netlify.app/images/ant-man-1.webp"
        />
        <GenreCard 
            genre="Romance"
            image="https://movie-ranking-platform.netlify.app/images/When-in-rome-romance3.jpg"
        />
      </section>
    </div>
  );
}

export default Home;
