import s from './SpecsTable.module.scss';

interface SpecsTableProps {
  characteristics: string[];
  products: Array<{
    id: string;
    specs: Record<string, string | number | boolean>;
  }>;
}

export const SpecsTable = ({ characteristics, products }: SpecsTableProps) => {
  return (
    <div className={s.specsTableWrapper}>
      <div className={s.specsTableContainer}>
        <div className={s.specsTable}>
          {characteristics.map(spec => (
            <div key={spec} className={s.specRow}>
              <div className={s.specName}>{spec.toUpperCase()}</div>
              <div className={s.specValues}>
                {products.map(product => {
                  const value = product.specs[spec];
                  let displayValue;

                  if (typeof value === 'boolean') {
                    displayValue = <img src={value ? 'true.svg' : 'false.svg'} alt={value ? 'yes' : 'no'} />;
                  } else {
                    displayValue = String(value || '-');
                  }

                  return (
                    <div key={`${product.id}-${spec}`} className={s.specValue}>
                      {displayValue}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
