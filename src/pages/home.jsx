import React, { useContext } from "react";

import Container from "../components/container";
import Header from "../components/header";
import UserContainer from "../components/userContainer";
import UserPicture from "../components/userPicture";
import UserDetails from "../components/userDatails";
import UserNumbers from "../components/userNumbers";

import { context } from "../context/index"; // com os dados salvo no context, coseguimos ter acesso as informações

export default function Home() {
  const ctx = useContext(context);

  return (
    <Container>
      <Header />
      <UserContainer>
        <UserPicture
          url={ctx.userData?.avatar_url}
          alternativeText={ctx.userData?.login}
        />
        <UserDetails
          name={ctx.userData?.name}
          login={ctx.userData?.login}
          bio={ctx.userData.bio}
        />
        <UserNumbers
          repos={ctx.userData?.public_repos} //sendRepos envia via props pro userNumbers
          followers={ctx.userData?.followers} //sendFollowers envia via props pro userNumbers
          following={ctx.userData?.following} //sendFolloring envia via props por userNumbers
        />
      </UserContainer>
    </Container>
  );
}
