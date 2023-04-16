import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { useForm } from '../../src/hooks';

describe('testing on useForm', () => {
  const initialForm = {
    name: 'Víctor',
    email: 'vic@gmail.com',
  };

  test('should return default object', () => {
    const { result } = renderHook(() => useForm(initialForm));
    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      formState: initialForm,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    });
  });
  test('should change the value of the form', () => {
    const newName = 'Pepito';
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange } = result.current;
    act(() => {
      onInputChange({
        target: {
          name: 'name',
          value: newName,
        },
      });
    });
    expect(result.current.name).toBe('Pepito');
    expect(result.current.formState.name).toBe('Pepito');
  });
  test('should reset the value of the form', () => {
    const newName = 'Pepito';

    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange, onResetForm } = result.current;
    act(() => {
      onInputChange({
        target: {
          name: 'name',
          value: newName,
        },
      });
      onResetForm();
    });
    expect(result.current.name).toBe(initialForm.name);
    expect(result.current.formState.name).toBe(initialForm.name);
  });
});
