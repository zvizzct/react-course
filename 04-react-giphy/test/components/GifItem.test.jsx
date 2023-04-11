import {
  fireEvent,
  render,
  screen,
  act,
  getByText,
  getByRole,
} from '@testing-library/react';
import { GifItem } from '../../src/components';

describe('Testing GifItem', () => {
  const title = 'Un titulo';
  const url = 'https://localhost/algo.jpg';
  const msg = 'copied to clipboard';
  test('Debe de hacer match con el snapshot  ', () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });
  test('debe de mostrar la imagen con el url y el alt indicado', () => {
    render(<GifItem title={title} url={url} />);
    // expect(screen.getByRole('img').src).toBe(url);
    // expect(screen.getByRole('img').alt).toBe(title);

    const { src, alt } = screen.getByRole('img');
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });
  test('displays copied message when clicked', async () => {
    render(<GifItem title={title} url={url} />);

    // Mock clipboard API
    global.navigator.clipboard = {
      writeText: jest.fn(),
    };

    await act(async () => {
      fireEvent.click(screen.getByRole('img'));
    });

    expect(global.navigator.clipboard.writeText).toHaveBeenCalledWith(url);
  });
});
