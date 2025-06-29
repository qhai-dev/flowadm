import { FC } from 'react'
import { ThemeProvider } from '@/shared/theme'
import { RegisterRouter } from  './register'
import './App.css';


const App:FC = () => {
  return (
      <ThemeProvider>
          <RegisterRouter />
      </ThemeProvider>
  )
};

export default App;
