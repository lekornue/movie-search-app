import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { Home } from "./pages/HomePage";
import { About } from "./pages/AboutPage";
import { MoviesCardsPage } from "./pages/MoviesCardsPage";
import { MoviePage } from "./pages/MoviePage";
import NavBar from "./сomponents/NavBar";

interface RootState {
  movies: any;
  singleMovie: any;
}

const App: React.FC = () => {
  const movies = useSelector((state: RootState) => state.movies);
  const singleMovie = useSelector((state: RootState) => state.singleMovie);

  return (
    <BrowserRouter>
      <NavBar />
      <div className="container pt-4">
        <Switch>
          <Route path={"/"} exact component={Home} />
          <Route path={"/about"} component={About} />

          {/* Content */}

          <Route
            path="/movies/:id/description"
            render={({ match }) => {
              const { id } = match.params;
              return <MoviePage movie={singleMovie} itemId={id} currentTab="description" />
            }} />

          <Route
            path="/movies/:id"
            render={({ match }) => {
              const { id } = match.params;
              return <MoviePage movie={singleMovie} itemId={id} currentTab="characteristics" />
            }} />


          <Route
            path="/movies"
            render={() => <MoviesCardsPage movieList={movies} />}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
