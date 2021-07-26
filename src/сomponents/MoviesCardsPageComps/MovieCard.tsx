import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Search } from "../../interfaces";
import { fetchSingleMovie } from "../../redux/actions";

interface MovieCardProps {
  movieCard: Search;
}

const MovieCard: React.FC<MovieCardProps> = ({ movieCard }) => {

 const dispatch = useDispatch()

  return (
    <div className="col">
      <div className="card" style={{ height: "26rem" }}>
        <img
          src={movieCard.Poster}
          className="card-img-top"
          alt=""
          style={{ height: "18rem" }}
        />
        <div className="card-body">
          <h5 className="card-title" style={{ height: "1rem", marginBottom: 40 }}>
            {movieCard.Title}
          </h5>
          <Link
            className="btn btn-primary"
            onClick={() => {
              dispatch(fetchSingleMovie(movieCard.imdbID))
            }}
            to={`movies/${movieCard.imdbID}`}
          >
            Описание фильма
          </Link>
        </div>
      </div>
    </div>
  );
};
export default MovieCard;

