import logo from './logo.svg';
import './App.css';
import { Button } from "@chakra-ui/react";
import styled from "@emotion/styled";


const StyledButton = styled(Button)`
  background-color: blue;
  color: white;
`;

function MyButton() {
  return (
    <StyledButton>
      Login
    </StyledButton>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://google.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
      <h1>Hello World!</h1>
      <MyButton />
    </div>
      </header>
    </div>
  );
}

export default App;
