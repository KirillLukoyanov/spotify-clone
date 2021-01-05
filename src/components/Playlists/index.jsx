import React from "react";
import { Container } from "./styles/playlists";
import { FirebaseContext } from "../context/Firebase";

function Playlist() {
  const { Firebase } = React.useContext(FirebaseContext);
  return <Container></Container>;
}

export default Playlist;
