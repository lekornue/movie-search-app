import { rootReducer } from "../redux/rootReducer";


test("should return the initial state", () => {
  expect(rootReducer(undefined, { type: "", payload: "" })).toEqual({
    movies: [],
    singleMovie: {},
    showModal: false,
  });
});
