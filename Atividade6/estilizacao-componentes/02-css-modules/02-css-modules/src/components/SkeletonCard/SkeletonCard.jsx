import React from 'react';
import styles from './SkeletonCard.module.css'; // Importando o módulo CSS

const SkeletonCard = () => {
  return (
    <div className={styles.skeletonCard}>
      <div className={styles.image}></div>
      <div className={styles.content}>
        <div className={styles.title}></div>
        <div className={styles.title + ' ' + styles.short}></div>
        <div className={styles.text}></div>
        <div className={styles.text + ' ' + styles.short}></div>
      </div>
      <div className={styles.button}></div>
    </div>
  );
};

export default SkeletonCard;