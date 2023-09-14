import React from "react";
import Header from "./Header";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopRatedMovies();
  return (
    <div>
      <Header />

      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
