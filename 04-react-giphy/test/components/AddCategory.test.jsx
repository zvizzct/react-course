import { AddCategory } from '../../src/components/AddCategory';
import { fireEvent, render, screen } from '@testing-library/react';
describe('Test on AddCategory', () => {
  const onNewCategory = jest.fn();
  const inputValue = 'Dragon Ball';
  const inputValueShort = '';

  test('Should change the input text', () => {
    render(<AddCategory onNewCategory={onNewCategory} />);
    const input = screen.getByRole('textbox');
    fireEvent.input(input, { target: { value: inputValue } });
    expect(input.value).toBe(inputValue);
  });

  test('Should call onNewCategory if input has a value', () => {
    render(<AddCategory onNewCategory={onNewCategory} />);
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);
    expect(input.value).toBe('');
    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toBeCalledWith(inputValue);
  });
  test('Should not call onNewCategory if input is <= 1', () => {
    const onNewCategory = jest.fn();

    render(<AddCategory onNewCategory={onNewCategory} />);
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: inputValueShort } });
    fireEvent.submit(form);
    expect(onNewCategory).not.toHaveBeenCalled;
  });
});
