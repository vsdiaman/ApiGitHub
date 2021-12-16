import React, { useContext } from "react";

import Container from "../components/container";
import ReposContainer from "../components/reposContainer/index";

import { context } from "../context";

const Repos = () => {
  const ctx = useContext(context);

  return (
    <Container>
      <ReposContainer name={ctx.userData?.name} repos={ctx.repos} />
    </Container>
  );
};
export default Repos;
