import React, { useContext, useState } from "react";
import Signin from "./signin/Signin";
import Signup from "./signup/Signup";
import { AuthContext } from "../context/contextAuth";
import { Redirect } from "react-router";

const Auth = () => {
  const [actionAuth, setActionAuth] = useState("SIGNIN");
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useContext(AuthContext);

  const initialState = {
    email: "",
    name: "",
    password: "",
    isSubmitting: false,
    errorMessage: null,
  };

  const [data, setData] = React.useState(initialState);

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      {state.isAuthenticated ? (
        <Redirect to="/" />
      ) : actionAuth === "SIGNIN" ? (
        <>
          <Signin
            data={data}
            setData={setData}
            handleInputChange={handleInputChange}
            setActionAuth={setActionAuth}
          />
        </>
      ) : actionAuth === "SIGNUP" ? (
        <Signup
          data={data}
          setData={setData}
          handleInputChange={handleInputChange}
          setActionAuth={setActionAuth}
        />
      ) : (
        <p>Une erreur est survenue</p>
      )}
    </>
  );
};

export default Auth;
