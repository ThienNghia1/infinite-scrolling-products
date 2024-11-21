import React from 'react';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ value, onChange }) => (
  <input
    type="text"
    placeholder="Search products..."
    value={value}
    onChange={(e) => onChange(e.target.value)}
  />
);

export default SearchInput;
