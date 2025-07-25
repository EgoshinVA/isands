import React, { type SelectHTMLAttributes } from 'react';
import s from './Select.module.scss';

interface Option {
  value: string | number;
  label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: Option[];
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
}

export const Select: React.FC<SelectProps> = ({ options, value, onChange, className = '', ...props }) => {
  return (
    <div className={s.selectContainer}>
      <span className={s.label}>Отобразить товары:</span>
      <select className={`${s.select} ${className}`} value={value} onChange={onChange} {...props}>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className={s.optionDisplay}>
        {options.map(option => (
          <span
            key={`display-${option.value}`}
            className={`${s.option} ${value === option.value ? s.selected : ''}`}
            onClick={() =>
              onChange?.({
                target: { value: option.value.toString() },
              } as React.ChangeEvent<HTMLSelectElement>)
            }
          >
            {option.value}
          </span>
        ))}
      </div>
    </div>
  );
};
