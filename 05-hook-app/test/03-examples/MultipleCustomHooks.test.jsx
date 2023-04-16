import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MultipleCustomHooks } from '../../src/03-examples/MultipleCustomHooks';
import { useFetch } from '../../src/hooks/useFetch';
import { useCounter } from '../../src/hooks/useCounter';

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Test on 03-example <MultipleCustomHooks/>', () => {
  test('should return default component', () => {
    useCounter.mockReturnValue({ counter: 1, increment: () => {} });
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      error: null,
    });
    render(<MultipleCustomHooks />);
    expect(screen.getByText('Loading...'));
    expect(screen.getByText('Rick and morty Characters'));
  });
  test('should return a name character', () => {
    useCounter.mockReturnValue({ counter: 1, increment: () => {} });

    useFetch.mockReturnValue({
      data: {
        name: 'Rick Sanchez',
        image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
        species: 'Human',
        origin: { name: 'Earth (C-137)' },
        location: { name: 'Earth (Replacement Dimension)' },
      },
      isLoading: false,
      error: null,
    });

    render(<MultipleCustomHooks />);
    expect(screen.getByText('Rick Sanchez'));
    expect(screen.getByText('Specie: Human'));
    expect(screen.getByText('Origin: Earth (C-137)'));
    expect(screen.getByText('Location: Earth (Replacement Dimension)'));
    expect(screen.queryByText('Loading...')).toBeFalsy();
  });

  test('should call increment function', () => {
    const increment = jest.fn();
    useCounter.mockReturnValue({ counter: 1, increment });

    useFetch.mockReturnValue({
      data: {
        name: 'Rick Sanchez',
        image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
        species: 'Human',
        origin: { name: 'Earth (C-137)' },
        location: { name: 'Earth (Replacement Dimension)' },
      },
      isLoading: false,
      error: null,
    });
    render(<MultipleCustomHooks />);

    const nextButton = screen.getByRole('button', { name: 'Next char' });
    fireEvent.click(nextButton);
    expect(increment).toHaveBeenCalled();
  });
});
