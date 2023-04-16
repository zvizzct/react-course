import React, { useState } from 'react';
import { useFetch, useCounter } from '../hooks';
import { Char } from './Char';
import { LoadingChar } from './LoadingChar';

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);
  const { data, isLoading, error } = useFetch(
    `https://rickandmortyapi.com/api/character/${counter}`
  );
  return (
    <>
      <h1>Rick and morty Characters</h1>
      <hr />
      {error ? (
        <div>Error: {error}</div>
      ) : isLoading ? (
        <LoadingChar />
      ) : (
        <Char data={data} />
      )}

      <button className="btn btn-primary" onClick={(e) => increment()}>
        Next char
      </button>
    </>
  );
};
