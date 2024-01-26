import {
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useCallback, useContext, useEffect, useState } from "react";
import apiFavoris from "../conf/api.Favoris";
import Loader from "../loader/Loader";
import styles from "../styles/styles";
import StarIcon from "@material-ui/icons/Star";
import { AuthContext } from "../context/contextAuth";

const Favoris = () => {
  const [favoris1, setFavoris1] = useState([]);
  const idUser = localStorage.getItem("user");
  const [isLoaded, setLoaded] = useState(false);
  const [state] = useContext(AuthContext);

  const getFavoris = useCallback(() => {
    apiFavoris.get(`/favoris/${idUser}`).then((res) => {
      setFavoris1(res.data);
      setLoaded(true);
    });
  }, [idUser]);

  useEffect(() => {
    getFavoris();
  }, [getFavoris]);

  const stylesSearchMovie = {
    gridList: {
      justifyContent: "center",
    },
    gridListTile: {
      width: "150px",
      height: "250px",
      marginTop: "70px",
      marginRight: "20px",
    },
    image: {
      cursor: "pointer",
    },
    title: {
      fontSize: "50px",
    },
    typo: {
      color: styles.secondaryColor,
      marginTop: "20px",
    },
    textError: {
      color: styles.secondaryColor,
      textAlign: "center",
      marginTop: "50vh",
      transform: "translateY(-50%)",
    },
  };

  const useStyles = makeStyles({
    listItemText: {
      color: `${styles.primaryColor}`,
    },
    label: {
      textTransform: "capitalize",
    },
    starIcon: {
      color: "rgb(228,181,88)",
      marginLeft: "10px",
      maginTop: "5px",
      cursor: "pointer",
    },
  });

  const deleteFavoris = async (e, idMovie) => {
    e.preventDefault();
    await apiFavoris.delete(`/favoris/${idMovie}/${state.user}`);
    getFavoris();
  };

  const classes = useStyles();

  return (
    <>
      {!isLoaded ? (
        <Loader />
      ) : favoris1.error ? (
        <p style={stylesSearchMovie.textError}>{favoris1.error}</p>
      ) : (
        favoris1.map((movie, index) => (
          <List key={index} classes={{}}>
            <ListItem>
              <img
                src={movie.img}
                alt={movie.title}
                style={stylesSearchMovie.gridListTile}
              />
              <ListItemText
                primary={
                  <React.Fragment>
                    <Typography>{movie.title}</Typography>
                  </React.Fragment>
                }
                // primary={`${movie.title}`}
                classes={{
                  root: classes.listItemText, // class name, e.g. `classes-nesting-root-x`
                }}
                className="test"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      style={stylesSearchMovie.typo}
                    >
                      {`${movie.details}`}
                    </Typography>

                    <StarIcon
                      className={classes.starIcon}
                      onClick={(e) => deleteFavoris(e, movie.idMovie)}
                    />

                    <Typography style={stylesSearchMovie.typo}>
                      {movie.description.length > 350
                        ? `${movie.description.substring(0, 350)} ...`
                        : movie.description}
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        ))
      )}
    </>
  );
};

export default Favoris;

/* <GridList style={stylesSearchMovie.gridList} >
        {favoris.length === 0 ? console.log('chargement') : favoris.map((movie,key) => (
          <GridListTile key={key} style={stylesSearchMovie.gridListTile} >
            <img  src={movie.img} alt={movie.title} />
            <GridListTileBar
              title={movie.title}
              actionIcon={
                <IconButton aria-label={`star ${movie.title}`}>
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>  */
