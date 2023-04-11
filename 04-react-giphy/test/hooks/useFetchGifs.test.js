const {
  render,
  screen,
  renderHook,
  waitFor,
} = require('@testing-library/react');
const { useFetchGifs } = require('../../src/hooks/useFetchGifs');

describe('testing on useFetchGifs hook', () => {
  test('should return initial state', () => {
    const { result } = renderHook(() => useFetchGifs('Dragon Ball'));
    const { images, isLoading } = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test('should return an array of images and isLoading should be false', async () => {
    const { result } = renderHook(() => useFetchGifs('Dragon Ball'));

    await waitFor(() =>
      expect(result.current.images.length).toBeGreaterThan(0)
    );

    const { images, isLoading } = result.current;

    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
