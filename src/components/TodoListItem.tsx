import React, { useState } from "react";
import { BsCircle, BsFillCheckCircleFill, BsXLg } from "react-icons/bs";

interface Props {
  todo: Todo;
  removeTodo: RemoveTodo;
  toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<Props> = ({ todo, toggleTodo, removeTodo }) => {
  const [style, setStyle] = useState({ display: 'none' });
  return (
    <li className="todo__item" style={{ display: todo.display ? 'flex' : 'none' }} onMouseEnter={e => {
      setStyle({ display: 'block' });
    }}
      onMouseLeave={e => {
        setStyle({ display: 'none' })
      }}>
      <span style={{ textDecoration: todo.complete ? 'line-through' : undefined, opacity: todo.complete ? '0.5' : '1' }} onClick={() => {
        toggleTodo(todo);
      }}>
        {todo.complete ? <BsFillCheckCircleFill style={{ color: "#829af9", paddingLeft: '6px', marginRight: '10px' }} /> : <BsCircle style={{ paddingLeft: '6px', marginRight: '10px' }} />}{' '}
        {todo.text}
      </span>
      <span style={style} className="icon" onClick={() => {
        removeTodo(todo);
      }}><BsXLg style={{ marginRight: '6px', opacity: '0.5' }} /></span>
    </li>
  );
};