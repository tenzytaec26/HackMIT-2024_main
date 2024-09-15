import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import Home from './pages/Home';
import SkinAnalysis from './pages/SkinAnalysis';
import Results from './pages/Results';
import SkinSurvey from './pages/SkinSurvey';
import Products from './pages/Products';
import Community from './pages/Community';

const theme = {
  primary: '#4ECDC4',
  secondary: '#FF6B6B',
  background: '#F7FFF7',
  text: '#2C3E50',
  white: '#FFFFFF'
};

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${props => props.theme.background};
`;

const Header = styled.header`
  background-color: ${props => props.theme.white};
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  padding: 1rem 2rem;
`;

const LogoText = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--primary);
  text-decoration: none;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const StyledLink = styled(Link)`
  color: ${props => props.theme.text};
  text-decoration: none;
  font-weight: 500;
  &:hover {
    color: ${props => props.theme.primary};
  }
`;

const Main = styled.main`
  flex: 1;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const Footer = styled.footer`
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.white};
  text-align: center;
  padding: 1rem;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <AppContainer>
          <Header>
            <Nav>
            <LogoText>Skincare AI</LogoText>
              <NavLinks>
                <StyledLink to="/">Home</StyledLink>
                <StyledLink to="/survey">Survey</StyledLink>
                <StyledLink to="/analysis">Analysis</StyledLink>
                <StyledLink to="/products">Products</StyledLink>
                <StyledLink to="/community">Community</StyledLink>
              </NavLinks>
            </Nav>
          </Header>

          <Main>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/survey" element={<SkinSurvey />} />
            <Route path="/analysis" element={<SkinAnalysis />} />
            <Route path="/results" element={<Results />} />
            <Route path="/products" element={<Products />} />
            <Route path="/community" element={<Community />} />
            </Routes>
          </Main>

          <Footer>
            <p>&copy; 2024 Skincare AI. All rights reserved.</p>
          </Footer>
        </AppContainer>
      </Router>
    </ThemeProvider>
  );
}

export default App;