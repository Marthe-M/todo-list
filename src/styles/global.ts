import { createGlobalStyle, withTheme } from 'styled-components';
import { ThemeProps } from './themes';

type GlobalThemeProps = {
  theme: ThemeProps;
};

const globalStyle = createGlobalStyle`
  :root {
    //dark-mode
    --dark-background: hsl(235, 21%, 11%);
    --dark-backgroundTwo: hsl(235, 24%, 19%);
    --dark-text: hsl(234, 39%, 85%);
    

    //light-mode
    --light-background: hsl(236, 33%, 92%);
    --light-backgroundTwo: hsl(0, 0%, 98%);
    --light-text: hsl(235, 19%, 35%);
   }

  body  {
    background-color: ${({ theme }: GlobalThemeProps) => theme.background};
    color: ${({ theme }: GlobalThemeProps) => theme.text};
  }

form {
  background-color: ${({ theme }: GlobalThemeProps) => theme.backgroundTwo};
  }

.input__field {
  color: ${({ theme }: GlobalThemeProps) => theme.text};
 }

 .input__field:focus {
  color: ${({ theme }: GlobalThemeProps) => theme.text};
 }

  .todo__item {
    background-color: ${({ theme }: GlobalThemeProps) => theme.backgroundTwo};
    border-bottom: 1px solid ${({ theme }: GlobalThemeProps) => theme.text};
  }

  .select__container ul {
    background-color: ${({ theme }: GlobalThemeProps) => theme.backgroundTwo};
  }

`;

export default withTheme(globalStyle);