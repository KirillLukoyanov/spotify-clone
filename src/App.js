import { IsUserRedirect, ProtectedRoute } from "./hooks/routes";
import React from "react";
import { Switch } from "react-router-dom";
import * as ROUTES from "./routes/routes";
import {
  Signin,
  Signup,
  Profile,
  Main,
  Radio,
  Browse,
  Favourite,
  Artists,
  Foryou,
  Recently,
  Albums,
} from "./pages";
import authListener from "./helpers/authListener";
import { PlayerContainer, HeaderContainer } from "./containers/";
import { HeaderContext } from "./context/Header";
import { PlayerContext } from "./context/Player";

function App() {
  const { user } = authListener();
  const [headerSearchInput, setHeaderSearchInput] = React.useState("");
  return (
    <>
      <Switch>
        <IsUserRedirect
          user={user}
          path={ROUTES.SIGN_IN}
          loggedInPath={ROUTES.MAIN}
        >
          <Signin />
        </IsUserRedirect>
        <IsUserRedirect
          user={user}
          path={ROUTES.SIGN_UP}
          loggedInPath={ROUTES.MAIN}
        >
          <Signup />
        </IsUserRedirect>
        <ProtectedRoute user={user} path={ROUTES.PROFILE}>
          <Profile />
        </ProtectedRoute>
        <ProtectedRoute user={user} path={ROUTES.RADIO}>
          <Radio />
        </ProtectedRoute>
        <ProtectedRoute user={user} path={ROUTES.BROWSE}>
          <Browse />
        </ProtectedRoute>
        <ProtectedRoute user={user} path={ROUTES.FORYOU}>
          <Foryou />
        </ProtectedRoute>
        <ProtectedRoute user={user} path={ROUTES.RECENTLYLISTENED}>
          <Recently />
        </ProtectedRoute>
        <ProtectedRoute user={user} path={ROUTES.ALBUMS}>
          <Albums />
        </ProtectedRoute>
        <ProtectedRoute user={user} path={ROUTES.ARTISTS}>
          <Artists />
        </ProtectedRoute>
        <ProtectedRoute user={user} path={ROUTES.FAVOURITE}>
          <Favourite />
        </ProtectedRoute>
        <ProtectedRoute user={user} path={ROUTES.MAIN}>
          <Main />
        </ProtectedRoute>
      </Switch>
      <ProtectedRoute user={user}>
        <PlayerContainer />
      </ProtectedRoute>
      <HeaderContext.Provider
        value={{ headerSearchInput, setHeaderSearchInput }}
      >
        <ProtectedRoute user={user}>
          <HeaderContainer />
        </ProtectedRoute>
      </HeaderContext.Provider>
    </>
  );
}

export default App;
