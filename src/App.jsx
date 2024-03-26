import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import MovieJumbotron from "./components/MovieJumbotron";
import MovieList from "./components/MovieList";
import "./index.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  function handleSearch(searchTerm) {
    setSearchValue(searchTerm);
  }

  const getMovieRequest = async (searchValue = "") => {
    const url =
      searchValue.length > 0
        ? `https://api.themoviedb.org/3/search/movie?query=${searchValue}`
        : "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&include_adult=false&include_video=false&sort_by=popularity.desc";
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OGI5NDgwM2Y4MTRmMDRhYTZmYTNmMGJkMWM0YWUzMCIsInN1YiI6IjY1ZmIwZmI2YmYzMWYyMDE0YmZkMjQxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yWoW28fhySZu-131tm8TOhwvsx6FjJ9KizXgsVCyB_E",
      },
    };

    await fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        if (json.results) {
          const movies = json.results.slice(0, 18);
          setMovies(movies);
        }
      })
      .catch((err) => console.error("error:" + err));
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  return (
    <>
      <Navbar onSearch={handleSearch} />
      <MovieJumbotron />
      <div className="container mx-auto">
        <MovieList movies={movies} />
      </div>
    </>
  );
}

export default App;
