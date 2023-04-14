import { useFetch } from '../hooks';
import { LoadingChar } from '../03-examples/LoadingChar';
import { Quote } from './Quote';

export const Layout = () => {
  const [fetchCounter, setFetchCounter] = useState(0);
  const { data, isLoading, error } = useFetch(
    `https://api.gameofthronesquotes.xyz/v1/random`,
    [fetchCounter]
  );

  const handleClick = () => {
    setFetchCounter(fetchCounter + 1);
  };

  return (
    <>
      <h1>Rick and morty Characters</h1>
      <hr />
      {error ? (
        <div>Error: {error}</div>
      ) : isLoading ? (
        <LoadingChar />
      ) : (
        <Quote data={data} />
      )}

      <button className="btn btn-primary" onClick={handleClick}>
        Next char
      </button>
    </>
  );
};
