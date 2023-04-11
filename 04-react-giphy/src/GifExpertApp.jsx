import { useState } from 'react';
import { AddCategory, GifGrid, Header, GifHistory } from './components';
export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['The Office']);
  const [history, setHistory] = useState([]);

  const onSelectCategory = (selectedCat) => {
    setCategories([selectedCat]);
  };
  const onAddCategory = (newCat) => {
    if (categories.includes(newCat)) return;
    setCategories((prevCategories) => [newCat]);
    if (history && history.includes(newCat)) return;
    setHistory((prevHistory) => [newCat, ...prevHistory]);
  };

  return (
    <div className="container">
      <Header />
      <AddCategory onNewCategory={onAddCategory} />
      <GifHistory history={history} onSelectCategory={onSelectCategory} />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </div>
  );
};
