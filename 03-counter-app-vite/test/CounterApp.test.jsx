import { fireEvent, getByText, render, screen } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';

describe('Pruebas en el componente <CounterApp />', () => {
  const initialValue = 100;
  test('debe de hacer match con el snapshot', () => {
    const { container } = render(<CounterApp />);
    expect(container).toMatchSnapshot();
  });
  test('debe de mostrar el valor inicial de 100', () => {
    render(<CounterApp value={initialValue} />);
    expect(screen.getByText(initialValue)).toBeTruthy();
    expect(screen.getByRole('heading', { level: 2 }).innerHTML).toContain(
      '100'
    );
  });

  test('debe de incrementar con el boton +1', () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByRole('button', { name: '+1' }));
    expect(screen.getByText(initialValue + 1)).toBeTruthy();
  });

  test('debe de decrementar con el boton -1', () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByRole('button', { name: '-1' }));
    expect(screen.getByText(initialValue - 1)).toBeTruthy();
  });

  test('debe de resetea el contador a initial', () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByRole('button', { name: '-1' }));
    fireEvent.click(screen.getByRole('button', { name: '-1' }));
    fireEvent.click(screen.getByRole('button', { name: '-1' }));
    // fireEvent.click(screen.getByText('Reset'))
    fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));
    expect(screen.getByText(initialValue)).toBeTruthy();
  });
});
