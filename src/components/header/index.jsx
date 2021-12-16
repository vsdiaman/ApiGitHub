import React, { useState, useContext } from "react";
import { FiSearch } from "react-icons/fi";
import client from "../../services/client";
import { context } from "../../context";

import {
  HeaderSection,
  HeaderTitle,
  HeaderInputContainer,
  HeaderInput,
  HeaderSearchButton,
} from "./styles";

const Header = () => {
  const ctx = useContext(context); //passa a ter acesso as duas informações importadas do irmao salvo no context(userData e setuserData).
  const [searchValue, setSearchValue] = useState("");

  async function getUserData() {
    try {
      const response = await client.get(`/${searchValue}`); //metodo http é get e passando o sufixo
      const repos = await client.get(`/${searchValue}/repos`);

      ctx.setUserData(response.data); // Com essa informação ele vai alterar aonde o contexto for chamado
      ctx.setRepos(repos.data);

      console.log(response.data); //Peguei os dados, agora é pegar os dados e salvar
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <HeaderSection>
      <HeaderTitle>Github Profile</HeaderTitle>
      <HeaderInputContainer>
        <HeaderInput
          value={searchValue} // Valor, estado atual
          onChange={(e) => setSearchValue(e.target.value)} // setSerachValue é function para atualizar o estado atual e e.target para acessar o evento
        />

        <HeaderSearchButton onClick={getUserData}>
          <FiSearch size={15} />
        </HeaderSearchButton>
      </HeaderInputContainer>
    </HeaderSection>
  );
};

export default Header;
