import React, { useState } from 'react';
import { BsCircle } from "react-icons/bs";

interface Props {
  addTodo: AddTodo;
}

export const AddTodoForm: React.FC<Props> = ({ addTodo }) => {
  const [text, setText] = useState('');

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      addTodo(text);
      setText('');
    }}> <BsCircle style={{ fontSize: '18px', paddingLeft: '2px', marginRight: '10px' }} />
      <input
        type="text"
        className="input__field"
        value={text}
        placeholder="Create a new todo"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
    </form>
  );
};