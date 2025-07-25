import s from './ComparisonTable.module.scss';
import { useComparison } from '../../hooks/useComparison';
import { Select } from '../../../../shared/lib/ui/Select/Select';
import { ProductCard } from '../ProductCard/ProductCard';
import { useReplacementModal } from '../../hooks/useReplacementModal';
import { ReplacementModal } from '../ReplacementModal/ReplacementModal';
import { SpecsTable } from '../SpecsTable/SpecsTable';
import type { Product } from '../../types/product.ts';

export const ComparisonTable = () => {
  const {
    displayedCount,
    displayedProducts,
    showDifferences,
    setDisplayedCount,
    toggleDifferences,
    uniqueCharacteristics,
    replaceProduct,
    allProducts,
  } = useComparison();

  const { mousePosition, replacementState, setReplacementState, handleReplaceClick, closeReplacementModal } =
    useReplacementModal();

  const hiddenProducts = allProducts.filter(product => !displayedProducts.some(p => p.id === product.id));

  const filteredHiddenProducts = hiddenProducts.filter(product =>
    product.name.toLowerCase().includes(replacementState.searchQuery.toLowerCase()),
  );

  const handleReplace = (newProduct: Product) => {
    if (replacementState.productToReplace) {
      replaceProduct(replacementState.productToReplace.id, newProduct.id);
    }
    closeReplacementModal();
  };

  return (
    <div className={s.comparisonPage}>
      <div className={s.header}>
        <h1 className={s.title}>Смартфоны</h1>
        <div className={s.controls}>
          <Select
            value={displayedCount}
            onChange={e => setDisplayedCount(Number(e.target.value))}
            options={[2, 3, 4, 5, 6].map(n => ({
              value: n,
              label: `Отобразить товары: ${n}`,
            }))}
          />
        </div>
      </div>

      <div className={s.productTable}>
        <div className={s.productRow}>
          <div className={s.productName}>
            <label className={s.checkbox}>
              <input type="checkbox" checked={showDifferences} onChange={toggleDifferences} />
              Показать различия
            </label>
          </div>
          <div className={s.productValues}>
            {displayedProducts.map(product => (
              <div key={product.id}>
                <ProductCard
                  product={product}
                  onReplace={e => handleReplaceClick(e, product)}
                  showReplaceButton={displayedProducts.length < 6}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <SpecsTable characteristics={uniqueCharacteristics} products={displayedProducts} />

      <ReplacementModal
        isOpen={replacementState.isOpen}
        onClose={closeReplacementModal}
        mousePosition={mousePosition}
        products={filteredHiddenProducts}
        searchQuery={replacementState.searchQuery}
        onSearchChange={e =>
          setReplacementState({
            ...replacementState,
            searchQuery: e.target.value,
          })
        }
        onReplace={handleReplace}
      />
    </div>
  );
};
