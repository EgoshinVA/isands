import type { Product } from '../../types/product';
import s from './ReplacementModal.module.scss';
import { Modal } from '../../../../shared/lib/ui/Modal/Modal.tsx';
import { SearchInput } from '../../../../shared/lib/ui/SearchInput/SearchInput.tsx';

interface ReplacementModalProps {
  isOpen: boolean;
  onClose: () => void;
  mousePosition: { x: number; y: number } | null;
  products: Product[];
  searchQuery: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onReplace: (product: Product) => void;
}

export const ReplacementModal = ({
  isOpen,
  onClose,
  mousePosition,
  products,
  searchQuery,
  onSearchChange,
  onReplace,
}: ReplacementModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} mousePosition={mousePosition}>
      <div className={s.replacementModalContent}>
        {products.length > 3 && <SearchInput value={searchQuery} onChange={onSearchChange} />}

        <div className={s.replacementProductsList}>
          {products.map(product => (
            <div key={product.id} className={s.replacementProductItem} onClick={() => onReplace(product)}>
              <img src="select.svg" alt="select" />
              <img src={product.image} alt={product.name} className={s.replacementProductImage} />
              <h4>{product.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
};
