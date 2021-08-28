/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./header.module.css";
import { GetMoviesList } from "../../ConfigRedux/Action/GetMovies";
import { SearchMovies } from "../../ConfigRedux/Action/SearchAction";
const Header = () => {
  const [Search, SetSearch] = useState("Marvel");

  const dispatch = useDispatch();

  let FetchMovies = (movie) => {
    dispatch(GetMoviesList(movie, "movie", "faf7e5bb", 1));
  };

  //Fetch after Render
  useEffect(() => {
    FetchMovies(Search);
  }, []);
  //--//

  let HandleChange = (evt) => {
    SetSearch(evt.target.value);
  };

  useEffect(() => {
    dispatch(SearchMovies(Search));
  }, [Search]);

  return (
    <React.Fragment>
      <div className={styles.container}>
        <h1 className={styles.font_Title}>Movies</h1>
        <input
          className={styles.search}
          placeholder="Search Movies"
          value={Search}
          onChange={HandleChange}
        />
      </div>
    </React.Fragment>
  );
};

export default Header;
