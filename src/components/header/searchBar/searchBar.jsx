import { InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import SearchSelect from "./SearchSelect";
import ResultSearchBar from "./resultSearchBar/ResultSearchBar";
import apiMovie, { apiMovieMap } from "../../conf/api.movies";

const SearchBar = ({
  searchBar,
  searchValue,
  setSearchValue,
  searchBarDisplay,
}) => {
  const [movieSearchList, setMovieSearchList] = useState({
    movies: null,
    loaded: false,
  });

  const updtateSearchMovies = (movies) => {
    setMovieSearchList({
      movies,
      loaded: true,
    });
  };
  const [typeMovie, setTypeMovie] = useState("movie");
  const [viewResult, setViewResult] = useState(true);

  let history = useHistory();

  //    document.body.addEventListener('click',() => {
  //     setViewResult(false)
  //  })

  const handleChange = (event) => {
    setTypeMovie(event.target.value);
  };

  const useStyles = makeStyles((theme) => ({
    blocSearchBar: {
      // display: "flex",
      // flexDirection: "column",
      width: "300px",
      [theme.breakpoints.down("sm")]: {
        position: "absolute",
        top: "56px",
        left: "5px",
      },
    },
    root: {
      padding: "2px 4px",
      display: "flex",
      width: "100%",
      alignItems: "center",
      backgroundColor: "black",
      border: "1px solid white",
      // marginLeft: "10px",
      position: "relative",

      // position:'absolute',
      // zIndex:'100'
    },
    rootNone: {
      display: "none",
      height: "100px",
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
      color: "white",
    },
    iconButton: {
      padding: 10,
    },
    searchIcon: {
      color: "white",
    },
    divider: {
      height: 28,
      margin: 4,
    },
  }));

  const classes = useStyles();

  const submit = (e) => {
    e.preventDefault();
    history.push({
      pathname: "/searchMovies",
      search: `?${searchValue}`,
      state: { movieSearchList, typeMovie },
    });
    searchBarDisplay(e);
  };

  const getMovies = useCallback(() => {
    apiMovie
      .get(`/search/${typeMovie}?query=${searchValue}`)
      .then((res) => {
        return res.data.results;
      })
      .then((m) => {
        const movie = m.map(apiMovieMap);
        updtateSearchMovies(movie);
      });
  }, [searchValue, typeMovie]);

  useEffect(() => {
    if (searchValue !== "") {
      getMovies();
      setViewResult(true);
    } else {
      return null;
    }
  }, [searchValue, getMovies]);

  return (
    <div className={classes.blocSearchBar}>
      <Paper
        component="form"
        onSubmit={submit}
        className={searchBar ? classes.root : classes.rootNone}
      >
        <InputBase
          className={classes.input}
          placeholder="Recherche"
          inputProps={{ "aria-label": "Recherche" }}
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
        <IconButton
          disabled={searchValue ? false : true}
          type="submit"
          className={classes.iconButton}
          aria-label="search"
        >
          <SearchIcon className={classes.searchIcon} />
        </IconButton>
        <Divider className={classes.divider} orientation="vertical" />
        <SearchSelect handleChange={handleChange} typeMovie={typeMovie} />
      </Paper>
      {searchValue && searchBar ? (
        <ResultSearchBar
          movieSearchList={movieSearchList}
          viewResult={viewResult}
          typeMovie={typeMovie}
          getMovies={getMovies}
          setViewResult={setViewResult}
        />
      ) : null}
    </div>
  );
};

export default SearchBar;
