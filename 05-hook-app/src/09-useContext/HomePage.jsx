import { useContext } from 'react';
import { UserContext } from './context/UserContext';

export const HomePage = () => {
  const { user, setUser } = useContext(UserContext);
  const user1 = {
    id: 123,
    name: 'Víc',
    email: 'vic@gmai.com',
  };
  const handleUser = () => {
    setUser(user1);
  };
  return (
    <>
      <h1>
        HomePage <small>{user?.name}</small>
      </h1>
      <hr />
      <button className="btn btn-primary" onClick={handleUser}>
        Add user
      </button>
      <pre aria-label="pre">{JSON.stringify(user, null, 3)}</pre>
    </>
  );
};
