import { FETCH_MOVIES, FETCH_SINGLEMOVIE } from "./types";

const initialState = {
  movies: [],
  singleMovie: {},
};

export const rootReducer = (state = initialState, action: { type: string; payload: any; }) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return { ...state, movies: action.payload }
    case FETCH_SINGLEMOVIE:
      return { ...state, singleMovie: action.payload }
    default:
      return state;
  }
};
