import React from 'react';
import styled from 'styled-components';

const CommunityContainer = styled.div`
  padding: 2rem;
`;

const CommunityTitle = styled.h1`
  font-size: 2.5rem;
  color: ${props => props.theme.primary};
  margin-bottom: 2rem;
  text-align: center;
`;

function Community() {
  return (
    <CommunityContainer>
      <CommunityTitle>Community</CommunityTitle>
      <p>This is where users can discuss skincare topics and share experiences.</p>
    </CommunityContainer>
  );
}

export default Community;