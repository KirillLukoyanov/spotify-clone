import React from "react";
import { Route, Redirect } from "react-router-dom";

export function IsUserRedirect({ user, children, path, loggedInPath }) {
  return (
    <Route
      path={path}
      render={() => {
        if (!user) {
          return children;
        } else {
          return <Redirect to={{ pathname: loggedInPath }} />;
        }
      }}
    />
  );
}

export function ProtectedRoute({ user, children, path }) {
  return (
    <Route
      path={path}
      render={() => {
        if (user) {
          return children;
        } else {
          return <Redirect to={{ pathname: "signin" }} />;
        }
      }}
    />
  );
}
