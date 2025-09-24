import React from 'react';

const SkeletonCard = () => {
  return (
    <div className="skeleton-card">
      <div className="skeleton-card__image"></div>
      <div className="skeleton-card__content">
        <div className="skeleton-card__title"></div>
        <div className="skeleton-card__title short"></div>
        <div className="skeleton-card__text"></div>
        <div className="skeleton-card__text short"></div>
      </div>
      <div className="skeleton-card__button"></div>
    </div>
  );
};

export default SkeletonCard;