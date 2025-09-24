// src/components/SkeletonCard/SkeletonCard.jsx
import React from 'react';
import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: .5; }
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  animation: ${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  
  background-color: ${(props) => props.theme.cardBackground};
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  padding-top: 100%; // Aspect ratio 1:1
  background-color: #e5e7eb;
  background-color: ${(props) => props.theme.foreground};
`;

const ContentPlaceholder = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Line = styled.div`
  height: 16px;
  background-color: #e5e7eb;
  border-radius: 4px;
  margin-bottom: 8px;
  background-color: ${(props) => props.theme.foreground};

  &:first-child {
    width: 75%;
  }

  &:nth-child(2) {
    width: 50%;
    margin-bottom: 16px;
  }
`;

const ButtonPlaceholder = styled.div`
  margin: 1rem;
  height: 48px;
  background-color: #e5e7eb;
  border-radius: 6px;
  background-color: ${(props) => props.theme.foreground};
`;

const SkeletonCard = () => {
  return (
    <CardWrapper>
      <ImagePlaceholder />
      <ContentPlaceholder>
        <Line />
        <Line />
        <Line style={{ width: '33.333333%' }} />
      </ContentPlaceholder>
      <ButtonPlaceholder />
    </CardWrapper>
  );
};

export default SkeletonCard;