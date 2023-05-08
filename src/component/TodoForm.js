import { useState, useEffect, useRef } from 'react';

function TodoForm(props) {
  const [input, setInput] = useState('');
  const [number, setNumber] = useState(1);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  })

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setNumber(number + 1);

    props.onSubmit({
      id: number,
      text: input
    });

    setInput('');
  }

  return (
    <form id="todoForm" className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a todo"
        value={input}
        name="text"
        className="todo-input"
        onChange={handleChange}
        ref={inputRef}
      />
      <button className="todo-button">Add todo</button>
    </form>
  )
}

export default TodoForm
