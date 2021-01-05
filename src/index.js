import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { FirebaseContext } from "./context/Firebase";
import { Firebase } from "./firebase/firebase.prod.js";
import { GlobalStyle } from "./global-styles";

ReactDOM.render(
  <Router>
    <FirebaseContext.Provider value={{ Firebase }}>
      <GlobalStyle />
      <App />
    </FirebaseContext.Provider>
  </Router>,
  document.getElementById("root")
);
