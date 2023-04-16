import { renderHook } from '@testing-library/react';
import { useCounter } from '../../src/hooks/useCounter';
import { act } from 'react-dom/test-utils';

describe('Testing on useCounter', () => {
  test('should return default values', () => {
    const { result } = renderHook(() => useCounter());
    const { counter, decrement, increment, reset } = result.current;

    expect(counter).toBe(10);
    expect(decrement).toEqual(expect.any(Function));
    expect(increment).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });
  test('should generate the counter with value 100', () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter } = result.current;
    expect(counter).toBe(100);
  });
  test('should increment the counter', () => {
    const { result } = renderHook(() => useCounter());
    const { increment } = result.current;

    act(() => {
      increment(1);
      increment(2);
    });

    expect(result.current.counter).toBe(13);
  });

  test('should decrement the counter', () => {
    const { result } = renderHook(() => useCounter());
    const { decrement } = result.current;

    act(() => {
      decrement(1);
      decrement(2);
    });

    expect(result.current.counter).toBe(7);
  });

  test('should reset the counter', () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter, increment, reset } = result.current;
    act(() => {
      increment();
      reset();
    });
    expect(result.current.counter).toBe(100);
  });
});
