import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
  };
  useEffect(() => {
    getImages();
  }, []);

  console.log(images);
  return (
    <>
      <h3>{category}</h3>
      <ol>
        {images.map(({ id, url }) => (
          <li key={id}>
            <img src={url}></img>
          </li>
        ))}
      </ol>
    </>
  );
};
