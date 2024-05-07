import { useEffect, useState } from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import GenreCard from "../components/GenreCard";

function Home() {
  let [genres, setGenres] = useState(null);

  function fetchData() {
    let apiUrl = "http://localhost:1337/api/genres?populate=*";
    fetch(apiUrl)
      .then((response) => {
        return response.json();
      })
      .then((dataObject) => {
        let genreData = dataObject.data;
        setGenres(genreData);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

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

      <h1 className="font-sans text-white text-5xl text-center p-8 font-bold mb-4">
        Movie Genres
      </h1>
      <section className="w-[70%] m-auto pb-8 flex justify-around">
        {genres !== null ? (
          genres.map((item) => {
            return (
              <GenreCard
                key={item.id}
                genre={item.attributes.title}
                image={`http://localhost:1337${item.attributes.image.data.attributes.url}`}
              />
            );
          })
        ) : (
          <p>Loading...</p>
        )}
      </section>
    </div>
  );
}

export default Home;
