import React from "react";
import { Link, NavLink } from "react-router-dom";

interface MoviePageHeaderProps {
    itemId: string;
}

const MoviePageHeader: React.FC<MoviePageHeaderProps> = ({ itemId }) => {

    return (
        <div className="card-header">
            <ul
                className="nav nav-pills mb-3 me-auto"
                id="pills-tab"
                role="tablist"
            >
                <li className="nav-item " role="presentation">
                    <NavLink
                        className="nav-link"
                        id="pills-home-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-home"
                        type="button"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true"
                        to={`/movies/${itemId}`}
                        exact
                        title="Данные"
                    >
                        Данные фильма
                    </NavLink>
                </li>
                <li className="nav-item" role="presentation">
                    <NavLink
                        className="nav-link"
                        id="pills-home-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-home"
                        type="button"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true"
                        to={`/movies/${itemId}/description`}
                        title="Описание"
                    >
                        Описание фильма
                    </NavLink>
                </li>
                <li className="nav-item" role="presentation">
                    <Link
                        className="nav-link"
                        id="pills-home-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-home"
                        type="button"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true"
                        to="/movies"
                        title="Назад к фильмам"
                    >
                        Назад к фильмам
                    </Link>
                </li>
            </ul>
        </div>
    );
};
export default MoviePageHeader;