import React from "react";
import {
  Container,
  Inner,
  Image,
  Title,
  Text,
  ToggleSwitch,
  ToggleCircle,
  Input,
  Button,
  Link,
  Formy,
  InputArea,
  CenterText,
  InputButton,
  PositionContainer,
  RememberMe,
  SeparatorBlock,
  SeparatorText,
  SeparatorBar,
  SocialContainer,
  SocialText,
} from "./styles/form";

function Form({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Form.Inner = function FormInner({ children, ...restProps }) {
  return <Inner {...restProps}>{children}</Inner>;
};

Form.Logo = function FormLogo({ ...restProps }) {
  return <Image {...restProps} />;
};

Form.CenterText = function FormCenterText({ children, ...restProps }) {
  return <CenterText {...restProps}>{children}</CenterText>;
};

Form.Title = function FormTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Form.Text = function FormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Form.ToggleSwitch = function FormToggleSwitch({ active, ...restProps }) {
  return (
    <ToggleSwitch {...restProps} active={active}>
      <ToggleCircle active={active} />
    </ToggleSwitch>
  );
};

Form.InputArea = function FormInputArea({ children, ...restProps }) {
  return <InputArea {...restProps}>{children}</InputArea>;
};

Form.InputButton = function FormInputButton({ active, ...restProps }) {
  return (
    <InputButton {...restProps}>{active ? "Скрыть" : "Показать"}</InputButton>
  );
};

Form.Input = function FormInput({ children, ...restProps }) {
  return <Input {...restProps}>{children}</Input>;
};

Form.RememberMe = function FormRememberMe({ children, ...restProps }) {
  return <RememberMe {...restProps}>{children}</RememberMe>;
};

Form.PositionContainer = function FormPositionContainer({
  children,
  ...restProps
}) {
  return <PositionContainer {...restProps}>{children}</PositionContainer>;
};

Form.Separator = function FormSeparator({ ...restProps }) {
  return (
    <SeparatorBlock>
      <SeparatorBar />
      <SeparatorText>ИЛИ</SeparatorText>
      <SeparatorBar />
    </SeparatorBlock>
  );
};

Form.Button = function FormButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};

Form.Link = function FormLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Form.Formy = function FormFormy({ children, ...restProps }) {
  return <Formy {...restProps}>{children}</Formy>;
};

Form.Social = function FormSocial({ children, src, ...restProps }) {
  return (
    <SocialContainer>
      <img src={src} alt="social" />
      <SocialText>{children}</SocialText>
    </SocialContainer>
  );
};

export default Form;
