import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newInputValue = inputValue.trim();
    if (newInputValue.length <= 1) return;
    onNewCategory(newInputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Search all the GIFs and Stickers"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
