import { useState } from 'react';
import type { Product } from '../types/product';

export const useReplacementModal = () => {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number } | null>(null);
  const [replacementState, setReplacementState] = useState({
    isOpen: false,
    productToReplace: null as Product | null,
    searchQuery: '',
  });

  const openReplacementModal = (product: Product) => {
    setReplacementState({
      isOpen: true,
      productToReplace: product,
      searchQuery: '',
    });
  };

  const closeReplacementModal = () => {
    setReplacementState({
      isOpen: false,
      productToReplace: null,
      searchQuery: '',
    });
  };

  const handleReplaceClick = (e: React.MouseEvent, product: Product) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
    openReplacementModal(product);
  };

  return {
    mousePosition,
    replacementState,
    setReplacementState,
    handleReplaceClick,
    closeReplacementModal,
  };
};
