import { Container, NumberContainer } from "./styles";
import { useHistory } from "react-router";

const UserNumbers = (props) => {
  const history = useHistory();
  const handleOnCLick = (route) => history.push(route);

  return (
    <Container>
      <NumberContainer onClick={() => handleOnCLick("/repos")}>
        <h1>{props?.repos}</h1>
        <h2>Repositórios</h2>
      </NumberContainer>
      <NumberContainer>
        <h1>{props?.followers}</h1>
        <h2>Seguidores</h2>
      </NumberContainer>
      <NumberContainer>
        <h1>{props?.following}</h1>
        <h2>Seguindo</h2>
      </NumberContainer>
    </Container>
  );
};
export default UserNumbers;

//() => handleOnCLick('/repos') - () Captura o evento pra depois a função handleOnCLick disparar e enviar pra rota '/repos'.
