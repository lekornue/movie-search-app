import { FETCH_MOVIES, FETCH_SINGLEMOVIE } from "./types";

export function fetchMovies(title: string) {
  return function (dispatch: (arg0: { type: string; payload: any; }) => any) {
    fetch(`http://www.omdbapi.com/?s=${title}&page=1&apikey=de7d9c13`)
      .then((response) => response.json())
      .then((json) => dispatch({ type: FETCH_MOVIES, payload: json.Search }));
  };
}

export function fetchSingleMovie(imdbID: string) {
  return function (dispatch: (arg0: { type: string; payload: any; }) => any) {
    fetch(`http://www.omdbapi.com/?i=${imdbID}&plot=full&apikey=de7d9c13`)
      .then((response) => response.json())
      .then((json) => dispatch({ type: FETCH_SINGLEMOVIE, payload: json }));
  };
}
