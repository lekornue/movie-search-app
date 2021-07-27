import React from "react";
import { SingleMovie } from "../../interfaces";
import ContentCharacteristics from "./ContentCharacteristics";
import ContentDecription from "./ContentDescpription";

interface MoviePageContentProps {
    movie: SingleMovie;
    currentTab: string;
}

const MoviePageContent: React.FC<MoviePageContentProps> = ({ movie, currentTab }) => {

    return (
        <div className="d-flex" style={{ maxWidth: 800 }}>
            <div className="row g-2">
                <div className="col-md-4">
                    <img
                        src={movie.Poster}
                        className="img-fluid rounded-start"
                        alt=""
                    />
                </div>
                {currentTab === "description" 
                ? 
                <ContentDecription movie = {movie}/>
                : 
                <ContentCharacteristics  movie = {movie}/>
                }
            </div>
        </div>
    );
};
export default MoviePageContent;