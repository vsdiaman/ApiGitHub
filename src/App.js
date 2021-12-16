import RoutesRoute from "./Routes";
import { ContextProvider } from "./context";

const App = () => (
  <ContextProvider>
    <RoutesRoute />
  </ContextProvider>
);

export default App;
