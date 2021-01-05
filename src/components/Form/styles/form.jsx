import styled from "styled-components/macro";
import { Link as RouteLink } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2c2c2c;
`;

export const Inner = styled.div`
  width: 500px;
  display: flex;
  padding: 10x 5px 50px 5px;
  flex-direction: column;
  align-items: center;
  background-color: #1b1b1b;
  border: 0;
  border-radius: 5px;
`;

export const Image = styled.img`
  width: 150px;
  padding: 30px;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
  width: 100%;
  height: 50px;
  font-size: 15px;
  font-weight: bold;
  letter-spacing: 1px;
  border: 0;
  border-radius: 30px;
  text-transform: uppercase;
  transition: 0.2s;
  cursor: pointer;
  margin-bottom: 30px;

  &:hover {
    transform: scale(1.02);
  }
`;

export const Title = styled.h1`
  color: white;
  font-size: 32px;
`;

export const Text = styled.p`
  font-size: 16px;
  color: #808080;
  letter-spacing: 1px;
  font-weight: bold;
  margin-bottom: 30px;
`;

export const Link = styled(RouteLink)`
  text-transform: uppercase;
  color: white;
`;

export const Formy = styled.form``;

export const Input = styled.input`
  background-color: transparent;
  width: 400px;
  padding: 4px;
  font-size: 14px;
  font-weight: bold;
  outline: none;
  border: none;
  color: white;
`;

export const ToggleCircle = styled.div`
  width: 20px;
  height: 20px;
  padding: 2px;
  border: 0;
  border-radius: 50%;
  z-index: 20;
  ${({ active }) =>
    active
      ? `right: -3px; margin-right: -2px; background-color: #fff;`
      : `left: -3px; margin-left: -2px; background-color: #888888;`}
  top: -2.5px;
`;

export const ToggleSwitch = styled.div`
  width: 40px;
  height: 20px;
  display: flex;
  border: 2px solid #505050;
  align-items: center;
  border-radius: 15px;
  background-color: #000;
  cursor: pointer;

  ${({ active }) =>
    active
      ? `background-color: #00ff00; justify-content: flex-end;`
      : `background-color: #000; justify-content: flex-start;`}

  &:hover ${ToggleCircle} {
    background-color: #fff;
  }
`;

export const InputArea = styled.div`
  width: 400px;
  height: 25px;
  background-color: #2c2c2c;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

export const InputButton = styled.p`
  color: white;
  cursor: pointer;
  margin-left: 5px;
  font-weight: bold;
  user-select: none;
`;

export const CenterText = styled.div`
  text-align: center;
  width: 350px;
  margin-bottom: 40px;
`;

export const RememberMe = styled.span`
  color: #686868;
  cursor: pointer;
  display: inline;
`;

export const PositionContainer = styled.div`
  max-width: 420px;
  width: 100%;
  display: flex;
  flex-direction: ${({ direction }) => direction};
  ${({ align }) => (align ? `align-items: ${align}` : "")};
  ${({ justifyContent }) =>
    justifyContent ? `justify-content: ${justifyContent}` : ""};
  margin-bottom: 30px;
`;

export const SeparatorBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 30;
  width: 400px;
  margin-bottom: 30px;
`;

export const SeparatorBar = styled.span`
  height: 1px;
  width: 150px;
  background-color: #888888;
`;

export const SeparatorText = styled.p`
  color: #888888;
`;

export const SocialContainer = styled.div`
  width: 400px;
  height: 50px;
  background-color: transparent;
  border: 1px solid #fff;
  border-radius: 30px;
  text-decoration: none;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
  margin-bottom: 20px;
  cursor: pointer;
  transition: 0.2s ease;

  &:last-of-type {
    margin-bottom: 30px;
  }

  &:hover {
    transform: scale(1.02);
  }

  > img {
    width: 24px;
    height: 24px;
    position: absolute;
    top: 12px;
    left: 20px;
  }
`;

export const SocialText = styled.p`
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  color: white;
`;
