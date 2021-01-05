import React from "react";
import { Form } from "../components/index";
import { FirebaseContext } from "../context/Firebase";
import { useHistory } from "react-router-dom";
import * as ROUTES from "../routes/routes";

function Signin() {
  const [showPass, setShowPass] = React.useState(false);
  const [rememberme, setRememberme] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { Firebase } = React.useContext(FirebaseContext);
  const history = useHistory();

  const login = (e) => {
    e.preventDefault();
    Firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push(ROUTES.MAIN);
      })
      .catch((error) => {
        setEmail("");
        setPassword("");
        console.log(error);
      });
  };

  return (
    <Form>
      <Form.Inner>
        <Form.Logo src={"/images/logo/FormLogo.png"} alt="logo" />
        <Form.CenterText>
          <Form.Title>Чтобы продолжить, войди в аккаунт.</Form.Title>
        </Form.CenterText>
        <Form.Formy onSubmit={login} method="POST">
          <Form.InputArea>
            <Form.Input
              placeholder="Электронная почта"
              type="email"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
          </Form.InputArea>
          <Form.InputArea>
            <Form.Input
              placeholder="Пароль"
              type={showPass ? "text" : "password"}
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.InputButton
              active={showPass}
              onClick={() => setShowPass((prev) => !prev)}
            />
          </Form.InputArea>
          <Form.PositionContainer
            direction="row"
            justifyContent="space-between"
          >
            <Form.RememberMe onClick={() => setRememberme((prev) => !prev)}>
              Запомнить меня
            </Form.RememberMe>
            <Form.ToggleSwitch
              active={rememberme}
              onClick={() => setRememberme((prev) => !prev)}
            />
          </Form.PositionContainer>
          <Form.Button backgroundColor="white" color="black">
            Войти
          </Form.Button>
        </Form.Formy>
        <Form.Separator />
        <Form.Social src="/images/social/facebook.png">
          Войти через FaceBook
        </Form.Social>
        <Form.Social src="/images/social/google.png">
          Войти через Google
        </Form.Social>
        <Form.Social src="/images/social/apple.png">
          Войти через Apple
        </Form.Social>
        <Form.Text>
          Ещё нет аккаунта? <Form.Link to="/signup">Зарегистрируйся</Form.Link>
        </Form.Text>
      </Form.Inner>
    </Form>
  );
}

export default Signin;
