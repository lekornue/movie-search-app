import React from "react";
import { Search } from "../interfaces";
import Alert from "../сomponents/MoviesCardsPageComps/Alert";
import MovieListCards from "../сomponents/MoviesCardsPageComps/MovieListCards";

interface MoviesCardsPageProps {
  movieList: Array<Search>;
}

export const MoviesCardsPage: React.FC<MoviesCardsPageProps> = ({ movieList }) => {

  return movieList 
  ? 
  <MovieListCards movieList={movieList} /> 
  : 
  <Alert message="Введите осмысленное название фильма в поле Search" />

};
