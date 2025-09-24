// src/components/ProductCard/ProductCard.jsx
import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }

  ${({ theme }) => `
    background-color: ${theme.cardBackground};
    &:hover {
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    }
  `}
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 100%; /* Cria um contêiner quadrado */
  overflow: hidden;
`;

const CardImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

const Tag = styled.span`
  position: absolute;
  top: 12px;
  left: 12px;
  background-color: #f97316;
  color: #fff;
  font-size: 0.75rem;
  font-weight: bold;
  padding: 4px 12px;
  border-radius: 9999px;
`;

const CardContent = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const CardTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  ${({ theme }) => `
    color: ${theme.text};
  `}
`;

const CardPrice = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  color: #18181b;
  margin-top: 0.5rem;

  ${({ theme }) => `
    color: ${theme.text};
  `}
`;

const CardRating = styled.div`
  color: #f59e0b;
  margin-top: 0.5rem;
  font-size: 1.25rem;
`;

const ButtonContainer = styled.div`
  padding: 1rem;
`;

const ProductCard = ({ product, onAddToCart }) => {
  const { title, price, rating, tag, imageUrl } = product;
  const starRating = '★'.repeat(rating);
  
  const buttonVariant =
    tag === 'Promo' ? 'outline' : tag === 'Novo' ? 'ghost' : 'solid';

  return (
    <CardWrapper>
      <ImageContainer>
        <CardImage src={imageUrl} alt={title} loading="lazy" />
        {tag && <Tag>{tag}</Tag>}
      </ImageContainer>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardPrice>{price}</CardPrice>
        <CardRating aria-label={`Avaliação de ${rating} de 5 estrelas`}>
          {starRating}
        </CardRating>
      </CardContent>
      <ButtonContainer>
        <Button variant={buttonVariant} onClick={onAddToCart}>
          Adicionar
        </Button>
      </ButtonContainer>
    </CardWrapper>
  );
};

export default ProductCard;