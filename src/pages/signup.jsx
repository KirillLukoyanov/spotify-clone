import React from "react";
import { Form } from "../components/index";
import { FirebaseContext } from "../context/Firebase";
import { useHistory } from "react-router-dom";
import * as ROUTES from "../routes/routes";

function Signup() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { Firebase } = React.useContext(FirebaseContext);
  const history = useHistory();
  const [showPass, setShowPass] = React.useState(false);
  const [name, setName] = React.useState("");

  const register = (e) => {
    e.preventDefault();
    Firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        result.user
          .updateProfile({
            displayName: name,
            photoUrl: null,
            musicForMe: null,
            recentlyListened: null,
            favouriteMusic: null,
            alboms: null,
            artists: null,
            playlists: null,
          })
          .then(() => {
            history.push(ROUTES.MAIN);
          })
          .catch(() => console.log("Profile updating error!"));
      })
      .catch((error) => {
        setEmail("");
        setName("");
        setPassword("");
        console.log(error.message);
      });
  };

  return (
    <Form>
      <Form.Inner>
        <Form.Logo src={"/images/logo/FormLogo.png"} alt="logo" />
        <Form.CenterText>
          <Form.Title>
            Зарегистрируйся, чтобы слушать любимую музыку.
          </Form.Title>
        </Form.CenterText>
        <Form.Formy onSubmit={register} method="POST">
          <Form.InputArea>
            <Form.Input
              placeholder="Имя"
              type="text"
              value={name}
              onChange={({ target }) => setName(target.value)}
            />
          </Form.InputArea>
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
          <Form.Button backgroundColor="#1ed761" color="white">
            Продолжить
          </Form.Button>
        </Form.Formy>
        <Form.Separator />
        <Form.Social src="/images/social/facebook.png">
          Зарегистрировать через FaceBook
        </Form.Social>
        <Form.Social src="/images/social/google.png">
          Зарегистрировать через Google
        </Form.Social>
        <Form.Social src="/images/social/apple.png">
          Зарегистрировать через Apple
        </Form.Social>
        <Form.Text>
          Есть аккаунт? <Form.Link to="/signin">ВОЙДИ</Form.Link>
        </Form.Text>
      </Form.Inner>
    </Form>
  );
}

export default Signup;
