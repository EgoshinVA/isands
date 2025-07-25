import { useEffect, useMemo } from 'react';

import type { Product } from '../types/product';
import { useAppDispatch } from '../../../shared/lib/hooks/useAppDispatch.ts';
import { useAppSelector } from '../../../shared/lib/hooks/useAppSelector.ts';
import {
  closeReplacementModal,
  loadProducts,
  openReplacementModal,
  selectDisplayedCount,
  selectAllProducts,
  selectReplacementModal,
  selectShowDifferences,
  setDisplayedCount,
  toggleDifferences,
  selectDisplayedProducts,
  replaceProducts,
} from '../store/slice.ts';

export const useComparison = () => {
  const dispatch = useAppDispatch();

  const allProducts = useAppSelector(selectAllProducts);
  const displayedProducts = useAppSelector(selectDisplayedProducts);
  const displayedCount = useAppSelector(selectDisplayedCount);
  const showDifferences = useAppSelector(selectShowDifferences);
  const replacementModal = useAppSelector(selectReplacementModal);

  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);

  const allCharacteristics = useMemo(() => {
    const characteristics = new Set<string>();
    allProducts.forEach(product => {
      Object.keys(product.specs).forEach(key => {
        characteristics.add(key);
      });
    });
    return Array.from(characteristics);
  }, [allProducts]);

  const uniqueCharacteristics = useMemo(() => {
    if (!showDifferences) return allCharacteristics;

    return allCharacteristics.filter(characteristic => {
      const values = displayedProducts.map(product => product.specs[characteristic]?.toString() ?? '');
      return new Set(values).size > 1;
    });
  }, [allCharacteristics, displayedProducts, showDifferences]);

  const hiddenProducts = useMemo(() => {
    return allProducts.slice(displayedCount);
  }, [allProducts, displayedCount]);

  const handleSetDisplayedCount = (count: number) => {
    dispatch(setDisplayedCount(Math.min(count, 6)));
  };

  const handleToggleDifferences = () => {
    dispatch(toggleDifferences());
  };

  const handleOpenReplacementModal = (product: Product) => {
    dispatch(openReplacementModal(product));
  };

  const handleCloseReplacementModal = () => {
    dispatch(closeReplacementModal());
  };

  const replaceProductHandler = (oldId: string, newId: string) => {
    dispatch(replaceProducts({ oldId, newId }));
  };

  return {
    allProducts,
    displayedProducts,
    displayedCount,
    showDifferences,
    replacementModal,
    hiddenProducts,
    uniqueCharacteristics,

    setDisplayedCount: handleSetDisplayedCount,
    toggleDifferences: handleToggleDifferences,
    openReplacementModal: handleOpenReplacementModal,
    closeReplacementModal: handleCloseReplacementModal,
    replaceProduct: replaceProductHandler,
  };
};
