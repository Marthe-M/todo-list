import React from 'react'

interface Props {
    todos: Todo[];
    showAll: ShowAll;
    selectActive: SelectActive;
    selectCompleted: SelectCompleted;
    clearCompleted: ClearCompleted;
}


export const SelectTodos: React.FC<Props> = ({ todos, showAll, selectActive, selectCompleted, clearCompleted }) => {
    const activeTodos = todos.filter(todo => todo.complete === false)
    return (
        <div className="select__container">
            <ul>
                <li>{activeTodos.length} items left</li>
                <span className="select__items">
                    <li onClick={() => showAll()} style={{ color: 'hsl(220, 98%, 61%)' }}>All</li>
                    <li onClick={() => selectActive()}>Active</li>
                    <li onClick={() => selectCompleted()}>Completed</li>
                </span>
                <li onClick={() => clearCompleted()} className="select__completed">Clear completed</li>
            </ul>
        </div>
    )
}

