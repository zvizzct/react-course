import { useState, useEffect } from 'react';

export const Header = () => {
  const [darkTheme, setDarkTheme] = useState(true);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  useEffect(() => {
    document.body.className = darkTheme ? 'dark-theme' : 'light-theme';
  }, [darkTheme]);

  return (
    <>
      <header>
        <h1>Gif Mania</h1>
        <p onClick={toggleTheme} style={{ cursor: 'pointer' }}>
          {!darkTheme ? '🌙' : '☀️'}
        </p>
      </header>
    </>
  );
};
