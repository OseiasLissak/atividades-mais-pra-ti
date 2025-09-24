// src/components/ProductCard/ProductCard.jsx
import React from 'react';
import Button from '../Button/Button';

const ProductCard = ({ product, onAddToCart }) => { // Recebendo a nova prop
  const { title, price, rating, tag, imageUrl } = product;
  const starRating = '★'.repeat(rating);
  const buttonVariant = tag === 'Promo' ? 'outline' : 'solid';

  return (
    <div className="product-card">
      <div className="product-card__image-wrapper">
        <img
          src={imageUrl}
          alt={title}
          loading="lazy"
          className="product-card__image"
        />
        {tag && <span className="product-card__tag">{tag}</span>}
      </div>
      <div className="product-card__content">
        <h3 className="product-card__title">{title}</h3>
        <p className="product-card__price">{price}</p>
        <div className="product-card__rating" aria-label={`Avaliação de ${rating} de 5 estrelas`}>
          {starRating}
        </div>
      </div>
      <Button variant={buttonVariant} onClick={onAddToCart}> {/* Adicionando o onClick */}
        Adicionar
      </Button>
    </div>
  );
};

export default ProductCard;