import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: calc(100vw - 230px);
  background-color: #121212;
  height: 40px;
  z-index: 200;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  left: 230px;
  right: 0;
  position: absolute;

  > div {
    display: flex;
    align-items: center;
  }
`;

export const Input = styled.input`
  background-color: transparent;
  width: 120px;
  border: none;
`;

export const InputContainer = styled.div`
  dipslay: flex;
  margin-left: 100px;
  width: 150px;
  align-items: center;
  justify-content: center;
  height: 20px;
  border: 0;
  border-radius: 20px;
  background-color: white;
  padding: 2px 5px;
`;

export const RateLink = styled.a`
  border: 1px solid #fff;
  background-color: transparent;
  color: white;
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
  padding: 3px 25px;
  border-radius: 40px;
  text-transform: uppercase;
  letter-spacing: 2px;

  &:hover {
    transform: scale(1.05);
  }
`;

export const InputIcon = styled.img`
  width: 10px;
  height: 10px;
  margin-right: 5px;
  margin-left: 10px;
`;

export const Dropdown = styled.div`
  position: absolute;
  right: 0;
  top: 30px;
`;

export const DropdownItem = styled.div``;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

export const ProfileImage = styled.img`
  filter: brightness(0) invert(1);
  width: 25px;
  height: 25px;
  margin-right: 10px;
  border: 0;
  border-radius: 50%;
`;

export const ProfileLink = styled(Link)`
  color: white;
  display: flex;
  align-items: center;
  font-size: 15px;
  letter-spacing: 1px;
  margin-left: 20px;
  text-decoration: none;
  font-weight: 50;

  &:hover {
    text-decoration: underline;
  }
`;

export const DropdownIcon = styled.img`
  width: 20px;
  height: 20px;
  filter: brightness(0) invert(1);
  margin-right: 40px;
`;
