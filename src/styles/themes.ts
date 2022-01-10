export interface ThemeProps {
  background: string;
  backgroundTwo: string;
  text: string;
}

export const darkTheme: ThemeProps = {
  background: 'var(--dark-background)',
  backgroundTwo: 'var(--dark-backgroundTwo)',
  text: 'var(--dark-text)',
};

export const lightTheme: ThemeProps = {
  background: 'var(--light-background)',
  backgroundTwo: 'var(--light-backgroundTwo)',
  text: 'var(--light-text)',
};