import styled from "styled-components/macro";
import { Link as RouteLink } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #121212;
  flex-basis: 230px;
`;

export const Header = styled.div`
  height: 130px;
  width: 100%;
  margin-top: 20px;
`;

export const Tab = styled(RouteLink)`
  width: 165px;
  height: 20px;
  display: flex;
  align-items: center;
  ${({ active }) =>
    active
      ? "border-left: 4px solid #1db954;"
      : "border-left: 4px solid #121212"};
  padding: 10px 30px;
  font-weight: bold;
  font-size: 14px;
  color: ${({ active }) => (active ? `#fff` : "#b3b3b3")};
  text-decoration: none;
  cursor: default;

  &:hover {
    color: #fff;
  }

  > img {
    width: 21px;
    height: 21px;
    filter: brightness(0) invert(1);
    margin-right: 10px;
  }
`;

export const MediaLibrary = styled.div`
  width: 100%;
  height: 140px;
`;

export const SidebarTitle = styled.h1`
  color: #b3b3b3;
  font-size: 14px;
  font-weight: 100;
  text-transform: uppercase;
  padding: 10px 30px;
  width: 100%;
  user-select: none;
`;
