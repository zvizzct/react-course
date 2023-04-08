import { useState } from 'react';
import { AddCategory } from '../../03-counter-app-vite/src/components/AddCategory';
export const GiftExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCat) => {
    if (categories.includes(newCat)) return;
    setCategories([...categories, newCat]);
  };

  return (
    <>
      {/* Titulo */}

      <h1>GiftExpertApp</h1>
      {/* Input */}
      <AddCategory
        // setCategories={setCategories}
        onNewCategory={onAddCategory}
      />
      {/* Listado de gif */}
      <ol>
        {categories.map((category) => {
          return (
            <div key={category}>
              <h3>pollo</h3>
              <li>{category}</li>
            </div>
          );
        })}
      </ol>
      {/* gif item */}
    </>
  );
};
