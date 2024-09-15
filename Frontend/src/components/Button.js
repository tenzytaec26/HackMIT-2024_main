import styled from 'styled-components';

const Button = styled.button`
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.white};
  padding: 12px 24px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(78,205,196,0.2);

  &:hover {
    background-color: ${props => props.theme.secondary};
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(255,107,107,0.3);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(255,107,107,0.3);
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
    box-shadow: none;
  }
`;

export default Button;