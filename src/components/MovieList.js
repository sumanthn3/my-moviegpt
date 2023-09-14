import React, { useRef } from "react";
import MovieCard from "./MovieCard";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const MovieList = ({ title, movies }) => {
  const sliderRef = useRef(null); // Create a ref

  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 500;
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 500;
    }
  };

  return (
    <div className="px-6">
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
      <div className="grid grid-flow-col">
        <MdChevronLeft
          className={`hover:scale-150 my-auto text-white opacity-50`}
          size={30}
          onClick={slideLeft}
          aria-hidden="true"
        />
        <div
          ref={sliderRef} // Attach the ref to the element
          className="h-18 m-2 overflow-hidden whitespace-nowrap scroll-smooth"
        >
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
        <MdChevronRight
          className={`hover:scale-150 my-auto text-white opacity-50`}
          size={30}
          onClick={slideRight}
          aria-hidden="true"
        />
      </div>
    </div>
  );
};

export default MovieList;
