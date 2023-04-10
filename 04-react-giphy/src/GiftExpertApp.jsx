import { useState } from 'react';
import { AddCategory, GifGrid, Header, GifHistory } from './components';
export const GiftExpertApp = () => {
  const [categories, setCategories] = useState([]);
  const [history, setHistory] = useState([]);

  const onSelectCategory = (selectedCat) => {
    setCategories([selectedCat]);
  };
  const onAddCategory = (newCat) => {
    if (categories.includes(newCat)) return;
    if (history && history.includes(newCat)) return;
    setCategories((prevCategories) => [newCat]);
    setHistory((prevHistory) => [newCat, ...prevHistory]);
    console.log(newCat, categories, history);
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
