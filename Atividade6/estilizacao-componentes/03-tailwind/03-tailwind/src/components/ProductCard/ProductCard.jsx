// src/components/ProductCard/ProductCard.jsx
import React from 'react';
import Button from '../Button/Button';

const ProductCard = ({ product, onAddToCart }) => {
  const { title, price, rating, tag, imageUrl } = product;
  const starRating = '★'.repeat(rating);

  // Lógica para determinar a variante do botão com base na tag do produto
  const buttonVariant =
    tag === 'Promo' ? 'outline' : tag === 'Novo' ? 'ghost' : 'solid';

  return (
    <div className="flex flex-col bg-white dark:bg-zinc-800 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 ease-in-out hover:transform hover:-translate-y-1 hover:shadow-2xl">
      <div className="relative w-full aspect-square overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
        />
        {tag && (
          <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            {tag}
          </span>
        )}
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 line-clamp-2">
          {title}
        </h3>
        <p className="text-xl font-bold text-gray-900 dark:text-gray-100 mt-2">
          {price}
        </p>
        <div className="text-yellow-500 mt-2 text-xl" aria-label={`Avaliação de ${rating} de 5 estrelas`}>
          {starRating}
        </div>
      </div>
      <div className="p-4">
        <Button variant={buttonVariant} onClick={onAddToCart}>
          Adicionar
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;