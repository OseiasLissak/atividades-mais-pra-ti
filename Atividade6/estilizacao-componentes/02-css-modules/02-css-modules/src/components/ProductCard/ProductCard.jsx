// src/components/ProductCard/ProductCard.jsx
import React from 'react';
import Button from '../Button/Button';
import styles from './ProductCard.module.css'; // Importando o módulo CSS

const ProductCard = ({ product, onAddToCart }) => {
  const { title, price, rating, tag, imageUrl } = product;
  const starRating = '★'.repeat(rating);
  const buttonVariant =
    tag === 'Promo' ? 'outline' : tag === 'Novo' ? 'ghost' : 'solid';

  return (
    <div className={styles.productCard}>
      <div className={styles.imageWrapper}>
        <img
          src={imageUrl}
          alt={title}
          loading="lazy"
          className={styles.image}
        />
        {tag && <span className={styles.tag}>{tag}</span>}
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.price}>{price}</p>
        <div className={styles.rating} aria-label={`Avaliação de ${rating} de 5 estrelas`}>
          {starRating}
        </div>
      </div>
      {/* Adicionando a margem diretamente ao estilo do botão */}
      <Button variant={buttonVariant} onClick={onAddToCart} style={{ margin: '1rem' }}>
        Adicionar
      </Button>
    </div>
  );
};

export default ProductCard;