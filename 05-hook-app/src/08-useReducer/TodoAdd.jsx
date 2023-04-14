import { useForm } from '../hooks/useForm';

export const TodoAdd = ({ onNewTodo }) => {
  const { desc, onInputChange, onReset } = useForm({
    desc: '',
  });
  const handleTodo = (e) => {
    e.preventDefault();

    if (desc.trim().length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      desc: desc,
      done: false,
    };
    onNewTodo(newTodo);
    onReset();
  };

  return (
    <form onSubmit={handleTodo}>
      <input
        type="text"
        name="desc"
        className="form-control"
        placeholder="Aprender..."
        autoComplete="off"
        onChange={onInputChange}
      />
      <button type="submit" className="btn btn-outline-primary mt-1 btn-block">
        Agregar
      </button>
    </form>
  );
};
