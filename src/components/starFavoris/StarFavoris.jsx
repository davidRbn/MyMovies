import { IconButton, ImageListItemBar } from "@material-ui/core";
import React, { useCallback, useContext, useEffect, useState } from "react";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";
import apiFavoris from "../conf/api.Favoris";
import { AuthContext } from "../context/contextAuth";
import ModalFavoris from "./modalFavoris/ModalFavoris";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../styles/styles";

const StarFavoris = ({ movie, favoris, setFavoris, setFavorisChange }) => {
  // eslint-disable-next-line no-unused-vars
  const [, setFavorisValidation] = useState({});
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useContext(AuthContext);

  //  const tokenUser = localStorage.getItem('token')
  //  const _isMounted = useRef(true);
  const [favorisModal, setFavorisModal] = useState(false);

  const stylesFavoris = makeStyles(() => ({
    title: {
      fontSize: "12px",
      color: styles.secondaryColor,
    },
    starBorderIcon: {
      color: "rgb(228,181,88)",
    },
    starIcon: {
      color: "rgb(228,181,88)",
    },
  }));

  const isFavorite = useCallback(() => {
    let isFavorite = false;
    if (favoris.length > 0) {
      let fav = favoris.filter((fav) => fav.idMovie === `${movie.id}`);
      if (fav.length > 0) {
        isFavorite = true;
      } else {
        isFavorite = false;
      }
    }
    return isFavorite;
  }, [favoris, movie.id]);

  useEffect(() => {
    if (state.isAuthenticated) {
      isFavorite();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [favoris.length]);

  const handleModalFavoris = () => {
    return setFavorisModal(!favorisModal);
  };

  const postFavoris = async (e) => {
    e.preventDefault();
    if (state.isAuthenticated) {
      await apiFavoris
        .post(`/favoris/${state.user}`, {
          idMovie: `${movie.id}`,
          img: movie.img,
          title: movie.title,
          details: movie.details,
          description: movie.description,
          typeMovie: movie.typeMovie,
          userUid: state.user,
        })
        .then((res) => {
          setFavoris((fav) => [...fav, res.data]);
          setFavorisChange(true);
        })
        .catch((err) => console.log(err));
    } else {
      handleModalFavoris();
    }
  };

  // ,{headers : {'Authorization' : tokenUser}}

  const deleteFavoris = async (e) => {
    e.preventDefault();
    await apiFavoris
      .delete(`/favoris/${movie.id}/${state.user}`)
      .then((res) => {
        setFavorisValidation(res);
        console.log(movie.id);
        const favFilter = favoris.map((fav) => fav.idMovie !== `${movie.id}`);
        setFavoris(favFilter);
      });
    setFavorisChange(true);
  };

  const classes = stylesFavoris();

  return (
    <>
      {
        <ImageListItemBar
          classes={{
            title: classes.title,
          }}
          onClick={
            isFavorite() ? (e) => deleteFavoris(e) : (e) => postFavoris(e)
          }
          title={movie.title}
          actionIcon={
            <IconButton>
              {/* aria-label={`star ${movie.movie.title}`} */}

              {isFavorite() ? (
                <StarIcon className={classes.starIcon} />
              ) : (
                <StarBorderIcon className={classes.starBorderIcon} />
              )}
            </IconButton>
          }
        />
      }
      {
        <ModalFavoris
          favorisModal={favorisModal}
          handleModalFavoris={handleModalFavoris}
        />
      }
    </>
  );
};

export default StarFavoris;
