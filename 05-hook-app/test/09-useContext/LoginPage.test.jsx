import { render, screen } from '@testing-library/react';
import { LoginPage } from '../../src/09-useContext';
import { UserContext } from '../../src/09-useContext/context/UserContext';

describe('testing on <LoginPage/>', () => {
  test('should return component without the user', () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />;
      </UserContext.Provider>
    );
    screen.debug();
  });

  test('should return component with the user', () => {
    const user = {
      id: 123,
      name: 'Víc',
      email: '@gmail.com',
    };
    render(
      <UserContext.Provider value={{ user }}>
        <LoginPage />
      </UserContext.Provider>
    );
  });
});
