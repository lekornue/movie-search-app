import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchMovies } from "../redux/actions";

const NavBar: React.FC = () => {
  const [title, setTitle] = useState<string>("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies(title))
     // eslint-disable-next-line
  }, [title]);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark"
      style={{ height: "100px", paddingLeft: "1.5em", paddingRight: "1.5em" }}
    >
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/" title="На главную">
          <h4>Movie Search</h4>
        </NavLink>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-pills">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" exact title="На главную">
                Главная
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about" title="О команде">
                О команде
              </NavLink>
            </li>
          </ul>
          <div className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={changeHandler}
            />
            <NavLink
              className="btn btn-primary"
              to="/movies"
              role="button"
              title="Movies"
            >
              Search
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
