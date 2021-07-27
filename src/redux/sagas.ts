import { call, put, takeEvery } from "redux-saga/effects";
import { SingleMovie } from "../interfaces";
import { FETCH_SINGLEMOVIE, REQUEST_SINGLEMOVIE } from "./types";

export function* sagaWatcher() {
  yield takeEvery(REQUEST_SINGLEMOVIE, sagaWorker);
}

function* sagaWorker(action: { type: string; imdbID: string }) {
  const payload: SingleMovie = yield call(fetchSingleMovie, action.imdbID);
  yield put({ type: FETCH_SINGLEMOVIE, payload });
}

async function fetchSingleMovie(imdbID: string) {
  const response = await fetch(
    `http://www.omdbapi.com/?i=${imdbID}&plot=full&apikey=de7d9c13`
  );
  return await response.json();
}
