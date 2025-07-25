import s from './ProductCard.module.scss';
import type { Product } from '../../types/product.ts';

interface ProductCardProps {
  product: Product;
  onReplace: (e: React.MouseEvent) => void;
  showReplaceButton?: boolean;
}

export const ProductCard = ({ product, onReplace, showReplaceButton = true }: ProductCardProps) => {
  return (
    <div className={s.card}>
      <div className={s.imageContainer}>
        <img src={product.image} alt={product.name} />
        {showReplaceButton && (
          <button className={s.replaceButton} onClick={onReplace} aria-label="Заменить товар">
            <img src="/arrow.svg" alt={'arrow'} />
          </button>
        )}
      </div>
      <h3 className={s.title}>{product.name}</h3>
    </div>
  );
};
