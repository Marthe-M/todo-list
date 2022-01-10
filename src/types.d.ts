type Todo = {
  text: string;
  complete: boolean;
  display: boolean;
};

type ToggleTodo = (selectedTodo: Todo) => void;

type RemoveTodo = (selectedTodo: Todo) => void;

type SwitchTheme = () => void;

type ShowAll = () => void;

type SelectActive = () => void;

type SelectCompleted = () => void;

type ClearCompleted = () => void;

type AddTodo = (newTodo: string) => void;