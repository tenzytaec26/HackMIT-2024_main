import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import Button from '../components/Button';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 6rem 1rem;
  animation: ${fadeIn} 0.8s ease-out;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  color: ${props => props.theme.primary};
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
`;

const Subtitle = styled.p`
  font-size: 1.3rem;
  color: ${props => props.theme.text};
  max-width: 700px;
  margin-bottom: 3rem;
  line-height: 1.6;
`;

const StyledButton = styled(Button)`
  font-size: 1.2rem;
  padding: 15px 40px;
  box-shadow: 0 4px 6px rgba(78,205,196,0.2);
`;

function Home() {
  return (
    <HomeContainer>
      <Title>Revolutionize Your Skincare Routine</Title>
      <Subtitle>
        Experience the power of AI-driven skin analysis. Upload a photo and receive 
        personalized skincare recommendations tailored just for you. Say hello to 
        your best skin ever!
      </Subtitle>
      <Link to="/survey">
      <StyledButton>Start Your Skin Assessment</StyledButton>
      </Link>
    </HomeContainer>
  );
}

export default Home;