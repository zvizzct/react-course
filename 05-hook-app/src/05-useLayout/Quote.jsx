import { useLayoutEffect, useRef, useState } from 'react';

export const Quote = ({ data }) => {
  // Destructuring
  const { sentence, character } = data;
  const { name } = character;

  // Hooks
  const pRef = useRef();

  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const { width, height } = pRef.current.getBoundingClientRect();
    setBoxSize({ width, height });
  }, [sentence]);

  // Render
  return (
    <>
      <blockquote
        className="blockquote text-right"
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <p ref={pRef} className="mb-0">
          {sentence}
        </p>
        <footer className="blockquote-footer">{name}</footer>
      </blockquote>
      <code>{JSON.stringify(boxSize)}</code>
    </>
  );
};
