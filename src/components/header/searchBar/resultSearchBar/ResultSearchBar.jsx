import { List, ListItemAvatar, ListItemText } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";
import { handleMovieTv } from "../../../conf/detail.movie";

const ResultSearchBar = ({
  movieSearchList,
  viewResult,
  typeMovie,
  setViewResult,
}) => {
  let history = useHistory();

  const styleMovieSearchList = {
    containerResult: {
      display: "flex",
      alignItems: "center",
    },

    img: {
      height: "90px",
      width: "70px",
    },
    title: {
      padding: "10px",
      color: "white",
    },
    listItem: {
      backgroundColor: "black",
      height: "250px",
      width: "290px",
      overflowY: "scroll",
      paddingLeft: "20px",
      position: "absolute",
      zIndex: "300",
      cursor: "pointer",
      // marginTop:'50px',
      marginLeft: "10px",
    },
    listItemClose: {
      display: "none",
    },
  };

  return (
    <List
      style={
        viewResult
          ? styleMovieSearchList.listItem
          : styleMovieSearchList.listItemClose
      }
    >
      {movieSearchList.movies?.length === 0 ? (
        <p>Aucun resultat</p>
      ) : (
        movieSearchList.movies?.map((movie, key) => (
          <div
            key={key}
            onClick={(e) => {
              handleMovieTv(e, movie.id, movie.title, typeMovie, history);
              setViewResult(false);
            }}
            style={
              viewResult
                ? styleMovieSearchList.containerResult
                : styleMovieSearchList.containerResultClose
            }
          >
            <ListItemAvatar>
              <img
                style={styleMovieSearchList.img}
                alt={movie.title}
                src={movie.img}
              />
            </ListItemAvatar>
            <ListItemText style={styleMovieSearchList.title}>
              {movie.title}
            </ListItemText>
          </div>
        ))
      )}
    </List>
  );
};

export default ResultSearchBar;
