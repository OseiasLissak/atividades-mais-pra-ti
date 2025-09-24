// src/components/SkeletonCard/SkeletonCard.jsx
import React from 'react';

const SkeletonCard = () => {
  return (
    <div className="flex flex-col bg-white dark:bg-zinc-800 rounded-xl overflow-hidden shadow-lg animate-pulse">
      <div className="w-full aspect-square bg-gray-200 dark:bg-zinc-700"></div>
      <div className="p-4 flex flex-col flex-grow">
        <div className="h-4 bg-gray-200 dark:bg-zinc-700 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-200 dark:bg-zinc-700 rounded w-1/2 mb-4"></div>
        <div className="h-4 bg-gray-200 dark:bg-zinc-700 rounded w-1/3 mt-2"></div>
        <div className="mt-4 h-12 bg-gray-200 dark:bg-zinc-700 rounded-md"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;