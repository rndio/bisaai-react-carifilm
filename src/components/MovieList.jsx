import PropsTypes from "prop-types";
const MovieList = (props) => {
  return (
    <div className="flex flex-wrap justify-center my-5" id="MovieList">
      {props.movies.map((movie, index) => (
        <div className="lg:w-1/6 md:w-1/4 sm:w-1/3 xs:w-1/2 p-2" key={index}>
          <div className="card bg-transparent">
            <figure>
              <img
                src={"https://image.tmdb.org/t/p/w500".concat(
                  movie.poster_path
                )}
                alt={movie.title}
              />
            </figure>
            <div className="card-body px-0 py-2">
              <h2 className="card-title text-sm font-bold">{movie.title}</h2>
              {movie.release_date && (
                <p className="card-subtitle text-xs text-gray-400">
                  {movie.release_date.split("-")[0]}
                </p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
