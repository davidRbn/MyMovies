import React, { useContext, useState } from "react";
import IconSearch from "./searchBar/IconSearch";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import Auth from "./auth/Auth";
import SearchBar from "./searchBar/searchBar";
import { Link, useHistory } from "react-router-dom";
import AuthDisconnect from "./authDiconnect/AuthDisconnect";
import { AuthContext } from "../context/contextAuth";
import styles from "../styles/styles";

const Header = () => {
  const [searchBar, setSearchBar] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useContext(AuthContext);
  let history = useHistory();

  const searchBarDisplay = (e) => {
    e.preventDefault();
    setSearchValue("");
    setSearchBar(!searchBar);
  };

  const closeSearchBar = () => {
    setSearchBar(false);
  };

  const viewFavoris = (e) => {
    e.preventDefault();
    history.push("/favoris");
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    appBar: {
      backgroundColor: "#141414",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton> */}
            <Typography variant="h6" className={classes.title}>
              <Link
                style={{ color: styles.primaryColor, textDecoration: "none" }}
                to="/"
                onClick={() => setSearchBar(false)}
              >
                MYmovies
              </Link>
            </Typography>
            <SearchBar
              searchBar={searchBar}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              searchBarDisplay={searchBarDisplay}
            />
            {state.isAuthenticated && (
              <Button
                onClick={(e) => viewFavoris(e)}
                style={{ color: styles.secondaryColor }}
              >
                Mes Favoris
              </Button>
            )}
            <Button
              onClick={(e) => searchBarDisplay(e)}
              color="inherit"
              style={{ color: styles.secondaryColor }}
            >
              <IconSearch />
            </Button>
            <Button color="inherit" style={{ color: styles.secondaryColor }}>
              <Auth closeSearchBar={closeSearchBar} />
            </Button>
            {state.isAuthenticated && <AuthDisconnect />}
          </Toolbar>
        </AppBar>
      </div>
      {/* {searchBar&&<SearchBar/>} */}
      {/* <SearchBar searchBar={searchBar}/> */}
    </>
  );
};

export default Header;
