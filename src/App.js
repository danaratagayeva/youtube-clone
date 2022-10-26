import styled, { ThemeProvider } from 'styled-components';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import { darkTheme, lightTheme } from './utils/Theme';
import { useState } from 'react';

const Container = styled.div`
  display: flex;
  /* position: relative; */
`;

const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bg};
`;
const Wrapper = styled.div``;

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <Menu setDarkMode={setDarkMode} darkMode={darkMode} />
        <Main>
          <Navbar />
          <Wrapper>
            <h1>afdsfsf</h1>
            <h1>afdsfsf</h1>
            <h1>afdsfsf</h1>
            <h1>afdsfsf</h1>
            <h1>afdsfsf</h1>
            <h1>afdsfsf</h1>
            <h1>afdsfsf</h1>
            <h1>afdsfsf</h1>
            <h1>afdsfsf</h1>
            <h1>afdsfsf</h1>
            <h1>afdsfsf</h1>
            <h1>afdsfsf</h1>
            <h1>afdsfsf</h1>
            <h1>afdsfsf</h1>
            <h1>afdsfsf</h1>
            <h1>afdsfsf</h1>
            <h1>afdsfsf</h1>
            <h1>afdsfsf</h1>
            <h1>afdsfsf</h1>
            <h1>afdsfsf</h1>
            <h1>afdsfsf</h1>
            <h1>afdsfsf</h1>
            <h1>afdsfsf</h1>
            <h1>afdsfsf</h1>
            <h1>afdsfsf</h1>
            <h1>afdsfsf</h1>
            <h1>afdsfsf</h1>
            <h1>afdsfsf</h1>
            <h1>afdsfsf</h1>
            <h1>afdsfsf</h1>
            <h1>afdsfsf</h1>
            <h1>afdsfsf</h1>
            <h1>afdsfsf</h1>
            <h1>afdsfsf</h1>
            <h1>afdsfsf</h1>
            <h1>afdsfsf</h1>
            <h1>afdsfsf</h1>
            <h1>afdsfsf</h1>
            <h1>afdsfsf</h1>
          </Wrapper>
        </Main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
