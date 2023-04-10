export const GifHistory = ({ history, onSelectCategory }) => {
  const handleButtonHistory = (e) => {
    const newCat = e.target.innerText;
    onSelectCategory(newCat);
  };
  return (
    <div className="section-history">
      {history
        ? history.map((category) => (
            <button
              className="btn-history"
              key={category}
              onClick={handleButtonHistory}
            >
              {category}
            </button>
          ))
        : null}
    </div>
  );
};
