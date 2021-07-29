import { FETCH_MOVIES, FETCH_SINGLEMOVIE, SHOW_MODAL } from "./types";

const initialState = {
  movies: [],
  singleMovie: {},
  showModal : false,
};

export const rootReducer = (state = initialState, action: { type: string; payload: any; }) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return { ...state, movies: action.payload }
    case FETCH_SINGLEMOVIE:
      return { ...state, singleMovie: action.payload }
      case SHOW_MODAL:
        return { ...state, showModal: !state.showModal }
    default:
      return state;
  }
};
