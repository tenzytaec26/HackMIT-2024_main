import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import Button from '../components/Button';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const AnalysisContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 2rem;
  animation: ${fadeIn} 0.8s ease-out;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: ${props => props.theme.primary};
  margin-bottom: 2rem;
  text-align: center;
`;

const UploadArea = styled.div`
  border: 2px dashed ${props => props.theme.primary};
  border-radius: 12px;
  padding: 3rem;
  text-align: center;
  margin-bottom: 2rem;
  cursor: pointer;
  width: 100%;
  max-width: 500px;
  transition: all 0.3s ease;
  background-color: ${props => props.theme.white};
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);

  &:hover {
    background-color: ${props => props.theme.background};
    transform: translateY(-5px);
  }
`;

const UploadText = styled.p`
  font-size: 1.2rem;
  color: ${props => props.theme.text};
`;

const HiddenInput = styled.input`
  display: none;
`;

const StyledButton = styled(Button)`
  font-size: 1.2rem;
  padding: 15px 40px;
`;

function SkinAnalysis() {
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/results');
  };

  return (
    <AnalysisContainer>
      <Title>Upload Your Skin Image</Title>
      <form onSubmit={handleSubmit}>
        <UploadArea onClick={() => document.getElementById('fileInput').click()}>
          {image ? (
            <img src={URL.createObjectURL(image)} alt="Uploaded skin" style={{ maxWidth: '100%', maxHeight: '300px' }} />
          ) : (
            <UploadText>Click here or drag and drop an image to start your analysis</UploadText>
          )}
        </UploadArea>
        <HiddenInput id="fileInput" type="file" onChange={handleImageUpload} accept="image/*" />
        <StyledButton type="submit" disabled={!image}>Start Analysis</StyledButton>
      </form>
    </AnalysisContainer>
  );
}

export default SkinAnalysis;