import React from "react";
import { Header } from "../components/";
import { HeaderContext } from "../context/Header";
import { FirebaseContext } from "../context/Firebase";
import { Dropdown, DropdownItem } from "../components/Header/styles/header";

function HeaderContainer() {
  const { headerSearchInput, setHeaderSearchInput } = React.useContext(
    HeaderContext
  );

  const { Firebase } = React.useContext(FirebaseContext);
  const user = Firebase.auth().currentUser;
  console.log(user);
  return (
    <Header>
      <div>
        <Header.InputContainer>
          <Header.InputIcon src="/images/header/loupe.png" alt="loupe" />
          <Header.Input
            placeholder="поиск"
            value={headerSearchInput}
            onChange={({ target }) => setHeaderSearchInput(target.value)}
          />
        </Header.InputContainer>
      </div>
      <div>
        <Header.ProfileRate href="https://www.spotify.com/us/premium/?utm_source=spotify&utm_medium=product-KM&utm_campaign=nav-upgrade">
          Сменить тариф
        </Header.ProfileRate>
        <Header.Profile>
          <Header.ProfileLink>
            <Header.ProfileImage src="/images/header/user.png" alt="user" />
            {user && user.displayName}
          </Header.ProfileLink>
        </Header.Profile>
        <Header.DropdownIcon src="/images/header/dropdown.png" />
        <Dropdown>
          <DropdownItem>Выйти</DropdownItem>
        </Dropdown>
      </div>
    </Header>
  );
}

export default HeaderContainer;
