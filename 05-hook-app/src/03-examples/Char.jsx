import React from 'react';

export const Char = ({ data }) => {
  return (
    <div>
      <h2 className="blockquote">{data.name}</h2>
      <img src={data.image} alt={data.name} />
      <p>Specie: {data.species}</p>
      <p>Origin: {data.origin.name}</p>
      <p>Location: {data.location.name}</p>
    </div>
  );
};
