import React from "react";
import { useHistory } from "react-router";
import { handleMovieTv } from "../../conf/detail.movie";
import StarFavoris from "../../starFavoris/StarFavoris";
import styles from "../../styles/styles";
import { ImageList, ImageListItem } from "@material-ui/core";

const MovieList = ({ movieList, favoris, setFavoris, setFavorisChange }) => {
  let history = useHistory();

  const stylesMovieList = {
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
    },
    title: {
      color: styles.secondaryColor,
    },
    gridList: {
      flexWrap: "nowrap",
    },
    gridListTile: {
      width: "150px",
      height: "250px",
      margin: "10px",
    },
    image: {
      width: "100%",
      height: "100%",
      cursor: "pointer",
      objectFit: "contain",
    },
  };

  // const classes = useStyles();

  return (
    <div style={stylesMovieList.root}>
      <h3 style={stylesMovieList.title}>{movieList.title}</h3>

      <ImageList style={stylesMovieList.gridList}>
        {movieList.movies != null &&
          movieList.movies.map((movie, key) => (
            <ImageListItem key={key} style={stylesMovieList.gridListTile}>
              <img
                onClick={(e) =>
                  handleMovieTv(
                    e,
                    movie.id,
                    movie.title,
                    movieList.typeMovie,
                    history
                  )
                }
                src={movie.img}
                alt={movie.title}
                style={stylesMovieList.image}
              />
              <StarFavoris
                favoris={favoris}
                setFavoris={setFavoris}
                setFavorisChange={setFavorisChange}
                movie={movie}
              />
            </ImageListItem>
          ))}
      </ImageList>
    </div>
  );
};

export default MovieList;
