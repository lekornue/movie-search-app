import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Search } from "../../interfaces";
import MovieCard from "./MovieCard";

interface MovieListCardsProps {
  movieList: Array<Search>;
}

const MovieListCards: React.FC<MovieListCardsProps> = ({ movieList }) => {

  const [state, setState] = useState({
    sortOrder: 'increase',
  });

  const changeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setState({
      sortOrder: event.target.value
    });
  };

  const sortMovies = () => {
    if (state.sortOrder === 'decrease') {
      // сортировка по убыванию
      movieList.sort((prev: any, next: any) => next.Year - prev.Year)
    } else {
      // сортировка по возрастанию
      movieList.sort((prev: any, next: any) => prev.Year - next.Year)
    }
  }

  return (
    <>
      <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" onChange={changeHandler}>
        <option value="increase">Сначала ранние</option>
        <option value="decrease">Сначала поздние</option>
      </select>

      {sortMovies()}

      <div className="container px-4">
        <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
          {movieList.map((movieCard) => {
            return (
              <MovieCard key={uuidv4()} movieCard={movieCard} />
            );
          })}
        </div>
      </div>
    </>
  );
};
export default MovieListCards;