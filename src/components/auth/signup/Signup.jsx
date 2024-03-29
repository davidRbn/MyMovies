import { Button, Input, InputLabel } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import React, { useState } from "react";
import apiUser from "../../conf/api.users";
import Loader from "../../loader/Loader";
import styles from "../../styles/styles";

const Signup = ({ data, setActionAuth, handleInputChange }) => {
  const [loaderSignup, setLoaderSignup] = useState(false);
  const [error, setError] = useState(null);

  const styleLogin = {
    inputLabel: {
      marginTop: "20px",
      color: styles.secondaryColor,
    },
    input: {
      borderBottom: `1px solid ${styles.secondaryColor}`,
      color: styles.secondaryColor,
    },
    buttonSend: {
      height: "30px",
      width: "200px",
      marginTop: "20px",
      color: styles.thirdColor,
      backgroundColor: styles.primaryColor,
    },
    sendIcon: {
      paddingLeft: "10px",
    },
    buttonSignin: {
      cursor: "pointer",
      color: styles.secondaryColor,
    },
  };

  const registerUser = async (e) => {
    e.preventDefault();
    await apiUser
      .post("/users/register", {
        email: data.email,
        username: data.name,
        password: data.password,
      })
      .then((res) => {
        setLoaderSignup(false);
        console.log("register");
        console.log(res);
      })
      .catch((err) => {
        if (err.response) {
          setError(err.response.data.error);
        } else {
          setError(err.message);
        }
        // console.log(err);
        // console.error(err.message);
        // console.error(err.response);
        // console.error(err.response.status);
      });
    // setActionAuth("SIGNIN");
  };

  return (
    <div
      style={{
        height: "80%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {loaderSignup ? (
        <Loader />
      ) : (
        <div
          style={{
            width: "200px",
            height: "40%",
            textAlign: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <h2 style={{ color: styles.secondaryColor }}>S'inscrire</h2>
          </div>
          <form
            onSubmit={registerUser}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <InputLabel style={styleLogin.inputLabel} htmlFor="email">
              Email
            </InputLabel>
            <Input
              style={styleLogin.input}
              type="email"
              name="email"
              onChange={(e) => handleInputChange(e)}
            />
            <InputLabel style={styleLogin.inputLabel} htmlFor="name">
              Name
            </InputLabel>
            <Input
              style={styleLogin.input}
              type="text"
              name="name"
              onChange={(e) => handleInputChange(e)}
            />
            <InputLabel style={styleLogin.inputLabel} htmlFor="password">
              Mot de passe
            </InputLabel>
            {error && <p style={{ color: "red" }}>{error}</p>}

            <Input
              style={styleLogin.input}
              type="password"
              name="password"
              onChange={(e) => handleInputChange(e)}
            />

            <Button
              type="submit"
              style={styleLogin.buttonSend}
              variant="contained"
            >
              {" "}
              Envoyer <SendIcon style={styleLogin.sendIcon} />
            </Button>
          </form>
          <p
            style={styleLogin.buttonSignin}
            onClick={() => setActionAuth("SIGNIN")}
          >
            Se connecter
          </p>
        </div>
      )}
    </div>
  );
};

export default Signup;
