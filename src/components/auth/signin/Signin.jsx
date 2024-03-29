import { Button, Input, InputLabel } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import React, { useContext } from "react";
import { useState } from "react";
// import { useHistory } from "react-router";
import apiUser from "../../conf/api.users";
import { AuthContext } from "../../context/contextAuth";
import styles from "../../styles/styles";
import Loader from "../../loader/Loader";
import ModalSignin from "./modalSignin/ModalSignin";

const Signin = ({ data, handleInputChange, setActionAuth }) => {
  //   const history = useHistory();
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useContext(AuthContext);
  const [loaderSignin, setLoaderSignin] = useState(false);
  const [signinModal, setsigninModal] = useState(true);
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
      padding: "0",
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

  const signinUser = async (e) => {
    e.preventDefault();
    // setLoaderSignin(true);
    await apiUser
      .post("/users/login", {
        email: data.email,
        password: data.password,
      })
      .then((res) => {
        setLoaderSignin(false);
        dispatch({
          type: "LOGIN",
          payload: {
            token: res.data.token,
            user: res.data.userId,
          },
        });
      })
      .catch((err) => {
        console.log(err);

        if (err.response) {
          setError(err.response.data.error);
        } else {
          setError(err.message);
        }
      });
  };

  return (
    <>
      <div
        style={{
          height: "80%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {loaderSignin ? (
          <Loader />
        ) : (
          <div style={{ width: "200px", height: "40%", textAlign: "center" }}>
            <div>
              <h2 style={{ color: styles.secondaryColor }}>Se connecter</h2>
            </div>
            <form
              onSubmit={signinUser}
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
              <InputLabel style={styleLogin.inputLabel} htmlFor="password">
                Mot de passe
              </InputLabel>
              <Input
                style={styleLogin.input}
                type="password"
                name="password"
                onChange={(e) => handleInputChange(e)}
              />
              {error && <p style={{ color: "red" }}>{error}</p>}
              <Button
                type="submit"
                style={styleLogin.buttonSend}
                variant="contained"
                color="primary"
              >
                {" "}
                Envoyer <SendIcon style={styleLogin.sendIcon} />
              </Button>
            </form>
            <p
              style={styleLogin.buttonSignin}
              onClick={() => setActionAuth("SIGNUP")}
            >
              S'inscrire
            </p>
          </div>
        )}
      </div>
      {
        <ModalSignin
          signinModal={signinModal}
          setsigninModal={setsigninModal}
        />
      }
    </>
  );
};

export default Signin;
