import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');
describe('testing on GifGrid', () => {
  const category = 'Dragon ball';

  test('should show loading at first', () => {
    useFetchGifs.mockReturnValue({ images: [], isLoading: true });
    render(<GifGrid category={category} />);
    expect(screen.getByText('Loading...'));
  });

  test('should show items when loaded from useFetch', () => {
    const gifs = [
      {
        id: '123',
        title: 'Dragon Ball',
        url: 'https://localhost/go.jpg',
      },
      {
        id: '1234',
        title: 'Dragon Ball 2',
        url: 'https://localhost/go2.jpg',
      },
    ];
    useFetchGifs.mockReturnValue({ images: gifs, isLoading: false });

    render(<GifGrid category={category} />);
    expect(screen.getAllByRole('img').length).toBe(2);
  });
});
