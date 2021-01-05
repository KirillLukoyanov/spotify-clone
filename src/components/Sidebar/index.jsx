import React from "react";
import {
  Container,
  Header,
  Tab,
  SidebarTitle,
  MediaLibrary,
} from "./styles/sidebar";

function Sidebar({ activeTab, ...restProps }) {
  return (
    <Container {...restProps}>
      <Header>
        <Tab active={activeTab === "Main"} to="/main">
          <img
            src={`/images/sidebar/${
              activeTab === "Main" ? "home.png" : "home _notactive.png"
            }`}
          />
          Главная
        </Tab>
        <Tab active={activeTab === "View"} to="/browse">
          <img
            src={`/images/sidebar/${
              activeTab === "View" ? "mp3-player_active.png" : "mp3-player.png"
            }`}
          />
          Обзор
        </Tab>
        <Tab active={activeTab === "Radio"} to="/radio">
          <img
            src={`/images/sidebar/${
              activeTab === "Radio" ? "antenna_active.png" : "antenna.png"
            }`}
          />
          Радио
        </Tab>
      </Header>

      <MediaLibrary>
        <SidebarTitle>Моя медиатека</SidebarTitle>
        <Tab active={activeTab === "foryou"} to="/foryou">
          Для тебя
        </Tab>
        <Tab active={activeTab === "recentlylistened"} to="/recentlylistened">
          Недавно прослушано
        </Tab>
        <Tab active={activeTab === "favourite"} to="/favourite">
          Любимые треки
        </Tab>
        <Tab active={activeTab === "Albums"} to="/albums">
          Альбомы
        </Tab>
        <Tab active={activeTab === "Artists"} to="artists">
          Исполнители
        </Tab>
      </MediaLibrary>
    </Container>
  );
}

export default Sidebar;
