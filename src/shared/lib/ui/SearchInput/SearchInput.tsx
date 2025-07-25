import React from 'react';
import s from './SearchInput.module.scss';

interface SearchInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchInput: React.FC<SearchInputProps> = ({ value, onChange }) => {
  return (
    <div className={s.searchContainer}>
      <input type="text" value={value} onChange={onChange} placeholder={'Поиск'} className={s.searchInput} />
    </div>
  );
};
