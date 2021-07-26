import React from "react";
import { SingleMovie } from "../../interfaces";

interface ContentProps {
    movie: SingleMovie;
}

const ContentDecription: React.FC<ContentProps> = ({ movie }) => {

    return (
        <div className="col-md-8" style={{ paddingLeft: 200 }}>
            <div className="card-body">
                <h5 className="card-title">{`Название фильма: ${movie.Title}`}</h5>
                <p className="card-text">{`Описание: ${movie.Plot}`}</p>
            </div>
        </div>

    );
};
export default ContentDecription;