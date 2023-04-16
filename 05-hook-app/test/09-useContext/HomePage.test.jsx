import { render, screen } from '@testing-library/react';
import { HomePage } from '../../src/09-useContext';
import { UserContext } from '../../src/09-useContext/context/UserContext';

describe('testing on <HomePage/>', () => {
  test('should return component without the user', () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <HomePage />;
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText('pre');
    expect(preTag.innerHTML).toBe('null');
  });

  test('should return component with the user', () => {
    const user = {
      id: 123,
      name: 'Víc',
      email: '@gmail.com',
    };
    render(
      <UserContext.Provider value={{ user }}>
        <HomePage />
      </UserContext.Provider>
    );
    const preTag = JSON.parse(screen.getByLabelText('pre').innerHTML);
    expect(preTag).toEqual(user);
  });
});
