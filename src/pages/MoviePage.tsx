import React from "react";
import { SingleMovie } from "../interfaces";
import MoviePageContent from "../сomponents/MoviePageComps/MoviePageContent";
import MoviePageHeader from "../сomponents/MoviePageComps/MoviePageHeader";

interface MoviePageProps {
  movie: SingleMovie;
  itemId: string;
  currentTab: string;
}

export const MoviePage: React.FC<MoviePageProps> = ({
  movie,
  itemId,
  currentTab,
}) => {
  return (
    <div className="card text-left">
      <MoviePageHeader itemId={itemId} />
      <MoviePageContent movie={movie} currentTab={currentTab} />
    </div>
  );
};
