import React from "react";
import { FirebaseContext } from "../context/Firebase";

function authListener() {
  const [user, setUser] = React.useState(
    JSON.parse(localStorage.getItem("authUser"))
  );
  const { Firebase } = React.useContext(FirebaseContext);

  React.useEffect(() => {
    const listener = Firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
        localStorage.setItem("authUser", JSON.stringify(authUser));
      } else {
        localStorage.removeItem("authUser");
        setUser(null);
      }

      return () => listener();
    });
  }, []);

  return { user };
}

export default authListener;
