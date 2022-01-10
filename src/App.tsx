import React, { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { TodoList } from './components/TodoList';
import { AddTodoForm } from './components/AddTodoForm';
import { SelectTodos } from './components/SelectTodos';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import ThemeContext from './contexts/ThemeContext';
import { lightTheme, darkTheme } from './styles/themes';
import useThemeMode from './hooks/useThemeMode';
import backgroundLight from "./assets/bg-desktop-light.jpg"
import backgroundDark from "./assets/bg-desktop-dark.jpg"

const initialTodos: Todo[] = [
  {
    text: 'Create React App',
    complete: true,
    display: true,
  },
  {
    text: 'Start using Typescript',
    complete: true,
    display: true,
  },
  {
    text: 'Walk the dog',
    complete: false,
    display: true,
  },
  {
    text: 'Go to the gym',
    complete: false,
    display: true,
  },
  {
    text: 'Buy groceries',
    complete: false,
    display: true,
  },
];

function App() {
  const { theme, themeToggler } = useThemeMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo: ToggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const removeTodo: RemoveTodo = (selectedTodo: Todo) => {
    const remainingTodos = todos.filter(todo => todo.text !== selectedTodo.text)
    setTodos(remainingTodos);
  };

  const showAll: ShowAll = () => {
    const showAllTodos = todos.map((todo) => {
      if (todo.display === false) {
        return {
          ...todo,
          display: true,
        };
      }
      return todo;
    });
    setTodos(showAllTodos);
  };

  const selectActive: SelectActive = () => {
    const activeTodos = todos.map((todo) => {
      if (todo.complete === false) {
        return {
          ...todo,
          display: true,
        };
      }
      if (todo.complete === true) {
        return {
          ...todo,
          display: false,
        };
      }
      return todo;
    });
    setTodos(activeTodos);
  };

  const selectCompleted: SelectCompleted = () => {
    const activeTodos = todos.map((todo) => {
      if (todo.complete === true) {
        return {
          ...todo,
          display: true,
        };
      }
      if (todo.complete === false) {
        return {
          ...todo,
          display: false,
        };
      }
      return todo;
    });
    setTodos(activeTodos);
  };

  const clearCompleted: ClearCompleted = () => {
    const filteredCompletedTodos = todos.filter(todo => todo.complete === false)
    setTodos(filteredCompletedTodos);
  };

  const addTodo: AddTodo = (text: string) => {
    const newTodo = { text, complete: false, display: true };
    setTodos([...todos, newTodo]);
  };

  const localTheme = window.localStorage.getItem('theme');

  return (
    <div className="app">
      {localTheme === 'light' ? <img src={backgroundLight} alt="background" width="100%" /> : <img src={backgroundDark} alt="background" width="100%" />}
      <div className="app__container">
        <ThemeContext>
          <ThemeProvider theme={themeMode}>
            <GlobalStyle />
            <Header switchTheme={themeToggler} />
            <AddTodoForm addTodo={addTodo} />
            <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
            <SelectTodos showAll={showAll} selectActive={selectActive} selectCompleted={selectCompleted} clearCompleted={clearCompleted} todos={todos} />
          </ThemeProvider>
        </ThemeContext>
      </div>
    </div>
  );
}

export default App;