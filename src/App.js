import styled, { ThemeProvider } from 'styled-components';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import { darkTheme, lightTheme } from './utils/Theme';

const Container = styled.div`
  display: flex;
  /* position: relative; */
`;

const Main = styled.div`
  flex: 7;
  background-color: #181818;
`;
const Wrapper = styled.div``;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Menu />
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
