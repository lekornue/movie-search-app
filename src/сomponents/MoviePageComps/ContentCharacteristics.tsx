import React from "react";
import { SingleMovie } from "../../interfaces";

interface ContentProps {
    movie: SingleMovie;
}

const ContentCharacteristics: React.FC<ContentProps> = ({ movie }) => {

    return (
        <div className="col-md-8" style={{ paddingLeft: 200 }}>
            <div className="card-body">
                <h5 className="card-title">{`Название фильма: ${movie.Title}`}</h5>
                <p className="card-text">{`Год: ${movie.Year}`}</p>
                <p className="card-text">{`Жанр: ${movie.Genre}`}</p>
                <p className="card-text">{`Актеры : ${movie.Actors}`}</p>
                <p className="card-text">{`Режиссер: ${movie.Director}`}</p>
                <p className="card-text">{`Сценарист: ${movie.Writer}`}</p>
                <p className="card-text">{`Страна: ${movie.Country}`}</p>
            </div>
        </div>

    );
};
export default ContentCharacteristics;