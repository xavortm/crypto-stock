import Single from "./components/layout/Single";
import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />

      <Single />
    </div>
  );
};

const GlobalStyle = createGlobalStyle`
  ${normalize}

  body {
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
  }
`;

export default App;
