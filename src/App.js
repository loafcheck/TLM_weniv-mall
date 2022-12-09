import {
  createGlobalStyle,
  ThemeProvider,
} from "styled-components";
import reset from "styled-reset";

import Router from "./pages/Router";
import { light } from "./styles/theme";

const GlobalStyle = createGlobalStyle`
  ${reset}
  a {
    text-decoration: none;
    color: inherit;
  }
  input,
  button {
    padding: 0;
    border: none;
    background: none;
    font-size: inherit;
    font: inherit;
  }
  button {
    cursor: pointer;
  }
  button:disabled {
    cursor: initial;
  }
  li {
    list-style: none;
  }

  body {
    * {
      font-family: 'Spoqa Han Sans Neo';
    }
  };
`;

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;
