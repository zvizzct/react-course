import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
export const GiftExpertApp = () => {
  const [categories, setCategories] = useState(['Dragon Ball']);

  const onAddCategory = (newCat) => {
    if (categories.includes(newCat)) return;
    setCategories([...categories, newCat]);
  };

  return (
    <>
      <h1>GiftExpertApp</h1>

      <AddCategory onNewCategory={onAddCategory} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
