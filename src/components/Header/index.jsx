import React from "react";
import {
  Container,
  Input,
  InputContainer,
  InputIcon,
  Dropdown,
  DropdownItem,
  Profile,
  ProfileImage,
  ProfileLink,
  RateLink,
  DropdownIcon,
} from "./styles/header";

function Header({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Header.Input = function HeaderInput({ ...restProps }) {
  return <Input {...restProps} />;
};

Header.InputContainer = function HeaderInputContainer({
  children,
  ...restProps
}) {
  return <InputContainer {...restProps}>{children}</InputContainer>;
};

Header.DropdownIcon = function HeaderDropdownIcon({ children, ...restProps }) {
  return <DropdownIcon {...restProps}>{children}</DropdownIcon>;
};

Header.InputIcon = function HeaderInputIcon({ ...restProps }) {
  return <InputIcon {...restProps} />;
};

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
  return <Dropdown {...restProps}>{children}</Dropdown>;
};

Header.DropdownItem = function HeaderDropdownItem({ children, ...restProps }) {
  return <DropdownItem {...restProps}>{children}</DropdownItem>;
};

Header.Profile = function HeaderProfile({ children, ...restProps }) {
  return <Profile {...restProps}>{children}</Profile>;
};

Header.ProfileImage = function HeaderProfileImage({ ...restProps }) {
  return <ProfileImage {...restProps} />;
};

Header.ProfileLink = function HeaderProfileLink({ children, ...restProps }) {
  return <ProfileLink {...restProps}>{children}</ProfileLink>;
};

Header.ProfileRate = function HeaderProfileRate({ children, ...restProps }) {
  return <RateLink {...restProps}>{children}</RateLink>;
};

export default Header;
