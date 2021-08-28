import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Header from "../../Component/Header";

const Home = () => {
  const [Movies, SetMovies] = useState(null);
  const MovieList = useSelector((state) => state.Movies_List);

  // console.log(Movies);

  useEffect(() => {
    if (MovieList.Failed) {
      alert(MovieList.data);
    } else {
      SetMovies(MovieList.data);
    }
  }, [MovieList]);

  return (
    <React.Fragment>
      <div>
        <Header />
      </div>
    </React.Fragment>
  );
};

export default Home;
